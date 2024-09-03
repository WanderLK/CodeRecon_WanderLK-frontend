import Button from '@/components/button';
import HotelCard from '@/components/cards/hotel';
import Rating from '@/components/rating';
import TopNavbar from '@/layout/top-navbar';
import {
    Avatar,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Divider,
    Tab,
    Tabs
} from '@nextui-org/react';
import { config } from 'react-spring';
// @ts-ignore
import { useSpringCarousel } from 'react-spring-carousel';

export default function Hotel() {
    const { carouselFragment: similarCarouselFragment } = useSpringCarousel({
        itemsPerSlide: 1,
        startEndGutter: 80,
        gutter: 14,
        withThumbs: false,
        springConfig: config.wobbly,
        items: Array.from({ length: 5 }).map((_, i: number) => {
            return {
                id: i,
                renderItem: <HotelCard to={`/hotels/${i}`} />
            };
        })
    });

    return (
        <div className="flex flex-col gap-3 relative">
            <TopNavbar transparent hideLogo className="absolute z-10 w-full" />

            {/* top content */}
            <div className="relative w-full">
                <img
                    src="https://picsum.photos/400/550"
                    alt="Hotel"
                    className="w-full top-0 h-[50vh] object-fill"
                />

                <div
                    className="text-white absolute top-0 left-0 px-5 pt-3 pb-5 text-left h-full flex flex-col justify-end gap-1 w-full"
                    style={{
                        background:
                            'linear-gradient(180deg, rgba(0,0,0,0.1) 10%, rgba(0,0,0,0.4351514287355567) 80%)'
                    }}>
                    <h1 className="text-inherit font-bold text-3xl mb-2 select-none">
                        Shangri-La Colombo
                    </h1>
                    <small>Colombo , Sri Lanka</small>
                    <div className="flex items-center gap-3">
                        <Rating value={3.4} readOnly className="max-w-20" />
                        <span className="text-xl">5.0</span>
                        <span className="text-sm">1567 reviews</span>
                    </div>
                </div>
            </div>

            {/* body content */}
            <div
                className="p-5 flex flex-col gap-8 relative z-[70] rounded-ss-lg rounded-se-lg"
                style={{
                    background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 5%, rgba(0,0,0,1) 36%)'
                }}>
                <div className="flex gap-3 items-center overflow-x-auto scrollbar-hide">
                    <Button
                        startContent={
                            <span>
                                <svg
                                    width="16"
                                    height="17"
                                    viewBox="0 0 16 17"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.66406 11.9719V13.5006C2.66406 13.589 2.69918 13.6737 2.76169 13.7363C2.82421 13.7988 2.90899 13.8339 2.9974 13.8339H4.5294C4.61763 13.8339 4.70226 13.7989 4.76473 13.7366L11.0634 7.43788L9.0634 5.43788L2.76206 11.7366C2.69951 11.7989 2.66426 11.8836 2.66406 11.9719ZM9.88873 4.61188L11.8887 6.61188L12.8621 5.63855C12.987 5.51353 13.0573 5.34399 13.0573 5.16722C13.0573 4.99044 12.987 4.8209 12.8621 4.69588L11.8054 3.63855C11.6804 3.51357 11.5108 3.44336 11.3341 3.44336C11.1573 3.44336 10.9877 3.51357 10.8627 3.63855L9.88873 4.61188Z"
                                        fill="#FDECD8"
                                    />
                                </svg>
                            </span>
                        }
                        className="flex items-center space-x-2 bg-theme rounded-full">
                        Reviews
                    </Button>
                    <Button
                        startContent={
                            <span>
                                {' '}
                                <svg
                                    width="14"
                                    height="15"
                                    viewBox="0 0 14 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1.75 1.66602H2.91667V13.3327H1.75V1.66602ZM11.0833 1.66602H3.5V13.3327H11.0833C11.7267 13.3327 12.25 12.8094 12.25 12.166V2.83268C12.25 2.18927 11.7267 1.66602 11.0833 1.66602ZM10.5 7.49935H5.25V6.33268H10.5V7.49935ZM10.5 5.16602H5.25V3.99935H10.5V5.16602Z"
                                        fill="#FDECD8"
                                    />
                                </svg>
                            </span>
                        }
                        className="flex items-center space-x-2 bg-theme rounded-full">
                        Menu
                    </Button>
                    <Button
                        startContent={
                            <span>
                                <svg
                                    width="13"
                                    height="14"
                                    viewBox="0 0 13 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.25861 9.22627L9.16861 8.31627C9.29118 8.19522 9.44625 8.11236 9.615 8.07775C9.78375 8.04313 9.95892 8.05825 10.1192 8.12127L11.2283 8.56408C11.3903 8.62984 11.5292 8.74209 11.6276 8.88668C11.7259 9.03127 11.7792 9.20173 11.7808 9.37658V11.4078C11.7799 11.5268 11.7549 11.6443 11.7073 11.7533C11.6597 11.8623 11.5906 11.9606 11.5041 12.0422C11.4175 12.1238 11.3154 12.1871 11.2038 12.2281C11.0921 12.2692 10.9733 12.2873 10.8546 12.2813C3.08299 11.7978 1.51486 5.21658 1.2183 2.69783C1.20453 2.57414 1.21711 2.44894 1.25521 2.33046C1.2933 2.21198 1.35605 2.10291 1.43933 2.01043C1.5226 1.91794 1.62452 1.84414 1.73836 1.79387C1.85221 1.7436 1.97541 1.718 2.09986 1.71877H4.06205C4.23715 1.71928 4.40809 1.77218 4.55288 1.87063C4.69767 1.96909 4.8097 2.10862 4.87455 2.27127L5.31736 3.38033C5.38247 3.54001 5.39908 3.71534 5.36512 3.88441C5.33116 4.05348 5.24814 4.20879 5.12643 4.33095L4.21643 5.24095C4.21643 5.24095 4.74049 8.78752 8.25861 9.22627Z"
                                        fill="#FDECD8"
                                    />
                                </svg>
                            </span>
                        }
                        className="flex items-center space-x-2 bg-theme rounded-full">
                        Contact
                    </Button>
                    <Button
                        startContent={
                            <span>
                                {' '}
                                <svg
                                    width="15"
                                    height="16"
                                    viewBox="0 0 15 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12.5 11.75C13.1875 11.75 13.75 11.1875 13.75 10.5V4.25C13.75 3.5625 13.1875 3 12.5 3H2.5C1.8125 3 1.25 3.5625 1.25 4.25V10.5C1.25 11.1875 1.8125 11.75 2.5 11.75H0V13H15V11.75H12.5ZM2.5 4.25H12.5V10.5H2.5V4.25Z"
                                        fill="#FDECD8"
                                    />
                                </svg>
                            </span>
                        }
                        className="flex items-center space-x-2 bg-theme rounded-full">
                        Website
                    </Button>
                </div>

                {/* ratings */}
                <Card className="flex flex-col gap-3 w-full bg-black text-white border-theme border-1 rounded-lg">
                    <CardHeader className="flex flex-col items-start">
                        <h1 className="text-2xl font-semibold">Ratings and reviews</h1>
                        <small>#1 of 690 Restaurants in Colombo</small>
                    </CardHeader>
                    <Divider className="bg-theme" />
                    <CardBody>
                        <h1 className="mb-4 font-medium">RATINGS</h1>

                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-3 justify-between px-4">
                                <div className="flex items-center gap-4">
                                    <svg
                                        width="15"
                                        height="16"
                                        viewBox="0 0 15 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M3.31688 1.75C3.21343 1.74984 3.11337 1.78687 3.03496 1.85433C2.95654 1.92179 2.90498 2.01519 2.88969 2.1175C2.84594 2.41375 2.5 4.77063 2.5 5.8125C2.5 6.49875 2.79563 7.11688 3.265 7.545C3.48219 7.74281 3.59375 7.94281 3.59375 8.12063C3.59375 8.13469 3.59344 8.14625 3.59219 8.15875C3.56281 8.52563 3.28125 12.055 3.28125 12.6875C3.28125 13.1019 3.44587 13.4993 3.7389 13.7924C4.03192 14.0854 4.42935 14.25 4.84375 14.25C5.25815 14.25 5.65558 14.0854 5.9486 13.7924C6.24163 13.4993 6.40625 13.1019 6.40625 12.6875C6.40625 12.055 6.12469 8.52563 6.09531 8.15875L6.09375 8.12063C6.09375 7.94281 6.20531 7.74281 6.4225 7.545C6.66383 7.32558 6.85657 7.05807 6.98832 6.7597C7.12007 6.46132 7.18792 6.13867 7.1875 5.8125C7.1875 4.77063 6.84156 2.4125 6.79781 2.1175C6.78253 2.01525 6.73102 1.92189 6.65266 1.85443C6.57431 1.78697 6.47433 1.74991 6.37094 1.75H6.36531C6.11656 1.75 5.93813 1.95469 5.93813 2.17813V5.4625C5.93813 5.50846 5.92907 5.55398 5.91148 5.59644C5.89389 5.6389 5.86811 5.67749 5.83561 5.70999C5.80311 5.74249 5.76453 5.76827 5.72206 5.78586C5.6796 5.80345 5.63409 5.8125 5.58812 5.8125C5.54216 5.8125 5.49665 5.80345 5.45419 5.78586C5.41172 5.76827 5.37314 5.74249 5.34064 5.70999C5.30814 5.67749 5.28236 5.6389 5.26477 5.59644C5.24718 5.55398 5.23812 5.50846 5.23812 5.4625V2.16219C5.23986 2.10864 5.23067 2.0553 5.21112 2.00542C5.19157 1.95554 5.16207 1.91016 5.12441 1.87204C5.08676 1.83393 5.04174 1.80388 4.9921 1.78373C4.94245 1.76358 4.88923 1.75375 4.83566 1.75483C4.7821 1.75591 4.72931 1.76789 4.68053 1.79003C4.63174 1.81217 4.58797 1.84402 4.55189 1.88362C4.51581 1.92322 4.48817 1.96976 4.47065 2.02039C4.45313 2.07102 4.44611 2.12469 4.45 2.17813V5.4625C4.45 5.55533 4.41313 5.64435 4.34749 5.70999C4.28185 5.77563 4.19283 5.8125 4.1 5.8125C4.00717 5.8125 3.91815 5.77563 3.85251 5.70999C3.78687 5.64435 3.75 5.55533 3.75 5.4625V2.17813C3.75 2.06474 3.70502 1.95599 3.62494 1.87573C3.54485 1.79546 3.4362 1.75025 3.32281 1.75H3.31688ZM9.65938 8L9.63969 8.285C9.61031 8.71063 9.57094 9.285 9.53219 9.88C9.45469 11.0594 9.375 12.3472 9.375 12.6875C9.375 13.1019 9.53962 13.4993 9.83265 13.7924C10.1257 14.0854 10.5231 14.25 10.9375 14.25C11.3519 14.25 11.7493 14.0854 12.0424 13.7924C12.3354 13.4993 12.5 13.1019 12.5 12.6875C12.5 12.3097 12.4016 10.8769 12.3162 9.64L12.3134 9.59938C12.2453 8.60813 12.1875 7.7625 12.1875 7.60938V2.14063C12.1875 1.925 12.0125 1.75 11.7969 1.75H11.6406C9.69906 1.75 8.125 3.32406 8.125 5.26563V6.98438C8.125 7.25374 8.232 7.51206 8.42247 7.70253C8.61294 7.893 8.87126 8 9.14062 8H9.65938Z"
                                            fill="white"
                                        />
                                    </svg>

                                    <span>Food</span>
                                </div>

                                <Rating className="max-w-16" value={5} readOnly />
                            </div>
                            <div className="flex items-center gap-3 justify-between px-4">
                                <div className="flex items-center gap-4">
                                    <svg
                                        width="15"
                                        height="16"
                                        viewBox="0 0 15 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M2.01953 11.3657V10.7407H12.982V11.3657H2.01953ZM2.50078 9.87508V9.73133C2.50078 8.50216 2.91953 7.43904 3.75703 6.54195C4.59536 5.6457 5.63495 5.11029 6.87578 4.9357V4.65883C6.87578 4.49133 6.93807 4.34529 7.06266 4.2207C7.18724 4.0957 7.33328 4.0332 7.50078 4.0332C7.66828 4.0332 7.81432 4.0957 7.93891 4.2207C8.06349 4.3457 8.12578 4.49154 8.12578 4.6582V4.93508C9.36953 5.11008 10.4095 5.6457 11.2458 6.54195C12.082 7.4382 12.5004 8.50133 12.5008 9.73133V9.87508H2.50078Z"
                                            fill="white"
                                        />
                                    </svg>

                                    <span>Service</span>
                                </div>

                                <Rating className="max-w-16" value={4.2} readOnly />
                            </div>
                            <div className="flex items-center gap-3 justify-between px-4">
                                <div className="flex items-center gap-4">
                                    <svg
                                        width="15"
                                        height="16"
                                        viewBox="0 0 15 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1.07227 8.00084C1.07227 4.45039 3.95039 1.57227 7.50084 1.57227C11.0513 1.57227 13.9294 4.45039 13.9294 8.00084C13.9294 11.5513 11.0513 14.4294 7.50084 14.4294C3.95039 14.4294 1.07227 11.5513 1.07227 8.00084ZM7.65432 8.46798C8.45093 8.66405 8.68959 8.92387 8.68959 9.36262C8.68959 9.81851 8.38289 10.1635 7.65432 10.219V8.46798ZM7.17298 7.48414C6.49155 7.31352 6.23575 7.02825 6.23575 6.64039C6.23575 6.25253 6.55959 5.89923 7.17325 5.82262L7.17298 7.48414ZM7.65432 7.59905V5.82262C8.19968 5.89066 8.58298 6.20164 8.63843 6.73869H9.5245C9.49048 5.77173 8.71932 5.13262 7.65432 5.04718V4.32744H7.17298V5.04718C6.09941 5.12834 5.3328 5.7586 5.3328 6.71298C5.3328 7.57762 5.91646 8.06352 6.99834 8.31477L7.17298 8.35735V10.2147C6.48727 10.1424 6.16343 9.77593 6.08682 9.27744H5.20503C5.2345 10.2999 6.0911 10.909 7.17298 10.9901V11.7056H7.65432V10.9901C8.74075 10.9132 9.5928 10.3213 9.5928 9.27744C9.5928 8.37021 8.97941 7.91003 7.85896 7.65021L7.65432 7.59905Z"
                                            fill="white"
                                        />
                                    </svg>

                                    <span>Value</span>
                                </div>

                                <Rating className="max-w-16" value={3.6} readOnly />
                            </div>
                            <div className="flex items-center gap-3 justify-between px-4">
                                <div className="flex items-center gap-4">
                                    <svg
                                        width="15"
                                        height="16"
                                        viewBox="0 0 15 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M3.75 13L5 9.875H6.875V7.35938C5.28125 7.30729 3.94521 7.07292 2.86688 6.65625C1.78854 6.23958 1.24958 5.75 1.25 5.1875C1.25 4.58333 1.85938 4.06771 3.07813 3.64063C4.29688 3.21354 5.77083 3 7.5 3C9.23958 3 10.7162 3.21354 11.93 3.64063C13.1437 4.06771 13.7504 4.58333 13.75 5.1875C13.75 5.75 13.2108 6.23958 12.1325 6.65625C11.0542 7.07292 9.71833 7.30729 8.125 7.35938V9.875H10L11.25 13H10L9.25 11.125H5.75L5 13H3.75Z"
                                            fill="white"
                                        />
                                    </svg>

                                    <span>Atmosphere</span>
                                </div>

                                <Rating className="max-w-16" value={2.6} readOnly />
                            </div>
                        </div>
                    </CardBody>
                </Card>

                {/* similar section */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-2xl font-semibold">You may also like Read More</h3>
                    <div className="overflow-x-hidden">{similarCarouselFragment}</div>
                </div>

                {/* ratings */}
                <div className="flex flex-col gap-5">
                    <h1 className="text-2xl font-semibold">Reviews</h1>
                    <Card className="bg-black px-3">
                        <CardHeader className="flex-col gap-4 items-start">
                            <div className="flex gap-5">
                                <Avatar
                                    radius="full"
                                    size="md"
                                    src="https://nextui.org/avatars/avatar-1.png"
                                />
                                <div className="flex flex-col gap-1 items-start justify-center">
                                    <h4 className="text-small font-semibold leading-none text-accent">
                                        Zoey Lang
                                    </h4>
                                    <h5 className="text-small tracking-tight text-default-400">
                                        @zoeylang
                                    </h5>
                                </div>
                            </div>
                            <Rating value={4} readOnly />
                        </CardHeader>
                        <CardBody className="py-0 text-small text-white">
                            <p>
                                Clean and comfortable, but the noise from the street was a little
                                annoying
                            </p>
                        </CardBody>
                        <CardFooter className="justify-between items-center">
                            <Divider className="bg-theme max-w-14 h-0.5 rounded-2xl" />
                            <h5 className="text-small tracking-tight text-default-400">
                                22.03.2021
                            </h5>
                        </CardFooter>
                    </Card>
                    <Card className="bg-black px-3">
                        <CardHeader className="flex-col gap-4 items-start">
                            <div className="flex gap-5">
                                <Avatar
                                    radius="full"
                                    size="md"
                                    src="https://nextui.org/avatars/avatar-1.png"
                                />
                                <div className="flex flex-col gap-1 items-start justify-center">
                                    <h4 className="text-small font-semibold leading-none text-accent">
                                        Zoey Lang
                                    </h4>
                                    <h5 className="text-small tracking-tight text-default-400">
                                        @zoeylang
                                    </h5>
                                </div>
                            </div>
                            <Rating value={4} readOnly />
                        </CardHeader>
                        <CardBody className="py-0 text-small text-white">
                            <p>
                                Clean and comfortable, but the noise from the street was a little
                                annoying
                            </p>
                        </CardBody>
                        <CardFooter className="justify-between items-center">
                            <Divider className="bg-theme max-w-14 h-0.5 rounded-2xl" />
                            <h5 className="text-small tracking-tight text-default-400">
                                22.03.2021
                            </h5>
                        </CardFooter>
                    </Card>
                    <Card className="bg-black px-3">
                        <CardHeader className="flex-col gap-4 items-start">
                            <div className="flex gap-5">
                                <Avatar
                                    radius="full"
                                    size="md"
                                    src="https://nextui.org/avatars/avatar-1.png"
                                />
                                <div className="flex flex-col gap-1 items-start justify-center">
                                    <h4 className="text-small font-semibold leading-none text-accent">
                                        Zoey Lang
                                    </h4>
                                    <h5 className="text-small tracking-tight text-default-400">
                                        @zoeylang
                                    </h5>
                                </div>
                            </div>
                            <Rating value={4} readOnly />
                        </CardHeader>
                        <CardBody className="py-0 text-small text-white">
                            <p>
                                Clean and comfortable, but the noise from the street was a little
                                annoying
                            </p>
                        </CardBody>
                        <CardFooter className="justify-between items-center">
                            <Divider className="bg-theme max-w-14 h-0.5 rounded-2xl" />
                            <h5 className="text-small tracking-tight text-default-400">
                                22.03.2021
                            </h5>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    );
}
