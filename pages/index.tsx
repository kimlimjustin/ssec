import type { NextPage } from 'next';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Writing from '../components/Writing/Writing';

const Home: NextPage = () => {
    return (
        <>
            <Header />
            <div className="container">
                <Writing
                    title="The Wonder of Science IX-Beta."
                    content="The Wonder of Science 9-Alpha diadakan pada hari Sabtu, 08 Februari 2020 kemarin berlangsung meriah dan menarik banyak perhatian murid-murid dan juga para guru SMP/SMA Sutomo 1 Medan. Dengan mengusung tema yang cukup unik yaitu Mythology, para pengunjung diajak untuk menjelajahi dunia mitologi dari berbagai negara sambil menikmati eksperimen-eksperimen menarik yang disuguhkan oleh ke-9 bidang SSEC. Pengunjung pada pameran kali ini pun cukup banyak yaitu 300 orang!"
                    createdAt="32 Februari"
                    category="News"
                    thumbnail="https://ssec-sutomo1.weebly.com/uploads/1/0/5/2/10526196/1586681380054_orig.jpg"
                    redirect="twos/9-beta"
                />
            </div>
            <Sidebar />
        </>
    );
};

export default Home;
