import { useState, useEffect } from "react";

function Navbar() {
  const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

  // Update the time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Scroll to footer when button is clicked
  const scrollToFooter = () => {
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };

  return (
    <nav className="fixed top-4 left-0 right-0 z-[100] px-6">
      <div className="max-w-5xl mx-auto bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-3 px-6 flex justify-between items-center shadow-2xl">
        
        {/* Left side: Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-purple-500/20">
            V
          </div>
          <span className="text-sm font-bold tracking-wider text-white uppercase">
            v01d <span className="text-gray-500 font-normal">/ Разработчик</span>
          </span>
        </div>

        {/* Central part: Status */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-[10px] font-bold text-gray-300 uppercase tracking-tighter">Доступен к работе</span>
        </div>

        {/* Right side: Local time and Button */}
        <div className="flex items-center gap-4 sm:gap-8">
          <div className="text-right min-w-[60px]">
            <p className="text-[10px] text-gray-500 uppercase font-bold leading-none mb-1">Локальное время</p>
            <p className="text-sm text-white font-medium tabular-nums">
              {time}
            </p>
          </div>
          
          <button 
            onClick={scrollToFooter}
            className="px-5 py-2.5 bg-white text-black text-xs font-extrabold rounded-xl hover:bg-purple-500 hover:text-white transition-all duration-300 shadow-lg active:scale-95 cursor-pointer uppercase tracking-tight"
          >
            Связаться
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;