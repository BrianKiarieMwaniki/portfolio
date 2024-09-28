import { Link, useRouteError } from "react-router-dom";
import { error_bg } from "../assets";

const ErrorPage = () => {
  const error = useRouteError();

  const renderError = () => {
    if (typeof error === "object" && error !== null && "status" in error) {
      const err = error as { status: number };
      return (
        <>
          <p className="error-status">{err.status}</p>
          {error.status === 404 && <p className="error-msg">This page could not be found.</p>}
        </>
      );
    }

    return <p  className="error-msg">Sorry! Unexpected Error.</p>;
  };

  return (
    <>
      <main className="error" style={{ backgroundImage: `url(${error_bg})` }}>
        <h1 className="heading error-heading">Oops...🙊</h1>
        {renderError()}
        <Link to="/" className="btn btn--primary btn--animated">
          Go to Homepage
        </Link>
      </main>
    </>
  );
};

export default ErrorPage;
