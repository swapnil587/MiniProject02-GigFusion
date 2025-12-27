import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiTool,
  FiTruck,
  FiSearch,
  FiChevronRight,
  FiX,
  FiCode,
  FiDatabase,
  FiCloud,
  FiServer,
  FiMonitor,
  FiShield,
  FiPackage,
} from "react-icons/fi";
import { useState } from "react";
import Video01 from "../components/Assets/Videos/ServicePageBgVideo.mp4";
import CountDownNumbersForServicePage from "../components/CountDownNumbersForServicePage";
import ServiceSpecilist from "../components/services/ServiceSpecilist";

export default function Services() {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);

 
  const serviceDetails = {
    "Software Engineer": [
      "Web & Mobile App Development",
      "API Development",
      "Cloud Deployment",
      "Database Optimization",
      "CI/CD Pipelines",
    ],
    "Business Consultant": [
      "Market Analysis",
      "Business Strategy",
      "Growth Planning",
      "Risk Management",
    ],
    "Data Analyst": [
      "Data Cleaning",
      "Dashboards",
      "Predictive Analytics",
      "BI Tools",
    ],
    "IT Administrator": [
      "Server Management",
      "Network Security",
      "Cloud Infrastructure",
      "Backup & Recovery",
    ],
    "Cybersecurity Specialist": [
      "Penetration Testing",
      "Threat Monitoring",
      "Security Audits",
      "Compliance",
    ],
    "Content Creator": [
      "Video Editing",
      "Social Media",
      "SEO Content",
      "Branding",
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* 🔹 HERO VIDEO */}
      <div className="
  relative overflow-hidden
  h-[70vh] sm:h-[75vh] md:h-[85vh] lg:h-[calc(100vh-80px)]
">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover brightness-50"
  >
    <source src={Video01} type="video/mp4" />
  </video>

  {/* Gradient overlay for readability */}
  <div className="
    absolute inset-0
    bg-gradient-to-t from-black/60 via-black/20 to-transparent
  " />

  {/* Center content */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
    <h1 className="text-3xl sm:text-4xl md:text-5xl  font-bold text-center mb-4">
      Gig Experts Services
    </h1>

    <p className="text-lg  md:text-xl text-center max-w-2xl text-gray-200">
      You bring the skill. We'll make earning easy.
    </p>

    <motion.button
      onClick={() => navigate("/login")}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="mt-8 px-12 md:px-14 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 
                 rounded-full text-white  shadow-lg"
    >
      <span className="text-xl md:text-2xl font-semibold md:font-bold ">Join Us →</span>
    </motion.button>
  </div>

  {/* 🔢 COUNTDOWN OVER VIDEO */}
  <CountDownNumbersForServicePage />
</div>


     

      <div className="p-4 md:p-10">
       
       <ServiceSpecilist/>

      {/* 🔹 TRUST INDICATORS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center py-16">
        {[
          { icon: <FiTool size={32} />, text: "Expert Professionals" },
          { icon: <FiSearch size={32} />, text: "Easy Booking" },
          { icon: <FiPackage size={32} />, text: "Quality Service" },
          { icon: <FiTruck size={32} />, text: "Timely Delivery" },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-3">
            <div className="text-color1">{item.icon}</div>
            <span className="font-semibold text-stdBlue">{item.text}</span>
          </div>
        ))}
      </div>

      </div>
      
    </div>
  );
}
