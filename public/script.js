// Variables to store references to HTML elements
const addSongBtn = document.getElementById('addSongButton');
const mySongsContainer = document.querySelector('.mySongsContainer');
const songListContainer = document.querySelector('.song-list-container');
const myVisualisation = document.querySelector('.myVisualisationContainer');
const songList = document.getElementById('songList');
const moodVisualisation = document.getElementById('moodVisualisation');
const form = document.getElementById('form');
const mySongsNav = document.getElementById('mySongsNav');
const myVisualisationNav = document.getElementById('visualiseNav');
const confirmDialog = document.getElementById('confirmDialog');
const confirmYes = document.getElementById('confirmYes');
const confirmNo = document.getElementById('confirmNo');

//Navigation menu event listeners
mySongsNav.addEventListener('click', function() {
  mySongsContainer.style.display = mySongsContainer.style.display === 'block' ? 'none' : 'block';
});

myVisualisationNav.addEventListener('click', function() {
  myVisualisation.style.display = myVisualisation.style.display === 'none' ? 'block' : 'none';
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
    listItem.textContent = `${song.name} - ${song.artist}`;
    songList.appendChild(listItem);
  });
}

// Function to update the mood visualisation
function updateMoodVisualisation() {
  // Clear the existing visualisation
  moodVisualisation.innerHTML = '';
}

// Toggle form visibility and button appearance
addSongBtn.addEventListener('click', function() {
  addSongBtn.classList.toggle('clicked');
  form.style.display = form.style.display === 'none' ? 'block' : 'none';

  // Adjust layout based on form visibility
  if (form.style.display === 'none') {
    songListContainer.style.width = '100%';
  } else {
    songListContainer.style.width = '50%';
  }
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

  // Update mood visualisation
  updateMoodVisualisation();
}

// Event listeners for dialog confirmation
confirmYes.addEventListener('click', function() {
  // Add song to list if Yes is clicked
  addSongToList();
  
  // Close the dialog
  confirmDialog.close();
});

confirmNo.addEventListener('click', function() {
  // Close the dialog without adding if No is clicked
  confirmDialog.close();
});

// Handle form submission
form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Create a song object with form input values
  song = {
    name: document.getElementById('songName').value,
    artist: document.getElementById('artistName').value,
    album: document.getElementById('albumName').value,
    mood: document.getElementById('mood').value,
    rating: document.querySelector('input[name="rate"]:checked').value
  };

  // Show confirmation prompt
  confirmDialog.showModal();
});

// Initial update of the song list
updateSongList();

// Initial update of the mood visualisation
updateMoodVisualisation();
