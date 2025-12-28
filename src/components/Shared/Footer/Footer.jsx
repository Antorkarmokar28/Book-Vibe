import { Facebook, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="container mx-auto px-4 py-10 md:flex justify-between gap-6">
        <div className="mt-20 md:mt-0">
          {/* logo */}
          <Link to="/">
            <h1 className="text-3xl text-gray-300 font-bold">
              <span className="text-green-500">Book</span> Vibes
            </h1>
          </Link>
          <p className="mt-4 mb-4">
            Books that feel like quiet conversations—inviting reflection,
            emotion, curiosity, and comfort with every thoughtfully written page
            you turn.
          </p>
          {/* social inner */}
          <div className="flex gap-4">
            <Facebook className="duration-300 hover:text-green-500" />
            <Twitter className="duration-300 hover:text-green-500" />
            <Linkedin className="duration-300 hover:text-green-500" />
          </div>
        </div>
        <div className="w-72 mt-20 md:mt-0">
          <h2 className="text-3xl font-bold mb-3">Use Links</h2>
          <ul className="space-y-3">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Books</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
            <li>
              <Link to="/">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="mt-20 md:mt-0">
          <form className="border border-green-500 flex justify-evenly mb-4">
            <input
              className="p-4 w-full"
              type="email"
              name="email"
              placeholder="Email"
            />
            <input
              className="bg-green-500 p-4"
              type="submit"
              value="Subscribe"
            />
          </form>
          <p>
            Subscribe to our newsletter for new arrivals, exclusive offers,
            reading inspiration, and thoughtful stories delivered straight to
            you.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
