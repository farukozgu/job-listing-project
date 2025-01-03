import React from "react";
import Arrow from "../assets/up-arrow.png";
const ScrollToTop = () => {};
const handleScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Yumuşak kaydırma efekti
  });
};
function Footer() {
  return (
    <div>
      <section className="footer bg-gray-900 text-white py-6">
        <div className="container mx-auto grid grid-cols-12 items-center">
          <div className="col-span-6 text-center sm:text-left">
            <p className="text-sm">Copyright 2025 ©</p>
          </div>
          <div className="col-span-6 text-center sm:text-right flex justify-end items-center gap-2">
            <p className="text-sm">Designed by Muratcan Salih</p>
            <img
              src={Arrow}
              id="upArrow"
              className="w-full max-w-8"
              alt="Yukarı Git"
              onClick={handleScrollToTop}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
