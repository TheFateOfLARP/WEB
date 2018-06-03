const PROXY_CONFIG = [
    {
        context: [
            "/events",
            "/eventtypes",
            "/users"
        ],
        target: "http://snatch.org.ua",
        secure: false
    }
]
module.exports = PROXY_CONFIG;
