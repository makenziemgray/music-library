const library = {
  tracks: {
    t01: { id: "t01", name: "Code Monkey", artist: "Jonathan Coulton", album: "Thing a Week Three" },
    t02: { id: "t02", name: "Model View Controller", artist: "James Dempsey", album: "WWDC 2003" },
    t03: { id: "t03", name: "Four Thirty-Three", artist: "John Cage", album: "Woodstock 1952" }
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
  },

  // Method: print all playlists
  printPlaylists: function () {
    for (let key in this.playlists) {
      const playlist = this.playlists[key];
      console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
    }
  },

  // Method: print all tracks
  printTracks: function () {
    for (let key in this.tracks) {
      const track = this.tracks[key];
      console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
    }
  }
};

