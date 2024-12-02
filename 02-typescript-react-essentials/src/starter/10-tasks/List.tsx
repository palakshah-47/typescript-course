import React from "react";
import { Task } from "./types";

type ListProps = {
  tasks: Task[];
  toggleTask: ({ id }: { id: string }) => void;
};

export default function List({ tasks, toggleTask }: ListProps) {
  return (
    <ul className="list">
      {tasks.map((task) => {
        return (
          <li key={task.id}>
            <p className="task-text">{task.description}</p>
            <input
              type="checkbox"
              checked={task.isCompleted}
                    onChange={() => toggleTask({ id: task.id })}
            ></input>
          </li>
        );
      })}
    </ul>
  );
}
