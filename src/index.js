import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";

import SpeedDial from './speedDial';

function App() {
  return (
    <div>
      
      {/* <speedDial></speedDial> */}
      <Button variant="raised" color="primary">
        button
    </Button>
    </div>
  );
}

ReactDOM.render(<SpeedDial />, document.querySelector("#app"));
