import TaskCard from './TaskCard'

const TaskColumn = ({ title, tasks, onTaskClick }) =>{

    const statusColor = {
        "Pendiente": "bg-gray-400",
        "En proceso": "bg-blue-400",
        "Terminado": "bg-red-400"
    }

    const statusIcon = {
        "Pendiente": "radio_button_unchecked",
        "En proceso": "arrow_circle_right",
        "Terminado": "check_circle"
    }

   return (
    <div className={`shrink-0 rounded-lg p-3 ${statusColor[title]} min-w-64 max-w-64`}>

        <h3>
            <span className="material-symbols-outlined pb-3">
                {statusIcon[title]}
            </span>
            {title}
        </h3>
        <div className="flex flex-col gap-2">
            {tasks.map(task => (
                <TaskCard
                    key={task.id}
                    task={task}
                    onClickCard={onTaskClick} // Se la pasamos a la Card
                />
            ))}
        </div>
    </div>
   )
}

export default TaskColumn