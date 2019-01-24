import { string, object, array } from 'yup';

export const validation = object().shape({
  name: string().required('Please fill your name'),
  phone: string()
    .required('Please write your phone number'),
  mail: string()
    .email('Email address is not valid')
    .required('Please write your email so we can contact you'),
  images: array().required('We need an image of the car'),
  message: string().required('Please describe the services you want to be provided'),
});
