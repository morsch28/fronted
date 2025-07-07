import { useLocation } from "react-router";

import PageHeader from "./common/PageHeader";
import AppRouters from "../routes/appRouters";
import { useState } from "react";
import WelcomeScreen from "./WelcomeScreen";

function Main() {
  return (
    <main
      className={`d-flex flex-fill position-relative main-with-logo-padding custom-main justify-content-center`}
    >
      <AppRouters />
    </main>
  );
}

export default Main;
