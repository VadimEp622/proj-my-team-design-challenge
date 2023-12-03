import { Form, Field } from "react-final-form"

export function FormContactUs() {

    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

    async function onSubmit(values) {
        await sleep(300)
        window.alert(JSON.stringify(values, 0, 2))
    }

    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form className="contact-form" onSubmit={handleSubmit}>
                    <section className="field-item">
                        <label className="display-block">Name</label>
                        <Field
                            className="width-100-percent"
                            name={`name`}
                            component="input"
                            placeholder={`name`}
                        />
                    </section>
                </form>
            )}
        />
    )
}