import TaskColumn from "./TaskColumn"

const Board = ({ list, handleOpenModal }) => {

    return (
        <div className="flex gap-4 p-4">
            <TaskColumn
                title="Pendiente"
                tasks={list.filter(task => task.status === "Pendiente")}
                onTaskClick={handleOpenModal}
            />
            <TaskColumn
                title="En proceso"
                tasks={list.filter(task => task.status === "En proceso")}
                onTaskClick={handleOpenModal}
            />
            <TaskColumn
                title="Terminado"
                tasks={list.filter(task => task.status === "Terminado")}
                onTaskClick={handleOpenModal}
            />
        </div>
    )

}

export default Board