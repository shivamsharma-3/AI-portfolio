export function Footer() {
  return (
    <footer className="w-full py-10 border-t border-white/10 mt-12 bg-transparent relative z-10">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
        <p className="text-zinc-500 text-sm font-light tracking-wide">
          © {new Date().getFullYear()} Shivam Sharma. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
