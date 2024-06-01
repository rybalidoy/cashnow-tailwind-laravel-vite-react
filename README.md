
# Cashnow

Cashnow is a mock loaning application.

## Usage

## Prerequisites
- Laravel Framework 11x
- PHP 8.1+ support
- Docker
- React 18+
- Docker Image: mariadb:10.7+ 

## Setup for Development
#### Docker Installation
Visit and follow the setup for [Windows Docker](https://docs.docker.com/desktop/install/windows-install/).


#### NGINX Setup
1. Visit and follow the setup for [nginx docker]().
2. Run the following command at the root of the nginx project.
``` 
docker compose up -d --build
```
3. Run the following command, to check if the container nginx is on the list and running.
```
docker ps
```
4. To test if it is working, open browser and check the following url:
```
http://<project-url>
```

#### MariaDB
```
docker compose up -d --build
```

#### Supervisor 
1. Open the file `playbook/conf/supervisord/supervisord.conf`

#### Install node modules
```
cd src
npm install
```


