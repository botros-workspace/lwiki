import { object, string, ref, mixed } from 'yup';

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];
export function checkIfFilesAreTooBig(files?: File[]): boolean {
    let valid = true;
    if (files?.length !== 1) {
        valid = false;
    } else {
        const file: File = files[0];
        const size = file.size / 1024 / 1024;
        if (size > 10) {
            valid = false;
        }
    }
    return valid;
}

export function checkIfFilesAreCorrectType(files?: File[]): boolean {
    let valid = false;
    if (files?.length !== 1) {
        valid = false;
    } else if (SUPPORTED_FORMATS.includes(files[0].type)) {
        valid = true;
    }
    return valid;
}
export const consumerResgisterFormSchema = object().shape({
    email: string().email('Not a valid email!').required('Required!'),
    password: string()
        .required('Required!')
        .min(8, 'Must be at least 8 charachters!')
        .max(32, 'Must be less than 32 charachters!'),
    confirmPassword: string()
        .required('Required!')
        .oneOf([ref('password'), null], "Password doesn't match!")
        .min(8, 'Must be at least 8 charachters!')
        .max(32, 'Must be less than 32 charachters!'),
    name: string()
        .required('Required!')
        .min(4, 'Must be at least 4 charachters!')
        .max(32, 'Must be less than 32 charachters!'),
    image: mixed()
        .test('fileType', 'File type is not supported!', checkIfFilesAreCorrectType)
        .test('is-correct-file', 'File size is too large!', checkIfFilesAreTooBig),
});
