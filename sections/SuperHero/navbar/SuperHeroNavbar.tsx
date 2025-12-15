"use client";

import Link from "next/link";
import { useState } from "react";

const SuperHeroNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    "HOME",
    "ABOUT US",
    "SERVICES",
    "PROJECTS",
    "BLOG",
    "PAGE",
    "CONTACT",
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <svg
                width="40"
                height="33"
                viewBox="0 0 40 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_21_191)">
                  <path
                    d="M18.0945 32.6674C14.8636 32.6674 11.7052 31.7094 9.01885 29.9144C6.33247 28.1194 4.23868 25.5681 3.00227 22.5831C1.76587 19.5982 1.44237 16.3136 2.07268 13.1448C2.703 9.97603 4.25882 7.06529 6.5434 4.78071C8.82798 2.49612 11.7387 0.940302 14.9075 0.309986C18.0763 -0.320329 21.3609 0.00317134 24.3458 1.23958C27.3308 2.47599 29.8821 4.56977 31.6771 7.25616C33.472 9.94254 34.4301 13.1009 34.4301 16.3318C34.4253 20.6628 32.7027 24.815 29.6402 27.8775C26.5777 30.94 22.4255 32.6626 18.0945 32.6674Z"
                    fill="#034833"
                  />
                  <path
                    d="M18.094 31.6723C21.1279 31.6723 24.0938 30.7726 26.6164 29.087C29.1391 27.4015 31.1053 25.0057 32.2663 22.2026C33.4274 19.3996 33.7312 16.3152 33.1393 13.3396C32.5474 10.3639 31.0864 7.63054 28.941 5.48519C26.7957 3.33985 24.0623 1.87885 21.0867 1.28695C18.111 0.69505 15.0266 0.998834 12.2236 2.15989C9.42055 3.32094 7.02476 5.28712 5.33917 7.80977C3.65358 10.3324 2.75391 13.2983 2.75391 16.3323C2.7587 20.3992 4.37642 24.2982 7.2522 27.174C10.128 30.0498 14.027 31.6675 18.094 31.6723Z"
                    fill="white"
                  />
                  <path
                    d="M38.2725 10.5392C38.0139 10.4436 37.326 9.63156 34.2358 9.89016C33.2014 9.97808 30.2042 10.9246 26.4157 12.1063L17.5458 8.52734L14.8719 8.8118L22.0015 13.4847C19.5318 14.245 16.9329 15.0182 14.4271 15.6905L9.21119 12.0701L7.76562 12.4632L12.1825 18.1058L10.9076 20.7487L12.7566 20.5289L13.9823 18.7575C17.4592 18.6465 20.9201 18.2356 24.3263 17.5292L22.5937 24.5113L24.784 23.57L28.1768 16.6939C38.8647 14.1389 39.7853 12.1839 39.987 11.6383C40.2042 11.0176 38.5337 10.6375 38.2725 10.5392Z"
                    fill="#034833"
                  />
                  <path
                    d="M4.25098 27.3243L22.0063 24.0918L22.3425 22.1445L4.25098 27.3243Z"
                    fill="#034833"
                  />
                  <path
                    d="M2.22656 24.5935L22.692 20.5154L23.1058 18.4414L2.22656 24.5935Z"
                    fill="#034833"
                  />
                  <path
                    d="M10.548 19.9252L1.02637 21.8854L11.1453 18.7383L10.548 19.9252Z"
                    fill="#034833"
                  />
                  <path
                    d="M10.6082 17.1114L0.4375 19.3948L9.8841 16.2891L10.6082 17.1114Z"
                    fill="#034833"
                  />
                  <path
                    d="M9.04577 14.8171L0 16.9066L8.3217 13.9922L9.04577 14.8171Z"
                    fill="#034833"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_21_191">
                    <rect width="40" height="32.6713" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <span className="text-xl md:text-2xl font-bold text-green-900">
              Supper Heroes
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <div key={link} className="relative group">
                <Link
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  className="text-green-900 font-bold hover:text-green-600 transition-colors text-sm  flex items-center space-x-1"
                >
                  <span>{link}</span>
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-0.5"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <button className="hidden lg:flex items-center space-x-2 bg-[#83CD20] hover:bg-[#66A517] text-white px-4 py-3.5 rounded-full font-medium text-sm transition-colors">
              <span>Get An Appointment of Our Hero</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12L10 8L6 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-gray-800 hover:text-green-600 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="flex flex-col space-y-2 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link}
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-800 hover:text-green-600 transition-colors text-base font-medium flex items-center justify-between py-2"
                >
                  <span>{link}</span>
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              ))}
              <button className="flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-lg font-medium text-sm transition-colors mt-4">
                <span>Get An Appointment of Our Hero</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12L10 8L6 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default SuperHeroNavbar;
