import https from "https";

const latitude = -29.6006;
const longitude = 30.3794;

function fetchWeather(): Promise<any> {
    return new Promise((resolve, reject) => {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code`;

        https.get(url, (response) => {
            let data = "";
            response.on("data", (chunk) => {
                data += chunk;
            });
            response.on("end", () => {
                try {
                    resolve(JSON.parse(data));
                } catch {
                    reject(new Error("Error processing weather data"));
                }
            });
        }).on("error", reject);
    });
}
function fetchNews(): Promise<any> {
    return new Promise((resolve, reject) => {
        https.get("https://dummyjson.com/posts?limit=5", (response) => {
            let data = "";
            response.on("data", (chunk) => {
                data += chunk;
            });
            response.on("end", () => {
                try {
                    resolve(JSON.parse(data));
                } catch {
                    reject(new Error("Error processing news data"));
                }
            });
        }).on("error", reject);
    });
}
//chain
fetchWeather()
    .then((weather) => {
        console.log("\nLocation: Pietermaritzburg");
        console.log("Temperature:", weather.current.temperature_2m, "°C");
        console.log("Humidity:", weather.current.relative_humidity_2m, "%");
        return fetchNews();
    })
    .then((news) => {
        console.log("\nLatest News Headlines:");
        news.posts.forEach((post: any) => {
            console.log("-", post.title);
        });
    })
    .catch((error) => {
        console.error(error.message);
    });
//all
Promise.all([fetchWeather(), fetchNews()])
    .then(() => {
        console.log("\nPromise.all: Weather and news fetched");
    })
    .catch((error) => {
        console.error(error.message);
    });
Promise.race([fetchWeather(), fetchNews()])
    .then(() => {
        console.log("Promise.race: First request isfinished");
    })
    .catch((error) => {
        console.error(error.message);
    });
