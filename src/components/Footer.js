import React from 'react'
import '../styles/footer.css'

const Footer = ({footer}) => {
  return (
    <>
    <footer className="footer">{footer[0].copirigth}</footer>
    </>
  )
}

export default Footer