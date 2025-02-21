import Image from "next/image";
import Brasil from "../../../public/brasil.png";
import USA from "../../../public/estados-unidos.png";

import { PlanCardsBr } from "./plan-cards-br";
import { PlanCardsUsa } from "./pan-cards-usa";

export function Plans() {
  return (
    <section className="py-20 bg-neutral-800 text-white" id="neymar">
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
      <PlanCardsBr />
      <div className="flex w-full flex-col items-center mt-14">
        <div className="flex flex-col items-center text-center md:max-w-3xl md:text-center">
          <p className="text-3xl md:text-4xl uppercase font-bold relative">
            Planos xserver usa
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-[#EA0A1B] to-[#f93d3d] rounded-full"></span>
          </p>
          <div className="flex items-center pt-3 gap-2">
            <Image src={USA} alt="Bandeira do Brasil" height={24} width={24} />
            <span className="text-gray-300 ">
              Datacenter nos Estados Unidos
            </span>
          </div>
        </div>
      </div>
      <PlanCardsUsa />
    </section>
  );
}
