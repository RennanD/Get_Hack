# API GET HACK

Routes for register and login in aplication.

## POST [/users]

Create a new user in aplication.

#### Body

JSON

### REQUEST

```json
{
  "name": "Expemple",
  "email": "exemple@email.com",
  "password": "12345678",
  "avatar_id": 1
}
```

### RESPONSE

```json
{
  "id": 1,
  "name": "Exemple",
  "email": "exemple@email.com"
}
```

## POST [/sessions]

Create a new session fro user in aplication.

#### Body

JSON

### REQUEST

```json
{
  "email": "exemple@email.com",
  "password": "12345678"
}
```

### RESPONSE

```json
{
  "user": {
    "id": 2,
    "name": "Exemple",
    "email": "exemple@email.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTc2MTY2MjMzLCJleHAiOjE1NzY4NTc0MzN9.5UVM4mpbadP4KQ_gSO9zFysAr6Sr-qrFiPhnL96n3d8"
}
```
