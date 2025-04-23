// import React from 'react';

// function Features() {
//   return (
//     <>
//       {/* Features Section */}
//       <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-12 bg-gray-100">
//         {/* Esenze-B Features */}
//         <div className="flex flex-col items-center p-6 rounded-3xl bg-white shadow-lg hover:shadow-xl transition duration-300">
//           <h3 className="text-2xl font-bold text-gray-800 mb-4">Esenze-B Features</h3>
//           <ul className="list-disc list-inside text-gray-700 space-y-2 text-left w-full max-w-xs">
//             <li>BTE</li>
//             <li>RIC Design</li>
//             <li>Rocker Switch</li>
//             <li>3-in-1 TWS Hearing Aid</li>
//             <li>Fully Digital WDRC Hybrid</li>
//             <li>Programmable or Non-programmable</li>
//             <li>Rechargeable – 20 Hours Working Time</li>
//             <li>Perfect Noise and Feedback Cancellation</li>
//           </ul>
//         </div>

//         {/* Esenze-Nxt Features */}
//         <div className="flex flex-col items-center p-6 bg-white shadow-lg hover:shadow-xl transition duration-300 rounded-3xl">
//           <h3 className="text-2xl font-bold text-gray-800 mb-4">Esenze-Nxt Features</h3>
//           <p className="text-gray-600 text-center">
//             Description of feature 2. Highlight what makes this model unique.
//           </p>
//         </div>

//         {/* Additional Feature */}
//         <div className="flex flex-col items-center p-6 bg-white shadow-lg hover:shadow-xl transition duration-300 rounded-3xl">
//           <h3 className="text-2xl font-bold text-gray-800 mb-4">Coming Soon</h3>
//           <p className="text-gray-600 text-center">
//             Stay tuned for our upcoming innovations in hearing aid technology.
//           </p>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Features;
import React from 'react';
import { FaBolt, FaAssistiveListeningSystems, FaBatteryFull, FaCogs, FaHeadphones,FaAudioDescription,FaBluetooth,
  FaAudible,FaSignal,FaMicrophoneAlt,FaVolumeUp,FaBatteryHalf } from 'react-icons/fa';

function Features() {
  return (
    <>
      {/* Features Section */}
      <section className="min-h-screen px-4 py-16 bg-gradient-to-br from-gray-100 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12 drop-shadow-sm">
            Explore Our Innovative Hearing Solutions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Esenze-B Card */}
            <div className="group relative bg-white backdrop-blur-md border border-gray-200 p-8 rounded-3xl shadow-2xl hover:shadow-red-300 transition-all duration-500 transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-red-600 mb-4">Esenze-B</h3>
              <ul className="space-y-3 text-gray-700 font-medium leading-relaxed">
                <li className="flex items-center gap-3"><FaAssistiveListeningSystems className="text-red-500" />BTE</li>
                <li className="flex items-center gap-3"><FaCogs className="text-red-500" />RIC Design</li>
                <li className="flex items-center gap-3"><FaHeadphones className="text-red-500" />Rocker Switch</li>
                <li className="flex items-center gap-3"><FaBolt className="text-red-500" />3-in-1 TWS Hearing Aid</li>
                <li className="flex items-center gap-3"><FaCogs className="text-red-500" />Fully Digital WDRC Hybrid</li>
                <li className="flex items-center gap-3"><FaCogs className="text-red-500" />Programmable / Non-programmable</li>
                <li className="flex items-center gap-3"><FaBatteryFull className="text-red-500" />20h Rechargeable Battery</li>
                <li className="flex items-center gap-3"><FaHeadphones className="text-red-500" />Noise & Feedback Cancellation</li>
              </ul>
            </div>

            {/* Esenze-Nxt Card */}
            <div className="group relative bg-white backdrop-blur-md border border-gray-200 p-8 rounded-3xl shadow-2xl hover:shadow-blue-300 transition-all duration-500 transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Esenze-Nxt</h3>
              <p className="text-gray-700 leading-relaxed text-lg text-center">
                Sleek design with next-gen AI tuning. Adaptive noise control and personalized hearing profiles for a seamless experience.
              </p>
            </div>

            {/* Coming Soon Card */}
            <div className="group relative bg-white backdrop-blur-md border border-gray-200 p-8 rounded-3xl shadow-2xl hover:shadow-purple-300 transition-all duration-500 transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-purple-600 mb-4">Airbuds</h3>
            
              <ul className='space-y-3 text-gray-700 font-medium leading-relaxed'> 
                <li className='flex items-center gap-3'><FaBluetooth className='text-purple-500' />Bluetooth version: Bluetooth 5.2</li>
                <li className='flex items-center gap-3'><FaAudible className='text-purple-500'/>1.8 CHANNEL WDRC</li>
                <li className='flex items-center gap-3'><FaSignal className='text-purple-500'/>MPO: 116 dB</li>
                <li className='flex items-center gap-3'><FaAudioDescription className='text-purple-500'/>  GAIN: 43 dB</li>
                <li className='flex items-center gap-3'><FaSignal className='text-purple-500'/>THD: 3%</li>
                <li className='flex items-center gap-3'><FaSignal className='text-purple-500'/> 4 programs</li>
                <li className='flex items-center gap-3'><FaHeadphones className='text-purple-500'/>VC</li>
                <li className='flex items-center gap-3'><FaBluetooth className='text-purple-500'/>Bluetooth transmission range: 10 m</li>
                <li className='flex items-center gap-3'><FaBolt className='text-purple-500'/>Headset battery capacity: 50 mAh</li>
                <li className='flex items-center gap-3'><FaBolt className='text-purple-500'/>Charging chamber capacity: 500 mAh</li> 
                <li className='flex items-center gap-3'><FaBatteryHalf className='text-purple-500'/>Charging time: 1.5-2 hours</li>
                <li className='flex items-center gap-3'><FaBatteryHalf className='text-purple-500'/>Working hours: 20 H</li>

              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
