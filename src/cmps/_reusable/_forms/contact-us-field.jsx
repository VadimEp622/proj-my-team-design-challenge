export function ContactUsField({ input, meta, ...rest }) {

    const isError = !meta.active && meta.touched && !input.value ? ' error' : ''

    return (
        <section className={`contact-us-field${isError} mg-bl-ed-24px`}>
            <input {...input} type="text" placeholder={rest.placeholder} />
            {meta.error && meta.touched && <span className="display-block mg-in-st-14px mg-bl-st-8px italic">{meta.error}</span>}
        </section>
    )
}