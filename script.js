const addSongBtn = document.getElementById('addSongBtn');
const songForm = document.getElementById('songForm');
const songListContainer = document.getElementById('songListContainer');
const mySongsNav = document.getElementById('mySongsNav');

// Toggle form display when addSongBtn is clicked
addSongBtn.addEventListener('click', function() {
    if(songForm.style.display === 'none' || songForm.style.display === '') {
        songForm.style.display = 'block';
        addSongBtn.classList.add('close');
    } else {
        songForm.style.display = 'none';
        addSongBtn.classList.remove('close');
    }
});

// Show the song list when My Songs navigation link is clicked
mySongsNav.addEventListener('click', function() {
    songListContainer.style.display = songListContainer.style.display === 'none' ? 'block' : 'none';
    mySongsNav.classList.toggle('selected');
});

// Array to hold songs
let songs = [];

// Handle form submission
songForm.addEventListener('submit', function(event) {
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

    // Add song to songs array
    songs.push(song);

    // Save songs to localStorage
    localStorage.setItem('songs', JSON.stringify(songs));

    // Clear form inputs
    songForm.reset();

    // Update song list
    updateSongList();
});

// Function to update song list
function updateSongList() {
    // Get song list element
    let songList = document.getElementById('songList');

    // Clear song list
    songList.innerHTML = '';

    // Add each song to the song list
    songs.forEach(function(song, index) {
        let listItem = document.createElement('li');
        listItem.textContent = `${song.name} by ${song.artist} on ${song.album}. Mood: ${song.mood}. Rating: ${song.rating} stars.`;
        songList.appendChild(listItem);
    });

    // Show song list
    songListContainer.style.display = 'block';
}


