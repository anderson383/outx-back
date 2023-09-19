<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Git Users Backend

##
This project is created with the purpose of measuring technical knowledge in nestjs

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.



## Installation

```bash
$ npm install
```

## Running the app

```bash
# watch mode development.env
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Comandos para dockerizar postgres localmente

### 1. Ir a la carpeta docker-compose

```bash
$ cd ./db
```

### 2. Construir la imagen Docker

```bash
$ docker compose up
```


### 3. Enpoints a consultar y validar

```bash
#Para listar [get]
/api/user/list


#Para crear [post]
/api/user