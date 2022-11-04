import React from "react";
import { Routes, Route, Navigate } from "react-router";
import ListTasks from "../ListTasks/ListTasks";
import CreateTask from "../CreateTask/CreateTask";
import BulkDelete from "../BulkDelete/BulkDelete";
import { Task } from "../../utils/Interface";

interface Props {
  tasks: Task[];
  setTasks: any;
  selectedTasks: string[];
  addSelectedTask: any;
  removeSelectedTask: any;
  deleteTasks: any;
}

const Views: React.FC<Props> = ({
  tasks,
  setTasks,
  selectedTasks,
  addSelectedTask,
  removeSelectedTask,
  deleteTasks,
}) => {
  return (
    <Routes>
      <Route path="/list-tasks" element={<ListTasks tasks={tasks} />} />
      <Route
        path="/create-task"
        element={<CreateTask setTasks={setTasks} tasks={tasks} />}
      />
      <Route
        path="/bulk-delete"
        element={
          <BulkDelete
            tasks={tasks}
            selectedTasks={selectedTasks}
            addSelectedTask={addSelectedTask}
            removeSelectedTask={removeSelectedTask}
            deleteTasks={deleteTasks}
          />
        }
      />
      <Route path="*" element={<Navigate to="/list-tasks" replace />} />
    </Routes>
  );
};

export default Views;
