import { Avatar } from '@nextui-org/react';

export default function TopNavbar() {
    return (
        <div className="bg-white w-full sticky top-0 p-3">
            <div className="flex items-center gap-3">
                <Avatar />
                <h3 className="text-xl font-semibold">Jane</h3>
            </div>
        </div>
    );
}
