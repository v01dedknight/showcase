import { HiOutlineMail } from "react-icons/hi";
import { FaTelegramPlane } from "react-icons/fa";

function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Left side: Text */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Свяжитесь со мной</h2>
            <p className="text-gray-400 text-lg max-w-md leading-relaxed mb-8">
              Всегда открыт для новых предложений и интересных проектов. 
              Пишите, обсудим вашу идею!
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-400 text-sm font-medium rounded-full border border-green-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Оперативно отвечаю с 10:00 до 18:00 МСК
            </div>
          </div>

          {/* Right side: Link buttons */}
          <div className="flex flex-col gap-4">
            <a 
              href="https://t.me/rejectsociety" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-purple-600 transition-all duration-500 shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-500/20 rounded-xl group-hover:bg-white/20 transition-colors">
                  <FaTelegramPlane className="text-purple-400 group-hover:text-white" size={24} />
                </div>
                <div>
                  <p className="text-white font-bold text-lg">Telegram</p>
                  <p className="text-gray-400 group-hover:text-purple-100 text-sm">Быстрый ответ в чате</p>
                </div>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity pr-2 text-white">
                →
              </div>
            </a>

            <a 
              href="mailto:artur_freelance@mail.ru" 
              className="group flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-blue-600 transition-all duration-500 shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500/20 rounded-xl group-hover:bg-white/20 transition-colors">
                  <HiOutlineMail className="text-blue-400 group-hover:text-white" size={24} />
                </div>
                <div>
                  <p className="text-white font-bold text-lg">Email</p>
                  <p className="text-gray-400 group-hover:text-blue-100 text-sm">Для официальных запросов</p>
                </div>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity pr-2 text-white">
                →
              </div>
            </a>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm font-medium tracking-widest">
            v01d {currentYear}.
          </p>
          <div className="flex gap-6 text-gray-500 text-sm">
            <span className="hover:text-white cursor-default transition-colors">Frontend Developer</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Contact;