import React from 'react';
import styled from 'styled-components';

import { Container } from '../../Container';
import { Text } from '../../Text';
import { Formik } from 'formik';

import { navigateTo } from 'gatsby';
import Question from './Question';
import FileUpload from './FileUpload';
import { validation } from '../../../utils/validation';
import { device } from '../../../utils/device';

const FormContainer = styled(Container)`
  display: grid;
  grid-template-columns: 10em auto;
  grid-template-areas:
    'name name-input'
    'phone phone-input'
    'mail mail-input'
    'image image'
    'message message-input'
    'submit submit';
  gap: 1.25em;

  ${device.tablet} {
    grid-template-columns: 7em auto;
    gap: 0.5em;
    align-items: center;
    justify-items: start;
  }
`;

const FileUploadComp = styled(FileUpload)`
  ${device.tablet} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const SubmitButton = styled(Text)`
  background-color: ${({ theme }) => theme.color.green};
  border: none;
  cursor: pointer;
  float: right;
  grid-area: submit;
  width: auto;
  justify-self: end;
`;

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

const GetInTouch = ({...props}) => (
  <Formik
    initialValues={{
      name: '',
      phone: '',
      mail: '',
      image: '',
      message: '',
    }}
    validationSchema={validation}
    onSubmit={(values, actions) => {
      console.log(values);
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'Contact',
          values,
        }),
      })
        .then(() => {
          alert('Your message was sent!');
          actions.setSubmitting(false);
          navigateTo('/');
        })
        .catch(() => {
          actions.setSubmitting(false);
          return error => alert(error);
        });
    }}
    render={({ handleSubmit, handleChange, handleBlur, values }) => (
      <FormContainer
        margin={[5, 'auto']}
        tMargin={[2.5, 'auto']}
        width="70%"
        tWidth="100%"
        as="form"
        name="contact"
        method="post"
        action="/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        {...props}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out:{' '}
            <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        <Question
          size={3}
          question="Name: "
          name="name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
        />
        <Question
          size={3}
          question="Phone: "
          name="phone"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.phone}
        />
        <Question
          size={3}
          question="Email: "
          name="mail"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.mail}
        />
        <FileUploadComp
          size={3}
          text="Attach Image"
          message="send us a foto of your car's interior"
          name="image"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.image}
          style={{ gridArea: 'image' }}
        />
        <Question
          size={3}
          question="Message: "
          name="message"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.message}
        />

        <SubmitButton
          as="button"
          type="submit"
          bold="bold"
          white
          size={2.75}
          padding={[0.35, 1.25]}
          align="center"
        >
          Send
        </SubmitButton>
      </FormContainer>
    )}
  />
);

export default GetInTouch;
