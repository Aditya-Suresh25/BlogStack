import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import { useSelector, useDispatch } from "react-redux";
import { toggleBookmark } from "../store/bookmarkSlice";

function PostCard({ $id, title, featuredImage, content }) {
  const dispatch = useDispatch();
  const bookmarks = useSelector((state) => state.bookmarks.bookmarks);

  const isBookmarked = (postId) => bookmarks.includes(postId);

  const handleBookmark = (postId) => {
    dispatch(toggleBookmark(postId));
  };

  const shortDescription =
    content && content.length > 100
      ? content.substring(0, 100) + "..."
      : content;

  return (
    <div className="w-full bg-white rounded-xl p-4 shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-300 flex flex-col gap-4 overflow-x-hidden">
      <Link to={`/post/${$id}`}>
        <div className="w-full justify-center mb-4">
          <img
            src={
              appwriteService.getFilePreview(featuredImage).replace("preview", "view") +
              "&mode=admin"
            }
            alt={title}
            className="rounded-xl"
          />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="text-sm text-gray-600">{parse(shortDescription)}</div>
      </Link>
      <button
        onClick={() => handleBookmark($id)}
        className="text-xl hover:text-red-500 transition self-end"
      >
        {isBookmarked($id) ? "❤️" : "🤍"}
      </button>
    </div>
  );
}

export default PostCard