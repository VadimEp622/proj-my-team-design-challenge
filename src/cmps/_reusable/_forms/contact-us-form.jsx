import { Form, Field } from "react-final-form"
import { ContactUsField } from "./contact-us-field"

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
    await sleep(300)
    window.alert(JSON.stringify(values, 0, 2))
}

const required = value => (value ? undefined : 'This field is required')

export function ContactUsForm() {

    const formFields = [
        {
            name: 'name',
            type: 'text',
            validate: required,
            component: ContactUsField,
            componentType: 'input',
            placeholder: 'Name'
        },
        {
            name: 'email',
            type: 'text',
            validate: required,
            component: ContactUsField,
            componentType: 'input',
            placeholder: 'Email Address'
        },
        {
            name: 'company_name',
            type: 'text',
            validate: required,
            component: ContactUsField,
            componentType: 'input',
            placeholder: 'Company Name'
        },
        {
            name: 'title',
            type: 'text',
            validate: required,
            component: ContactUsField,
            componentType: 'input',
            placeholder: 'Title'
        },
        {
            name: 'message',
            validate: required,
            component: ContactUsField,
            componentType: 'textarea',
            placeholder: 'Message'
        },
    ]


    // btn
    // fs-18 lh-28 fw-600

    return (
        <Form
            onSubmit={onSubmit}
            render={({ submitError, handleSubmit, form, submitting, pristine, values }) => (
                <form className="contact-us-form" onSubmit={handleSubmit}>
                    {formFields.map((field, idx) => <Field key={idx} {...field} />)}
                    <button className="submit-btn" disabled={pristine}>
                        <p className="typography-4 font-weight-600 pd-bl-10px pd-in-32px">submit</p>
                    </button>
                    {/* <pre style={{ maxWidth: '500px', overflowX: 'auto' }}>{JSON.stringify(values, 0, 2)}</pre> */}
                </form>
            )}
        />
    )
}