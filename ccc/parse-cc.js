const fs = require('fs');

// Read the JSON file
fs.readFile('ccc.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    try {
      // Parse JSON data
      const jsonData = JSON.parse(data);

      // Now you have jsonData, you can perform operations on it
      // Define cccParagraphs object
      let cccParagraphs = {};

      // Iterate through page_nodes properties
      for (let key in jsonData.page_nodes) {
          if (jsonData.page_nodes.hasOwnProperty(key)) {
              let node = jsonData.page_nodes[key];
              // Check if the node has paragraphs
              if (node.paragraphs) {
                  // Iterate through paragraphs
                  node.paragraphs.forEach(paragraph => {
                      // Check if the paragraph has elements
                      if (paragraph.elements) {
                          // Iterate through elements
                          for (let i = 0; i < paragraph.elements.length; i++) {
                              let element = paragraph.elements[i];
                              // Check if the element type is "ref-ccc"
                              if (element.type === "ref-ccc") {
                                  // Get the sibling element with type "text"
                                  let nextElement = paragraph.elements[i + 1];
                                  // Check if the next element exists and its type is "text"
                                  if (nextElement && nextElement.type === "text") {
                                      // Save ref_number value as cccNumber
                                      let cccNumber = element.ref_number;
                                      // Save text value
                                      let text = nextElement.text;
                                      // Save to cccParagraphs
                                      cccParagraphs[cccNumber] = text;
                                  }
                              }
                          }
                      }
                  });
              }
          }
      }

      console.log(JSON.stringify(cccParagraphs, null, 2));
  } catch (error) {
      console.error('Error parsing JSON:', error);
  }

});
