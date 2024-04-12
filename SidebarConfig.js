import {
    AiOutlineHome,
    AiFillHome,
    AiOutlineSearch,
    AiOutlineCompass,
    AiFillCompass,
    AiFillMessage,
    AiOutlineMessage,
    AiOutlineHeart,
    AiFillHeart,
    AiOutlinePlusCircle,
    AiFillPlusCircle,
  } from "react-icons/ai";
  import { RiVideoFill, RiVideoLine } from "react-icons/ri";
  import { CgProfile } from "react-icons/cg";

export const mainu = [
    {
      title: "Home",
      icon: <AiOutlineHome className="mr-5 text-2xl" />,
      activeIcon: <AiFillHome className="mr-5 text-2xl" />,
    },
    {
      title: "Search",
      icon: <AiOutlineSearch className="mr-5 text-2xl" />,
      activeIcon: <AiOutlineSearch className="mr-5 text-2xl" />,
    },
    {
      title: "Explore",
      icon: <AiOutlineCompass className="mr-5 text-2xl" />,
      activeIcon: <AiFillCompass className="mr-5 text-2xl" />,
    },
    {
      title: "Reels",
      icon: <RiVideoLine className="mr-5 text-2xl" />,
      activeIcon: <RiVideoFill className="mr-5 text-2xl" />,
    },
    {
      title: "Message",
      icon: <AiOutlineMessage className="mr-5 text-2xl" />,
      activeIcon: <AiFillMessage className="mr-5 text-2xl" />,
    },
    {
      title: "Notifications",
      icon: <AiOutlineHeart className="mr-5 text-2xl" />,
      activeIcon: <AiFillHeart className="mr-5 text-2xl" />,
    },
    {
      title: "Create",
      icon: <AiOutlinePlusCircle className="mr-5 text-2xl" />,
      activeIcon: <AiFillPlusCircle className="mr-5 text-2xl" />,
    },
    { title: "Profile", icon: <CgProfile className="mr-5 text-2xl" />, activeIcon: <CgProfile className="mr-5 text-2xl" /> },
  ];