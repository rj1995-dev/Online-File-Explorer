//require modules

//file imports

//static base path:location of static folder

//respond to a request
//Following is function passed to createServer used to create the server

const respond = (request, response) => {
  // console.log("Response fired!");
  response.write("Response fired!");
  response.end();

  //before working with the pathname,you need to decode it.
  //get the corresponding full static path located in the static folder
  //can we find something in fullStaticPath?
  //no:send '404: File not Found!'
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
