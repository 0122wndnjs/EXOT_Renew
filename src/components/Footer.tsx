const Footer = () => {
  return (
    <footer className="relative w-full bg-[#120a00] text-white pt-16 pb-14 px-6 border-t border-white/20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a0f00]/40 to-[#0d0900] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto text-center flex flex-col items-center gap-3">
        <p className="text-white/70 text-sm md:text-base">
          111 SOMERSET ROAD #06-11R, 111 SOMERSET, SINGAPORE (238164)
        </p>

        <p className="text-white/70 text-sm md:text-base">
          Email:{" "}
          <a
            href="mailto:support@exotnetwork.com"
            className="text-orange-300 hover:text-orange-200 transition"
          >
            support@exotnetwork.com
          </a>
        </p>

        <p className="text-white/50 text-xs md:text-sm mt-2">
          © {new Date().getFullYear()} EXOT Foundation. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
