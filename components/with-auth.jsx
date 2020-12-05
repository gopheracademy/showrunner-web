import React, { Component } from "react";

import { fetchUser } from "../lib/user";
import createLoginUrl from "../lib/url-helper";
import RedirectToLogin from "../components/login-redirect";

export default function withAuth(InnerComponent) {
  async function Authenticated() {
    const payload = await fetchUser();
    const { clientPrincipal } = payload;
    return (
      <>
        {!clientPrincipal && <RedirectToLogin />}

        {clientPrincipal && (
          <div>
            <InnerComponent {...this.props} user={clientPrincipal} />
          </div>
        )}
      </>
    );
  }
}
