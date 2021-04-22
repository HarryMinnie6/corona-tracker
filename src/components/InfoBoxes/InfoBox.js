import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

import "./InfoBox.css";
//the spread operator in the props area handles any other props passed down to infoBox
function Infobox({ title, cases, total, active, ...props }) {
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected"}`}
    >
      <CardContent>
        <Typography color="textSecondary" className="infoBox__title">
          {title}
        </Typography>
        <h2 className="infoBox__cases">{cases}</h2>
        <Typography color="textSecondary" className="infoBox__total">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Infobox;
