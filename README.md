<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Descripcion

Repositorio destinado a la consulta de Peliculas, Programas de Tv, Actores y Directores.

## Requisitos
- [Node.js](https://nodejs.org/)

## Instalacion
Una vez clonado el repositorio, nos paramos dentro proyecto y ejecutamos los siguientes comandos en la consola
~~~~~~~~~~~~~~~~~~~
npm install
~~~~~~~~~~~~~~~~~~~

Luego levantamos el proyecto ejecutando en consola
~~~~~~~~~~~~~~~~~~~
nest start
~~~~~~~~~~~~~~~~~~~

## Endpoints

- Nombre: register
- Descripcion: servicio utilizado para poder registrarnos.

- Metodo HTTP: POST
~~~~~~~~~~~~~~~~~~~
URL: http://localhost:3000/user/register
~~~~~~~~~~~~~~~~~~~
Request:
~~~~~~~~~~~~~~~~~~~
{
    "email": "test@gmail.com",
    "password": "1234567"
}
~~~~~~~~~~~~~~~~~~~

Response:
~~~~~~~~~~~~~~~~~~~
{
    "result": "ok"
}
~~~~~~~~~~~~~~~~~~~

CURL:
~~~~~~~~~~~~~~~~~~~
curl --location --request POST 'http://localhost:3000/user/register' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "test@gmail.com",
    "password": "abc12345"
}'
~~~~~~~~~~~~~~~~~~~
Advertencia: El email no se puede repetir. 

---
- Nombre: login
- Descripcion: servicio utilizado para poder loguearse en el sistema, este genera un token para poder usar algunos endpoinst, tambien genera un "refresh_token" para    poder actulizar el limite de tiempo del token.
- Metodo HTTP: POST
~~~~~~~~~~~~~~~~~~~
URL: http://localhost:3000/user/login
~~~~~~~~~~~~~~~~~~~
Request:
~~~~~~~~~~~~~~~~~~~
{
    "username": "test@gmail.com",
    "password": "1234567"
}
~~~~~~~~~~~~~~~~~~~

Response:
~~~~~~~~~~~~~~~~~~~
{
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NzI5Mzg3NTQsImV4cCI6MTY3Mjk0MjM1NCwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6InRlc3RAZ21haWwuY29tIn0.nBjAjTIEIwHN3KbxOMRbuerHCxzYX4aCyXQf95S2LYxQpmD9NysEXxk8PT05OOkE6Ee37s22UuvQIQUjL47pBoSEVh0i4QUZnpix8W72-LPr-HGk35tDT8hFby8FeuFRKctPd-teCWl79tPkWlH1WM_Vjjymi7KciFOc5PSE6gVdLOSx3hZjIoE7lc4FPGiI1oi26HYeVEccIK4RHnD5F0TT0yPluU9-bVES2vm_0gKDbOEWLpPeg4YXE9bbEwc22oxNlGxAjcMEbccKG5ECszW42c_e03juzKcGkm-YQbIO1ftsL03qCDl9V2iYmZ0OisNLB_Wc96HfrGPsArHcvQ"
}
~~~~~~~~~~~~~~~~~~~
CURL:
~~~~~~~~~~~~~~~~~~~
curl --location --request POST 'http://localhost:3000/user/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "test@gmail.com",
    "password": "abc12345"
}'
~~~~~~~~~~~~~~~~~~~
Advertencia: El token generado tiene duracion de 1 hora, luego expirara y no podra seguir usando algunos endpoints.
Para poder generar otro token debe loguearse de nuevo o refrescar el token con el "refresh_token".

---
- Nombre: refreshToken
- Descripcion: Servicio utilizado para actulizar el limite de tiempo del token.
- Metodo HTTP: POST
~~~~~~~~~~~~~~~~~~~
URL: http://localhost:3000/user/refreshToken
~~~~~~~~~~~~~~~~~~~
Request:
~~~~~~~~~~~~~~~~~~~
{
    "token": "4b0dcedb49059665db20890a7b6cfb5827b0d34b2afbe7e4d34692c8613c76b767858cc81a9b2e94cb6f4369c1a2dc13e5fab13725fa6c2aa5b217230f7be1e8"
}
~~~~~~~~~~~~~~~~~~~

