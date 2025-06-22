
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Star } from "lucide-react";

const Destinations = () => {
  const destinations = [
    {
      name: "Goa Beach Paradise",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹15,999",
      duration: "4 Days / 3 Nights",
      rating: 4.8,
      features: ["Beach Resort", "Water Sports", "Nightlife"]
    },
    {
      name: "Kashmir Valley",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹25,999",
      duration: "6 Days / 5 Nights",
      rating: 4.9,
      features: ["Houseboat Stay", "Dal Lake", "Snow Activities"]
    },
    {
      name: "Rajasthan Heritage",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹22,999",
      duration: "7 Days / 6 Nights",
      rating: 4.7,
      features: ["Palace Stay", "Desert Safari", "Cultural Tours"]
    },
    {
      name: "Kerala Backwaters",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹18,999",
      duration: "5 Days / 4 Nights",
      rating: 4.6,
      features: ["Houseboat", "Ayurveda Spa", "Tea Gardens"]
    },
    {
      name: "Himachal Adventure",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹19,999",
      duration: "6 Days / 5 Nights",
      rating: 4.8,
      features: ["Mountain Views", "Adventure Sports", "Hill Stations"]
    },
    {
      name: "Golden Triangle",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹21,999",
      duration: "8 Days / 7 Nights",
      rating: 4.9,
      features: ["Taj Mahal", "Historical Sites", "Cultural Experience"]
    }
  ];

  return (
    <section id="destinations" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Popular <span className="text-orange-500">Destinations</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover incredible places with our handpicked travel packages designed for unforgettable experiences
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((destination, index) => (
          <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="relative overflow-hidden">
              <img 
                src={destination.image} 
                alt={destination.name}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4">
                <Badge className="bg-white/90 text-gray-900 hover:bg-white">
                  <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                  {destination.rating}
                </Badge>
              </div>
              <div className="absolute top-4 left-4">
                <Badge className="bg-orange-500 hover:bg-orange-600">
                  {destination.duration}
                </Badge>
              </div>
            </div>
            
            <CardContent className="p-6">
              <div className="flex items-center mb-2">
                <MapPin className="h-4 w-4 text-gray-500 mr-1" />
                <h3 className="text-xl font-bold text-gray-900">{destination.name}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {destination.features.map((feature, idx) => (
                  <Badge key={idx} variant="secondary" className="text-xs">
                    {feature}
                  </Badge>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-blue-600">{destination.price}</span>
                  <span className="text-gray-500 text-sm ml-1">per person</span>
                </div>
                <Button className="bg-orange-500 hover:bg-orange-600">
                  Book Now
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
          View All Destinations
        </Button>
      </div>
    </section>
  );
};

export default Destinations;
