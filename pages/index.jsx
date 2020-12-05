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

import Head from "next/head";
import Link from "next/link";
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

import CustomLink from "../components/CustomLink";

import SponsorList from "../components/SponsorList";
import Client from "../components/showrunner.ts";

import Layout from "../layouts/Layout";
import { useFetchUser } from "../lib/user";

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
};

export default function Home({ edata, sponsors }) {
  const { user, loading } = useFetchUser();

  return (
    <Layout user={user} loading={loading}>
      <IndexHeader />
      {loading && <p>Loading login info...</p>}

      {!loading && !user && (
        <>
          <p>
            To test the login click in <i>Login</i>
          </p>
          <p>
            Once you have logged in you should be able to see the sponsor list
            below.
          </p>
        </>
      )}

      {!loading && user && (
        <>
          <SponsorList sponsors={sponsors}></SponsorList>
        </>
      )}
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const encoreEnv = process.env.ENCORE_ENV || "azure";
  console.log("env:", encoreEnv);
  var client = new Client(encoreEnv);

  const edata = await client.conferences.GetCurrentByEvent({ EventID: 1 });

  const sponsors = await client.conferences.GetConferenceSponsors({
    ConferenceID: 1,
  });
  console.log(sponsors.Sponsors);
  return {
    props: {
      edata: edata,
      sponsors: sponsors.Sponsors,
    },
  };
};
