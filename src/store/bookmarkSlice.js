import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookmarks: JSON.parse(localStorage.getItem("bookmarked")) || [],
};

const bookmarkSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    toggleBookmark: (state, action) => {
      const postId = action.payload;
      const updatedBookmarks = state.bookmarks.includes(postId)
        ? state.bookmarks.filter((id) => id !== postId)
        : [...state.bookmarks, postId];

      state.bookmarks = updatedBookmarks;
      localStorage.setItem("bookmarked", JSON.stringify(updatedBookmarks));
    },
  },
});

export const { toggleBookmark } = bookmarkSlice.actions;

export default bookmarkSlice.reducer; 