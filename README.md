# Taxi-dispatcher Questions

## Question 1

Create a node service for a Taxi Dispatcher app that implements this API:

# POST /ride-request

Creates a new 'ride-request' object.

Body:

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

# GET /ride-request

Responds with a JSON array of 'ride-request' objects.

Response:

    [
      { "time": "...", "location": "...", "destination": "..." },
      ...,
      { "time": "...", "location": "...", "destination": "..." }
    ]

# GET /ride-request/oldest

Responds with the oldest 'ride-request' object.

Body:

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

<details>
  <summary>Gif</summary>
  ![example](https://github.com/jondlm/taxi-dispatch/raw/master/img/taxi-dispatch-api.gif)
</details>

## Question 2

Using the pre-bootstrapped `create-create-app` located in this git repo, create
a page that allows a user to type in a "location" and a "destination" that will
create the record on the server you created in question 1.

<details>
  <summary>Gif</summary>
  ![example2](https://github.com/jondlm/taxi-dispatch/raw/master/img/taxi-dispatch-creation-ui.gif)
</details>
