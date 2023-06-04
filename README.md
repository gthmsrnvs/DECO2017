# Installation Instructions

Ensure that you have Node.js and a git client installed. If you do not, you can download them from the following links: [Node.js](https://nodejs.org/en/download/) and [Git](https://git-scm.com/downloads).

## Getting Started

1. **Clone the GitHub Repository:**
   Use the following command to clone the repository, replacing `<repository_url>` with the URL of the GitHub repository:

   ```bash
   git clone <repository_url>
   ```

2. **Navigate to the Project Directory:**
   Move to your project's directory with the following command, replacing `<repository_name>` with your project's name:

   ```bash
   cd <repository_name>
   ```

3. **Install Dependencies:**
   Open your terminal and navigate to the root directory of the project. Then, run the following command:

   ```bash
   npm install
   ```

4. **Run development server::**

   You can now run your development server using the following command:

   ```bash
   npm run dev
   ```

   The server will be live at `https://localhost:1234`.

5. **Building the Project:**
   Finally, to build your project, you can use the following command:

   ```bash
   npm run prestart
   ```

   This will create a 'dist' folder with all your bundled files. Now, the app is ready for deployment!

Remember, you can always stop your server by pressing 'Control + C'.
