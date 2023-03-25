import './index.css'

const TagItem = props => {
  const {toggleTagItem, eachTag, selectedTagId} = props
  const onClickTag = () => {
    toggleTagItem(eachTag.optionId)
    console.log(eachTag.optionId)
  }

  const btnClassName = selectedTagId === eachTag.optionId ? 'active' : ''

  return (
    <li>
      <button
        className={`btn ${btnClassName}`}
        type="button"
        onClick={onClickTag}
      >
        {eachTag.displayText}
      </button>
    </li>
  )
}

export default TagItem
