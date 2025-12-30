import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  // handle mobile menu
  const handleMenu = () => {
    setOpen(!open);
  };
  const links = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/listedBook">Listed Books</Link>
      </li>
      <li>
        <Link to="/">Contact</Link>
      </li>
    </>
  );
  return (
    <nav className="py-4 border-b border-green-500">
      <div className="container px-4 mx-auto flex justify-between items-center">
        {/* logo */}
        <Link to="/">
          <h1 className="text-3xl text-black font-bold">
            <span className="text-green-500">Book</span> Vibes
          </h1>
        </Link>
        {/* mobile menu */}
        <ul
          className={`md:hidden absolute bg-green-500 text-center space-y-6 p-6 rounded-2xl text-white duration-200 ${
            open ? "top-17.5" : "-top-60 opacity-0"
          }`}
        >
          {links}
          <div className="flex gap-6 items-center">
            <button className="btn block md:hidden">Sign In</button>
            <button className="btn bg-green-500 text-white block md:hidden">
              Sign Up
            </button>
          </div>
        </ul>
        {/* menu */}
        <ul className="md:flex items-center gap-6 hidden">{links}</ul>
        {/* sign up button wrapper */}
        <div className="flex gap-6 items-center">
          <button className="btn hidden md:block">Sign In</button>
          <button className="btn bg-green-500 text-white hidden md:block">
            Sign Up
          </button>
          {/* menu button */}
          <button onClick={handleMenu} className="md:hidden">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
