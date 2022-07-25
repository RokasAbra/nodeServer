import http from "http";
import { utils } from "./utils.js";

const server = {};

server.httpServer = http.createServer((req, res) => {
  const baseURL = `http${req.socket.encryption ? "s" : ""}://${
    req.headers.host
  }/`; // kokiame serveryje sukasi musu kodas
  const parsedURL = new URL(req.url, baseURL);
  //  const URL = req.url;           // ko nori vartotojas
  const httpMethod = req.method.toLowerCase(); //httpmetodai - kaip nori elgtis vartotojas/ elgesio intensija(CRUD)
  const trimmedPath = parsedURL.pathname.replace(/^\/+|\/+$/g, '');
  /*
uzklausu kategorijos:
  - ne failas (html)
  - binary failas
  - textinis failas
  - api (JSON)
*/
const textFileExtensions = ['css', 'js', 'txt', 'svg'];
const binaryFileExtensions = ['ico', 'jpg', 'png']
  const fileExtension = utils.fileExtension(trimmedPath)
  const url = parsedURL.pathname;
  let responseContent = '';
  const isBinaryFile = binaryFileExtensions.includes(fileExtension);
  const isTextFile = textFileExtensions.includes(fileExtension);
  const isAPI = url.slice(0, 5) === '/api/';
  const isPage = !isBinaryFile && !isTextFile && !isAPI;

  if (isBinaryFile) {
    responseContent = 'BINARY FILE';
}

if (isTextFile) {
    responseContent = 'TEXT FILE';
}

if (isAPI) {
    responseContent = 'API RESPONSE';
}

if (isPage) {
    const routes = {
        '': pageHome,
        'services': pageServices,
        'about': pageAbout,
        '404': page404,
    }

    responseContent = routes[trimmedPath] ? routes[trimmedPath]() : routes['404']();
}

res.end(responseContent);
});
  //routes/pages
  //nukreipimas i kazkoki tai puslapi/faila
  //kelias(url: get -by default) -> funkcija, kuri grazina HTML

  // URL -> HTML
  // https://www.example.com/ -> home page
  // https://www.example.com/about -> about page
  // https://www.example.com/about/services -> services page
  // https://www.example.com/about/qweasfg -> 404 page

 

function pageHome() {
  return `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
                <link rel="stylesheet" href="/css/main.css">
                <link rel="stylesheet" href="/css/demo.css">
            </head>
            <body>
                HOME PAGE CONTENT
            </body>
            </html>`;
}

function pageServices() {
  return "SERVICES PAGE";
}
function pageAbout() {
  return "ABOUT PAGE";
}

function page404() {
  return "404 PAGE";
}

server.init = () => {
    const PORT = 65535;
    server.httpServer.listen(PORT, () => {
        console.log(`Sveikinu, tavo projektas pasiekiamas per http://localhost:${PORT}`);
    });
}

export { server };
