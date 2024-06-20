import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <Link to="/"><img src="/404-page-not-found.jpg" alt="404 Page Not Found" width="600" /></Link>
    </div>
  );
};

export default NotFound;
