"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@//app/lib/utils";
import Logo from "../../../public/logo.png";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Adiciona classe ao body para prevenir scroll quando menu está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const scrollToPlans = () => {
    const plansSection = document.querySelector("#planos");
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || isOpen
          ? "bg-[#3E1F21]/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src={Logo || "/placeholder.svg"}
              alt="XCLOUD Logo"
              height={32}
              width={32}
            />
            <span className="text-xl font-bold text-white pt-1">CLOUD</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#recursos"
              className="text-neutral-200 hover:text-white transition-colors"
            >
              Recursos
            </Link>
            <Link
              href="#tecnologias"
              className="text-neutral-200 hover:text-white transition-colors"
            >
              Tecnologias
            </Link>
            <Link
              href="#planos"
              className="text-neutral-200 hover:text-white transition-colors"
            >
              Planos
            </Link>
            <Link
              href="#contato"
              className="text-neutral-200 hover:text-white transition-colors"
            >
              Contato
            </Link>
            <Button onClick={scrollToPlans} size="sm">
              Começar Agora
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 top-16 ">
            <div className="container mx-auto px-4 bg-[#3E1F21]/90 backdrop-blur-xl">
              <nav className="flex flex-col gap-4 py-6">
                <Link
                  href="#recursos"
                  className="text-neutral-200 hover:text-white transition-colors text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Recursos
                </Link>
                <Link
                  href="#tecnologias"
                  className="text-neutral-200 hover:text-white transition-colors"
                >
                  Tecnologias
                </Link>
                <Link
                  href="#planos"
                  className="text-neutral-200 hover:text-white transition-colors"
                >
                  Planos
                </Link>
                <Link
                  href="#contato"
                  className="text-neutral-200 hover:text-white transition-colors text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Contato
                </Link>
                <Button onClick={scrollToPlans} className="w-full mt-4">
                  Começar Agora
                </Button>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
