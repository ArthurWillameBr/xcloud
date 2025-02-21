"use client";

import {
  Cloud,
  Database,
  GitBranch,
  Monitor,
  Server,
  Share2,
  Boxes,
  HardDrive,
} from "lucide-react";

const technologies = [
  {
    icon: <Database className="w-6 h-6 text-[#EE1424]" />,
    title: "OCI",
    description:
      "Oracle Cloud Infrastructure oferece uma plataforma completa de computação em nuvem com alta performance e segurança empresarial.",
  },
  {
    icon: <Cloud className="w-6 h-6 text-[#EE1424]" />,
    title: "AWS",
    description:
      "Amazon Web Services é a plataforma de nuvem mais adotada e completa do mundo, oferecendo mais de 200 serviços de data centers globais.",
  },
  {
    icon: <Share2 className="w-6 h-6 text-[#EE1424]" />,
    title: "GCP",
    description:
      "Google Cloud Platform fornece serviços de computação em nuvem escaláveis e inovadores, aproveitando a infraestrutura do Google.",
  },
  {
    icon: <Monitor className="w-6 h-6 text-[#EE1424]" />,
    title: "VMware",
    description:
      "Líder em virtualização e infraestrutura em nuvem, oferecendo soluções robustas para modernização de data centers.",
  },
  {
    icon: <GitBranch className="w-6 h-6 text-[#EE1424]" />,
    title: "GitLab",
    description:
      "Plataforma completa de DevOps que unifica desenvolvimento, operações e segurança em um único aplicativo.",
  },
  {
    icon: <Server className="w-6 h-6 text-[#EE1424]" />,
    title: "OpenStack",
    description:
      "Plataforma de código aberto para criação e gerenciamento de clouds privadas e públicas com grande flexibilidade.",
  },
  {
    icon: <Boxes className="w-6 h-6 text-[#EE1424]" />,
    title: "Docker",
    description:
      "Plataforma líder para desenvolvimento, envio e execução de aplicações em containers, simplificando a implantação de software.",
  },
  {
    icon: <HardDrive className="w-6 h-6 text-[#EE1424]" />,
    title: "Proxmox",
    description:
      "Plataforma de virtualização open-source que combina KVM e LXC, oferecendo gerenciamento eficiente para servidores e data centers.",
  },
];

export function Technologies() {
  return (
    <section className="py-20 bg-[#3E1F21] text-white" id="tecnologias">
      <div className="flex w-full flex-col items-center">
        <div className="flex flex-col items-center text-center md:max-w-3xl md:text-center">
          <p className="text-3xl md:text-4xl uppercase font-bold relative">
            Tecnologias
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-[#EA0A1B] to-[#f93d3d] rounded-full"></span>
          </p>
        </div>
      </div>
      <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 px-5 md:px-0">
        {technologies.map((tech, idx) => (
          <div
            className="flex flex-col justify-between rounded-lg p-4 md:min-h-[260px] md:p-8 bg-neutral-900 shadow-md ring-2 ring-red-500/50 hover:ring-4 hover:ring-red-500 transition-all duration-500 cursor-pointer"
            key={idx}
          >
            <span className="mb-2 flex size-11 items-center justify-center rounded-full bg-neutral-700">
              {tech.icon}
            </span>
            <div>
              <h3 className="text-lg font-medium md:text-2xl">{tech.title}</h3>
              <p className="mt-2">{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
