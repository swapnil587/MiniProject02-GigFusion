import React, { useState } from "react";
import {
  FiTool,
  FiTruck,
  FiChevronRight,
  FiCode,
  FiDatabase,
  FiCloud,
  FiMonitor,
  FiPackage,
  FiHome,
} from "react-icons/fi";

function ServiceSpecilist() {
  const [showAll, setShowAll] = useState(false);

  const mainServices = [
    {
      title: "Technology & IT",
      icon: <FiCode size={32} className="text-color1" />,
      description: "Web development, apps, cloud, data, and technical solutions.",
      bg: "bg-gradient-to-br from-blue-50 to-blue-100",
    },
    {
      title: "Business & Consulting",
      icon: <FiCloud size={32} className="text-stdBlue" />,
      description: "Business strategy, marketing, finance, and consulting services.",
      bg: "bg-gradient-to-br from-orange-50 to-orange-100",
    },
    {
      title: "Design & Creative",
      icon: <FiMonitor size={32} className="text-color1" />,
      description: "Graphic design, video editing, content creation, and branding.",
      bg: "bg-gradient-to-br from-purple-50 to-purple-100",
    },
    {
      title: "Home Help & Cleaning",
      icon: <FiHome size={32} className="text-color1" />,
      description: "House cleaning, utensils, laundry, and daily home assistance.",
      bg: "bg-gradient-to-br from-blue-50 to-blue-100",
    },
    {
      title: "Repair & Maintenance",
      icon: <FiTool size={32} className="text-stdBlue" />,
      description: "Electrician, plumber, carpenter, and basic home repairs.",
      bg: "bg-gradient-to-br from-green-50 to-green-100",
    },
    {
      title: "Shifting & Manual Work",
      icon: <FiTruck size={32} className="text-color1" />,
      description: "Loading, unloading, packing, and physical helper work.",
      bg: "bg-gradient-to-br from-orange-50 to-orange-100",
    },
    {
      title: "Writing & Translation",
      icon: <FiDatabase size={32} className="text-stdBlue" />,
      description: "Content writing, proofreading, and translations.",
      bg: "bg-gradient-to-br from-yellow-50 to-yellow-100",
    },
    {
      title: "Delivery & Errands",
      icon: <FiPackage size={32} className="text-stdBlue" />,
      description: "Pickup, grocery runs, document delivery, errands.",
      bg: "bg-gradient-to-br from-yellow-50 to-yellow-100",
    },
  ];

  // ✅ Mobile logic only
  const visibleServices = showAll
    ? mainServices
    : mainServices.slice(0, 6);

  return (
    <div>
      {/* SERVICES GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleServices.map((service, i) => (
          <div
            key={i}
            className={`${service.bg} rounded-2xl p-6 shadow-lg 
                        hover:-translate-y-1 transition cursor-pointer`}
          >
            <div className="flex flex-col items-center text-center gap-4">
              <div className="bg-white p-4 rounded-full shadow">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-stdBlue">
                {service.title}
              </h3>

              <p className="text-gray-600">{service.description}</p>

              <span className="text-color1 font-semibold flex items-center">
                Book Now <FiChevronRight className="ml-1" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* VIEW MORE BUTTON (MOBILE ONLY) */}
      <div className="mt-8 flex justify-center lg:hidden">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-8 py-2 rounded-full bg-stdBlue text-white font-semibold
                     hover:bg-color1 transition"
        >
          {showAll ? "View Less" : "View More"}
        </button>
      </div>
    </div>
  );
}

export default ServiceSpecilist;
