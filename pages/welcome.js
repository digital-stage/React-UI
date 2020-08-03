import React from "react";
import main from "../styles/main.scss";
import Button from "@material-ui/core/Button";

export default function Welcome() {
  return (
    <div className="abc">
      <div className="center">
        <div>
          <img src="./logo.png" />
          <p>
            Your digital stage for art,music <br /> and theatre ensembles
          </p>
        </div>

        <div>
          <h1>Welcome Back</h1>

          <Button variant="contained" color="primary">
            Sign in
          </Button>
          <br />
          <small>
            sign into account or <br />
            create a new account
          </small>
        </div>
      </div>
    </div>
  );
}
