
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, Train, MapPin, Hotel, Shield, Calendar, Users, Award } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: MapPin,
      title: "Tourism Packages",
      description: "Curated travel experiences from adventure tours to luxury getaways",
      features: ["Custom itineraries", "Group & solo packages", "All-inclusive deals"]
    },
    {
      icon: Plane,
      title: "Flight Booking",
      description: "Best deals on domestic and international flights with instant confirmation",
      features: ["Competitive prices", "24/7 booking", "Easy cancellation"]
    },
    {
      icon: Train,
      title: "IRCTC Services",
      description: "Hassle-free train ticket booking and tatkal bookings",
      features: ["Quick booking", "Tatkal expertise", "Seat preferences"]
    },
    {
      icon: Hotel,
      title: "Hotel Reservations",
      description: "Handpicked accommodations from budget stays to luxury resorts",
      features: ["Best rates", "Verified properties", "Instant confirmation"]
    },
    {
      icon: Shield,
      title: "Travel Insurance",
      description: "Comprehensive coverage for worry-free travel experiences",
      features: ["Medical coverage", "Trip cancellation", "Baggage protection"]
    },
    {
      icon: Users,
      title: "Group Tours",
      description: "Specially designed packages for families, friends, and corporate groups",
      features: ["Group discounts", "Dedicated guide", "Flexible dates"]
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Your Travel, <span className="text-blue-600">Our Expertise</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          From planning your dream vacation to booking your tickets, we handle every detail 
          so you can focus on creating memories
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
              <CardDescription className="text-gray-600">{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-20 bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl p-8 md:p-12 text-white">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Why Choose WanderWings?</h3>
          <p className="text-xl opacity-90">Your trusted travel partner for over a decade</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <Award className="h-12 w-12 mx-auto mb-4" />
            <h4 className="text-xl font-bold mb-2">Expert Planning</h4>
            <p className="opacity-90">Personalized itineraries crafted by travel experts</p>
          </div>
          <div className="text-center">
            <Shield className="h-12 w-12 mx-auto mb-4" />
            <h4 className="text-xl font-bold mb-2">Secure Booking</h4>
            <p className="opacity-90">Safe and secure payment with instant confirmation</p>
          </div>
          <div className="text-center">
            <Calendar className="h-12 w-12 mx-auto mb-4" />
            <h4 className="text-xl font-bold mb-2">24/7 Support</h4>
            <p className="opacity-90">Round-the-clock assistance for all your travel needs</p>
          </div>
          <div className="text-center">
            <Users className="h-12 w-12 mx-auto mb-4" />
            <h4 className="text-xl font-bold mb-2">Happy Customers</h4>
            <p className="opacity-90">Join thousands of satisfied travelers worldwide</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
