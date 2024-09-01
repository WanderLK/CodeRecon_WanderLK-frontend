import { Card, CardBody, CardHeader } from '@nextui-org/react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

export default function HotelCard() {
    return (
        <div className="pr-4">
            <Card className="py-4 border-2 border-theme rounded-3xl bg-black text-white min-h-[431px] w-full flex flex-col gap-2">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <img
                        alt="Card background"
                        className="object-cover rounded-xl h-60"
                        src="https://nextui.org/images/hero-card-complete.jpeg"
                    />
                </CardHeader>
                <CardBody className="overflow-visible py-2 px-4 flex flex-col gap-2">
                    <div>
                        <h4 className="font-bold text-large mb-[1px]">Grand Oriental Hotel</h4>
                        <small>Colombo , Sri Lanka</small>
                    </div>

                    <Rating
                        className="max-w-24"
                        itemStyles={{
                            itemShapes: (
                                <path
                                    stroke="#E1A160"
                                    d="M7.36836 1.2297C7.8292 1.1947 8.2142 1.45662 8.40845 1.8072L9.12011 3.09637C10.1363 3.03103 10.9179 3.4067 11.4814 3.91187C12.0992 4.46603 12.4451 5.16253 12.6073 5.5592C12.7823 5.98678 12.6528 6.4342 12.3798 6.72703L11.3729 7.8027C11.7498 8.74887 11.6337 9.60812 11.3274 10.3005C10.9914 11.0589 10.4355 11.6031 10.1083 11.8802C9.75595 12.1789 9.29045 12.194 8.92761 12.0243L7.59353 11.3995C6.81011 12.05 5.9567 12.2051 5.2042 12.1275C4.37878 12.043 3.68928 11.6825 3.3247 11.4567C2.93153 11.2135 2.77345 10.7754 2.82303 10.3781L3.00503 8.91628C2.14403 8.37203 1.73278 7.60845 1.57353 6.86878C1.3997 6.05795 1.5292 5.29087 1.63128 4.87378C1.74095 4.4252 2.10845 4.13878 2.50161 4.06353L3.94828 3.7847C4.1997 2.79828 4.79878 2.17062 5.45328 1.79145C6.17078 1.37495 6.94078 1.2612 7.36836 1.2297Z"
                                />
                            ),
                            activeFillColor: '#E1A160'
                        }}
                        value={3}
                        readOnly
                    />

                    <p className="line-clamp-3">
                        Marino Beach Colombo has an outdoor swimming pool, fitness center, a garden
                        and terrace in Colombo. Among the facilities of this property are a
                        restaurant, room service an
                    </p>
                </CardBody>
            </Card>
        </div>
    );
}
