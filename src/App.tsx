import * as React from "react";
import {
  Switch,
  Route,
  withRouter,
  Redirect,
  RouteComponentProps,
} from "react-router-dom";

import { StyledAppContainer } from "./App.styled";
import { Home } from "./routes/Home";
import { Package } from "./routes/Package";

export type AppProps = RouteComponentProps & {};

export interface AppState {}

class InternalApp extends React.Component<AppProps, AppState> {
  render() {
    const location = this.props.location;

    return (
      <StyledAppContainer>
        <Switch>
          {/** Redirect the root to our default route */}
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route exact path="/home" key={location.key} component={Home} />
          <Route
            exact
            path="/packages/:pkgParam"
            key={location.key}
            component={Package}
          />
        </Switch>
      </StyledAppContainer>
    );
  }
}

export const App = withRouter(InternalApp);
