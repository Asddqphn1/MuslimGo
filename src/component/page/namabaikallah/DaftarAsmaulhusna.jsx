import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function DaftarAsmaulhusna() {
  const [asmaulHusna, setAsmaulHusna] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://asmaul-husna-api.vercel.app/api/all")
      .then((response) => response.json())
      .then((data) => {
        setAsmaulHusna(data.data);
        setLoading(false);
      });
  }, []);

  return (
    <div
      className="relative min-h-screen flex flex-col items-center p-5 text-white bg-fixed bg-[url('/src/assets/biru.png')] "
     
    >
      {/* Efek Overlay agar teks tetap terbaca */}
      <div className="absolute inset-0 bg-opacity-50"></div>

      <NavLink to="/" className="absolute left-4 top-2 z-50">
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          fill="white"
        >
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
        </svg>
      </NavLink>

      <h1 className="relative text-3xl md:text-4xl font-bold text-yellow-300 mb-6 z-10">
        Asmaul Husna
      </h1>

      {loading ? (
        <div className="flex justify-center items-center min-h-[200px] z-10">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-yellow-400"></div>
          <p className="ml-3 text-lg">Memuat data...</p>
        </div>
      ) : (
        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl z-10">
          {asmaulHusna.map((item) => (
            <div
              key={item.urutan}
              className="bg-white border-4 border-violet-500 shadow-lg rounded-xl p-5 flex flex-col items-center text-center relative transition-transform transform hover:scale-105"
            >
              {/* Hiasan Islami di atas */}
              <div className="absolute top-2 left-2">
                <img
                  src="/src/assets/hijau.png"
                  alt="Lentera"
                  className="w-10 h-10"
                />
              </div>
              <div className="absolute top-2 right-2">
                <img
                  src="/src/assets/hijau.png"
                  alt="Lentera"
                  className="w-10 h-10"
                />
              </div>

              {/* Isi Kartu */}
              <p className="text-3xl amiri text-green-900 my-2">{item.arab}</p>
              <p className="text-lg font-semibold text-green-800 open">
                {item.latin}
              </p>
              <p className="text-gray-600 text-sm">{item.arti}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DaftarAsmaulhusna;
