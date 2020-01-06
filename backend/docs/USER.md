# API GET HACK

Routes for subscribe in Hackathons.

## GET [/hackathons/avaliable]

List avaliable Hackathons to user subscribe.

### Body

NO BODY

### QUERYS

date

### HEADERS

Authorization: Bearer token

### RESPONSE

```json
[
  {
    "id": 1,
    "title": "Hackathon Example",
    "description": "Create a aplication",
    "date": "2019-12-16T19:30:00.000Z",
    "awards": 1000,
    "createdAt": "2019-12-16T14:37:26.120Z",
    "updatedAt": "2019-12-16T14:37:26.120Z",
    "banner_id": 1,
    "organizer_id": 1,
    "organizer": {
      "id": 1,
      "name": "Exmemple"
    },
    "banner": {
      "url": "http://localhost:3001/files/avatar.png",
      "id": 1,
      "path": "avatar.png"
    }
  }
]
```

## GET [/hackathons/subcriptions]

List all user's Hackathons that subscription.

### Body

NO BODY

### HEADERS

Authorization: Bearer token

### RESPONSE

```json
[
  {
    "id": 1,
    "title": "Hackathon Example",
    "description": "Create a aplication",
    "date": "2019-12-16T19:30:00.000Z",
    "awards": 1000,
    "createdAt": "2019-12-16T14:37:26.120Z",
    "updatedAt": "2019-12-16T14:37:26.120Z",
    "banner_id": 1,
    "organizer_id": 1,
    "organizer": {
      "id": 1,
      "name": "Exmemple"
    },
    "banner": {
      "url": "http://localhost:3001/files/avatar.png",
      "id": 1,
      "path": "avatar.png"
    }
  }
]
```

## POST [/hackathons/:id/subscribe]

Subscribe user in a Hackathon.

### Body

NO BODY

### HEADERS

Authorization: Bearer token

### RESPONSE

```json
{
  "title": "Hackathon Exemple",
  "awards": 1000,
  "date": "2019-12-16T19:30:00.000Z"
}
```
