const Footer = () => {
  return (
    <footer className="relative w-full bg-[#120a00] text-white pt-16 pb-10 px-6 border-t border-white/20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a0f00]/40 to-[#0d0900] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <p className="text-white/50 text-sm">
          © {new Date().getFullYear()} EXOT Foundation. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
