import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import RatingPage from "../RatingProjectPage.jsx";
import HomePageOptions from "../../components/HomePageOptions.jsx"
import ServiceTypeCard from '../../components//ServiceTypeCard.jsx';
import HowWorkFLowOnLanding from '../HowWorkFLowOnLanding.jsx';
import FandQOnfrontPage from '../FandQOnfrontPage.jsx';
import HomepageHeading from '../HomepageHeading.jsx';
import HomepageFrontTopPhoto from "../../components/Assets/HomepageFrontTop01.jpg"
import { FaSearch } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import UserFeedback from '../../components/UserFeedback.jsx';


export default function HomePage() {

  // added this one 
  const words = [
    "Find top gig experts near you...",
    "Your gig solution starts here",
    "Connect with gig talent instantly...",
    "Hire the best freelancers today...",
    "Discover skilled gig professionals...",
  ];
  const services = [
    "web development",
    "logo design",
    "video editing"
   
  ];
  
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isFocused, setIsFocused] = useState(false); // Track input focus

  useEffect(() => {
    if (isFocused) return; // Stop animation when input is focused

    const currentWord = words[wordIndex];
    const typingSpeed = isDeleting ? 50 : 100; // Speed up when deleting
    const delay = isDeleting && charIndex === 0 ? 1000 : typingSpeed; // Pause before erasing

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentWord.length) {
        setText((prev) => prev + currentWord[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else {
        setIsDeleting(!isDeleting);
        if (!isDeleting) {
          setTimeout(() => setIsDeleting(true), 1000); // Wait before deleting
        } else {
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, delay);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, isFocused]);


  return (
    <div className=''>   

        <div style={{ backgroundImage: `url(${HomepageFrontTopPhoto})` }} className="flex flex-col w-screen min-h-[60vh] md:min-h-[calc(100vh-4rem)] font-stdFont bg-no-repeat bg-top overflow-x-hidden bg-cover ">  
                      
          <HomepageHeading/>    
                
               {/* Search Bar */}

               <div className="relative top-3 md:top-20 ml-3 sm:ml-6 md:ml-10 lg:ml-20  md:mt-4">
                  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1, duration: 1, ease: "easeOut" }}
    className="flex justify-start"
  >
    <div className="relative w-44 sm:w-56 md:w-80 lg:w-96 xl:w-[28rem]  mt-4  lg:mt-2">
      
      {/* Input */}
      <input
        type="text"
        value={text}
        placeholder="Search..."
        className="
          w-full
          px-3  pr-9
          py-1.5 lg:py-4 md:py-4
          text-[10px] sm:text-xs md:text-sm lg:text-base          
          rounded-2xl
          lg:rounded-3xl
          shadow-sm
          focus:outline-none
          focus:ring-1 focus:ring-[#3A4E7A]
          focus:border-[#4A5E9A]
          hover:border-[#3A4E7A]
          transition-all duration-300
          text-[#223265]
          placeholder-[#2A3B5A]
          font-medium
        "
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => setText(e.target.value)}
      />

      {/* Search Icon */}
      <button
        className="
          absolute
          right-3
          
          top-1/2
          -translate-y-1/2
          text-[#2A3B5A]
          hover:text-[#3A4E7A]
          transition
        "
      >
        <FaSearch className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:h-7 lg:w-7" />
      </button>

    </div>
                  </motion.div>

   {/* Buttons Section */}
              <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4 mt-4 lg:mt-8 w-full">
  {services.map((service, index) => (
    <button
      key={index}
      className="
        flex items-center gap-1.5 sm:gap-2
        px-2 py-1.5 sm:px-3 sm:py-2
        border border-stdBlue
        text-stdBlue
        rounded-lg sm:rounded-xl
        text-[10px] sm:text-sm lg:text-lg
        font-medium sm:font-semibold
        transition-transform duration-300
        hover:scale-105 hover:border-gray-300
      "
    >
      {service}
      <FaArrowRight className="text-[10px] sm:text-sm" />
    </button>
  ))}
</div>


              </div>



               

                     
        </div>               
        <HomePageOptions/>
        <div className='p-4 md:p-10'>
             {/* send message */}
        <RatingPage />

        
        {/* Customer or Professional */}
        <ServiceTypeCard />

       

        
        {/* Customers reviews */}
         <UserFeedback/>
         
        

           {/* Frequently sked questions */}
        <FandQOnfrontPage/>

        </div>     
    </div>
   
  );
}

