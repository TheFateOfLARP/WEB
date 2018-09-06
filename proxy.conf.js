const PROXY_CONFIG = [
    {
        context: [
            "/events",
            "/event",
            "/eventtypes",
            "/users"
        ],
        target: "http://192.168.1.4:8080/api",
        secure: false
    }
]
module.exports = PROXY_CONFIG;
