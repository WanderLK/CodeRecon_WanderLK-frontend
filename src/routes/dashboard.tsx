import DashboardLayout from '@/layout/dashboard';
import RequestLayout from '@/layout/dashboard/request';
import loadable from '@loadable/component';
import { Outlet, Route, Routes } from 'react-router-dom';
const Home = loadable(() => import('@/pages/dashboard/home'));
const Requests = loadable(() => import('@/pages/dashboard/requests'));
const RequestCountry = loadable(() => import('@/pages/dashboard/request/country'));

export default function DashboardRoutes() {
    return (
        <Routes>
            <Route path="/dashboard" element={<DashboardLayout />}>
                <Route path="" element={<Home />} />
                <Route path="requests" element={<Outlet />}>
                    <Route path="" element={<Requests />} />
                    <Route path=":id" element={<RequestLayout />}>
                        <Route path="" element={<RequestCountry />} />
                    </Route>
                </Route>
            </Route>
        </Routes>
    );
}
