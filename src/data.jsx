import {
    FaHome,
    FaUser,
    FaHeart,
  } from "react-icons/fa";
  import { CiLogout } from "react-icons/ci";
  import { MdOutlinePostAdd } from "react-icons/md";
  
  export const menuItems = [
    { icon: <FaHome />, text: "Home", path: "/" },
    { icon: <FaUser />, text: "All Posts", path: "/all-posts" },
    { icon: <MdOutlinePostAdd />, text: "Add Post", path: "/add-post" },
    { icon: <FaHeart />, text: "Favorites", path: "/bookmarked-posts" },
    { icon: <CiLogout />, text: "Logout", path: "logout" },
  ];