### Notes

 * Currently, everytime you make a change to the link in localstorage.js, you would need to rebuild by doing `npm run build` , and then run dev again.

 * Need to create a save/post request on each click of a repo item. Or, keep it as a post request every second, to optimize calls to the DB.

 * Need to create a get request on first load of page.

 * Unrelated to this repo, but need to figure out where/.how to host the server ; (whatsapp-poppin server repo)

 * toDO : Get Data from posts into the DB. Figure out why /save is getting hit twice on every click. 


### What I learned (Started this a bit late... 5/8/18)

 * When making a fetch/post, *ORDER COUNTS!!!*. I spent ages figuring out why req.body on the backend was an empty object, only to notice that I had put the body property before the headers property...... when the correct format is : {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: reponame
    }



