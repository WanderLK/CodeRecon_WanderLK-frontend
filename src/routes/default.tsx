import loadable from '@loadable/component';
import { Route, Routes } from 'react-router-dom';
const Login = loadable(() => import('@/pages/login'));

export default function DefaultRoutes() {
    return (
        <Routes>
            <Route path="" element={<Login />} />
        </Routes>
    );
}
