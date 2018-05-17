# Taxi-dispatcher Questions

## Question 1

Create a node service for a Taxi Dispatcher app that implements this API:

### POST /ride-request

Creates a new 'ride-request' object.

Payload:

    {
      "location": "...",
      "destination": "..."
    }

Response:

    {
      "time": 1500000000000, # time of creation
      "location": "...",
      "destination": "..."
    }

### GET /ride-request

Responds with a JSON array of 'ride-request' objects.

Response:

    [
      { "time": "...", "location": "...", "destination": "..." },
      ...,
      { "time": "...", "location": "...", "destination": "..." }
    ]

### GET /ride-request/oldest

Responds with the oldest 'ride-request' object.

Response:

    {
      "time": 1500000000000,
      "location": "...",
      "destination": "..."
    }


Instead of a connecting to a database, you can use an in-memory data store. For example:

    const dataStore = [
      { time: 15000000000, location: 'Pioneer Square', destination: 'NW 23rd & Burnside' },
      { time: 15000000000, location: 'Penn Station', destination: '23rd & Madison' },
      { time: 15000000000, location: 'OMSI', destination: 'NW Alder & Broadway' },
    ];

Run `npm test` to run a small test suite that will validate your server. It
defaults to hit `localhost:3001`.

<details>
  <summary>Example gif</summary>
  <img src="https://raw.githubusercontent.com/jondlm/taxi-dispatcher/master/img/taxi-dispatch-api.gif" alt="question1">
</details>

## Question 2

Refactor the code found in `src/App.js` to only validate the email input when
the user hovers over the "Submit" button. Make sure the "Submit" button is
disabled when the component is in an invalid state.

