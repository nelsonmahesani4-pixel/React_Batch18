import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap');
          *{
            font-family: "Geist", sans-serif;
          }
        `}
      </style>

      <nav className="bg-white px-6 md:px-16 lg:px-24 xl:px-32 py-4 flex items-center justify-between relative">
        
        {/* LEFT SIDE */}
        <div className="flex items-center gap-20">
          <a href="#">
            <h1 className="text-xl font-bold">Logo</h1>
          </a>

          <div className="hidden md:flex items-center gap-8">
            
            {/* DROPDOWN */}
            <div className="relative group">
              <button className="flex items-center gap-1.5 text-sm text-zinc-800 bg-transparent border-0 py-2">
                All Pages
              </button>

              <div className="absolute top-full left-0 mt-1 w-44 bg-white border rounded-xl shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <a href="#" className="block px-4 py-2 text-sm hover:bg-zinc-50">Landing Pages</a>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-zinc-50">About Pages</a>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-zinc-50">Contact Pages</a>
              </div>
            </div>

            <a href="#" className="text-sm text-zinc-500 hover:text-black">Company</a>
            <a href="#" className="text-sm text-zinc-500 hover:text-black">Pricing</a>
          </div>
        </div>

        {/* RIGHT BUTTON */}
        <button className="hidden md:block bg-black text-white px-4 py-2 rounded-full">
          Get Template
        </button>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
        >
          ☰
        </button>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white p-5 flex flex-col gap-3 md:hidden">
            
            <button onClick={() => setDropdownOpen(!dropdownOpen)}>
              All Pages
            </button>

            {dropdownOpen && (
              <div className="pl-4">
                <p>Landing Pages</p>
                <p>About Pages</p>
              </div>
            )}

            <a href="#">Company</a>
            <a href="#">Pricing</a>

            <button className="bg-black text-white py-2 rounded">
              Get Template
            </button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;