import BottomNavbar from '@/layout/bottom-navbar';
import loadable from '@loadable/component';
import { Outlet, Route, Routes } from 'react-router-dom';
const Home = loadable(() => import('./pages/home'));
const Hotels = loadable(() => import('./pages/hotels'));
const Hotel = loadable(() => import('./pages/hotels/hotel'));

function App() {
    return (
        <div className="flex justify-center bg-[#28282B] w-full min-h-screen">
            <div className="relative w-full min-h-screen max-w-[550px] bg-black flex flex-col gap-3">
                <main className="h-full text-white">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="hotels" element={<Outlet />}>
                            <Route path="" element={<Hotels />} />
                            <Route path=":id" element={<Hotel />} />
                        </Route>
                    </Routes>
                </main>

                <BottomNavbar />
            </div>
        </div>
    );
}

export default App;