Response:
~~~~~~~~~~~~~~~~~~~
{
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NzI5Mzk0ODgsImV4cCI6MTY3Mjk0MzA4OCwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6InRlc3RAZ21haWwuY29tIn0.kgJOsqkReysa5DuOVIgJzinSNfVHsk32n2BAWOzbIYNCfJ9K4owTdzyvE9aiAe2qp3-sHYKgR5_DuVHjkErS1fws0i44uo78n-RnixxvCy_gFk8TUtCCU8FDk2D_KVYF6BDwURuzxJEWGzx9WAtdoDPJGGbgI6aVeDnqHVeoPIX5_AyjPPjYxJlP4RceMGtEnQjQAnv8Qefflp73MYYAKTNhqbQcxKs5rGLTjyvaXKLzwd82BE8bQyxIhVA6BAQRv-fUpxtN3yRfdRKgqJOOnr-QVW6oSQS-la8FnhWzmGlQB__FhS0OmvSbcRQ-N-aHYPv3q18gOl-EaJpRlyFBxw",
    "refresh_token": "4b0dcedb49059665db20890a7b6cfb5827b0d34b2afbe7e4d34692c8613c76b767858cc81a9b2e94cb6f4369c1a2dc13e5fab13725fa6c2aa5b217230f7be1e8"
}
~~~~~~~~~~~~~~~~~~~
CURL:
~~~~~~~~~~~~~~~~~~~
curl --location --request POST 'http://localhost:3000/user/refreshToken' \
--header 'Content-Type: application/json' \
--data-raw '{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0ZXN0QGdtYWlsLmNvbSIsImlhdCI6MTY3NDIzOTE3MSwiZXhwIjoxNjc0MjM5MjAxfQ.44AaFWOi6KgrTB0PVV2htyQRgToylF6gUlzX8DROKfs"
}'
~~~~~~~~~~~~~~~~~~~
Advertencia: El nuevo token generado tiene duracion de 1 horas.

-----
- Nombre: movie
- Descripcion: Servicio utilizado para consultar las peliculas. Ademas tiene filtros por nombre y fecha.
- Metodo HTTP: GET
- Authorization Type Token Bear
~~~~~~~~~~~~~~~~~~~
URL: http://localhost:3000/movie?filter.name=jurassic park&order.name=asc&order.release.date=desc&filter.release.date=09-06-1993
~~~~~~~~~~~~~~~~~~~


Response:
~~~~~~~~~~~~~~~~~~~
{
    "Movies": [
        {
            "id": 1,
            "name": "rescatando al soldado ryan",
            "releaseDate": "24-07-1998"
        },
        {
            "id": 2,
            "name": "jurassic park",
            "releaseDate": "09-06-1993"
        },
        {
            "id": 3,
            "name": "Nicolas!",
            "releaseDate": "11-02-1993"
        },
        {
            "id": 4,
            "name": "Nicolas!",
            "releaseDate": "11-02-1993"
        }
    ]
}
~~~~~~~~~~~~~~~~~~~
CURL:
~~~~~~~~~~~~~~~~~~~
curl --location --request GET 'http://localhost:3000/movie?orderName=desc&filterName=rescatando al soldado ryan&orderReleaseDate=DESC&filterReleaseDate=22-09-1994' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0ZXN0QGdtYWlsLmNvbSIsImlhdCI6MTY3NDIzOTI1MywiZXhwIjoxNjc0MjM5MjgzfQ.ezGdikHFXfXZzw_Z7r52GTtKBIMtwUm9sreFsIjTEnM'
~~~~~~~~~~~~~~~~~~~
---
- Nombre: Episode
- Descripcion: Servicio utilizado para consultar el episodio por programa de TV.
- Metodo HTTP: GET
- Authorization Type Token Bear
~~~~~~~~~~~~~~~~~~~
URL: http://localhost:3000/episode/{numberEpisode}/{nameTvShow} 
~~~~~~~~~~~~~~~~~~~


