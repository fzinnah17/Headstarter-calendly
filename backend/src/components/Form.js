import React, { useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import { Context } from "../Context";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function Form() {

  const { date, task, setTask, saveTask, setDate, deleteTask } = useContext(Context);

  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (task) {
      setName(task.name || "");
    }
  }, [task]);

  const closeModal = () => {
    setTask(null);
    setError(false);
  };

  const _saveTask = () => {

    if (name.trim().length < 1) {
      setError(true);
      return;
    }
    setError(false);

    saveTask({
      ...task,
      date: date,
      name: name,

    });
    setDate(date);
    closeModal();

  };

  const _deleteTask = () => {
    deleteTask(task.id);
    setDate(date);
    closeModal();
    setError(false);
  }

  return (
    <Modal
      isOpen={task != null}
      onRequestClose={closeModal}
      style={customStyles}
      ariaHideApp={false}
      contentLabel="Task Form"
    >
      <div className="task-form">

        <label>Add Task</label>
        <input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Task"
        />
        <div>
          <button className="button button-red" onClick={closeModal}>
            Cancel
          </button>
          {task && task.id ? (
            <button
              className="button button-orange"
              onClick={_deleteTask}
            >
              Delete
            </button>
          ) : null}
          <button
            className="button button-green"
            onClick={_saveTask}
          >
            Save
          </button>
        </div>
        {error ? <p className="error">Please give a name to the event!!!</p> : null}
      </div>
    </Modal>
  );
}

export default Form;