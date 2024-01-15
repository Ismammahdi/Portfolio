
import { Outlet } from 'react-router-dom';
import MainMenu from '../Components/MainMenu';
import Footer from '../Components/Footer';

const Main = () => {
    return (
        <div>
            <MainMenu></MainMenu>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;