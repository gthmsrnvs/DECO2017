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
    songListContainer.style.display = 'block';
});
