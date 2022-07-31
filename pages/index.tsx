import type { NextPage } from 'next';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';

const Home: NextPage = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <span>s</span>
        </>
    );
};

export default Home;
