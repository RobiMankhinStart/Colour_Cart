"use client";

import MobileNavbar from "./MobileNavbar";
import Navbar from "./Navbar";

export default function MainNav() {
  return (
    <div className="py-4 shadow z-40 bg-white fixed top-0 left-0 right-0">
      <div className="container">
        <Navbar />
        <MobileNavbar />
      </div>
    </div>
  );
}
