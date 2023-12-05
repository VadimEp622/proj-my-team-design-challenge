export function ContactUsField({ input, meta, ...rest }) {

    const isError = !meta.active && meta.touched && !input.value ? ' error' : ''

    return (
        <section className={`contact-us-field${isError} mg-bl-ed-24px`}>
            {rest.componentType === 'input' && <input {...input} placeholder={rest.placeholder} />}
            {rest.componentType === 'textarea' && <textarea {...input} placeholder={rest.placeholder} />}
            {meta.error && meta.touched && <span className="err-msg display-block mg-in-st-14px mg-bl-st-8px italic">{meta.error}</span>}
        </section>
    )
}