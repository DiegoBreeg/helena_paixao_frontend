FROM node:latest AS build

WORKDIR /app/webstore_backend
COPY package.json ./
RUN apt update && apt upgrade
RUN npm install
COPY . ./
RUN npm run build
RUN ls -la /app/webstore_backend

FROM nginx:alpine
COPY --from=build /app/webstore_backend/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]