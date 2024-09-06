import Button from '@/components/button';
import SearchInput from '@/components/search';
import { IRootState } from '@/redux';
import { userActions } from '@/redux/reducers/user.reducer';
import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';
import { useDispatch, useSelector } from 'react-redux';

interface TopNavbarProps {
    transparent?: boolean;
    hideLogo?: boolean;
    showSearch?: boolean;
    className?: string;
}

export default function TopNavbar({
    transparent,
    hideLogo = false,
    showSearch = false,
    className
}: TopNavbarProps) {
    const dispatch = useDispatch();
    const { user } = useSelector((state: IRootState) => state.user);
    return (
        <div
            className={`flex justify-between gap-5 items-center pt-10 px-6 pb-3 ${
                transparent ? 'bg-transparent' : 'bg-black'
            } ${className ? className : ''}`}>
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
            {!hideLogo && <img className="max-w-32 w-full" src="/images/logo.svg" alt="Logo" />}
            {showSearch && <SearchInput />}
            <Dropdown placement="bottom-end">
                <DropdownTrigger>
                    <Avatar
                        isBordered
                        as="button"
                        className="transition-transform"
                        alt={`${user.firstName} ${user.lastName}`}
                        size="sm"
                        src={user.image}
                    />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                    <DropdownItem
                        onClick={() => dispatch(userActions.remove())}
                        key="logout"
                        color="danger">
                        Log Out
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
}
