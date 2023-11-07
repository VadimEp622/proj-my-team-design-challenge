import { SuccessStoryPreview } from "../_lists/success-story-preview"

export function SuccessStoryList({ successStories }) {

    return (
        <section className="success-story-list flex">
            {successStories.map((successStory, index) => <SuccessStoryPreview key={index} successStory={successStory} />)}
        </section>
    )
}