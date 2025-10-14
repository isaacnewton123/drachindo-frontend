const TrendingSection = () => {
  return (
    <section className="hero-bg h-[60vh] md:h-[80vh] flex items-end">
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
            href="video.html"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg flex items-center space-x-2 transition duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.002 6.513L7.99 10l-5.988 3.487a1 1 0 00-.002 1.732l12-7a1 1 0 000-1.732l-12-7a1 1 0 00-.002 1.732z"></path>
            </svg>
            <span>Mulai Nonton</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
