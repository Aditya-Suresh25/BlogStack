import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

function BookmarkedPosts() {
  const [posts, setPosts] = useState([]);
  const bookmarks = useSelector((state) => state.bookmarks.bookmarks);

  useEffect(() => {
    appwriteService.getPosts([]).then((allPosts) => {
      if (allPosts) {
        const bookmarked = allPosts.documents.filter((post) =>
          bookmarks.includes(post.$id)
        );
        setPosts(bookmarked);
      }
    });
  }, [bookmarks]);

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <h1 className="text-2xl font-bold">No Favourites posts yet!</h1>
          <p className="text-gray-600">
            You can favourite posts by clicking the heart icon on any post.
          </p>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-8">
      <Container>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div key={post.$id}>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default BookmarkedPosts; 