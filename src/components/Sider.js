import React, { useState } from "react";
import cloudBackground from "../images/cloudBackground.png";
import Shower from "../images/Shower.png";
import styled from "styled-components";
import { colors } from "../utils/styles";

const SearchSection = styled.div`
	display: flex;
	padding: 2.625rem 2.875rem;
	justify-content: space-between;
`;
const CurrentWeatherDetails = styled.div`
	background: linear-gradient(
			rgba(30, 33, 58, 0.95) 100%,
			rgba(30, 33, 58, 0.95) 100%
		),
		url(${cloudBackground});
	background-position: 50% 20%;
	background-repeat: no-repeat;
	background-size: 150%;
	height: 100%;
	text-align: center;
`;
const SearchPlacesBtn = styled.button`
	color: ${colors.white};
	background-color: ${colors.gray};
	font-size: 1rem;
	padding: 0.688rem 1.125rem;
	border: none;
	cursor: pointer;
`;
const LocationBtn = styled.button`
	background-color: ${colors.gray};
	width: 50px;
	height: 50px;
	padding: 0.7rem;
	border: none;
	border-radius: 50%;
	.material-icons {
		color: white;
	}
`;
const ImageContainer = styled.div`
	justify-content: center;
	align-items: center;
	display: flex;
`;
const Temperature = styled.p`
	font-size: 9rem;
	color: ${colors.white};
	span {
		font-size: 3rem;
		color: ${colors.darkGray};
	}
`;
const TempCondition = styled.p`
	color: ${colors.darkGray};
	font-size: 2.25rem;
	margin: 5rem 0;
`;
const Date = styled.p`
	color: ${colors.darkGray};
	font-size: 1.125rem;
	margin-bottom: 2rem;
	font-weight: 500;
`;
const Location = styled.p`
	color: ${colors.darkGray};
	font-size: 1.125rem;
	font-weight: 600;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 0 2.625rem 0;
`;
const SearchSider = styled.div`
	display: flex;
	align-items: center;
	height: 50px;
	margin: 2.625rem 1rem 2.625rem 2.875rem;
	gap: 1rem;
`;
const SearchInput = styled.input`
	color: ${colors.white};
	font-size: 1rem;
	font-weight: 500;
	height: inherit;
	width: 70%;
	padding: 1rem;
	border: 1px solid ${colors.white};
	background-color: ${colors.primaryBlue};
`;
const SearchBtn = styled.button`
	color: ${colors.white};
	background-color: ${colors.brightBlue};
	font-size: 1rem;
	font-weight: 600px;
	padding: 1rem;
	border: none;
	height: inherit;
	width: 30%;
`;
const CloseBtn = styled.button`
	background-color: ${colors.primaryBlue};

	border: none;
	margin: 1rem;
	.material-icons {
		color: ${colors.white};
	}
`;
export default function Sider() {
	const [toggleSearch, setToggleSearch] = useState(false);

	const date = new window.Date().toLocaleDateString("en-US", {
		weekday: "short",
		day: "numeric",
		month: "short",
	});
	const handleSearchPlaces = () => {
		setToggleSearch(true);
	};
	const handleClose = () => {
		setToggleSearch(false);
	};
	return (
		<>
			{!toggleSearch ? (
				<CurrentWeatherDetails>
					<SearchSection>
						<SearchPlacesBtn onClick={handleSearchPlaces}>
							Search for places
						</SearchPlacesBtn>
						<LocationBtn>
							<span className="material-icons">my_location</span>
						</LocationBtn>
					</SearchSection>
					<ImageContainer>
						<img src={Shower} alt="shower" />
					</ImageContainer>
					<Temperature>
						15<span>℃</span>
					</Temperature>
					<TempCondition>Shower</TempCondition>
					<Date>Today • {date}</Date>
					<Location>
						<span class="material-icons">place</span>Banglore
					</Location>
				</CurrentWeatherDetails>
			) : (
				<>
					<CloseBtn onClick={handleClose}>
						<span class="material-icons">close</span>
					</CloseBtn>
					<SearchSider>
						<SearchInput type="search" placeholder="search location" />
						<SearchBtn>Search</SearchBtn>
					</SearchSider>
				</>
			)}
		</>
	);
}
