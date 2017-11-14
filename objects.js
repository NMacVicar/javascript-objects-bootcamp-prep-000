var playlist = new Object({Jasmine Rodgers: 'Two Years'})

function updatePlaylist(playlist, artist, songTitle){
  playlist.artist = 'songTitle'
  return playlist
}

function removeFromPlaylist(playlist, artist){
  delete playlist.artist
  return playlist
}
