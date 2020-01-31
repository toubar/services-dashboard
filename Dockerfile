# Alpine images are recommended as they're tightly controlled and small in size while still being a full Linux distribution.
FROM node:13.7.0-alpine

LABEL author="Ahmed Toubar"
LABEL maintainer="aatoubar@gmail.com"
LABEL version="0.0.1"
LABEL description="This dockerfile builds an image for a Services Dashboard"

RUN adduser -D frontend

WORKDIR /home/frontend

# copy project JSON of dependencies file
COPY package.json package.json

# install dependencies
RUN npm install

# copy source code files
COPY public public
COPY src src

# give frontend user permission to frontend directory
RUN chown -R frontend:frontend ./

USER frontend

# expose the port on which a container listens for connections. Typically, the traditional port for the app at hand.
EXPOSE 3000

CMD ["npm", "start"]
