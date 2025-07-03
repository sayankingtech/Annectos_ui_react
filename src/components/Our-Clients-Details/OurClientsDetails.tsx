import React from 'react'
import './OurClients.css'

import clients1 from '../../assets/client/CYIENT (1).jpg'
import clients2 from '../../assets/client/EXL (1).jpg'
import clients3 from '../../assets/client/Ey (1).jpg'
import clients4 from '../../assets/client/GRASSLogo 03.jpg'
import clients5 from '../../assets/client/MPHASIS (1).jpg'
import clients6 from '../../assets/client/Marico_logo1.jpg'
import clients7 from '../../assets/client/Nippon-Paint-logo copy.jpg'
import clients8 from '../../assets/client/PB Lite logo.jpg'
import clients9 from '../../assets/client/Puma Logo.jpg'
import clients10 from '../../assets/client/ROBERTSON.jpg'
import clients11 from '../../assets/client/Racold_black.jpg'
import clients12 from '../../assets/client/Span logo (3).png'
import clients13 from '../../assets/client/Shriram Pistons logo.jpg'
import clients14 from '../../assets/client/schneider.jpg'
import clients15 from '../../assets/client/Thomson-Reuters-logo.png'
import clients16 from '../../assets/client/WIPRO (1).jpg'
import clients17 from '../../assets/client/xolo.jpg'
import clients18 from '../../assets/client/relaxo.jpg'
import clients19 from '../../assets/clients/70a1fae2910cfb5aefcd041c2eba2c66.w640.h453-removebg.png'
import clients20 from '../../assets/clients/BOSCH_PT_logo.png'
import clients21 from '../../assets/clients/Blaupunkt.png'
import clients22 from '../../assets/clients/Cargill_logo.png'
import clients23 from '../../assets/clients/EY_logo_slogan.png'
import clients24 from '../../assets/clients/FUCHS.png'
import clients25 from '../../assets/clients/GRASSLogo.png'
import clients26 from '../../assets/clients/Mahindra.png'
import clients27 from '../../assets/clients/Marico_Logo.svg.png'
import clients28 from '../../assets/clients/Mphasis_hp_company.png'
import clients29 from '../../assets/clients/Nerolac_Paints_logo.png'
import clients30 from '../../assets/clients/Nippon-Paint.png'
import clients31 from '../../assets/clients/PBElite1.png'
import clients32 from '../../assets/clients/Relaxo-Logo-PNG.png'
import clients33 from '../../assets/clients/Schneider_Electric.png'
import clients34 from '../../assets/clients/Wipro-logo.png'
import clients35 from '../../assets/clients/shriram.png'
import clients36 from '../../assets/clients/manipalglobal.png'

const clientLogos = [
  clients1,
  clients2,
  clients3,
  clients4,
  clients5,
  clients6,
  clients7,
  clients8,
  clients9,
  clients10,
  clients11,
  clients12,
  clients13,
  clients14,
  clients15,
  clients16,
  clients17,
  clients18,
  clients19,
  clients20,
  clients21,
  clients22,
  clients23,
  clients24,
  clients25,
  clients26,
  clients27,
  clients28,
  clients29,
  clients30,
  clients31,
  clients32,
  clients33,
  clients34,
  clients35,
  clients36
];

const OurClientsDetails: React.FC = () => {
  return (
    <div className="w-[85%] mx-auto pt-6 lg:pt-2 pb-10">
      <div className="clients_page text-xl text-center mb-6">
        <h1 className="text-2xl md:text-3xl lg:text-4xl">CLIENTS</h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 place-items-center">
        {clientLogos.map((logo, index) => (
          <div key={index} className="w-full flex justify-center">
            <img
              src={logo}
              alt={`Client ${index + 1}`}
              className="max-h-25 object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurClientsDetails;

