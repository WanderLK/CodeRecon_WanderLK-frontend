import React from 'react';
import { Input as NextInput, InputProps as NextInputProps, Spinner } from '@nextui-org/react';

export interface InputProps extends NextInputProps {
    isLoading?: boolean;
    lightMode?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    (
        {
            className,
            labelPlacement = 'outside',
            variant = 'bordered',
            lightMode,
            isLoading,
            ...props
        },
        ref
    ) => {
        const _className = React.useMemo(() => {
            let cl = `block w-full text-md`;

            if (className) cl += ' ' + className;

            return cl;
        }, [className, lightMode]);

        if (isLoading) {
            props.endContent = <Spinner color="success" size="md" />;
        }

        return (
            <NextInput
                ref={ref}
                className={_className}
                labelPlacement={labelPlacement}
                variant={variant}
                classNames={{
                    // input: ['!border-none', '!ring-0'],
                    inputWrapper: ['shadow-none', 'rounded-md'],
                    input: 'focus:outline-none border-transparent focus:border-transparent focus:ring-0 file:cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-gray-500'
                }}
                {...props}
            />
        );
    }
);

export default Input;
