
function Last() {
   return(
    <div>
       <footer className="bg-gray-100" >
        <div className="flex flex-col md:flex-row md:items-center justify-between p-15  ">
          <div className="list">
                <ul className="text-[15px]  text-gray-400">
                  <li className='font-bold pb-3'>Product</li>
                  <li className="font-medium">Features</li>
                  <li className="font-medium">Pricing </li>
                  <li className="font-medium">API</li>
                </ul>
          </div>
          <div>
          <ul  className="text-[15px]  text-gray-400">
                  <li className='font-bold pb-3'>Company</li>
                  <li  className="font-medium">About</li>
                  <li className="font-medium">Blog </li>
                  <li className="font-medium" >Careers</li>
                </ul>
          </div>
          <div >
          <ul className="text-[15px]  text-gray-400">
                  <li className='font-bold pb-3'>Support</li>
                  <li className="font-medium">help center</li>
                  <li className="font-medium">Contact </li>
                  <li className="font-medium">Status</li>
                </ul>
          </div>

          <div >
          <ul  className="text-[15px]  text-gray-400">
                  <li className='font-bold pb-3'>Legal</li>
                  <li className="font-medium">privacy</li>
                  <li className="font-medium">Terms </li>
                  <li className="font-medium">Security</li>
                </ul>
          </div>
        </div>
        <hr class=" border-t-1 border-gray-400 w-9/10 mx-auto rounded" />

        

        <div className='flex flex-col md:flex-row justify-between items-center px-6 py-6 gap-4'>
              <div className="copyright">
                  <p className="text-gray-500 font-medium text-sm text-center md:text-left">&copy; 2025 YourWebsite. All Rights Reserved.  </p>
              </div>
              <div className=' flex w-40 text-[20px] items-center justify-between '>
              <i class='bx bxl-twitter  hover:text-blue-500 transition-all duration-300 ease-in-out hover:text-[30px] '></i>
              <i class='bx bxl-facebook-circle  hover:text-blue-500 transition-all duration-300 ease-in-out hover:text-[25px]'></i>
              <i class='bx bxl-github  hover:text-blue-500 transition-all duration-300 ease-in-out hover:text-[25px]'></i>
              <i class='bx bxl-instagram-alt  hover:text-blue-500 transition-all duration-300 ease-in-out hover:text-[25px]' ></i>
              </div>
        </div>
      </footer>
    </div>
   ) ;
}

export default Last;