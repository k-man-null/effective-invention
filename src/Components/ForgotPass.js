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


import { Field, Form, Formik } from 'formik';
import { baseUrl } from "../urls";

export default function ForgotPass(props) {

    const toast = useToast()

    const handleForgotPassword = (values, actions) => {

        actions.isSubmitting = false
        actions.isValidating = false


        const credential = { ...values }


        axios.post(`${baseUrl}/users/recoverpassword`, credential, { withCredentials: true })
            .then((response) => {
                
                actions.setSubmitting(false);

                toast({
                    title: 'Success',
                    description:"We have sent you an email with instructions",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                });
        
            })
            .catch((error) => {

                actions.setSubmitting(false);

                if (error.response) {

                    toast({
                        title: 'Error',
                        description:error.response.data.message,
                        status: 'error',
                        duration: 9000,
                        isClosable: true,
                    });

                } else if (error.request) {
                    console.log(error)
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


    return (
        <Formik
            initialValues={{
                email: ''
            }}

            onSubmit={handleForgotPassword}

        >
            {(props) => (
                <Form>


                    <Field name='email' validate={validateEmail}>
                        {({ field, form }) => (
                            <FormControl isInvalid={form.errors.email && form.touched.email}>
                                <FormLabel>Enter your Email</FormLabel>
                                <Input {...field} placeholder='email' />
                                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                            </FormControl>
                        )}

                    </Field>


                    <Button
                        width='100%'
                        colorScheme='teal'
                        mt='4'
                        type="submit"
                        isLoading={props.isSubmitting}
                    >Submit Email</Button>


                </Form>
            )}


        </Formik>

    );
}