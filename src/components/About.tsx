import { JSX } from "react";

function About(): JSX.Element {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Ваш бизнес заслуживает большего</h2>
      <div className="text-gray-400 leading-relaxed space-y-6">
        <p>
          Большинство компаний до сих пор используют <span className="text-white font-medium">громоздкие и устаревшие решения</span>, которые замедляют работу сайта и отталкивают мобильных пользователей.
        </p>     
        <p className="text-white font-bold border-t border-gray-800 pt-6">
          <span className="text-white-400 font-semibold">Более 5 лет опыта.</span>
          <br />
          <span className="text-purple-400 font-semibold">Я берусь за проекты любой сложности, и провожу их за руку до конца. </span>
        </p>
      </div>
    </section>
  );
}

export default About;