FROM ubuntu:22.04

RUN apt update
RUN apt install -y nodejs
RUN apt install -y npm

WORKDIR /var/www

COPY . .

EXPOSE 3000
RUN npm install
CMD npm run start
