import React from 'react'
import { CustomField } from './CustomField'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { render, screen, act } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('CustomField', () => {
  test('renders a label', () => {
    render(
      <Formik
        initialValues={{
          title: ''
        }}
        validationSchema={Yup.object({
          title: Yup
            .string()
            .required(),
        })}>
        <Form>
          <CustomField label="Title" name="title" />
        </Form>
      </Formik>
    )

    const label = screen.getByText('Title')
    expect(label).toBeInTheDocument()
  })

  test('renders an input field', () => {
    render(
      <Formik initialValues={{}}>
        <Form>
          <CustomField label="Title" name="title" />
        </Form>
      </Formik>
    )

    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
  })

  test('disables the input field if noteId and !edit', () => {
    render(
      <Formik initialValues={{}}>
        <Form>
          <CustomField label="Title" name="title" edit={false} noteId={1} />
        </Form>
      </Formik>
    )

    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()
  })

  test('displays an error message', async () => {
    render(
      <Formik initialValues={{
        title: ''
      }}
        validationSchema={Yup.object({
          title: Yup
            .string()
            .required('Title is required'),
        })}
        onSubmit={() => { }}>
        {({ isSubmitting }) => (
          <Form>
            <CustomField label="Title" name="title" id='title' />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    )

    await act(async () => {
      const submitButton = screen.getByRole('button', { name: 'Submit' })
      submitButton.click()
    })

    const errorMessage = screen.getByText('Title is required')
    expect(errorMessage).toBeInTheDocument()
  })

  test('applies a custom CSS class', () => {
    render(
      <Formik initialValues={{}}>
        <Form>
          <CustomField label="Title" name="title" className="custom-class" />
        </Form>
      </Formik>
    )

    const input = screen.getByRole('textbox')
    expect(input).toHaveClass('form-note__field', 'custom-class')
  })
})