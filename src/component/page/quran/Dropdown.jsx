function Dropdown({ setSyekh, ayat, setNomor }) {
  return (
    <div className="flex justify-between border p-5 bg-gray-200 w-full z-101 top-35 fixed" >
      <div className="flex flex-col top-2 right-5 w-50 z-3">
        <label htmlFor="syekh">Qori</label>
        <select
          name="syekh"
          id="syekh"
          onChange={(e) => setSyekh(e.target.value)}
          className="border rounded-lg p-1 bg-gray-300"
        >
          <option value="01">Abdullah-Al-Juhany</option>
          <option value="02">Abdul-Muhsin-Al-Qasim</option>
          <option value="03">Abdurrahman-as-Sudais</option>
          <option value="04">Ibrahim-Al-Dossari</option>
          <option value="05">Misyari-Rasyid-Al-Afasi</option>
        </select>
      </div>
      <div className="flex flex-col top-2 w-15 z-3">
        <label htmlFor="syekh">Ayat</label>
        <select
          name="Ayat"
          id="Ayat"
          onChange={(e) => setNomor(e.target.value)}
          className="border rounded-lg p-1 bg-gray-300"
        >
          {ayat.ayat?.map((ayat) => (
            <option value={ayat.nomorAyat}>{ayat.nomorAyat}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Dropdown;
