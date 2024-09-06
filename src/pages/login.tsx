import Form from '@/components/form';
import SubmitButton from '@/components/form/button';
import FormInput from '@/components/form/input';
import useErrorHandler from '@/components/hooks/error-handler';
import { userActions } from '@/redux/reducers/user.reducer';
import authServices from '@/redux/services/user.service';
import { setCookie } from 'cookies-next';
import { FormikValues } from 'formik';
import { jwtDecode } from 'jwt-decode';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    email: Yup.string().email().required('Email is required'),
    password: Yup.string().required('Password is required')
});

const initialValues = {
    email: '',
    password: ''
};

export default function Login() {
    const dispatch = useDispatch();

    // mutations
    const [signIn, { isLoading: isSigning, isError: isSignInError, error: signInError }] =
        authServices.useSignInMutation();
    useErrorHandler(isSignInError, signInError);

    const onSubmit = async (values: FormikValues) => {
        const result = await signIn(values);

        if (result.data?.access_token) {
            const user: { userId: string; firstName: string; lastName: string; image: string } =
                jwtDecode(result.data.access_token);
            console.log(user);
            dispatch(
                userActions.set({
                    id: user.userId,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    image: user.image
                })
            );

            window.location.assign('/');

            /* set access token in a cookie */
            setCookie('token', result.data.access_token);
        }
    };

    return (
        <div className="dark flex justify-center bg-[#28282B] w-full min-h-screen">
            <div className="relative w-full min-h-screen max-w-[550px] bg-black flex flex-col gap-3">
                <main className="flex flex-col justify-center items-center h-full text-white">
                    <div className="flex flex-col items-center gap-10 pb-10 max-w-[400px] w-full">
                        <img className="max-w-60 w-full" src="/images/logo.svg" alt="Logo" />
                        <Form
                            validationSchema={validationSchema}
                            initialValues={initialValues}
                            onSubmit={onSubmit}
                            className="flex flex-col items-center gap-7 w-full">
                            <FormInput
                                name="email"
                                type="email"
                                placeholder="john@example.com"
                                label="Email"
                            />
                            <FormInput
                                name="password"
                                type="password"
                                placeholder="Password"
                                label="Password"
                            />

                            <SubmitButton
                                className="w-full max-w-full bg-white text-black"
                                isLoading={isSigning}>
                                Login
                            </SubmitButton>
                        </Form>
                    </div>
                </main>
            </div>
        </div>
    );
}
