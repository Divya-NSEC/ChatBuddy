import ComponentA from "../chat/chatting";
import { useState } from "react";

function Main() {
  const [showChat,setShowChat] = useState(false);

  const handleToggle = () => {
    setShowChat(!showChat);
  };
    return (
        <div className="flex flex-col">
          
          {!showChat ? (
            <>
        <section className=" bg-white flex flex-col md:flex-row items-center justify-between px-15 py-10 w-full gap-10 ">
        <div className="flex flex-col ">
              <h1 className="  text-4xl md:text-5xl font-bold pb-6 ">Meet Your AI <br /><span className='gradient'>Conversation Partner</span></h1>
              <p className="text-gray-500 pb-6 ">Experience natural conversations powered by advanced AI . Available 24/7 , <br />learn, and engage with you in meaningful dialogue</p>
              <button onClick={handleToggle}  className=' w-fit font-medium px-3 py-2 rounded bg-blue-500 text-white hover:bg-blue-700   drop-shadow-md hover:drop-shadow-[0_0_5px_blue] transition-all duration-300 ease-in-out'>Start Chatting Now</button>
        </div>
        <div className="">
          <img src="IMG@1x.png" alt="robo-picture" className="w-full h-auto" />
        </div>
      </section>

      

      <section className="bg-gray-100  px-6 md:px-15 pb-10 ">
       <div className="flex flex-col items-center justify-center w-full pt-10 pb-10 ">
             <h1 className="text-2xl font-bold pb-2">Key Features</h1>
             <p className="text-[15px] font-medium text-gray-500">Discover what makes our AI chatbot unique</p>
             </div>

        <div className="flex flex-col md:flex-row items-stretch justify-between  gap-6">
          <div className=" bg-white p-5 border-1 border-blue-500 rounded-[10px]   drop-shadow-md hover:drop-shadow-[0_0_5px_blue] transition-all duration-300 ease-in-out">
          <i className='bx bxs-brain text-2xl text-blue-600 bg-blue-200 p-2 rounded-3xl'></i>
          <h2 className="text-xl font-bold pt-2 pb-2">Advanced AI</h2>
          <p className="text-[12px] text-gray-500 font-medium">Powered by cutting - edges language models for humans- <br />
          like understanding and responces. </p>
          </div>

          <div className=" bg-white p-5 border-1 border-blue-500 rounded-[10px]   drop-shadow-md hover:drop-shadow-[0_0_5px_blue] transition-all duration-300 ease-in-out">
          <i class='bx bxs-time-five text-2xl text-blue-600 bg-blue-200 p-2 rounded-3xl'></i>
          <h2  className="text-xl font-bold pt-2 pb-2">24/7 Availability</h2>
          <p className="text-[12px] text-gray-500 font-medium">Always ready to chat and assits you,any time of day or <br /> night</p>
          </div>

          <div className="bg-white p-5 border-1 border-blue-500 rounded-[10px]   drop-shadow-md hover:drop-shadow-[0_0_5px_blue] transition-all duration-300 ease-in-out">
          <i class='bx bxs-conversation  text-2xl text-blue-600 bg-blue-200 p-2 rounded-3xl'></i>
          <h2 className="text-xl font-bold pt-2 pb-2">Natural Conversation</h2>
          <p className="text-[12px] text-gray-500 font-medium">Enage in fluid, context-aware discussions that feel <br />natural and meaningful</p>
          </div>
        </div>
      </section>

      <section className='flex items-center justify-center px-6 md:px-15 py-10'>
        <div className="w-50% md:overflow-hidden rounded-2xl  border-blue-500 drop-shadow-md hover:drop-shadow-[0_0_5px_blue] transition-all duration-300 ease-in-out">
          <img src="DIV@1x.png" alt="chatting view" className="w-full h-full object-cover" />
        </div>
      </section>
      </>
      ):(
        <section className="bg-white min-h-screen flex flex-col items-center justify-center">
          <ComponentA />
          <button
            onClick={handleToggle}
            className=" hidden mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition-all duration-300"
          >
            Go Back
          </button>
        </section>
      )}
          
      </div>

    );
}

export default Main