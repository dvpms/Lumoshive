import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import parse from "html-react-parser";

const BlogDetail = ({ posts, loading, error }) => {
  const { id } = useParams(); // Mendapatkan id dari URL
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  // Mengambil data post yang sesuai dengan id
  useEffect(() => {
    if (posts) {
      const foundPost = posts.find((p) => p.id === id);
      setPost(foundPost);
    }
  }, [id, posts]);

  // Penanganan Loading dan Error
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!post) return <p>Post not found</p>;

  return (
    <div className="container my-5">
      <button
        className="btn btn-outline-secondary mb-4"
        onClick={() => navigate(-1)} // Menggunakan navigate untuk kembali
      >
        <i className="bi bi-arrow-left"></i> Back
      </button>
      <div className="card shadow-sm p-4">
        <img src={post.img} alt="Blog image" className="card-img-top" />
        <h1 className="card-title text-center">{post.title}</h1>
        <p className="card-text text-muted text-center">{post.desc}</p>
        <hr />
        <div className="card-body">{parse(post.content)}</div>
      </div>
    </div>
  );
};

export default BlogDetail;
