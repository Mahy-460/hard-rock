

 const searchSong = () => {
     const search = document.getElementById('search').value;
     
     const url = `https://api.lyrics.ovh/suggest/${search}`
     fetch(url)
     .then(res => res.json())
     .then(data =>  displaySongs(data.data))
 }
 
 const displaySongs = songs => {
     console.log(songs);
     const  songContainer = document.getElementById('song-container');
     songContainer.innerHTML ="";
     songs.forEach(song =>{
         const songDiv = document.createElement('div')
         songDiv.className = 'single-result row align-items-center my-3 p-3';
         songDiv.innerHTML = `
         <div class="col-md-9">
                        <h3 class="lyrics-name">${song.title}</h3>
                        <p class="author lead">Album by <span>${song.artist.name}</span></p>
                        <img src="  ${song.album.cover}">
                        <br>
                        <br>
                        <audio controls>
                        <source src="${song.preview}" type="audio/ogg">
                      </audio>    
                    </div>
                    <div class="col-md-3 text-md-right text-center">
                               
                        <button onclick="getLyric('${song.artist.name}','${song.title}')" class="btn btn-success">Get Lyrics</button>
                    </div>
         `;
         songContainer.appendChild(songDiv);
     })
 }

 const getLyric = (artist , title) => {
     const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
     console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displayLyrics(data.lyrics));
 }
 const displayLyrics = lyrics => {
     const lyricsDiv = document.getElementById('song-lyrics');
     lyricsDiv.innerText = lyrics;
 }
//      fetch(url)
//      .then(res => res.json())
//      .then(data => displayLyrics(data.lyrics))

//  }

//  const displayLyrics = lyrics => {
//      const lyricsDiv = document.getElementById('song-lyrics');
//      lyricsDiv.innerText = lyrics;
//  }

 //titel