const TaskCard = ({ task, onClickCard }) => {

    return (
        <div
            className="cursor-pointer rounded-lg bg-zinc-900 p-2"
            onClick={() => onClickCard(task)} // ¡Aquí se dispara el aviso hacia arriba!
        >
            <div>{task.name}</div>
            <div>{task.status}</div>
            <div>{task.date}</div>
        </div>
    )
}

export default TaskCard