import TaskColumn from "./TaskColumn"

const Board = ({ list, handleOpenModal }) => {

    return (
        <div className="flex flex-nowrap overflow-x-auto snap-x gap-4 m-2 lg:m-4">
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