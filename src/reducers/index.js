import { combineReducers } from "redux";

const songReducer = () => {
  return [
    { title: 'ye dosti', duration: '4:05' },
    { title: 'feeling good', duration: '2:30' },
    { title: 'all star', duration: '3:15' },
    { title: 'everthing is good', duration: '1:45' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  }
  return selectedSong
}

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer
});