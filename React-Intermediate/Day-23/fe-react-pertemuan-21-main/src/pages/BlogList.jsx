import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const BlogList = ({ posts, loading, error }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get the current page from the query parameter or default to 1
  const queryParams = new URLSearchParams(location.search);
  const currentPage = parseInt(queryParams.get("page")) || 1;

  // Handle loading and error states
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Function to handle pagination
  const handlePagination = (direction) => {
    const nextPage = direction === "next" ? currentPage + 1 : currentPage - 1;
    navigate(`?page=${nextPage}`);
  };

  // Calculate the start and end index for the current page
  const startIndex = (currentPage - 1) * 6;
  const endIndex = startIndex + 6;

  // Filter the posts for the current page
  const currentPagePosts = posts.slice(startIndex, endIndex);

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Blog Posts</h1>
      <section className="row">
        {currentPagePosts && currentPagePosts.length > 0 ? (
          currentPagePosts.map((post) => (
            <div className="col-md-6 col-lg-4 mb-4" key={post.id}>
              <Link to={`/post/${post.id}`} className="text-decoration-none">
                <div className="card h-100 shadow-sm">
                  <img
                    src={post.img} // Menggunakan post.img sesuai dengan data yang diberikan
                    className="card-img-top img-cstm"
                    alt={post.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text text-muted">{post.desc}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p>No posts available</p>
        )}
      </section>
      <div className="d-flex justify-content-center mt-4">
        <button
          className="btn btn-outline-primary me-2"
          onClick={() => handlePagination("prev")}
          disabled={currentPage === 1}
        >
          <i className="bi bi-arrow-left"></i> Previous
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={() => handlePagination("next")}
          disabled={currentPagePosts.length < 6}
        >
          Next <i className="bi bi-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default BlogList;

