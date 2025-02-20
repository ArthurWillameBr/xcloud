import type React from "react";
interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  size?: "default" | "sm";
}

export function Button({ size = "default", ...props }: Props) {
  return (
    <button
      {...props}
      className={`flex items-center gap-2 justify-center text-white font-semibold bg-neutral-800 rounded-lg ring-2 ring-red-700 hover:bg-[#EA0A1B] transition-colors duration-300 ${
        size === "default" ? "py-2 px-4" : "py-1 px-3 text-sm"
      }`}
    />
  );
}
