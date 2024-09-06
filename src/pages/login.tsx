import Form from '@/components/form';
import SubmitButton from '@/components/form/button';
import FormInput from '@/components/form/input';
import useErrorHandler from '@/components/hooks/error-handler';
import { userActions } from '@/redux/reducers/user.reducer';
import authServices from '@/redux/services/user.service';
import { setCookie } from 'cookies-next';
import { FormikValues } from 'formik';
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

        if (result.data?.status === 200) {
            dispatch(
                userActions.set({
                    id: result.data.data.id,
                    firstName: result.data.data.firstName,
                    lastName: result.data.data.lastName,
                    image: result.data.data.image
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
                <main className="h-full text-white">
                    <div className="flex flex-col gap-4 pb-10">
                        <Form
                            validationSchema={validationSchema}
                            initialValues={initialValues}
                            onSubmit={onSubmit}
                            className="flex flex-col gap-4 w-full">
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

                            <SubmitButton>Login</SubmitButton>
                        </Form>
                    </div>
                </main>
            </div>
        </div>
    );
}
