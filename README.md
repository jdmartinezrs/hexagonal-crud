
EN ESTE PROJECTO ESTA LA AUTHENTICACIÓN CON GOOGLE USANDO PASSPORT Y ADEMAS ESTA EL CRUD DE PRODUCTOS, SE DEBERÁ EJECUTAR EN THUNDER CLIENT
.env 

```js
EXPRESS_PORT=3000
EXPRESS_HOST="localhost"
EXPRESS_EXPIRE=10000
EXPRESS_STATIC="/home/camper/hexagonal-crud-14/application/src"

MONGO_ACCESS="mongodb://"
MONGO_USER="rojas"
MONGO_PWD="developerOne"
MONGO_HOST="junction.proxy.rlwy.net"
MONGO_PORT=58408
MONGO_DB_NAME="campus"
KEY_SECRET="MIIDFzCCAf8CAQAwgZwxCzAJBgNVBAYTAkNvMRIwEAYDVQQIDAlTYW50YW5kZXIxFDASBgNVBAcMC0J1Y2FyYW1hbmdhMRQwEgYDVQQKDAtDYW1wdXNMYW5kczEUMBIGA1UECwwLQnVjYXJhbWFuZ2ExEjAQBgNVBAMMCWxvY2FsaG9zdDEjMCEGCSqGSIb3DQEJARYUYXpyb2phczEyM0BnbWFpbC5jb20wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDumqzvCGgBKCTmfK1d0Dn6FI/tjWHSoeKxE3muqXob6pZASUEtPtM3Cx3iFXDTeajuuximGxjpYI2ln/+002s4wVbeweO5LF5uCziJZKfzlH3JRCX+8sNcMIx3m/eE00X1U+lPrcXwiQXKdR8eiMguFSnjnf5LpkMrZKpKmUo15rfb7pWArf5esYQ3HKzetz7SKNHrgeWSfneggVbZvOhdQyu9C2wCznv7eh/p4nUi6B8yjVoVNAs24fbCaidOEz6RJCLNUkYeRNUC0vWGDbFhpVylOXcIS08MRCpfd5Fh8nt+SsrzuGSNwm1Tp0y2XZjxNpQUWoqmUbL6GWCoqK5DAgMBAAGgNTAXBgkqhkiG9w0BCQcxCgwIZGF2aWRSMTAwGgYJKoZIhvcNAQkCMQ0MC0NhbXB1c0xhbmRzMA0GCSqGSIb3DQEBCwUAA4IBAQCXzpCbJ+eHg5wIE60fWMPLnVpDR5d1waHJeSU+KnHfXoh4FJxAmEFDvzPWl7f9R1nSnoWTVHCtTn1qYa3W4DBSyB5ubK4SwoMG3B/2QSL5dkmOs6XDixU+a2Y0KFhJtA8hmHXRSMrRI8FE3DbCebzgzP5JLWN4cxEQ2YOvDvVSbWWonuoZe68gQsp9GbXCnB6Ktp9QnO6wpqStYuptB8QnEGemEwTDLC1qIycv9yC9O+Ixi7xBLBC8HgF4doi+JXUOLrPs0JvY8J6a++IR5Ew8FaRmrY08wqggE+2bsgzgqeYWzmybtAzdNZdF3Pymg6rQnIliiGgenCJr4+tEou1Q"


GOOGLE_CLIENT_ID="804982961472-m6jbqossefejvutl3us5tikjm0so0hlf.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET="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"
GOOGLE_CALLBACK_URL="http://localhost:3000/login/auth/google/callback"
```
