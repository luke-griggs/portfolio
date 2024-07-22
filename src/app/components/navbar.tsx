const Navbar = () => {
    return (
      <nav className="bg-slate-950 p-4 fixed top-0 left-0 w-full z-10 border-b border-gray-300">
        <ul className="flex space-x-14 justify-center">
          {['Projects', 'Blog', 'Home', 'Resume', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                className="text-gray-300 font-mono text-lg relative after:absolute after:w-full after:h-0.5 after:bg-cyan-300 after:left-0 after:bottom-0 after:origin-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  };
  
  export default Navbar;