import { Facebook, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router";

const socialIcons = [Facebook, Twitter, Linkedin];

const footerLinks = [
  { name: "Home", path: "/" },
  { name: "Books", path: "/" },
  { name: "Contact", path: "/" },
  { name: "Privacy Policy", path: "/" },
];

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="container mx-auto px-4 py-10 md:flex justify-between gap-6">
        {/* Brand Section */}
        <div className="space-y-4">
          <Link to="/">
            <h1 className="text-3xl font-bold">
              <span className="text-green-500">Book</span> Vibes
            </h1>
          </Link>

          <p>
            Books that feel like quiet conversations—inviting reflection,
            <br />
            emotion, curiosity, and comfort with every thoughtfully written
            page.
          </p>

          <div className="flex gap-4">
            {socialIcons.map((Icon, i) => (
              <Icon key={i} className="hover:text-green-500 duration-300" />
            ))}
          </div>
        </div>

        {/* Links Section */}
        <div>
          <h2 className="text-3xl font-bold mb-3">Useful Links</h2>
          <ul className="space-y-3">
            {footerLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="max-w-sm space-y-4">
          <form className="flex border border-green-500">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 outline-none"
            />
            <button className="bg-green-500 px-6">Subscribe</button>
          </form>

          <p>
            Subscribe to our newsletter for new arrivals, exclusive offers,
            reading inspiration, and thoughtful stories.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
