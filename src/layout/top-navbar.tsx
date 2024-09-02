import Button from '@/components/button';
import { Avatar } from '@nextui-org/react';

interface TopNavbarProps {
    transparent?: boolean;
    showLogo?: boolean;
    showSearch?: boolean;
}

export default function TopNavbar({ transparent, showLogo = true }: TopNavbarProps) {
    return (
        <div
            className={`flex justify-between pt-10 px-6 pb-3 sticky top-0 z-50 ${
                transparent ? 'bg-transparent' : 'bg-black'
            }`}>
            <Button isIconOnly variant="light">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 text-white">
                    <path
                        fillRule="evenodd"
                        d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                        clipRule="evenodd"
                    />
                </svg>
            </Button>
            {showLogo && <img className="max-w-32 w-full" src="/images/logo.svg" alt="Logo" />}
            <Avatar />
        </div>
    );
}
