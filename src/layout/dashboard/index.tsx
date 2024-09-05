import { Outlet } from 'react-router-dom';
import TopNavbar from './top-navbar';
import SideNavbar from './side-navbar';

export default function DashboardLayout() {
    return (
        <div className="bg-[#F7F7F7] w-full min-h-screen light">
            <TopNavbar />

            <main className="flex w-full h-full">
                <SideNavbar />

                <div className="my-3 mr-4 w-full">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}
