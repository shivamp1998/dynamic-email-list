import { Fragment } from "react";
import EmailList from "./components/EmailList";
import GithubList from "./components/githubList";
function App() {
  return (
    <Fragment>
      {/* <EmailList/> */}
      <GithubList />
    </Fragment>
  );
}

export default App;
