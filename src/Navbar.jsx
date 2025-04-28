const Navbar = () => {
    return (
      <nav className="bg-blue-600 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">MySite</h1>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:col-start-auto">Home</a></li>
            <li><a href="#" className="hover:text-gray-200">About</a></li>

            <li><a href="#" className="hover:text-gray-200">Contact</a></li>
          </ul>
        </div>
      </nav>
    );
  };

  export default Navbar;