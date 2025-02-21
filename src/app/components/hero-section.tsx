"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

import Logo from "../../../public/logo.png";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const scrollToResources = () => {
    const contactSection = document.querySelector("#recursos");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      className="flex flex-col items-center justify-center pt-48 md:pt-36 pb-72 md:pb-52 bg-[#3E1F21]"
      id="home"
    >
      <div className="flex h-full w-full items-center justify-center " />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mx-auto flex max-w-5xl flex-col items-center"
      >
        <div className="flex flex-col items-center gap-6 text-center">
          <Image src={Logo} alt="XCLOUD Logo" height={54} width={54} />
          <div>
            <motion.h1
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6 text-pretty text-3xl font-bold md:text-5xl"
            >
              Gerencia a nuvem <br /> com a{" "}
              <span className="bg-gradient-to-r from-[#EA0A1B] to-[#ea3333] bg-clip-text text-transparent animate-pulse duration-500">
                XCLOUD
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-neutral-300 md:text-xl px-6"
            >
              O <span className="text-[#EA0A1B]/90 font-semibold">xCloud</span>{" "}
              é uma plataforma de gerenciamento de nuvem de última geração,
              projetada para oferecer uma experiência unificada e eficiente na
              administração de ambientes de nuvem híbrida e multi-cloud.
              Inspirada no CloudForms, mas com recursos significativamente
              aprimoradas, o{" "}
              <span className="text-[#EA0A1B]/90 font-semibold">xCloud</span> se
              destaca como uma solução abrangente para empresas que buscam
              otimizar suas operações em nuvem
            </motion.p>
          </div>
          <div className="mt-8 flex justify-center gap-2">
            <Button onClick={scrollToResources}>
              Ver Recursos
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
