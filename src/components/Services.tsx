import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, Train, MapPin, Hotel, Shield, Calendar, Users, Award } from "lucide-react";
import { motion } from "framer-motion";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
        >
          Your Travel, <span className="text-blue-600">Our Expertise</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          From planning your dream vacation to booking your tickets, we handle every detail 
          so you can focus on creating memories
        </motion.p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map((service, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg h-full">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-blue-500/20">
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
          </motion.div>
        ))}
      </motion.div>

      {/* Why Choose Us Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-20 bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl"
      >
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Why Choose WanderWings?</h3>
          <p className="text-xl opacity-90">Your trusted travel partner for over a decade</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: Award, title: "Expert Planning", desc: "Personalized itineraries crafted by travel experts" },
            { icon: Shield, title: "Secure Booking", desc: "Safe and secure payment with instant confirmation" },
            { icon: Calendar, title: "24/7 Support", desc: "Round-the-clock assistance for all your travel needs" },
            { icon: Users, title: "Happy Customers", desc: "Join thousands of satisfied travelers worldwide" }
          ].map((item, index) => (
            <div key={index} className="text-center group">
              <item.icon className="h-12 w-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-xl font-bold mb-2">{item.title}</h4>
              <p className="opacity-90">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
