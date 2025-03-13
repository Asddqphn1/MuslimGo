import { NavLink, useNavigate } from "react-router-dom";

function SholatNiatSection() {

const navigasi = useNavigate()
  return (
    <div className="min-h-screen bg-[url('/lentera-removebg-preview.png')] bg-repeat relative flex flex-col items-center py-10 overflow-hidden">
      {/* Bulan Sabit & Bintang */}

      <NavLink to="/" className="absolute left-2 top-2">
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          fill="white"
        >
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
        </svg>
      </NavLink>

      <h1 className="text-4xl font-bold text-white mb-8 text-center drop-shadow-lg open">
        Sholat Cahaya Kehidupan
      </h1>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 w-full max-w-6xl my-auto cursor-pointer">
        <div
          className="border-4 border-yellow-400 bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl "
          onClick={() => navigasi("/sholat/niat")}
        >
          <img
            src="/sholat.png"
            alt="Niat Sholat"
            className="w-20 h-20 mb-4"
          />
          <p className="text-2xl font-semibold text-black open">NIAT SHOLAT</p>
        </div>
        <div
          onClick={() => navigasi("/sholat/panduan")}
          className="border-4 border-yellow-400 bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
        >
          <img
            src="/images-removebg-preview.png"
            alt="Panduan Sholat"
            className="w-20 h-20 mb-4"
          />
          <p className="text-2xl font-semibold text-black open">
            PANDUAN SHOLAT
          </p>
        </div>
        <div
          className="border-4 border-yellow-400 bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          onClick={() => navigasi("/sholat/jadwal")}
        >
          <img
            src="/masjid.png"
            alt="Jadwal Sholat"
            className="w-20 h-20 mb-4"
          />
          <p className="text-2xl font-semibold text-black open">
            JADWAL SHOLAT
          </p>
        </div>
      </div>
    </div>
  );
}

export default SholatNiatSection;
