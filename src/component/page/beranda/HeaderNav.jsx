import { useEffect, useState } from "react";

function HeaderNav() {

    const [tanggal, setTanggal] = useState([])

    useEffect(() => {
        fetch("https://api.myquran.com/v2/cal/hijr")
        .then((response) => response.json())
        .then(({data}) => setTanggal(data.date));
    },[])

    return (
      <header className="fixed w-full z-50 py-6 px-3 backdrop-blur-md flex justify-between">
        <h1 className="text-xl lg:text-4xl bg-gradient-to-t from-green-500 to-sky-900 bg-clip-text font-extrabold text-transparent">
          MuslimGo
        </h1>
        <div>
            <h1 className="text-xs lg:text-2xl text-white">📅 {tanggal[0]}, <span> {tanggal[1]}</span></h1>
            <h2 className="text-xs lg:text-md text-white ml-6 lg:ml-10">{tanggal[2]}</h2>
        </div>

      </header>
    );
}

export default HeaderNav