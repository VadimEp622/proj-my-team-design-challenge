import { askUsItems } from "../../../services/data.service"
import { AskUsPreview } from "./ask-us-preview"
export function AskUsList() {

    return (
        <section className="ask-us-list">
            {
                askUsItems.map((askUsItem, index) => <AskUsPreview key={index} askUsItem={askUsItem} />)
            }
        </section>
    )
}