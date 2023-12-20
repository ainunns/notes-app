import React from "react";
import Navbar from "./Navbar";

export default function Layout({ withNavbar = true, children }) {
  return (
    <main className="w-full bg-slate-100 min-h-screen relative">
      {withNavbar && <Navbar />}
      {children}
    </main>
  );
}
