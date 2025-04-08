import React from "react";

function Footer() {
  return (
    <footer className="flex justify-between items-center p-4 bg-white-600 text-black">
      <p>&copy; {new Date().getFullYear()} Audekinc. All Rights Reserved.</p>
      <div className="flex gap-4">
        <a href="#" className="hover:underline">Privacy Policy</a>
        <a href="#" className="hover:underline">Terms of Service</a>
      </div>
    </footer>
  );
}

export default Footer;
