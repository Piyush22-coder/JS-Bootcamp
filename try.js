// try {
//     const jsonData = {"name":"Alice","age":25};
//     const user = JSON.parse(jsonData);
//     console.log("User data:", user.name);

//     const badJson = `{"name":"Bob"}`;
//     const badUser = JSON.parse(badJson); 
//     console.log(badUser.name);
// }catch (error) {
//     console.error("An error occurred! Details:", error.message);
// }

// console.log("Program continues to run here");


// const fs = require(`fs/promises`);

// async function processNames(){
//     const inputFilePath ="names.txt";
//     const outputFilePath ="formatted_names.txt";

//     try{
//         console.log("Starting to process file...");
//         const fileContent = await fs.readFile(inputFilePath,`utf8`);
//         const names = fileContent.trim().split(`\n`);
//         console.log(`Read $(names.length)names.`);

//         const formattedNames=names.map(name=>{
//             const trimmedName=name.trim();
//             return trimmedName.charAt(0).toUpperCase()+trimmedName.slice(1).toLowerCase()
//         });
//         const outputContent = formattedNames.join(`\n`);
//         await fs.writeFile(outputFilePath,outputContent,`utf8`);
//         console.log(`Successfully processes names ad saved to $(outputFilePath)`);
//     } catch(error){
//         console.error("An error ocurred during file processing:",error.message);
//     }
// }
// processNames();

const fetch = require('node-fetch');

async function fetchPosts() {
  console.log("Fetching posts from API...");
  const url = 'https://jsonplaceholder.typicode.com/posts';

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const posts = await response.json();

    console.log("Successfully fetched posts!");
    posts.slice(0, 5).forEach(post => {
      console.log(`- ${post.title}`);
    });
  } catch (error) {
    console.error("Failed to fetch posts:", error.message);
  }
}

fetchPosts();