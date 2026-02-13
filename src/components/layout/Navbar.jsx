import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full px-12 py-6 flex justify-between items-center border-b border-white/10 backdrop-blur-md bg-black/40 sticky top-0 z-50">
      
      {/* Logo */}
      <Link to="/" className="text-3xl font-extrabold tracking-wide">
        <span className="text-purple-500">Sound</span>Sphere
      </Link>

      {/* Links */}
      <div className="hidden md:flex items-center gap-10 text-lg font-semibold">
        <Link
          to="/browse"
          className="hover:text-purple-400 transition duration-300"
        >
          Browse DJs
        </Link>

        <Link
          to="/login"
          className="hover:text-purple-400 transition duration-300"
        >
          Login
        </Link>

        <Link
          to="/signup"
          className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full transition duration-300 shadow-lg hover:shadow-purple-500/30"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
