import React from "react";

export const Footer = () => {
  return (
    <footer className="w-full bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            <div className="text-2xl font-bold">FLEXIRL</div>
            <p className="text-sm text-gray-700">
              A Terralogic company crafting meaningful experiences through
              Research, Design and Development
            </p>
            <p className="text-sm text-gray-500">© 2025 Flexirl - Flexirl.com</p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="text-lg font-semibold">Write to us</div>
            <a className="text-sm text-gray-700">info@flexirl.com</a>
            <div className="text-xs text-gray-500 mt-2">for business</div>

            <div className="mt-4 text-lg font-semibold">Careers</div>
            <a className="text-sm text-gray-700">careers@flexirl.com</a>
            <div className="text-xs text-gray-500 mt-2">for jobs/internships</div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="text-lg font-semibold">Follow Us</div>
            <div className="flex gap-4 items-center">
              <span className="text-sm font-medium">LinkedIn</span>
              <span className="text-sm font-medium">Instagram</span>
              <span className="text-sm font-medium">X</span>
              <span className="text-sm font-medium">Facebook</span>
              <span className="text-sm font-medium">Behance</span>
            </div>

            <div className="mt-6">
              <nav className="flex gap-4 text-sm text-gray-600">
                <a>FAQs</a>
                <a>Privacy Policy</a>
                <a>Terms of Use</a>
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-center text-sm text-gray-500">
          Built with care — Flexirl
        </div>
      </div>
    </footer>
  );
};

export default Footer;
