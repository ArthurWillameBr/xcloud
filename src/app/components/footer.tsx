import Image from "next/image";
import Logo from "../../../public/logo.png";

interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface FooterProps {
  logo?: {
    alt: string;
    title: string;
  };
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
}

export const Footer = ({
  logo = {
    alt: "xCloud",
    title: "Cloud",
  },
  tagline = "O xCloud representa um avanço significativo no gerenciamento de ambientes de nuvem complexos, oferecendo às empresas uma solução única para controlar, otimizar e inovar em suas infraestruturas de TI. Com sua capacidade de integrar diversas plataformas de nuvem e ferramentas essenciais como GitLab e Docker, o xCloud se posiciona como uma ferramenta indispensável para organizações que buscam agilidade, eficiência e controle em suas operações de nuvem.",
  menuItems = [
    {
      title: "links úteis",
      links: [
        { text: "Home", url: "#home" },
        { text: "Recursos", url: "#recursos" },
        { text: "Tecnologias", url: "#tecnologias" },
        { text: "Planos", url: "#planos" },
        { text: "Contato", url: "#contato" },
      ],
    },
  ],
  copyright = "© 2025 XCLOUD Todos os direitos reservados.",
}: FooterProps) => {
  return (
    <section className="py-8 px-5 bg-neutral-800 text-white">
      <footer>
        <div className="grid grid-cols-2 gap-8 md:gap-4 md:grid-cols-3">
          <div className="col-span-2 mb-8 lg:mb-0">
            <div className="flex items-center lg:justify-start">
              <Image src={Logo} alt={logo.alt} height={36} width={36} />
              <p className="text-xl font-semibold mt-1">{logo.title}</p>
            </div>
            <p className="mt-4 font-bold md:w-[426px] ">{tagline}</p>
          </div>
          {menuItems.map((section, sectionIdx) => (
            <div key={sectionIdx}>
              <h3 className="mb-4 font-bold">{section.title}</h3>
              <ul className="space-y-4 text-muted-foreground">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx} className="font-medium ">
                    <a
                      className="hover:text-red-500 transition-colors duration-300"
                      href={link.url}
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex mt-4 flex-col justify-center gap-4 border-t text-sm font-medium md:flex-row md:items-center">
          <p className="mt-4">{copyright}</p>
        </div>
      </footer>
    </section>
  );
};
