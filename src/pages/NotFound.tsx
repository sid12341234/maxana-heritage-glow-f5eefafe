import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="flex min-h-[70vh] items-center justify-center">
        <div className="text-center">
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">
            Page Not Found
          </p>
          <h1 className="font-heading text-6xl md:text-8xl mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-8">
            The page you're looking for doesn't exist.
          </p>
          <Button variant="luxury" size="lg" asChild>
            <Link to="/">Return Home</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
