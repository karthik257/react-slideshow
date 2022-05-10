import "./App.css";
import { Slideshow } from "./components/Slideshow";

function App() {
  const images = [{url:
    "https://cdn.pixabay.com/photo/2016/04/25/22/41/cat-1353325_960_720.jpg"},{url:"https://img1.goodfon.com/wallpaper/nbig/9/11/kot-koshka-peyzazh-nebo-kamni.jpg"},{url:"https://cdn.pixabay.com/photo/2017/11/30/12/35/cat-2988354_960_720.jpg"},{url:"https://img5.goodfon.com/wallpaper/nbig/2/fc/koshka-kot-vzgliad-poza-fon-koty-koshki-trio-tri-troitsa-dru.jpg"}]
    
  return (
    <div className="App">
      <Slideshow images={images} height={500} width={900} auto={true} direction={ true}/>
    </div>
  );
}

export default App;


