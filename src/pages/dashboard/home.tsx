import WhileCard from '@/components/cards/white';

export default function Home() {
    return (
        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-4 w-full h-full">
            <WhileCard className="w-full min-h-full">
                <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-xl">Company Facts</h3>
                    <p className="text-gray-500">Employees</p>
                </div>
            </WhileCard>
            <WhileCard className="w-full min-h-full">
                <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-xl">Company Facts</h3>
                    <p className="text-gray-500">Employees</p>
                </div>
            </WhileCard>
            <WhileCard className="w-full min-h-full">
                <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-xl">Company Facts</h3>
                    <p className="text-gray-500">Employees</p>
                </div>
            </WhileCard>
            <WhileCard className="w-full min-h-full">
                <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-xl">Company Facts</h3>
                    <p className="text-gray-500">Employees</p>
                </div>
            </WhileCard>
        </div>
    );
}
