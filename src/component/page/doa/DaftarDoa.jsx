import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function DaftarDoa() {
  const [doa, setDoa] = useState([]);
  const navigasi = useNavigate()

  useEffect(() => {
    fetch("https://open-api.my.id/api/doa")
      .then((response) => response.json())
      .then((data) => setDoa(data));
  }, []);

  return (
    <div className="w-full min-h-screen bg-[url('/lentera.png')] bg-cover bg-center md:bg-contain bg-no-repeat bg-fixed open">
      <NavLink to="/" className="absolute left-2 top-6">
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          fill="black"
        >
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
        </svg>
      </NavLink>
      <h1 className="text-3xl font-bold text-center mb-6 text-black mt-10 lg:mt-0">
        Daftar Doa
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  ">
        {doa.map((item) => (
          <div
            key={item.id}
            className=" shadow-lg rounded-2xl p-5 border border-gray-200 hover:shadow-xl transition-transform transform hover:scale-105 backdrop-blur-md"
            onClick={() => {
              navigasi(`/doa/${item.id}`);
            }}
          >
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              {item.judul}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DaftarDoa;
