const Video = () => {
  return (
    <div className="w-full h-[35vh] md:h-[70vh] bg-black">
      <div className="w-full h-full flex items-center justify-center bg-black text-gray-400">
        <div className="text-center">
          <svg
            className="w-16 h-16 mx-auto"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <p>Video Player akan muncul di sini</p>
        </div>
      </div>
    </div>
  );
};

export default Video;
