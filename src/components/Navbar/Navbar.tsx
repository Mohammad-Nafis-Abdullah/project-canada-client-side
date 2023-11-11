/* eslint-disable @next/next/no-img-element */
import React from "react";
import { RiPhoneFill } from "react-icons/ri";
import { FaUserLock } from "react-icons/fa";
import { GrMenu } from "react-icons/gr";
import "./navbar.css";
import Menus from "./Menus";
import { Navbar_data } from "./data";

const phoneNumber = "+880xxxxxxxxxx";

export default function Navbar() {
    return (
        <nav className="shadow">
            <SecondaryNav />
            <section className="px-3 py-4 bg-yellow-400">
                <div className="max-w-7xl mx-auto topNavBar flex items-center justify-between">
                    {/* site name and icon */}
                    {/* <div className="topBranding font-bold text-xl italic text-black w-40 bdr">
                        Site Name
                    </div> */}

                    <div className="inline-flex items-center gap-3">
                        <img src="/logo.png" alt="logo" className="w-10" />
                        <span className="font-bold">Quick Startup</span>
                    </div>

                    {/* <ul className="hidden 2xl:inline-flex w-full gap-3 justify-center items-center p-0 px-0"> */}
                    {/* Sidebar content here */}
                    {/* <Menus data={Navbar_data} /> */}
                    {/* </ul> */}

                    <Search />

                    <NavSideBar />
                </div>
            </section>
        </nav>
    );
}

function SecondaryNav() {
    return (
        <div className="">
            <section className="max-w-7xl mx-auto py-1 flex justify-between items-center px-3">
                {/* phone number with call linked */}
                <a
                    href={`tel:${phoneNumber}`}
                    className="inline-flex gap-x-1 items-center"
                >
                    <RiPhoneFill className="w-5 h-5 p-1 rounded-full bg-green-500" />
                    <span className="font-bold text-xs">
                        Call Us: {phoneNumber}
                    </span>
                </a>

                <Login />
            </section>
        </div>
    );
}

// navbar search field
function Search() {
    return (
        <div className="join flex justify-center topSearchBar">
            <div>
                <div>
                    <input
                        className="w-full sm:max-w-sm input input-sm input-bordered join-item placeholder:font-bold placeholder:text-gray-900/50"
                        placeholder="Search"
                    />
                </div>
            </div>
            <select className="select select-sm select-bordered join-item">
                <option disabled selected>
                    Filter
                </option>
                <option>Ontario</option>
                <option>Albarta</option>
                <option>Admonton</option>
            </select>
            <div className="indicator">
                <button className="btn btn-sm btn-outline join-item cursor-pointer">
                    Search
                </button>
            </div>
        </div>
    );
}

function Login() {
    return (
        <button className="inline-flex items-center gap-x-2">
            <FaUserLock className="w-5 h-5 text-green-400" />
            <span className="underline underline-offset-2 font-bold text-xs">
                Login / Register
            </span>
        </button>
    );
}

// side navigation menu
function NavSideBar() {
    return (
        <div className="drawer drawer-end w-auto topSideBar">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer">
                    <GrMenu className={`w-10 h-10 p-1`} />
                </label>
            </div>
            <div className="drawer-side">
                <label
                    htmlFor="my-drawer"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <Menus data={Navbar_data} />
                </ul>
            </div>
        </div>
    );
}
