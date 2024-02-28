import React from 'react'
import '../FOOTER/footer.css'
import ButtonWhatsapp from "../ButtonWhatsapp/ButtonWhatsapp";

const Footer = () => {
  const handleShowSettings = () => {
    setShowSettings(!showSettings);
  };

  return (
    <div className='Container__footer'>
      <h1>Hola</h1>
      <li onClick={handleShowSettings}>
          <i className="bx bx-cog bx-flip-vertical"></i>
        </li>
    </div>
  )
}

export default Footer
