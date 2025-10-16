import { FaPlay } from "react-icons/fa";

const TrendingSection = () => {
  return (
        <section 
      className="relative h-[60vh] md:h-[80vh] flex items-end overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(to top, #0f172a 5%, rgba(15, 23, 42, 0.5) 100%) , url("https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")', // Ganti URL ini dengan link thumbnail/foto Anda
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-20">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
          Penjelajah Galaksi
        </h1>
        <p className="max-w-xl text-gray-200 mb-6">
          Sebuah petualangan epik melintasi galaksi untuk menemukan planet baru
          yang bisa dihuni oleh manusia.
        </p>
        <div className="flex space-x-4">
          <a
            href="home"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg flex items-center space-x-2 transition duration-300"
          >
            <FaPlay />
            <span>Mulai Nonton</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
