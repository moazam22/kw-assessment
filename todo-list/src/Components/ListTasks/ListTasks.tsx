import React from "react";
import { Task } from "../../utils/Interface";
import TaskCard from "../TaskCard/TaskCard";
import { CardContainer } from "./ListTasks.Styled";

interface Props {
  tasks: Task[];
}

const ListTasks: React.FC<Props> = ({ tasks }) => {
  return (
    <CardContainer>
      {!!tasks?.length ? (
        tasks.map((task: Task) => {
          return <TaskCard key={task.id} task={task} isCheckBox={false} />;
        })
      ) : (
        <label style={{ fontWeight: 500 }}>No tasks added yet.</label>
      )}
    </CardContainer>
  );
};

export default ListTasks;
