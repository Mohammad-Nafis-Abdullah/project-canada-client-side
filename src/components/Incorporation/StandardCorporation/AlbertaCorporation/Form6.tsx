"use client";

import Modal from "@/components/Modal/Modal";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { FaRegWindowClose } from "react-icons/fa";

export default function Form6() {
    return (
        <form className="py-10 space-y-10">
            <h1 className="text-2xl font-bold text-center">{"Share Holder"}</h1>
            <div className="flex flex-col gap-3">
                <h3 className="font-bold">
                    {`Is the "Primary Director" a shareholder ?`}
                </h3>
                <div
                    onChange={() => {}}
                    className="inline-flex gap-5 items-center"
                >
                    <label
                        htmlFor="primary-director-yes"
                        className="inline-flex items-center gap-1"
                    >
                        <input
                            type="radio"
                            name="primary-director-shareholder"
                            id="primary-director-yes"
                            value="yes"
                        />
                        <span className="font-bold text-sm text-gray-500">
                            YES
                        </span>
                    </label>
                    <label
                        htmlFor="primary-director-no"
                        className="inline-flex items-center gap-1"
                    >
                        <input
                            type="radio"
                            name="primary-director-shareholder"
                            id="primary-director-no"
                            value="no"
                        />
                        <span className="font-bold text-sm text-gray-500">
                            NO
                        </span>
                    </label>
                </div>
            </div>
            <div className="divider m-0" />
            <div className="flex flex-col gap-3">
                <h3 className="font-bold">
                    {`Number of "A" shares for 1st shareholder :`}
                </h3>
                {/* <div className="inline-flex gap-5 items-center">
                    <label
                        htmlFor="B-Yes"
                        className="inline-flex items-center gap-1"
                    >
                        <input
                            type="radio"
                            name="B-voting"
                            id="B-Yes"
                            value="yes"
                        />
                        <span className="font-bold text-sm text-gray-500">
                            YES
                        </span>
                    </label>
                    <label
                        htmlFor="B-No"
                        className="inline-flex items-center gap-1"
                    >
                        <input
                            type="radio"
                            name="B-voting"
                            id="B-No"
                            value="no"
                        />
                        <span className="font-bold text-sm text-gray-500">
                            NO
                        </span>
                    </label>
                </div> */}
            </div>
            <div className="divider m-0" />
            <div className="flex flex-col gap-3">
                <h3 className="font-bold">
                    {`Number of "B" shares for 1st shareholder :`}
                </h3>
                {/* <div className="inline-flex gap-5 items-center">
                    <label
                        htmlFor="C-Yes"
                        className="inline-flex items-center gap-1"
                    >
                        <input
                            type="radio"
                            name="C-non-voting"
                            id="C-Yes"
                            value="yes"
                        />
                        <span className="font-bold text-sm text-gray-500">
                            YES
                        </span>
                    </label>
                    <label
                        htmlFor="C-No"
                        className="inline-flex items-center gap-1"
                    >
                        <input
                            type="radio"
                            name="C-non-voting"
                            id="C-No"
                            value="no"
                        />
                        <span className="font-bold text-sm text-gray-500">
                            NO
                        </span>
                    </label>
                </div> */}
            </div>
            <div className="divider m-0" />
            <div className="flex flex-col gap-3">
                <h3 className="font-bold">
                    {`Number of "C" shares for 1st shareholder :`}
                </h3>
                {/* <div className="inline-flex gap-5 items-center">
                    <label
                        htmlFor="C-Yes"
                        className="inline-flex items-center gap-1"
                    >
                        <input
                            type="radio"
                            name="C-non-voting"
                            id="C-Yes"
                            value="yes"
                        />
                        <span className="font-bold text-sm text-gray-500">
                            YES
                        </span>
                    </label>
                    <label
                        htmlFor="C-No"
                        className="inline-flex items-center gap-1"
                    >
                        <input
                            type="radio"
                            name="C-non-voting"
                            id="C-No"
                            value="no"
                        />
                        <span className="font-bold text-sm text-gray-500">
                            NO
                        </span>
                    </label>
                </div> */}
            </div>
            <div className="divider m-0" />
            <Modal>
                <Modal.Button
                    className="btn btn-wide bg-sky-600 text-white font-bold rounded hover:bg-sky-600"
                    type="open"
                >
                    + Add Shareholder
                </Modal.Button>
                <Modal.Body>
                    <div className="bg-white w-full max-w-xl h-[90vh] rounded">
                        <div className="shadow px-1 py-0.5 flex items-center justify-between">
                            <h3 className="font-bold ml-2">
                                Add new shareholder
                            </h3>
                            <Modal.Button className="" type="close">
                                <FaRegWindowClose className="h-7 w-7 active:scale-95 cursor-pointer" />
                            </Modal.Button>
                        </div>
                        <article className="overflow-y-auto p-3">
                            <form className="">
                                <section className="grid grid-cols-2 gap-x-8 gap-y-3">
                                    <label
                                        htmlFor="first-name"
                                        className="flex flex-col"
                                    >
                                        {/* input title */}
                                        <span className="font-bold text-gray-950/80">
                                            First Name :{" "}
                                            <span className="font-bold text-red-600">
                                                *
                                            </span>
                                        </span>

                                        <input
                                            id="first-name"
                                            name="first-name"
                                            className="ring-2 rounded p-1"
                                            type="text"
                                        />
                                        {/* input error */}
                                        <span className="text-red-600 text-sm">
                                            this is error message
                                        </span>
                                    </label>
                                    <label
                                        htmlFor="middle-name"
                                        className="flex flex-col"
                                    >
                                        {/* input title */}
                                        <span className="font-bold text-gray-950/80">
                                            Middle Name :{" "}
                                        </span>

                                        <input
                                            id="middle-name"
                                            name="middle-name"
                                            className="ring-2 rounded p-1"
                                            type="text"
                                        />
                                        {/* input error */}
                                        <span className="text-red-600 text-sm">
                                            this is error message
                                        </span>
                                    </label>
                                    <label
                                        htmlFor="last-name"
                                        className="flex flex-col gap-0.5"
                                    >
                                        {/* input title */}
                                        <span className="font-bold text-gray-950/80">
                                            Last Name :{" "}
                                            <span className="font-bold text-red-600">
                                                *
                                            </span>
                                        </span>

                                        <input
                                            id="last-name"
                                            name="last-name"
                                            className="ring-2 rounded p-1"
                                            type="text"
                                        />
                                        {/* input error */}
                                        <span className="text-red-600 text-xs">
                                            this is error message
                                        </span>
                                    </label>
                                </section>
                                <div className="divider"/>
                            </form>
                        </article>
                    </div>
                </Modal.Body>
            </Modal>
        </form>
    );
}
