import { NavLinkProps, NavLink as ReactNavLink } from 'react-router-dom';

export default function NavLink({ children, ...props }: NavLinkProps) {
    return (
        <ReactNavLink
            className={({ isActive }) =>
                'rounded-full transition-all ' + (isActive ? 'text-accent bg-light' : 'text-white')
            }
            {...props}>
            {children}
        </ReactNavLink>
    );
}
