import Button from '../button';

export default function PlaceCard() {
    return (
        <div
            draggable={false}
            className="w-full max-h-[550px] h-[55vh] relative bg-black flex flex-col items-center select-none">
            <img
                draggable={false}
                src="https://picsum.photos/400/550"
                alt="Sample"
                className="object-cover w-full h-full rounded-2xl select-none"
            />

            <div
                className="text-white absolute top-0 left-0 px-5 pt-5 pb-12 text-center h-full flex flex-col justify-end"
                style={{
                    background:
                        'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.4351514287355567) 80%)'
                }}>
                <h1 className="text-inherit font-bold text-2xl mb-2 select-none">Negombo</h1>
                <p className="text-inherit select-none">
                    A coastal city known for its sandy beaches and bustling fish market
                </p>
            </div>

            <Button className="bg-white text-black absolute bottom-0 translate-y-5 rounded-full">
                Explore
            </Button>
        </div>
    );
}
