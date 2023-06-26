import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <h1>Not Found</h1>;
};

export default NotFound;
