import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const CtaWithTheme = ({ isOpen = false, onClose = () => {} }) => {
  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0"
        }`}
        onClick={onClose}
        aria-hidden={!isOpen}
      />

      {/* Sliding panel */}
      <aside
        className={`fixed top-0 right-0 h-full w-[393px] max-w-full bg-[#183942] text-white transform transition-transform duration-300 shadow-lg pointer-events-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="relative h-full overflow-hidden">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-[64px] h-[64px] bg-[#ef4b6e] rounded-full flex items-center justify-center text-white font-semibold"
            aria-label="Close contact"
          >
            Close
          </button>

          <div className="px-10 pt-28">
            <h2 className="font-syne-bold text-white text-5xl font-bold leading-[49px] tracking-[1.9px]">
              To Say
              <br />
              hello
            </h2>

            <div className="mt-12 space-y-8">
              <div>
                <label className="text-[#ffffff85] text-[14.5px] tracking-[1.7px]">Say hello</label>
                <div className="mt-3">
                  <div className="w-full border-b border-white border-opacity-20 h-px" />
                </div>
              </div>

              <div>
                <label className="text-[#ffffff85] text-[14.5px] tracking-[1.7px]">Email</label>
                <div className="mt-3">
                  <div className="w-full border-b border-white border-opacity-20 h-px" />
                </div>
              </div>

              <div>
                <label className="text-[#ffffff85] text-[14.5px] tracking-[1.7px]">Your Message</label>
                <div className="mt-3">
                  <div className="w-full border-b border-white border-opacity-20 h-px" />
                </div>
              </div>

              <div className="mt-6">
                <button className="w-full bg-white text-[#1c2042] py-3 flex items-center justify-between px-4">
                  <span className="font-extrabold text-[9px] tracking-[1.26px]">SEND</span>
                  <FiArrowRight className="w-5 h-5 text-[#1c2042]" />
                </button>
              </div>
            </div>
          </div>

          {/* Footer contact info */}
          <div className="absolute bottom-8 right-8 text-right text-[#ffffffb3]">
            <div className="text-[12.5px]">+91-8002315259</div>
            <div className="text-[12.5px] mt-1">info@flexirl.com</div>
            <div className="text-[12.5px] mt-1">Bhubaneswar, Odisha</div>
          </div>

          {/* Social icons */}
          <div className="absolute bottom-8 left-8 flex space-x-3 text-white">
            <a href="#" aria-label="facebook" className="text-sm"><FaFacebookF /></a>
            <a href="#" aria-label="instagram" className="text-sm"><FaInstagram /></a>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default CtaWithTheme;
