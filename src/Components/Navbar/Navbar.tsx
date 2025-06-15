import React from "react";

import { Dock, DockIcon } from "../Magic-ui/navbar";

import { HomeIcon, PencilIcon } from "lucide-react";

import { Separator } from "../ui/separator";

import AtomicSpinner from "atomic-spinner";

import Style from "./Navbar.module.css";

import { Link } from "react-router-dom";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function DockDemo() {
  return (
    <div className={Style["relative"]}>
      <Dock direction="middle" className={Style["dock"]}>
        <DockIcon className={`${Style["icons"]} ${Style["desktop-only"]}`}>
          <a href="/">
            <Icons.home className="size-6" color="#fff" />
          </a>
        </DockIcon>
        <DockIcon className={`${Style["icons"]} ${Style["desktop-only"]}`}>
          <Link to="/articles">
            <Icons.pencil className="size-6" color="#fff" />
          </Link>
        </DockIcon>

        <Separator orientation="vertical" className={`{${Style["h-full"]} ${Style["desktop-only"]}`} />

          <Link to="/about">
          <div id={Style["about"]}>
            About
          </div>
          </Link>

          <Link to="/skills">
          <div id={Style["skills"]}>
            Skills
          </div>
          </Link>

         <Link to="/projects">
          <div id={Style["projects"]}>
            Projects
          </div>
          </Link>

        <Separator orientation="vertical" className={`${Style["h-full sep"]} ${Style["desktop-only"]}`} />

        <div className={Style["desktop-only"]}>
        <AtomicSpinner
          atomSize={60}
          electronPathColor="#1E90FF"
          electronColorPalette={["#00FF7F", "#00FF7F"]}
          nucleusParticleFillColor="#FF4500"
          nucleusParticleBorderColor="#FFD700"
          ></AtomicSpinner>
          </div>
      </Dock>
    </div>
  );
}

const Icons = {
  home: (props: IconProps) => (
    <HomeIcon {...props}>
      <title>Home</title>
    </HomeIcon>
  ),
  pencil: (props: IconProps) => (
    <PencilIcon {...props}>
      {" "}
      <title>Articles</title>{" "}
    </PencilIcon>
  ),

};
