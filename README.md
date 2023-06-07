# A3 - Web Prototype by Gautham Srinivas (gsri0828)

# Installation and Setup  

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

   The server will be live at `https://localhost:1234`. This enables hot-reloading, so any changes you make to the code will be reflected in the browser immediately.

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

The GSRI0828 Tracker is a web application designed to track and manage songs in local storage. The application is built using HTML, JavaScript, and SCSS, and follows a clear and organized development process, with a strong emphasis on functionality and user experience.

# 🚀 Development Process -

##Changelog:

### Iteration 1: Creating a functioning form
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
- Added Favicon







The development of the GSRI0828 Tracker went through several iterations:

1. **Refining the Scope:** The initial phase of development was all about planning and preparation. This involved understanding the requirements and refining the scope of the application. The old data model was analsyed and a new model was created

2. **Building the Core Functionality:** With a clear plan in place, the next step was to start coding. The HTML structure was laid out first, providing the skeleton of the application. JavaScript was then used to add functionality to the application, such as adding and deleting songs. At this stage, the application was functional but lacked styling.

3. **Designing and Styling the Application:** Once the core functionality was in place, the focus shifted to design and styling. CSS was initially used to style the application, with the aim of making it visually appealing and easy to use. The design was kept simple and clean, with a focus on usability.

4. **Refining and Optimizing:** The final stage of development involved refining and optimizing the application. This included converting the CSS to SCSS for better organization and reusability of styles, and making the application responsive to ensure it looks good on all screen sizes. Performance was also a key focus at this stage, with efforts made to ensure the application runs smoothly and efficiently.

Throughout this process, the code was regularly tested and debugged to ensure it works as expected. Feedback was also sought from users to help identify any areas for improvement.

# 📚 Code Overview

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

// Retrieve songs from localStorage
songs = JSON.parse(localStorage.getItem('songs')) || [];

// ...

// Save songs to localStorage
localStorage.setItem('songs', JSON.stringify(songs));

- A function to save the songs to local storage.

## 🎓 Lessons Learned and Best Practices

Throughout the development of the GSRI0828 Tracker, several lessons were learned and best practices were followed:

- **Modular Code**: By separating the HTML, SCSS, and JavaScript, the code is more organized and easier to maintain. Each file has a specific purpose and doesn't interfere with the others.

- **Responsive Design**: By using responsive design techniques in the SCSS, the application looks good on all screen sizes, from mobile to desktop. This improves the user experience and accessibility of the application.

- **Form Validation**: By validating the form inputs in the JavaScript, the application ensures that only valid songs are added to the list. This improves the reliability and usability of the application.

- **Confirmation Dialogs**: By showing confirmation dialogs before performing certain actions, the application prevents accidental data loss. This improves the user experience and trust in the application.

- **SCSS Over CSS**: By using SCSS instead of CSS, the styles are more organized and reusable. Variables and mixins make it easier to maintain a consistent design and make changes.

## 🚧 Future Improvements

While the Music Tracker app is functional and user-friendly, there are several potential improvements for future iterations:

- **Database Integration**: Currently, the songs are stored in local storage. Integrating a database, such as MongoDB, would allow the songs to be stored in the cloud, making them accessible from anywhere.

- **User Accounts**: Allowing users to create accounts would enable them to save their songs and access them from any device. This would improve the usability and accessibility of the application.

- **Search and Filter**: Adding a search or filter feature would make it easier for users to find specific songs in the list.

- **Sort Songs**: Allowing users to sort the songs by different criteria, such as title or artist, would improve the usability of the application.

- **Play songs**: Generating and providing a link to the song on YouTube or Spotify would allow users to listen to the song directly from the application.

---
By Gautham Srinivas (gsri0828) for DECO2017 A3

Criteria:
In-depth and insightful documentation of the development process, iterations, and improvements, with a strong emphasis on lessons learned and best practices.

Meticulous and easy-to-follow outline of application configuration and deployment procedures, ensuring seamless setup and configuration for future developers. 

Exceptional guidance for future developers to understand and build upon the work, complete with well-considered recommendations for further improvements or extensions.