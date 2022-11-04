import React from "react";
import { Task } from "../../utils/Interface";
import { Card, CardContainer } from "./TaskCard.styled";

interface Props {
  task: Task;
  isCheckBox: boolean;
  addSelectedTask?: any;
  removeSelectedTask?: any;
  selectedTasks?: string[];
}

const TaskCard: React.FC<Props> = ({
  task,
  isCheckBox,
  addSelectedTask,
  removeSelectedTask,
  selectedTasks,
}) => {
  const handleCheckClick: any = (e: any) => {
    const { checked } = e.target;
    if (!!checked) addSelectedTask(task.id);
    else removeSelectedTask(task.id);
  };

  return (
    <CardContainer>
      <Card>
        {task.title}
        {!!isCheckBox && (
          <input
            style={{ marginTop: "3em" }}
            type="checkbox"
            checked={!!selectedTasks?.includes(task.id)}
            onChange={handleCheckClick}
          />
        )}
      </Card>
    </CardContainer>
  );
};

export default TaskCard;
