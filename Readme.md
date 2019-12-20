# GraphQL API connected to MySQL database through Docker containers

## Build & start containers
Both projects (api & database) have their own Dockerfile to build Docker images. There is a docker-compose.yml file which can be executed to run the complete stack. Just execute this script on root folder:
```
docker-compose -f "docker-compose.yml" up -d --build
```

## Docker volume to persist MySQL data
There is a volume defined in the "docker-compose.yml" file which you can modify to choose where you want to persist the MySQL data. Actually, volume is created in ./database/data-volume folder after execute the compose.