import { object, string, mixed, number } from 'yup';
import { checkIfFilesAreCorrectType, checkIfFilesAreTooBig } from './consumerResgisterFormSchema';

export const newBusinessResgisterFormSchema = object().shape({
    name: string().max(100, 'Must be less than 100 charachters!').required('Required!'),
    logo: mixed()
        .test('fileType', 'File type is not supported!', checkIfFilesAreCorrectType)
        .test('is-correct-file', 'File size is too large!', checkIfFilesAreTooBig)
        .required('Required!'),
    street: string().required('Required!'),
    building_number: string().required('Required!'),
    country: string().required('Required!'),
    region: string().required('Required!'),
    phone_number: string().required('Required!'),
    business_email: string().email().required('Required!'),
    facebook: string().required('Required!'),
    instagram: string().required('Required!'),
    twitter: string().required('Required!'),
    google_maps: string().required('Required!'),
    website: string().required('Required!'),
    average_per_person: number().required('Required!'),
});
