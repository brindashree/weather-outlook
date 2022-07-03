import React from "react";
import styled from "styled-components";
import { Content } from "./components/Content";
import Sider from "./components/Sider";
import { colors } from "./utils/styles";

const Main = styled.div`
	min-height: 100vh;
	display: flex;
`;
const SideBar = styled.div`
	min-height: 100vh;
	width: 30%;
	background-color: ${colors.primaryBlue};
`;
const MainContent = styled.div`
	min-height: 100vh;
	width: 70%;
	background-color: ${colors.primaryBlack};
`;

const App = () => {
	return (
		<Main>
			<SideBar>
				<Sider />
			</SideBar>
			<MainContent>
				<Content />
			</MainContent>
		</Main>
	);
};

export default App;
