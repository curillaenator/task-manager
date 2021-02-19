import { Route } from "react-router-dom";
import { RequestsCont } from "./Requests/Requests";

const Content = () => {
  return (
    <>
      <Route path="/requests" render={() => <RequestsCont />} />
      <Route path="/knowledge" render={() => <RequestsCont />} />
      <Route path="/employees" render={() => <RequestsCont />} />
      <Route path="/clients" render={() => <RequestsCont />} />
      <Route path="/setting" render={() => <RequestsCont />} />
    </>
  );
};

export default Content;
