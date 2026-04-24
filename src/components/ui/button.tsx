import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 ease-out hover:scale-105 active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:hover:scale-100 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft hover:shadow-elegant rounded-2xl",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-2xl",
        outline:
          "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground rounded-2xl",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-2xl",
        ghost: "hover:bg-accent hover:text-accent-foreground rounded-2xl",
        link: "text-primary underline-offset-4 hover:underline",
        luxury:
          "bg-primary text-primary-foreground hover:opacity-90 shadow-elegant hover:shadow-[0_0_24px_-4px_hsl(var(--gold)/0.5),0_12px_48px_-12px_hsl(var(--primary)/0.3)] tracking-[0.2em] uppercase text-xs font-semibold rounded-full",
        gold:
          "bg-gradient-to-r from-accent via-accent/90 to-accent text-foreground hover:opacity-90 tracking-[0.2em] uppercase text-xs font-semibold rounded-full shadow-gold hover:shadow-[0_0_28px_-2px_hsl(var(--gold)/0.6)]",
        hero:
          "bg-primary text-primary-foreground hover:opacity-90 px-10 py-5 text-sm tracking-[0.2em] uppercase shadow-luxury hover:shadow-[0_0_32px_-4px_hsl(var(--gold)/0.55),0_20px_60px_-20px_hsl(var(--primary)/0.4)] rounded-full font-semibold",
        heroOutline:
          "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground px-10 py-5 text-sm tracking-[0.2em] uppercase rounded-full font-semibold",
      },
      size: {
        default: "h-12 px-8 py-3",
        sm: "h-10 px-6",
        lg: "h-14 px-10 text-base",
        xl: "h-16 px-12 text-lg",
        icon: "h-12 w-12 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
