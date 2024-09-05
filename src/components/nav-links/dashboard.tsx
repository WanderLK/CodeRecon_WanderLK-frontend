import { NavLinkProps, NavLink as ReactNavLink } from 'react-router-dom';
import Button from '../button';
import { ReactNode } from 'react';

interface Props extends Omit<NavLinkProps, 'children'> {
    children: ReactNode;
    startContent: ReactNode;
}

export default function NavLink({ children, startContent, ...props }: Props) {
    return (
        <ReactNavLink
            className={({ isActive }) =>
                '!rounded-lg transition-all ' +
                (isActive ? 'text-dark-accent bg-light-accent group is-active' : 'text-black')
            }
            {...props}>
            <Button
                startContent={
                    <span className="group-[.is-active]:text-dark-accent text-[#8E8E93] transition-all">
                        {startContent}
                    </span>
                }
                className="font-semibold bg-transparent text-inherit max-md:!min-w-max max-md:p-1 transition-all max-w-full w-full justify-start">
                {children}
            </Button>
        </ReactNavLink>
    );
}
