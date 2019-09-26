import { conatinerFluid } from "src/material-kit-react/jss/material-kit-react.jsx";

import imagesStyle from "src/material-kit-react/jss/material-kit-react/imagesStyles.jsx";

const exampleStyle = {
  section: {
    padding: "70px 0"
  },
  container: {
    ...conatinerFluid,
    textAlign: "center !important"
  },
  ...imagesStyle,
  link: {
    textDecoration: "none"
  }
};

export default exampleStyle;
