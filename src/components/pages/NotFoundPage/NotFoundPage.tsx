import { useIntl } from "react-intl";
import "./NotFoundPage.scss";
import { Link } from "react-router-dom";

/**
 * NotFound 404 Page
 * @returns {JSX.Element}
 */
const NotFoundPage = (): JSX.Element => {
  const intl = useIntl();
  return (
    <div className="NotFound">
      <h1>404</h1>
      <p>{intl.formatMessage({ id: "app.not.found.page.title" })}</p>
      <p>
        {intl.formatMessage({ id: "app.not.found.page.message" })}
        <br />
        {intl.formatMessage({ id: "app.not.found.page.message.back.home" })}
      </p>
      <Link to="/">
        {intl.formatMessage({ id: "app.not.found.page.button.back.home" })}
      </Link>
    </div>
  );
};

export default NotFoundPage;
