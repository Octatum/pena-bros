import React from 'react';

import { Container } from '../Container';
import { Formik } from 'formik';
import { string, object, mixed } from 'yup';
import { navigateTo } from 'gatsby';

const inputValidation = object().shape({
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
/*
function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

(values, actions) => {
      console.log(values)
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'Contact',
          values
        }),
      })
        .then(() => {
          alert('Your message was sent!');
          actions.setSubmitting(false);
          navigateTo('/')
        })
        .catch(() => {
          actions.setSubmitting(false);
          return error => alert(error);
        })
    }
*/
const GetInTouch = () => (
  <Formik
    initialValues={{
      name: '',
      phone: '',
      mail: '',
      image: '',
      message: '',
    }}
    validationSchema={inputValidation}
    onSubmit={values => console.log(values)}
    render={({ handleSubmit, handleChange, handleBlur, values, errors }) => (
      <Container
        as="form"
        name="contact"
        method="post"
        action="/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out:{' '}
            <input name="bot-field" onChange={handleChange} />
          </label>
        </p>

        <input
          type="text"
          name="name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
        />
        {errors.name && <div>{errors.name}</div>}
        <input
          type="text"
          name="phone"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.phone}
        />
        {errors.phone && <div>{errors.phone}</div>}
        <input
          type="text"
          name="mail"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.mail}
        />
        {errors.mail && <div>{errors.mail}</div>}
        <input
          type="file"
          name="image"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.image}
        />
        {errors.image && <div>{errors.image}</div>}
        <input
          type="textarea"
          name="message"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.message}
        />
        {errors.message && <div>{errors.message}</div>}

        <button type="submit">Submit</button>
      </Container>
    )}
  />
);

export default GetInTouch;
