user(browser): types their note

user(browser): submits their note (adding their note to data.json within the applications JS file)

server: gets the request as it is being processed (request pending, ready state is not 4 meaning the process isn't finished yet)

server: finishes processing the request (this.readystate now == 4 & this.status == 200)

application/browser: this.readystate now == 4 & this.status == 200 triggers the note to be posted to /exampleapp/new_note, this counts as an implicit moving from /exampleapp/notes > /exampleapp/new_note which causes the http POST 302 status.

server: sends the exampleapp/notes url after the update.

browser: attempts to load the application from the /examplesapps/notes url data stored on the server

browser: GET https://studies.cs.helsinki.fi/exampleapp/notes

server: sends 'notes'(data.json) and the defined main.js/css files accordingly

browser: applies the main.js/css functionality to the data.json data currently displayed

browser: GET https://studies.cs.helsinki.fi/exampleapp/main.js

browser: GET https://studies.cs.helsinki.fi/exampleapp/main.css

browser: GET https://studies.cs.helsinki.fi/exampleapp/data.json





