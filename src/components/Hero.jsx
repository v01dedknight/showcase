function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-linear-to-br from-purple-900 via-black to-indigo-900 text-center">
      <div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          Привет, я <span className="text-purple-400">Артур</span>
        </h1>

        <p className="text-gray-400 text-lg mb-8">
          Разрабатываю сайты под ключ для вашего бизнеса.
        </p>

        <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full transition">
          Заказать сайт
        </button>
      </div>
    </section>
  );
}

export default Hero;
