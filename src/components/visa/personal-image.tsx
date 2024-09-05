import { Fragment } from 'react/jsx-runtime';
import { Image } from '@nextui-org/react';
import ImgUploadArea from './img-upload-area';

export default function PersonalImageDetails() {
    return (
        <Fragment>
            <h2 className="text-lg font-medium pb-4">Upload Image</h2>

            <ImgUploadArea name="personalPhoto" />

            <h2 className="text-lg font-medium pt-6 pb-4">How to take good photos</h2>

            <div className="w-full pb-2">
                <Image
                    alt="Img Upload Guide"
                    className="object-contain w-full mx-auto mb-1 aspect-square"
                    shadow="none"
                    src="/images/upload-guide.png"
                    width="100%"
                />
            </div>

            <h3 className="text-lg font-medium pb-2">Quality</h3>
            <p>
                Our team of experts will review your photo and make sure it meets all the necessary
                criteria for your passport, so you can have peace of mind knowing your photo will be
                accepted.
            </p>
        </Fragment>
    );
}
