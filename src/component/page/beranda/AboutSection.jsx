import { NavLink } from "react-router-dom";

function AboutSection() {
  return (
    <div className="flex flex-col items-start p-4 h-screen backdrop-blur-sm">
      <img
        src="/quran-removebg-preview.png"
        alt=""
        className="absolute top-0 left-13 h-70 w-70 lg:mt-30 "
      />
      <p className="text-justify lg:w-3/4 text-sm lg:text-lg leading-relaxed lg:ml-85 lg:p-15 lg:mt-10 mt-60">
        Qur'anGo dirancang untuk mempermudah umat Muslim dalam membaca,
        memahami, dan mendengarkan Al-Qur'an kapan saja dan di mana saja. Dengan
        tampilan yang sederhana namun elegan, website ini menyediakan berbagai
        fitur utama, di antaranya: <br />
        📖 Baca Al-Qur'an – Akses lengkap 114. <br /> 🔢 Ayat Per Ayat. <br />
        🗣️ Audio Qori' – Dengarkan bacaan Al-Qur'an dari Qori' ternama seperti
        Sheikh Mishary Rashid Alafasy, Abdurrahman-as-Sudais, dan lainnya.{" "}
        <br />
        📜 Terjemahan & Tafsir. <br />
        🔍 Pencarian Surat & Ayat.
      </p>
      <NavLink
        to="/quran"
        className="cursor-pointer text-white font-semibold py-2 px-4 rounded-lg bg-sky-500 hover:bg-sky-600 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl border border-sky-600 flex items-center gap-3 w-40 h-12 mt-2 lg:ml-105"
      >
        Qur'anGo
        <svg
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" />
        </svg>
      </NavLink>
    </div>
  );
}

export default AboutSection;
