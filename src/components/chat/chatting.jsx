     import { useState } from "react";
const ComponentA = () => {
    
    return (
        
        <div className="min-w-full h-screen  bg-blue-100 flex items-center justify-center">
            <div className="w-7xl h-[600px] m-1.5 bg-white rounded-md drop-shadow-lg flex items-center justify-between px-5 py-10">

              <div className="w-[858px] h-[550px] bg-blue-200 rounded-md flex items-baseline p-10 pt-110">
                  
                  <input
          id="message"
          type="text"
          placeholder="Enter your message..."
          className="w-200 h-10 px-3 py-2 border border-gray-500 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "
        />
                  
                  <i class='bx bxs-send text-2xl ml-2 p-2  h-10 rounded-md  bg-blue-700 text-white' ></i>
              </div>
              <div className="flex flex-col w-[350px] h-[550px] ">
                 <div className="w-[350px] h-screen bg-blue-200 rounded-md px-5 py-5 ">
                  <h1 className="text-2xl font-bold ">Chat History</h1>
                  <div className="w-[300px] h-[90px] bg-white rounded-md mb-3 mt-5 p-5">
                        <h2 className="font-bold">Previous Chat 1 </h2>
                        <p className="text-gray-400">2 hours ago</p>
                  </div>
                  <div className="w-[300px] h-[90px] bg-white rounded-md  p-5">
                  <h2 className="font-bold">Previous Chat 2 </h2>
                  <p className="text-gray-400">Yesterday</p>
                  </div>

                </div>   

                <div className="w-[350px] h-[136px] bg-blue-200 rounded-md mt-5 p-5">
                    <h1 className=" text-2xl font-bold">Settings</h1>
                    
                </div>
              </div>
            </div>
            
        </div>
        
    )
  };
  
  export default ComponentA;
  