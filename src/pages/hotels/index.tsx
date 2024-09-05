import HotelCard from '@/components/cards/hotel';
import SearchInput from '@/components/search';
import TopNavbar from '@/layout/landing/top-navbar';
import { config } from 'react-spring';
// @ts-ignore
import { useSpringCarousel } from 'react-spring-carousel';

export default function Hotels() {
    const { carouselFragment: topRatingCarouselFragment } = useSpringCarousel({
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
        <div className="flex flex-col gap-8 relative min-h-[80vh] pb-10 px-5">
            <TopNavbar />

            <h1 className="text-3xl font-bold text-center">Find Best Hotels</h1>
            <SearchInput />

            <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold">Top ratings</h3>

                <div className="overflow-x-hidden">{topRatingCarouselFragment}</div>
            </div>
            <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold">You may also like Read More</h3>
                <div className="overflow-x-hidden">{similarCarouselFragment}</div>
            </div>
        </div>
    );
}
