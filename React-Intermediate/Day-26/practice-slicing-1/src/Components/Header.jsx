import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex justify-between bg-[#222222] text-white items-center px-48 py-1 text-xs">
        <ul className="flex space-x-4">
          <li>
            <a href="">Jual Beli Online</a>
          </li>
          <li>
            <a href="">Official Store</a>
          </li>
          <li>
            <a href="">Produk Digital</a>
          </li>
          <li>
            <a href="">Tiket Kereta</a>
          </li>
          <li>
            <a href="">Tiket Pesawat</a>
          </li>
          <li>
            <a href="">Donasi</a>
          </li>
          <li>
            <a href="">Layanan Finansial</a>
          </li>
          <li>
            <a href="">Bantuan</a>
          </li>
        </ul>

        <div className="media-social">
          <ul className=" flex space-x-4 text-base ">
            <li><a href=""><i className="bi bi-facebook"></i></a></li>
            <li><a href=""><i className="bi bi-instagram "></i></a></li>
            <li><a href=""><i className="bi bi-twitter "></i></a></li>
            <li><a href=""><i className="bi bi-youtube "></i></a></li>
            </ul>
        </div>
      </div>
      <header className="bg-white shadow py-4 px-40">
        <div className="flex flex-col justify-between">
          {/* Logo */}
          <div className="flex">
            <img
              src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/arael/kratos/tokopedia-logo.276ef32a.png"
              alt="Tokopedia"
              className="h-20 mr-4"
            />
          </div>
          {/* Navigation Menu */}
          <nav className="flex justify-evenly space-x-6 text-black text-base font-semibold">
            <a
              href="#home"
              className="hover:border-b-[3px] hover:border-[#4DB2EC] selection::border-[#42B549] py-1 px-4"
            >
              HOME
            </a>
            <a href="#company" className="hover:border-b-[3px] hover:border-[#4DB2EC] selection::border-[#42B549] py-1 px-4">
              COMPANY
            </a>
            <div className="relative group">
              <button className="hover:border-b-[3px] hover:border-[#4DB2EC] selection::border-[#42B549] py-1 px-4">
                COMMUNITY <span className="inline-block ml-1">v</span>
              </button>
              <div className="absolute left-0 hidden group-hover:block bg-white border shadow-lg mt-1 py-2 z-50">
                <a
                  href="#sub1"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 whitespace-nowrap"
                >
                  Sub Menu 1
                </a>
                <a
                  href="#sub2"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 whitespace-nowrap"
                >
                  Sub Menu 2
                </a>
              </div>
            </div>
            <div className="relative group">
              <button className="hover:border-b-[3px] hover:border-[#4DB2EC] selection::border-[#42B549] py-1 px-4">
                STORIES <span className="inline-block ml-1">v</span>
              </button>
              <div className="absolute left-0 hidden group-hover:block bg-white border shadow-lg mt-1 py-2 z-50">
                <a
                  href="#sub1"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 whitespace-nowrap"
                >
                  Sub Menu 1
                </a>
                <a
                  href="#sub2"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 whitespace-nowrap"
                >
                  Sub Menu 2
                </a>
              </div>
            </div>
            <a href="#toplist" className="hover:border-b-[3px] hover:border-[#4DB2EC] selection::border-[#42B549] py-1 px-4">
              TOP LIST
            </a>
            <div className="relative group">
              <button className="hover:border-b-[3px] hover:border-[#4DB2EC] selection::border-[#42B549] py-1 px-4">
                NEWSROOM <span className="inline-block ml-1">v</span>
              </button>
              <div className="absolute left-0 hidden group-hover:block bg-white border shadow-lg mt-1 py-2 z-50">
                <a
                  href="#sub1"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 whitespace-nowrap"
                >
                  Sub Menu 1
                </a>
                <a
                  href="#sub2"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 whitespace-nowrap"
                >
                  Sub Menu 2
                </a>
              </div>
            </div>
            <div className="relative group">
              <button className="hover:border-b-[3px] hover:border-[#4DB2EC] selection::border-[#42B549] py-1 px-4">
                KALKUPEDIA <span className="inline-block ml-1">v</span>
              </button>
              <div className="absolute left-0 hidden group-hover:block bg-white border shadow-lg mt-1 py-2 z-50">
                <a
                  href="#sub1"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 whitespace-nowrap"
                >
                  Kalkulator BMI
                </a>
              </div>
            </div>
            <div className="text-black text-xl cursor-pointer inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
