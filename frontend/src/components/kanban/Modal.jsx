const Modal = ({ task, onClose }) => {
  // Si por algún error 'task' es null, no renderizamos nada
  if (!task) return null

  return (
    <div
      className="fixed inset-0 bg-black/60 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg max-w-md w-full shadow-2xl"
        onClick={(e) => e.stopPropagation()} // <-- ¡ESTO ES LA CLAVE!
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl text-gray-600 font-bold">{task.name}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-black">
             ✕
          </button>
        </div>

        <p className="text-gray-600 mb-2"><strong>Descripción:</strong> {task.description}</p>
        <p className="text-gray-600 mb-2"><strong>Fecha:</strong> {task.date}</p>
        <p className="text-gray-600"><strong>Tiempo trabajado:</strong> {task.worked}</p>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal