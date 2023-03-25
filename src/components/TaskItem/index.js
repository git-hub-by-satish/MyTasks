import './index.css'

const TaskItem = props => {
  const {eachItem} = props
  const {userInput, taskCategory} = eachItem

  return (
    <li className="list-item">
      <p className="task-name">{userInput}</p>
      <p className="task-type">{taskCategory}</p>
    </li>
  )
}

export default TaskItem
