# Scibowl Site

Time- and score-keeping site for Science Bowl teams, with searchable database of all previous rounds + performances.

Follow https://github.com/weblab-workshops/skeleton for correct implementation (most should have already been followed). Thanks to MIT web.lab for providing this skeleton.

To initialize, run ```npm install``` to install ```node_modules``` (do this only once). After, run ```npm run hotloader``` and open webapp on ```localhost:5000```. (Port can be edited if really want.)

## Things to implement!

- Button that resets timer
- right now, double clicking the timer makes it count down twice. There should be no effect when you press start bonus after start bonus is already running
- Format clock well
- Understand how CSS works
- Add a tossup timer
- Add stopping button that interrupts timer
- Basic Scoring System (+4,+10,-4,-10), maybe manually edit score
- Create a table that keeps track of problem number
- keyboard shortcuts for starting things
- somehow create a buzzing system
- 
## Backburner

- Change the font in utilities.css
- Change the Frontend CLIENT_ID for Google Auth (Skeleton.js)
- Change the Server CLIENT_ID for Google Auth (auth.js)
- Change the Database SRV for Atlas (server.js)
- Change the Database Name for MongoDB (server.js)
- Add a favicon to your website at the path client/dist/favicon.ico

## Backburner

- Change the font in utilities.css
- Change the Frontend CLIENT_ID for Google Auth (Skeleton.js)
- Change the Server CLIENT_ID for Google Auth (auth.js)
- Change the Database SRV for Atlas (server.js)
- Change the Database Name for MongoDB (server.js)
- Add a favicon to your website at the path client/dist/favicon.ico


## don't touch

the following files students do not need to edit. feel free to read them if you would like.

```
client/src/index.js
client/src/utilities.js
client/src/client-socket.js
server/validator.js
server/server-socket.js
.babelrc
.npmrc
.prettierrc
package-lock.json
webpack.config.js
```

