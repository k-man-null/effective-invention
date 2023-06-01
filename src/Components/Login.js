import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Button,
    useToast
} from "@chakra-ui/react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../urls";

import { Field, Form, Formik } from 'formik';

export default function Login(props) {

    const navigate = useNavigate()

    const toast = useToast();

    const login = (values, actions) => {

        actions.isSubmitting = false
        actions.isValidating = false

        const credential = { ...values }

        axios.post(`${baseUrl}/users/login`, credential, { withCredentials: true })
            .then((response) => {
                
                navigate("/app")

            })
            .catch((error) => {

                actions.setSubmitting(false);

                if (error.response) {

                    const status = error.response.status
                    if (status === 417) {
                        switch (error.response.data["field"]) {
                            case "email":
                                actions.setFieldError("email",
                                "User with that email doesn't exist")
                                break;

                            case "password":
                                actions.setFieldError("password",
                                "Wrong password")
                                break;

                            default:
                                break;
                        }
                    }

                } else if (error.request) {

                    toast({
                        title: 'There was a system error!',
                        description: "Please try again or contact customer care",
                        status: 'error',
                        duration: 9000,
                        isClosable: true,
                    }); 

                }
            })

    }

    function validateEmail(value) {

        let error
        if (!value) {
            error = 'Email is required'
        } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/.test(value)) {
            error = "Invalid Email Address"
        }
        return error

    }

    function validatePassword(value) {

        let error;

        if (!value) {
            error = "Password is required"

        } else {

            if (value.length < 8) {
                error = "Password must contain at least 8 characters"
            }

        }

        return error;

    }

    function handleForgotPassword() {

        props.setTab(2);
    }

    return (
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}

            onSubmit={login}

        >
            {(props) => (
                <Form>

                    <Field name='email' validate={validateEmail}>
                        {({ field, form }) => (
                            <FormControl isInvalid={form.errors.email && form.touched.email}>
                                <FormLabel>Email</FormLabel>
                                <Input {...field} placeholder='email' />
                                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                            </FormControl>
                        )}

                    </Field>

                    <Field name='password' validate={validatePassword} >
                        {({ field, form }) => (
                            <FormControl isInvalid={form.errors.password && form.touched.password}>
                                <FormLabel>Enter your Password</FormLabel>
                                <Input type='password' {...field} placeholder='password' />
                                <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                            </FormControl>
                        )}

                    </Field>

                    <Button
                        width='100%'
                        colorScheme='teal'
                        mt='4'
                        type="submit"
                        isLoading={props.isSubmitting}
                    >Login</Button>

                    <Button
                        width='100%'
                        mt={4}
                        colorScheme='teal'
                        variant='outline'
                        onClick={handleForgotPassword}
                    >
                        Forgot Password
                    </Button>

                </Form>
            )}

        </Formik>

    );
}