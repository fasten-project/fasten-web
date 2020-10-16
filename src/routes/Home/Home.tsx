import * as React from "react";
import { NavBar } from "../../components/NavBar";
import {
  StyledContainer,
  StyledSeachBarInput,
  StyledSubtitle,
  StyledTitle,
} from "./Home.styled";
import { AiOutlineSearch } from "react-icons/ai";

export interface HomeProps {}

export interface HomeState {}

export class Home extends React.Component<HomeProps, HomeState> {
  constructor(props: HomeProps, state: HomeState) {
    super(props, state);
  }

  render() {
    return (
      <>
        <NavBar />
        <StyledContainer>
          <StyledTitle>
            Learn about robustness and security of the packages in your software
            ecosystem.
          </StyledTitle>

          <StyledSeachBarInput>
            <input
              type={"text"}
              name={"search"}
              placeholder={"Search packages (ex. org.slf4j:slf4j-api)"}
            />
            <span>
              <AiOutlineSearch />
            </span>
          </StyledSeachBarInput>

          <StyledSubtitle>
            Learn more about{" "}
            <a href={"https://www.fasten-project.eu/view/Main/Overview"}>
              concept
            </a>{" "}
            and{" "}
            <a href={"https://www.fasten-project.eu/view/Main/Use-cases"}>
              use cases
            </a>
            .
          </StyledSubtitle>
        </StyledContainer>
      </>
    );
  }
}
