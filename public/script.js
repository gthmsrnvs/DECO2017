// Variables to store references to HTML elements
const addSongBtn = document.getElementById('addSongButton');
const formContainer = document.querySelector('.form-container');
const songListContainer = document.querySelector('.song-list-container');
const songList = document.getElementById('songList');
const moodVisualisation = document.getElementById('moodVisualisation');

// Create a new p5.js sketch and attach it to the moodVisualisation div

//Put song data in local storage----------------------------------------------
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
  // Create and style the visualization in the div
  // Add your p5.js code here to generate the 3D, animated, and interactive mood visualization
  // You can create a new p5.js sketch and attach it to the moodVisualisation div
  // Example: new p5(sketch, moodVisualisation);
}

// Toggle form visibility and button appearance
addSongBtn.addEventListener('click', function() {
  const form = document.getElementById('form');
  addSongBtn.classList.toggle('clicked');
  form.style.display = form.style.display === 'none' ? 'block' : 'none';

  // Adjust layout based on form visibility
  if (form.style.display === 'none') {
    songListContainer.style.width = '100%';
  } else {
    songListContainer.style.width = '50%';
  }
});

// Handle form submission
form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Create a song object with form input values
  const song = {
    name: document.getElementById('songName').value,
    artist: document.getElementById('artistName').value,
    album: document.getElementById('albumName').value,
    mood: document.getElementById('mood').value,
    rating: document.querySelector('input[name="rate"]:checked').value
  };

  // Show confirmation prompt
  const confirmPrompt = confirm('Are you sure you want to add this song?');
  if (confirmPrompt) {
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
});

// Initial update of the song list
updateSongList();
// Initial update of the mood visualisation
updateMoodVisualisation();

