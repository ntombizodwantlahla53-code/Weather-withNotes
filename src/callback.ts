import https from "https";

const latitude = -29.6006;
const longitude = 30.3794;

function fetchWeather(
    callback: (error: Error | null, weather?: any) => void
) {
    console.log("Fetching weather ..loading...");
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code`;

    https.get(url, (response) => {
        let data = "";
        response.on("data", (chunk) => {
            data += chunk;
        });
        response.on("end", () => {
            try {
                callback(null, JSON.parse(data));
            } catch {
                callback(new Error("Error in processing weather data"));
            }
        });
    }).on("error", (error) => {
        callback(error);
    });
}

function fetchNews(
    callback: (error: Error | null, news?: any) => void
) {
    console.log("Fetching latest news...Loaading...");
    https.get("https://dummyjson.com/posts?limit=6", (response) => {
        let data = "";

        response.on("data", (chunk) => {
            data += chunk;
        });
        response.on("end", () => {
            try {
                callback(null, JSON.parse(data));
            } catch {
                callback(new Error("Error processing news data"));
            }
        });
    }).on("error", (error) => {
        callback(error);
    });
}
fetchWeather((error, weather) => {
    if (error) {
        console.error(error.message);
        return;
    }
    setTimeout(() =>{
    console.log("\nLocation: Pietermaritzburg");
    console.log("Temperature:", weather.current.temperature_2m, "°C");
    console.log("Humidity:", weather.current.relative_humidity_2m, "%");
    },3000);
fetchNews((error, news) => {
        if (error) {
            console.error(error.message);
            return;
        }
        setTimeout(() =>{
        console.log("\nLatest News:");
        news.posts.forEach((post: any) => {
            console.log("-", post.title);
        },3000);
        });
    });
});