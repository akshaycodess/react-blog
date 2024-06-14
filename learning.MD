# Learnings

## Lesson 16

created `data/db.json`
now to access the file data we need to run this cmd `npx json-server --watch data/db.json --port 8000`

## Lesson 21

React Router:
No multiple request to server only intiate a request at start and then get the virtual page and then manages the page data (components).
Install
`npm install react-router-dom@5`
Configure
`import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';` in App.js
