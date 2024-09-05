import WhileCard from '@/components/cards/white';
import DashboardRequestNavLink from '@/components/nav-links/dashboard-request';
import { Outlet } from 'react-router-dom';

export default function RequestLayout() {
    return (
        <WhileCard className="flex h-full !p-0">
            <div className="flex flex-col gap-4 h-full py-4 px-6 max-w-[370px] w-full">
                <h1 className="text-3xl mb-4">Application Name</h1>

                <DashboardRequestNavLink verified to="">
                    Country Details
                </DashboardRequestNavLink>
                <DashboardRequestNavLink to="personal">Personal Details</DashboardRequestNavLink>
                <DashboardRequestNavLink to="image">User Image</DashboardRequestNavLink>
                <DashboardRequestNavLink to="passport">Passport Details</DashboardRequestNavLink>
                <DashboardRequestNavLink to="proof">Proof Accommodation</DashboardRequestNavLink>
                <DashboardRequestNavLink to="validity">
                    Valid Permit to Return
                </DashboardRequestNavLink>
                <DashboardRequestNavLink to="interpol">Interpol Detection</DashboardRequestNavLink>
            </div>
            <div className="flex flex-col gap-4 h-full border-l-1 border-l-[#CCCCCC] py-4 px-6">
                <Outlet />
            </div>
        </WhileCard>
    );
}
