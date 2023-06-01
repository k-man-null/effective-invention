import {
    ChakraProvider,
    Center,
    Box,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Button,
    useToast
} from "@chakra-ui/react";
import theme from '../theme'

import axios from "axios";
import { useParams } from "react-router-dom";
import { baseUrl } from "../urls";

import { Field, Form, Formik } from 'formik';

export default function ResetPassword() {

    const { token } = useParams();

    // const navigate = useNavigate()

    const toast = useToast();

    const login = (values, actions) => {

        actions.isSubmitting = false
        actions.isValidating = false

        const credential = {
            password: values.password,
            token: token
        }

        axios.post(`${baseUrl}/users/forgotpassword`, credential)
            .then((response) => {

                toast({
                    title: 'Success',
                    description: "Password Changed Successfully, you may now login",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                });

            })
            .catch((error) => {

                actions.setSubmitting(false);

                toast({
                    title: 'There was a system error!',
                    description: "Please try again or contact customer care",
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                });

            })

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

        <ChakraProvider theme={theme}>
            <Center
                h='100vh'
                w='100vw'
            >
                <Box
                    width='400px'
                    border='1px solid teal'
                    marginY='10'
                >
                    <Formik
                        initialValues={{
                            password: ''
                        }}

                        onSubmit={login}

                    >
                        {(props) => (
                            <Form>

                                <Field name='password' validate={validatePassword} >
                                    {({ field, form }) => (
                                        <FormControl isInvalid={form.errors.password && form.touched.password}>
                                            <FormLabel>Enter your new Password</FormLabel>
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
                                >Submit</Button>

                            </Form>
                        )}

                    </Formik>

                </Box>
            </Center>

        </ChakraProvider>


    );
}