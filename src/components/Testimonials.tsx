import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      avatar: "PS",
      rating: 5,
      text: "WanderWings made our Kashmir trip absolutely magical! From booking to the actual trip, everything was perfectly organized. The houseboat experience was unforgettable!",
      trip: "Kashmir Valley Package"
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi",
      avatar: "RK",
      rating: 5,
      text: "Excellent service for IRCTC bookings! They managed to get us tatkal tickets during peak season. Very reliable and professional team.",
      trip: "Train Booking Service"
    },
    {
      name: "Anita Desai",
      location: "Bangalore",
      avatar: "AD",
      rating: 5,
      text: "Our family trip to Goa was fantastic! The resort they booked was amazing and the water sports activities were well-coordinated. Highly recommended!",
      trip: "Goa Beach Paradise"
    },
    {
      name: "Vikram Singh",
      location: "Jaipur",
      avatar: "VS",
      rating: 5,
      text: "Professional service and great prices for international flights. They helped us find the best deals for our Europe trip and handled all the documentation smoothly.",
      trip: "International Flight Booking"
    },
    {
      name: "Meera Patel",
      location: "Ahmedabad",
      avatar: "MP",
      rating: 5,
      text: "The Golden Triangle tour was well-planned with comfortable accommodations and knowledgeable guides. Every detail was taken care of perfectly!",
      trip: "Golden Triangle Package"
    },
    {
      name: "Suresh Reddy",
      location: "Hyderabad",
      avatar: "SR",
      rating: 5,
      text: "Amazing Kerala backwater experience! The houseboat was luxurious and the Ayurveda spa sessions were rejuvenating. Will definitely book again!",
      trip: "Kerala Backwaters"
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            What Our <span className="text-blue-600">Travelers Say</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Don't just take our word for it - hear from thousands of happy travelers who've experienced the WanderWings difference
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur-sm h-full flex flex-col">
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center mb-4">
                    <Quote className="h-8 w-8 text-blue-200 mr-2" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 italic flex-grow">"{testimonial.text}"</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10 mr-3">
                        <AvatarImage src="" />
                        <AvatarFallback className="bg-blue-600 text-white">{testimonial.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">{testimonial.location}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="text-xs text-blue-600 font-medium">{testimonial.trip}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "1000+", label: "Happy Customers" },
              { number: "4.9/5", label: "Average Rating" },
              { number: "50+", label: "Destinations" },
              { number: "24/7", label: "Customer Support" }
            ].map((stat, index) => (
              <div key={index}>
                <motion.div 
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + (index * 0.1), type: "spring", stiffness: 100 }}
                  className="text-3xl font-bold text-blue-600 mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
