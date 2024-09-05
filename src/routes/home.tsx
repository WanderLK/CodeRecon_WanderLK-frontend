import { Outlet, Route, Routes } from 'react-router-dom';
import LandingLayout from '@/layout/landing';
import loadable from '@loadable/component';
const Home = loadable(() => import('@/pages/home'));
const Hotels = loadable(() => import('@/pages/hotels'));
const Hotel = loadable(() => import('@/pages/hotels/hotel'));
const Visa = loadable(() => import('@/pages/visa/index'));
const Flights = loadable(() => import('@/pages/flights/index'));

export default function HomeRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LandingLayout />}>
                <Route path="" element={<Home />} />
                <Route path="hotels" element={<Outlet />}>
                    <Route path="" element={<Hotels />} />
                    <Route path=":id" element={<Hotel />} />
                </Route>
                <Route path="flights" element={<Outlet />}>
                    <Route path="" element={<Flights />} />
                </Route>
                <Route path="/visa" element={<Visa />} />
            </Route>
        </Routes>
    );
}
