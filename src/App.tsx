import { Fragment } from 'react/jsx-runtime';
import DashboardRoutes from './routes/dashboard';
import HomeRoutes from './routes/home';

function App() {
    return (
        <Fragment>
            <HomeRoutes />
            <DashboardRoutes />
        </Fragment>
    );
}

export default App;
