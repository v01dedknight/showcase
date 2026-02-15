function Contact() {
  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Свяжитесь со мной</h2>

      <div className="max-w-md mx-auto space-y-4 text-gray-400">
        <p className="text-sm italic mb-6">
          Оперативно отвечаю с <span className="text-white">10:00</span> до <span className="text-white">18:00</span> по МСК
        </p>

        <div className="flex flex-col gap-3 items-center text-lg">
          <p>
            <span className="opacity-60">Почта: </span>
            <a 
              href="mailto:artur_freelance@mail.ru" 
              className="text-white hover:text-purple-400 transition-colors duration-300 font-medium underline decoration-purple-500/30 underline-offset-4"
            >
              artur_freelance@mail.ru
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;