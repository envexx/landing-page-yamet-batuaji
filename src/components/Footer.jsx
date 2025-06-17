import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-sky-50 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top section with columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Logo and brief description */}
          <div className="col-span-1">
            <div className="mb-4">
              <img 
                src="../../public/logo/yamet.png" 
                alt="Klinik Yamet Logo" 
                className="h-12"
              />
            </div>
            <p className="text-gray-600 text-sm mb-6">
              Layanan Terapi dan Konsultasi Tumbuh Kembang Anak oleh Tim Profesional Berpengalaman di Batam Batu Aji.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              <a href="https://facebook.com" className="text-sky-400 hover:text-sky-600 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="https://instagram.com" className="text-sky-400 hover:text-sky-600 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://tiktok.com" className="text-sky-400 hover:text-sky-600 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 0V5.5A5.5 5.5 0 0 1 14.5 0M16 12h2a4 4 0 0 0 0-8h-2v8z"></path>
                </svg>
              </a>
              <a href="https://youtube.com" className="text-sky-400 hover:text-sky-600 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Column 2: Navigation - Services */}
          <div className="col-span-1">
            <h3 className="text-gray-800 font-semibold text-lg mb-4">Layanan Kami</h3>
            <ul className="space-y-2">
              <li>
                <a href="/layanan/terapi-wicara" className="text-gray-600 hover:text-sky-500 text-sm transition-colors duration-300">
                  Terapi Wicara
                </a>
              </li>
              <li>
                <a href="/layanan/terapi-okupasi" className="text-gray-600 hover:text-sky-500 text-sm transition-colors duration-300">
                  Terapi Okupasi
                </a>
              </li>
              <li>
                <a href="/layanan/terapi-sensori" className="text-gray-600 hover:text-sky-500 text-sm transition-colors duration-300">
                  Terapi Sensori Integrasi
                </a>
              </li>
              <li>
                <a href="/layanan/terapi-perilaku" className="text-gray-600 hover:text-sky-500 text-sm transition-colors duration-300">
                  Terapi Perilaku
                </a>
              </li>
              <li>
                <a href="/layanan/konsultasi-psikologi" className="text-gray-600 hover:text-sky-500 text-sm transition-colors duration-300">
                  Konsultasi Psikologi
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Navigation - Quick Links */}
          <div className="col-span-1">
            <h3 className="text-gray-800 font-semibold text-lg mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <a href="/tentang" className="text-gray-600 hover:text-sky-500 text-sm transition-colors duration-300">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="/tim" className="text-gray-600 hover:text-sky-500 text-sm transition-colors duration-300">
                  Tim Terapis
                </a>
              </li>
              <li>
                <a href="/artikel" className="text-gray-600 hover:text-sky-500 text-sm transition-colors duration-300">
                  Artikel
                </a>
              </li>
              <li>
                <a href="/galeri" className="text-gray-600 hover:text-sky-500 text-sm transition-colors duration-300">
                  Galeri
                </a>
              </li>
              <li>
                <a href="/faq" className="text-gray-600 hover:text-sky-500 text-sm transition-colors duration-300">
                  FAQ
                </a>
              </li>
              <li>
                <a href="https://api.whatsapp.com/send?phone=6282385089800&text=Assalamualaikum%21%20%3A%29%20%0D%0AHalo%20Yamet%20Batu%20Aji..%20Saya%20mau%20daftar%20Observasi%20dan%20Assessment%20tumbuh%20kembang%20anak..%20%0D%0A_%2AMohon%20isi%20form%20singkat%20berikut%2A_%20%0D%0A1.%20Nama%20Lengkap%20Anak%20%3A%20%0D%0A2.%20Nama%20Panggilan%20%3A%20%0D%0A3.%20TTL%20%3A%20%0D%0A4.%20Usia%20%3A%20%0D%0A5.%20Keluhan%20%28tuliskan%20minimal%203%29%20%3A%20%0D%0A%20%20%20%20a.%20%0D%0A%20%20%20%20b.%20%0D%0A%20%20%20%20c.%20%0D%0A6.%20Nama%20Ayah%20%3A%20%0D%0A7.%20Nama%20Bunda%20%3A%20%0D%0A8.%20Usaha%20apa%20yang%20sudah%20dilakukan%20selama%20ini%20%3A%20%0D%0A9.%20Kendala%20dalam%20melakukan%20usaha%20tersebut%20%3A%20%0D%0AMengetahui%20Yamet%20Child%20Development%20Center%20dari%3F%20%3A" className="text-gray-600 hover:text-sky-500 text-sm transition-colors duration-300">
                  Hubungi Kami
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Contact Information */}
          <div className="col-span-1">
            <h3 className="text-gray-800 font-semibold text-lg mb-4">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="text-sky-500 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <span className="text-gray-600 text-sm">
                Ruko Villa muka kuning, Tembesi, Kec. Sagulung, Kota Batam, Kepulauan Riau 29439
                </span>
              </li>
              <li className="flex items-start">
                <div className="text-sky-500 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <span className="text-gray-600 text-sm">
                +62 823-8508-9800
                </span>
              </li>
              <li className="flex items-start">
                <div className="text-sky-500 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <span className="text-gray-600 text-sm">
                  info@klinik-yamet.com
                </span>
              </li>
              <li className="flex items-start">
                <div className="text-sky-500 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <span className="text-gray-600 text-sm">
                  Senin - Sabtu: 08.00 - 17.00<br />
                  Minggu: Tutup
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="w-full h-px bg-gray-200 my-6"></div>
        
        {/* Bottom section */}
        <div className="md:flex md:items-center md:justify-between text-sm">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-500">
              © {currentYear} Klinik Tumbuh Kembang Yamet Batam. Hak Cipta Dilindungi.
            </p>
          </div>
          <div className="flex space-x-6 justify-center md:justify-end">
            <a href="/kebijakan-privasi" className="text-gray-500 hover:text-sky-500 transition-colors duration-300">
              Kebijakan Privasi
            </a>
            <a href="/syarat-ketentuan" className="text-gray-500 hover:text-sky-500 transition-colors duration-300">
              Syarat & Ketentuan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;