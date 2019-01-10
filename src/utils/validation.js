import { string, object, mixed } from 'yup';

export const validation = object().shape({
  name: string().required('Required'),
  phone: string()
    .min(6, 'Phone number too short')
    .required('Required'),
  mail: string()
    .email('Email address is not valid')
    .required('Required'),
  image: mixed().required('Image required'),
  message: string().required('Required'),
});
