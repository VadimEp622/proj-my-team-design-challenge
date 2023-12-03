import { Form, Field } from "react-final-form"
import { ContactUsField } from "./contact-us-field"

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
    await sleep(300)
    window.alert(JSON.stringify(values, 0, 2))
}

const required = value => (value ? undefined : 'This field is required')

export function ContactUsForm() {


    return (
        <Form
            onSubmit={onSubmit}
            render={({ submitError, handleSubmit, form, submitting, pristine, values }) => (
                <form className="contact-us-form" onSubmit={handleSubmit}>
                    <Field
                        name="name"
                        type="text"
                        validate={required}
                        component={ContactUsField}
                        placeholder="Name"
                    />
                    <Field
                        name="email"
                        type="text"
                        validate={required}
                        component={ContactUsField}
                        placeholder="Email Address"
                    />

                    <pre>{JSON.stringify(values, 0, 2)}</pre>
                </form>
            )}
        />
    )
}