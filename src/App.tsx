import Navbar from '@/layout/navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';

function App() {
    return (
        <div className="flex justify-center bg-[#28282B] w-full overflow-x-hidden min-h-screen">
            <div className="w-full min-h-screen max-w-[550px] bg-black">
                <Navbar />

                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
