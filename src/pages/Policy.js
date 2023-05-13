import React from "react";
import Layout from "../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h3>Table of Contents</h3>
          <p>
            Ecommerce Privacy Policies Explained<br></br>
            Why Your Online Store Needs a Privacy Policy<br></br>
            Data Privacy Laws That Affect Online Stores<br></br>
            What’s Inside an Online Store’s Privacy Policy<br></br>
            Where To Post Your Online Store’s Privacy Policy<br></br>
            Good Examples of Ecommerce Privacy Policies<br></br>
            Download Our Free Ecommerce Privacy Policy Template Summary
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
