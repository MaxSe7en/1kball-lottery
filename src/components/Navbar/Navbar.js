import {
	Wrapper,
	Content,
	FlagDiv,
	SearchBar,
	RightContent,
	FlagImg,
	FlagImgDropDown,
	Logo,
	NavList,
} from "./styles";
// import SearchBar from "../SearchBar/SearchBar";
import flag from "../../images/n_200px-Flag_of_Germanysvg_lg.png";
import flagDropdown from "../../images/down-arrow-263-1094530@2x.png";
import logo from "../../images/n_K_NEW_LOGO.png";
import { NavLink } from "react-router-dom";
import React from "react";

const Navbar = () => {
	return (
		<Wrapper>
			<Content>
				<Logo src={logo} alt="logo" />
				<RightContent>
					<SearchBar>
						<input type="text" name="name" id="nmae" />
						<button type="submit">Submit</button>
					</SearchBar>
					<FlagDiv>
						<FlagImg src={flag} alt="flag" />
						<FlagImgDropDown src={flagDropdown} alt="flag" />
					</FlagDiv>
				</RightContent>
			</Content>
			<NavList>
				<ul>
					<NavLink href="/">
						<li>Home</li>
					</NavLink>
					<NavLink href="/">
						<li>Product</li>
					</NavLink>
					<NavLink href="/">
						<li>Result</li>
					</NavLink>
					<NavLink href="/">
						<li>About Us</li>
					</NavLink>
				</ul>
			</NavList>
		</Wrapper>
	);
};

export default Navbar;
