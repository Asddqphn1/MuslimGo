function DropdownKota({setKotaJadwal, kota}) {
    

    return (
      <>
        <label htmlFor="kota" className="mr-7">
          Kota
        </label>
        <select
          name="kota"
          id="kota"
          onChange={(e) => setKotaJadwal(e.target.value)}
          className="border rounded-lg p-1 bg-gray-300"
        >
          
          {kota.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </>
    );

}

export default DropdownKota;