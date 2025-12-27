import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const CountDownNumbersForServicePage = () => {
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStartCount(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { title: "Services Completed", value: 10000, suffix: "+" },
    { title: "Happy Customers", value: 25000, suffix: "+" },
    { title: "Service Providers", value: 5000, suffix: "+" },
    { title: "Response Time", value: 30, suffix: "s" },
  ];

  return (
    <div className="absolute bottom-0 left-0 w-full px-4 pb-5 md:pb-10">
      <div className="
        max-w-6xl mx-auto
        flex justify-between items-center
        gap-3
      ">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            className="text-center flex-1"
          >
            <p className="
              text-[10px]
              sm:text-xs
              md:text-lg
              text-gray-300
              leading-tight
            ">
              {stat.title}
            </p>

            <h2 className="
              text-lg
              sm:text-xl
              md:text-4xl
              
              font-bold
              text-gray-100
            ">
              {startCount && <CountUp end={stat.value} duration={2} />}
              {stat.suffix}
            </h2>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CountDownNumbersForServicePage;
