/*!

=========================================================
* NextJS Argon Dashboard PRO - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-argon-dashboard-pro
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

import Head from 'next/head'
import Link from 'next/link'
// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
// core components
import IndexNavbar from "../../components/Navbars/IndexNavbar";
import AuthFooter from "../../components/Footers/AuthFooter";

import CustomLink from '../../components/CustomLink'

import Client from '../../components/showrunner.ts';



// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  a: CustomLink,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  Head,
}

class Index extends React.Component {

  render() {

    const { edata, sponsors } = this.props;
    return (
      <>
        <IndexNavbar />
        <div className="main-content">
        </div>
        <AuthFooter />
      </>
    );
  }
}

export const getStaticProps = async ({ params }) => {
  const encoreEnv = process.env.ENCORE_ENV || "azure"
  console.log("env:", encoreEnv)
  var client = new Client(encoreEnv);

  const edata = await client.conferences.GetCurrentByEvent({ EventID: 1 });

  // const sponsors = await client.conferences.GetConferenceSponsors({ ConferenceID: 1 });

  return {
    props: {
      edata: edata,
      //    sponsors: sponsors,
    },
  }
}


export default Index;
