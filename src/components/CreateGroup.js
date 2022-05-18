import React from 'react'
import { Container, FormControl, Input, Button, Spacer, HStack } from '@chakra-ui/react'
import { Formik } from 'formik'

const CreateGroup = () => {
  // return (
  //   <Container centerContent>
  //     <FormControl isRequired>
  //         <Input placeholder="Group Name" mb="10px" />
  //         <Input placeholder="Description" mb="10px" />
  //         <HStack>
  //           <Button className="left">Cancel</Button>
  //           <Spacer />
  //           <Button className="right">Save</Button>
  //         </HStack>
  //     </FormControl>
  //   </Container>
  // )

  return (
    <Formik
      initialValues={{ name: 'Sasuke' }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
        }, 1000)
      }}
    >
      {(props) => (
        <Formik>
          {/* <Field name='name' validate={validateName}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel htmlFor='name'>First name</FormLabel>
                <Input {...field} id='name' placeholder='name' />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            mt={4}
            colorScheme='teal'
            isLoading={props.isSubmitting}
            type='submit'
          >
            Submit
          </Button> */}
        </Formik>
      )}
    </Formik>
  )
}

export default CreateGroup