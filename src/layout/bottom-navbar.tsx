import Button from '@/components/button';
import NavLink from '@/components/nav-link';

export default function Navbar() {
    return (
        <div className="flex justify-between p-3 sticky bottom-4 bg-theme rounded-full mx-4">
            <NavLink to="/">
                <Button
                    isIconOnly
                    variant="light"
                    className="flex flex-col gap-1 !size-16 max-w-full rounded-full text-inherit">
                    <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_460_282)">
                            <path
                                d="M21 10.5C21 17.5 12 23.5 12 23.5C12 23.5 3 17.5 3 10.5C3 8.11305 3.94821 5.82387 5.63604 4.13604C7.32387 2.44821 9.61305 1.5 12 1.5C14.3869 1.5 16.6761 2.44821 18.364 4.13604C20.0518 5.82387 21 8.11305 21 10.5Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M12 13.5C13.6569 13.5 15 12.1569 15 10.5C15 8.84315 13.6569 7.5 12 7.5C10.3431 7.5 9 8.84315 9 10.5C9 12.1569 10.3431 13.5 12 13.5Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_460_282">
                                <rect
                                    width="24"
                                    height="24"
                                    fill="currentColor"
                                    transform="translate(0 0.5)"
                                />
                            </clipPath>
                        </defs>
                    </svg>

                    <span className="text-[10px] text-inherit">Explore</span>
                </Button>
            </NavLink>
            <NavLink to="/hotels">
                <Button
                    isIconOnly
                    variant="light"
                    className="flex flex-col gap-1 !size-16 max-w-full rounded-full text-inherit">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M2 2H22"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M19 2H5C4.44772 2 4 2.44772 4 3V21C4 21.5523 4.44772 22 5 22H19C19.5523 22 20 21.5523 20 21V3C20 2.44772 19.5523 2 19 2Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M10 16H14V22H10V16Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M7.5 6H8.5M7.5 9H8.5M11.5 6H12.5M11.5 9H12.5M15.5 6H16.5M15.5 9H16.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                        <path
                            d="M2 22H22M14 16H15C15.276 16 15.505 15.774 15.452 15.503C15.176 14.083 13.7355 13 12 13C10.265 13 8.824 14.0825 8.548 15.503C8.495 15.774 8.724 16 9 16H10"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                    <span className="text-[10px]">Hotels</span>
                </Button>
            </NavLink>
            <NavLink to="/flights">
                <Button
                    isIconOnly
                    variant="light"
                    className="flex flex-col gap-1 !size-16 max-w-full rounded-full text-inherit">
                    <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M3.5 21.0009H21.5M15.5 11.0859H20.5C21.0304 11.0859 21.5391 11.2967 21.9142 11.6717C22.2893 12.0468 22.5 12.5555 22.5 13.0859C22.5 13.6164 22.2893 14.1251 21.9142 14.5002C21.5391 14.8752 21.0304 15.0859 20.5 15.0859H5.5L2.5 9.08594H5.5L7.5 11.0859H10.5L8.5 4.08594H11.5L15.5 11.0859Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                    <span className="text-[10px]">Flights</span>
                </Button>
            </NavLink>
            <NavLink to="/visa">
                <Button
                    isIconOnly
                    variant="light"
                    className="flex flex-col gap-1 !size-16 max-w-full rounded-full text-inherit">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.70262 20C5.29262 18.673 4.66262 15.567 6.37362 12.486C8.24062 9.126 7.82362 5.784 7.37362 4H18.2966C18.7066 5.327 19.3366 8.433 17.6256 11.514C15.7586 14.874 16.1756 18.216 16.6256 20H5.70262ZM4.62562 11.514C2.47862 15.378 3.35062 19.215 3.82562 20.695C4.09162 21.531 4.86762 22 5.64962 22H17.2296C18.3246 22 18.9836 20.915 18.6976 19.984C18.2856 18.642 17.6706 15.552 19.3736 12.486C21.5206 8.622 20.6486 4.785 20.1736 3.305C19.9076 2.469 19.1316 2 18.3496 2H6.76962C5.67462 2 5.01462 3.085 5.30062 4.016C5.71262 5.358 6.32862 8.448 4.62562 11.514ZM8.99962 9C8.99962 8.73478 9.10498 8.48043 9.29252 8.29289C9.48005 8.10536 9.73441 8 9.99962 8H15.9996C16.2648 8 16.5192 8.10536 16.7067 8.29289C16.8943 8.48043 16.9996 8.73478 16.9996 9C16.9996 9.26522 16.8943 9.51957 16.7067 9.70711C16.5192 9.89464 16.2648 10 15.9996 10H9.99962C9.73441 10 9.48005 9.89464 9.29252 9.70711C9.10498 9.51957 8.99962 9.26522 8.99962 9ZM8.99962 12C8.73441 12 8.48005 12.1054 8.29252 12.2929C8.10498 12.4804 7.99962 12.7348 7.99962 13C7.99962 13.2652 8.10498 13.5196 8.29252 13.7071C8.48005 13.8946 8.73441 14 8.99962 14H11.9996C12.2648 14 12.5192 13.8946 12.7067 13.7071C12.8943 13.5196 12.9996 13.2652 12.9996 13C12.9996 12.7348 12.8943 12.4804 12.7067 12.2929C12.5192 12.1054 12.2648 12 11.9996 12H8.99962Z"
                            fill="currentColor"
                        />
                    </svg>

                    <span className="text-[10px]">Visa</span>
                </Button>
            </NavLink>
        </div>
    );
}
