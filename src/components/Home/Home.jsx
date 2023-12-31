import Category from "./Category/Category";
import Products from "../Products/Products";
import Banner from "./Banner/Banner";
import "./Home.scss";
const Home = () => {
    return <div className="home">
        <Banner />
        <div className="main-content">
            <div className="layout">
                <Category />
                <Products headingText="Popular Products"/>
            </div>
        </div>
    </div>;
};

export default Home;
