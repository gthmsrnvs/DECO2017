// Variables to store references to HTML elements
const mySongsContainer = document.querySelector('.mySongsContainer');
const songListContainer = document.querySelector('.song-list-container');
const songList = document.getElementById('songList');
const form = document.getElementById('form');
const addDialog = document.getElementById('addDialog');
const deleteDialog = document.getElementById('deleteDialog');
const deleteYes = document.getElementById('deleteYes');
const deleteNo = document.getElementById('deleteNo');
const confirmYes = document.getElementById('confirmYes');
const confirmNo = document.getElementById('confirmNo');
const songNameInput = document.getElementById('songName');

// Set focus on the song input field when the page loads
window.addEventListener('load', function () {
  songNameInput.focus();
});

// Array to hold songs
let songs = [];

// Retrieve songs from localStorage
songs = JSON.parse(localStorage.getItem('songs')) || [];

// Function to update the song list
function updateSongList() {
  // Clear the existing list
  songList.innerHTML = '';

  // Iterate over the songs array and create list items for each song
  songs.forEach(song => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `${song.name} by ${song.artist}`;
    songList.appendChild(listItem);

    //Each song has an event listener that can be clicked to show a detailed view.
    listItem.addEventListener('click', function () {
      const detailDialog = document.getElementById('detailDialog');
      const detailView = document.getElementById('songDetail');
      detailView.innerHTML = `<p>Name: ${song.name}</p>
                            <p>Artist: ${song.artist}</p>
                            <p>Album: ${song.album}</p>
                            <p>Mood: ${song.mood}</p>
                            <p>Rating: ${song.rating}</p>
                            <p>Date Added: ${song.dateAdded}</p>
                            <p>Genre: ${song.genre}</p>
                            <p>Duration: ${song.duration}</p>`;
      detailDialog.showModal();
    });

    //Each list item has a delete button appended to it as a child element.
    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-trash-alt"></i>'; //use font awesome icon for trash can
    listItem.appendChild(button);

    //Delete button event listener
    button.addEventListener('click', function () {
      event.stopPropagation(); //This method stops the event from propagating to the parent elements, effectively preventing the details pop up from appearing when the delete button is clicked.
      // Show confirmation prompt
      deleteDialog.showModal();
      // if yes is clicked, delete song and close dialog
      deleteYes.addEventListener('click', function () {
        // Remove the song from the list
        songs = songs.filter(s => !(s.ID === song.ID)); //Uses Unique ID to identify song to delete
        // Update localStorage
        localStorage.setItem('songs', JSON.stringify(songs));
        // Update the song list
        updateSongList();
        // Close the dialog
        deleteDialog.close();
      });
      deleteNo.addEventListener('click', function () {
        // Close the dialog without deleting if No is clicked
        deleteDialog.close();
      });
    });
  });
};

// Close detail view on 'Close' button click
document.getElementById('closeDetail').addEventListener('click', function () {
  document.getElementById('detailDialog').close();
});

let song; // to hold the song object when the form is submitted

// Function to add song to the list
function addSongToList() {
  // Add the song to the songs array
  songs.push(song);

  // Save songs to localStorage
  localStorage.setItem('songs', JSON.stringify(songs));

  // Clear form inputs
  form.reset();

  // Update song list
  updateSongList();
}

// Event listeners for dialog confirmation
confirmYes.addEventListener('click', function () {
  // Add song to list if Yes is clicked
  addSongToList();

  // Close the dialog
  addDialog.close();
});

confirmNo.addEventListener('click', function () {
  // Close the dialog without adding if No is clicked
  addDialog.close();
});

// Handle form submission
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the form from submitting and reloading the page

  // Get the duration input value
  const duration = document.getElementById('duration').value;

  // Split the duration into minutes and seconds
  const parts = duration.split(':');

  // Check if the duration is in a valid format
  // The if statement checks for the following conditions:
  // 1. parts.length !== 2: The input should be split into exactly two parts (minutes and seconds)
  // 2. isNaN(parts[0]) || isNaN(parts[1]): Both parts should be numbers (not NaN)
  // 3. parts[0] < 0 || parts[0] > 59: The minutes part should be between 0 and 59
  // 4. parts[1] < 0 || parts[1] > 59: The seconds part should be between 0 and 59
  if (parts.length !== 2 || isNaN(parts[0]) || isNaN(parts[1]) || parts[0] < 0 || parts[0] > 59 || parts[1] < 0 || parts[1] > 59) { //isNaN = is not a number
    alert('Invalid duration. Please enter a duration in the format MM:SS, where MM and SS are numbers between 0 and 59.');
    event.preventDefault(); // Prevent the form from being submitted
    return;
  }

  // Generate a unique ID for the song
  // const songID = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
  const songID = uuidv4(); //UUID is a Universally Unique Identifier. It is a 128-bit number used to identify information in computer systems worldwide. It is generated through the JSdelivr CDN.
  console.log(songID); // This will output a new unique identifier each time the page is reloaded

  // Create a song object with form input values
  song = {
    ID: songID, //this is a Universally Unique Identifier
    name: document.getElementById('songName').value,
    artist: document.getElementById('artistName').value,
    album: document.getElementById('albumName').value,
    mood: document.getElementById('mood').value,
    dateAdded: new Date().toLocaleString(), // Current date and time
    genre: document.getElementById('genre').value, 
    duration: document.getElementById('duration').value, 
    rating: document.querySelector('input[name="rate"]:checked').value
  };

  // Show confirmation prompt
  addDialog.showModal();
});

// Initial update of the song list
updateSongList();
