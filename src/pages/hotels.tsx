import HotelCard from '@/components/cards/hotel';
import SearchInput from '@/components/search';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1,
        partialVisibilityGutter: 150
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1,
        partialVisibilityGutter: 120
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1,
        partialVisibilityGutter: 60
    }
};

export default function Hotels() {
    return (
        <div className="flex flex-col gap-8 relative min-h-[80vh] pb-10">
            <h1 className="text-3xl font-bold text-center">Find Best Hotels</h1>
            <SearchInput />

            <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold">Top ratings</h3>

                <Carousel partialVisbile swipeable responsive={responsive}>
                    <HotelCard />
                    <HotelCard />
                    <HotelCard />
                    <HotelCard />
                    <HotelCard />
                    <HotelCard />
                </Carousel>
            </div>
            <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold">You may also like Read More</h3>

                <Carousel partialVisbile swipeable responsive={responsive}>
                    <HotelCard />
                    <HotelCard />
                    <HotelCard />
                    <HotelCard />
                    <HotelCard />
                    <HotelCard />
                </Carousel>
            </div>
        </div>
    );
}
