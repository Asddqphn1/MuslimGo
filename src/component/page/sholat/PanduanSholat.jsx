import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function PanduanSholat() {
  const [panduan, setPanduan] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://islamic-api.vwxyz.id/shalat/bacaan")
      .then((response) => response.json())
      .then((data) => {setPanduan(data)
        setLoading(false);
      })
      
  }, []);

  // Daftar gambar untuk setiap bacaan sholat
  const images = [
    "/src/assets/takbiratulihram.png",
    "/src/assets/alfatihah.png",
    "/src/assets/iftittah.png",
    "/src/assets/rukuk.png",
    "/src/assets/iktidal.png",
    "/src/assets/sujud.png",
    "/src/assets/duduk-diantara.png",
    "/src/assets/duduk-diantara.png",
    "/src/assets/duduk-diantara.png",
    "/src/assets/salam.png",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 to-green-700 text-black p-6">
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
      <h1 className="text-center text-3xl font-bold mb-6 text-white">
        Panduan Sholat
      </h1>

      {loading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-yellow-400"></div>

          <p className="ml-3 text-lg">Memuat data...</p>
        </div>
      ) : (
        <div className="space-y-8">
          {panduan.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-lg open"
            >
              <img
                src={images[index] || "/src/assets/default.png"}
                alt={item.nama}
                className="h-40 w-40 md:h-60 md:w-60 object-contain rounded-lg shadow-md"
              />
              <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left">
                <h2 className="text-2xl font-semibold text-yellow-300">
                  {item.nama}
                </h2>
                <p className="text-xl amiri my-2">
                  {index === 2
                    ? item.bacaan.map((b, i) => (
                        <p key={i} className="block">
                          {b.arab}
                        </p>
                      ))
                    : item.bacaan[0].arab}
                </p>

                <p className="text-lg italic text-red-500">
                  {index === 2
                    ? item.bacaan.map((b, i) => (
                        <p key={i} className="block">
                          {b.latin}
                        </p>
                      ))
                    : item.bacaan[0].latin}
                </p>
                <p className="text-md text-black">
                  {index === 2
                    ? item.bacaan.map((b, i) => (
                        <p key={i} className="block">
                          {b.arti}
                        </p>
                      ))
                    : item.bacaan[0].arti}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PanduanSholat;
