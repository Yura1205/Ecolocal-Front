# Estapa de construcción node en el contenedor
FROM node:latest as build

#Crear un directorio y ubicarme dentro de él
WORKDIR /app

#Copia todas las dependencias
COPY package.json ./

#Copia todas las dependencias
COPY package-lock.json .

#Ejecutar este comando, cuando ya tenga en package.json: 
#decirle al contenedror que lo instale cuando se desgargue de git
RUN npm install

#Copia todo: src, public, asset. Lo pone todo en la carpeta app
COPY . .

#Compilar la aplicación
RUN npm run build

#Servidor web, sirve paginas
FROM nginx:alpine

RUN rm -rf /etc/nginx/conf.d/*

COPY --from=build /app/dist /usr/share/nginx/html

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

#Debe ser el mismo con el de nginx
EXPOSE 4290


CMD ["nginx","-g","daemon off;"]