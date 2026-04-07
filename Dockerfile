FROM node:16.19.0

WORKDIR /reja

COPY package*.json ./
RUN npm install

COPY . .

CMD ["node", "server.js"]

# DOCKERFILE => DOCKER IMAGE =>direct docker: CONTAINER
# DOCKERFILE => DOCKER IMAGE =>docker-compose: CONTAINER

#docker run -d -p 3005:4001 reja-image
# docker ps    / container malumotlari
# docker exec it con.id /bin/bash     docker terminaliga otish

# compose === moongose
#docker-compose up -d        compose ishga tushirish
