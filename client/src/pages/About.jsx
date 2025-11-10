import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col items-center justify-center px-6 py-12 text-center text-slate-800 font-poppins">
      {/* Header */}
      <h1 className="text-4xl font-bold text-blue-700 mb-2">🌍 Welcome to HelpHub</h1>
      <p className="text-lg text-slate-600 max-w-2xl mb-8">
        A community-driven platform that connects people who need help with those
        who can offer support — in real time.
      </p>

      {/* Mission Section */}
      <div className="max-w-3xl bg-white shadow-lg rounded-2xl p-8 mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-3">🌟 Our Mission</h2>
        <p className="text-slate-700 leading-relaxed">
          To create a safe and accessible digital space where individuals and organizations
          can connect, support, and empower one another in times of need.
        </p>
      </div>

      {/* Vision Section */}
      <div className="max-w-3xl bg-white shadow-lg rounded-2xl p-8 mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-3">💡 Our Vision</h2>
        <p className="text-slate-700 leading-relaxed">
          A world where every community thrives through compassion, collaboration, 
          and real-time connection.
        </p>
      </div>

      {/* Contact Section */}
      <div className="max-w-3xl bg-white shadow-lg rounded-2xl p-8 mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-3">📞 Contact Us</h2>
        <p className="text-slate-700">
          Email: <a href="mailto:support@helphub.com" className="text-blue-600 hover:underline">support@helphub.com</a><br />
          Phone: +254 700 123 456<br />
          Location: Nairobi, Kenya
        </p>
      </div>

      {/* Social Links */}
      <div className="flex gap-6 text-2xl text-blue-600">
        <a href="https://facebook.com/helphub" target="_blank" rel="noreferrer" className="hover:text-blue-800">
          <FaFacebook />
        </a>
        <a href="https://twitter.com/helphub" target="_blank" rel="noreferrer" className="hover:text-blue-800">
          <FaXTwitter />
        </a>
        <a href="https://instagram.com/helphub" target="_blank" rel="noreferrer" className="hover:text-blue-800">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com/company/helphub" target="_blank" rel="noreferrer" className="hover:text-blue-800">
          <FaLinkedin />
        </a>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-sm text-slate-500">
        © 2025 HelpHub. All rights reserved. | Empowering communities through technology 💙
      </footer>
    </div>
  );
};

export default About;
