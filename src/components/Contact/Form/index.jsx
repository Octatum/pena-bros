import React from 'react';
import styled from 'styled-components';

import { Container } from '../../Container';
import { Text } from '../../Text';
import { Formik, Field } from 'formik';

import FileUpload from './FileUpload';
import { validation } from '../../../utils/validation';
import { device } from '../../../utils/device';
import { Image } from '../../Image';

const FormContainer = styled(Container)`
  display: grid;
  grid-template-columns: 10em auto;
  gap: 1.25em;
  align-items: center;

  ${device.tablet} {
    grid-template-columns: 7em auto;
    gap: 0.5em;
    justify-items: start;
  }
`;

const FileUploadComp = styled(FileUpload)`
  grid-column: 1 / -1;

  ${device.tablet} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Input = styled(Text)`
  border: none;
  border-bottom: 2px solid black;
  width: 100%;
  max-width: 1000px;
  min-width: 150px;
  min-height: ${({ minHeight }) => minHeight ? minHeight : 'initial'};
  resize: vertical;

  ${device.tablet} {
    min-width: initial;
    max-width: initial;
    width: calc(100% - 1em);
  }
`;

const SubmitButton = styled(Text)`
  background-color: ${({ theme }) => theme.color.green};
  border: none;
  cursor: pointer;
  float: right;
  width: auto;
  justify-self: end;
  grid-column: 1 / -1;
  grid-row: 0;
`;

const ErrorMessage = styled(Text).attrs({
  padding: [1],
  color: 'red'
})`
  background-color: ${({ theme }) => theme.color.lightRed};
  border-radius: 10px;

  grid-column: 1 / -1;
`;

const Thumbnail = styled(Image).attrs({
})`
  width: 100px;
  min-width: 100px;

  height: 100px;
  min-height: 100px;
  
  margin-left: 20px;
  :first-child {
    margin-left: 0;
  }
`;

const ImageContainer = styled(Container)`
  grid-column: 1 / -1;
  flex-wrap: wrap;
`;

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

const GetInTouch = ({ ...props }) => (
  <Formik
    initialValues={{
      name: '',
      phone: '',
      mail: '',
      images: [],
      message: '',
    }}
    validationSchema={validation}
    onSubmit={(values, actions) => {
      console.log(encode(JSON.stringify(values)))
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
        }),
      })
        .then(() => {
          alert('Your message was sent!');
          actions.setSubmitting(false);
         // navigate('/');
        })
        .catch(() => {
          actions.setSubmitting(false);
          return error => alert(error);
        });
    }}
    render={({ handleSubmit, handleChange, handleBlur, values, errors, touched }) => {
      const fontSize = 3;
      let reader = undefined;

      return (
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

          <Text size={fontSize} bold="bold">Name: </Text>
          <Input size={fontSize} as="input" type="text" name='name' onChange={handleChange} onBlur={handleBlur} value={values.name} />
          {errors.name && touched.name && <ErrorMessage>{errors.name}</ErrorMessage>}

          <Text size={fontSize} bold="bold">Phone: </Text>
          <Input size={fontSize} as="input" type="text" name='phone' onChange={handleChange} onBlur={handleBlur} value={values.phone} />
          {errors.phone && touched.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}

          <Text size={fontSize} bold="bold">Email: </Text>
          <Input size={fontSize} as="input" type="text" name='mail' onChange={handleChange} onBlur={handleBlur} value={values.mail} />
          {errors.mail && touched.mail && <ErrorMessage>{errors.mail}</ErrorMessage>}

          <Field
            name="images"
            value={values.images}
            render={({ field, form }) => (
              <FileUploadComp
                {...field}
                size={fontSize}
                text="Attach Images"
                message="send us a photo of your car's interior"
                name="images"
                onBlur={handleBlur}
                value={values.images}
                onChange={e => {
                  if (e.target.files && e.target.files.length === 0) { return ; }

                  let allImages = [];
                  for (let i = 0; i < e.target.files.length; i++) {
                    let file = e.target.files[i];
                    let temp = {
                      name: file.name,
                    }
                    reader = new FileReader();
                    reader.onload = function (item) {
                      temp.data = item.target.result;
                    };
                    allImages.push(temp)
                    reader.readAsDataURL(file);
                  }
                  form.setFieldValue('images', allImages);
                }}
              />

            )}
          />
          {values.images.length > 0 && <ImageContainer flex row justify="flex-start">
            {values.images.map((imageData) => {
              return <Thumbnail key={imageData.data} src={imageData.data} />
            })}
          </ImageContainer>}
          {errors.images && touched.images && <ErrorMessage>{errors.images}</ErrorMessage>}

          <Text size={fontSize} bold="bold">Message: </Text>
          <Input size={fontSize} minHeight="5em" as="textarea" name='message' onChange={handleChange} onBlur={handleBlur} value={values.message} />
          {errors.message && touched.message && <ErrorMessage>{errors.message}</ErrorMessage>}
          
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
      )
    }
    }
  />
);

export default GetInTouch;
