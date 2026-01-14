const TaskCard = ({ name, status, date }) => {

    return (
        <div>
            <div>{name}</div>
            <div>{status}</div>
            <div>{date}</div>
        </div>
    )
}

export default TaskCard