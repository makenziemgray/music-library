const library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three"
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003"
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952"
    }
  },
  playlists: {
    p01: {
      id: "p01",
      name: "Coding Music",
      tracks: ["t01", "t02"]
    },
    p02: {
      id: "p02",
      name: "Other Playlist",
      tracks: ["t03"]
    }
  }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// Print all playlists

const printPlaylists = function() {
  for (const key in library.playlists) {
    const playlist = library.playlists[key];
    const name = playlist.name;
    const numberTracks = playlist.tracks.length;
    console.log(`${key}: ${name} - ${numberTracks} tracks`);
  }
};

// Print all tracks

const printTracks = function() {
  for (const key in library.tracks) {
    const track = library.tracks[key];
    console.log(`${key}: ${track.name} by ${track.artist} (${track.album})`);
  }
};

// Print a specific playlist and its tracks

const printPlaylist = function(playlistId) {
  const playlist = library.playlists[playlistId];
  const playlistName = playlist.name;
  const numberTracks = playlist.tracks.length;

  console.log(`${playlistId}: ${playlistName} - ${numberTracks} tracks`);

  for (const trackId of playlist.tracks) {
    const track = library.tracks[trackId];
    console.log(`${trackId}: ${track.name} by ${track.artist} (${track.album})`);
  }
};

// Add an existing track to an existing playlist

const addTrackToPlaylist = function(trackId, playlistId) {
  library.playlists[playlistId].tracks.push(trackId);
  console.log(`${trackId} was added to playlist ${playlistId}`);
};

// Generate a unique ID

const uniqueID = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};

// Add a new track to the library

const addTrack = function(name, artist, album) {
  const id = uniqueID();
  library.tracks[id] = {
    id: id,
    name: name,
    artist: artist,
    album: album
  };
  console.log(library.tracks);
};

// STRETCH:
  // given a query string string, prints a list of tracks
  // where the name, artist or album contains the query string (case insensitive)
  // tip: use "string".search("tri") 
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
  
  const printSearchResults = function(query) {
  
  }
