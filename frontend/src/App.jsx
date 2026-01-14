import { useState } from 'react'
import Board from './components/kanban/Board'
import Modal from './components/kanban/Modal'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: "t-101",
      name: "Configurar entorno de desarrollo",
      description: "Instalar dependencias de React, configurar Vite y ESLint.",
      status: "Terminado",
      date: "2026-01-10",
      worked: 120 // minutos trabajados
    },
    {
      id: "t-102",
      name: "Diseñar arquitectura de carpetas",
      description: "Definir dónde irán los componentes, hooks y servicios.",
      status: "En proceso",
      date: "2026-01-12",
      worked: 45
    },
    {
      id: "t-103",
      name: "Crear componentes de la UI",
      description: "Desarrollar botones, inputs y tarjetas siguiendo el diseño.",
      status: "Pendiente",
      date: "2026-01-15",
      worked: 0
    },
    {
      id: "t-104",
      name: "Integración con API",
      description: "Conectar los formularios con el backend para guardar datos.",
      status: "Pendiente",
      date: "2026-01-18",
      worked: 0
    }
  ])
  const [selectedTask, setSelectedTask] = useState(null)

  const handleOpenModal = (task) => {
    console.log("¡Click recibido en App! Los datos de la tarea son:", task)
    setSelectedTask(task) // Aquí guardamos la tarea en el estado
  }

  return (
    <>
      <Board list={tasks} handleOpenModal={handleOpenModal}/>

      {selectedTask !== null && (
        <Modal
          task={selectedTask}
          onClose={() => setSelectedTask(null)}
        />
      )}


    </>
  )
}

export default App
