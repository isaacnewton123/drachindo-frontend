const RelateVideo = () => {
    return (
         <div className="mt-12">
                <h2 className="text-2xl font-bold mb-4 text-white">Film Terkait</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {/* <!-- Related Movie --> */}
                    <a href="video.html" className="block group">
                        <img src="https://placehold.co/400x600/4c1d95/FFFFFF?text=Film+7" alt="Robot Pemberontak" className="w-full rounded-lg shadow-md card-poster" />
                        <h4 className="mt-2 text-sm font-semibold text-gray-200 group-hover:text-white truncate">Robot Pemberontak</h4>
                    </a>
                    {/* <!-- Related Movie --> */}
                     <a href="video.html" className="block group">
                        <img src="https://placehold.co/400x600/047857/FFFFFF?text=Film+8" alt="Jejak Waktu" className="w-full rounded-lg shadow-md card-poster" />
                        <h4 className="mt-2 text-sm font-semibold text-gray-200 group-hover:text-white truncate">Jejak Waktu</h4>
                    </a>
                    {/* <!-- Related Movie --> */}
                    <a href="video.html" className="block group">
                        <img src="https://placehold.co/400x600/334155/FFFFFF?text=Film+4" alt="Agen Rahasia" className="w-full rounded-lg shadow-md card-poster" />
                        <h4 className="mt-2 text-sm font-semibold text-gray-200 group-hover:text-white truncate">Agen Rahasia: Misi Terakhir</h4>
                    </a>
                </div>
            </div>
    )
}

export default RelateVideo