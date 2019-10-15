//require modules
const url = require("url");
const path = require("path");
const fs = require("fs");
//file imports

//static base path:location of static folder
// console.log(__dirname);
// console.log(path.join(__dirname, "..", "static"));
const staticBasePath = path.join(__dirname, "..", "static");
//respond to a request
//Following is function passed to createServer used to create the server

const respond = (request, response) => {
  // console.log("Response fired!");

  //before working with the pathname,you need to decode it.
  // console.log();
  let pathname = url.parse(request.url, true).pathname;
  //if favicon.ico stop
  if (pathname === "/favicon.ico") {
    return false;
  }
  console.log(pathname);
  pathname = decodeURIComponent(pathname);
  // console.log(pathname);

  //get the corresponding full static path located in the static folder
  // console.log(path.join(staticBasePath, pathname));
  const fullStaticPath = path.join(staticBasePath, pathname);

  //can we find something in fullStaticPath?

  //no:send '404: File not Found!'

  if (!fs.existsSync(fullStaticPath)) {
    console.log(`${fullStaticPath} does not exist`);
    response.write("404:File not found!");
    response.end();
  } else {
    response.write("File Found!");
    response.end();
  }
  //we found something
  //is it a file or directory?
  //It is directory:
  //get content from template index.html
  //build the page title
  //build breadcrumb
  //build table rows(main_content)
  //fill the template data with:the page title,breadcrumb and table rows(main_content)
  //print data to the webpage
  //Is it not a directory but not a file either:
  //send :401:Access denied!
  // It is a file:
  //Let's get the file extension
  //get the file mime type and add it to the response header
  //get the file size and add it to the response header
  //pdf file?->display in browser
  //audio/video file?->stream in ranges
  //all other files stream in a normal way
};
module.exports = respond;
