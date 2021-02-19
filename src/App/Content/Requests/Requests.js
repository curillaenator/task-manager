import { connect } from "react-redux";
import { Application } from "./Applications/Application";
import { Button } from "../../UICommon/Button/Button";

import styles from "./requests.module.scss";

const DashboardHeader = ({ dashboardNames, dashSizes }) => {
  return (
    <div className={styles.naming}>
      {dashboardNames.map((el) => (
        <div
          className={styles.item}
          key={el.name}
          style={{ width: dashSizes[el.name] }}
        >
          <p>{el.title}</p>
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
        <DashboardHeader
          dashboardNames={props.dashboardNames}
          dashSizes={props.dashSizes}
        />
        <div className={styles.listing}>
          <Application dashSizes={props.dashSizes} dashData={props.dashData} />
        </div>
      </div>
    </div>
  );
};

const mstp = (state) => ({
  newRequest: state.ui.requests.newRequest,
  dashboardNames: state.ui.requests.dashboardNames,
  dashSizes: state.ui.requests.dashSizes,
  dashData: state.requests.requests,
});

export const RequestsCont = connect(mstp, {})(Requests);

export default Requests;
