import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link to="/" style={{ textDecoration: "none", color: "#007BFF" }}>
        Go Back to Quiz
      </Link>
    </div>
  );
};

export default NotFoundPage;
