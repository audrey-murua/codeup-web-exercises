(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split("|");

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
    */

    var planetsBreakString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    planetsBreakString = planetsBreakString.split("|").join("<br>");
    console.log(planetsBreakString);
     /**
     * BONUS:
     * Create another string that would display your planets in an unordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

   var app = document.querySelector("#app");
   app.innerHTML = "<ul>" + planetsString.map(function (planet) {
       return "<li>" + planet + "</li>";
   }).join("") + "</ul>";


})();
