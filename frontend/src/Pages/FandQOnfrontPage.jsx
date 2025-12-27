import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { question: "What services do you offer?", answer: "We provide web development, mobile app development, AI solutions, and UI/UX design services." },
  { question: "How can I get a quote for my project?", answer: "Simply contact us through our website, and we’ll get back to you with a custom quote within 24 hours." },
  { question: "Do you offer support after project completion?", answer: "Yes, we provide 30 days of free support after project delivery. Extended support is also available upon request." },
  { question: "What technologies do you specialize in?", answer: "We specialize in React, Node.js, Python, AWS, and modern frontend and backend frameworks." },
  { question: "Can I hire a developer on a monthly basis?", answer: "Yes, we offer dedicated developers for long-term projects on a contract basis." },
  { question: "How long does it take to complete a project?", answer: "The timeline depends on the complexity of the project. Small projects take 2-4 weeks, while larger ones may take a few months." },
  { question: "Do you work with startups?", answer: "Absolutely! We love working with startups and help them build scalable digital solutions." },
  { question: "Is my project idea confidential?", answer: "Yes, we sign NDAs before discussing any project details to ensure confidentiality." },
  { question: "What payment methods do you accept?", answer: "We accept bank transfers, PayPal, Stripe, and major credit cards." },
  { question: "Can I request changes after project completion?", answer: "Yes, we offer a revision period after project completion to ensure your satisfaction." },
];

export default function FandQOnFrontPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full mx-auto mt-10">
      {/* Enhanced Heading */}
      <h2 className="text-2xl md:text-4xl font-bold text-center text-stdBlue mb-6 md:mb-12 tracking-tight">
        Frequently Asked <span className="text-color1">Questions</span>
      </h2>

      {/* Grid Layout */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-20">
        {/* Left Column */}
        <div className="space-y-3 md:space-y-4 flex flex-col items-center">
          {faqs.slice(0, 5).map((faq, index) => (
            <div
              key={index}
              className="w-full  bg-white shadow-lg rounded-xl p-2 md:p-3 transition-all duration-300 hover:shadow-xl border border-gray-100"
            >
              <button
                className="w-full flex justify-between items-center text-base md:text-xl font-semibold text-left text-gray-800 hover:text-stdBlue  rounded-lg transition-all duration-200 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 md:h-7 md:w-7 mr-2 text-gray-500 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-blue-600" : ""
                  }`}
                />
              </button>
              {/* Smooth Expand/Collapse Animation */}
              <div
                className={`bg-gray-200 rounded-lg p-2 mt-1 overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className=" text-stdBlue text-sm md:text-lg leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column */}
       {/* Right Column */}
<div
  className={`
    space-y-3 md:space-y-4
    flex flex-col items-center
    ${showMore ? "block" : "hidden"}
    md:block
  `}
>
  {faqs.slice(5, 10).map((faq, index) => (
    <div
      key={index + 5}
      className="w-full bg-white shadow-lg rounded-xl p-2 md:p-3 transition-all duration-300 hover:shadow-xl border border-gray-100"
    >
      <button
        className="w-full flex justify-between items-center text-base md:text-xl font-semibold text-left text-gray-800 hover:text-stdBlue rounded-lg transition-all duration-200"
        onClick={() => toggleFAQ(index + 5)}
      >
        <span>{faq.question}</span>
        <ChevronDown
          className={`w-5 h-5 md:h-7 md:w-7 mr-2 transition-transform duration-300 ${
            openIndex === index + 5 ? "rotate-180 text-blue-600" : "text-gray-500"
          }`}
        />
      </button>

      <div
        className={`bg-gray-200 rounded-lg p-2 mt-1 overflow-hidden transition-all duration-500 ${
          openIndex === index + 5 ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-stdBlue text-sm md:text-lg">{faq.answer}</p>
      </div>
    </div>
  ))}
</div>

{/* Mobile Toggle Button */}
<div className="flex justify-center mt-2 md:hidden">
  <button
    onClick={() => setShowMore(!showMore)}
    className="
      px-4 py-2
      rounded-full
      bg-stdBlue
      text-white
      font-semibold
      transition-all
      hover:scale-105
    "
  >
    {showMore ? "Show Less" : "View More"}
  </button>
</div>


      </div>
    </div>
  );
}