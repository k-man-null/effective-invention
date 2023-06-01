import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Button,
    useToast
} from "@chakra-ui/react";
import axios from "axios";
import { baseUrl } from "../urls"

import { Field, Form, Formik } from 'formik';

export default function Register(props) {

    const toast = useToast();

    const register = (values, actions) => {

        const user = { ...values }

        actions.isSubmitting = false
        actions.isValidating = false

        axios.post(`${baseUrl}/users/register`, user, { withCredentials: true })
            .then((response) => {

                actions.isSubmitting = false

                props.setTab(1);

                toast({
                    title: 'Welcome to TikTiki',
                    description: "You have been registered successfuly, \n You can now login",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                });    

            })
            .catch((error) => {

                actions.setSubmitting(false)

                if (error.response) {

                    const status = error.response.request.status

                    switch (status) {
                        case 500:
                            toast({
                                title: 'Server Error',
                                description: "Unknown error occured, please try again later",
                                status: 'error',
                                duration: 9000,
                                isClosable: true,
                            });
                            break;

                        case 416:

                            const fieldError = { ...error.response.data.error }

                            toast({
                                title: `${fieldError.field} is taken`,
                                description: fieldError.message,
                                status: 'warning',
                                duration: 9000,
                                isClosable: true,
                            });

                            actions.setFieldError(fieldError.field, fieldError.message)
                            break;

                        case 400:
                            toast({
                                title: "Error registering",
                                description: "Please try again or contact customer care",
                                status: 'warning',
                                duration: 9000,
                                isClosable: true,
                            });
                            break;

                        default:
                            break;
                    }

                } else if (error.request) {

                    toast({
                        title: 'System Error',
                        description: "Unknown error occured",
                        status: 'error',
                        duration: 9000,
                        isClosable: true,
                    })

                } else {
                    toast({
                        title: 'System Error',
                        description: "Unknown error occured",
                        status: 'error',
                        duration: 9000,
                        isClosable: true,
                    })
                }

            })

    }

    function validateFirstName(value) {

        let error
        if (!value) {
            error = 'First Name is required'
        } else if (value.length > 25) {
            error = "Jeez! Who baptized you 😱"
        }
        return error
    }

    function validateLastName(value) {

        let error
        if (!value) {
            error = 'Last Name is required'
        } else if (value.length > 25) {
            error = "Jeez! Who baptized you 😱"
        }
        return error
    }

    function validateUserName(value) {

        let error
        if (!value) {
            error = 'Username is required'
        } else if (value.length > 25) {
            error = "Thats a very long username"
        }
        return error
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

    function validatePhone(phone) {

        let error;

        if (!phone) {
            error = "Phone number is required"

        } else {
            if (phone.slice(0, 3) !== "254") {

                error = "Start the number with 254"

            }

            if (phone.length !== 12) {

                error = "Enter a valid phone number"

            }
        }

        return error;

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

    return (

        <Formik
            initialValues={{
                first_name: '',
                last_name: '',
                user_name: '',
                email: '',
                phone: '',
                password: ''
            }}

            onSubmit={register}

        >
            {(props) => (
                <Form>
                    <Field name='first_name' validate={validateFirstName}>
                        {({ field, form }) => (
                            <FormControl isInvalid={form.errors.first_name && form.touched.first_name}>
                                <FormLabel>First Name</FormLabel>
                                <Input {...field} placeholder='first_name' />
                                <FormErrorMessage>{form.errors.first_name}</FormErrorMessage>
                            </FormControl>
                        )}

                    </Field>
                    <Field name='last_name' validate={validateLastName}>
                        {({ field, form }) => (
                            <FormControl isInvalid={form.errors.last_name && form.touched.last_name}>
                                <FormLabel>Last Name</FormLabel>
                                <Input {...field} placeholder='last_name' />
                                <FormErrorMessage>{form.errors.last_name}</FormErrorMessage>
                            </FormControl>
                        )}

                    </Field>
                    <Field name='user_name' validate={validateUserName} >
                        {({ field, form }) => (
                            <FormControl isInvalid={form.errors.user_name && form.touched.user_name}>
                                <FormLabel>Username</FormLabel>
                                <Input {...field} placeholder='user_name' />
                                <FormErrorMessage>{form.errors.user_name}</FormErrorMessage>
                            </FormControl>
                        )}

                    </Field>

                    <Field name='email' validate={validateEmail}>
                        {({ field, form }) => (
                            <FormControl isInvalid={form.errors.email && form.touched.email}>
                                <FormLabel>Email</FormLabel>
                                <Input {...field} placeholder='email' />
                                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                            </FormControl>
                        )}

                    </Field>

                    <Field name='phone' validate={validatePhone}>
                        {({ field, form }) => (
                            <FormControl isInvalid={form.errors.phone && form.touched.phone}>
                                <FormLabel>Mpesa Phone Number</FormLabel>
                                <Input {...field} placeholder='phone' />
                                <FormErrorMessage>{form.errors.phone}</FormErrorMessage>
                            </FormControl>
                        )}

                    </Field>

                    <Field name='password' validate={validatePassword} >
                        {({ field, form }) => (
                            <FormControl isInvalid={form.errors.password && form.touched.password}>
                                <FormLabel>Create a password</FormLabel>
                                <Input  {...field} placeholder='password' />
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
                    >Register</Button>

                </Form>
            )}


        </Formik>

        
    );
}