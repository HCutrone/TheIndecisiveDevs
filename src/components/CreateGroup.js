import React from 'react'
import { useState } from 'react'
import { Container, FormControl, FormLabel, FormErrorMessage, Input, Button, ButtonGroup, Spacer, Flex, HStack, Radio, RadioGroup, Select } from '@chakra-ui/react'
import { Formik, Field, Form } from 'formik'
import api from '../api'

const CreateGroup = ({ handleCreateGroup }) => {
  function validateName(value) {
    if (!value) {
      return 'Name is required'
    }
  }

  function validateDesc(value) {
    if (!value) {
      return 'Description is required'
    }
  }

  function validateRadio(value) {
    if (!value) {
      return 'Length is required'
    }
  }

  function validateDate(value) {
    if (!value) {
      return 'Start date is required'
    }
  }

  return (
    <Formik
      initialValues={{ name: '', description: '', sessionLength: '', startDate: ''}}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          // alert(JSON.stringify(values), null, 2)
          console.log("Submitting group:", values)
          handleCreateGroup(values)
          actions.setSubmitting(false)
        }, 1000)
      }}
    >
      {(props) => (
        <Form>
            <Field name='name' validate={validateName}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel htmlFor='name'>Group Name</FormLabel>
                  <Input {...field} id='name' placeholder='The Indecisive Devs' />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name='description' validate={validateDesc}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.description && form.touched.description} mt={2}>
                  <FormLabel htmlFor='description'>Short Description</FormLabel>
                  <Input {...field} id='description' placeholder='We made this app!' />
                  <FormErrorMessage>{form.errors.description}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name='sessionLength' validate={validateRadio}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.sessionLength && form.touched.sessionLength} mt={2}>
                  <FormLabel htmlFor='sessionLength'>How long to read each story?</FormLabel>
                  <RadioGroup {...field}>
                    <HStack>
                      <Radio {...field} value='1'>One Week</Radio>
                      <Radio {...field} value='2'>Two Weeks</Radio>
                      <Radio {...field} value='3'>Three Weeks</Radio>
                    </HStack>
                  </RadioGroup>
                  <FormErrorMessage>{form.errors.sessionLength}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name='startDate' validate={validateDate}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.startDate && form.touched.startDate} mt={2}>
                  <FormLabel htmlFor='startDate'>When will your sessions start?</FormLabel>
                    <Select {...field} placeholder='Choose a day'>
                      <option value='Monday'>Monday</option>
                      <option value='Tuesday'>Tuesday</option>
                      <option value='Wednesday'>Wednesday</option>
                      <option value='Thursday'>Thursday</option>
                      <option value='Friday'>Friday</option>
                      <option value='Saturday'>Saturday</option>
                      <option value='Sunday'>Sunday</option>
                    </Select>
                  <FormErrorMessage>{form.errors.startDate}</FormErrorMessage>
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

export default CreateGroup