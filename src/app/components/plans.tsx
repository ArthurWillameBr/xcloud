import Image from "next/image";
import Brasil from "../../../public/brasil.png";

import { PlanCard } from "./ui/plan-card";

export function Plans() {
  return (
    <section className="py-20 bg-neutral-800 text-white" id="planos">
      <div className="flex w-full flex-col items-center">
        <div className="flex flex-col items-center text-center md:max-w-3xl md:text-center">
          <p className="text-3xl md:text-4xl uppercase font-bold relative">
            Planos xserver br
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-[#EA0A1B] to-[#f93d3d] rounded-full"></span>
          </p>
          <div className="flex items-center pt-3 gap-2">
            <Image
              src={Brasil}
              alt="Bandeira do Brasil"
              height={24}
              width={24}
            />
            <span className="text-gray-300 ">Datacenter no Brasil</span>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-6 grid max-w-5xl gap-6 grid-cols-1 md:grid-cols-2 px-5 md:px-0 justify-items-center">
        <PlanCard
          code="EX XVM-1"
          monthlyPrice={225.0}
          specifications={[
            { label: "RAM", value: "8GB" },
            { label: "CPU", value: "4 core" },
            { label: "Storage", value: "150GB SSD" },
            { label: "Sistema", value: "Linux / Windows (sob consulta)" },
          ]}
          options={[
            {
              value: "Sem compromisso",
              label: "Sem compromisso",
              discount: 0,
              duration: 12,
            },
            {
              value: "Compromisso de 12 meses",
              label: "Compromisso de 12 meses (-8%)",
              duration: 12,
              discount: 8,
            },
            {
              value: "Compromisso de 24 meses",
              label: "Compromisso de 24 meses (-15%)",
              duration: 24,
              discount: 15,
            },
          ]}
          buttonText="Encomendar agora"
        />
      </div>
    </section>
  );
}
