import React from "react";
import { Task } from "../../utils/Interface";
import TaskCard from "../TaskCard/TaskCard";
import { Container } from "./BulkDelete.styled";
import { CardContainer } from "../ListTasks/ListTasks.Styled";

interface Props {
  tasks: Task[];
  selectedTasks: string[];
  addSelectedTask: any;
  removeSelectedTask: any;
  deleteTasks: any;
}

const BulkDelete: React.FC<Props> = ({
  tasks,
  selectedTasks,
  addSelectedTask,
  removeSelectedTask,
  deleteTasks,
}) => {
  return (
    <>
      {!!tasks?.length && (
        <Container>
          <span style={{ color: "red", fontWeight: 500 }}>
            *Select all the tasks you want to delete.
          </span>
          <button
            onClick={deleteTasks}
          >{`Delete (${selectedTasks.length})`}</button>
        </Container>
      )}

      <CardContainer>
        {!!tasks?.length ? (
          tasks.map((task: Task) => {
            return (
              <TaskCard
                key={task.id}
                task={task}
                isCheckBox={true}
                addSelectedTask={addSelectedTask}
                removeSelectedTask={removeSelectedTask}
              />
            );
          })
        ) : (
          <label style={{ fontWeight: 500 }}>No tasks added yet.</label>
        )}
      </CardContainer>
    </>
  );
};

export default BulkDelete;
