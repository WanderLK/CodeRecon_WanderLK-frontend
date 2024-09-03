import TopNavbar from '@/layout/top-navbar';

export default function Flights() {
    return (
        <div className="flex flex-col gap-3 relative">
            <TopNavbar transparent hideLogo showSearch className="absolute z-10 w-full" />

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
                    <h1 className="text-inherit font-bold text-3xl mb-2 select-none">Colombo</h1>
                </div>
            </div>
        </div>
    );
}
