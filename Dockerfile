FROM node:12.2.0-alpine

# set working directory
WORKDIR /react_comedy_store

# add `/app/node_modules/.bin` to $PATH
ENV PATH /react_comedy_store/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /react_comedy_store/package.json
RUN npm install --silent
RUN npm install react-scripts@3.1.1 -g --silent

# start app
CMD ["npm", "start"]