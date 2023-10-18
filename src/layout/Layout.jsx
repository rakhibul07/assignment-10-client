
import { Outlet } from 'react-router-dom';
import NavBar from '../components/Header/Navbar/Navbar';
import { Toaster } from 'react-hot-toast';
import Footer from '../components/footer/Footer';

const Layout = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <NavBar />
            <Outlet />
            <Footer />
            <Toaster />
        </div>
    );
};

export default Layout;