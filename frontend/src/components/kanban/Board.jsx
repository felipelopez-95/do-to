import TaskColumn from "./TaskColumn"

const Board = ({ list }) => {

    return (
        <div className="flex gap-4 p-4">
            <TaskColumn
                title="Pendiente"
                tasks={list.filter(task => task.status === "Pendiente")}
            />
            <TaskColumn
                title="En proceso"
                tasks={list.filter(task => task.status === "En proceso")}
            />
            <TaskColumn
                title="Terminado"
                tasks={list.filter(task => task.status === "Terminado")}
            />
        </div>
    )

}

export default Board