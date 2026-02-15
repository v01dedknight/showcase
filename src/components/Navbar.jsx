import { useState, useEffect } from "react";

function Navbar() {
  const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const scrollToFooter = () => {
    const footer = document.querySelector('footer');
    if (footer) footer.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="fixed top-2 sm:top-4 left-0 right-0 z-[100] px-3 sm:px-6">
      <div className="max-w-5xl mx-auto bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-2 sm:p-3 px-4 sm:px-6 flex justify-between items-center shadow-2xl">
        
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center font-bold text-white text-xs sm:text-base shadow-lg shadow-purple-500/20">
            V
          </div>
          <span className="text-[10px] sm:text-sm font-bold tracking-wider text-white uppercase truncate max-w-[80px] sm:max-w-none">
            v01d <span className="text-gray-500 font-normal hidden xs:inline">/ Front-end Разработчик</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-[10px] font-bold text-gray-300 uppercase tracking-tighter">Доступен к работе</span>
        </div>

        <div className="flex items-center gap-3 sm:gap-8">
          <div className="text-right hidden sm:block min-w-[60px]">
            <p className="text-[10px] text-gray-500 uppercase font-bold leading-none mb-1">Время</p>
            <p className="text-sm text-white font-medium tabular-nums">{time}</p>
          </div>
          
          <button 
            onClick={scrollToFooter}
            className="px-4 sm:px-5 py-2 sm:py-2.5 bg-white text-black text-[10px] sm:text-xs font-extrabold rounded-lg sm:rounded-xl hover:bg-purple-500 hover:text-white transition-all shadow-lg active:scale-95 cursor-pointer uppercase tracking-tight"
          >
            Связаться
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;