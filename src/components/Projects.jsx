function Projects() {
  const projects = [
    { 
      title: "Архитектурное бюро", 
      desc: "React + Tailwind App", 
      image: "/projects/p1.jpg"
    },
    { 
      title: "Кофейня", 
      desc: "Landing Page", 
      image: "/projects/p2.jpg" 
    },
    { 
      title: "Финансовая платформа", 
      desc: "Dashboard UI", 
      image: "/projects/p3.jpg" 
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-12">Проекты</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative h-64 overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 hover:scale-[1.02]"
          >
            {/* Фоновое изображение */}
            <img 
              src={project.image} 
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Затемнение фона для читаемости текста */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

            {/* Контент карточки */}
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-xl font-bold text-white mb-1">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Нажмите, чтобы узнать больше
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;