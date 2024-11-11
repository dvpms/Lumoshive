import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#E4EBF5] text-gray-500 px-24 py-6 mt-4 text-sm font-normal">
      <div className="container flex mx-auto text-center px-14">
        <p className='me-auto'>© 2009-2024, PT Tokopedia</p>
        <ul className='flex space-x-4'>
          <li><a href="">Tentang Kami</a></li>
          <li><a href="">Pusat Penjual</a></li>
          <li><a href="">Mobile Apps</a></li>
          <li><a href="">Mitra</a></li>
          <li><a href="">Karir</a></li>
          <li><a href="">Tokopedia Care</a></li>
          <li><a href="">B2B Digital</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
