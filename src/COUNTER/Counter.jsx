import React from 'react'
import './counter.css'

const Counter = () => {
  return (
    <div className="count__visitor">{/*CONTADOR DE VISITANTES*/}
    <h3 id="visitor" >Eres el visitante N°:</h3>
    <img
      src="https://counter11.optistats.ovh/private/contadorvisitasgratis.php?c=suf395k9z411zuz58t3lcusts165hyql"
      border="0"
      title="contador de visitas gratis"
      alt="contador de visitas gratis"
    />
  </div>
  )
}

export default Counter
