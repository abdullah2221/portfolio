import Image from "next/image";
import Header from "./components/header/header";
import Services from "./components/services/services";
import Work from "./components/work/work";
import Contact from "./components/contact/contact";
export default function Home() {
  return (
 <>
 <Header/>
 <Services/>
 <Work />
 <Contact/>
 </>
  );
}
