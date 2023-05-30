// Variables to store references to HTML elements
const addSongBtn = document.getElementById('addSongBtn');
const form = document.getElementById('songForm');
const songListContainer = document.getElementById('songListContainer');
const songList = document.getElementById('songList');
const mySongsNav = document.getElementById('mySongsNav');
const visualiseButton = document.getElementById('visualiseButton');
const moodVisualisation = document.getElementById('moodVisualisation');
const songForm = document.getElementById('songForm');

// Array to hold songs
let songs = [];

// Retrieve songs from localStorage
songs = JSON.parse(localStorage.getItem('songs')) || [];

// Update song list with most recent localStorage data
updateSongList();

addSongBtn.addEventListener("click", function () {
  if (form.style.display === "none" || form.style.display === "") {
    form.style.display = "block";
    addSongBtn.classList.add("rotate");
  } else {
    form.style.display = "none";
    addSongBtn.classList.remove("rotate");
  }
});

// Function to update song list
function updateSongList() {
  // Get song list element
  let songList = document.getElementById('songList');

  // Clear song list
  songList.innerHTML = '';

  // Add each song to the song list
  songs.forEach(function (song, index) {
    let listItem = document.createElement('li');
    let songInfo = document.createElement('span');
    songInfo.textContent = `${song.name} by ${song.artist} on ${song.album}. Mood: ${song.mood}. Rating: ${song.rating} stars.`;
    listItem.appendChild(songInfo);
    // Create the delete button
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i><br>';
    deleteButton.className = 'deleteButton';
    // Add click event listener to the delete button
    deleteButton.addEventListener('click', function () {
      // Show confirmation prompt
      let confirmDelete = confirm('Are you sure you want to delete this song?');
      if (confirmDelete) {
        // Remove song from songs array
        songs.splice(index, 1);

        // Save updated songs to localStorage
        localStorage.setItem('songs', JSON.stringify(songs));

        // Update song list
        updateSongList();
        // Update mood visualisation
        updateMoodVisualisation();
      }
    });
    // Append delete button to the song list item
    listItem.appendChild(deleteButton);

    // Append song list item to the song list
    songList.appendChild(listItem);
  });

  // Show song list
  songListContainer.style.display = 'block';
}

addSongBtn.addEventListener('click', function () {
  songForm.style.display = 'block';
});

// Show the song list when My Songs navigation link is clicked
mySongsNav.addEventListener('click', function () {
  moodVisualisation.style.display = 'none';
  songListContainer.style.display = songListContainer.style.display === 'none' ? 'block' : 'none';
});

// Show the visualisation when Visualise navigation link is clicked
visualiseButton.addEventListener('click', function () {
  // Hide all other containers
  songForm.style.display = 'none';
  songListContainer.style.display = 'none';
  // Show the visualisation container
  moodVisualisation.style.display = 'block';
  console.log('Visualise clicked');
  // Update the visualisation
  updateMoodVisualisation();
});

// Handle form submission
songForm.addEventListener('submit', function (event) {
  // Prevent form from submitting normally
  event.preventDefault();

  // Create a song object with form input values
  let song = {
    name: document.getElementById('songName').value,
    artist: document.getElementById('artistName').value,
    album: document.getElementById('albumName').value,
    mood: document.getElementById('mood').value,
    rating: document.querySelector('input[name="rate"]:checked').value
  };

  // Show Confirmation Prompt
  let cofirmPrompt = confirm('Are you sure you want to add this song?');
  if (cofirmPrompt) {
    // Add song to songs array
    songs.push(song);

    // Save songs to localStorage
    localStorage.setItem('songs', JSON.stringify(songs));

    // Clear form inputs
    songForm.reset();

    // Update song list
    updateSongList();
    // Update mood visualisation
    updateMoodVisualisation();
  }
});
