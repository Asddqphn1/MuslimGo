import { useEffect, useState } from "react";
import DropdownKota from "./DropdownKota";
import { NavLink } from "react-router-dom";

function JadwalSholat() {
  const [kota, setKota] = useState([]);
  const [jadwal, setJadwal] = useState([]);
  const [kotaJadwal, setKotaJadwal] = useState("acehbarat");
  const today = new Date().toISOString().split("T")[0];
  const [tahun, setTahun] = useState(today.split("-")[0]);
  const [bulan, setBulan] = useState(today.split("-")[1]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://raw.githubusercontent.com/lakuapik/jadwalsholatorg/master/kota.json`
    )
      .then((response) => response.json())
      .then((data) => setKota(data));
  }, []);

  useEffect(() => {
    fetch(
      `https://raw.githubusercontent.com/lakuapik/jadwalsholatorg/master/adzan/${kotaJadwal}/${tahun}/${bulan}.json`
    )
      .then((response) => response.json())
      .then((data) => setJadwal(data.length > 0 ? data : null))
      .then(() => setLoading(false))
      .catch(() => setJadwal(null));
  }, [kotaJadwal, tahun, bulan]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-300 flex flex-col items-center p-6">
      <NavLink to="/sholat" className="fixed left-2 top-2">
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
        </svg>
      </NavLink>
      <h1 className="text-3xl font-bold text-green-800 mb-4 ">Jadwal Sholat</h1>
      <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-md">
        <DropdownKota setKotaJadwal={setKotaJadwal} kota={kota} />
        <div className="mt-4 flex space-x-2">
          <input
            type="number"
            className="p-2 border rounded-lg w-24 text-center"
            value={tahun}
            onChange={(e) => setTahun(e.target.value)}
            placeholder="Tahun"
            min="2000"
            max="2100"
          />
          <select
            className="p-2 border rounded-lg w-24 text-center"
            value={bulan}
            onChange={(e) => setBulan(e.target.value)}
          >
            {[...Array(12)].map((_, i) => (
              <option key={i} value={(i + 1).toString().padStart(2, "0")}>
                {new Date(0, i).toLocaleString("id-ID", { month: "long" })}
              </option>
            ))}
          </select>
        </div>
      </div>
      {loading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-yellow-400"></div>

          <p className="ml-3 text-lg">Memuat data...</p>
        </div>
      ) : (
        <div className="mt-6 w-full max-w-2xl overflow-x-auto">
          {jadwal ? (
            <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-green-700 text-white">
                <tr>
                  <th className="p-3">Tanggal</th>
                  <th className="p-3">Imsyak</th>
                  <th className="p-3">Shubuh</th>
                  <th className="p-3">Terbit</th>
                  <th className="p-3">Dzuhur</th>
                  <th className="p-3">Ashar</th>
                  <th className="p-3">Maghrib</th>
                  <th className="p-3">Isya</th>
                </tr>
              </thead>
              <tbody>
                {jadwal.map((item, index) => {
                  const isToday = item.tanggal === today.split("-").join("-");
                  return (
                    <tr
                      key={index}
                      className={`text-center border-b border-gray-300 ${
                        isToday ? "bg-yellow-200 font-bold" : ""
                      }`}
                    >
                      <td className="p-3">{item.tanggal}</td>
                      <td className="p-3">{item.imsyak}</td>
                      <td className="p-3">{item.shubuh}</td>
                      <td className="p-3">{item.terbit}</td>
                      <td className="p-3">{item.dzuhur}</td>
                      <td className="p-3">{item.ashr}</td>
                      <td className="p-3">{item.magrib}</td>
                      <td className="p-3">{item.isya}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <p className="text-red-600 font-bold text-lg mt-4">
              Belum update jadwal sholat brooo 😊😊😊😊😊
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default JadwalSholat;
