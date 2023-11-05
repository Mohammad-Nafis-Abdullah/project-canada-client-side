import React from "react";
import { RiPhoneFill } from "react-icons/ri";
import { FaUserLock } from "react-icons/fa";
import { GrMenu } from "react-icons/gr";
import "./navbar.css";

const phoneNumber = "+8801813362385";

export default function Navbar() {
    return (
        <nav className="shadow">
            <SecondaryNav />
            <div className="bg-gray-800 p-3">
                <section className="bg-gray-900 p-3 rounded">
                    <div className="max-w-7xl mx-auto grid topNavBar gap-5">
                        {/* site name and icon */}
                        <div className="topBranding font-bold text-2xl italic text-amber-400">
                            Site Name
                        </div>

                        <Search />

                        <NavSideBar />
                    </div>
                </section>
            </div>
        </nav>
    );
}

function SecondaryNav() {
    return (
        <div className="">
            <section className="max-w-7xl mx-auto py-1 flex justify-between items-center px-3">
                {/* phone number with call linked */}
                <a
                    href={`tel:{phoneNumber}`}
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
                        className="w-full sm:max-w-sm input input-bordered join-item placeholder:font-bold placeholder:text-gray-900/50"
                        placeholder="Search"
                    />
                </div>
            </div>
            <select className="select select-bordered join-item">
                <option disabled selected>
                    Filter
                </option>
                <option>Sci-fi</option>
                <option>Drama</option>
                <option>Action</option>
            </select>
            <div className="indicator">
                <button className="btn btn-primary join-item cursor-pointer">
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
                <label htmlFor="my-drawer" className="drawer-button">
                    <GrMenu
                        className={`btn ring-2 ring-gray-900 btn-square btn-sm p-1`}
                    />
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

                    <div className="dropdown dropdown-hover">
                        <label tabIndex={0}>
                            Hover
                        </label>
                        <ul
                            tabIndex={0}
                            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <a>Item 1</a>
                            </li>
                            <li>
                                <a>Item 2</a>
                            </li>
                        </ul>
                    </div>
                    <li>
                        <a>Sidebar Item 2</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
