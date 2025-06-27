export default function Footer() {
  return (
    <footer className="bg-[#1A3C6B] text-white text-center text-sm py-6 mt-16 shadow-inner">
      <div className="max-w-7xl mx-auto px-4">
        <p>© {new Date().getFullYear()} Grupo Éxito - Prueba Técnica</p>
        <p className="mt-1 text-xs">Desarrollado con ❤️ usando React + Tailwind</p>
      </div>
    </footer>
  );
}