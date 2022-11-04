import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Task } from "../../utils/Interface";
import { v4 as uuid } from "uuid";
import { Container } from "./CreateTask.styled";

interface Props {
  setTasks: any;
  tasks: Task[];
}

const CreateTask: React.FC<Props> = ({ setTasks, tasks }) => {
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!!error && !!name?.length) {
      setError(false);
    }
  }, [error, name]);

  const handleCreateTask: any = () => {
    if (!!name?.length) {
      const id = uuid();
      setTasks({ id, title: name });
      navigate("/list-tasks");
    } else {
      setError(true);
    }
  };

  return (
    <Container>
      <h1>CreateTaks</h1>
      <div>
        <label style={{ fontWeight: 500 }}>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          style={{ marginLeft: "1em", marginBottom: "10px" }}
          onClick={handleCreateTask}
        >
          Create Task
        </button>
      </div>
      {!!error && <label style={{ color: "red" }}> *Name is required</label>}
    </Container>
  );
};

export default CreateTask;
