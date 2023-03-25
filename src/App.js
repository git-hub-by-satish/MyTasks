import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TaskItem from './components/TaskItem'
import TagItem from './components/TagItem'
import './App.css'

// These are the lists used in the application. You can move them to any component needed.

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

// Replace your code here
class App extends Component {
  state = {
    userInput: '',
    taskCategory: tagsList[0].optionId,
    tasksList: [],
    selectedTagId: '',
  }

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  onChangeSelect = event => {
    this.setState({taskCategory: event.target.value})
  }

  submitForm = event => {
    event.preventDefault()
    const {userInput, taskCategory, tasksList} = this.state
    const taskItem = {
      userInput,
      taskCategory,
      id: uuidv4(),
    }
    console.log(userInput, taskCategory)
    this.setState({
      tasksList: [...tasksList, taskItem],
      userInput: '',
      taskCategory: tagsList[0].optionId,
    })
  }

  toggleTagItem = id => {
    const {selectedTagId} = this.state
    if (id === selectedTagId) {
      this.setState({selectedTagId: ''})
    } else {
      this.setState({selectedTagId: id})
    }
  }

  renderTaskForm = () => {
    const {userInput, taskCategory} = this.state

    return (
      <form onSubmit={this.submitForm} className="form">
        <h1 className="form-heading">Create a task!</h1>
        <div className="input-box">
          <label className="label" htmlFor="text">
            Task
          </label>
          <input
            onChange={this.onChangeUserInput}
            className="input"
            id="text"
            placeholder="Enter the task here"
            value={userInput}
          />
        </div>
        <div className="input-box">
          <label className="label" htmlFor="category">
            Tags
          </label>
          <select
            onChange={this.onChangeSelect}
            className="input"
            id="category"
            value={taskCategory}
          >
            {tagsList.map(eachItem => (
              <option value={eachItem.optionId}>{eachItem.displayText}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="form-btn">
          Add Task
        </button>
      </form>
    )
  }

  renderTasksList = () => {
    const {tasksList, selectedTagId} = this.state
    console.log(tasksList)
    const filteredTasks = tasksList.filter(eachTask =>
      eachTask.taskCategory.includes(selectedTagId),
    )
    return tasksList.length === 0 ? (
      <div className="empty">
        <p className="tags-heading">No Tasks Added Yet</p>
      </div>
    ) : (
      <ul>
        {filteredTasks.map(eachItem => (
          <TaskItem
            key={eachItem.optionId}
            eachItem={eachItem}
            selectedTagId={selectedTagId}
          />
        ))}
      </ul>
    )
  }

  renderTasksListContainer = () => {
    const {selectedTagId} = this.state

    return (
      <div className="right">
        <h1 className="tags-heading">Tags</h1>
        <ul className="tags-list">
          {tagsList.map(eachTag => (
            <TagItem
              key={eachTag.optionId}
              eachTag={eachTag}
              selectedTagId={selectedTagId}
              toggleTagItem={this.toggleTagItem}
            />
          ))}
        </ul>
        <h1 className="tasks-list-heading">Tasks</h1>
        {this.renderTasksList()}
      </div>
    )
  }

  render() {
    return (
      <div className="app">
        {this.renderTaskForm()}
        {this.renderTasksListContainer()}
      </div>
    )
  }
}

export default App
