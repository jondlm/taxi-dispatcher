import fetch from "node-fetch";

const baseUrl = 'http://localhost:3001';
const jsonHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json"
};

const createRideRequest1 = fetch(`${baseUrl}/ride-request`, {
  method: "POST",
  headers: jsonHeaders,
  body: JSON.stringify({
    location: "downtown",
    destination: "airport"
  })
}).then(res => res.json());

const createRideRequest2 = createRideRequest1
  .then(() =>
    fetch(`${baseUrl}/ride-request`, {
      method: "POST",
      headers: jsonHeaders,
      body: JSON.stringify({
        location: "beaverton",
        destination: "hillsboro"
      })
    })
  )
  .then(res => res.json());

describe("create ride-request", () => {});

describe("/ride-requests", () => {
  it("should correctly create a ride request", () => {
    return createRideRequest1.then(data => {
      expect(data.time).toBeTruthy();
      expect(data.location).toEqual("downtown");
      expect(data.destination).toEqual("airport");
    });
  });

  it("should get a previously created ride requests", () => {
    return createRideRequest2
      .then(() => fetch(`${baseUrl}/ride-request`))
      .then(res => res.json())
      .then(data => {
        data.sort((a, b) => a.time - b.time);

        expect(data[0].time).toBeTruthy();
        expect(data[0].location).toEqual("downtown");
        expect(data[0].destination).toEqual("airport");

        expect(data[1].time).toBeTruthy();
        expect(data[1].location).toEqual("beaverton");
        expect(data[1].destination).toEqual("hillsboro");
      });
  });
});

describe("/ride-request/oldest", () => {
  it("should correctly get the oldest ride request", () => {
    return createRideRequest2
      .then(() => fetch(`${baseUrl}/ride-request/oldest`))
      .then(res => res.json())
      .then(data => {
        expect(data.time).toBeTruthy();
        expect(data.location).toEqual("downtown");
        expect(data.destination).toEqual("airport");
      });
  });
});
