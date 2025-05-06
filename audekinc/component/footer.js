// import React from "react";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-12 pb-6 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-red-500 flex items-center">
              <span className="bg-white p-1 rounded mr-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 7L12 12L21 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 22V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              AUDEK
            </h2>
            <p className="text-gray-300 italic">We Build Future...</p>
            <p className="text-gray-400 text-sm">
              AUDEK INDIA PRIVATE LIMITED
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 mt-4">
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-2 text-red-500" />
                <span>+91 9769764065</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2 text-red-500" />
                <span>info@audekindia.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white border-b border-red-500 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-red-500 transition-colors">About us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-500 transition-colors">Products</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-500 transition-colors">Support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-500 transition-colors">Contact us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-500 transition-colors">For partners</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white border-b border-red-500 pb-2 inline-block">Our Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-red-500 transition-colors">Hearing Aids</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-500 transition-colors">Accessories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-500 transition-colors">Batteries</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-500 transition-colors">Cleaning Kits</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white border-b border-red-500 pb-2 inline-block">Newsletter</h3>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for the latest updates.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-l focus:outline-none text-gray-800 w-full"
                required
              />
              <button 
                type="submit" 
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-r transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-sm text-gray-400 text-center md:text-left">
            &copy; {new Date().getFullYear()} <span className="font-semibold text-red-500">Audex India Private Limited</span>. All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Cookie Policy</a>
          </div>

          {/* Social Media */}
          <div className="flex space-x-5 items-center">
            <a
              href="https://www.facebook.com/AudekHearing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-gray-300 hover:text-blue-500 transition-transform transform hover:scale-110"
            >
              <Facebook size={22} />
            </a>
            <a
              href="https://www.instagram.com/audekgroup/?next=%2F"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-300 hover:text-pink-500 transition-transform transform hover:scale-110"
            >
              <Instagram size={22} />
            </a>
            <a
              href="https://twitter.com/@AudekGroup"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-gray-300 hover:text-sky-400 transition-transform transform hover:scale-110"
            >
              <Twitter size={22} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;