import React from 'react'
import { FaGithub, FaLinkedinIn, FaTwitter, FaYoutube, FaAmazon } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer
      className="w-full h-[192px] py-[37px]
      rounded-t-[24px] flex flex-col items-center justify-center
      bg-white bg-opacity-20 px-5"
    >
      <div className="flex justify-center items-center space-x-4">
        <FaLinkedinIn size={27} style={{ color: 'black' }} />
        <FaYoutube size={27} style={{ color: 'black' }} />
        <FaGithub size={27} style={{ color: 'black' }} />
        <FaTwitter size={27} style={{ color: 'black' }} />
      </div>

      <hr className="w-full sm:w-[450px] border-t border-gray-400 mt-3" />

      <p className="text-sm font-[500px] mt-5 text-black">©️{new Date().getFullYear()}</p>
      <p className="text-sm font-[500px] text-black">Adengappa 4 Peru</p>
    </footer>
  )
}

export default Footer
