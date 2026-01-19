import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Heart, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";

const Packages = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Packages' },
    { id: 'student', label: 'Student Special' },
    { id: 'family', label: 'Family Special' },
    { id: 'couple', label: 'Couple Special' },
    { id: 'adventure', label: 'Adventure' },
    { id: 'luxury', label: 'Luxury' }
  ];

  const packages = [
    {
      id: 1,
      title: "Golden Triangle Discovery",
      destinations: ["Delhi", "Agra", "Jaipur"],
      duration: "7 Days 6 Nights",
      price: "₹45,999",
      originalPrice: "₹55,999",
      rating: 4.8,
      reviews: 156,
      category: "family",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      highlights: ["Taj Mahal Visit", "Palace Tours", "Cultural Shows"],
      badge: "Family Special"
    },
    {
      id: 2,
      title: "Kerala Backwaters & Hills",
      destinations: ["Kochi", "Munnar", "Alleppey", "Thekkady"],
      duration: "8 Days 7 Nights",
      price: "₹38,999",
      originalPrice: "₹48,999",
      rating: 4.9,
      reviews: 203,
      category: "couple",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      highlights: ["Houseboat Stay", "Tea Gardens", "Spice Plantations"],
      badge: "Couple Special"
    },
    {
      id: 3,
      title: "Goa Beach Paradise",
      destinations: ["North Goa", "South Goa", "Panjim"],
      duration: "5 Days 4 Nights",
      price: "₹22,999",
      originalPrice: "₹28,999",
      rating: 4.6,
      reviews: 89,
      category: "student",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      highlights: ["Beach Activities", "Water Sports", "Night Markets"],
      badge: "Student Special"
    },
    {
      id: 4,
      title: "Himalayan Adventure",
      destinations: ["Manali", "Leh", "Ladakh", "Srinagar"],
      duration: "10 Days 9 Nights",
      price: "₹65,999",
      originalPrice: "₹75,999",
      rating: 4.7,
      reviews: 134,
      category: "adventure",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      highlights: ["Mountain Trekking", "River Rafting", "Monasteries"],
      badge: "Adventure"
    },
    {
      id: 5,
      title: "Rajasthan Royal Heritage",
      destinations: ["Udaipur", "Jodhpur", "Jaisalmer", "Bikaner"],
      duration: "9 Days 8 Nights",
      price: "₹85,999",
      originalPrice: "₹95,999",
      rating: 4.9,
      reviews: 67,
      category: "luxury",
      image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      highlights: ["Palace Hotels", "Desert Safari", "Cultural Events"],
      badge: "Luxury"
    },
    {
      id: 6,
      title: "South India Temple Trail",
      destinations: ["Chennai", "Madurai", "Rameswaram", "Kanyakumari"],
      duration: "6 Days 5 Nights",
      price: "₹32,999",
      originalPrice: "₹42,999",
      rating: 4.5,
      reviews: 98,
      category: "family",
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      highlights: ["Ancient Temples", "Cultural Heritage", "Beach Views"],
      badge: "Family Special"
    }
  ];

  const filteredPackages = activeCategory === 'all' 
    ? packages 
    : packages.filter(pkg => pkg.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Our Travel <span className="text-orange-500">Packages</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-12"
          >
            Discover handcrafted travel experiences designed for every type of traveler. 
            From budget-friendly student specials to luxurious getaways.
          </motion.p>
          
          {/* Category Filters */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-4"
          >
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-blue-600 hover:bg-blue-700 shadow-lg scale-105" 
                    : "border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300"
                }`}
              >
                {category.label}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 min-h-[600px]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredPackages.map((pkg) => (
                <motion.div
                  layout
                  key={pkg.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group h-full flex flex-col border-0 bg-white/80 backdrop-blur-sm">
                    <div className="relative overflow-hidden">
                      <img 
                        src={pkg.image} 
                        alt={pkg.title}
                        className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <Badge className="absolute top-4 left-4 bg-orange-500/90 backdrop-blur-sm hover:bg-orange-600">
                        {pkg.badge}
                      </Badge>
                      <button className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2.5 hover:bg-white transition-all hover:scale-110 shadow-sm group/heart">
                        <Heart className="h-4 w-4 text-gray-600 group-hover/heart:text-red-500 group-hover/heart:fill-red-500 transition-colors" />
                      </button>
                    </div>
                    
                    <CardHeader className="pb-4 flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                          {pkg.title}
                        </CardTitle>
                      </div>
                      
                      <div className="flex items-center gap-1 mb-3">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-bold text-gray-900">{pkg.rating}</span>
                        <span className="text-sm text-gray-500">({pkg.reviews} reviews)</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-gray-600 mb-2">
                        <MapPin className="h-4 w-4 text-blue-500" />
                        <span className="text-sm font-medium line-clamp-1">{pkg.destinations.join(" → ")}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-gray-600 mb-4">
                        <Clock className="h-4 w-4 text-blue-500" />
                        <span className="text-sm font-medium">{pkg.duration}</span>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex flex-wrap gap-2">
                          {pkg.highlights.slice(0, 3).map((highlight, index) => (
                            <Badge key={index} variant="secondary" className="text-xs bg-blue-50 text-blue-700 hover:bg-blue-100">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="pt-0 border-t border-gray-100 bg-gray-50/50 p-6">
                      <div className="flex items-end justify-between mb-4">
                        <div>
                          <span className="text-sm text-gray-500 block mb-1">Starting from</span>
                          <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold text-blue-600">{pkg.price}</span>
                            <span className="text-sm text-gray-400 line-through decoration-red-400">{pkg.originalPrice}</span>
                          </div>
                        </div>
                        <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
                          Save {Math.round((parseInt(pkg.originalPrice.replace(/[^0-9]/g, '')) - parseInt(pkg.price.replace(/[^0-9]/g, ''))) / parseInt(pkg.originalPrice.replace(/[^0-9]/g, '')) * 100)}%
                        </span>
                      </div>
                      
                      <div className="flex gap-3">
                        <Button variant="outline" className="flex-1 border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300 font-semibold group/btn">
                          View Details
                        </Button>
                        <Button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
                          Book Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredPackages.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No packages found</h3>
              <p className="text-gray-500">Try selecting a different category or view all packages.</p>
              <Button 
                variant="link" 
                onClick={() => setActiveCategory('all')}
                className="mt-4 text-blue-600"
              >
                View all packages
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-teal-600">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Can't Find Your Perfect Package?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let us create a customized travel experience just for you. Our travel experts will design 
            the perfect itinerary based on your preferences and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-lg px-8 py-3 hover:scale-105 transition-transform shadow-lg">
              Customize Package
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3 bg-transparent hover:scale-105 transition-transform">
              Contact Expert
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Packages;
