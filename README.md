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

## 🚀 Development Process - Iterations

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

- **More Song Details**: Currently, only the title, artist, album, mood and rating of the song are tracked. Adding more details, such as genre or release date, would make the application more useful.

---
By Gautham Srinivas (gsri0828) for DECO2017 A3

Criteria:
In-depth and insightful documentation of the development process, iterations, and improvements, with a strong emphasis on lessons learned and best practices.

Meticulous and easy-to-follow outline of application configuration and deployment procedures, ensuring seamless setup and configuration for future developers. 

Exceptional guidance for future developers to understand and build upon the work, complete with well-considered recommendations for further improvements or extensions.