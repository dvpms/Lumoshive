import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ActivityDetail = ({ data, loading, error }) => {
  const { id } = useParams(); // Mendapatkan id dari URL
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  // Mengambil data post yang sesuai dengan id
  useEffect(() => {
    if (data) {
      const foundPost = data.find((p) => p.id === id);
      setPost(foundPost);
    }
  }, [id, data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!post) return <p>Post not found</p>;

  console.log(post)

  return (
    <div className="mt-4">
      <h2 className="text-primary">{post.title}</h2>
      <p className="text-muted">{post.description}</p>
      <div className="card border-primary my-4">
        <div className="card-body">
          <p className="card-text">Time Spent: 0 seconds</p>
          <div className="btn-group">
            <button className="btn btn-outline-success">
              <i className="bi bi-play-fill"></i> Start
            </button>
            <button className="btn btn-outline-warning">
              <i className="bi bi-pause-fill"></i> Stop
            </button>
            <button className="btn btn-outline-danger">
              <i className="bi bi-arrow-counterclockwise"></i> Reset
            </button>
          </div>
        </div>
      </div>
      <button
        className="btn btn-secondary mt-3"
        onClick={() => navigate(-1)} // Menggunakan navigate untuk kembali
      >
        <i className="bi bi-arrow-left"></i> Back to List
      </button>
    </div>
  );
};

export default ActivityDetail;
