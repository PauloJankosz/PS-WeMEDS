import "../styles/TodoList.css";
import Icon from "@mdi/react";
import { mdiTrashCanOutline } from "@mdi/js";
import { useState } from "react";

const TaskList = ({ tasks, setTasks }) => {
  const [filter, setFilter] = useState("todos");
  const toggleStatus = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index
          ? {
              ...task,
              status: task.status === "pendente" ? "concluída" : "pendente",
            }
          : task
      )
    );
  };

  const deleteTask = (index) => {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja excluir a tarefa selecionada?"
    );
    if (confirmDelete) {
      setTasks(tasks.filter((_, i) => i !== index));
    }
  };

  const toggleFilter = () => {
    setFilter((prevFilter) => {
      if (prevFilter === "todos") return "pendente";
      if (prevFilter === "pendente") return "concluída";
      return "todos";
    });
  };

  const filteredTasks = tasks.filter((task) =>
    filter === "todos" ? true : task.status === filter
  );

  return (
    <div className="task-list-box">
      <div className="title-container">
        <h1 className="task-title">Tarefas atuais selecionadas</h1>
        <button onClick={toggleFilter} className="task-filter-button">
          <span className="task-filter-text">
            {filter === "todos"
              ? "Todas"
              : filter === "pendente"
              ? "Pendentes"
              : "Concluídas"}
          </span>
        </button>
      </div>
      <div className="task-line" />
      <div className="task-options">
        <span>Status</span>
        <span>Ação</span>
        <span className="descrição">Descrição</span>
      </div>
      <div className="task-line" />
      {filteredTasks.length > 0 &&
        filteredTasks.map((task, index) => (
          <div key={index} className="task-items-box">
            <button
              onClick={() => toggleStatus(index)}
              className={`task-status-button ${
                task.status === "pendente" ? "pendente" : "concluida"
              }`}
            >
              <span
                className={`task-status-text ${
                  task.status === "pendente" ? "pendente" : "concluida"
                }`}
              >
                {task.status}
              </span>
            </button>
            <button
              onClick={() => deleteTask(index)}
              className="task-delete-icon"
            >
              <Icon path={mdiTrashCanOutline} size={1.3} />
            </button>
            <div className="task-items-status-block">
              <span className="task-items-status-content">{task.text}</span>
            </div>
            <div className="task-line" />
          </div>
        ))}
    </div>
  );
};

export default TaskList;
