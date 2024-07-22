const http = require("http");


data = [
    {
        id: 1,
        "name":"pankaj"
    },
    {
        id: 2,
        "name":"parth"
    },
    {
        id: 3,
        "name":"spruha"
    },
    {
        id: 4,
        "name":"priya"
    }
]

const server = http.createServer((req, res) => {
    console.log("server started");
    res.setHeader("content-type","application/json");
    res.end(
        JSON.stringify({
            data : data
        })
    )
});


server.listen(3000, () => {
    console.log("server running on oport 3000");
});