Response:
~~~~~~~~~~~~~~~~~~~
{
    "Episode": {
        "id": 2,
        "name": "The one where Rachel finds out",
        "numberEpisode": 1,
        "releaseDate": "24-09-1994"
    },
    "Director": {
        "id": 1,
        "name": "James",
        "lastName": "Burrows",
        "dateBirth": "24-09-1994"
    }
}
~~~~~~~~~~~~~~~~~~~
CURL:
~~~~~~~~~~~~~~~~~~~
curl --location --request GET 'http://localhost:3000/episode/1/friends' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0ZXN0QGdtYWlsLmNvbSIsImlhdCI6MTY3NDIzOTQzNCwiZXhwIjoxNjc0MjM5NDY0fQ.ezTuPtoRnMeXqBQzaDTd0qmgzQmf1kxNkrpqr3aOmIQ'
~~~~~~~~~~~~~~~~~~~
---
- Nombre: dataShow
- Descripcion: Servicio utilizado para poder subir informacion a la base de datos segun el JSON.
- Metodo HTTP: POST
- Authorization Type Token Bear
~~~~~~~~~~~~~~~~~~~
URL: http://localhost:3000/dataShow
~~~~~~~~~~~~~~~~~~~


JSON Request: Generos
~~~~~~~~~~~~~~~~~~~
{
    "entity": "GENRE",
    "genre": {
        "name": "Terror"
    }
}
~~~~~~~~~~~~~~~~~~~
CURL:
~~~~~~~~~~~~~~~~~~~
curl --location --request POST 'http://localhost:3000/dataShow' \
--header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NzI5Mzk0ODgsImV4cCI6MTY3Mjk0MzA4OCwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6InRlc3RAZ21haWwuY29tIn0.kgJOsqkReysa5DuOVIgJzinSNfVHsk32n2BAWOzbIYNCfJ9K4owTdzyvE9aiAe2qp3-sHYKgR5_DuVHjkErS1fws0i44uo78n-RnixxvCy_gFk8TUtCCU8FDk2D_KVYF6BDwURuzxJEWGzx9WAtdoDPJGGbgI6aVeDnqHVeoPIX5_AyjPPjYxJlP4RceMGtEnQjQAnv8Qefflp73MYYAKTNhqbQcxKs5rGLTjyvaXKLzwd82BE8bQyxIhVA6BAQRv-fUpxtN3yRfdRKgqJOOnr-QVW6oSQS-la8FnhWzmGlQB__FhS0OmvSbcRQ-N-aHYPv3q18gOl-EaJpRlyFBxw' \
--header 'Content-Type: application/json' \
--data-raw '{
    "entity": "GENRE",
    "genre": {
        "name": "Terror"
    }
}'
~~~~~~~~~~~~~~~~~~~
JSON Request: Director
~~~~~~~~~~~~~~~~~~~
{
    "entity": "DIRECTOR",
    "director": {
        "name": "daniel",
        "lastName": "reynaga",
        "dateBirth": "15-02-1993"
    }
}
~~~~~~~~~~~~~~~~~~~
CURL:
~~~~~~~~~~~~~~~~~~~
curl --location --request POST 'http://localhost:3000/dataShow' \
--header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NzI4OTkxMjgsImV4cCI6MTY3MjkwMjcyOCwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6InRlc3QxQGdtYWlsLmNvbSJ9.bk1DW2BTgzoyWmmUtYtu8-93C-kjInrFM5GluBTmPTtYrztS5xCRoeEDrC-cv6Wa9yZaEa0oEvFXGt0pHFYjCAY9f6uhSeRxRArPLA8c1VIIGuhmo-EloJyMOQm4Q4vBjnu4J_ZxRspT1qVbVr3IYqzcB8RM5YdZeq4EELZEAWLGs7_1Jn_t9Mgc1uRN7cYyWB-TcFRcXUZbMMLsIRS6_mg-3MSJ7i-DWlxJGGuEHp6AdbwkxhBGUEPiPI_qilMiYpu9hbrg8v0gSRmYQmdomo-OQ_a8gkl-j_iWb9sllMkLYzS25i5IRz9oSjmY5r4u9crtm6jYP8oZYaDiDRGeAA' \
--header 'Content-Type: application/json' \
--data-raw '{
    "entity": "DIRECTOR",
    "director": {
        "name": "daniel",
        "lastName": "reynaga",
        "dateBirth": "15-02-1993"
    }
}'
~~~~~~~~~~~~~~~~~~~
JSON Request: Actor
~~~~~~~~~~~~~~~~~~~
{
    "entity": "ACTOR",
    "actor": {
        "name": "Nicolas!",
        "lastName": "Segura",
        "dateBirth": "11-02-1993"
    }
}

