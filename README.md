# A3 - Web Prototype by Gautham Srinivas (gsri0828)

# Installation and Setup - Meticulous and easy-to-follow outline of application configuration and deployment procedures, ensuring seamless setup and configuration for future developers. 

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

   You can now run your development server using the following command:

   ```bash
   npm run dev
   ```

   The server will be live at `https://localhost:1234`. This enables hotreloading, so any changes you make to the code will be reflected in the browser immediately.

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

2



Development Process:
Iterations:
Improvements:
Lessons Learned:
Best Practices:
- **Modular code**: The JavaScript code is organized into functions, each with a single responsibility. This makes the code easier to read, understand, and maintain.
- **Semantic HTML**: The HTML code uses semantic elements for better accessibility and SEO.
- **SCSS over CSS**: Using SCSS has made managing styles easier thanks to features like variables and nesting.
- **Local Storage**: The application uses the browser's local storage to persist tasks between sessions.
- **Responsive Design**: The application is responsive and works well on all screen sizes.
- **Code Formatting**: The code is formatted using Prettier to ensure consistency and readability.
- **Git**: The project uses Git for version control, with a clear and descriptive commit history that allows the developer to easily revert to a previous state of the project if needed.
- **GitHub**: The project is hosted on GitHub and deployed to GitHub pages, which updates automatically whenever new code is pushed to the main branch.
- **README**: The project includes a README file with installation instructions, a description of the project, what features it includes, what technologies were used, and any other relevant information.
- **Comments**: The code includes comments where necessary to explain complex logic, or to provide additional context where needed.


Future Improvements:
- Database to store the data ensuring scalability as the amount of users increases.
- Create custom playlists.
- User authentication where users can create accounts and save their playlists.

Exceptional guidance for future developers to understand and build upon the work, complete with well-considered recommendations for further improvements or extensions.
