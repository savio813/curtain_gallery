import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#0F3D2E] text-white mt-16">

      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">

        {/* About */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-amber-400">
            Curtain Gallery
          </h2>

          <p className="text-sm text-gray-200 leading-6">
            Premium curtains, sofas, beds and home furnishings.
            We bring comfort and elegance to every Kerala home with
            quality products at affordable prices.
          </p>
        </div>


        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-2 text-sm text-gray-200">
            <li><a href="/" className="hover:text-amber-400">Home</a></li>
            <li><a href="/products" className="hover:text-amber-400">Products</a></li>
            <li><a href="/contact" className="hover:text-amber-400">Contact</a></li>
            <li>
              <a
                href="https://wa.me/919999999999"
                className="hover:text-amber-400"
              >
                WhatsApp Enquiry
              </a>
            </li>
          </ul>
        </div>


        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4">Contact Us</h3>

          <ul className="text-sm space-y-2 text-gray-200">
            <li>📞 +91 99999 99999</li>
            <li>✉️ curtaingallery@gmail.com</li>
            <li>📍 Thrissur, Kerala, India</li>
          </ul>
        </div>


        {/* Location Map */}
        <div>
          <h3 className="font-semibold mb-4">Location</h3>

          <iframe
            title="location"
            src="https://maps.google.com/maps?q=kerala&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-32 rounded-xl"
          />
        </div>
      </div>


      {/* BOTTOM BAR */}
      <div className="border-t border-white/20 text-center py-4 text-sm text-gray-300">

        © {new Date().getFullYear()} Curtain Gallery. All rights reserved. <br />

        <span className="text-amber-400 font-medium">
          Website handled by Xavi
        </span>

      </div>
    </footer>
  );
}
