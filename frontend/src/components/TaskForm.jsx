import { useState } from "react"

const TaskForm = ({ handleAddTask, onClose }) => {
    const [nameTask, setNameTask] = useState("")
    const [descTask, setDescTask] = useState("")
    const [statusTask, setStatusTask] = useState("Pendiente")

    const handleSubmit = (e) => {
        e.preventDefault()

        // Creamos el objeto con los datos
        const newTask = {
            id: Date.now(),
            name: nameTask,
            description: descTask,
            status: statusTask,
            // 2. Añadimos campos que usa el resto de tu app (date y worked)
            date: new Date().toLocaleDateString(),
            worked: 0
        }

        // "Subimos" el objeto al padre llamando a la función de la prop
        handleAddTask(newTask)

        // 3. Limpiamos los inputs (ahora funcionará porque son controlados)
        setNameTask("")
        setDescTask("")
        setStatusTask("Pendiente")
    }

    return (
        <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4"
            onClick={onClose}
        >
            <form
                onSubmit={handleSubmit}
                onClick={(e) => e.stopPropagation()}
                className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl shadow-2xl flex flex-col gap-5 w-full max-w-md animate-in fade-in zoom-in duration-200 relative"
            >
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
                >
                    <span className="material-symbols-outlined">close</span>
                </button>

                <div className="space-y-1">
                    <h2 className="text-2xl font-bold text-white">Nueva Tarea</h2>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Título de la Tarea</label>
                    <input
                        type="text"
                        placeholder="Ej: Configurar base de datos"
                        value={nameTask} // <-- Input controlado
                        onChange={(e) => setNameTask(e.target.value)}
                        className="bg-zinc-800 text-white p-3 rounded-xl border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        required
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Descripción</label>
                    <textarea
                        placeholder="Detalla los pasos a seguir..."
                        value={descTask} // <-- Input controlado
                        onChange={(e) => setDescTask(e.target.value)}
                        className="bg-zinc-800 text-white p-3 rounded-xl border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all min-h-[100px] resize-none"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Estado Inicial</label>
                    <div className="relative">
                        <select
                            value={statusTask} // <-- FIX: Ahora usamos statusTask, no status
                            onChange={(e) => setStatusTask(e.target.value)}
                            className="w-full bg-zinc-800 text-white p-3 rounded-xl border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer"
                        >
                            <option value="Pendiente">Pendiente</option>
                            <option value="En proceso">En proceso</option>
                            <option value="Terminado">Terminado</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">
                            <span className="material-symbols-outlined">keyboard_arrow_down</span>
                        </div>
                    </div>
                </div>
                <button
                    type="submit"
                    className="mt-2 bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-xl font-bold transition-all active:scale-95 shadow-lg shadow-blue-900/40 flex justify-center items-center gap-2"
                >
                    <span className="material-symbols-outlined text-sm">add</span>
                    Crear Tarea
                </button>
            </form>
        </div>
    )
}

export default TaskForm