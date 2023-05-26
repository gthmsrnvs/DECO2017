// Initialise variables
const addSongBtn = document.getElementById('addSongBtn');
const songForm = document.getElementById('songForm');
const songListContainer = document.getElementById('songListContainer');
const mySongsNav = document.getElementById('mySongsNav');
const moodVisualisation = document.getElementById('moodVisualisation');
const visualiseNav = document.getElementById('visualiseNav');
const visualiseButton = document.getElementById('visualiseButton');

window.onload = (event) => {
    // Retrieve songs from localStorage on page load
    songs = JSON.parse(localStorage.getItem('songs')) || [];
    // Update the song list and mood visualisation
    updateSongList();
    updateMoodVisualisation();
};

// Toggle form display when addSongBtn is clicked
addSongBtn.addEventListener('click', function () {
    if (songForm.style.display === 'none' || songForm.style.display === '') {
        songForm.style.display = 'block';
        addSongBtn.classList.add('close');
    } else {
        songForm.style.display = 'none';
        addSongBtn.classList.remove('close');
    }
});

//NAVIGATION===================================
// Show the song list when My Songs navigation link is clicked
mySongsNav.addEventListener('click', function () {
    moodVisualisation.style.display = 'none';
    songListContainer.style.display = songListContainer.style.display === 'none' ? 'block' : 'none';
    mySongsNav.classList.toggle('selected');
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

// Array to hold songs
let songs = [];

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

    //Show Confirmation Prompt
    let cofirmPrompt = confirm('Are you sure you want to add this song?');
    if(cofirmPrompt){

    // Add song to songs array
    songs.push(song);

    // Save songs to localStorage
    localStorage.setItem('songs', JSON.stringify(songs));

    // Clear form inputs
    songForm.reset();

    // Update song list
    updateSongList();
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

// Function to update mood visualisation
function updateMoodVisualisation() {
    // Get moodVisualisation element
    let moodVisualisation = document.getElementById('moodVisualisation');

    // Clear moodVisualisation
    moodVisualisation.innerHTML = '';

    // Create a bubble for each song
    for (let song of songs) {
        // Create a new div element for the bubble
        let bubble = document.createElement('div');

        // Set the class of the bubble
        bubble.className = 'bubble';

        // Set the size of the bubble based on the length of the mood
        bubble.style.width = (song.mood.length * 15) + 'px';
        bubble.style.height = (song.mood.length * 15) + 'px';

        // Set the text of the bubble to the mood
        bubble.textContent = song.mood;

        // Add a click event listener to the bubble
        bubble.addEventListener('click', function () {
            console.log('Bubble clicked:', song);
        });

        // Add the bubble to the moodVisualisation
        moodVisualisation.appendChild(bubble);
    }
}

//SEARCH===================================

