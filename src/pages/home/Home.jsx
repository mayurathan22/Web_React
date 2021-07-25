import Header from '../../component/header/Header';
import Posts from '../../component/posts/Posts';
import Sidebar from '../../component/sidebar/Sidebar';
import './home.css';

function Home() {
    return (
        <>
        <Header/>
        <div className="home">
            <Posts />
            <Sidebar />        
        </div>
        </>
    )
}

export default Home
