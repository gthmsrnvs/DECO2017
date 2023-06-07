# A3 - Web Prototype by Gautham Srinivas (gsri0828)

# 🔧 Installation and Setup  

Ensure that you have Node.js and a git client installed. If you do not, you can download them from the following links: [Node.js](https://nodejs.org/en/download/) and [Git](https://git-scm.com/downloads).

## Getting Started

1. **Clone the GitHub Repository:**
   Open your terminal and use the following command to clone the repository, replacing `<repository_url>` with the URL of the GitHub repository:

   ```bash
   git clone <repository_url>
   ```

   Here is the URL to my project: https://github.com/gthmsrnvs/gsri0828_tracker.git

2. **Navigate to the Project Directory:**
   Move to your project's directory with the following command, replacing `<repository_name>` with the project's name: 

   ```bash
   cd <repository_name>
   ```

   Here is the name of my project: gsri0828_tracker

3. **Install Dependencies:**
   Open your terminal and navigate to the root directory of the project. Then, run the following command:

   ```bash
   npm install
   ```

4. **Run development server:**

   You can now run a development server using the following command:

   ```bash
   npm run dev
   ```

   The server will be live at `https://localhost:1234`. This enables hot-reloading, so any changes you make to the code will be reflected in the browser immediately which is ideal for testing any changes.

Remember, you can always stop your server by pressing 'Control + C'.

5. **Building the Project:** (optional)
   Once development is complete, to build your project, you can use the following command:

   ```bash
   npm run prestart
   ```

   This will create a 'output' folder with all your bundled/minified files. Now, the app is ready for deployment!

6. **Run the Project:** (optional)
   You can now run the bundled application using the following command:

   ```bash
   node server.js
   ```

# 🎵 Project Overview

The GSRI0828 Tracker is a web application designed to add, view and delete songs in local storage. The application is built using HTML, JavaScript, and SCSS. It follows a clear and organized development process, with a strong emphasis on functionality and user experience.

# 📚 Development Documentation 
## Introduction
The project was developed iteratively, with each commit representing a major step in the evolution of the application. This documentation provides an in-depth look at the development process, highlighting key iterations, improvements, lessons learned, and best practices. The precursor to development was all about planning and preparation. This involved understanding the requirements and features while refining the scope of the application. 

The old data model was improved based on feedback from A2 and a new model was created:

| Property   | Description                                                                 | JS Data Type | Example Values                | User Input          |
|------------|-----------------------------------------------------------------------------|--------------|-------------------------------|---------------------|
| ID         | A unique identifier for the song.                                           | String       | "b3a0f9c1-9ac7-4eae-a2a9-1fc1c3c283a7" | No - Automatic Generate |
| Name       | The name of the song entered by the user.                                   | String       | "Bohemian Rhapsody"           | Yes - Text Field    |
| Artist     | The name of the artist who performed the song.                              | String       | "Queen"                       | Yes - Text Field    |
| Album      | The name of the album the song is from.                                     | String       | "A Night at the Opera"        | Yes - Text Field    |
| Mood       | The mood of the song as entered by the user.                                | String       | "Happy", "Sad", "Energetic"   | Yes - Text Field |
| DateAdded  | An automatically generated date for when the song was added.                | String       | "12/20/2022, 16:30:00"        | No - Automatic Generate |
| Genre      | The genre of the song as entered by the user.                               | String       | "Rock", "Pop", "Classical"    | Yes - Text Field |
| Duration   | The duration of the song in the format MM:SS as entered by the user.        | String       | "05:55"                       | Yes - Text Field    |
| Rating     | The star rating of the song as selected by the user.                        | Number       | "1", "2", "3", "4", "5"       | Yes - Radio Buttons |

# 👀 Code Overview

### HTML (`index.html`)

The HTML file provides the structure of the application. It includes a form for adding songs, a list for displaying the songs, and dialogs for confirming actions and displaying song details.

### SCSS (`main.scss`)

The SCSS file provides the styles for the application. It uses variables for consistent color scheme and mixins for common styles. The SCSS is then compiled into CSS for the browser to interpret.

### JavaScript (`script.js`)

The JavaScript file provides the functionality of the application. It includes:

- Variables to store references to HTML elements.
- An array to hold songs.
- Functions to update the song list, add a song to the list, and handle form submission.
- Event listeners for form submission, clicking on a song, and confirming actions.
- A function to load the songs from local storage.
- A function to save the songs to local storage.

# 🔄 Development Process: Iterations and Improvements
### 1. Form and Star Rating Mechanism
The project began with the addition of a form with a star rating mechanism using HTML and JS (`commit eb9b2102f8031822eea846fbffb1e668bc12767e`). This allowed users to rate songs, and was the first interactive element in the application. The CSS for the star rating mechanism was added next (`commit 60ca4de1f4908809bcda047ca7727e9e9fa64d36`), ensuring that the feature was not only functional but also visually appealing.

### 2. UI Improvements and Containers
The application was then put into a main container and the CSS was edited for better organization and improved visual appeal (`commit e7b8b0f79c029cb3fa08ebc6fdd058373619fa60`). This was followed by an update to the SongList through the updateSongList() function (`commit 6723552a1a2b03192a90afe81ab398f6e839e9cd`), ensuring that the list of songs was always up-to-date in the list and in local storage after a song was added or deleted.

### 3. Song Management Features
The next phase of development focused on song management. A delete button was added that removes a song from the list and storage (`commit 0020d9da9f4f133ee64c73d92b987081c0c9ca72`), providing users with more control over their song list. To prevent accidental deletions, a confirmation prompt was added for adding a song (`commit f37ac10a8a2a2f45b29995e51655a83ad4eb1347`). This also helped build trust between the user and the application, as the user is assured that their songs will not be deleted without their consent.

### 4. Server Creation and Semantic HTML
The creation of a Node server (`commit b2cf4c0b8ae01a7a8b3c74e40bbd976f03c82f2c`) marked a significant step in the project, allowing for future developers/users to access the application. This was followed by an update to the div elements to use semantic HTML elements (`commit 71b15d61461d648d4de2c29166a28bf1db5ee9ae`), improving the accessibility and readability of the code.

### 5. Visual Enhancements and Interactivity
The application was then visually enhanced with the addition of two different fonts from google and a p5.js sketch for the background (`commit ca259fad6cf7ca71da0046ae9fab548b6fa169ce`). Confirmation prompts were recreated using HTML dialogs as this was an efficient and latest way to create pop-ups (`commit d041a0d94386647effbdb8a8fb9c64edbbab2cdb`).

### 6. Song List Improvements
Initially the song list removed songs by matching each of the properties between the songs array and the list item (`commit 45123b9e5a9ec4afded5230928c23c5320e59aee`). This was inefficient for the performance of the application as it would take too much time to match 5 sdifferent criteria against large scale song lists. Universally Unique Identifiers (UUIDs) were used for songIDs through the JSDelivr library and a confirmation dialog was added for deleting a song (`commit cce25eae8bb1e3a150e5fbf49ea1e8fb16033b6d`), enhancing the UI of the song management features. At this stage, the song list aside element was given a max height and an overflow-y of auto to create a vertical scroll group when there was a large list of items. 

### 7. User Experience Enhancements
Next, the song input field was set to automatically focus when the window loads (`commit 863b75babf5d5c757e3ed93975d368ebcb59d5cc`), enhancing the user experience by making it easier to add songs. The song list was styled to have hover interactions and a playlist-like appearance using lines to separate each list item (`commit 108976fa8c66ecc602d10c6b12faf8a7257d246a`). This made the song list more visually appealing and intuitive to use as users could tell which song they were hovering over and which song they were deleting.

### 8. Documentation and Project Structure
The project was documented in this Readme.md file (`commit d958813044b859dc1df3b4cba206e8750028d326`). This was followed by adding SCSS and fixing the root path of the parcel to create an output folder for the dist files (`commit 8dc687fd353004327c81f29bfcba2de772398711`), improving the project structure and making it easier to maintain and develop for future developers.

### 9. Styling and User Interface Improvements
Further styling was done by class for dialogs (`commit 1c25667e3ebac66e0abfed6d7cd1b55c821646c0`), and the SCSS was updated to be nested with old and redundant styles removed (`commit 876739ffd6c0e002eed65956fcb966b75f9de363`). I then added media queries to make the app responsive across smartphones, tablets and desktops (`commit 9b7bc0b3c0fb55dbe7c4f01ce266da452581cedd`), improving the accessibility of the application on different devices.

### 10. Form Validation and Additional Song Properties
The application became more advanced with the addition of genre, dateAdded, and duration properties (`commit d1fe0d303a2baa51c906faae8ba3a2d040db25f6`). Form validation was added in the JS to check if the duration was in a valid format (`commit 5113fb8d004efb2156580d550d91e5b0712d9f28`), ensuring that the data entered by the user is appropriate and usable.

### 11. Final Touches
Finally, the form was styled again to fit on the screen without overflow due to the newly added properties (`commit 58450a19e95a6afaf27315e80652905e5690d96a`). The submit button was styled to use a plus sign for a friendly UI rather than a text label (`commit 2a03bfca58599f9123577b38e5e6e374c105157b`). Lastly, a guitar favicon was added (`commit dc23247020a95205205e6eb77a25c111c13d6a99`), giving the application a unique and recognizable icon in the browser tab. The royalty-free favicon was obtained from https://icon-icons.com/icon/guitar-music/3286

## 🧪 Testing
The app was tested on Arc, Chrome and Safari browsers for functionality and for responsiveness by resizing the window and checking if the protoype was functional. You can test the app using the "npm run dev" command in the terminal. Ideally, this app should be used in the Arc Browser (built on Chormium) which is free for all students however, it is functional in other browsers as well.

## 💡 Lessons Learned and Best Practices
Throughout the development of this application, several key lessons were learned:

### Iterative Development: 
The process of adding features one at a time and then refining them in the JS and CSS proved to be effective and is a valuable method that I will use in future web development. This allowed for each feature to be thoroughly tested and improved upon before moving on to the next one - minimising room for error and ensuring that the application was robust. Trying to add too many features at the same time ended up in a confusing mess of code and led to me revert the code using Github to a useable state, especially when I was learning new concepts such as SCSS and HTML dialogs.

### User Experience: 
A significant amount of effort was put into improving the user experience, from automatic focusing of input fields to confirmation prompts for song deletion. These features, while small on their own, greatly enhance the overall user experience when combined. This gave the application a more professional feel and made it more satisfying to use. Focusing on the UX was a valuable lesson that will be carried forward into future projects.

### Semantic HTML: 
The use of semantic HTML elements improved the accessibility and readability of the code. This is a best practice that will be carried forward into future projects and it allowed me to style elements more efficiently using CSS as I didnt have to repeatedly search though the code to find the element I was looking for.

### Responsive Design: 
The use of media queries to make the app responsive was a key improvement. This ensures that the application is usable on a variety of devices, which is crucial in today's multi-device world. It is a best practice that can be easily carried forward into future projects.

### Form Validation: 
Adding form validation was a crucial step in ensuring data integrity. By checking if the duration is in a valid format, we can prevent incorrect data from being entered into the system. Otherwise, future developers will be left with a mess of data that is difficult to work with. This is a best practice that will be carried forward into future projects.

### Version Control: 
The use of Git for version control was invaluable. It allowed for clear tracking of changes and made it easy to revert to previous versions when necessary. Each commit was made with a clear and concise message, which aided my documentation process greatly. This is a key lesson that I learnt during this project and is a best practice I will continue to implement. 

### Styling and Visual Appeal: 
A significant amount of time was spent on styling and making the application visually appealing. This included using SCSS for more efficient styling, adding a p5.js sketch for the background, and using a guitar favicon to give the application a unique identity overall. These small visual changes gave the app an identity and taught me the importance of visual appeal in web development.

### Documentation: 
The importance of good documentation was a major lesson for me in this project. Adding a comprehensive Readme.md file early on and regularly updating Github with clear and concise commit messages made it easier for me to communicate my project to developers in the future. This best practice helps other developers understand the purpose and functionality of my code.

## 🛠️ Changelog of key changes (Commits from Github)
Please view the Github file history for a full list of commits and changes.

eb9b2102f8031822eea846fbffb1e668bc12767e - Added a Form with Star Rating Mechanism
60ca4de1f4908809bcda047ca7727e9e9fa64d36 - Added the CSS for Star Rating Mechanism
e7b8b0f79c029cb3fa08ebc6fdd058373619fa60 - put everything in a container and edited css
6723552a1a2b03192a90afe81ab398f6e839e9cd - Update the SongList 
0020d9da9f4f133ee64c73d92b987081c0c9ca72 - Added delete button that removes song from list and storage
f37ac10a8a2a2f45b29995e51655a83ad4eb1347 - Added confirmation prompt for adding a song
b2cf4c0b8ae01a7a8b3c74e40bbd976f03c82f2c - Created Node server
71b15d61461d648d4de2c29166a28bf1db5ee9ae - Updated div elements to use semantic HTML elements
ca259fad6cf7ca71da0046ae9fab548b6fa169ce - Added fonts and a p5.js sketch for the background
d041a0d94386647effbdb8a8fb9c64edbbab2cdb - Recreated confirmation prompts using dialog
45123b9e5a9ec4afded5230928c23c5320e59aee - Remove song from list if item properties match song properties
cce25eae8bb1e3a150e5fbf49ea1e8fb16033b6d - Added UUID for songID's and confirmation dialog for deleting a song
863b75babf5d5c757e3ed93975d368ebcb59d5cc - Song Input field is automatically focused when window loads
108976fa8c66ecc602d10c6b12faf8a7257d246a - Styled song list to have hover interactions and playlist appearance
d958813044b859dc1df3b4cba206e8750028d326 - Added Readme.md and began documentation
8dc687fd353004327c81f29bfcba2de772398711 - Added SCSS and fixed the root path of the parcel
b0ae956bf84cd3af5c4e0e815c9c27fad9334af1 - Added an output folder for the dist to be created in and put it in gitignore file
1c25667e3ebac66e0abfed6d7cd1b55c821646c0 - Styled Dialogs by class
876739ffd6c0e002eed65956fcb966b75f9de363 - Updated the SCSS to be nested and removed old styles
9b7bc0b3c0fb55dbe7c4f01ce266da452581cedd - Added Media Queries to make the app responsive
d1fe0d303a2baa51c906faae8ba3a2d040db25f6 - Added genre, dateAdded and duration properties.
5113fb8d004efb2156580d550d91e5b0712d9f28 - Form Validation to check if duration is in valid format
58450a19e95a6afaf27315e80652905e5690d96a - Styled the form to fit on the screen without overflow
2a03bfca58599f9123577b38e5e6e374c105157b - Styled submit button to use a plus sign for friendly UI
dc23247020a95205205e6eb77a25c111c13d6a99 - Added Guitar Favicon

## 🎓 Lessons Learned and Best Practices

Throughout the development of the GSRI0828 Tracker, several lessons were learned and best practices were followed:

- **Modular Code**: By separating the HTML, SCSS, and JavaScript, the code is more organized and easier to maintain. Each file has a specific purpose and doesn't interfere with the others.

- **Responsive Design**: By using responsive design techniques in the SCSS, the application looks good on all screen sizes, from mobile to desktop. This improves the user experience and accessibility of the application.

- **Form Validation**: By validating the form inputs in the JavaScript, the application ensures that only valid songs are added to the list. This improves the reliability and usability of the application.

- **Confirmation Dialogs**: By showing confirmation dialogs before performing certain actions, the application prevents accidental data loss. This improves the user experience and trust in the application.

- **SCSS Over CSS**: By using SCSS instead of CSS, the styles are more organized and reusable. Variables and mixins make it easier to maintain a consistent design and make changes.

## 🚧 Future Improvements and Extensions

While the Music Tracker app is functional and user-friendly, there are many potential improvements for future iterations:

- **Database Integration**: Currently, the songs are stored in local storage. Integrating a database, such as MongoDB, would allow the songs to be stored in the cloud, making them accessible from anywhere.

- **User Accounts**: Allowing users to create accounts would enable them to save their songs and access them from any device. This would improve the usability and accessibility of the application.

- **Search and Filter**: Adding a search or filter feature would make it easier for users to find specific songs in the list.

- **Sort Songs**: Allowing users to sort the songs by different criteria, such as title or artist, would improve the usability of the application.

- **Play songs**: Generating and providing a link to the song on YouTube or Spotify would allow users to listen to the song directly from the application.

# References
https://chat.openai.com/?model=gpt-3.5 - GPT-3 Chatbot was sometimes used when I was stuck with an error.

https://codepen.io/hesguru/pen/BaybqXv - CSS Star Rating

https://www.w3schools.com/js/js_validation.asp - Form Validation

https://p5js.org/reference/ - Used for p5.js sketch

https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage - for Local Storage API

https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm - for Confirmation Dialogs

https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector - for Query Selectors

https://www.digitalocean.com/community/tutorials/how-to-bundle-a-web-app-with-parcel-js - for bundling with parcel

https://www.w3schools.com/css/css_rwd_mediaqueries.asp - for media queries

https://www.w3schools.com/css/css3_buttons.asp - for button styling

https://www.w3schools.com/css/css3_shadows_box.asp - for box shadow styling

---
By Gautham Srinivas (gsri0828) for DECO2017 A3