//-----LEVEL 2-----//
// Complete all of Level 1 criteria.

// Creating new variable from data.js
var tableData = data

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


// Using multiple input tags and/or select dropdowns, write JavaScript code so the user can to 
// set multiple filters and search for UFO sightings using the following criteria based on the 
// table columns: date/time, city, state, country, shape

// Dictionary for filtered data
var new_data = {};

// Create event handlers
d3.selectAll('.filter').on('change', runEnter);

// Event handler function for the form
function runEnter(){ 

    // Prevent page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var changedElement = d3.select(this).select('input');
    var inputValue = changedElement.property('value');
    var inputElement = changedElement.attr('id');

    // Adding input values to dictionary if it exists
    if (inputValue){
        new_data[inputElement] = inputValue;
    }

    else{
        delete new_data[inputElement];
    }

    // Calling filter data function
    filter_Data();
};


// Creating function to filter data based on search input
function filter_Data(){

    // Creating new variable for filtered data
    var filteredData = tableData

    // Using object entries to loop through input keys console.log each ufo filtered value
    Object.entries(new_data).forEach(([key,value]) => {
        filteredData = filteredData.filter(ufo_sighting => ufo_sighting[key] === value)
        console.log(filteredData);

        // Clearing the table body
        tbody.html('')
        
        // Looping through the filtered data and appending it to the table
        filteredData.forEach(function(ufo){
        
            // Use d3 to append one table row tr for each ufo object
            var row = tbody.append('tr');

            // Using object entries to loop through input keys and to console.log each ufo value
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
    });
};

    
    // trying something...
    // Object.entries(filteredData, new_data).forEach(([key,value]) => {
    // if (key === 'state'|| key === 'country'){
    //     value = value.toUpperCase();
    // }
    // else if (key === 'city'){
    //     value = value.replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase());
    // };
    // });