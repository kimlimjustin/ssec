import type { NextPage } from 'next';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Writing from '../components/Writing/Writing';

const Home: NextPage = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <div className="container">
                <Writing
                    title="The Wonder of Science IX-Alpha."
                    content="Laborum excepteur qui labore in non occaecat ipsum. Excepteur reprehenderit aute ea anim reprehenderit fugiat id culpa. Est nostrud tempor excepteur non velit. Fugiat voluptate mollit ea Lorem ut eu magna ipsum aute id labore adipisicing. Ea consectetur enim ullamco ad aute sit ipsum minim dolore. Aliquip consectetur ad ipsum ad ex sint dolore elit incididunt Lorem eiusmod."
                    createdAt="32 Februari"
                    category="News"
                    thumbnail="https://ssec-sutomo1.weebly.com/uploads/1/0/5/2/10526196/1586681380054_orig.jpg"
                />
            </div>
        </>
    );
};

export default Home;
