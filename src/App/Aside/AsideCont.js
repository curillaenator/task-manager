import { connect } from "react-redux";
import Aside from "./Aside";

const mstp = (state) => ({
  menuUI: state.ui.menuUI,
});

export const AsideCont = connect(mstp, {})(Aside);
