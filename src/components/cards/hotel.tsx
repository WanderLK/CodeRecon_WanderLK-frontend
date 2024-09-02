import { Card, CardBody, CardHeader } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import Rating from '../rating';

interface HotelCardProps {
    to: string;
}

export default function HotelCard({ to }: HotelCardProps) {
    return (
        <Link draggable={false} to={to}>
            <Card className="py-4 border-2 border-theme rounded-3xl bg-black text-white min-h-[431px] w-full flex flex-col gap-2 select-none cursor-pointer min-w-80">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <img
                        draggable={false}
                        alt="Card background"
                        className="object-cover rounded-xl h-60 w-full"
                        src="https://picsum.photos/400"
                    />
                </CardHeader>
                <CardBody className="overflow-visible py-2 px-4 flex flex-col gap-2">
                    <div>
                        <h4 className="font-bold text-large mb-[1px]">Grand Oriental Hotel</h4>
                        <small>Colombo , Sri Lanka</small>
                    </div>

                    <Rating value={3} readOnly />

                    <p className="line-clamp-3">
                        Marino Beach Colombo has an outdoor swimming pool, fitness center, a garden
                        and terrace in Colombo. Among the facilities of this property are a
                        restaurant, room service an
                    </p>
                </CardBody>
            </Card>
        </Link>
    );
}
