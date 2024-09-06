import reduxStore from '@/redux';
import { Provider } from 'react-redux';
import NotifyContainer from './components/notify';
import DashboardRoutes from './routes/dashboard';
import HomeRoutes from './routes/home';

function App() {
    return (
        <Provider store={reduxStore}>
            <HomeRoutes />
            <DashboardRoutes />
            <NotifyContainer />
        </Provider>
    );
}

export default App;
