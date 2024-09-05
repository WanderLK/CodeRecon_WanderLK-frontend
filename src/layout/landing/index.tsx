import { Outlet } from 'react-router-dom';
import BottomNavbar from './bottom-navbar';

export default function LandingLayout() {
    return (
        <div className="flex justify-center bg-[#28282B] w-full min-h-screen">
            <div className="relative w-full min-h-screen max-w-[550px] bg-black flex flex-col gap-3">
                <main className="h-full text-white">
                    <Outlet />
                </main>
                <BottomNavbar />
            </div>
        </div>
    );
}
