import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

import "./InfoBox.css";

function Infobox({ title, cases, total }) {
  return (
    <Card className="infobox">
      <CardContent>
        <Typography color="textSecondary" className="infobox__title">
          {title}
        </Typography>
        <h2 className="infobox__h2">{cases}</h2>
        <Typography color="textSecondary" className="infobox__total">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Infobox;
