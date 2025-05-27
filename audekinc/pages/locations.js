// 'use client';
// import 'maplibre-gl/dist/maplibre-gl.css';
// import { Map, Marker } from 'react-map-gl/maplibre';
// import { useState } from 'react';
// import Footer from '@/component/footer';

// export default function LocationsPage() {
//   const [hoveredLocation, setHoveredLocation] = useState(null);

//   const locations = [
//     // USA (HQ) - Red
//     { name: 'California', color: 'red', lng: -119.4179, lat: 36.7783 },
//     { name: 'Florida', color: 'red', lng: -81.5158, lat: 27.6648 },
//     { name: 'Colorado', color: 'red', lng: -105.7821, lat: 39.5501 },
//     { name: 'Alabama', color: 'red', lng: -86.9023, lat: 32.3182 },

//     // India (Subsidiary) - Green
//     { name: 'Karnataka', color: 'green', lng: 76.9195, lat: 15.3173 },
//     { name: 'Odisha', color: 'green', lng: 85.0985, lat: 20.9517 },
//     { name: 'Gujarat', color: 'green', lng: 71.1924, lat: 22.2587 },
//     { name: 'Assam', color: 'green', lng: 92.9376, lat: 26.2006 },

//     // Other Countries - Yellow
//     { name: 'Bangladesh', color: 'yellow', lng: 90.3563, lat: 23.6850 },
//     { name: 'Nepal', color: 'yellow', lng: 84.1240, lat: 28.3949 },
//     { name: 'Dubai', color: 'yellow', lng: 55.2962, lat: 25.276987 },
//     { name: 'Qatar', color: 'yellow', lng: 51.1839, lat: 25.3548 },
//     { name: 'Saudi', color: 'yellow', lng: 45.0792, lat: 23.8859 },
//     { name: 'Canada', color: 'yellow', lng: -106.3468, lat: 56.1304 },
//   ];

//   return (
//     <div
//       style={{
//         display: 'flex',
//         height: '100vh',
//         width: '100%',
//         background: 'linear-gradient(135deg, #e0f7fa, #fff)',
//         fontFamily: 'Segoe UI, sans-serif',
//       }}
//     >
//       {/* Map Section */}
//       <div style={{ flex: 3, padding: '20px' }}>
//         <div
//           style={{
//             borderRadius: '20px',
//             overflow: 'hidden',
//             boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
//             height: '100%',
//           }}
//         >
//           <Map
//             mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
//             initialViewState={{ longitude: 60, latitude: 25, zoom: 2 }}
//             style={{ width: '100%', height: '100%' }}
//           >
//             {locations.map((loc, index) => (
//               <Marker key={index} longitude={loc.lng} latitude={loc.lat}>
//                 <div
//                   onMouseEnter={() => setHoveredLocation(loc)}
//                   onMouseLeave={() => setHoveredLocation(null)}
//                   style={{
//                     width: 18,
//                     height: 18,
//                     backgroundColor: loc.color,
//                     borderRadius: '50%',
//                     border: '2px solid white',
//                     boxShadow: '0 0 6px rgba(0,0,0,0.3)',
//                     position: 'relative',
//                     cursor: 'pointer',
//                   }}
//                 >
//                   {/* Tooltip on hover */}
//                   {hoveredLocation?.name === loc.name && (
//                     <div
//                       style={{
//                         position: 'absolute',
//                         top: -30,
//                         left: '50%',
//                         transform: 'translateX(-50%)',
//                         background: 'rgba(0,0,0,0.75)',
//                         color: 'white',
//                         padding: '4px 8px',
//                         borderRadius: '6px',
//                         fontSize: '12px',
//                         whiteSpace: 'nowrap',
//                         pointerEvents: 'none',
//                       }}
//                     >
//                       {loc.name}
//                     </div>
//                   )}
//                 </div>
//               </Marker>
//             ))}
//           </Map>
//         </div>
//       </div>

//       {/* Sidebar */}
//       <div
//         style={{
//           flex: 1.2,
//           padding: '30px 20px',
//           background: 'rgba(255, 255, 255, 0.4)',
//           backdropFilter: 'blur(12px)',
//           borderLeft: '1px solid rgba(255,255,255,0.3)',
//           color: '#333',
//           overflowY: 'auto',
//           boxShadow: '-4px 0 10px rgba(0,0,0,0.1)',
//         }}
//       >
//         <h2 style={{ marginBottom: '10px', fontWeight: 600 }}>📍 Locations</h2>

//         <div style={{ marginBottom: '30px' }}>
//           <h3 style={{ color: '#e53935' }}>Headquarters - USA</h3>
//           <ul style={listStyle}>
//             <li>California</li>
//             <li>Florida</li>
//             <li>Colorado</li>
//             <li>Alabama</li>
//           </ul>
//         </div>

//         <div style={{ marginBottom: '30px' }}>
//           <h3 style={{ color: '#388e3c' }}>Subsidiary - India</h3>
//           <ul style={listStyle}>
//             <li>Karnataka</li>
//             <li>Odisha</li>
//             <li>Gujarat</li>
//             <li>Assam</li>
//           </ul>
//         </div>

//         <div>
//           <h3 style={{ color: '#fbc02d' }}>Other Countries</h3>
//           <ul style={listStyle}>
//             <li>Bangladesh</li>
//             <li>Nepal</li>
//             <li>Dubai</li>
//             <li>Qatar</li>
//             <li>Saudi</li>
//             <li>Canada</li>
//           </ul>
//         </div>
//       </div>
   
