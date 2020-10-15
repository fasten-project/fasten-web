import * as React from "react";

export interface HomeProps {}

export interface HomeState {}

export class Home extends React.Component<HomeProps, HomeState> {
  constructor(props: HomeProps, state: HomeState) {
    super(props, state);
  }

  render() {
    return (
      <>
        <div>hello</div>
      </>
    );
  }
}
