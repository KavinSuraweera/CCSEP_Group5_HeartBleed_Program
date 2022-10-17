#stage 1
FROM node:17-alpine as builder
WORKDIR /app
COPY package.json .
COPY npm.lock .
RUN nmp install
COPY . .
RUN npm start

#stage 2
FROM nginx:1.19.0
WORKDIR usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /abb/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]