//     </div>
//   );
// }

// const listStyle = {
//   listStyleType: 'none',
//   paddingLeft: 0,
//   marginTop: 10,
//   lineHeight: 1.6,
// };
'use client';
import 'maplibre-gl/dist/maplibre-gl.css';
import { Map, Marker } from 'react-map-gl/maplibre';
import { useState } from 'react';
import Footer from '@/component/footer';

export default function LocationsPage() {
  const [hoveredLocation, setHoveredLocation] = useState(null);

  const locations = [
    // USA (HQ) - Red
    { name: 'California', color: 'red', lng: -119.4179, lat: 36.7783 },
    { name: 'Florida', color: 'red', lng: -81.5158, lat: 27.6648 },
    { name: 'Colorado', color: 'red', lng: -105.7821, lat: 39.5501 },
    { name: 'Alabama', color: 'red', lng: -86.9023, lat: 32.3182 },

    // India (Subsidiary) - Green
    { name: 'Karnataka', color: 'green', lng: 76.9195, lat: 15.3173 },
    { name: 'Odisha', color: 'green', lng: 85.0985, lat: 20.9517 },
    { name: 'Gujarat', color: 'green', lng: 71.1924, lat: 22.2587 },
    { name: 'Assam', color: 'green', lng: 92.9376, lat: 26.2006 },

    // Other Countries - Yellow
    { name: 'Bangladesh', color: 'yellow', lng: 90.3563, lat: 23.6850 },
    { name: 'Nepal', color: 'yellow', lng: 84.1240, lat: 28.3949 },
    { name: 'Dubai', color: 'yellow', lng: 55.2962, lat: 25.276987 },
    { name: 'Qatar', color: 'yellow', lng: 51.1839, lat: 25.3548 },
    { name: 'Saudi', color: 'yellow', lng: 45.0792, lat: 23.8859 },
    { name: 'Canada', color: 'yellow', lng: -106.3468, lat: 56.1304 },
  ];

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      width: '100%',
      background: 'linear-gradient(135deg, #e0f7fa, #fff)',
      fontFamily: 'Segoe UI, sans-serif',
    }}>
      {/* Main content container */}
      <div style={{
        display: 'flex',
        flex: 1,
        width: '100%',
      }}>
        {/* Map Section */}
        <div style={{ 
          flex: 3, 
          padding: '20px',
          height: 'calc(100vh - 80px)', // Adjust for footer height
          overflow: 'hidden'
        }}>
          <div style={{
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
            height: '100%',
          }}>
            <Map
              mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
              initialViewState={{ longitude: 60, latitude: 25, zoom: 2 }}
              style={{ width: '100%', height: '100%' }}
            >
              {locations.map((loc, index) => (
                <Marker key={index} longitude={loc.lng} latitude={loc.lat}>
                  <div
                    onMouseEnter={() => setHoveredLocation(loc)}
                    onMouseLeave={() => setHoveredLocation(null)}
                    style={{
                      width: 18,
                      height: 18,
                      backgroundColor: loc.color,
                      borderRadius: '50%',
                      border: '2px solid white',
                      boxShadow: '0 0 6px rgba(0,0,0,0.3)',
                      position: 'relative',
                      cursor: 'pointer',
                    }}
                  >
                    {/* Tooltip on hover */}
                    {hoveredLocation?.name === loc.name && (
                      <div
                        style={{
                          position: 'absolute',
                          top: -30,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          background: 'rgba(0,0,0,0.75)',
                          color: 'white',
                          padding: '4px 8px',
                          borderRadius: '6px',
                          fontSize: '12px',
                          whiteSpace: 'nowrap',
                          pointerEvents: 'none',
                        }}
                      >
                        {loc.name}
                      </div>
                    )}
                  </div>
                </Marker>
              ))}
            </Map>
          </div>
        </div>

        {/* Sidebar */}
        <div style={{
          flex: 1.2,
          padding: '30px 20px',
          background: 'rgba(255, 255, 255, 0.4)',
          backdropFilter: 'blur(12px)',
          borderLeft: '1px solid rgba(255,255,255,0.3)',
          color: '#333',
          overflowY: 'auto',
          boxShadow: '-4px 0 10px rgba(0,0,0,0.1)',
          height: 'calc(100vh - 80px)', // Adjust for footer height
        }}>
          <h2 style={{ marginBottom: '10px', fontWeight: 600 }}>📍 Locations</h2>

          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ color: '#e53935' }}>Headquarters - USA</h3>
            <ul style={listStyle}>
              <li>California</li>
              <li>Florida</li>
              <li>Colorado</li>
              <li>Alabama</li>
            </ul>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ color: '#388e3c' }}>Subsidiary - India</h3>
            <ul style={listStyle}>
              <li>Karnataka</li>
              <li>Odisha</li>
              <li>Gujarat</li>
              <li>Assam</li>
            </ul>
          </div>

          <div>
            <h3 style={{ color: '#fbc02d' }}>Other Countries</h3>
            <ul style={listStyle}>
              <li>Bangladesh</li>
              <li>Nepal</li>
              <li>Dubai</li>
              <li>Qatar</li>
              <li>Saudi</li>
              <li>Canada</li>
            </ul>
          </div>
        </div>
      </div>

     
    </div>
  );
}

const listStyle = {
  listStyleType: 'none',
  paddingLeft: 0,
  marginTop: 10,
  lineHeight: 1.6,
};