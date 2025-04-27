
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16">
        <div className="text-center max-w-md">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-electric-blue">404</h1>
          <p className="text-xl text-gray-300 mb-6">
            Looks like you've followed a broken link or entered a URL that doesn't exist on this site.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => window.history.back()} 
              variant="outline" 
              className="flex items-center gap-2 border-electric-blue/30 text-electric-blue hover:bg-electric-blue/10"
            >
              <ArrowLeft size={18} />
              Go Back
            </Button>
            <Button asChild className="bg-electric-blue hover:bg-electric-blue/90 text-white">
              <Link to="/" className="flex items-center gap-2">
                <Home size={18} />
                Return to Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
