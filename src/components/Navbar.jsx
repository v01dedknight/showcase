function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-black/30 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4 px-6">
        <h1 className="text-xl font-bold">Моё портфолио</h1>

        <ul className="flex gap-6 text-sm">
          <li className="hover:text-purple-400 cursor-pointer">Обо мне</li>
          <li className="hover:text-purple-400 cursor-pointer">Проекты</li>
          <li className="hover:text-purple-400 cursor-pointer">Контакты</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;