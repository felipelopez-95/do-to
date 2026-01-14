import TaskCard from './TaskCard'

const TaskColumn = ({ title, tasks }) =>{

    const statusColor = {
        "Pendiente": "bg-gray-400",
        "En proceso": "bg-blue-400",
        "Terminado": "bg-red-400"
    }

   return (
    <div className={`${statusColor[title]}`}>
        <h1>{title}</h1>
        <div>
            {tasks.map(task => (
                <TaskCard
                    key={task.id}
                    name={task.name}
                    status={task.status}
                    date={task.date}
                />
            ))}
        </div>
    </div>
   )
}

export default TaskColumn