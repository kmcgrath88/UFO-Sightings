//-----LEVEL 1-----//
//Using the UFO dataset provided in the form of an array of JavaScript objects, 
//write code that appends a table to your web page and then adds new rows of data 
//for each UFO sighting.

// Creating new variable from data.js
var tableData = data;

// Get reference to the table body
var tbody = d3.select('tbody');

// Loop through data
tableData.forEach((ufo) => {

    // Use d3 to append one table row tr for each ufo object
    var row = tbody.append('tr');

    // Use object entries to console.log each ufo value
    Object.entries(ufo).forEach(([key,value])=>{
        console.log(key,value);

        // Formatting the data in the table
        if (key === 'state'|| key === 'country'){
            value = value.toUpperCase();
        }
        else if (key === 'city'){
            value = value.replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase());
        };

        // Use d3 to append 1 cell per ufo value 
        // (datetime, city, state, country, shape, durationMinutes, comments)
        var cell = row.append('td');

        // Use d3 to update each cell's text with ufo values
        // (datetime, city, state, country, shape, durationMinutes, comments)
        cell.text(value);
    });
});



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

    // Select input element
    var inputElement = d3.select('#datetime');
    
    // Get the value property of the input element
    var inputValue = inputElement.property('value');

    // Filtering table to match input value
    var filteredData = tableData.filter(ufo_sighting => ufo_sighting.datetime === inputValue);

    // Clearing the table
    tbody.html('')

    // Looping through the filtered data and appending it to the table
    filteredData.forEach(function(ufo){
     
        // Use d3 to append one table row tr for each ufo object
        var row = tbody.append('tr');

        // Use object entries to console.log each ufo value
        Object.entries(ufo).forEach(function([key, value]){
        console.log(key,value);
    
            // Formatting the filtered values in the table
            if (key === 'state'|| key === 'country'){
                value = value.toUpperCase();
            }
            else if (key === 'city'){
                value = value.replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase());
            }


            // Use d3 to append 1 cell per ufo value 
            // (datetime, city, state, country, shape, durationMinutes, comments)
            var cell = row.append('td');

            // Use d3 to update each cell's text with ufo values
            // (datetime, city, state, country, shape, durationMinutes, comments)
            cell.text(value);
    
        });

    
    });
};




