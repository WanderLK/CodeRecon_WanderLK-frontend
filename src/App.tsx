import TopNavbar from '@/layout/top-navbar';
import BottomNavbar from '@/layout/bottom-navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Hotels from './pages/hotels';

function App() {
    return (
        <div className="flex justify-center bg-[#28282B] w-full min-h-screen">
            <div className="w-full min-h-screen max-w-[550px] bg-black flex flex-col gap-3">
                <TopNavbar />

                <main className="h-full text-white px-5">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/hotels" element={<Hotels />} />
                    </Routes>
                </main>

                <BottomNavbar />
            </div>
        </div>
    );
}

export default App;
