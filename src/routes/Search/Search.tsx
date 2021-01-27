import * as React from "react";
import { NavBar } from "../../components/NavBar";
import {
  StyledContainer,
  StyledSeachBarInput,
  StyledSuggestion,
} from "./Search.styled";
import { AiOutlineSearch } from "react-icons/ai";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { getSuggestions } from "../../requests/services/search";
import { Package as PackageModel } from "../../requests/payloads/package-payload";

/**
 * Props for the Search route.
 */
export interface SearchProps {}

/**
 * State for the Search route.
 */
export interface SearchState {
  /** Indicator of the current state; whether or not the page is loading. */
  isLoading: boolean;

  /** The search query for looking up the package. */
  searchQuery: string;

  /** The suggested packages for search query. */
  suggestions: PackageModel[];
}

/**
 * The Search page of the application.
 * Displays the list of suggested packages that match the search query.
 */
class InternalSearch extends React.Component<
  RouteComponentProps<SearchProps>,
  SearchState
> {
  constructor(props: RouteComponentProps<SearchProps>, state: SearchState) {
    super(props, state);

    const windowUrl = this.props.location.search;
    const query = new URLSearchParams(windowUrl).get("query") || "";
    if (!query) this.props.history.push("/");

    this.state = {
      isLoading: true,
      searchQuery: query,
      suggestions: [],
    };
    this.handleSearchQueryChange = this.handleSearchQueryChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount(): void {
    void this.retrieveSuggestions();
  }

  async retrieveSuggestions() {
    this.setState({
      isLoading: true,
    });

    const { searchQuery } = this.state;

    try {
      const suggestions: PackageModel[] = await getSuggestions(searchQuery);

      this.setState({
        isLoading: false,
        suggestions: suggestions,
      });
    } catch (error) {
      // TODO: display error?
      console.log(error.toString());
      this.setState({
        isLoading: false,
      });
    }
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
  handleSearch(e: React.KeyboardEvent) {
    if (e.key == "Enter") {
      this.props.history.push(`/search?query=${this.state.searchQuery}`);
      this.retrieveSuggestions();
    }
  }

  render() {
    return (
      <>
        <NavBar />
        <StyledContainer>
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
          {this.state.suggestions.map((pkg) => (
            <StyledSuggestion
              href={"/#/packages/" + pkg.package_name}
              key={pkg.id}
            >
              {pkg.package_name}
            </StyledSuggestion>
          ))}
        </StyledContainer>
      </>
    );
  }
}

export const Search = withRouter(InternalSearch);
