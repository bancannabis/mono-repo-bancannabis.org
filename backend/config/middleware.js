
module.exports = {
settings: {
    cors: {
    enabled: true,
    // headers: '*',
    origin: [
        "http://0.0.0.0:1337",
        "http://localhost:1337",
        "http://localhost:3000",
        "https://bancannabis.org",
        "http://bancannabis.org",
        'https://bancannabis-strapi.herokuapp.com',
        ],
    },
},
};
