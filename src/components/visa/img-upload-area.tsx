import { Fragment } from 'react/jsx-runtime';
import { Button, Image } from '@nextui-org/react';
import { ChangeEvent } from 'react';
import useErrorHandler from '../hooks/error-handler';
import imageService from '@/redux/services/image.service';
import { notifyActions } from '@/redux/reducers/notify.reducer';
import verifierService from '@/redux/services/verifier.service';
import { useField, useFormikContext } from 'formik';
import { imageToBase64, validateImageResolutions } from '@/utils/image';

interface ImgUploadAreaProps {
    name: string;
    verify?: boolean;
}

export default function ImgUploadArea({ name, verify }: ImgUploadAreaProps) {
    const [field] = useField(name);

    const { setFieldValue } = useFormikContext();
    const [
        verifyImage,
        { isLoading: isVerifing, isError: isVerifyImageError, error: verifyImageError }
    ] = verifierService.useVerifyMutation();
    useErrorHandler(isVerifyImageError, verifyImageError);

    const [
        uploadImage,
        { isLoading: isUploading, isError: isUploadImageError, error: uploadImageError }
    ] = imageService.useUploadMutation();
    useErrorHandler(isUploadImageError, uploadImageError);

    const onImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        const file = files?.[0];

        if (file) {
            /* face recognition */
            if (verify) {
                let min = {
                    width: 600,
                    height: 600
                };
                let max = {
                    width: 1200,
                    height: 1200
                };

                const validImage = await validateImageResolutions(file, min, max);
                if (validImage?.error) {
                    return notifyActions.open({
                        type: 'info',
                        message: validImage.error
                    });
                }

                const form = new FormData();
                form.append('file', file);

                const verified = await verifyImage(form);
                if (verified?.data?.status !== 200) {
                    return notifyActions.open({
                        type: 'failed',
                        message: 'failed to verify uploaded image'
                    });
                }
            }

            const form = new FormData();
            form.append('file', file);

            const result = await uploadImage(form);

            if (result.data.url) {
                setFieldValue(name, result.data.url);
            }
        }
    };

    return (
        <Fragment>
            <div className="flex flex-col gap-4 w-full pb-4">
                <label
                    htmlFor={name}
                    className="text-sm border-dashed border-2 border-white rounded-[30px] py-8 px-2 w-full flex flex-col justify-center items-center cursor-pointer">
                    <Image
                        alt="Upload Image Icon"
                        className="object-cover px-2 w-5/6 mx-auto mb-1"
                        shadow="none"
                        src={field?.value ? field.value : '/images/upload-img-ico.png'}
                        width="100%"
                    />
                    <div className="text-[9px] opacity-70 mt-1">Supports: PNG, JPG, JPEG </div>
                </label>
                <input
                    type="file"
                    id={name}
                    name={name}
                    className="hidden"
                    onChange={onImageUpload}
                />
            </div>
            {/* <Button className={`bg-white text-black rounded-[30px] w-full font-medium py-4 px-2`}>
                Upload Image
            </Button> */}
        </Fragment>
    );
}
