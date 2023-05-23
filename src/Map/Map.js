import React from 'react';
import './Map.css'

function MapComponent() {
  const link = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1831.3111423056419!2d-46.87395461012863!3d-23.365695100000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf1d2d3e6ddafb%3A0x9039061336051b75!2sBom%20da%20Boca%20Container!5e0!3m2!1spt-BR!2sbr!4v1684614438177!5m2!1spt-BR!2sbr"
  return (

    <div>
      <div className='canvas'>
      <iframe
        src={link}
        width="100%"
        height="300"
        style={{ border: '0' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps"
      />
      </div>
    </div>
  );
}

export default MapComponent;
