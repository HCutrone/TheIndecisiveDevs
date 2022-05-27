import React from 'react'
import { Container, FormControl, FormLabel, FormErrorMessage, Input, Button, Spacer, HStack } from '@chakra-ui/react'
import { Formik, Field, Form } from 'formik'
import api from '../api'

const JoinGroup = ({ handleJoinGroup }) => {
  function validateCode(value) {
    if (!value) {
      return 'Code is required'
    }
  }

  return (
    <Formik
      initialValues = {{ name: '' }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          handleJoinGroup(values);
          actions.setSubmitting(false)
        }, 1000)
      }}
    >
      {(props) => (
        <Form>
            <Field name='name' validate={validateCode}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <Input {...field} id='name' placeholder='abcd1234' />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              float='right'
              mt={4}
              colorScheme='teal'
              isLoading={props.isSubmitting}
              type='submit'
            >
              Submit
            </Button>
        </Form>)}
    </Formik>
  )
}

export default JoinGroup