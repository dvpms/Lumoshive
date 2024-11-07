import React, { useContext } from "react";
import { DataContext } from "../App";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ActivityList = ({ handleDelete }) => {
  const { data } = useContext(DataContext);

  const handleConfirmDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete(id);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  return (
    <ul className="list-group">
      {data.map((activity) => (
        <li
          className="list-group-item d-flex justify-content-between align-items-center"
          key={activity.id}
        >
          <span>{activity.title}</span>
          <div>
            <Link to={`/activity/${activity.id}`} className="text-decoration-none">
              <button className="btn btn-secondary btn-sm mx-1">Details</button>
            </Link>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleConfirmDelete(activity.id)}
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

