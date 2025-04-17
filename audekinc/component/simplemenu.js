
// import React, { useState } from "react";
// import Link from "next/link";

// // Hearing Aid Icon component (with correct file path)
// const HearingIcon = () => (
//   <img
//     src="/hearing-aid.svg.png" // Correct path based on your public folder
//     alt="Hearing Aid Icon"
//     className="w-4 h-4 ml-2 inline-block"
//   />
// );

// // Recursive dropdown list
// export function SimpleMenu({ items }) {
//   return (
//     <ul className="ml-4">
//       {items.map((item, index) => (
//         <MenuItem key={index} item={item} />
//       ))}
//     </ul>
//   );
// }

// // Dropdown item with nested submenu support
// export function MenuItem({ item }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const hasChildren = item.Subproduct && item.Subproduct.length > 0;

//   return (
//     <li className="my-1">
//       {hasChildren ? (
//         <>
//           <button
//             onClick={() => setIsOpen((prev) => !prev)}
//             className="w-full text-left px-3 py-2 rounded border border-gray-300 bg-gray-100 text-gray-900 hover:bg-gray-200 transition-all text-sm font-medium flex items-center justify-between"
//           >
//             <span>{isOpen ? "▾" : "▸"} {item.title}</span>
//             <HearingIcon />
//           </button>

//           {isOpen && (
//             <div className="ml-4 mt-1 border-l border-gray-300 pl-2">
//               <SimpleMenu items={item.Subproduct} />
//             </div>
//           )}
//         </>
//       ) : (
//         <Link
//           href={`/products/${item.title.toLowerCase().replace(/\s+/g, "-")}`}
//           className="ml-4 text-sm text-gray-800 hover:text-red-600 transition-colors flex items-center justify-between"
//         >
//           <span>{item.title}</span>
//           <HearingIcon />
//         </Link>
//       )}
//     </li>
//   );
// }
import React, { useState } from "react";
import Link from "next/link";
import { useTranslation } from 'react-i18next'; // 🔥 i18n import

// Hearing Aid Icon component
const HearingIcon = () => (
  <img
    src="/hearing-aid.svg.png"
    alt="Hearing Aid Icon"
    className="w-4 h-4 ml-2 inline-block"
  />
);

// Recursive dropdown list
export function SimpleMenu({ items }) {
  return (
    <ul className="ml-4">
      {items.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </ul>
  );
}

// Dropdown item with nested submenu support
export function MenuItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = item.Subproduct && item.Subproduct.length > 0;
  const { t } = useTranslation(); // 🧠 get the translator

  return (
    <li className="my-1">
      {hasChildren ? (
        <>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="w-full text-left px-3 py-2 rounded border border-gray-300 bg-gray-100 text-gray-900 hover:bg-gray-200 transition-all text-sm font-medium flex items-center justify-between"
          >
            <span>{isOpen ? "▾" : "▸"} {t(item.translationKey || item.title)}</span>
            <HearingIcon />
          </button>

          {isOpen && (
            <div className="ml-4 mt-1 border-l border-gray-300 pl-2">
              <SimpleMenu items={item.Subproduct} />
            </div>
          )}
        </>
      ) : (
        <Link
          href={`/products/${item.title.toLowerCase().replace(/\s+/g, "-")}`}
          className="ml-4 text-sm text-gray-800 hover:text-red-600 transition-colors flex items-center justify-between"
        >
          <span>{t(item.translationKey || item.title)}</span>
          <HearingIcon />
        </Link>
      )}
    </li>
  );
}
