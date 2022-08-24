FROM node:16-alpine
# Default timezone
env TZ=Europe/Bucharest

RUN npm install -g npm@latest &&\
apk add --update tzdata

COPY src /var/app/src
COPY node_modules /var/app/node_modules
COPY package.json /var/app/.
COPY credentials.json /var/app/.

WORKDIR /var/app

CMD [ "/usr/local/bin/npm", "run", "sync" ]
