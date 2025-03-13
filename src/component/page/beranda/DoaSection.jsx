import { NavLink } from "react-router-dom";

function DoaSection() {
    return (
      <div className="relative flex flex-col lg:flex-row-reverse justify-center items-center open h-screen backdrop-blur-sm">
        <div className="relative lg:w-80 lg:h-80 lg:top-0 w-50 h-50">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute lg:top-0 lg:left-7 z-0 lg:w-80 lg:h-80"
          >
            <path
              fill="#0e8c15"
              d="M67.7,-23.2C76.5,5.2,64.8,39.1,41.4,55.9C18,72.6,-17,72.1,-41.4,54.9C-65.7,37.7,-79.4,3.8,-70.7,-24.4C-62,-52.6,-31,-75.1,-0.8,-74.8C29.4,-74.5,58.9,-51.6,67.7,-23.2Z"
              transform="translate(100 100)"
            />
          </svg>
          <img
            src="/berdoa.png"
            alt=""
            className="absolute lg:top-20 lg:right-0 z-9 top-10 right-4 "
          />
        </div>

        <div className="relative z-10 lg:h-80 lg:top-0 p-8 lg:bg-[#C06826] bg-opacity-50 rounded-lg shadow-lg">
          <h1 className="text-white text-justify lg:w-150 font-extrabold">
            DoaGO adalah fitur dalam Muslim GO yang dirancang untuk membantu
            umat Muslim dalam mengamalkan doa-doa harian dengan mudah. Di
            dalamnya, tersedia kumpulan doa untuk berbagai situasi dalam
            kehidupan sehari-hari, lengkap dengan teks Arab, latin, dan
            terjemahan. Dengan DoaGO, amalan harian jadi lebih mudah, membantu
            kita selalu terhubung dengan Allah dalam setiap aktivitas. Jadikan
            doa sebagai bagian dari hidupmu!🌿
          </h1>
        </div>

        <NavLink
          to="/doa"
          className="cursor-pointer text-white font-semibold py-2 px-4 rounded-lg bg-sky-500 hover:bg-sky-600 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl border border-sky-600 flex items-center gap-3 w-40 h-12 mt-2 lg:absolute lg:left-95 -ml-40 lg:mt-75 z-18"
        >
          DoaGo
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" />
          </svg>
        </NavLink>
      </div>
    );
}

export default DoaSection;