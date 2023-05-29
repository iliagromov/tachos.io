import * as React from "react";
import { Link, PageProps } from "gatsby";

const NotFoundPageContainer: React.FC<PageProps> = (props) => {


  return (
    <section className="page-not-found">
      <div className="wrapper">
      <h1>Page not found</h1>
        <p>
          Sorry 😔, we couldn’t find what you were looking for.
      
          <br />
          <Link to="/">Go home</Link>.
        </p>

      <div className="page-not-found__title">404</div>
      </div>
      
    </section>
  )
}
export { NotFoundPageContainer };
