import React, { useState } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

          * {
            font-family: 'Poppins', sans-serif;
          }
        `}
      </style>

      <section className="pb-32 md:pb-44 bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/bg-with-grid.png')] bg-cover bg-center bg-no-repeat text-slate-800 text-sm">
        <nav className="flex items-center justify-between p-4 md:px-16 lg:px-24 xl:px-32 border-b border-white/25 w-full">
          <a href="https://prebuiltui.com">
            <svg width="157" height="40" viewBox="0 0 157 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M47.904 28.28q-1.54 0-2.744-.644a5.1 5.1 0 0 1-1.904-1.82q-.672-1.148-.672-2.604v-3.864q0-1.456.7-2.604a4.9 4.9 0 0 1 1.904-1.792q1.204-.672 2.716-.672 1.82 0 3.276.952a6.44 6.44 0 0 1 2.324 2.52q.868 1.567.868 3.556 0 1.96-.868 3.556a6.5 6.5 0 0 1-2.324 2.492q-1.456.924-3.276.924" fill="#050040" />
            </svg>
          </a>

          <ul
            id="menu"
            className={`max-md:absolute max-md:h-full max-md:z-50 max-md:w-full max-md:top-0 max-md:-left-full transition-all duration-300 max-md:backdrop-blur max-md:bg-white/70 max-md:text-base flex flex-col md:flex-row items-center justify-center gap-8 font-medium ${
              menuOpen ? "max-md:left-0" : ""
            }`}
          >
            <li onClick={() => setMenuOpen(false)} className="hover:text-slate-500"><a href="#">Home</a></li>
            <li onClick={() => setMenuOpen(false)} className="hover:text-slate-500"><a href="/products">Products</a></li>
            <li onClick={() => setMenuOpen(false)} className="hover:text-slate-500"><a href="#">Stories</a></li>
            <li onClick={() => setMenuOpen(false)} className="hover:text-slate-500"><a href="#">Pricing</a></li>
            <li onClick={() => setMenuOpen(false)} className="hover:text-slate-500"><a href="#">Docs</a></li>

            <button
              onClick={() => setMenuOpen(false)}
              id="close-menu"
              className="md:hidden bg-gray-800 hover:bg-black text-white p-2 rounded-md aspect-square font-medium transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </ul>

          <button onClick={() => setMenuOpen(true)} id="open-menu" className="md:hidden">
            <svg className="size-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <Link to="/about">
          <button className="max-md:hidden px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 transition rounded-full">
            Contact us
          </button>
          </Link>
        </nav>

        <div className="flex flex-col-reverse gap-10 md:flex-row px-4 md:px-16 lg:px-24 xl:px-32 mt-12 md:mt-32">
          <div className="max-md:text-center">
            <h5 className="text-4xl md:text-6xl/[76px] font-semibold max-w-xl bg-gradient-to-r from-slate-900 to-[#6D8FE4] text-transparent bg-clip-text">
              Build Skills That Get You Hired
            </h5>

            <p className="text-sm md:text-base max-w-lg mt-6 max-md:px-2 text-slate-600">
              Join a world-class, personalized learning journey built to turn you into a high-performing tech professional — and get hired by top product companies.
            </p>

            <div className="flex items-center gap-4 mt-6">
              <button className="px-8 py-3 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white active:scale-95 transition-all" type="button">
                Get Started
              </button>

              <button className="px-5 py-3 rounded-md bg-white text-indigo-600 border border-indigo-400 flex items-center gap-2 hover:bg-indigo-600/5 active:scale-95 transition-all" type="button">
                <span>Our courses</span>
              </button>
            </div>

            <div className="flex items-center mt-9">
              <div className="flex -space-x-3.5 pr-3">
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200" alt="image" className="size-10 border-2 border-white rounded-full" />
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200" alt="image" className="size-10 border-2 border-white rounded-full" />
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop" alt="image" className="size-10 border-2 border-white rounded-full" />
              </div>
              <p className="text-sm text-slate-500">Used by 1,000+ people</p>
            </div>
          </div>

          <div className="w-full md:max-w-xs lg:max-w-lg">
            <img className="w-full h-auto" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/users-group.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;