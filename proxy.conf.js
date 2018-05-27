const PROXY_CONFIG = [
    {
        context: [
            "/events",
            "/eventtypes",
            "/users"
        ],
        target: "http://192.168.1.4:1337",
        secure: false
    }
]
module.exports = PROXY_CONFIG;
