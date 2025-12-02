require("dotenv").config();

module.exports = {
  apps: [
    {
      name: "nina-worker",
      cwd: "./apps/workers",
      script: "pnpm",
      args: "start",
      env_file: ".env",
      env: {
        PORT: "5002",
        NODE_ENV: "production",
      }
    }
  ],
  watch: false,          // disable watch in production
  restart_delay: 5000,    // wait 5s before restarting (prevents loops)
  autorestart: true,     // restart on crash (default)
};