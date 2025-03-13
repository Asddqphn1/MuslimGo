import { useEffect, useState } from "react";
import { convertToArabicNumeric } from "../../../helper/convertToArabicNumeric";
import { NavLink, useNavigate } from "react-router-dom";

function DaftarSuratSection() {
  const [surat, setSurat] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigasi = useNavigate();

  useEffect(() => {
    fetch("https://equran.id/api/v2/surat")
      .then((response) => response.json())
      .then(({ data }) => setSurat(data));
  }, []);

  const filteredSurat = surat.filter((s) =>
    s.namaLatin.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="flex gap-2 fixed z-2 top-0 bg-white w-screen p-5">
        <NavLink to="/" className="left-2 mt-2">
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
        </NavLink>

        <input
          type="text"
          placeholder="Cari surat..."
          className="p-2 border rounded-lg w-70 lg:w-310"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="p-2 bg-red-500 text-white rounded-lg"
          onClick={() => setSearchTerm("")}
        >
          Reset
        </button>
      </div>
      <div className="p-5 grid lg:grid-cols-3 gap-2 grid-cols-1 bg-[url(./src/assets/lentera.png)] bg-repeat relative mt-18">
        {filteredSurat.map((surat) => (
          <div
            key={surat.nomor}
            className="flex justify-between items-center p-5 border rounded-4xl noto cursor-pointer backdrop-blur-md relative"
            onClick={() => {
              navigasi(`/quran/${surat.nomor}`);
            }}
          >
            <h1 className="text-lg flex items-center justify-center relative">
              <span className="text-3xl">(۝)</span>
              <span className="absolute">
                {convertToArabicNumeric(surat.nomor)}
              </span>
            </h1>

            <div className="w-70 ml-10">
              <h2 className="text-sm open font-bold">
                {surat.namaLatin} <span>({surat.arti})</span>
              </h2>
              <p className="text-xs open font-normal">
                {surat.tempatTurun} ▪️ {surat.jumlahAyat} ayat
              </p>
            </div>
            <h2 className="w-15 ">{surat.nama}</h2>
          </div>
        ))}
      </div>
    </>
  );
}

export default DaftarSuratSection;
