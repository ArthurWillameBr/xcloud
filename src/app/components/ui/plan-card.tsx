"use client";

import { useState } from "react";

interface Specification {
  label: string;
  value: string;
}

interface Option {
  label: string;
  value: string;
  discount: number; // Percentual de desconto
  duration: number; // Duração em meses
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

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    const option = options.find((opt) => opt.value === selectedValue) || null;
    setSelectedOption(option);
  };

  const discount = selectedOption ? selectedOption.discount : 0;
  const duration = selectedOption ? selectedOption.duration : 12;
  const discountedMonthlyPrice = monthlyPrice * (1 - discount / 100);
  const totalPrice = discountedMonthlyPrice * duration;
  const originalTotalPrice = monthlyPrice * duration;
  const totalSavings = originalTotalPrice - totalPrice;

  return (
    <div className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl">
      {/* Decorative gradient elements */}
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-red-500 to-orange-500" />
      <div className="absolute right-0 top-0 h-40 w-40 translate-x-20 translate-y-[-50%] rounded-full bg-gradient-to-br from-blue-100/30 to-purple-100/30 blur-3xl" />

      {/* Code badge */}
      <div className="mb-6">
        <span className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-50 to-purple-50 px-3 py-1.5 text-sm font-medium text-[#EA0A1B] ring-1 ring-inset ring-blue-600/10">
          {code}
        </span>
      </div>

      {/* Pricing section */}
      <div className="mb-8 space-y-4">
        <div className="space-y-1">
          <span className="text-sm font-medium text-gray-500">
            Valor mensal
          </span>
          <div className="flex items-baseline">
            <span className="text-3xl font-bold tracking-tight text-gray-900">
              R$ {discountedMonthlyPrice.toFixed(2)}
            </span>
            <span className="ml-1 text-sm text-gray-500">/mês</span>
          </div>
        </div>

        <div className="space-y-1">
          <span className="text-sm font-medium text-gray-500">
            Total estimado {duration} meses
          </span>
          <div className="text-xl font-semibold text-gray-900">
            R$ {totalPrice.toFixed(2)}
          </div>
        </div>

        {discount > 0 && (
          <div className="space-y-1">
            <span className="text-sm font-medium text-emerald-600">
              Economia total
            </span>
            <div className="flex items-baseline">
              <span className="text-xl font-semibold text-emerald-600">
                R$ {totalSavings.toFixed(2)}
              </span>
              <span className="ml-2 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-600">
                -{discount}%
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Specifications */}
      <div className="mb-8">
        <h3 className="mb-3 text-sm font-semibold text-gray-900">
          Especificações
        </h3>
        <ul className="divide-y divide-gray-100">
          {specifications.map((spec, index) => (
            <li
              key={index}
              className="flex items-center justify-between py-2.5 text-sm"
            >
              <span className="text-gray-600">{spec.label}</span>
              <span className="font-medium text-gray-900">{spec.value}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Select dropdown */}
      <div className="mb-6">
        <div className="relative">
          <select
            className="w-full appearance-none rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 transition-colors focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20"
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
          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
            <svg
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Action button */}
      <button className="group relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-red-600 to-red-700 px-4 py-3 text-sm font-semibold text-white transition-all hover:from-red-700 hover:to-red-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 active:translate-y-[1px]">
        <div className="relative z-10">{buttonText}</div>
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-blue-600/0 via-white/10 to-blue-700/0 transition-transform duration-500 group-hover:translate-x-full" />
      </button>
    </div>
  );
}
