import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Soda = () => {
  return (
    <div className="Soda">
      <div className="Soda-items">
        <h3>OMG So much Sugarrr!</h3>
        <Link to="/">Go Back!</Link>
      </div>
      <img src="https://document-export.canva.com/-tMpc/DAFkWI-tMpc/3/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20230529%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230529T035914Z&X-Amz-Expires=77050&X-Amz-Signature=afa78d03b59fa955d4760a6233cdd18d81461ebaa9f031126094c421d9721bf5&X-Amz-SignedHeaders=host&response-expires=Tue%2C%2030%20May%202023%2001%3A23%3A24%20GMT" />
      <img src="https://document-export.canva.com/-tMpc/DAFkWI-tMpc/3/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20230529%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230529T035914Z&X-Amz-Expires=77050&X-Amz-Signature=afa78d03b59fa955d4760a6233cdd18d81461ebaa9f031126094c421d9721bf5&X-Amz-SignedHeaders=host&response-expires=Tue%2C%2030%20May%202023%2001%3A23%3A24%20GMT" />
    </div>
  );
};

export default Soda;
