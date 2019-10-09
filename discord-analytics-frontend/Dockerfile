FROM node

WORKDIR /app
RUN git clone https://github.com/Tarasa24/discord-analytics-webserver.git .
WORKDIR /app/discord-analytics-frontend
RUN npm install

CMD ["npm", "start"]