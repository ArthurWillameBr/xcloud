"use client";

import { useState } from "react";
import Image from "next/image";
import Whatsapp from "../../../../public/whatsapp.svg";
import { X } from "lucide-react";
import { SendHorizonal } from "lucide-react";

export const WhatsappMessage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleWhatsAppRedirect = () => {
    window.open("https://wa.me/558587628622", "_blank");
  };

  return (
    <div className="fixed right-5 bottom-5 z-50">
      {isOpen && (
        <div className="bg-[#DCF8C6] rounded-xl shadow-lg p-4 mb-4 w-80 border border-green-500 relative">
          <div className="flex justify-between items-center mb-2">
            <button
              onClick={toggleDropdown}
              className="p-1 flex w-full justify-end"
            >
              <X size={24} className="text-black" />
            </button>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-inner border border-gray-300 text-gray-700 mb-3">
            <p>Olá! Como podemos ajudar?</p>
          </div>
          <button
            onClick={handleWhatsAppRedirect}
            className="flex items-center justify-center w-full px-6 py-3 rounded-full bg-[#25D366] text-white font-bold tracking-wide uppercase transform hover:scale-105 hover:bg-[#128C7E] transition-all duration-200 shadow-md"
          >
            <span className="mr-2">Iniciar Conversa</span>
            <SendHorizonal size={24} />
          </button>
        </div>
      )}
      <div
        className="cursor-pointer bg-[#25D366] rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300"
        onClick={toggleDropdown}
      >
        <Image
          alt="whatsapp logo"
          src={Whatsapp}
          className="w-7 h-7 md:w-10 md:h-10"
        />
      </div>
    </div>
  );
};
