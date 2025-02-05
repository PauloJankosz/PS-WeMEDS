import "../styles/TodoList.css";
import Icon from "@mdi/react";
import { mdiTrashCanOutline } from "@mdi/js";

const TaskList = ({ tasks, setTasks }) => {
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
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="task-list-box">
      <h1 className="task-title">Tarefas atuais</h1>
      <div className="task-options">
        <span>Status</span>
        <span>Ação</span>
        <span className="descrição">Descrição</span>
      </div>
      <div className="task-line" />
      {tasks.map((task, index) => (
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
              {task.status === "pendente" ? "pendente" : "concluida"}
            </span>
          </button>
          <button onClick={() => deleteTask(index)} class="task-delete-icon">
            <Icon path={mdiTrashCanOutline} size={1.3} />
          </button>
          <span className="task-items-status-content">{task.text}</span>
          <div className="task-line" />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
