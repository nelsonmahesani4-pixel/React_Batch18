import React, { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <>
            <nav className="bg-white px-6 md:px-16 lg:px-24 xl:px-32 py-4 flex items-center justify-between relative">
                
                {/* LEFT SIDE */}
                <div className="flex items-center gap-20">
                    <h1 className="text-xl font-bold">Logo</h1>

                    <div className="hidden md:flex items-center gap-8">
                        
                        {/* DROPDOWN */}
                        <div className="relative group">
                            <button className="flex items-center gap-1.5 text-sm text-zinc-800">
                                All Pages
                            </button>

                            <div className="absolute top-full left-0 mt-1 w-44 bg-white border rounded-xl shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                                <a href="#" className="block px-4 py-2 text-sm hover:bg-zinc-50">Landing Pages</a>
                                <a href="./pages/about" className="block px-4 py-2 text-sm hover:bg-zinc-50">About Pages</a>
                                <a href="#" className="block px-4 py-2 text-sm hover:bg-zinc-50">Contact Pages</a>
                            </div>
                        </div>

                        <a href="#" className="text-sm">Company</a>
                        <a href="#" className="text-sm">Pricing</a>
                        <a href="#" className="text-sm">Blogs</a>
                    </div>
                </div>

                {/* BUTTON */}
                <button className="hidden md:block bg-black text-white px-5 py-2 rounded-full">
                    Get Template
                </button>

                {/* MOBILE MENU ICON */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden"
                >
                    ☰
                </button>

                {/* MOBILE MENU */}
                {menuOpen && (
                    <div className="absolute top-full left-0 w-full bg-white p-5 flex flex-col gap-2 md:hidden">
                        
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="text-left"
                        >
                            All Pages
                        </button>

                        {dropdownOpen && (
                            <div className="pl-4">
                                <a href="#">Landing</a>
                                <a href="#">About</a>
                            </div>
                        )}

                        <a href="#">Company</a>
                        <a href="#">Pricing</a>
                        <a href="#">Blogs</a>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;

// when we use navlink, Link, useNavigate()
// Link --> to navigate between pages without reloading the page  or simple routing custom style for active link
// NavLink --> to navigate between pages without reloading the page and also gives us active class to style the active link
// or builten style with react router
// useNavigate() --> to navigate programmatically (on button click, after form submission, etc.)
// when we don't need to interact witn button or link and just want to navigate to another page we can use useNavigate() hook
// useNavigate() returns a function that we can call to navigate to another page
// const navigate = useNavigate();
// navigate('/about'); // this will navigate to the about page