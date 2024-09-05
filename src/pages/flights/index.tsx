import Button from '@/components/button';
import FlightCard from '@/components/cards/flight';
import SearchInput from '@/components/search';
import TopNavbar from '@/layout/landing/top-navbar';
import { Accordion, AccordionItem, Divider } from '@nextui-org/react';

const LargeDot = () => (
    <span className="border-2 rounded-full block size-5 border-white max-w-5"></span>
);
const SmallDot = () => (
    <span className="border-2 rounded-full block size-2 mx-1 border-[#ffffff75] max-w-5"></span>
);

export default function Flights() {
    return (
        <div className="flex flex-col gap-8 relative px-5 pb-10">
            <TopNavbar />

            <h1 className="text-3xl font-bold text-center">Find Best Flights</h1>
            <SearchInput />

            {/* body content */}
            <Accordion variant="splitted">
                <AccordionItem
                    key="1"
                    title={<FlightCard />}
                    className="bg-transparent border-1 border-white rounded-3xl p-5"
                    indicator={<span></span>}>
                    <table>
                        <tr>
                            <th className="w-10"></th>
                            <th></th>
                        </tr>
                        <tr>
                            <td>
                                <LargeDot />
                            </td>
                            <td className="flex items-center justify-between">
                                <p className="font-medium text-lg">4.55 AM</p>

                                <Button className="bg-theme rounded-full font-normal text-[#FDECD8]">
                                    Select Flight
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <SmallDot />
                            </td>
                            <td>
                                <p className="text-[#FDECD8] text-sm">London Gatwick Airport</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <SmallDot />
                            </td>
                            <td>
                                <p className="text-[#FDECD8] text-sm">(LGW)</p>
                            </td>
                        </tr>
                        <tr className="h-5">
                            <td colSpan={2}>
                                <SmallDot />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <SmallDot />
                            </td>
                            <td>
                                <p className="pl-4 text-[#ffffff75] text-sm">Travel time: 5hr</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <SmallDot />
                            </td>
                            <td>
                                <p className="pl-4 text-[#BC0000] text-sm">Overnight</p>
                            </td>
                        </tr>
                        <tr className="h-5">
                            <td colSpan={2}>
                                <SmallDot />
                            </td>
                        </tr>
                        <tr className="h-5">
                            <td colSpan={2}>
                                <SmallDot />
                            </td>
                        </tr>
                        <tr className="h-5">
                            <td colSpan={2}>
                                <SmallDot />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <LargeDot />
                            </td>
                            <td>
                                <p className="font-medium text-lg">4.55 AM</p>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <p className="text-[#FDECD8] text-sm">
                                    Hamad International Airport
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <p className="text-[#FDECD8] text-sm">(DOH)</p>
                            </td>
                        </tr>
                        <tr className="h-5">
                            <td colSpan={2}></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="text-[#ffffff75] text-sm pr-10">
                                Qatar Airways QR 659 . Economy . Airbus A330 Plane and crew by Oman
                                Air for Qatar Airways
                            </td>
                        </tr>
                        <tr className="h-5">
                            <td colSpan={2}></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="pl-4">
                                <span className="flex items-center gap-2">
                                    <span>
                                        <svg
                                            width="9"
                                            height="9"
                                            viewBox="0 0 9 9"
                                            fill="none"
                                            className="size-4"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M1.50195 4.5V1.125H0.751953V4.5C0.751953 4.99728 0.949497 5.47419 1.30113 5.82583C1.65276 6.17746 2.12967 6.375 2.62695 6.375H4.87695V5.625H2.62695C2.32858 5.625 2.04244 5.50647 1.83146 5.2955C1.62048 5.08452 1.50195 4.79837 1.50195 4.5ZM8.5632 6.465C8.4207 6.1875 8.07945 6.10125 7.80195 6.22875L7.3932 6.41625L6.11445 3.79875C6.05243 3.67237 5.95642 3.56578 5.83719 3.49093C5.71796 3.41608 5.58023 3.37593 5.43945 3.375H4.12695V1.125H1.87695V4.125C1.87695 4.42337 1.99548 4.70952 2.20646 4.9205C2.41744 5.13147 2.70358 5.25 3.00195 5.25H5.62695L6.9057 7.875L8.3007 7.2375C8.58945 7.1025 8.7132 6.75 8.5632 6.465Z"
                                                fill="white"
                                                fill-opacity="0.45"
                                            />
                                        </svg>
                                    </span>
                                    <span className="text-sm text-[#ffffff75]">
                                        Above average legroom (34 in)
                                    </span>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="pl-4">
                                <span className="flex items-center gap-2">
                                    <span>
                                        <svg
                                            width="10"
                                            height="10"
                                            viewBox="0 0 10 10"
                                            fill="none"
                                            className="size-4"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6.67083 2.91667L6.66667 1.25H5.83333V2.91667H4.16667V1.25H3.33333V2.91667H3.32917C2.91667 2.9125 2.5 3.32917 2.5 3.74583V6.03333L3.95833 7.5V8.75H6.04167V7.5L7.5 6.0375V3.74583C7.5 3.32917 7.08333 2.9125 6.67083 2.91667Z"
                                                fill="white"
                                                fill-opacity="0.45"
                                            />
                                        </svg>
                                    </span>
                                    <span className="text-sm text-[#ffffff75]">
                                        In-seat power & USB outlets
                                    </span>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="pl-4">
                                <span className="flex items-center gap-2">
                                    <span>
                                        <svg
                                            width="8"
                                            height="8"
                                            viewBox="0 0 8 8"
                                            fill="none"
                                            className="size-4"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M1.33464 1C1.15782 1 0.988255 1.07024 0.863231 1.19526C0.738207 1.32029 0.667969 1.48986 0.667969 1.66667V6.33333C0.667969 6.51014 0.738207 6.67971 0.863231 6.80474C0.988255 6.92976 1.15782 7 1.33464 7H6.66797C6.84478 7 7.01435 6.92976 7.13937 6.80474C7.2644 6.67971 7.33463 6.51014 7.33463 6.33333V1.66667C7.33463 1.48986 7.2644 1.32029 7.13937 1.19526C7.01435 1.07024 6.84478 1 6.66797 1H1.33464ZM2.8763 2.87667C2.8837 2.81294 2.90589 2.75182 2.9411 2.69819C2.97631 2.64456 3.02357 2.59991 3.0791 2.56778C3.13464 2.53566 3.19691 2.51696 3.26095 2.51318C3.325 2.5094 3.38904 2.52064 3.44797 2.546C3.61597 2.618 3.97064 2.78 4.41997 3.03933C4.73575 3.21981 5.04072 3.4186 5.3333 3.63467C5.38474 3.67294 5.42652 3.72272 5.45531 3.78002C5.48409 3.83731 5.49908 3.90055 5.49908 3.96467C5.49908 4.02879 5.48409 4.09202 5.45531 4.14932C5.42652 4.20661 5.38474 4.25639 5.3333 4.29467C5.0407 4.51051 4.73574 4.70907 4.41997 4.88933C4.10587 5.0728 3.78132 5.23775 3.44797 5.38333C3.38905 5.40877 3.32499 5.42006 3.26092 5.41632C3.19685 5.41257 3.13454 5.39388 3.07899 5.36174C3.02343 5.32961 2.97617 5.28492 2.94098 5.23125C2.90578 5.17759 2.88363 5.11643 2.8763 5.05267C2.83631 4.69139 2.81672 4.32815 2.81764 3.96467C2.81764 3.44767 2.85497 3.05833 2.8763 2.87667Z"
                                                fill="white"
                                                fill-opacity="0.45"
                                            />
                                        </svg>
                                    </span>
                                    <span className="text-sm text-[#ffffff75]">
                                        On-demand video
                                    </span>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="pl-4">
                                <span className="flex items-center gap-2">
                                    <span>
                                        <svg
                                            width="10"
                                            height="10"
                                            viewBox="0 0 10 10"
                                            fill="none"
                                            className="size-4"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_104_1557)">
                                                <path
                                                    d="M7.45898 7.24648C7.35065 6.91315 7.03815 6.66732 6.66732 6.66732H6.25065V5.41732C6.25065 5.30681 6.20675 5.20083 6.12861 5.12269C6.05047 5.04455 5.94449 5.00065 5.83398 5.00065H3.33398V4.16732H4.16732C4.27782 4.16732 4.38381 4.12342 4.46195 4.04528C4.54009 3.96714 4.58398 3.86116 4.58398 3.75065V2.91732H5.41732C5.63833 2.91732 5.85029 2.82952 6.00657 2.67324C6.16285 2.51696 6.25065 2.305 6.25065 2.08398V1.91315C6.74918 2.11414 7.19159 2.43293 7.54 2.84225C7.8884 3.25157 8.13244 3.73921 8.25121 4.26345C8.36998 4.78768 8.35995 5.33289 8.22198 5.8524C8.08401 6.37191 7.82221 6.85026 7.45898 7.24648ZM4.58398 8.30482C2.93815 8.10065 1.66732 6.70065 1.66732 5.00065C1.66732 4.74232 1.70065 4.49232 1.75482 4.25482L3.75065 6.25065V6.66732C3.75065 6.88833 3.83845 7.10029 3.99473 7.25657C4.15101 7.41285 4.36297 7.50065 4.58398 7.50065M5.00065 0.833984C4.45348 0.833984 3.91166 0.941758 3.40614 1.15115C2.90061 1.36055 2.44128 1.66746 2.05437 2.05437C1.27297 2.83577 0.833984 3.89558 0.833984 5.00065C0.833984 6.10572 1.27297 7.16553 2.05437 7.94693C2.44128 8.33384 2.90061 8.64075 3.40614 8.85015C3.91166 9.05954 4.45348 9.16732 5.00065 9.16732C6.10572 9.16732 7.16553 8.72833 7.94693 7.94693C8.72833 7.16553 9.16732 6.10572 9.16732 5.00065C9.16732 4.45348 9.05954 3.91166 8.85015 3.40614C8.64075 2.90061 8.33384 2.44128 7.94693 2.05437C7.56002 1.66746 7.10069 1.36055 6.59517 1.15115C6.08964 0.941758 5.54783 0.833984 5.00065 0.833984Z"
                                                    fill="white"
                                                    fill-opacity="0.45"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_104_1557">
                                                    <rect width="10" height="10" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                    <span className="text-sm text-[#ffffff75]">
                                        Emissions estimate: 299 kg CO2e
                                    </span>
                                </span>
                            </td>
                        </tr>
                    </table>

                    <Divider className="bg-[#FFFFFF73] rounded-full h-0.5 mt-10" />
                    <span className="text-center w-full block py-7">
                        45 min layover . Doha (DOH)
                    </span>
                    <Divider className="bg-[#FFFFFF73] rounded-full h-0.5 mb-10" />

                    <table>
                        <tr>
                            <th className="w-10"></th>
                            <th></th>
                        </tr>
                        <tr>
                            <td>
                                <LargeDot />
                            </td>
                            <td className="flex items-center justify-between">
                                <p className="font-medium text-lg">8.10 AM</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <SmallDot />
                            </td>
                            <td>
                                <p className="text-[#FDECD8] text-sm">
                                    Hamad International Airport
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <SmallDot />
                            </td>
                            <td>
                                <p className="text-[#FDECD8] text-sm">(DOH)</p>
                            </td>
                        </tr>
                        <tr className="h-5">
                            <td colSpan={2}>
                                <SmallDot />
                            </td>
                        </tr>
                        <tr className="h-5">
                            <td colSpan={2}>
                                <SmallDot />
                            </td>
                        </tr>
                        <tr className="h-5">
                            <td colSpan={2}>
                                <SmallDot />
                            </td>
                        </tr>
                        <tr className="h-5">
                            <td colSpan={2}>
                                <SmallDot />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <LargeDot />
                            </td>
                            <td>
                                <p className="font-medium text-lg">1.30 PM</p>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <p className="text-[#FDECD8] text-sm">
                                    Colombo Bandaranaike International Airport
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <p className="text-[#FDECD8] text-sm">(CMB)</p>
                            </td>
                        </tr>
                        <tr className="h-5">
                            <td colSpan={2}></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="text-[#ffffff75] text-sm pr-10">
                                Qatar Airways QR 659 . Economy . Airbus A330 Plane and crew by Oman
                                Air for Qatar Airways
                            </td>
                        </tr>
                        <tr className="h-5">
                            <td colSpan={2}></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="pl-4">
                                <span className="flex items-center gap-2">
                                    <span>
                                        <svg
                                            width="9"
                                            height="9"
                                            viewBox="0 0 9 9"
                                            fill="none"
                                            className="size-4"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M1.50195 4.5V1.125H0.751953V4.5C0.751953 4.99728 0.949497 5.47419 1.30113 5.82583C1.65276 6.17746 2.12967 6.375 2.62695 6.375H4.87695V5.625H2.62695C2.32858 5.625 2.04244 5.50647 1.83146 5.2955C1.62048 5.08452 1.50195 4.79837 1.50195 4.5ZM8.5632 6.465C8.4207 6.1875 8.07945 6.10125 7.80195 6.22875L7.3932 6.41625L6.11445 3.79875C6.05243 3.67237 5.95642 3.56578 5.83719 3.49093C5.71796 3.41608 5.58023 3.37593 5.43945 3.375H4.12695V1.125H1.87695V4.125C1.87695 4.42337 1.99548 4.70952 2.20646 4.9205C2.41744 5.13147 2.70358 5.25 3.00195 5.25H5.62695L6.9057 7.875L8.3007 7.2375C8.58945 7.1025 8.7132 6.75 8.5632 6.465Z"
                                                fill="white"
                                                fill-opacity="0.45"
                                            />
                                        </svg>
                                    </span>
                                    <span className="text-sm text-[#ffffff75]">
                                        Above average legroom (34 in)
                                    </span>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="pl-4">
                                <span className="flex items-center gap-2">
                                    <span>
                                        <svg
                                            width="10"
                                            height="10"
                                            viewBox="0 0 10 10"
                                            fill="none"
                                            className="size-4"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6.67083 2.91667L6.66667 1.25H5.83333V2.91667H4.16667V1.25H3.33333V2.91667H3.32917C2.91667 2.9125 2.5 3.32917 2.5 3.74583V6.03333L3.95833 7.5V8.75H6.04167V7.5L7.5 6.0375V3.74583C7.5 3.32917 7.08333 2.9125 6.67083 2.91667Z"
                                                fill="white"
                                                fill-opacity="0.45"
                                            />
                                        </svg>
                                    </span>
                                    <span className="text-sm text-[#ffffff75]">
                                        In-seat power & USB outlets
                                    </span>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="pl-4">
                                <span className="flex items-center gap-2">
                                    <span>
                                        <svg
                                            width="8"
                                            height="8"
                                            viewBox="0 0 8 8"
                                            fill="none"
                                            className="size-4"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M1.33464 1C1.15782 1 0.988255 1.07024 0.863231 1.19526C0.738207 1.32029 0.667969 1.48986 0.667969 1.66667V6.33333C0.667969 6.51014 0.738207 6.67971 0.863231 6.80474C0.988255 6.92976 1.15782 7 1.33464 7H6.66797C6.84478 7 7.01435 6.92976 7.13937 6.80474C7.2644 6.67971 7.33463 6.51014 7.33463 6.33333V1.66667C7.33463 1.48986 7.2644 1.32029 7.13937 1.19526C7.01435 1.07024 6.84478 1 6.66797 1H1.33464ZM2.8763 2.87667C2.8837 2.81294 2.90589 2.75182 2.9411 2.69819C2.97631 2.64456 3.02357 2.59991 3.0791 2.56778C3.13464 2.53566 3.19691 2.51696 3.26095 2.51318C3.325 2.5094 3.38904 2.52064 3.44797 2.546C3.61597 2.618 3.97064 2.78 4.41997 3.03933C4.73575 3.21981 5.04072 3.4186 5.3333 3.63467C5.38474 3.67294 5.42652 3.72272 5.45531 3.78002C5.48409 3.83731 5.49908 3.90055 5.49908 3.96467C5.49908 4.02879 5.48409 4.09202 5.45531 4.14932C5.42652 4.20661 5.38474 4.25639 5.3333 4.29467C5.0407 4.51051 4.73574 4.70907 4.41997 4.88933C4.10587 5.0728 3.78132 5.23775 3.44797 5.38333C3.38905 5.40877 3.32499 5.42006 3.26092 5.41632C3.19685 5.41257 3.13454 5.39388 3.07899 5.36174C3.02343 5.32961 2.97617 5.28492 2.94098 5.23125C2.90578 5.17759 2.88363 5.11643 2.8763 5.05267C2.83631 4.69139 2.81672 4.32815 2.81764 3.96467C2.81764 3.44767 2.85497 3.05833 2.8763 2.87667Z"
                                                fill="white"
                                                fill-opacity="0.45"
                                            />
                                        </svg>
                                    </span>
                                    <span className="text-sm text-[#ffffff75]">
                                        On-demand video
                                    </span>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="pl-4">
                                <span className="flex items-center gap-2">
                                    <span>
                                        <svg
                                            width="10"
                                            height="10"
                                            viewBox="0 0 10 10"
                                            fill="none"
                                            className="size-4"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_104_1557)">
                                                <path
                                                    d="M7.45898 7.24648C7.35065 6.91315 7.03815 6.66732 6.66732 6.66732H6.25065V5.41732C6.25065 5.30681 6.20675 5.20083 6.12861 5.12269C6.05047 5.04455 5.94449 5.00065 5.83398 5.00065H3.33398V4.16732H4.16732C4.27782 4.16732 4.38381 4.12342 4.46195 4.04528C4.54009 3.96714 4.58398 3.86116 4.58398 3.75065V2.91732H5.41732C5.63833 2.91732 5.85029 2.82952 6.00657 2.67324C6.16285 2.51696 6.25065 2.305 6.25065 2.08398V1.91315C6.74918 2.11414 7.19159 2.43293 7.54 2.84225C7.8884 3.25157 8.13244 3.73921 8.25121 4.26345C8.36998 4.78768 8.35995 5.33289 8.22198 5.8524C8.08401 6.37191 7.82221 6.85026 7.45898 7.24648ZM4.58398 8.30482C2.93815 8.10065 1.66732 6.70065 1.66732 5.00065C1.66732 4.74232 1.70065 4.49232 1.75482 4.25482L3.75065 6.25065V6.66732C3.75065 6.88833 3.83845 7.10029 3.99473 7.25657C4.15101 7.41285 4.36297 7.50065 4.58398 7.50065M5.00065 0.833984C4.45348 0.833984 3.91166 0.941758 3.40614 1.15115C2.90061 1.36055 2.44128 1.66746 2.05437 2.05437C1.27297 2.83577 0.833984 3.89558 0.833984 5.00065C0.833984 6.10572 1.27297 7.16553 2.05437 7.94693C2.44128 8.33384 2.90061 8.64075 3.40614 8.85015C3.91166 9.05954 4.45348 9.16732 5.00065 9.16732C6.10572 9.16732 7.16553 8.72833 7.94693 7.94693C8.72833 7.16553 9.16732 6.10572 9.16732 5.00065C9.16732 4.45348 9.05954 3.91166 8.85015 3.40614C8.64075 2.90061 8.33384 2.44128 7.94693 2.05437C7.56002 1.66746 7.10069 1.36055 6.59517 1.15115C6.08964 0.941758 5.54783 0.833984 5.00065 0.833984Z"
                                                    fill="white"
                                                    fill-opacity="0.45"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_104_1557">
                                                    <rect width="10" height="10" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                    <span className="text-sm text-[#ffffff75]">
                                        Emissions estimate: 299 kg CO2e
                                    </span>
                                </span>
                            </td>
                        </tr>
                    </table>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
