import "../styles/TodoList.css";
import Icon from "@mdi/react";
import { mdiTrashCanOutline } from "@mdi/js";
import { useState } from "react";

const TaskList = ({ tasks, setTasks }) => {
  const [filter, setFilter] = useState("all");

  const toggleStatus = (index) => {
    setTasks(
      tasks.map((task, i) => {
        if (i === index) {
          return {
            ...task,
            status: task.status === "pendente" ? "concluída" : "pendente",
          };
        } else {
          return task;
        }
      })
    );
  };

  const deleteTask = (index) => {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja excluir a tarefa selecionada?"
    );
    if (confirmDelete) {
      //não uso o task dentro da função filter, porém preciso passar 2 paramêtros na função
      setTasks(tasks.filter((task, i) => i !== index));
    }
  };

  // função para filtrar o status que o usuário quer que seja exibido, retorno ao encontrar a string selecionada
  const toggleFilter = () => {
    setFilter((prevFilter) => {
      if (prevFilter === "all") return "pendente";
      if (prevFilter === "pendente") return "concluída";
      return "all";
    });
  };

  const filteredTasks = tasks.filter((task) =>
    filter === "all" ? true : task.status === filter
  );

  return (
    <div className="task-list-box">
      <div className="task-title-container">
        <h1 className="task-title">Tarefas atuais selecionadas</h1>
        <button onClick={toggleFilter} className="task-filter-button">
          <span className="task-filter-text">
            {(() => {
              if (filter === "all") {
                return "Todas";
              } else if (filter === "pendente") {
                return "Pendentes";
              } else {
                return "Concluídas";
              }
            })()}
          </span>
        </button>
        <div className="task-line" />
      </div>
      <div className="task-options">
        <span>Status</span>
        <span>Ação</span>
        <span>Descrição</span>
        <div className="task-items-line" />
      </div>
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
            <div className="task-items-line" />
          </div>
        ))}
    </div>
  );
};

export default TaskList;
