import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Users } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          Discover Your Next
          <span className="block text-orange-400">Adventure</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-8 text-gray-200"
        >
          From dream destinations to seamless bookings - we make travel effortless
        </motion.p>
        
        {/* Quick Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white/95 backdrop-blur-md rounded-2xl p-6 mb-8 shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div className="space-y-2 text-left">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-orange-500" />
                Destination
              </label>
              <input 
                type="text" 
                placeholder="Where to?" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none"
              />
            </div>
            <div className="space-y-2 text-left">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Calendar className="h-4 w-4 text-orange-500" />
                Check-in
              </label>
              <input 
                type="date" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none"
              />
            </div>
            <div className="space-y-2 text-left">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Users className="h-4 w-4 text-orange-500" />
                Travelers
              </label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white transition-all outline-none">
                <option>1 Person</option>
                <option>2 People</option>
                <option>3+ People</option>
              </select>
            </div>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 h-12 w-full transition-all duration-300 transform hover:scale-105">
              Search Packages
            </Button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
            Explore Packages
          </Button>
          <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-3 bg-transparent transition-all duration-300 hover:scale-105">
            Plan My Trip
          </Button>
        </motion.div>
      </div>

      {/* Floating Stats */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex space-x-8 text-white"
      >
        {[
          { number: "500+", label: "Happy Travelers" },
          { number: "50+", label: "Destinations" },
          { number: "24/7", label: "Support" }
        ].map((stat, index) => (
          <div key={index} className="text-center px-6 py-2 rounded-lg backdrop-blur-sm bg-white/10">
            <div className="text-3xl font-bold text-orange-400">{stat.number}</div>
            <div className="text-sm text-gray-200">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
