"use client";

import {
  Activity,
  Cloud,
  Code,
  DollarSign,
  GitBranch,
  Layout,
  Settings,
  ShieldCheck,
} from "lucide-react";
import { motion } from "motion/react";

const feature = [
  {
    title: "Integração multi-cloud abrangente",
    description:
      "Suporte nativo para as principais nuvens públicas, incluindo AWS, Oracle Cloud Infrastructure (OCI), Google Cloud Platform (GCP), Microsoft Azure e IBM Cloud. Compatibilidade com ambientes on-premises, como VMware vCenter e OpenStack.",
    icon: <Cloud className="size-6 text-[#EE1424]" />,
  },
  {
    title: "Orquestração avançada",
    description:
      "Automação de fluxos de trabalho complexos em diferentes plataformas de nuvem. Provisionamento e gerenciamento de recursos de forma centralizada.",
    icon: <Settings className="size-6 text-[#EE1424]" />,
  },
  {
    title: "Integração com DevOps",
    description:
      "Conexão direta com GitLab para implementação de práticas de CI/CD. Suporte nativo a contêineres Docker, facilitando a implantação e o gerenciamento de aplicações containerizadas.",
    icon: <GitBranch className="size-6 text-[#EE1424]" />,
  },
  {
    title: "Monitoramento e análise em tempo real",
    description:
      "Painéis personalizáveis para visualização de métricas de desempenho e custos. Alertas inteligentes e previsão de tendência baseadas em IA.",
    icon: <Activity className="size-6 text-[#EE1424]" />,
  },
  {
    title: "Governança e conformidade",
    description:
      "Aplicação de políticas de segurança e conformidade em todas as plataformas de nuvem. Rastreamento e auditoria de mudanças em tempo real.",
    icon: <ShieldCheck className="size-6 text-[#EE1424]" />,
  },
  {
    title: "Otimização de custos",
    description:
      "Recomendações inteligentes para redução de custos e dimensionamento adequado de recursos. Relatórios detalhados de utilização e gastos por departamento ou projetos.",
    icon: <DollarSign className="size-6 text-[#EE1424]" />,
  },
  {
    title: "Interface intuitiva",
    description:
      "Design moderno e responsivo para facilitar o uso em diferentes dispositivos. Personalização avançada da interface para atender às necessidades específicas de cada organização.",
    icon: <Layout className="size-6 text-[#EE1424]" />,
  },
  {
    title: "APIs robustas e extensibilidade",
    description:
      "Ampla gama de APIs para integração com ferramentas de terceiros. Marketplace de plugins para estender as funcionalidades da plataforma.",
    icon: <Code className="size-6 text-[#EE1424]" />,
  },
];

export const Resources = () => {
  return (
    <section className="py-20 bg-neutral-800 text-white" id="recursos">
      <div className="flex w-full flex-col items-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          className="flex flex-col items-center text-center md:max-w-3xl md:text-center"
        >
          <p className="text-3xl md:text-4xl uppercase font-bold relative">
            Recursos
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-[#EA0A1B] to-[#f93d3d] rounded-full"></span>
          </p>
        </motion.div>
      </div>
      <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 px-5 md:px-0">
        {feature.map((feature, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex flex-col justify-between rounded-lg p-4 md:min-h-[260px] md:p-8 bg-neutral-900 shadow-md ring-2 ring-red-500/50 hover:ring-4 hover:ring-red-500 transition-all duration-500 cursor-pointer"
            key={idx}
          >
            <span className="mb-2 flex size-11 items-center justify-center rounded-full bg-neutral-700">
              {feature.icon}
            </span>
            <div>
              <h3 className="text-lg font-medium md:text-2xl">
                {feature.title}
              </h3>
              <p className="mt-2">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
