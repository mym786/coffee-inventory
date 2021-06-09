# How to run the project 

## Installation 
It requires [Node.js] and docker
Intall dependencies 
```sh
npm i
```
docker 
```sh
docker run -p 27017:27017 --name mongo1 -d mongo:latest
```

## Running tests
The tests create a collection with sample products and executes some test demonstrating sample queries
```
npm test

```
