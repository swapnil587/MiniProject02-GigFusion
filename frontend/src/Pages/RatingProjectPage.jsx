import { FiMail } from 'react-icons/fi';
import axios from "axios";
import EmailPhoto from "./../components/Assets/EmailModulePhoto01.png";




export default function RatingProjectPage() {
  const sendMail = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/v1/users/sendMail',
        {
          email: e.target[0].value,
          name: e.target[1].value
        },
        { headers: { 'Content-Type': 'application/json' } }
      );
      console.log(response.data);
      alert('Thank you! Information sent successfully.');
    } catch (error) {
      console.error(error);
      alert('Something went wrong. Please try again.');
    }
  };

  

  return (
    <div className="p-4 max-w-5xl rounded-3xl   mt-10 mx-auto">
      <h2 className='text-stdBlue font-bold text-lg md:text-2xl lg:text-3xl text-center md:mb-6 '>"Unlock All Available Places – We’ll Send You the List!"</h2>
      <div className="flex justify-around py-3">
        
        {/* Left Side - Image */}
    <div className="hidden md:flex w-[40%] md:w-[35%] justify-center">
  <img 
    src={EmailPhoto} 
    alt="Email photo" 
    className="w-[200px] md:w-[300px] lg:w-[400px] transition-transform duration-500 hover:scale-105"
  />
</div>

        {/* Right Side - Form Box */}
        <div className="flex justify-center items-center">
          <div className="rounded-3xl lg:shadow-lg md:py-2  transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <h2 className="text-color1 text-center  font-bold text-2xl md:text-3xl mb-2 lg:mb-6">
              Check Your Inbox
              <FiMail className="text-stdBlue text-2xl md:text-3xl mx-auto mt-2" /> 
            </h2>
            <form onSubmit={sendMail} className="space-y-6">
              <div className="ml-4 lg:px-8">
  <input
    type="email"
    placeholder="Enter your mail"
    required
    className="
      w-11/12 mx-auto
      py-3
      px-4
     
      text-base sm:text-lg
      rounded-3xl
      border border-gray-300
      outline-none
      focus:ring-2 focus:ring-stdBlue
      transition-all
    "
  />

  <input
    type="text"
    placeholder="Enter your name"
    required
    className="
      w-11/12 mx-auto
      py-3
      px-4
      mt-3  
      text-base sm:text-lg
      rounded-3xl
      border border-gray-300
      outline-none
      focus:ring-2 focus:ring-stdBlue
      transition-all
    "
  />
</div>

              <div className='flex items-center justify-center'>
              <button type="submit" className="bg-stdBlue  text-white py-2 md:py-3 px-10  rounded-full text-xl font-bold flex items-center gap-3 justify-center hover:bg-color1 hover:scale-105 transition-all duration-300 shadow-md ">
                Submit
              </button>

              </div>
              
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
