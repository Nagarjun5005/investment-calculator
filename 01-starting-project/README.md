### Creating and Using a Data Model | Passing Data from Parent to child
1. Create a investment-result component
2. Investment-result.html has table data --><tbody> data should be rendered dynamically.
3. Use @Input to accept the data -->it should be an array
4. Render the component in app component
5. Bind the results to investment-component in app component " [results]="resultsData" "
6. Store the resultsData in AppComponent using a array variable "this.resultsData=annualData"


### Outputting data in a table
1. Conditionally Render the default message  -->Press Calculate to get the data
2. Generate the rows data dynamically using for each 
3. Formatting Output with a pipe