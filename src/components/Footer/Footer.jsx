import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
function Footer() {
  return (
    <footer className="bg-red-600 text-white border-red-700 w-full fixed bottom-0 left-0 z-40">
      <div className="container mx-auto px-2 py-2">
        <div className="flex flex-row items-center justify-center gap-2 w-full">
          <Logo width="100px" className=""/>
          <span className="text-md text-center">
            &copy; {new Date().getFullYear()} BlogStack. All rights reserved. Made with
            <span className="animate-pulse">❤️</span> by
            <a
              href="https://github.com/Aditya-Suresh25"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-yellow-200 transition-colors ml-1"
            >
              Aditya Suresh
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;