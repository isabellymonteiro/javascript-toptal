export default class TaskList {
  constructor() {
    this.taskList = []
  }

  add(taskName, taskPriority) {
    if (typeof taskName !== "string" && !(taskName instanceof String)) return
  
    var priority = (!taskPriority || taskPriority < 1 || taskPriority > 5) ? 1 : taskPriority

    const lastTaskId = this.taskList.length ? this.taskList[this.taskList.length - 1].id : 0

    const newTask = {
      id: lastTaskId + 1,
      name: taskName,
      priority: priority,
      done: false
    }
    
    this.taskList.push(newTask)
  }

  remove(taskId) {
    const newTaskList = this.taskList.filter(task => task.id !== taskId)
    if (newTaskList) {
      this.taskList = newTaskList
    }   
  }

  getAll() {
    return this.taskList
  }

  getById(taskId) {
    return this.taskList.find(task => task.id === taskId)
  }

  getIf(callback) {
    return this.taskList.filter(task => callback(task))
  }

  sortByName() {
    this.taskList.sort((primaryTask, secondaryTask) => {
      return (primaryTask.name > secondaryTask.name) ? 1 : -1
    })
  }

  sortByPriority() {
    this.taskList.sort((primaryTask, secondaryTask) => {
      return (primaryTask.priority > secondaryTask.priority) ? -1 : 1
    })
  }

  printAll() {
    console.table(this.getAll())
  }
}