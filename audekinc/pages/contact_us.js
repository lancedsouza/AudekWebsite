// import React from 'react'
// import { FaEnvelope} from 'react-icons/fa'
// import { FaAddressCard } from 'react-icons/fa'
// import { FaPhone } from 'react-icons/fa'

// const contact_us = () => {
//   return (
    
//     <div className ="flex flex-row min-h-screen  items-center justify-between gap-x-4 content-center">
     

//       <div className='bg-amber-500 flex-none w-1/3 p-4 text-center space-y-2" rounded-lg h-80'>{/* Card1 */}
//         <h1>US</h1>

//         <h2>HeadQuarter</h2>
//         <p>Audek INC</p>

//         <p className="flex justify-center items-center  gap-4"><FaAddressCard/>1968 S. Coast Hwy #2327 Laguna Beach CA 92651</p>

//         <p  className="flex justify-center items-center  gap-4"><FaEnvelope/>support@audekinc.com</p>

//         <p  className="flex justify-center items-center gap-4"><FaPhone/>+1 (646) 4644113</p>


//       </div>
//       <div className='bg-red-400 flex-none w-1/3 p-4 justify-items-center rounded-lg h-80'>        {/* Card2 */}
//         <h1>INDIA</h1>
//         <h2>Indian Subsidiary</h2>
//         <p>AUDEK INDIA PRIVATE LIMITED</p>

//         <p className="flex justify-center items-start gap-2 text-sm text-center">
//   <FaAddressCard className="mt-1" />
//   <span>
//     Unit 403D, 4th floor,<span>Vastu Prestige, New Link Road, Above Tanishq Showroom, Andheri West, Mumbai- 400058</span> 
//   </span>
// </p>

//         <p className="flex justify-center items-center  gap-2"><FaEnvelope/>support@audekindia.com</p>
        
//         <p className="flex justify-center items-center gap-2"><FaPhone/>+91 9769764065</p>
        
//         </div>

//       <div className='bg-red-500 flex-none w-1/3 justify-items-center rounded-lg h-80 '>        {/* Card3 */}
//         <h1>Hong Kong</h1>
//         <h2>Office & Facility</h2>
//         <p>Audek Group</p>

//         <p  className="flex justify-center items-center gap-2"><FaAddressCard/>1968 S. Coast Hwy #2327 Laguna Beach CA 92651</p>

//         <p  className="flex justify-center items-center gap-2"><FaEnvelope/>support@audekinc.com</p>
        
//         <p  className="flex justify-center items-center gap-2"><FaPhone/>+1 (646) 4644113</p>



//       </div>





//     </div>



   



    
//   )
// }

// export default contact_us


import React from 'react'
import { FaEnvelope, FaAddressCard, FaPhone } from 'react-icons/fa'
import Navbar from '@/component/navbar'

const ContactUs = () => {
  return (
    <>
   
    <div className="flex flex-row min-h-screen items-center justify-between gap-4 p-4 bg-gray-100">
      {/* Card 1 - US */}
      <div
        className="flex flex-col items-center justify-center w-1/3 min-h-[24rem] rounded-lg bg-amber-500 bg-cover bg-center text-white p-6 space-y-4"
        style={{ backgroundImage: "url('/Audekindia-card.png')" }} // Replace with actual background for US
      >
        <h1 className="text-xl font-semibold">US</h1>
        <h2 className="text-lg">HeadQuarter</h2>
        <p className="font-bold">Audek INC</p>

        <p className="flex items-start gap-2 text-sm text-center">
          <FaAddressCard className="mt-1" />
          1968 S. Coast Hwy #2327, Laguna Beach, CA 92651
        </p>
        <p className="flex items-center gap-2 text-sm"><FaEnvelope /> support@audekinc.com</p>
        <p className="flex items-center gap-2 text-sm"><FaPhone /> +1 (646) 4644113</p>
      </div>

      {/* Card 2 - India */}
      <div
        className="flex flex-col items-center justify-center w-1/3 min-h-[24rem] rounded-lg bg-red-400 bg-cover bg-center text-white p-6 space-y-4"
        style={{ backgroundImage: "url('/Audekindia-card.png')" }}
      >
        <h1 className="text-xl font-semibold">INDIA</h1>
        <h2 className="text-lg">Indian Subsidiary</h2>
        <p className="font-bold text-center">AUDEK INDIA PRIVATE LIMITED</p>

        <p className="flex items-start gap-2 text-sm text-center">
          <FaAddressCard className="mt-1" />
          Unit 403D, 4th floor, Vastu Prestige,<br />
          New Link Road, Above Tanishq Showroom,<br />
          Andheri West, Mumbai - 400058
        </p>
        <p className="flex items-center gap-2 text-sm"><FaEnvelope /> support@audekindia.com</p>
        <p className="flex items-center gap-2 text-sm"><FaPhone /> +91 9769764065</p>
      </div>

      {/* Card 3 - Hong Kong */}
      <div
        className="flex flex-col items-center justify-center w-1/3 min-h-[24rem] rounded-lg bg-red-500 bg-cover bg-center text-white p-6 space-y-4"
        style={{ backgroundImage: "url('/Audekindia-card.png')" }} // Replace with actual background for HK
      >
        <h1 className="text-xl font-semibold">Hong Kong</h1>
        <h2 className="text-lg">Office & Facility</h2>
        <p className="font-bold">Audek Group</p>

        <p className="flex items-start gap-2 text-sm text-center">
          <FaAddressCard className="mt-1" />
          1968 S. Coast Hwy #2327, Laguna Beach, CA 92651
        </p>
        <p className="flex items-center gap-2 text-sm"><FaEnvelope /> support@audekinc.com</p>
        <p className="flex items-center gap-2 text-sm"><FaPhone /> +1 (646) 4644113</p>
      </div>
    </div>
    </>
  )
}

export default ContactUs
