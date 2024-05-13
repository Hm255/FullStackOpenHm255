user(browser): types their note

user(browser): submits their note

browser: sends data(note) to the server as a request

server: gets the request as it is being processed (request pending, http status 200, ready state is not 4 meaning the process isn't finished yet)

server: finishes receiving and processing the note now added to data.json (this.readystate now == 4 & this.status == 200)

application/browser: this.readystate now == 4 & this.status == 200 triggers the note to be moved (implicitly redirected) to the header url ('server') which counts as a http:302

browser: retrieves the data currently in data.json whilst the application appends the list for display using JS/CSS





