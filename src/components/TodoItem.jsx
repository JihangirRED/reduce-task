import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const TodoItem = ({ name, email, id }) => {
  return (
    <div>
      <h3>{name}</h3>
      <h4>{email}</h4>
      <Link to={`/details/${id}`}>
        <Button>Details</Button>
      </Link>
    </div>
  );
};

export default TodoItem;
