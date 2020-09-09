// from data.js
var tableData = data;

// Get reference to the table body
var tbody = d3.select('tbody');

// Loop through data and console.log each weather ufo object
tableData.forEach(function(ufo){
    console.log(ufo);

    // Use d3 to append one table row tr for each ufo object
    var row = tbody.append('tr');

    // Use object entries to console.log each ufo value
    Object.entries(ufo).forEach(function([key, value]){
        console.log(key,value);
    
    // Use d3 to append 1 cell per ufo value 
    // (datetime, city, state, country, shape, durationMinutes, comments)
    var cell = row.append('td');

    // Use d3 to update each cell's text with ufo values
    // (datetime, city, state, country, shape, durationMinutes, comments)
    cell.text(value);
    
    });

});


// Shorter way:
// tableData.forEach((ufo) => {
//     var row = tbody.append('tr');
//     Object.entries(ufo).forEach(([key,value])=>{
//         var cell = row.append('td');
//         cell.text(value);
//     });
// });



//Use a date form in your HTML document and write JavaScript code that will 
// listen for events and search through the date/time column to find rows that 
// match user input.

// Select filter table button
var button = d3.select('#filter-btn');

// Select form 
var form = d3.select('.form-group');


// Create event handlers
button.on('click', runEnter);
form.on('submit', runEnter);

// Event handler function for the form
function runEnter(){ 

    // Prevent page from refreshing
    d3.event.preventDefault();

    // function run enter
    var inputElement = d3.select('#datetime');
    
    // // Get the value property of the input element
    var inputValue = inputElement.property('value');

    var filteredData = tableData.filter(ufo_sighting => ufo_sighting.datetime === inputValue);

    tbody.html('')

    filteredData.forEach(function(ufo){
     
    // Use d3 to append one table row tr for each ufo object
    var row = tbody.append('tr');

    // Use object entries to console.log each ufo value
    Object.entries(ufo).forEach(function([key, value]){
    console.log(key,value);
    
    // Use d3 to append 1 cell per ufo value 
    // (datetime, city, state, country, shape, durationMinutes, comments)
    var cell = row.append('td');

    // Use d3 to update each cell's text with ufo values
    // (datetime, city, state, country, shape, durationMinutes, comments)
    cell.text(value);
    
    });

    
})};



