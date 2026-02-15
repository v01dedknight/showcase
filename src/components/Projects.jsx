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
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-900 overflow-hidden">
      <div className="max-w-4xl mx-auto relative">
        <h2 className="text-3xl font-bold text-center mb-8 sm:mb-12 text-white">Проекты</h2>

        <div className="w-full h-1 bg-gray-800 rounded-full mb-4 overflow-hidden">
          <div 
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

        {/* Slide container - Increased height for mobile devices */}
        <div 
          className="relative h-[500px] sm:h-[450px] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/5"
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
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 z-10">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 uppercase tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-purple-400 text-sm sm:text-base font-medium mb-6 opacity-90">
                    {project.desc}
                  </p>
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="w-full sm:w-auto px-8 py-3 bg-white text-black font-bold rounded-xl active:scale-95 shadow-lg"
                  >
                    Подробнее
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation is hidden on small screens for clarity, or reduced */}
        <div className="flex justify-center gap-4 sm:gap-6 mt-8">
          <button onClick={prevProject} className="p-3 bg-gray-800/50 text-white rounded-full"><HiOutlineChevronLeft size={20} /></button>
          <div className="flex items-center gap-2">
            {projects.map((_, i) => (
              <button key={i} onClick={() => setCurrentIndex(i)} className={`h-1.5 rounded-full transition-all ${currentIndex === i ? 'w-8 bg-purple-500' : 'w-1.5 bg-gray-600'}`} />
            ))}
          </div>
          <button onClick={nextProject} className="p-3 bg-gray-800/50 text-white rounded-full"><HiOutlineChevronRight size={20} /></button>
        </div>

        {/* Modal Window - Improved scrolling */}
        {selectedProject && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-4 bg-black/90 backdrop-blur-md">
            <div className="bg-gray-900 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[1.5rem] sm:rounded-[2rem] shadow-2xl border border-white/10 relative">
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-black/50 text-white rounded-full border border-white/10"
              >
                <HiOutlineChevronLeft className="rotate-90" size={20} />
              </button>

              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-48 sm:h-72 object-cover opacity-60" />
              
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.stack.map((tech, i) => (
                    <span key={i} className="px-2 py-0.5 bg-purple-500/10 text-purple-400 text-[10px] font-bold rounded-full border border-purple-500/20 uppercase">{tech}</span>
                  ))}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">{selectedProject.title}</h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">{selectedProject.fullDesc}</p>
                <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="block w-full py-4 bg-white text-black text-center font-bold rounded-xl sm:rounded-2xl active:scale-[0.98]">Смотреть проект</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;