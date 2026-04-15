import { TASK_UI_TEXT } from "../constants/task-ui.constants"
import { HTML_TAGS } from "../../../shared/constants/html-tags.constants"

export function TaskList({ tasks }) {
  const SectionTag = HTML_TAGS.SECTION
  const TitleTag = HTML_TAGS.H3
  const ListTag = HTML_TAGS.LI
  const ParagraphTag = HTML_TAGS.P
  const UlTag = HTML_TAGS.UL

  return (
    <SectionTag>
      <TitleTag>{TASK_UI_TEXT.LIST_TITLE}</TitleTag>

      {tasks.length === 0 ? (
        <ParagraphTag>{TASK_UI_TEXT.EMPTY_MESSAGE}</ParagraphTag>
      ) : (
        <UlTag>
          {tasks.map((task) => (
            <ListTag key={task.id}>{task.title}</ListTag>
          ))}
        </UlTag>
      )}
    </SectionTag>
  )
}