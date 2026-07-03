module.exports = {
  apps : [{
    name: "𝙍𝘼𝙉𝘼 𝙕𝘼𝙄𝙉-bot",
    script: "./server.js",
    watch: false,
    autorestart: true,
    max_memory_restart: '2G',
    env: {
      NODE_ENV: "production",
    }
  }]
};
