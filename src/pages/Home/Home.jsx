import Carrousel from "../Home/Carrousel";
import Sections from "../Home/Sections";
import InfoCards from "./InfoCards";
import GallerySlider from "./GallerySlider";
import FAQ from "./FAQ";
import Slider from "./Slider";

function Home() {
  return (
    <div>
      <h2 className="text-2xl font-bold">Nuestros Servicios</h2>
      <p>Explora nuestros cursos y proyectos destacados.</p>
      <Carrousel/>
      <Sections/>
      <InfoCards/>
      <GallerySlider/>
      <FAQ/>
      <Slider/>
    </div>
  );
}

export default Home;