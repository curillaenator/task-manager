import { connect } from "react-redux";
import { Button } from "../../UICommon/Button/Button";

import styles from "./requests.module.scss";

const DashboardHeader = ({ dashboardHeader }) => {
  return (
    <div className={styles.header}>
      {dashboardHeader.map((el, i) => (
        <div className={styles.headerItem} key={i}>
          {el}
        </div>
      ))}
    </div>
  );
};

const Requests = (props) => {
  return (
    <div className={styles.applications}>
      <div className={styles.buttons}>
        <Button
          title={props.newRequest.ttl}
          width={props.newRequest.w}
          height={props.newRequest.h}
        />
      </div>
      <div className={styles.dashboard}>
        <DashboardHeader dashboardHeader={props.dashboardHeader} />
      </div>
    </div>
  );
};

const mstp = (state) => ({
  newRequest: state.ui.requests.newRequest,
  dashboardHeader: state.ui.requests.dashboardHeader,
})

export const RequestsCont = connect(mstp, {})(Requests)

export default Requests;
