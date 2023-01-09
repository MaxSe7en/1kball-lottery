import React from "react";
import { Wrapper, Content, Heading } from "./styles";

const BlurCard = ({ heading, body }) => {
	const bodyContents = body;

	const arr = bodyContents.trim().split(",  ");

	return (
		<Wrapper>
			<Content>
				<h1>{heading}</h1>
				<ul>
					{arr.map((e) => (
						<li>{e}</li>
					))}
				</ul>
			</Content>
		</Wrapper>
	);
};

export default BlurCard;
