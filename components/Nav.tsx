"use client";
import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <div className="nav-inner">
        <Link className="nav-logo" href="/">OJASYE<span className="dot"></span></Link>
        <ul className="nav-links">
          <li><a href="#programs">Programs</a></li>
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#science">Science</a></li>
          <li><a href="#plans">Plans</a></li>
          <li><a href="#about">About</a></li>
        </ul>
        <div className="nav-actions">
          <button className="btn-ghost">Sign In</button>
          <button className="btn-solid" onClick={() => document.getElementById("quiz")?.scrollIntoView({behavior:"smooth"})}>Start Free Assessment</button>
        </div>
      </div>
    </nav>
  );
}
