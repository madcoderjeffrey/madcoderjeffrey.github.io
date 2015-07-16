function saveOptions() {
    var name = document.getElementById("name");
 
    var options = {
      "name": name.options.value
    }
     
    return options;
};
 
var submitButton = document.getElementById("submit");
submitButton.addEventListener("click", 
    function() {
      console.log("Submit");
 
      var options = saveOptions();
      var location = "pebblejs://close#" + encodeURIComponent(JSON.stringify(options));
       
      document.location = location;
    }, 
false);
