// We should wait for the page to load before running our Ajax request
$(document).ready(function(){
  // Now we start the Ajax GET request. The first parameter is the URL with the data.
  // The second parameter is a function that handles the response.
  $.get("sentence.html", function(response) {
    // Here we are getting the element on the page with the id of sentences and
    // inserting the response
    $("#sentences").html(response);
  });
});
// We actually need to serve this page from an HTTP server rather than load
// it directly in our browser. At the console, run the following command: `python -m SimpleHTTPServer`.
$.get("this_doesnt_exist.html", function(data) {
  // This will not be called because the .html file request doesn't exist
  doSomethingGood();
}).fail(function(error) {
  // This is called when an error occurs
  console.log('Something went wrong: ' + error);
});

// This is another example of how we could use jQuery to perform an Ajax request.

var url = "https://api.github.com/repos/rails/rails/commits?sha=82885325e04d78fb7ec608a4670164d842d23078";

$.get(url)
  .done(function(data) {
    console.log("Done");
    console.log(data);
  });

// Note: The callback that gets passed into `.done`  gets `data` as an argument. `data` represents the response returned from the API. jQuery handles passing in that `data` object to the callbacks. This is essential to our fire and forget technique. We don't have to sit around and wait for the API to give us a response. Instead, we tell jQuery that when it receives a response to please pass it along to our callbacks so they can handle it accordingly.


