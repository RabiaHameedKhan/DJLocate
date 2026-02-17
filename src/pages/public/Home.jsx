
import heroImage from "../../assets/hero.jpg";
import {Link} from "react-router-dom";


const Home = () => {
  return (
   <div>
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="text-center text-white bg-black/40 p-8 rounded-lg">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Discover the Best <span className="text-purple-500">DJs</span> in Town
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Explore live mixes, book talent, and make every event unforgettable.
          </p>
          <button className="bg-purple-500 hover:bg-purple-600 transition px-6 py-3 rounded-full font-semibold">
           <Link to="/browse">Explore DJs</Link>
          </button>
        </div>
      </section>

      {/* About section */}

     
<section className="py-24 bg-[#111111]">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold mb-6">
      About <span className="text-purple-500">SoundSphere</span>
    </h2>
    <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
      SoundSphere connects event organizers with top-tier DJs. 
      Whether you're planning a wedding, corporate event, or private party, 
      discover talented DJs, explore live mixes, and book the perfect vibe 
      for your unforgettable moments.
    </p>
  </div>
</section>

{/* Features Section */}
<section className="py-24 bg-[#0f0f0f]">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-center mb-16">
      Why Choose <span className="text-purple-500">SoundSphere?</span>
    </h2>

    <div className="grid md:grid-cols-3 gap-12">
      
      {/* Feature 1 */}
      <div className="bg-[#1a1a1a] p-8 rounded-xl hover:scale-105 transition duration-300">
        <h3 className="text-2xl font-semibold mb-4 text-purple-400">
          Top Verified DJs
        </h3>
        <p className="text-gray-400">
          Browse a curated list of professional DJs with verified profiles,
          ratings, and live mix samples.
        </p>
      </div>

      {/* Feature 2 */}
      <div className="bg-[#1a1a1a] p-8 rounded-xl hover:scale-105 transition duration-300">
        <h3 className="text-2xl font-semibold mb-4 text-purple-400">
          Easy Booking
        </h3>
        <p className="text-gray-400">
          Seamless booking experience with transparent pricing,
          availability, and direct communication.
        </p>
      </div>

      {/* Feature 3 */}
      <div className="bg-[#1a1a1a] p-8 rounded-xl hover:scale-105 transition duration-300">
        <h3 className="text-2xl font-semibold mb-4 text-purple-400">
          Live Mix Exploration
        </h3>
        <p className="text-gray-400">
          Listen to DJ sets before booking and choose the perfect vibe
          for your event.
        </p>
      </div>

    </div>
  </div>
</section>


{/* CTA Section */}
<section className="py-24 bg-gradient-to-r from-purple-600 to-purple-800 text-center">
  <div className="max-w-4xl mx-auto px-6">
    <h2 className="text-4xl font-bold mb-6">
      Ready to Elevate Your Event?
    </h2>
    <p className="text-lg mb-8 text-purple-100">
      Join SoundSphere today and connect with the best DJs in your city.
    </p>
    <button className="bg-white text-purple-700 px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
      Get Started Now
    </button>
  </div>
</section>


    </div>
  );
};

export default Home;
