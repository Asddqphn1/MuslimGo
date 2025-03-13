import { createBrowserRouter } from "react-router-dom";
import Beranda from "../page/beranda/page";
import Quran from "../page/quran/page";
import Nomor from "../page/quran/nomor/page";
import Doa from "../page/doa/page";
import Detail from "../page/doa/detail/page";
import Namabaikallah from "../page/namabaikallah/page";
import Sholat from "../page/sholat/page";
import Niat from "../page/sholat/niat/page";
import Panduan from "../page/sholat/panduan/page";
import Jadwal from "../page/sholat/jadwal/page";
import FooterSection from "../component/page/beranda/FooterSection";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Beranda/>,
  },
  {
    path: "/quran",
    element: <Quran/>,
  },
  {
    path: "/quran/:suratNomor",
    element: <Nomor/>
  },
  {
    path: "/doa",
    element: <Doa/>
  },
  {
    path: "/doa/:nomor",
    element: <Detail/>
  },
  {
    path:"/namabaikallah",
    element:<Namabaikallah/>
  },
  {
    path: "/sholat",
    element: <Sholat/>
  },
  {
    path: "/sholat/niat",
    element: <Niat/>
  },
  {
    path: "/sholat/panduan",
    element: <Panduan/>
  },
  {
    path: "/sholat/jadwal",
    element: <Jadwal/>
  }

  

]);

export default router;
