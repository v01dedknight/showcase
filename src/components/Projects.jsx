import { useState, useEffect } from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { 
      title: "Архитектурное бюро", 
      desc: "Минималистичный, интерактивный интерфейс", 
      image: "/projects/p1.jpg",
      fullDesc: "Официальный сайт архитектурного бюро Rowelltz Arch. Минималистичный, современный и интерактивный веб-ресурс, демонстрирующий портфолио бюро и предоставляющий удобные способы связи с командой.",
      stack: ["React", "Tailwind 4", "Framer Motion"],
      link: "https://rowelltz-arch.ru/"
    },
    { 
      title: "Кофейня", 
      desc: "Конверсионный Landing Page", 
      image: "/projects/p2.jpg",
      fullDesc: "Данный проект является концептуальным UI-исследованием, созданным для демонстрации возможностей современной вёрстки и архитектуры компонентов. Основной упор сделан на чистоту кода, адаптивность и высокую скорость рендеринга. Проект реализован как интерактивный прототип, на котором отработаны сложные визуальные паттерны и логика взаимодействия пользователя с интерфейсом (UX).",
      stack: ["Vite", "Tailwind 4", "Lucide Icons"],
      link: "https://github.com/v01dedknight/web-layout-basics"
    },
    { 
      title: "Финансовая платформа", 
      desc: "Масштабируемый Dashboard UI", 
      image: "/projects/p3.jpg",
      fullDesc: "Данный проект является концептуальным UI-исследованием, созданным для демонстрации возможностей современной вёрстки и архитектуры компонентов. Основной упор сделан на чистоту кода, адаптивность и высокую скорость рендеринга. Проект реализован как интерактивный прототип, на котором отработаны сложные визуальные паттерны и логика взаимодействия пользователя с интерфейсом (UX).",
      stack: ["React", "Recharts", "Zod"],
      link: "https://github.com/v01dedknight/web-layout-basics"
    },
    { 
      title: "Премиальное заведение", 
      desc: "Интерактивное меню и бронирование", 
      image: "/projects/p4.jpg",
      fullDesc: "Данный проект является концептуальным UI-исследованием, созданным для демонстрации возможностей современной вёрстки и архитектуры компонентов. Основной упор сделан на чистоту кода, адаптивность и высокую скорость рендеринга. Проект реализован как интерактивный прототип, на котором отработаны сложные визуальные паттерны и логика взаимодействия пользователя с интерфейсом (UX).",
      stack: ["React", "Tailwind", "i18next"],
      link: "https://github.com/v01dedknight/web-layout-basics"
    },
    { 
      title: "Дизайн интерьеров", 
      desc: "Визуальное портфолио с анимациями", 
      image: "/projects/p5.jpg",
      fullDesc: "Данный проект является концептуальным UI-исследованием, созданным для демонстрации возможностей современной вёрстки и архитектуры компонентов. Основной упор сделан на чистоту кода, адаптивность и высокую скорость рендеринга. Проект реализован как интерактивный прототип, на котором отработаны сложные визуальные паттерны и логика взаимодействия пользователя с интерфейсом (UX).",
      stack: ["React", "CSS Grid", "AOS"],
      link: "https://github.com/v01dedknight/web-layout-basics"
    },
    { 
      title: "Агентство автоматизации", 
      desc: "Система управления процессами", 
      image: "/projects/p6.jpg",
      fullDesc: "Данный проект является концептуальным UI-исследованием, созданным для демонстрации возможностей современной вёрстки и архитектуры компонентов. Основной упор сделан на чистоту кода, адаптивность и высокую скорость рендеринга. Проект реализован как интерактивный прототип, на котором отработаны сложные визуальные паттерны и логика взаимодействия пользователя с интерфейсом (UX).",
      stack: ["React Hooks", "Context API", "Tailwind"],
      link: "https://github.com/v01dedknight/web-layout-basics"
    },
    { 
      title: "Магазин электроники", 
      desc: "E-commerce решение с фильтрацией", 
      image: "/projects/p7.jpg",
      fullDesc: "Данный проект является концептуальным UI-исследованием, созданным для демонстрации возможностей современной вёрстки и архитектуры компонентов. Основной упор сделан на чистоту кода, адаптивность и высокую скорость рендеринга. Проект реализован как интерактивный прототип, на котором отработаны сложные визуальные паттерны и логика взаимодействия пользователя с интерфейсом (UX). Полноценный каталог товаров с корзиной и оформлением заказа. Реализована сложная логика фильтров по характеристикам и цене.",
      stack: ["React", "Redux Toolkit", "API Integration"],
      link: "https://github.com/v01dedknight/web-layout-basics"
    },
    { 
      title: "Интерактивный магазин", 
      desc: "PWA-приложение с оффлайн-режимом", 
      image: "/projects/p8.jpg",
      fullDesc: "Данный проект является концептуальным UI-исследованием, созданным для демонстрации возможностей современной вёрстки и архитектуры компонентов. Основной упор сделан на чистоту кода, адаптивность и высокую скорость рендеринга. Проект реализован как интерактивный прототип, на котором отработаны сложные визуальные паттерны и логика взаимодействия пользователя с интерфейсом (UX). Веб-приложение, работающее как нативное. Поддержка Service Workers для работы без интернета и Push-уведомления.",
      stack: ["PWA", "React Icons", "Vite"],
      link: "https://github.com/v01dedknight/web-layout-basics"
    },
    { 
      title: "Цифровое агентство", 
      desc: "Лендинг с параллакс-эффектами", 
      image: "/projects/p9.jpg",
      fullDesc: "Данный проект является концептуальным UI-исследованием, созданным для демонстрации возможностей современной вёрстки и архитектуры компонентов. Основной упор сделан на чистоту кода, адаптивность и высокую скорость рендеринга. Проект реализован как интерактивный прототип, на котором отработаны сложные визуальные паттерны и логика взаимодействия пользователя с интерфейсом (UX).",
      stack: ["Framer Motion", "Tailwind 4", "React"],
      link: "https://github.com/v01dedknight/web-layout-basics"
    },
    { 
      title: "Автосалон", 
      desc: "Конфигуратор и онлайн-запись", 
      image: "/projects/p10.jpg",
      fullDesc: "Данный проект является концептуальным UI-исследованием, созданным для демонстрации возможностей современной вёрстки и архитектуры компонентов. Основной упор сделан на чистоту кода, адаптивность и высокую скорость рендеринга. Проект реализован как интерактивный прототип, на котором отработаны сложные визуальные паттерны и логика взаимодействия пользователя с интерфейсом (UX).",
      stack: ["React", "State Management", "Tailwind"],
      link: "https://github.com/v01dedknight/web-layout-basics"
    },
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
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-purple-500 hover:text-white transition-all duration-300 transform active:scale-95 shadow-lg"
                  >
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

        {/* Modal Window */}
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <div className="bg-gray-900 w-full max-w-2xl rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 relative animate-in fade-in zoom-in duration-300">
              
              {/* Close */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-20 p-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all border border-white/10"
              >
                <HiOutlineChevronLeft className="rotate-90" size={20} />
              </button>

              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-72 object-cover opacity-80"
              />
              
              <div className="p-8">
                {/* Techs */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.stack.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-purple-500/10 text-purple-400 text-xs font-bold rounded-full border border-purple-500/20">
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="text-3xl font-bold text-white mb-3">{selectedProject.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-8">
                  {selectedProject.fullDesc}
                </p>

                {/* Button */}
                <a 
                  href={selectedProject.link} 
                  target="_blank"             // Открывает в новой вкладке
                  rel="noopener noreferrer"    // Безопасность при открытии сторонних ссылок
                  className="block w-full py-4 bg-white text-black text-center font-bold rounded-2xl hover:bg-purple-500 hover:text-white transition-all duration-300 transform active:scale-[0.98] shadow-lg shadow-white/5"
                >
                  Смотреть проект
                </a>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
    </section>
  );
}

export default Projects;