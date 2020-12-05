import React from "react";
import Head from "next/head";

import { withRouter } from "next/router";
// core components
import AdminNavbar from "../components/Navbars/IndexNavbar.js";
import AuthFooter from "../components/Footers/AuthFooter.js";

import IndexHeader from "../components/Headers/IndexHeader.js";
import { UserProvider } from "../lib/user";

const Layout = ({ user, loading = false, children }) => (
  <>
    <UserProvider value={{ user, loading }}>
      <AdminNavbar />
      <div className="main-content">{children}</div>
      <AuthFooter />
    </UserProvider>
  </>
);

export default withRouter(Layout);
