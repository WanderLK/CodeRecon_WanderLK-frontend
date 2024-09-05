import PlaceCard from '@/components/cards/place';
import SearchInput from '@/components/search';
import TopNavbar from '@/layout/landing/top-navbar';
import { config } from 'react-spring';
// @ts-ignore
import { useSpringCarousel } from 'react-spring-carousel';

export default function Home() {
    const { carouselFragment } = useSpringCarousel({
        itemsPerSlide: 1,
        withLoop: true,
        startEndGutter: 40,
        gutter: 24,
        withThumbs: false,
        springConfig: config.wobbly,
        items: Array.from({ length: 5 }).map((_, i: number) => {
            return {
                id: i,
                renderItem: <PlaceCard />
            };
        })
    });

    return (
        <div className="flex flex-col gap-4 pb-10">
            <TopNavbar />
            <div className="p-5">
                <SearchInput />
            </div>

            <div className="overflow-x-hidden pb-6 pt-4">{carouselFragment}</div>
        </div>
    );
}
