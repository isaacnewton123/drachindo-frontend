const TrendingGroup = () => {
    return (
      <section>
        <h2 className="text-xl md:text-2xl text-white font-bold mb-4">Sedang Tren</h2>
        <div className="flex space-x-4 overflow-x-auto pb-4 no-scrollbar">
          {/* <!-- Movie Card --> */}
          <div className="flex-shrink-0 w-40 sm:w-48 md:w-56">
            <a href="video.html" className="block group">
              <img
                src="https://placehold.co/400x600/1e293b/FFFFFF?text=Film+1"
                alt="Penjelajah Galaksi"
                className="w-full rounded-lg shadow-lg card-poster"
              />
              <h3 className="mt-2 text-sm md:text-base font-semibold text-gray-200 group-hover:text-white truncate">
                Penjelajah Galaksi
              </h3>
              <p className="text-xs text-gray-400">2024</p>
            </a>
          </div>
          {/* <!-- Movie Card --> */}
          <div className="flex-shrink-0 w-40 sm:w-48 md:w-56">
            <a href="video.html" className="block group">
              <img
                src="https://placehold.co/400x600/334155/FFFFFF?text=Film+4"
                alt="Agen Rahasia"
                className="w-full rounded-lg shadow-lg card-poster"
              />
              <h3 className="mt-2 text-sm md:text-base font-semibold text-gray-200 group-hover:text-white truncate">
                Agen Rahasia: Misi Terakhir
              </h3>
              <p className="text-xs text-gray-400">2022</p>
            </a>
          </div>
          {/* <!-- Movie Card --> */}
          <div className="flex-shrink-0 w-40 sm:w-48 md:w-56">
            <a href="video.html" className="block group">
              <img
                src="https://placehold.co/400x600/4c1d95/FFFFFF?text=Film+7"
                alt="Robot Pemberontak"
                className="w-full rounded-lg shadow-lg card-poster"
              />
              <h3 className="mt-2 text-sm md:text-base font-semibold text-gray-200 group-hover:text-white truncate">
                Robot Pemberontak
              </h3>
              <p className="text-xs text-gray-400">2024</p>
            </a>
          </div>
          {/* <!-- Movie Card --> */}
          <div className="flex-shrink-0 w-40 sm:w-48 md:w-56">
            <a href="video.html" className="block group">
              <img
                src="https://placehold.co/400x600/475569/FFFFFF?text=Film+2"
                alt="Misteri Pulau Terkutuk"
                className="w-full rounded-lg shadow-lg card-poster"
              />
              <h3 className="mt-2 text-sm md:text-base font-semibold text-gray-200 group-hover:text-white truncate">
                Misteri Pulau Terkutuk
              </h3>
              <p className="text-xs text-gray-400">2023</p>
            </a>
          </div>
          {/* <!-- Movie Card --> */}
          <div className="flex-shrink-0 w-40 sm:w-48 md:w-56">
            <a href="video.html" className="block group">
              <img
                src="https://placehold.co/400x600/1e3a8a/FFFFFF?text=Film+5"
                alt="Kerajaan Fantasi"
                className="w-full rounded-lg shadow-lg card-poster"
              />
              <h3 className="mt-2 text-sm md:text-base font-semibold text-gray-200 group-hover:text-white truncate">
                Kerajaan Fantasi
              </h3>
              <p className="text-xs text-gray-400">2021</p>
            </a>
          </div>
        </div>
      </section>
    )
}

export default TrendingGroup