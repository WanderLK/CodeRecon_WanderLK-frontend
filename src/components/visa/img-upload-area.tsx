import { Fragment } from 'react/jsx-runtime';
import { Button, Image } from '@nextui-org/react';

interface ImgUploadAreaProps {
    name: string;
}

export default function ImgUploadArea({ name }: ImgUploadAreaProps) {
    return (
        <Fragment>
            <div className="flex flex-col gap-4 w-full pb-4">
                <label
                    htmlFor={name}
                    className="text-sm border-dashed border-2 border-white rounded-[30px] py-8 px-2 w-full flex flex-col justify-center items-center">
                    <Image
                        alt="Upload Image Icon"
                        className="object-cover px-2 w-5/6 mx-auto mb-1"
                        shadow="none"
                        src="/images/upload-img-ico.png"
                        width="100%"
                    />
                    <div className="text-xs">
                        Drop your image here, or <span className="text-cyan-700">browse</span>
                    </div>
                    <div className="text-[9px] opacity-70 mt-1">Supports: PNG, JPG, JPEG </div>
                </label>
                <input type="file" id={name} name={name} className="hidden" />{' '}
            </div>
            <Button className={`bg-white text-black rounded-[30px] w-full font-medium py-4 px-2`}>
                Upload Image
            </Button>
        </Fragment>
    );
}
