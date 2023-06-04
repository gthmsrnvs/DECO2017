// Variables to store references to HTML elements
const addSongBtn = document.getElementById('addSongButton'); //button to toggle form visibility
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
window.addEventListener('load', function() {
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

    listItem.addEventListener('click', function () {
      const detailDialog = document.getElementById('detailDialog');
      const detailView = document.getElementById('songDetail');
      detailView.innerHTML = `<p>Name: ${song.name}</p>
                            <p>Artist: ${song.artist}</p>
                            <p>Album: ${song.album}</p>
                            <p>Mood: ${song.mood}</p>
                            <p>Rating: ${song.rating}</p>`;
      detailDialog.showModal();
    });

    //Each song has an event listener that can be clicked to show a detailed view.
    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-trash-alt"></i>'; //use font awesome icon for trash can
    listItem.appendChild(button);

    //Delete button event listener
    button.addEventListener('click', function () {
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
      }, { once: true }); //once: true means the event listener will only run once
    });
  });
};

// Close detail view on 'Close' button click
document.getElementById('closeDetail').addEventListener('click', function () {
  document.getElementById('detailDialog').close();
});

// Randomise colours using addSongBtn event listener
addSongBtn.addEventListener('click', function () {
  //Toggle the form between visible and hidden
  addSongBtn.classList.toggle('clicked');

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
  event.preventDefault();

  // Generate a unique ID for the song
  // const songID = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
  const songID = uuidv4();
  console.log(songID); // This will output a new unique identifier each time the page is reloaded

  // Create a song object with form input values
  song = {
    ID: songID, //this is a Universally Unique Identifier generated through the JSdelivr CDN
    name: document.getElementById('songName').value,
    artist: document.getElementById('artistName').value,
    album: document.getElementById('albumName').value,
    mood: document.getElementById('mood').value,
    rating: document.querySelector('input[name="rate"]:checked').value
  };

  // Show confirmation prompt
  addDialog.showModal();
});

// Initial update of the song list
updateSongList();
