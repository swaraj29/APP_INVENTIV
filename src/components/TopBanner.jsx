import React, { useEffect, useState } from "react";

export default function TopBanner() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY <= 50;
      setShow(isTop);

      if (isTop) {
        document.body.classList.remove("scrolled");
      } else {
        document.body.classList.add("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
          .inter-font {
            font-family: 'Inter', sans-serif;
          }
        `}
      </style>

      <div
        className={`fixed top-0 w-full z-50 bg-blue-600 text-white text-center transition-all duration-500 ease-in-out ${
          show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
        } inter-font`}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <p className="py-2 text-[10px] sm:text-[11px] leading-snug">
            Uncover proof of Appinventiv's impact across 3000+ digital deliveries for 35+ industries.{" "}
            <a href="#" className="underline font-semibold">
              Explore Now &gt;
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
