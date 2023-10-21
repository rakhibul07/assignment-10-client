
import { Outlet } from 'react-router-dom';
import NavBar from '../components/Header/Navbar/Navbar';
import { Toaster } from 'react-hot-toast';
import Footer from '../components/footer/Footer';

const Layout = () => {
    return (
        <div >
            <NavBar />
            <div className='lg:px-10 bg-slate-100 dark:bg-gray-600 font-roboto'>
            <Outlet />
            </div>
            <Footer />
            <Toaster />
        </div>
    );
};

export default Layout;