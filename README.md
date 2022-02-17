# [money-manager-backend](https://cryptic-ocean-25912.herokuapp.com/)

---

Money manager is an application where you can manage your financial things.

## Start application

```
$ npm install or npm i -> install packages
$ npm start -> for production
$ npm run dev -> for development purpose
```

# [HTTP verbs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

---

    - Informational responses (100–199)
    - Successful responses (200–299)
    - Redirection messages (300–399)
    - Client error responses (400–499)
    - Server error responses (500–599)

## 1xx : INFORMATION

    100 Continue
    101 Switching Protocols
    103 Early Hints

## 2xx : SUCCESS

    200 OK : success
    201 CREATED : successfully added data
    203 Non-Authoritative Information
    204 NO-CONTENT : successfully updated or deleted

## 3xx : REDIRECTION

    301 Moved Permanently
    304 NOT MODIFIED:

## 4xx : CLIENT SIDE ERROR

    400 BAD REQUEST : bad data being sent
    401 UNAUTHORIZED :
    403 FORBIDDEN :
    404 NOT FOUND : the resource does not exists at that location
    405 METHOD NOT ALLOWED :
            DELETE /api/spartans -->> 405 error
    406 NOT ACCEPTABLE
    415 Unsupported Media type
        if you forget to specify the Content-Type
        of Post request body, it will see it as plain text
        and it will throw this error if it does not support

## 5xx : Server side error

    500 internal service error
    If the server do not have any mapping of the url
    requested to handle the action -->> 500
    503 SERVICE UNAVAILABLE :
    504 GATEWAY TIMEOUT :

# [How to deploy on Heroku](https://devcenter.heroku.com/articles/heroku-cli)

---

### Create [**heroku account**](https://devcenter.heroku.com/) first

There are two ways to deploy on Heroku

1. GUI - [Graphical User Interface](https://www.geeksforgeeks.org/how-to-deploy-node-js-app-on-heroku-from-github/)
2. CLI - [Command Line Interface](https://devcenter.heroku.com/articles/heroku-cli)

**STEP 1:**

- In `package.json` file add below code anywhere

  ```
  "engines": {
    "node": "v16.13.1" // Node version - node -v and copy and paste
  },
  ```

  **STEP 2:**

- Create `.gitignore` and add following file and folder
  ```
  node_modules/
  .env
  ```

**Procedure for Ubuntu**
**Note** Git should be installed & directory should be on `main` branch where all the changes have been done.

- `$ sudo snap install --classic heroku`
- `$ heroku --version`
- `$ heroku login`
- `$ heroku create`
- `$ git push heroku main`

**Note** Constant key values set on `settings` reveal var there we can set all the `.env` values as it is.
