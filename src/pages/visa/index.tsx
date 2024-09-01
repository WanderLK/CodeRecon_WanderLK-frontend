import { Card, CardBody, Image, Button } from '@nextui-org/react';

export default function App() {

    let style = {
        background:
            'linear-gradient(111deg, rgba(255, 255, 255, 0.36) 1.21%, rgba(196, 196, 196, 0.06) 100%)'
    };

    const FlightIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
            <path d="M3.5 21.0009H21.5M15.5 11.0859H20.5C21.0304 11.0859 21.5391 11.2967 21.9142 11.6717C22.2893 12.0468 22.5 12.5555 22.5 13.0859C22.5 13.6164 22.2893 14.1251 21.9142 14.5002C21.5391 14.8752 21.0304 15.0859 20.5 15.0859H5.5L2.5 9.08594H5.5L7.5 11.0859H10.5L8.5 4.08594H11.5L15.5 11.0859Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    );

    const ExtendVisaIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M1 1H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18 1H4C3.44772 1 3 1.44772 3 2V20C3 20.5523 3.44772 21 4 21H18C18.5523 21 19 20.5523 19 20V2C19 1.44772 18.5523 1 18 1Z" stroke="black" stroke-width="2" stroke-linejoin="round"/>
            <path d="M9 15H13V21H9V15Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.5 5H7.5M6.5 8H7.5M10.5 5H11.5M10.5 8H11.5M14.5 5H15.5M14.5 8H15.5" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M1 21H21M13 15H14C14.276 15 14.505 14.774 14.452 14.503C14.176 13.083 12.7355 12 11 12C9.265 12 7.824 13.0825 7.548 14.503C7.495 14.774 7.724 15 8 15H9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    );

    return (
        <div className="px-0 mt-2">
            <Card
                isBlurred
                className="border-[1.127px] border-white border-opacity-50 rounded-3xl filter backdrop-blur-sm text-orange-100
            max-w-[610px] w-full"
                style={style}
                shadow="sm">
                <CardBody>
                    <div className="grid grid-cols-12 gap-4 items-center justify-center">
                        <div className="relative col-span-5">
                            <Image
                                alt="Visa Icon"
                                className="object-cover px-2"
                                shadow="none"
                                src="/images/visa-icon.png"
                                width="100%"
                            />
                        </div>

                        <div className="flex flex-col col-span-7">
                            <div className="flex justify-between items-start py-3">
                                <div className="flex flex-col gap-0 font-light">
                                    <p className="text-[9px] opacity-70">Country</p>
                                    <h1 className="text-sm">United Kingdom</h1>

                                    <p className="text-[9px] opacity-70 mt-2">Destination</p>
                                    <h1 className="text-sm">Sri Lanka</h1>

                                    <p className="text-[9px] opacity-70 mt-2">Expiry Date</p>
                                    <h1 className="text-sm">Aug 28, 2024</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>

            <div className="flex justify-center w-4/5 mx-auto mt-16 flex-col gap-4">
                <Button
                    className="bg-white rounded-[30px] w-full font-medium text-xl py-7 px-2"
                    startContent={FlightIcon}>
                    Request Visa
                </Button>
                <Button
                    className="bg-white rounded-[30px] w-full font-medium text-xl py-7 px-2"
                    startContent={ExtendVisaIcon}>
                    Extend Visa
                </Button>
                <Button
                    className="bg-white rounded-[30px] w-full font-medium text-xl py-7 px-2"
                    startContent={ExtendVisaIcon}>
                     Visa Request Status
                </Button>
            </div>
        </div>
    );
}
