import CryptoConvert from "crypto-convert";

export const cryptoConvert = new CryptoConvert({
	cryptoInterval: 5000, //Crypto prices update interval in ms (default 5 seconds on Node.js & 15 seconds on Browsers)
	fiatInterval: (60 * 1e3 * 60), //Fiat prices update interval (default every 1 hour)
	calculateAverage: true, //Calculate the average crypto price from exchanges
	binance: true, //Use binance rates
	bitfinex: true, //Use bitfinex rates
	coinbase: true, //Use coinbase rates
	kraken: true, //Use kraken rates
});