import { useIntl } from "react-intl";
import { useRouteError } from "react-router-dom";

/**
 * Error page
 * @returns {JSX.Element}
 */
const ErrorPage = (): JSX.Element => {
  const intl = useIntl();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const error: any = useRouteError();

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>{intl.formatMessage({ id: "app.error.fallback" })}</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