~~~~~~~~~~~~~~~~~~~
CURL:
~~~~~~~~~~~~~~~~~~~
curl --location --request POST 'http://localhost:3000/dataShow' \
--header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NzI5NDE2NDAsImV4cCI6MTY3Mjk0NTI0MCwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6InRlc3RAZ21haWwuY29tIn0.GO_rj7vKFB7Rj-QQzH0A09oISUYa04GZ0tVgKjBiav1hbIx5Ggj406U09Gdv3GbMmWT49aDT7t32eJay8wgBMZw7bCYqwRWqMGFQnCQ4qO6qKTwbCw1CogE1DeInhDZ8vHl7ozyUeAGX3FphC3RaLl37XHLxQDcnbrMTetEgmcSgLGTdmLvhCZs6UXlRNQCe3dc6zI6BF1lKmchdB9olk7SdBTkCksDl3_FImhfU2cMp6atBpVNqY9Of_m1eNm0PTDZRT0-_K4QW34uZXysPMfE2h3VJ7OOvCO_4dTkf2qNwmVdGSToDTmUxmc8eceUw3afnoOqUfQVpdgK-_Us1ig' \
--header 'Content-Type: application/json' \
--data-raw '{
    "entity": "ACTOR",
    "actor": {
        "name": "Nicolas!",
        "lastName": "Segura",
        "dateBirth": "11-02-1993"
    }
}'
~~~~~~~~~~~~~~~~~~~
JSON Request: Temporada
~~~~~~~~~~~~~~~~~~~
{
    "entity": "SEASON",
    "season": {
        "numberSeason": 2,
        "releaseDate": "11-02-1993",
        "tvId": 2
    }
}
~~~~~~~~~~~~~~~~~~~
CURL:
~~~~~~~~~~~~~~~~~~~
curl --location --request POST 'http://localhost:3000/dataShow' \
--header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NzI5MTExOTEsImV4cCI6MTY3MjkxNDc5MSwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6InRlc3RAZ21haWwuY29tIn0.bZ1NEn36bbI6cqCsgYZpglftyGfHAAXwuei6hiG_UWZewXs_d02qH0UJOA9ZmPLC4LeobILAXNrqnkU3pjij9_IRQtxiWH6t27qR3GgFjYIIbeyjF7-oMPSfCC11i_1ZdDHW1X-JRbkSgYanzAzco46xglGtz2O7OAoPXj0tsLbhcJJRcLgocQrsonyVeiJ57k0aTuhQp6x0PfrQbcYsm5uB1sEDHzBrPY2bpjeR17SIQqy5Sraflbd6Z4KNrsS5T-uylrQXCCvYfa2Ep9VYiopQ7L1RxSgtBuhPPKmQ7DndFyp4dRuPI9am7GMWgHP1vT_xQyth9FVd1iu5ZN5yAA' \
--header 'Content-Type: application/json' \
--data-raw '{
    "entity": "SEASON",
    "season": {
        "numberSeason": 2,
        "releaseDate": "11-02-1993",
        "tvId": 2
    }
}'
~~~~~~~~~~~~~~~~~~~
JSON Request: TV
~~~~~~~~~~~~~~~~~~~
{
    "entity": "TV",
    "tv": {
        "name": "test",
        "releaseDate": "11-02-1993",
        "directorId": 1
    }
}
~~~~~~~~~~~~~~~~~~~
CURL:
~~~~~~~~~~~~~~~~~~~
curl --location --request POST 'http://localhost:3000/dataShow' \
--header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NzI5MTExOTEsImV4cCI6MTY3MjkxNDc5MSwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6InRlc3RAZ21haWwuY29tIn0.bZ1NEn36bbI6cqCsgYZpglftyGfHAAXwuei6hiG_UWZewXs_d02qH0UJOA9ZmPLC4LeobILAXNrqnkU3pjij9_IRQtxiWH6t27qR3GgFjYIIbeyjF7-oMPSfCC11i_1ZdDHW1X-JRbkSgYanzAzco46xglGtz2O7OAoPXj0tsLbhcJJRcLgocQrsonyVeiJ57k0aTuhQp6x0PfrQbcYsm5uB1sEDHzBrPY2bpjeR17SIQqy5Sraflbd6Z4KNrsS5T-uylrQXCCvYfa2Ep9VYiopQ7L1RxSgtBuhPPKmQ7DndFyp4dRuPI9am7GMWgHP1vT_xQyth9FVd1iu5ZN5yAA' \
--header 'Content-Type: application/json' \
--data-raw '{
    "entity": "TV",
    "tv": {
        "name": "test",
        "releaseDate": "11-02-1993",
        "directorId": 1
    }
}'
~~~~~~~~~~~~~~~~~~~
JSON Request: Episode
~~~~~~~~~~~~~~~~~~~
{
    "entity": "EPISODE",
    "episode": {
        "name":"N 1",
        "numberEpisode": 526,
        "releaseDate": "11-05-2005",
        "seasonId": 4
    }
}
~~~~~~~~~~~~~~~~~~~
CURL:
~~~~~~~~~~~~~~~~~~~
curl --location --request POST 'http://localhost:3000/dataShow' \
--header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NzI5MjYxNTYsImV4cCI6MTY3MjkyOTc1Niwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6InRlc3RAZ21haWwuY29tIn0.OGeAHFpksnGIPf7RdhkScR2bEfME3zIDu2L46ElCT1EPiiipsxhAwd9t1yrrSHnTuVkmq8uE3CFSZT66CgdLGZKi9ixsTaZpO4aR8cDkSReQ2Rvshi7N5LSf-b7uB_-RDjUqWdTy4zEzBoEGYZkC4CM0YwUtxnYTd7YUET_hbKb3yYU1teMK_lrkFidhiiT8MZIAoUSQS23TUsK07wxx453ikUheZkRie6k2tR58sB8dpMBn390jmPRYS_EqG4tOnbtOdDuG06UEINK-RIl_GItRnLzXnA0rRSGcog3NBU59zxmcUcuVB8bWQLBr4R544KvwBAOv0Gh2ux4SJBLUVw' \
--header 'Content-Type: application/json' \
--data-raw '{
    "entity": "EPISODE",
    "episode": {
        "name":"N 1",
        "numberEpisode": 526,
        "releaseDate": "11-05-2005",
        "seasonId": 4
    }
}'
~~~~~~~~~~~~~~~~~~~
JSON Request: Peliculas
~~~~~~~~~~~~~~~~~~~
{
    "entity": "MOVIE",
    "movie": {
        "name": "Terminator",
        "releaseDate": "11-02-1993",
        "directorId": 1
    }
}
~~~~~~~~~~~~~~~~~~~
CURL:
~~~~~~~~~~~~~~~~~~~
curl --location --request POST 'http://localhost:3000/dataShow' \
--header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NzI5MDY4NTAsImV4cCI6MTY3MjkxMDQ1MCwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6InRlc3RAZ21haWwuY29tIn0.ByLp5mxxaiFgcPH7zyEytv6lH4bfx8bLGaXgpTfazuxESt2GHtX3lK0Ypu8Gv75M4PVHfiOhAr9okPLf2X2HNZvwSfpS2MbhN4KbUXg6LN7FDWg-021qHP8zi8n1k0kDlevXCSPUej3QDMHWV3ZDqz25bspiY2JGlBm99K0XVT_w6XDvwpsGoezW7ua3nhuI_44H0xxCfZJ2rPRbxg3dXRGDdTn_mbX4F6EN5DptSK_K8rys6rZrwyjjXesnMdk7tYHwlzUvXX5BESN9Tmj2mMBcA0UZNbbIIZ9iDHcLew1JPH9Yqda6wW2D1mh3qYTVz6Z-RwvwPCVD7ty74tctKw' \
--header 'Content-Type: application/json' \
--data-raw '{
    "entity": "MOVIE",
    "movie": {
        "name": "Terminator",
        "releaseDate": "11-02-1993",
        "directorId": 1
    }
}'
~~~~~~~~~~~~~~~~~~~
Response:
~~~~~~~~~~~~~~~~~~~
{
    "result": "ok"
}
~~~~~~~~~~~~~~~~~~~

## Base de datos
- DER


<a href="https://ibb.co/wBGScVL"><img src="https://i.ibb.co/mbZ9NkB/Captura-de-pantalla-de-2023-01-20-15-54-28.png" alt="Captura-de-pantalla-de-2023-01-20-15-54-28" border="0"></a>

Es una base de datos MySQL y esta alojado en la nube de Amazon en el sistema de AWS RDS, si desea trabajar localmente debe configurar el archivo .env y ejecutar el siguiente comando para generar la base de datos

~~~~~~~~~~~~~~~~~~~
npm run migration:run
