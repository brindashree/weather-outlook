import React from "react";
import styled from "styled-components";
import { colors } from "../utils/styles";
import { fetchWeatherImage } from "../utils";
const Container = styled.div`
	padding: 2.625rem 6rem;
	@media only screen and (max-width: 600px) {
		padding: 2.62rem;
	}
`;
const WeatherCard = styled.div`
	background-color: ${colors.primaryBlue};
	text-align: center;
`;
const StyledText = styled.p`
	font-size: 0.85rem;
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
	gap: 1rem;
	margin-bottom: 4.5rem;
	@media only screen and (max-width: 1024px) {
		grid-template-columns: repeat(3, 1fr);
	}
	@media only screen and (max-width: 960px) {
		grid-template-columns: repeat(2, 1fr);
	}
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
	@media only screen and (max-width: 960px) {
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
		transform: ${(props) =>
			props.degree ? `rotate(${props.degree});` : `rotate(-125deg);`};
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

export const Content = ({ locationDetails, loading, forecastDetails }) => {
	if (loading) return <p>Loading...</p>;
	const visibility = (locationDetails?.visibility / 1000) * 0.6213;

	return (
		<Container>
			<CardsContainer>
				{forecastDetails?.length &&
					forecastDetails.map((forecast, i) => (
						<WeatherCard key={i}>
							<StyledText>
								{new Date(forecast?.dt_txt).toLocaleDateString("en-US", {
									weekday: "short",
									day: "numeric",
									month: "short",
								})}
							</StyledText>
							<ImageContainer>
								<img
									src={fetchWeatherImage(forecast?.weather?.[0]?.description)}
									alt="shower"
								/>
							</ImageContainer>
							<FlexDiv>
								<StyledText>{forecast?.main?.temp_min}°C</StyledText>
								<StyledText>{forecast?.main?.temp_max}°C</StyledText>
							</FlexDiv>
						</WeatherCard>
					))}
			</CardsContainer>
			<SectionHeader>Today's Hightlights</SectionHeader>
			<DetailsContainer>
				<WeatherCard>
					<StyledText>Wind Status</StyledText>
					<Detail>
						{locationDetails?.wind?.speed}
						<span>mph</span>
					</Detail>
					<WindStatusDetail degree={locationDetails?.wind?.deg}>
						<span class="material-icons">assistant_navigation</span>
						<StyledText>WSW</StyledText>
					</WindStatusDetail>
				</WeatherCard>
				<WeatherCard>
					<StyledText>Humidity</StyledText>
					<Detail>
						{locationDetails?.main?.humidity}
						<span>%</span>
					</Detail>
					<ProgressIndicators>
						<Indicator>0</Indicator>
						<Indicator>50</Indicator>
						<Indicator>100</Indicator>
					</ProgressIndicators>
					<ProgressBar>
						<Progress width={locationDetails?.main?.humidity} />
					</ProgressBar>
				</WeatherCard>
				<WeatherCard>
					<StyledText>Visibility</StyledText>
					<Detail>
						{visibility?.toFixed(1)}
						<span>miles</span>
					</Detail>
				</WeatherCard>
				<WeatherCard>
					<StyledText>Air Pressure</StyledText>
					<Detail>
						{locationDetails?.main?.pressure}
						<span>mb</span>
					</Detail>
				</WeatherCard>
			</DetailsContainer>
			<Footer>created by Brindashree C B - devChallenges.io</Footer>
		</Container>
	);
};
