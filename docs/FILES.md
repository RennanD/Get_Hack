# API GET HACK

Routes for add files in aplication.

## POST [/files]

Add avatar or banner.

### Body

MULTIPART/FORM-DATA: file

### RESPONSE

```json
{
  "url": "http://localhost:3001/files/file.png",
  "id": 1,
  "name": "file.png",
  "path": "file.png",
  "updatedAt": "2019-12-11T16:35:47.598Z",
  "createdAt": "2019-12-11T16:35:47.598Z"
}
```
