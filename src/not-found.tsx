import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <h2 className="text-2xl">Pagina não encontrada</h2>
      <p></p>
      <button className="bg-red-500 text-white px-4 py-2 rounded">
        <Link href="/">Voltar para a Home</Link>
      </button>
    </div>
  );
}
