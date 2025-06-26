import React, { useState, useEffect } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { useSelector } from "react-redux";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import demoVideo from '../assets/demo-video.mp4';

function Home() {
  const [posts, setPosts] = useState([]);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    if (authStatus) {
      appwriteService.getPosts().then((posts) => {
        if (posts) {
          setPosts(posts.documents);
        }
      });
    } else {
      setPosts([]);
    }
  }, [authStatus]);

  if (!authStatus) {
    return (
      <div className="w-full pt-24 pb-8 text-center">
        <Container>
          <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
              Welcome to BlogStack!
            </h1>
            <TypeAnimation
              sequence={[
                "Write.",
                1000,
                "Edit.",
                1000,
                "Inspire.",
                1000,
              ]}
              wrapper="span"
              speed={50}
              className="text-2xl md:text-3xl text-red-600 font-semibold"
              repeat={Infinity}
            />
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              The ultimate platform for writers, thinkers, and creators to share their stories and ideas with the world.
            </p>
            <Link to="/signup">
              <button className="mt-6 px-6 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors duration-300">
                Get Started
              </button>
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
  <div className="bg-white/80 backdrop-blur-sm border border-red-100/50 p-6 rounded-2xl shadow-sm hover:bg-white/90 hover:border-red-200/60 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
    <h3 className="text-xl font-bold mb-2 text-gray-800">Easy to Use</h3>
    <p className="text-gray-600 leading-relaxed">
     Integrated TinyMCE for seamless Content Editing!
    </p>
  </div>
  <div className="bg-white/80 backdrop-blur-sm border border-red-100/50 p-6 rounded-2xl shadow-sm hover:bg-white/90 hover:border-red-200/60 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
    <h3 className="text-xl font-bold mb-2 text-gray-800">Community Focused</h3>
    <p className="text-gray-600 leading-relaxed">
      Connect with other writers and readers in our vibrant community.
    </p>
  </div>
  <div className="bg-white/80 backdrop-blur-sm border border-red-100/50 p-6 rounded-2xl shadow-sm hover:bg-white/90 hover:border-red-200/60 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
    <h3 className="text-xl font-bold mb-2 text-gray-800">Fully Responsive</h3>
    <p className="text-gray-600 leading-relaxed">
      Your blog will look great on any device, from desktops to smartphones.
    </p>
  </div>
</div>
           {/* Demo Video Section */}
           <div className="bg-white p-6 rounded-2xl shadow-lg mb-10 flex flex-col items-center mt-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">See BlogStack in Action</h2>
            <p className="text-gray-600 mb-4 max-w-xl">
              Effortless publishing, beautiful design, and instant community engagement. Watch this quick demo to see how easy it is to create, edit, and discover amazing content on <b>BlogStack!</b>
            </p>
            <div className="w-full max-w-2xl aspect-video rounded-lg overflow-hidden shadow-lg">
              <video controls autoPlay muted poster="/assets/logo.png" className="w-full h-full object-cover">
                <source src={demoVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full pt-24 pb-8">
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

export default Home;