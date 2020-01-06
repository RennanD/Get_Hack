# API GET HACK

Routes for control hackathons in aplication.

## GET [/hackathons]

List all organizer's Hackathons.

### Body

NO BODY

### HEADERS

Authorization: Bearer token

### RESPONSE

```json
[
  {
    "id": 12,
    "title": "Hackathon Exemple",
    "description": "Create hackathon",
    "date": "2019-12-12T13:30:00.000Z",
    "awards": 1000,
    "banner": {
      "url": "http://localhost:3001/files/banner.png",
      "id": 5,
      "path": "banner.png"
    }
  }
]
```

## POST [/hackathons]

Create a new Hackathon in aplication.

### Body

JSON

### HEADERS

Authorization: Bearer token

### REQUEST

```json
{
  "title": "Hackathon Exemple",
  "description": "Create hackathon",
  "date": "2019-12-16T17:00:00-03:30",
  "banner_id": 1,
  "awards": 1000
}
```

### RESPONSE

```json
{
  "title": "Hackathon Example",
  "description": "Create hackathon",
  "awards": 1000,
  "date": "2019-12-16T17:00:00-03:30",
  "banner": {
    "url": "http://localhost:3001/files/banner.png",
    "id": 1,
    "path": "banner.png"
  },
  "organizer": {
    "id": 1,
    "name": "Exemplpe"
  }
}
```

## PUT [/hackathons/:id]

Update a Hackathon in aplication.

### Body

JSON

### HEADERS

Authorization: Bearer token

### REQUEST

```json
{
  "title": "Hackathon exemple",
  "description": "Create a api with micro services",
  "date": "2019-12-13T18:00:00-03:00",
  "banner_id": 5,
  "awards": 1000
}
```

### RESPONSE

```json
{
  "id": 14,
  "title": "Hackathon exemple",
  "description": "Create a api with micro services",
  "date": "2019-12-13T21:00:00.000Z",
  "awards": 1000,
  "createdAt": "2019-12-13T14:19:09.262Z",
  "updatedAt": "2019-12-13T14:19:35.403Z",
  "banner_id": 5,
  "organizer_id": 1
}
```

## DELETE [/hackathons/:id]

Cancel and delete one Hackathon.

### Body

NO BODY

### HEADERS

Authorization: Bearer token

### RESPONSE

```json
{
  "msg": "Successfully deleted Hackathon."
}
```
