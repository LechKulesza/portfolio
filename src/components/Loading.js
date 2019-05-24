import React from "react";
import "../style/Loading.sass";

const Loading = props => {
  const { classNamed } = props;

  return (
    <>
      <section className={`loading ${classNamed}`}>
        <span className={`animation ${classNamed}`} />
        <span className={`shadow ${classNamed}`} />
        <h1 className={classNamed}>Lech Kulesza</h1>
        <section className="footer">
          &#9400; Copyright 2019 Lech Kulesza
        </section>
      </section>
    </>
  );
};

export default Loading;
