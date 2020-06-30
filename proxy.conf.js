const PROXY_CONFIG = {
    "/api": {
        "target": "http://localhost:3001",
        "secure": false,
    }
}

module.exports = PROXY_CONFIG;


// 参考：https://angular.io/guide/build#bypass-the-proxy