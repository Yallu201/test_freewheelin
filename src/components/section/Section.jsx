import React from "react";
import styled from "styled-components";

const SectionStyled = styled.section`
	flex: 1;
	height: 100%;
`;

const Section = ({ children }) => {
	return <SectionStyled>{children}</SectionStyled>;
};

export default Section;
