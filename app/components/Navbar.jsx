export default function Navbar() {
  return (
    <nav className="p-6 bg-gray-900 fixed w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-red-500 flex items-center">
          CarWorld
        </div>
        <ul className="flex space-x-6">
          <li>
            <a href="#" className="text-gray-300 hover:text-red-500 transition duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#features" className="text-gray-300 hover:text-red-500 transition duration-300">
              Features
            </a>
          </li>
          <li>
            <a href="#testimonials" className="text-gray-300 hover:text-red-500 transition duration-300">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#gallery" className="text-gray-300 hover:text-red-500 transition duration-300">
              Gallery
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-300 hover:text-red-500 transition duration-300">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}