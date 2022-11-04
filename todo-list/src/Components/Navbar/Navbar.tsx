import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, List } from "./Navbar.Styled";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <List>
        <span
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/list-tasks")}
        >
          Home
        </span>
        <span
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/create-task")}
        >
          Create Task
        </span>
        <span
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/bulk-Delete")}
        >
          Bulk Delete
        </span>
      </List>
    </Container>
  );
};

export default Navbar;
