export default function FlightCard() {
    return (
        <div className="text-white">
            <div className="bg-theme rounded-3xl">
                <div className="p-3">
                    <span className="text-gray-400">Take Off</span>
                    <p>London, England</p>
                </div>
                <div className="relative flex items-center">
                    <div className="bg-light pl-3 py-1 pr-2 rounded-r-full">
                        <svg
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14.6673 9.16667H18.334C18.8202 9.16667 19.2865 9.35982 19.6303 9.70364C19.9742 10.0475 20.1673 10.5138 20.1673 11C20.1673 11.4862 19.9742 11.9525 19.6303 12.2964C19.2865 12.6402 18.8202 12.8333 18.334 12.8333H14.6673L11.0007 19.25H8.25065L10.084 12.8333H6.41732L4.58398 14.6667H1.83398L3.66732 11L1.83398 7.33333H4.58398L6.41732 9.16667H10.084L8.25065 2.75H11.0007L14.6673 9.16667Z"
                                stroke="white"
                                stroke-width="1.83333"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>

                    <div className="w-full flex flex-col items-end">
                        <span className="block bg-light w-max h-max rounded-t-md px-1 pt-1 mr-2">
                            <svg
                                width="19"
                                height="9"
                                viewBox="0 0 19 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_104_696)">
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M10.0627 1.3823L14.5412 5.62505L13.4218 6.68555L9.50301 2.97305L5.58426 6.68555L4.46484 5.62505L8.9433 1.3823C9.09176 1.24169 9.29309 1.16271 9.50301 1.16271C9.71293 1.16271 9.91426 1.24169 10.0627 1.3823Z"
                                        fill="white"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_104_696">
                                        <rect
                                            width="9"
                                            height="19"
                                            fill="white"
                                            transform="matrix(0 -1 1 0 0 9)"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </span>

                        <span className="block w-full h-[3px] bg-black"></span>

                        <span className="block bg-light w-max h-max rounded-b-md px-1 pb-1 mr-2">
                            <svg
                                width="19"
                                height="9"
                                viewBox="0 0 19 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_104_698)">
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M8.93728 7.6177L4.45882 3.37495L5.57824 2.31445L9.49699 6.02695L13.4157 2.31445L14.5352 3.37495L10.0567 7.6177C9.90824 7.75831 9.70691 7.83729 9.49699 7.83729C9.28707 7.83729 9.08574 7.75831 8.93728 7.6177Z"
                                        fill="white"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_104_698">
                                        <rect
                                            width="9"
                                            height="19"
                                            fill="white"
                                            transform="matrix(0 1 -1 0 19 0)"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </span>
                    </div>
                </div>
                <div className="p-3">
                    <span className="text-gray-400">Landing</span>
                    <p>Colombo, Sri Lanka</p>
                </div>
            </div>
        </div>
    );
}
