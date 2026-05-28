import React, { createContext, useContext, useEffect, useRef, useState, ReactNode } from "react";

type SoundName = "click" | "add-to-cart" | "success";

interface SoundContextType {
  isMuted: boolean;
  toggleMute: () => void;
  play: (name: SoundName) => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

const STORAGE_KEY = "jsv_sound_muted";
const SOURCES: Record<SoundName, string> = {
  click: "/sounds/click.mp3",
  "add-to-cart": "/sounds/add-to-cart.mp3",
  success: "/sounds/success.mp3",
};

export const useSound = () => {
  const ctx = useContext(SoundContext);
  if (!ctx) throw new Error("useSound must be used within SoundProvider");
  return ctx;
};

export const SoundProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isMuted, setIsMuted] = useState(false);
  const audioCache = useRef<Record<string, HTMLAudioElement>>({});

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored !== null) setIsMuted(stored === "1");
  }, []);

  const toggleMute = () => {
    setIsMuted((m) => {
      const next = !m;
      localStorage.setItem(STORAGE_KEY, next ? "1" : "0");
      return next;
    });
  };

  const play = (name: SoundName) => {
    if (isMuted) return;
    try {
      let audio = audioCache.current[name];
      if (!audio) {
        audio = new Audio(SOURCES[name]);
        audio.volume = name === "success" ? 0.35 : 0.22;
        audioCache.current[name] = audio;
      }
      audio.currentTime = 0;
      void audio.play().catch(() => {});
    } catch {}
  };

  return (
    <SoundContext.Provider value={{ isMuted, toggleMute, play }}>
      {children}
    </SoundContext.Provider>
  );
};
