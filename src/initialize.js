// src\initialize.js
// src\initialize.js

export const initializePlaylist = () => {
  let likedMusic = localStorage.getItem("likedMusic");
  if (!likedMusic) {
    localStorage.setItem("likedMusic", "[]");
  }
  let pinnedMusic = localStorage.getItem("pinnedMusic");
  if (!pinnedMusic) {
    localStorage.setItem("pinnedMusic", "[]");
  }
  let allPlaylist = localStorage.getItem("allPlaylist");
  if (!allPlaylist) {
    localStorage.setItem("allPlaylist", "{}");
  }
};
