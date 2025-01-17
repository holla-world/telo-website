# FROM node:20.12 AS builder
# # FROM node:20.12-alpine3.18 AS builder
#
# COPY . ./app
# WORKDIR /app
#
# # RUN apk add --no-cache python3 make g++
# RUN yarn install && yarn build:test

FROM nginx:stable-alpine

COPY dist /usr/share/nginx/html
# COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
