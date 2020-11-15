// require modules
const http = require('http');
const url = require('url');

// require config files
const data = require('./data-empty')

// listAllEmployees: Return json data with all database
function listAllEmployees(req,res) {
    res.statusCode = 200;
    res.end(JSON.stringify(data));
}

// defaultRote: Return error message for correct use
function defaultRote(req,res) {
    res.statusCode = 400;
    res.end('Plese use GET on "/api/employees" endpoint.');
}

// addEmployee: Return request for POST add new employee
function addEmployee(req,res) {
    let body = '';
    req.on('data', chunk => body += chunk.toString());
    req.on('end', () => {
        data.push(JSON.parse(body));
        res.statusCode = 201;
        return res.end(`{ "message": "${JSON.parse(body).name} added." }`);
    })
    req.on('error', error => {
        res.statusCode = 400;
        return res.end(error);
    });
}

// ////////////////////////////////////////////////////////////////////////////
// main
// ////////////////////////////////////////////////////////////////////////////

const server = http.createServer((req, res) => {
    const urlParts = url.parse(req.url);
    if (urlParts.pathname === '/api/employees') {
        switch(req.method) {
            case 'GET':
                listAllEmployees(req,res);
                break;
            case 'POST':
                addEmployee(req, res);
                break;
            default:
                defaultRote(req, res);
                break;
        }
    } else {
        console.log("urlParts.pathname:", urlParts.pathname)
        defaultRote(req, res);
    }
    console.log(urlParts)
});

server.listen(3000, () => console.info('Server is up on port 3000'));

// ////////////////////////////////////////////////////////////////////////////
//
// ////////////////////////////////////////////////////////////////////////////
