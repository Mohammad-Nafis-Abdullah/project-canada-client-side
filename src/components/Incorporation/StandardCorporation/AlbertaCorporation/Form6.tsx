"use client";

import Modal from "@/components/Modal/Modal";
import { Button } from "@mui/material";
import { useState } from "react";

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
                    <div className="bg-white w-full max-w-sm h-80">
                        <Modal.Button
                            className="btn bg-gray-950 text-white font-bold rounded hover:bg-gray-950"
                            type="close"
                        >
                            close
                        </Modal.Button>
                    </div>
                </Modal.Body>
            </Modal>
        </form>
    );
}
