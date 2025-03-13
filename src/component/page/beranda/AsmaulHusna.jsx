import { NavLink } from "react-router-dom";

function AsmaulHusna() {
  return (
    <div className="h-screen flex justify-center items-center backdrop-blur-sm">
      <div className="flex flex-col items-center text-center gap-6">
        <img
          src="./src/assets/asmaulhusna.jpeg"
          alt="Asmaul Husna"
          className="w-60 h-60 rounded-full object-cover"
        />

        <div>
          <p className="text-lg lg:text-3xl font-bold">
            Asmaul Husna - Nama-Nama Indah Allah
          </p>
          <p className="open italic">
            "Milik Allah-lah nama-nama yang paling baik, maka bermohonlah
            kepada-Nya dengan menyebut nama-nama itu..." (QS. Al-A’raf: 180)
          </p>
          <p className="open">
            🌿 Rasakan kebesaran-Nya dalam setiap Asma-Nya
          </p>
          <p className="open">
            📖 Lihat 99 Nama Allah dan Maknanya di bawah ini:
          </p>

          <NavLink
            to="/namabaikallah"
            className="cursor-pointer text-white font-semibold py-2 px-4 rounded-lg bg-sky-500 hover:bg-sky-600 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl border border-sky-600 flex items-center justify-center gap-3 w-40 h-12 mt-4 lg:ml-100 ml-25"
          >
            AsmaulHusna
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" />
            </svg>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default AsmaulHusna;
