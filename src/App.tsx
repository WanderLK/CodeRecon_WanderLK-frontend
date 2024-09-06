import { IRootState } from '@/redux';
import { useSelector } from 'react-redux';
import { Fragment } from 'react/jsx-runtime';
import NotifyContainer from './components/notify';
import DashboardRoutes from './routes/dashboard';
import DefaultRoutes from './routes/default';
import HomeRoutes from './routes/home';

function App() {
    const { logged } = useSelector((state: IRootState) => state.user);

    return logged ? (
        <Fragment>
            <HomeRoutes />
            <DashboardRoutes />
            <NotifyContainer />
        </Fragment>
    ) : (
        <DefaultRoutes />
    );
}

export default App;
