import ImageHolder from "../components/ImageHolder";
import About from "../components/About";
import Info from "../components/Info"

const Home = () => {

    const imagePath = 'images/bcity.jpeg'

    return (
        <>
            <About/>
            <ImageHolder path={imagePath}/>
            <Info/>
        </>
    );
}

export default Home;