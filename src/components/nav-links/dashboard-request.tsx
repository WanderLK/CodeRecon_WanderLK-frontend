import { NavLinkProps, NavLink as ReactNavLink } from 'react-router-dom';
import Button from '../button';
import { ReactNode } from 'react';

interface Props extends Omit<NavLinkProps, 'children'> {
    children: ReactNode;
    verified?: boolean;
}

export default function DashboardRequestNavLink({ children, verified, ...props }: Props) {
    return (
        <ReactNavLink
            className={({ isActive }) =>
                '!rounded-full transition-all py-1 ' +
                (isActive ? 'text-dark-accent bg-[#F4F2F2] group is-active' : 'text-black')
            }
            {...props}>
            <Button
                data-pressed={false}
                startContent={
                    <span className={`transition-all ${verified ? 'opacity-100' : 'opacity-0'}`}>
                        <svg
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11.0026 1.83398C5.9481 1.83398 1.83594 5.94615 1.83594 11.0007C1.83594 16.0552 5.9481 20.1673 11.0026 20.1673C16.0571 20.1673 20.1693 16.0552 20.1693 11.0007C20.1693 5.94615 16.0571 1.83398 11.0026 1.83398Z"
                                fill="#008A07"
                            />
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M15.7112 6.40506C16.27 6.84985 16.3624 7.6634 15.9176 8.22215L11.1424 14.2208C10.7103 14.7635 9.92698 14.8687 9.36711 14.459L6.61943 12.4488C6.04304 12.027 5.91765 11.2179 6.33935 10.6416C6.76105 10.0652 7.57016 9.93977 8.14655 10.3615L9.89221 11.6387L13.8941 6.6114C14.3389 6.05265 15.1525 5.96026 15.7112 6.40506Z"
                                fill="white"
                            />
                        </svg>
                    </span>
                }
                endContent={
                    <span className="group-[.is-active]:text-dark-accent text-black transition-all">
                        <svg
                            width="9"
                            height="16"
                            viewBox="0 0 9 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1.26818 0.226563L0 1.49474L6.50455 7.99929L0 14.5038L1.26818 15.772L9 7.99929L1.26818 0.226563Z"
                                fill="currentColor"
                            />
                        </svg>
                    </span>
                }
                className="font-semibold bg-transparent text-inherit max-w-full w-full justify-between px-3 pr-5 gap-4">
                <span className="w-full text-left text-lg font-medium">{children}</span>
            </Button>
        </ReactNavLink>
    );
}
