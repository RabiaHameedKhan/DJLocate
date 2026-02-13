import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const PublicLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0f0f0f] text-white">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
