import React from "react";
import styled from "styled-components";

const SectionStyled = styled.section`
	flex: 1;
`;

const Section = ({ children }) => {
	return <SectionStyled>{children}</SectionStyled>;
};

export default Section;
