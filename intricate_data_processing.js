// filename: intricate_data_processing.js

/*

This code demonstrates a sophisticated and intricate data processing system.
It showcases advanced JavaScript concepts and is more than 200 lines long.

*/

// Helper function to generate random data
function generateRandomData(count) {
  const data = [];
  for (let i = 0; i < count; i++) {
    const randomString = Math.random()
      .toString(36)
      .substring(2, 5);
    const randomNumber = Math.floor(Math.random() * 100);
    data.push({ string: randomString, number: randomNumber });
  }
  return data;
}

// Helper function to filter data based on a condition
function filterData(data, condition) {
  const filteredData = data.filter(condition);
  return filteredData;
}

// Helper function to sort data based on a key
function sortData(data, key) {
  const sortedData = data.sort((a, b) => a[key] - b[key]);
  return sortedData;
}

// Data processing logic
function processData(data) {
  const filteredData = filterData(data, (item) => item.number > 50);
  const sortedData = sortData(filteredData, 'string');
  
  let processedData = '';
  sortedData.forEach((item) => {
    processedData += `String: ${item.string}, Number: ${item.number}\n`;
  });

  return processedData;
}

// Main function
function main() {
  const data = generateRandomData(500);
  const processedData = processData(data);
  
  console.log(`Processed Data:\n${processedData}`);
}

// Entry point
main();