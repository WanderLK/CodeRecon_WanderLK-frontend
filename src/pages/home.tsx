import SearchInput from '@/components/search';
// @ts-ignore
import ReactCardCarousel from 'react-card-carousel';

export default function Home() {
    return (
        <div className="flex flex-col gap-4 relative min-h-[80vh]">
            <SearchInput />

            <div className="relative h-[75vh]">
                <ReactCardCarousel>
                    {Array.from({ length: 10 }).map((_, i: number) => {
                        return (
                            <div
                                key={i}
                                className="w-[336px] h-[550px] rounded-2xl overflow-hidden relative bg-black">
                                <img
                                    src="https://picsum.photos/400/550"
                                    alt="Sample"
                                    className="object-cover w-full h-full"
                                />

                                <div
                                    className="text-white absolute top-0 left-0 px-5 pt-5 pb-12 text-center h-full flex flex-col justify-end"
                                    style={{
                                        background:
                                            'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.4351514287355567) 80%)'
                                    }}>
                                    <h1 className="text-inherit font-bold text-2xl mb-2">
                                        Negombo
                                    </h1>
                                    <p className="text-inherit">
                                        A coastal city known for its sandy beaches and bustling fish
                                        market
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </ReactCardCarousel>
            </div>
        </div>
    );
}
