<center>
<img align="left" src="https://i.imgur.com/4GK9mkm.png">
<h1>Discord Analytics - Webserver</h1>
Live preview version of Discord Analytics data
</center> 
</br>

---

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Requirements and Setup](#requirements-and-setup)
  - [Discord Analytics data](#discord-analytics-data)
  - [Discord token](#discord-token)
- [Execution](#execution)

## General info

This repository is closely tied to the [Discord Analytics](https://github.com/Tarasa24/discord-analytics) project, as this its live preview (meaning that all features are supported). Code displayed is the same code running on my server as can be seen [here](https://tarasa24.ddns.net/discord-analytics/), but is placed to a separate repo allowing for an independent development.

## Technologies

Project is created with:

- <a href="https://discord.js.org" target="_blank">discord.js</a>
- <a href="https://expressjs.com/" target="_blank">Express.js</a>
- <a href="https://www.docker.com/" target="_blank">Docker 🐋</a>
- <a href="https://docs.docker.com/compose" target="_blank">Docker Compose</a>
- <a href="https://hub.docker.com/_/nginx" target="_blank">Nginx</a>

## Requirements and Setup

#### Discord Analytics data

Using the original project, get the parsed data `*server_name*.json` and place it to the `discord-analytics-frontend/website/data` directory.

#### Discord token

Create new project on [Discord Developer Portal](https://discordapp.com/developers/applications/). Alternatively look at [these instructions](https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token). And finally place this token as an environment variable for discord-analytics-backend in the `docker-compose.yml`:

```
services:
  discord-analytics-backend:
    ...
    environment:
      - TOKEN=*your token*
    networks:
    ...
```

## Execution

Simply start up the containers using:

```
docker-compose up
```

> Note that every change to the data folder in the `discord-analytics-frontend/website/data` means you will have to rebuild the particular image. (`docker-compose build`). This, as well as fairly pointless build of nginx image can be easily fixed using volumes, but I had problems with that, since I am on Windows.

---

The live view is then avalible at `http://*docker-ip*/discord-analytics/`.
