import DashboardLayout from '@/layout/dashboard';
import RequestLayout from '@/layout/dashboard/request';
import RequestValidity from '@/pages/dashboard/request/validity';
import RequestPassport from '@/pages/dashboard/request/passport';
import RequestPersonal from '@/pages/dashboard/request/persoanl';
import RequestProof from '@/pages/dashboard/request/proof';
import RequestUserImage from '@/pages/dashboard/request/user-image';
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
                        <Route path="personal" element={<RequestPersonal />} />
                        <Route path="image" element={<RequestUserImage />} />
                        <Route path="passport" element={<RequestPassport />} />
                        <Route path="proof" element={<RequestProof />} />
                        <Route path="validity" element={<RequestValidity />} />
                    </Route>
                </Route>
            </Route>
        </Routes>
    );
}
