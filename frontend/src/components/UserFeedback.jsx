import React from "react";
import { FaStar } from "react-icons/fa";

function UserFeedback() {
  const reviews = [
    {
      name: "Susan Smith",
      role: "Web Developer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      review:
        "GigFusion helped me find quality projects quickly. The platform is smooth and reliable.",
      rating: 5,
    },
    {
      name: "Rahul Mehta",
      role: "Startup Founder",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      review:
        "Amazing experience! Hiring skilled professionals has never been this easy.",
      rating: 5,
    },
    {
      name: "Emily Johnson",
      role: "UI/UX Designer",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      review:
        "Great UI, trusted clients, and fast payments. Highly recommended!",
      rating: 4,
    },
  ];

  return (
    <div className="w-full overflow-hidden relative  bg-white mt-10 ">
         <h2 className="text-2xl md:text-4xl font-bold text-center text-stdBlue mb-6 md:mb-12 tracking-tight ">
                Where <span className='text-color1'>Trust</span> Meets Talent
            </h2>

      {/* Fade edges */}
      <div className="absolute left-0 top-0 h-full w-20 z-10 bg-gradient-to-r from-white to-transparent" />
      <div className="absolute right-0 top-0 h-full w-20 z-10 bg-gradient-to-l from-white to-transparent" />

      {/* Marquee */}
      <div className="flex w-max animate-marquee gap-6">
        {[...reviews, ...reviews].map((item, index) => (
          <div
            key={index}
            className="w-72 md:w-80 bg-white rounded-xl shadow-lg py-10 flex flex-col items-center text-center"
          >
            {/* Avatar */}
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 rounded-full object-cover border-4 border-stdBlue mb-3"
            />

            {/* Name */}
            <h3 className="font-semibold text-lg text-gray-800">
              {item.name}
            </h3>
            <p className="text-sm text-blue-600 mb-2">{item.role}</p>

            {/* Stars */}
            <div className="flex gap-1 mb-2">
              {Array.from({ length: item.rating }).map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-sm" />
              ))}
            </div>

            {/* Review */}
            <p className="text-sm text-gray-600 leading-relaxed">
              “{item.review}”
            </p>
          </div>
        ))}
      </div>

      {/* Second Marquee - Opposite Direction */}
      <div className="flex w-max mt-10 animate-marquee-reverse gap-6">
        {[...reviews, ...reviews].map((item, index) => (
          <div
            key={`reverse-${index}`}
            className="w-72 md:w-80 bg-white rounded-xl shadow-lg py-10 flex flex-col items-center text-center"
          >
            {/* Avatar */}
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 rounded-full object-cover border-4 border-stdBlue mb-3"
            />

            {/* Name */}
            <h3 className="font-semibold text-lg text-gray-800">
              {item.name}
            </h3>
            <p className="text-sm text-blue-600 mb-2">{item.role}</p>

            {/* Stars */}
            <div className="flex gap-1 mb-2">
              {Array.from({ length: item.rating }).map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-sm" />
              ))}
            </div>

            {/* Review */}
            <p className="text-sm text-gray-600 leading-relaxed">
              "{item.review}"
            </p>
          </div>
        ))}
      </div>

      {/* Animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 45s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 45s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default UserFeedback;
