import { PlanCard } from "./ui/plan-card";

export function PlanCardsUsa() {
  return (
    <div className="mx-auto mt-6 grid max-w-5xl gap-6 md:gap-6 grid-cols-1 md:grid-cols-2 px-5 md:px-24 justify-items-center">
      <PlanCard
        code="XVM-1-USA"
        monthlyPrice={157.0}
        specifications={[
          { label: "RAM", value: "4GB" },
          { label: "CPU", value: "2 core" },
          { label: "Storage", value: "80GB SSD" },
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
      <PlanCard
        code="XVM-2-USA"
        monthlyPrice={283.0}
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
      <PlanCard
        code="XVM-3-USA"
        monthlyPrice={375.0}
        specifications={[
          { label: "RAM", value: "16GB" },
          { label: "CPU", value: "6 core" },
          { label: "Storage", value: "240GB SSD" },
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
      <PlanCard
        code="XVM-4-USA"
        monthlyPrice={837.0}
        specifications={[
          { label: "RAM", value: "32GB" },
          { label: "CPU", value: "8 core" },
          { label: "Storage", value: "640GB SSD" },
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
  );
}
