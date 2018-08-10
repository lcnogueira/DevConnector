# DevConnector
A social network to connect developers, built with Node.js, Express, React+Redux and MongoDB.

## How to run the project locally

* Clone this project:
```
git clone <projectPath.git>
```

* Create a file called `keys_dev.js` inside the `config` folder like this (or use another database URL) and replace the values:
```
module.exports = {
  mongoURI:
    "mongodb://<user>:<password>@<database_path>",
  secretOrKey: "<anySecretYouWant>"
};
```

* Install all backend and frontend dependencies. In the root folder:
```
npm install (backend dependencies)
cd client && npm install (frontend dependencies)
```

* Run both backend and frontend:
```
npm run dev (in the root folder)
```

## Preview
If you only wanna take a look on what the web app looks like, you can visit this URL:
```
https://dev-sutic.herokuapp.com
```

## Note
This web app was created in **Brad Traversy's course**. I coded along the course.