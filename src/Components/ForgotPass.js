import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Button,
    Text
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


import { Field, Form, Formik } from 'formik';
import { baseUrl } from "../urls";

export default function ForgotPass(props) {

    const navigate = useNavigate()

    const handleForgotPassword = (values, actions) => {

        actions.isSubmitting = false
        actions.isValidating = false


        const credential = { ...values }
        

        axios.post(`${baseUrl}/user/signin`, credential, { withCredentials: true })
            .then((response) => {

                const user = response.data.user
                //alert(`Logged in successfully as ${user.username}`)

                // const token = response.data.token

                // localStorage.setItem("user", JSON.stringify(user))
                // localStorage.setItem("token", token)

                

            })
            .catch((error) => {

                if (error.response) {

                    console.log(error.response)

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
                email: 'johnkibogoyos@gmail.com'
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