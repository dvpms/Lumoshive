import React, {useContext} from "react";
import {DataContext} from "../App"

const ActivityList = () => {
  const {data} = useContext(DataContext);
  return (
    <ul className="list-group">
    {data.map((activity) => (
      <li className="list-group-item d-flex justify-content-between align-items-center" key={activity.id}>
        <span>{activity.title}</span>
        <div>
          <button className="btn btn-secondary btn-sm mx-1">Details</button>
          <button className="btn btn-danger btn-sm">Delete</button>
        </div>
      </li>
    ))}
    </ul>      
  );
};

export default ActivityList;
