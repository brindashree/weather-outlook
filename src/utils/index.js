import Shower from "../images/Shower.png";
import LightRain from "../images/LightRain.png";
import Hail from "../images/Hail.png";
import HeavyCloud from "../images/HeavyCloud.png";
import HeavyRain from "../images/HeavyRain.png";
import LightCloud from "../images/LightCloud.png";
import Sleet from "../images/Sleet.png";
import Snow from "../images/Snow.png";
import Thunderstorm from "../images/Thunderstorm.png";

export const fetchWeatherImage = (description) => {
	let weatherImage;
	if (description) {
		switch (description) {
			case "light rain":
				weatherImage = LightRain;
				break;
			case "moderate rain":
				weatherImage = LightRain;
				break;
			case "hail":
				weatherImage = Hail;
				break;
			case "heavy cloud":
				weatherImage = HeavyCloud;
				break;
			case "heavy rain":
				weatherImage = HeavyRain;
				break;
			case "light cloud":
				weatherImage = LightCloud;
				break;
			case "shower":
				weatherImage = Shower;
				break;
			case "sleet":
				weatherImage = Sleet;
				break;
			case "snow":
				weatherImage = Snow;
				break;
			case "thunderstorm":
				weatherImage = Thunderstorm;
				break;
			default:
				weatherImage = Shower;
		}
	}
	return weatherImage;
};
