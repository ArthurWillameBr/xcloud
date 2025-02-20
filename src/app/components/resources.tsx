import { Infinity, MessagesSquare, Zap, ZoomIn } from "lucide-react";

const feature = [
  {
    title: "Quality",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi necessitatibus, culpa at vitae molestias tenetur explicabo.",
    icon: <ZoomIn className="size-6 text-[#EE1424]" />,
  },
  {
    title: "Innovation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi necessitatibus, culpa at vitae molestias tenetur explicabo.",
    icon: <Zap className="size-6 text-[#EE1424]" />,
  },
  {
    title: "Customer Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi necessitatibus, culpa at vitae molestias tenetur explicabo.",
    icon: <MessagesSquare className="size-6 text-[#EE1424]" />,
  },
  {
    title: "Reliability",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi necessitatibus, culpa at vitae molestias tenetur explicabo.",
    icon: <Infinity className="size-6 text-[#EE1424]" />,
  },
  {
    title: "Quality",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi necessitatibus, culpa at vitae molestias tenetur explicabo.",
    icon: <ZoomIn className="size-6 text-[#EE1424]" />,
  },
  {
    title: "Innovation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi necessitatibus, culpa at vitae molestias tenetur explicabo.",
    icon: <Zap className="size-6 text-[#EE1424]" />,
  },
  {
    title: "Customer Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi necessitatibus, culpa at vitae molestias tenetur explicabo.",
    icon: <MessagesSquare className="size-6 text-[#EE1424]" />,
  },
  {
    title: "Reliability",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi necessitatibus, culpa at vitae molestias tenetur explicabo.",
    icon: <Infinity className="size-6 text-[#EE1424]" />,
  },
];

export const Resources = () => {
  return (
    <section className="py-20 bg-neutral-800 text-white" id="recursos">
      <div className="flex w-full flex-col items-center">
        <div className="flex flex-col items-center text-center md:max-w-3xl md:text-center">
          <p className="text-3xl md:text-4xl uppercase font-bold relative">
            Recursos
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-[#EA0A1B] to-[#f93d3d] rounded-full"></span>
          </p>
        </div>
      </div>
      <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 px-5 md:px-0">
        {feature.map((feature, idx) => (
          <div
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
          </div>
        ))}
      </div>
    </section>
  );
};
