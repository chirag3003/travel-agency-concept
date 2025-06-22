
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          Discover Your Next
          <span className="block text-orange-400">Adventure</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in delay-200">
          From dream destinations to seamless bookings - we make travel effortless
        </p>
        
        {/* Quick Search Bar */}
        <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 mb-8 shadow-2xl animate-fade-in delay-300">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Destination
              </label>
              <input 
                type="text" 
                placeholder="Where to?" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Check-in
              </label>
              <input 
                type="date" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Users className="h-4 w-4" />
                Travelers
              </label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>1 Person</option>
                <option>2 People</option>
                <option>3+ People</option>
              </select>
            </div>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 h-12">
              Search Packages
            </Button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-400">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
            Explore Packages
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-3">
            Plan My Trip
          </Button>
        </div>
      </div>

      {/* Floating Stats */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex space-x-8 text-white">
        <div className="text-center">
          <div className="text-3xl font-bold">500+</div>
          <div className="text-sm">Happy Travelers</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold">50+</div>
          <div className="text-sm">Destinations</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold">24/7</div>
          <div className="text-sm">Support</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
