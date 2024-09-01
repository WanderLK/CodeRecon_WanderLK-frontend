import { ChangeEvent } from 'react';
import Input, { InputProps as NextInputProps } from './input';
import { useLocation, useNavigate } from 'react-router-dom';

interface InputProps extends NextInputProps {
    paramName?: string;
}

export default function SearchInput({ paramName = 'search', ...props }: InputProps) {
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname;
    const params = location.search;
    const searchParams = new URLSearchParams(params.toString());

    const onSearch = (event: ChangeEvent<HTMLInputElement>) => {
        if (!event.target.value) {
            searchParams.delete(paramName);
        } else {
            searchParams.set(paramName, event.target.value);
        }

        navigate(`${pathname}?${searchParams.toString()}`);
    };

    return (
        <Input
            defaultValue={searchParams.get(paramName) ?? ''}
            startContent={
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#6b7280"
                    className="size-6 border-gray-500">
                    <path
                        fillRule="evenodd"
                        d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                        clipRule="evenodd"
                    />
                </svg>
            }
            placeholder="Search"
            onChange={onSearch}
            classNames={{
                inputWrapper: [
                    'shadow-none border-2 border-gray-500 rounded-full py-6',
                    'data-[focus=true]:!border-gray-500'
                ],
                input: 'focus:outline-none border-transparent focus:border-transparent focus:ring-0 file:cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-gray-500'
            }}
            {...props}
        />
    );
}
