import { useState } from "react";
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

  const nextProject = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <section className="py-20 px-6 bg-gray-900 overflow-hidden">
      <div className="max-w-4xl mx-auto relative">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Проекты</h2>

        {/* Контейнер для слайдов */}
        <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl">
          <div 
            className="flex transition-transform duration-500 ease-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div key={index} className="min-w-full relative h-full group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                
                <div className="absolute bottom-10 left-10 right-10">
                  <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-purple-400 font-medium mb-4">{project.desc}</p>
                  <button className="px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl hover:bg-white/20 transition">
                    Подробнее
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Кнопки навигации */}
        <div className="flex justify-center gap-4 mt-8">
          <button 
            onClick={prevProject}
            className="p-3 bg-gray-800 text-white rounded-full hover:bg-purple-600 transition shadow-lg border border-gray-700"
          >
            <HiOutlineChevronLeft size={24} />
          </button>
          
          <div className="flex items-center gap-2">
            {projects.map((_, i) => (
              <div 
                key={i} 
                className={`h-2 rounded-full transition-all duration-300 ${currentIndex === i ? 'w-8 bg-purple-500' : 'w-2 bg-gray-600'}`}
              />
            ))}
          </div>

          <button 
            onClick={nextProject}
            className="p-3 bg-gray-800 text-white rounded-full hover:bg-purple-600 transition shadow-lg border border-gray-700"
          >
            <HiOutlineChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;