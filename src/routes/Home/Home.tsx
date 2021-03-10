import * as React from "react";
import { NavBar } from "../../components/NavBar";
import {
  StyledContainer,
  StyledDisclaimer,
  StyledSeachBarInput,
  StyledTitle,
} from "./Home.styled";
import { AiOutlineSearch } from "react-icons/ai";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { getPackage } from "../../requests/services/package";
import { HomeExamples } from "../../components/HomeExamples";

/**
 * Props for the Home route.
 */
export interface HomeProps {}

/**
 * State for the Package route.
 */
export interface HomeState {
  /** The search query for looking up the package. */
  searchQuery: string;
}

/**
 * The home page of the application.
 * Displays the text input bar for package search.
 */
class InternalHome extends React.Component<
  RouteComponentProps<HomeProps>,
  HomeState
> {
  constructor(props: RouteComponentProps<HomeProps>, state: HomeState) {
    super(props, state);
    this.state = {
      searchQuery: "",
    };
    this.handleSearchQueryChange = this.handleSearchQueryChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  /**
   * Handle change in the search query input element.
   * @param {React.ChangeEvent} e - change event object.
   */
  handleSearchQueryChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      searchQuery: e.target.value,
    });
  }

  /**
   * Handle search action for the package (key press callback).
   * @param {React.KeyboardEvent} e - keyboard event object.
   */
  async handleSearch(e: React.KeyboardEvent) {
    if (e.key != "Enter") return;

    const { searchQuery } = this.state;

    try {
      await getPackage(searchQuery);
      this.props.history.push(`/packages/${searchQuery}`);
    } catch (error) {
      this.props.history.push(`/search?query=${searchQuery}`);
    }
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
              placeholder={"Search package"}
              value={this.state.searchQuery}
              onChange={this.handleSearchQueryChange}
              onKeyDown={this.handleSearch}
            />
            <span>
              <AiOutlineSearch />
            </span>
          </StyledSeachBarInput>

          <HomeExamples />

          <StyledDisclaimer>
            <p>
              Learn more about{" "}
              <a href={"https://www.fasten-project.eu/view/Main/Overview"}>
                concept
              </a>{" "}
              and{" "}
              <a href={"https://www.fasten-project.eu/view/Main/Use-cases"}>
                use cases
              </a>
              .
            </p>
            <p>
              <b>Disclaimer:</b>{" "}
              <a href={"http://github.com/fasten-project/fasten"}>FASTEN</a> is
              currently under development with a limited amount of packages
              available.
            </p>
          </StyledDisclaimer>
        </StyledContainer>
      </>
    );
  }
}

export const Home = withRouter(InternalHome);
