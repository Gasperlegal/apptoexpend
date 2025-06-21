# apptoexpend

This project contains a small Firebase enabled web application. The static
files live in the `public/` directory. Firebase credentials are generated from
environment variables and written to `public/firebase-config.js`.

## Folder layout

```
public/ - static assets served to the browser
src/    - build and helper scripts
docs/   - optional documentation
```

## Setup

1. Copy `.env.example` to `.env` and fill in your Firebase credentials.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Generate the Firebase config file:

   ```bash
   npm run build
   ```

4. Serve the app with a static server:

   ```bash
   npm run serve
   ```

   This will start `http-server` on <http://localhost:8080>.

Alternatively you can use any static server to serve the contents of the
`public/` directory.
