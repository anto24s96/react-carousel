import "./App.css";
import Carousel from "./components/Carousel";
import image1 from "./assets/Emirates_stadium.jpg";
import image2 from "./assets/anfield.jpg";
import image3 from "./assets/etihad_stadium.jpg";
import image4 from "./assets/old_trafford.jpg";
import image5 from "./assets/stanford_bridge.jpg";
import image6 from "./assets/tottenham.jpg";

const slides = [
    {
        image: image1,
        title: "Slide 1",
    },
    {
        image: image2,
        title: "Slide 2",
    },
    {
        image: image3,
        title: "Slide 3",
    },
    {
        image: image4,
        title: "Slide 4",
    },
    {
        image: image5,
        title: "Slide 5",
    },
    {
        image: image6,
        title: "Slide 6",
    },
];

const App = () => {
    return (
        <>
            <Carousel />
        </>
    );
};

export default App;
