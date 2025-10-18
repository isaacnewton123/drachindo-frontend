const DetailVideo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-2">
        <h1 className="text-3xl md:text-4xl text-white font-bold mb-2">
          Penjelajah Galaksi
        </h1>
        <div className="flex items-center space-x-4 text-gray-400 mb-4">
          <span>2024</span>
          <span>•</span>
          <span className="font-bold text-yellow-400">⭐ 8.5</span>
          <span>•</span>
          <span>2j 15m</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="bg-slate-700 text-gray-300 text-xs font-semibold px-3 py-1 rounded-full">
            Sci-Fi
          </span>
          <span className="bg-slate-700 text-gray-300 text-xs font-semibold px-3 py-1 rounded-full">
            Petualangan
          </span>
        </div>
        <p className="text-gray-300 leading-relaxed">
          Sebuah petualangan epik melintasi galaksi untuk menemukan planet baru
          yang bisa dihuni oleh manusia.
        </p>
      </div>
      <div className="md:col-span-1">
        <div className="bg-slate-800 p-4 rounded-lg">
          <p className="text-gray-400 mb-2">
            <span className="font-semibold text-white">Pemeran:</span> Aktor A,
            Aktris B
          </p>
          <p className="text-gray-400">
            <span className="font-semibold text-white">Sutradara:</span>{" "}
            Sutradara X
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailVideo;
