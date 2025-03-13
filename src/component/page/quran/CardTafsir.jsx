import { useEffect } from "react";

function CardTafsir({ item, setTampil, tafsir, tampil, nomor }) {
  useEffect(() => {
    if (tampil) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [tampil]);

  if (!tampil) return null;

  return (
    <div
      className={`${
        tampil ? "block" : "hidden"
      } card  fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-5 rounded-lg shadow-lg z-900 mt-15 lg:mt-0`}
    >
      <header className="border-b pb-2 flex justify-between">
        <h1>
          Tafsir Surat {item.namaLatin} - {item.nomor} <p>ayat {nomor}</p>{" "}
        </h1>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onClick={() => setTampil(!tampil)} className="w-6 h-6 cursor-pointer hover:scale-125">
          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
        </svg>
      </header>
      <div className="w-80 h-80 lg:h-100 overflow-y-scroll lg:w-250 p-5">
        <p className="amiri text-xl lg:text-2xl text-right">{item.ayat[nomor - 1].teksArab}</p>
        <p className="text-justify text-md lg:text-lg mt-7">{tafsir.teks}</p>
      </div>
    </div>
  );
}

export default CardTafsir;
