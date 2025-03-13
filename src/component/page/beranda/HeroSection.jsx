import { NavLink } from "react-router-dom";

function HeroSection() {
  return (
    <div className="relative flex lg:flex-row-reverse flex-col justify-center items-center open h-screen backdrop-blur-sm ">
      <div className="relative w-80 h-80 lg:top-0 top-15 right-8 lg:right-0">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-8 z-0 w-80 h-80"
        >
          <path
            fill="#0C9C46"
            d="M67.7,-23.2C76.5,5.2,64.8,39.1,41.4,55.9C18,72.6,-17,72.1,-41.4,54.9C-65.7,37.7,-79.4,3.8,-70.7,-24.4C-62,-52.6,-31,-75.1,-0.8,-74.8C29.4,-74.5,58.9,-51.6,67.7,-23.2Z"
            transform="translate(100 100)"
          />
        </svg>
        <img
          src="./src/assets/mesjidkartun.png"
          alt=""
          className="absolute top-10 right-2 z-9 h-60 w-60"
        />
      </div>

      <div className="relative z-10 h-80 lg:w-170 top-10">
        <h1 className="text-xl/10 lg:text-3xl/20 font-extrabold text-white text-justify p-6">
          Jangan lupa! Cahaya hati ada dalam Al-Qur'an kekuatan hidup ada dalam
          sholat. READ QURAN & PRAY EVERYDAY
        </h1>
      </div>
    </div>
  );
}

export default HeroSection;
