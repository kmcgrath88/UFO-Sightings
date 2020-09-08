// from data.js
var tableData = data;

// YOUR CODE HERE!

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

// Questions:
// date form in html?

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

    // Select the input element and get the raw HTML node
    // var inputElement = d3.select(this).select('input');
    var changedElement = d3.select(this).select('input');
    console.log(changedElement);
    var inputValue = changedElement.property('value');
    var inputElement = changedElement.attr('id')
    var new_data = {};

    if (inputValue){
        new_data[inputElement] = inputValue;
    }

    // else{
    //     delete new_data[]
    // }

    // var inputElementDate = d3.select(this).attr('id'); //.text();
    // // Get the value property of the input element
    // var inputValueDate = inputElementDate.property('value');

    // // Select the input element and get the raw HTML node
    // // var inputElement = d3.select(this).select('input');
    // var inputElementCity = d3.select('#city');
    // // Get the value property of the input element
    // var inputValueCity = inputElementDate.property('value');

    // // var filterID = .att to pull datetime, city, etc

    
    // new_data[inputElementDate] = inputValueDate;
    // new_data[inputElementCity] = inputValueCity;
    console.log(new_data);

    console.log(inputValue);
    console.log(tableData);

    filter_Data();
 
};


function filter_Data(){
// Filter by date
Object.entries(new_data).forEach(([key,value]) => {
    filteredData = tableData.filter(ufo_sighting => ufo_sighting[key] === value);
});

    console.log(filteredData);


    tbody.html('')

    filteredData.forEach(function(ufo){
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
})};
