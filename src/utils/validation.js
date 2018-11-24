import { string, object, mixed } from 'yup';

export const validation = object().shape({
    name: string().required('Required'),
    phone: string()
      .min(6, 'Phone number to short')
      .required('Required'),
    mail: string()
      .email('Email address not valid')
      .required('Required'),
    image: mixed().required('Image required'),
    message: string().required('Required'),
  });