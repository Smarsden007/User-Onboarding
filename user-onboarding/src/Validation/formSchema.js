import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup
    .string()
    .trim()
    .required('Username is required!!!!')
    .min(3, 'Username must be 3 charecters!!!!!'),
    email: yup
    .string()
    .email('Must be a valid email address')
    .required('Email is required!!!'),
    password: yup                            
    .string()
    .required('Password is required!!!')
    .min(8, 'Password must be 8 characters long'),
    tos: yup
    .boolean()
    .oneOf([true], 'Must accept the terms of service')
})

export default formSchema;