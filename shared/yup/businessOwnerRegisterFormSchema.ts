import { object, string, ref } from 'yup';

export const businessOwnerResgisterFormSchema = object().shape({
    email: string().email('Not a valid email!').required('Required!'),
    phoneNumber: string().min(8, 'At least 8 charachters!').required('Required!'),
    password: string()
        .required('Required!')
        .min(8, 'Must be at least 8 charachters!')
        .max(32, 'Must be less than 32 charachters!'),
    confirmPassword: string()
        .required('Required!')
        .oneOf([ref('password'), null], "Password doesn't match!")
        .min(8, 'Must be at least 8 charachters!')
        .max(32, 'Must be less than 32 charachters!'),
});
