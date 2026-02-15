import { useState, useEffect } from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

function Projects() {
  const projects = [
    { title: "Архитектурное бюро", desc: "Сверхбыстрый React интерфейс", image: "/projects/p1.jpg" },
    { title: "Кофейня", desc: "Конверсионный Landing Page", image: "/projects/p2.jpg" },
    { title: "Финансовая платформа", desc: "Масштабируемый Dashboard UI", image: "/projects/p3.jpg" },
    { title: "Премиальное заведение", desc: "Интерактивное меню и бронирование", image: "/projects/p4.jpg" },
    { title: "Дизайн интерьеров", desc: "Визуальное портфолио с плавными анимациями", image: "/projects/p5.jpg" },
    { title: "Агентство автоматизации", desc: "Система управления бизнес-процессами", image: "/projects/p6.jpg" },
    { title: "Магазин электроники", desc: "E-commerce решение с фильтрацией товаров", image: "/projects/p7.jpg" },
    { title: "Интерактивный магазин", desc: "PWA-приложение с оффлайн-режимом", image: "/projects/p8.jpg" },
    { title: "Цифровое агентство", desc: "Креативный лендинг с параллакс-эффектами", image: "/projects/p9.jpg" },
    { title: "Автосалон", desc: "Конфигуратор автомобилей и онлайн-запись", image: "/projects/p10.jpg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextProject();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused, currentIndex]);

  return (
    <section className="py-20 px-6 bg-gray-900 overflow-hidden">
      <div className="max-w-4xl mx-auto relative">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Проекты</h2>

        {/* Progress Bar Container */}
        <div className="w-full h-1 bg-gray-800 rounded-full mb-4 overflow-hidden">
          <div 
          // Resets animation when changing slides
            key={currentIndex}
            className={`h-full bg-purple-500 origin-left ${isPaused ? '' : 'animate-progress'}`}
            style={{ 
                animationDuration: '5000ms',
                animationTimingFunction: 'linear',
                animationFillMode: 'forwards',
                animationPlayState: isPaused ? 'paused' : 'running'
            }}
          />
        </div>

        {/* Slide container */}
        <div 
          className="relative h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/5"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div key={index} className="min-w-full relative h-full group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                
                <div className="absolute bottom-10 left-10 right-10 z-10">
                  <h3 className="text-3xl font-bold text-white mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    {project.title}
                  </h3>
                  <p className="text-purple-400 font-medium mb-6 opacity-80">
                    {project.desc}
                  </p>
                  <button className="px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-purple-500 hover:text-white transition-all duration-300 transform active:scale-95 shadow-lg">
                    Подробнее
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-6 mt-10">
          <button 
            onClick={prevProject}
            className="p-3 bg-gray-800/50 backdrop-blur-sm text-white rounded-full hover:bg-purple-600 transition-all shadow-xl border border-white/10"
          >
            <HiOutlineChevronLeft size={24} />
          </button>
          
          <div className="flex items-center gap-3">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  currentIndex === i ? 'w-10 bg-purple-500' : 'w-2 bg-gray-600 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <button 
            onClick={nextProject}
            className="p-3 bg-gray-800/50 backdrop-blur-sm text-white rounded-full hover:bg-purple-600 transition-all shadow-xl border border-white/10"
          >
            <HiOutlineChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;