import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { motion } from "framer-motion";

function DetailDoa() {
  const [doa, setDoa] = useState([]);
  const { nomor } = useParams();

  useEffect(() => {
    fetch(`https://open-api.my.id/api/doa/${nomor}`)
      .then((response) => response.json())
      .then((data) => setDoa(data));
  }, [nomor]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 to-green-600 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <NavLink to="/doa" className="fixed left-5 top-5">
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          fill="#FFFFFF"
        >
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
        </svg>
      </NavLink>
      {/* Bulan & Bintang */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-yellow-400 rounded-full shadow-lg"></div>
      <div className="absolute top-12 left-14 w-12 h-12 bg-green-900 rounded-full"></div>
      <div className="absolute top-20 right-20 w-4 h-4 bg-yellow-300 rounded-full animate-pulse"></div>
      <div className="absolute top-32 right-40 w-3 h-3 bg-yellow-300 rounded-full animate-pulse"></div>
      <div className="absolute top-48 left-28 w-3 h-3 bg-yellow-300 rounded-full animate-pulse"></div>
      <div className="absolute top-50 left-10 w-16 h-16 bg-yellow-400 rounded-full shadow-lg"></div>
      <div className="absolute top-92 left-24 w-12 h-12 bg-green-900 rounded-full"></div>
      <div className="absolute top-50 right-20 w-4 h-4 bg-yellow-300 rounded-full animate-pulse"></div>
      <div className="absolute top-82 right-40 w-3 h-3 bg-yellow-300 rounded-full animate-pulse"></div>
      <div className="absolute top-78 left-28 w-3 h-3 bg-yellow-300 rounded-full animate-pulse"></div>

      <div className="text-2xl text-white font-bold mb-10">{doa.judul}</div>

      {/* Bubble Chat */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative bg-white shadow-lg rounded-lg p-6 max-w-xl w-full text-center h-100 overflow-scroll lg:h-full lg:overflow-hidden"
      >
        <p className="amiri text-4xl text-green-800 leading-loose">
          {doa.arab}
        </p>
        <p className="open text-xl text-gray-700 mt-4">{doa.latin}</p>
        <p className="text-gray-900 font-semibold mt-4">Artinya:</p>
        <p className="text-lg text-gray-600 italic">{doa.terjemah}</p>

        {/* Navigasi */}
        <NavLink
          to={nomor == 1 ? `/doa` : `/doa/${nomor - 1}`}
          className="mt-4 block"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mt-8"
            viewBox="0 0 448 512"
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
        </NavLink>
        <NavLink
          to={
            parseInt(nomor, 10) === 23
              ? `/doa`
              : `/doa/${parseInt(nomor, 10) + 1}`
          }
          className="mt-4 block"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-6 h-6 float-right -mt-8"
          >
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>
        </NavLink>
      </motion.div>
    </div>
  );
}

export default DetailDoa;
