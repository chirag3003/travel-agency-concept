
import { Button } from "@/components/ui/button";
import { Plane } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Plane className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">WanderWings</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
            <a href="/#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
            <Link to="/packages" className="text-gray-700 hover:text-blue-600 transition-colors">Packages</Link>
            <a href="/#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Reviews</a>
            <a href="/#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            <Button className="bg-orange-500 hover:bg-orange-600 hover:scale-105 transition-transform">Book Now</Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
