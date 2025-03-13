import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { convertToArabicNumeric } from "../../../helper/convertToArabicNumeric";
import Dropdown from "./Dropdown";
import HeaderSurah from "./HeaderSurah";
import CardTafsir from "./CardTafsir";

function DetailSuratSection() {
  const { suratNomor } = useParams();
  const [tampil, setTampil] = useState(false);
  const [ayat, setAyat] = useState([]);
  const [syekh, setSyekh] = useState("01");
  const [nomor, setNomor] = useState(1);
  const [nomorTafsir, setNomorTafsir] = useState(0);
  const [tafsir, setTafsir] = useState([]);
  const ayatRefs = useRef({}); // Menyimpan referensi untuk setiap ayat
  const audioRefs = useRef({}); // Simpan referensi untuk audio tiap ayat

  useEffect(() => {
    fetch(`https://equran.id/api/v2/surat/${suratNomor}`)
      .then((response) => response.json())
      .then(({ data }) => setAyat(data));
  }, [suratNomor]); // Tambahkan dependensi biar tidak fetch terus-menerus

  useEffect(() => {
    fetch(`https://equran.id/api/v2/tafsir/${suratNomor}`)
      .then((response) => response.json())
      .then(({ data }) => setTafsir(data.tafsir[nomorTafsir]));
  }, [nomorTafsir]); // Tambahkan dependensi biar tidak fetch terus-menerus

  // Efek untuk scroll otomatis ke ayat yang dipilih
  useEffect(() => {
    if (ayatRefs.current[nomor]) {
      ayatRefs.current[nomor].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [nomor]); // Jalan setiap nomor ayat berubah

  // Fungsi play/pause audio
  const toggleAudio = (nomorAyat, audioUrl) => {
    if (audioRefs.current[nomorAyat]) {
      if (audioRefs.current[nomorAyat].paused) {
        audioRefs.current[nomorAyat].play();
      } else {
        audioRefs.current[nomorAyat].pause();
      }
    } else {
      const newAudio = new Audio(audioUrl);
      audioRefs.current[nomorAyat] = newAudio;
      newAudio.play();
    }
  };

  return (
    <>
      <HeaderSurah
        ayat={ayat}
        convertToArabicNumeric={convertToArabicNumeric}
      />
      <Dropdown setSyekh={setSyekh} ayat={ayat} setNomor={setNomor} />
      <div className="mt-60">
        {ayat.ayat?.map((item) => (
          <div
            key={item.nomorAyat}
            ref={(el) => (ayatRefs.current[item.nomorAyat] = el)} // Simpan referensi tiap ayat
            className="relative flex flex-col gap-3 p-4 rounded-lg shadow-lg bg-[#FDF6E3] border-b-8 border-b-[#C9A227] "
          >
            {/* Ayat Arab */}
            <div className="relative">
              <p className="text-xl/20 lg:text-4xl/25 amiri text-right border rounded-4xl p-5 bg-white shadow-md">
                {item.teksArab}{" "}
                <span className='text-xs -mr-5 before:content-["(۝)"] before:relative before:-left-9 before:text-right before:text-2xl before:lg:text-4xl lg:text-lg before:lg:-left-13'>
                  {convertToArabicNumeric(item.nomorAyat)}
                </span>
              </p>
            </div>

            {/* Transliteration */}
            <p className="text-md lg:text-lg/10 text-green-900 sand">
              {item.teksLatin}
            </p>

            {/* Terjemahan */}
            <p className="text-base/8 text-justify mt-6 text-black sand">
              {item.teksIndonesia}
            </p>

            <div className="flex gap-4">
              <button
                onClick={() => toggleAudio(item.nomorAyat, item.audio[syekh])}
                className=" cursor-pointer text-5xl -mt-3 hover:scale-105"
              >
                🗣️
              </button>

              {/* Tafsir */}
              <button
                onClick={() => {
                  setNomorTafsir(item.nomorAyat - 1);
                  setTampil(!tampil);
                }}
                className="flex gap-2 border p-5 rounded-3xl hover:scale-105 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6  "
                  viewBox="0 0 384 512"
                >
                  <path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z" />
                </svg>
                <p>Tafsir</p>
              </button>
            </div>

            {/* Audio sebagai teks */}
          </div>
        ))}
        <CardTafsir
          item={ayat}
          setTampil={setTampil}
          tafsir={tafsir}
          tampil={tampil}
          nomor={nomorTafsir + 1}
        />
      </div>
    </>
  );
}

export default DetailSuratSection