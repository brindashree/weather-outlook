import React from "react";
import styled from "styled-components";
import { colors } from "../utils/styles";
import Shower from "../images/Shower.png";

const Container = styled.div`
	padding: 2.625rem 6rem;
	@media only screen and (max-width: 600px) {
		padding: 2.62rem;
	}
`;
const UnitToggler = styled.div`
	display: flex;
	justify-content: end;
	margin-bottom: 4.125rem;
`;
const Unit = styled.button`
	border: none;
	border-radius: 50%;
	color: ${colors.white};
	background-color: ${colors.darkGrayBg};
	margin-left: 1rem;
	font-size: 1.125rem;
	width: 50px;
	height: 50px;
	font-weight: 700;
`;
const WeatherCard = styled.div`
	background-color: ${colors.primaryBlue};
	text-align: center;
`;
const StyledText = styled.p`
	font-size: 1rem;
	font-weight: 500;
	color: ${colors.white};
	padding: 1rem;
`;
const ImageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 1rem 0;
	img {
		width: 56px;
		height: 62px;
	}
`;
const CardsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	gap: 2rem;
	margin-bottom: 4.5rem;
	@media only screen and (max-width: 600px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;
const FlexDiv = styled.div`
	display: flex;
	justify-content: space-between;
`;
const SectionHeader = styled.p`
	color: ${colors.white};
	font-size: 1.5rem;
	font-weight: 700;
`;
const DetailsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(2, 1fr);
	gap: 2rem;
	margin: 2rem 0 4.5rem 0;
	@media only screen and (max-width: 600px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;
const Detail = styled.p`
	font-size: 4rem;
	padding: 1rem;
	font-weight: 700;
	color: ${colors.white};
	span {
		font-size: 2.25rem;
		color: ${colors.darkGray};
		font-weight: 500;
	}
`;
const WindStatusDetail = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	.material-icons {
		color: ${colors.white};
		transform: rotate(-125deg);
	}
`;
const Footer = styled.p`
	font-weight: 500;
	font-size: 0.875rem;
	color: ${colors.white};
	text-align: center;
`;
const ProgressIndicators = styled.div`
	width: 80%;
	margin: 0 auto;

	display: flex;
	justify-content: space-between;
`;
const Indicator = styled.p`
	color: ${colors.white};
	font-weight: 700;
	font-size: 0.75rem;
`;
const ProgressBar = styled.div`
	height: 7px;
	width: 80%;
	margin: 2px auto;
	background-color: ${colors.white};
	border-radius: 3px;
`;
const Progress = styled.div`
	background-color: ${colors.brightYellow};
	height: inherit;
	border-radius: 3px;
	width: ${(props) => props.width}%;
`;

export const Content = () => {
	return (
		<Container>
			<UnitToggler>
				<Unit>℃</Unit>
				<Unit>℉</Unit>
			</UnitToggler>
			<CardsContainer>
				<WeatherCard>
					<StyledText>Sun, 7 Jun</StyledText>
					<ImageContainer>
						<img src={Shower} alt="shower" />
					</ImageContainer>
					<FlexDiv>
						<StyledText>16°C</StyledText>
						<StyledText>16°C</StyledText>
					</FlexDiv>
				</WeatherCard>
				<WeatherCard>
					<StyledText>Sun, 7 Jun</StyledText>
					<ImageContainer>
						<img src={Shower} alt="shower" />
					</ImageContainer>
					<FlexDiv>
						<StyledText>16°C</StyledText>
						<StyledText>16°C</StyledText>
					</FlexDiv>
				</WeatherCard>
				<WeatherCard>
					<StyledText>Sun, 7 Jun</StyledText>
					<ImageContainer>
						<img src={Shower} alt="shower" />
					</ImageContainer>
					<FlexDiv>
						<StyledText>16°C</StyledText>
						<StyledText>16°C</StyledText>
					</FlexDiv>
				</WeatherCard>
				<WeatherCard>
					<StyledText>Sun, 7 Jun</StyledText>
					<ImageContainer>
						<img src={Shower} alt="shower" />
					</ImageContainer>
					<FlexDiv>
						<StyledText>16°C</StyledText>
						<StyledText>16°C</StyledText>
					</FlexDiv>
				</WeatherCard>
				<WeatherCard>
					<StyledText>Sun, 7 Jun</StyledText>
					<ImageContainer>
						<img src={Shower} alt="shower" />
					</ImageContainer>
					<FlexDiv>
						<StyledText>16°C</StyledText>
						<StyledText>16°C</StyledText>
					</FlexDiv>
				</WeatherCard>
			</CardsContainer>
			<SectionHeader>Today’s Hightlights</SectionHeader>
			<DetailsContainer>
				<WeatherCard>
					<StyledText>Wind Status</StyledText>
					<Detail>
						7<span>mph</span>
					</Detail>
					<WindStatusDetail>
						<span class="material-icons">assistant_navigation</span>
						<StyledText>WSW</StyledText>
					</WindStatusDetail>
				</WeatherCard>
				<WeatherCard>
					<StyledText>Humidity</StyledText>
					<Detail>
						84<span>%</span>
					</Detail>
					<ProgressIndicators>
						<Indicator>0</Indicator>
						<Indicator>50</Indicator>
						<Indicator>100</Indicator>
					</ProgressIndicators>
					<ProgressBar>
						<Progress width={84} />
					</ProgressBar>
				</WeatherCard>
				<WeatherCard>
					<StyledText>Visibility</StyledText>
					<Detail>
						6,4<span>miles</span>
					</Detail>
				</WeatherCard>
				<WeatherCard>
					<StyledText>Air Pressure</StyledText>
					<Detail>
						998<span>mb</span>
					</Detail>
				</WeatherCard>
			</DetailsContainer>
			<Footer>created by Brindashree C B - devChallenges.io</Footer>
		</Container>
	);
};
