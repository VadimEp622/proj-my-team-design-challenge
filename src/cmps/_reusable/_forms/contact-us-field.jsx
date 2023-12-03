export function ContactUsField({ input, meta, ...rest }) {

    return (
        <section className={`contact-us-field${!meta.active && meta.touched && !input.value ? ' error' : ''}`}>
            <input {...input} type="text" placeholder={rest.placeholder} />
            {meta.error && meta.touched && <span>{meta.error}</span>}
        </section>
    )
}