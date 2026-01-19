
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plane, Train, MapPin, Users, Star, Phone, Mail, Calendar, Shield, Award, Clock } from "lucide-react";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Destinations from "@/components/Destinations";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      {/* Navigation */}
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <Hero />
      <Services />
      <Destinations />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
