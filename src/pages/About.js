import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommerce App"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Interface Pvt Ltd. Started in the month of April 2020 during the
            Covid-19 Lockdown in order to directly fulfill the requirements of
            the customer when all the retail outlets were closed. This period
            founded the Swiss Watch Company website offering Alpina, Andre
            Mouche, Manager, Millner Co., M-Watch, Victorinox and Wenger watches
            at fair prices, quick and Pan-India delivery. Building Brands..
            Building Relationships
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
