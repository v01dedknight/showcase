function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-linear-to-br from-purple-900 via-black to-indigo-900 text-center">
      <div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          Привет, я <span className="text-purple-400">Артур</span>
        </h1>

        <p className="text-gray-400 text-lg mb-8">
          И я разработаю сайт под ключ для вашего бизнеса.
        </p>

        <button 
          className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] cursor-pointer tracking-wide"
          onClick={() => window.open("https://kwork.ru/website-development/42671859/razrabotka-sayta-pod-klyuch", "_blank")}
        >
          Заказать сайт
        </button>
      </div>
    </section>
  );
}

export default Hero;
