import React, { useContext } from "react";
import { DataContext } from "../App";
import { Link } from "react-router-dom";

const ActivityList = ({ handleDelete }) => {
  const { data } = useContext(DataContext);

  return (
    <ul className="list-group">
      {data.map((activity) => (
        <li
          className="list-group-item d-flex justify-content-between align-items-center"
          key={activity.id}
        >
          <span>{activity.title}</span>
          <div>
            <Link to={`/${activity.id}`} className="text-decoration-none">
              <button className="btn btn-secondary btn-sm mx-1">Details</button>
            </Link>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleDelete(activity.id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ActivityList;
