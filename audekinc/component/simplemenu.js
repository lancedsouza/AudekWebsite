import React, { useState } from "react";

export function SimpleMenu({ items }) {
  return (
    <ul className="space-y-1">
      {items.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </ul>
  );
}

export function MenuItem({ item }) {
  const [open, setOpen] = useState(false);
  const hasChildren = item.Subproduct && item.Subproduct.length > 0;

  return (
    <li>
      {hasChildren ? (
        <>
          <button
            onClick={() => setOpen(prev => !prev)}
            className="w-full text-left px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-sm font-medium transition-all"
          >
            {open ? "▾" : "▸"} {item.title}
          </button>
          {open && (
            <div className="ml-4 mt-1 border-l border-gray-300 pl-2">
              <SimpleMenu items={item.Subproduct} />
            </div>
          )}
        </>
      ) : (
        <p className="ml-3 py-1 text-sm text-gray-700 hover:text-red-500 cursor-pointer transition-all">
          {item.title}
        </p>
      )}
    </li>
  );
}
