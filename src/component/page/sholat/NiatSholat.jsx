import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function NiatSholat() {
  const [niat, setNiat] = useState([]);
  const [loading, setLoading] = useState(true); // Tambahin state loading

  useEffect(() => {
    fetch("https://islamic-api.vwxyz.id/shalat/niat")
      .then((response) => response.json())
      .then((data) => {
        setNiat(data.data);
        setLoading(false); // Setelah data muncul, matiin loading
      })
      .catch(() => setLoading(false)); // Handle error juga
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 to-green-700 text-white py-10 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <NavLink to="/sholat" className="fixed left-2 top-2">
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            fill="white"
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
        </NavLink>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-yellow-400">
          🌙 Daftar Niat Sholat
        </h1>
        <p className="text-base md:text-lg text-gray-300">
          Niat sholat adalah langkah awal untuk khusyuk dalam ibadah. Berikut
          kumpulan niat sholat dalam bahasa Arab, Latin, dan artinya.
        </p>
      </div>

      {loading ? ( 
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-yellow-400"></div>

          <p className="ml-3 text-lg">Memuat data...</p>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {niat.map((item) => (
            <div
              key={item.id}
              className="bg-white text-green-900 p-5 md:p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-green-700 mb-2 open">
                🕌 Niat {item.nama}
              </h2>
              <p className="text-right text-2xl md:text-3xl amiri mb-2 text-black">
                {item.arab}
              </p>
              <p className="italic text-sm md:text-base text-gray-700">
                {item.latin}
              </p>
              <p className="mt-2 text-gray-900 font-medium">
                <span className="text-yellow-500 font-bold">Artinya:</span>{" "}
                {item.arti}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default NiatSholat;
