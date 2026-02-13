import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0b0b0b] border-t border-white/10 mt-24">
      <div className="max-w-7xl mx-auto px-12 py-20 grid md:grid-cols-4 gap-12">
        
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-purple-500">Sound</span>Sphere
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Discover top DJs, explore live mixes, and book talent for unforgettable events.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Explore</h3>
          <ul className="space-y-3 text-gray-400">
            <li>
              <Link to="/browse" className="hover:text-purple-400 transition">
                Browse DJs
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-purple-400 transition">
                Upcoming Events
              </Link>
            </li>
          </ul>
        </div>

        {/* For DJs */}
        <div>
          <h3 className="text-xl font-semibold mb-4">For DJs</h3>
          <ul className="space-y-3 text-gray-400">
            <li>
              <Link to="/signup" className="hover:text-purple-400 transition">
                Join as DJ
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-purple-400 transition">
                Dashboard
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-6 text-2xl text-gray-400">
            
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition"
            >
              <FaTwitter />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition"
            >
              <FaYoutube />
            </a>

          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-white/10 text-center py-6 text-gray-500">
        © {new Date().getFullYear()} SoundSphere. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
