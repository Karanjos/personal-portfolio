"use client";

import Link from "next/link";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import LightModeIcon from "@mui/icons-material/LightMode";
import Divider from "@mui/material/Divider";
import { saveAs } from "file-saver";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { useTheme } from "next-themes";
import { useState } from "react";
import CustomLink from "./CustomLink";
import Image from "next/image";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const downloadResume = () => {
    saveAs("/karanJoshiResume.pdf", "Karan_Joshi_Resume.pdf");
  };

  return (
    <header className="sticky z-10 top-0 left-0 dark:bg-gray-950 bg-gray-100 w-full h-[70px] dark:text-gray-100 text-gray-950 font-semibold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full w-full">
          <div className="flex items-center">
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-[53px] w-[53px] border-t-2 border-b-2 dark:border-gray-200 border-red-700"></div>
              <Link href="/" className="absolute">
                <Image src="/logo.png" alt="KJ" width={50} height={50} />
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex justify-center items-center gap-8">
            <div className="flex gap-6">
              <CustomLink href="#about" label="About" />
              <CustomLink href="#experience" label="Experience" />
              <CustomLink href="#skills" label="Skills" />
              <CustomLink href="#projects" label="Projects" />
              <CustomLink href="#contact" label="Contact" />
            </div>
            <Divider
              orientation="vertical"
              variant="fullWidth"
              flexItem
              className="dark:bg-gray-100 bg-gray-900 dark:bg-opacity-50"
            />
            <div className="flex items-center gap-8">
              <div className="hover:dark:bg-gray-800 cursor-pointer transition-all duration-300 hover:bg-gray-200 p-0 rounded-2xl">
                {theme === "light" ? (
                  <NightsStayIcon onClick={() => setTheme("dark")} />
                ) : (
                  <LightModeIcon onClick={() => setTheme("light")} />
                )}{" "}
              </div>
              <button
                onClick={downloadResume}
                className="bg-gray-900 dark:bg-gray-100 px-4 py-2 rounded-2xl text-gray-50 dark:text-gray-900 hover:bg-gray-700 transition-all duration-300 hover:dark:bg-gray-200"
              >
                Download Resume
              </button>
            </div>
          </div>
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1 rounded-2xl hover:dark:bg-gray-900 transition-all duration-300 hover:bg-gray-200"
            >
              <MenuIcon fontSize="large" />
            </button>
          </div>
        </div>
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } lg:hidden flex-col gap-12 absolute top-0 left-0 w-full h-screen dark:bg-gray-950 bg-gray-100 py-3 px-4`}
        >
          <div className="flex justify-between items-center w-full">
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-[53px] w-[53px] border-t-2 border-b-2 dark:border-gray-200 border-red-700"></div>
              <Link href="/" className="absolute">
                <Image src="/logo.png" alt="KJ" width={50} height={50} />
              </Link>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-2xl hover:dark:bg-gray-900 transition-all duration-300 hover:bg-gray-200"
            >
              <CloseIcon fontSize="large" />
            </button>
          </div>
          <div
            className="flex flex-col gap-4 justify-center items-center mt-0"
            onClick={() => setIsOpen(false)}
          >
            <CustomLink href="#about" label="About" />
            <CustomLink href="#experience" label="Experience" />
            <CustomLink href="#skills" label="Skills" />
            <CustomLink href="#projects" label="Projects" />
            <CustomLink href="#contact" label="Contact" />
          </div>
          <Divider
            orientation="horizontal"
            variant="fullWidth"
            className="dark:bg-gray-200 bg-gray-900 dark:bg-opacity-50"
          />
          <div className="flex flex-col items-center gap-8 w-full">
            <div className="flex items-center justify-between gap-8 w-full px-4">
              <p className="text-md">Switch Theme</p>
              <div className="hover:dark:bg-gray-800 cursor-pointer transition-all duration-300 hover:bg-gray-200 p-2 rounded-xl">
                {theme === "light" ? (
                  <NightsStayIcon
                    fontSize="medium"
                    onClick={() => setTheme("dark")}
                  />
                ) : (
                  <LightModeIcon
                    fontSize="medium"
                    onClick={() => setTheme("light")}
                  />
                )}{" "}
              </div>
            </div>
            <button
              onClick={downloadResume}
              className="bg-gray-900 dark:bg-gray-100 px-4 py-2 rounded-2xl text-gray-50 dark:text-gray-900 w-full hover:bg-gray-700 transition-all duration-300 hover:dark:bg-gray-300"
            >
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
