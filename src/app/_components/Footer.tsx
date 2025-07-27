"use client";
import Link from "next/link";

const Footer = () => {
  const scrollToPackages = () => {
    const element = document.getElementById("all-packages");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div>
          <h3 className="font-bold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/">Home</Link></li>
            <li><button onClick={scrollToPackages}>All Packages</button></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2">Company</h3>
          <p>JourneyRouters Pvt Ltd.</p>
          <p>123 Travel Street, New Delhi</p>
        </div>

        <div>
          <h3 className="font-bold mb-2">Location</h3>
          <iframe
            className="w-full h-32"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12..."
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
