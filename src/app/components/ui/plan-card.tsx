"use client";

import { useMessage } from "@/app/contexts/message-context";
import { useState } from "react";

interface Specification {
  label: string;
  value: string;
}

interface Option {
  label: string;
  value: string;
  discount: number;
  duration: number;
}

interface PlanCardProps {
  code: string;
  monthlyPrice: number;
  specifications: Specification[];
  options: Option[];
  buttonText: string;
}

export function PlanCard({
  code,
  monthlyPrice,
  specifications,
  options,
  buttonText,
}: PlanCardProps) {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const { setMessage } = useMessage();

  const generateMessage = (option: Option | null) => {
    const duration = option ? option.duration : 12;
    const discount = option ? option.discount : 0;
    const totalPrice = monthlyPrice * (1 - discount / 100) * duration;

    return (
      `Olá, gostaria de encomendar o plano ${code}:

` +
      `- ${option ? option.label : "Sem compromisso"}
` +
      `- Total ${Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(totalPrice)} valor estimado ${duration} meses
` +
      `- Especificações:
` +
      specifications
        .map((spec) => `  * ${spec.label}: ${spec.value}`)
        .join("\n") +
      `\n\nPor favor, entrem em contato para prosseguirmos com a encomenda.`
    );
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    const option = options.find((opt) => opt.value === selectedValue) || null;
    setSelectedOption(option);
  };

  const handleOrderClick = () => {
    const messageTemplate = generateMessage(selectedOption);
    setMessage(messageTemplate);
    scrollToContact();
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector("#contato");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const discount = selectedOption ? selectedOption.discount : 0;
  const duration = selectedOption ? selectedOption.duration : 12;
  const discountedMonthlyPrice = monthlyPrice * (1 - discount / 100);
  const totalPrice = discountedMonthlyPrice * duration;
  const originalTotalPrice = monthlyPrice * duration;
  const totalSavings = originalTotalPrice - totalPrice;

  return (
    <div className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl">
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-red-500 to-orange-500" />
      <div className="absolute right-0 top-0 h-40 w-40 translate-x-20 translate-y-[-50%] rounded-full bg-gradient-to-br from-blue-100/30 to-purple-100/30 blur-3xl" />

      <div className="mb-4">
        <span className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-50 to-purple-50 px-3 py-1.5 text-sm font-medium text-[#EA0A1B] ring-1 ring-inset ring-blue-600/10">
          {code}
        </span>
      </div>

      <div className="mb-6 space-y-2">
        <div className="space-y-1">
          <span className="text-sm font-medium text-gray-500">
            Valor mensal
          </span>
          <div className="flex items-baseline">
            <span className="text-3xl font-bold tracking-tight text-gray-900">
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(discountedMonthlyPrice)}
            </span>
            <span className="ml-1 text-sm text-gray-500">/mês</span>
          </div>
        </div>

        <div className="space-y-1">
          <span className="text-sm font-medium text-gray-500">
            Total estimado {duration} meses
          </span>
          <div className="text-xl font-semibold text-gray-900">
            {Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(totalPrice)}
          </div>
        </div>

        {discount > 0 && (
          <div className="space-y-1">
            <span className="text-sm font-medium text-emerald-600">
              Economia total
            </span>
            <div className="flex items-baseline">
              <span className="text-xl font-semibold text-emerald-600">
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(totalSavings)}
              </span>
              <span className="ml-2 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-600">
                -{discount}%
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="mb-4">
        <select
          className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 focus:border-red-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500/20"
          defaultValue=""
          onChange={handleOptionChange}
        >
          <option value="" disabled>
            Selecione uma opção
          </option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={handleOrderClick}
        className="w-full rounded-lg bg-gradient-to-r from-red-600 to-red-700 px-4 py-3 text-sm font-semibold text-white transition-all hover:from-red-700 hover:to-red-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
      >
        {buttonText}
      </button>
    </div>
  );
}
