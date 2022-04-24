import * as React from "react";
import LogoImage from "../../assets/fasten_logo.svg";
import {
  StyledContainer,
  StyledNavLeft,
  StyledNavRight,
  StyledNavLink,
  StyledNavTitle,
  StyledNavItem,
} from "./NavBar.styled";
import { withRouter, RouteComponentProps, Link } from "react-router-dom";
import { AiFillGithub, AiFillHome } from "react-icons/ai";
import config from "../../config";

export interface NavBarProps extends RouteComponentProps {}

export interface NavBarState {}

const NavLink: React.FunctionComponent<{
  children?: React.ReactNode;
  href: string;
  target: string;
}> = (props) => (
  <StyledNavItem>
    <StyledNavLink {...props} />
  </StyledNavItem>
);

class InternalNavBar extends React.Component<NavBarProps, NavBarState> {
  render() {
    return (
      <StyledContainer>
        <StyledNavLeft>
          <Link to={"/home"}>
            <StyledNavTitle>
              <img
                width={"100%"}
                src={LogoImage}
                alt={
                  "FASTEN, Developing an intelligent software package management systems."
                }
              />
            </StyledNavTitle>
          </Link>
        </StyledNavLeft>
        <StyledNavRight>
          <NavLink href={config.webpage} target={"_blank"}>
            <AiFillHome />
          </NavLink>
          <NavLink href={config.git} target={"_blank"}>
            <AiFillGithub />
          </NavLink>
        </StyledNavRight>
      </StyledContainer>
    );
  }
}

export const NavBar = withRouter(InternalNavBar);
