import { NavLink } from "react-router-dom";


function HeaderSurah({ ayat , convertToArabicNumeric}) {
  return (
    <header className="sand fixed bg-primary top-0 z-100 w-full h-35 p-12 flex justify-between items-center text-white">
        <NavLink
        to="/quran"
        className="absolute left-2 top-2"
      ><svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" fill="white"/></svg></NavLink>
      <div>
        <h1 className="text-3xl font-bold">
          {ayat.namaLatin} - <span>{ayat.nama}</span>
        </h1>
        <h1 className="text-sm">
          {ayat.arti} - {ayat.jumlahAyat} Ayat - {ayat.tempatTurun}
        </h1>
      </div>
      <h1 className="text-3xl font-bold border rounded-full w-10 text-center">{convertToArabicNumeric(ayat.nomor)}</h1>
    </header>
  );
}
export default HeaderSurah;
