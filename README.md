# Installation Instructions

Ensure that you have Node.js, npm, and Express.js installed on your machine. If you do not have Express.js, install it globally using npm:

```bash
npm install -g express
```

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

4. **Parcel Setup:**
   Update your `package.json` scripts to include the following:

   ```json
   "scripts": {
     "prestart": "parcel build ./public/index.html",
     "dev": "parcel serve ./public/index.html"
   },
   ```

   Update your `server.js` (or equivalent server-side script) to serve static files from the Parcel's dist directory and change the file to serve for the root directory:

   ```javascript
   app.use(express.static(__dirname + '/dist'));
   res.sendFile(__dirname + '/dist/index.html');
   ```

   You can now run your development server using the following command:

   ```bash
   npm run dev
   ```

   The server will be live at `https://localhost:1234`.

5. **SCSS Setup:**
   Create a new SCSS file for each different module in your project under the `public/scss` directory. Import these modules into the `main.scss` file using the `@import` directive.

   Your server is already set to compile and include your SCSS files in the project. When you make changes to any SCSS files, the server will automatically compile them to CSS and apply them to your project.

6. **Building the Project:**
   Finally, to build your project, you can use the following command:

   ```bash
   npm run prestart
   ```

   This will create a 'dist' folder with all your bundled files. Now, the app is ready for deployment!

Remember, you can always stop your server by pressing 'Control + C'.
