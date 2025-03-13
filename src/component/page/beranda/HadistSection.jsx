import { useEffect, useState } from "react";

function HadistSection() {
  const [hadist, setHadist] = useState([]);
  
  const [book, setBook] = useState([]);
  const [randomIndex, setRandomIndex] = useState(Math.floor(Math.random() * 8));

  useEffect(() => {
    fetch("https://api.hadith.gading.dev/books")
      .then((response) => response.json())
      .then((data) => {
        setBook(data.data[randomIndex]);
        
      });
  }, []);

  useEffect(() => {
    if(book && book.id) {
      fetch(`https://api.hadith.gading.dev/books/${book.id}?range=1-10`)
      .then((response) => response.json())
      .then(({data}) => {
        const randomHadithIdx = Math.floor(Math.random() * 10);

          setHadist(data.hadiths[randomHadithIdx]);
      });
    }
    
  },[book]);

  return (
    <div className="bg-[url('./src/assets/mesjidannur.jpg')] bg-no-repeat bg-cover p-5 flex flex-col justify-center items-center shadow-lg text-white h-screen">
      <div>
        <h1 className="bg-gradient-to-r from-green-600 to-yellow-900 bg-clip-text text-5xl font-extrabold text-transparent fixed top-25 left-[35%]">Hadits of the Day</h1>
      </div>
      <div className="backdrop-blur-xl h-200 rounded-lg p-5 overflow-y-scroll container text-black  mt-35 noto">
        <h1 className="text-3xl/20 text-right font-extrabold">{hadist.arab}</h1>
      <p className="mt-5 text-xl/8 text-justify">{hadist.id} <span>( {book.name} )</span></p>
      </div>
      
    </div>
  );
}

export default HadistSection