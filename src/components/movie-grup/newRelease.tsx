const NewRelease = () => {
    return (
      <section>
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">Rilisan Terbaru</h2>
        <div className="flex space-x-4 overflow-x-auto pb-4 no-scrollbar">
          {/* <!-- Movie Card --> */}
          <div className="flex-shrink-0 w-40 sm:w-48 md:w-56">
            <a href="video.html" className="block group">
              <img
                src="https://placehold.co/400x600/7f1d1d/FFFFFF?text=Film+3"
                alt="Cinta di Kota Metropolitan"
                className="w-full rounded-lg shadow-lg card-poster"
              />
              <h3 className="mt-2 text-sm md:text-base font-semibold text-gray-200 group-hover:text-white truncate">
                Cinta di Kota Metropolitan
              </h3>
              <p className="text-xs text-gray-400">2024</p>
            </a>
          </div>
          {/* <!-- Movie Card --> */}
          <div className="flex-shrink-0 w-40 sm:w-48 md:w-56">
            <a href="video.html" className="block group">
              <img
                src="https://placehold.co/400x600/f59e0b/000000?text=Film+6"
                alt="Komedi Kacau"
                className="w-full rounded-lg shadow-lg card-poster"
              />
              <h3 className="mt-2 text-sm md:text-base font-semibold text-gray-200 group-hover:text-white truncate">
                Komedi Kacau
              </h3>
              <p className="text-xs text-gray-400">2023</p>
            </a>
          </div>
        </div>
      </section>
    )
}

export default NewRelease