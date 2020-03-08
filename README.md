# marvelAPI
## To execute this project, you will need:
<ol>
  <li>Node.Js</li>
  <li>Insomnia or your own browser</li>
<ol>
  
## Clone the project
  
- git clone https://github.com/josehpena/marvelAPI.git
  
## Go to the folder where you clone and install the dependencies

- npm install

## Start the server

- npm start

## Requests

- Fetches lists of characters.

```
Type: Get
http://localhost:3333/v1/public/character/
body: {"urlO": "site"}
```

- Fetches a single character by id.

```
Type: Get
http://localhost:3333/v1/public/character/5e5699ef7125e8301c125f99
```

- Fetches lists of comics filtered by a character id.

```
Type: Get
http://localhost:3333/v1/public/character/5e5699ef7125e8301c125f99/comics
```
- Fetches lists of events filtered by a character id.

```
Type: Get
http://localhost:3333/v1/public/character/5e5699ef7125e8301c125f99/events
```

- Fetches lists of series filtered by a character id.

```
Type: Get
http://localhost:3333/v1/public/character/5e5699ef7125e8301c125f99/series
```

© José Pena
