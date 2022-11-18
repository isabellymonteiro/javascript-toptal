import TaskList from "./taskList.js"

const isabellyTaskList = new TaskList()

const newString = new String("My 2nd task")

console.group("Isabelly's TaskList instance:")
isabellyTaskList.add("My 1st task", 3)
isabellyTaskList.add(newString, 2)
isabellyTaskList.add("Another task", 4)
console.table(isabellyTaskList.getAll())
console.log(isabellyTaskList.getById(1))
isabellyTaskList.remove(2)
isabellyTaskList.add("Finish this homework", 5)
isabellyTaskList.sortByPriority()
isabellyTaskList.printAll()
console.table(isabellyTaskList.getIf(function(task) {
  return task.name.charAt(0) === 'A'
}))
console.groupEnd()

// another instance
const personTaskList = new TaskList()
console.group("other person's TaskList instance:")
personTaskList.add("Sleep", 5)
personTaskList.add("Eat", 3)
personTaskList.printAll()
personTaskList.sortByName()
personTaskList.remove(1)
personTaskList.printAll()
console.groupEnd()
