"use client";

import FileUploadAndPreview from "@/components/UI/FileUploadAndPreview";
/* eslint-disable @next/next/no-img-element */
import * as React from "react";

export default function Form3() {
    return (
        <form className=" py-10 space-y-10">
            <h1 className="text-2xl font-bold text-center">
                {"Agent for Service (Must be Alberta Resident)"}
            </h1>
            <p className="text-sm font-bold text-gray-500">
                Note: Every Alberta corporation must appoint an Agent for
                Service who must reside in Alberta. This individual would be the
                primary point of all communications from the government. This
                could be the primary director or any other director who resides
                in Alberta. If all directors are non-Alberta residents, you can
                appoint an Alberta attorney or take the service we offer
            </p>
            <div className="flex flex-col gap-3">
                <h3 className="font-bold">{"Enter your information :"}</h3>
                <section className="grid grid-cols-3 gap-2">
                    <label
                        htmlFor="first-name"
                        className="inline-flex items-center gap-3 "
                    >
                        <span className="w-40 text-right">First Name :</span>
                        <input
                            id="first-name"
                            className="input input-sm input-bordered w-full max-w-xs bg-slate-900/10 text-sm font-bold text-gray-500 min-w-0"
                            placeholder="Write here..."
                        />
                    </label>
                    <label
                        htmlFor="middle-name"
                        className="inline-flex items-center gap-3 "
                    >
                        <span className="w-40 text-right">Middle Name :</span>
                        <input
                            id="middle-name"
                            className="input input-sm input-bordered w-full max-w-xs bg-slate-900/10 text-sm font-bold text-gray-500 min-w-0"
                            placeholder="Write here..."
                        />
                    </label>
                    <label
                        htmlFor="last-name"
                        className="inline-flex items-center gap-3 "
                    >
                        <span className="w-40 text-right">Last Name :</span>
                        <input
                            id="last-name"
                            className="input input-sm input-bordered w-full max-w-xs bg-slate-900/10 text-sm font-bold text-gray-500 min-w-0"
                            placeholder="Write here..."
                        />
                    </label>
                    <label
                        htmlFor="phone"
                        className="inline-flex items-center gap-3 "
                    >
                        <span className="w-40 text-right">Phone No. :</span>
                        <input
                            id="phone"
                            className="input input-sm input-bordered w-full max-w-xs bg-slate-900/10 text-sm font-bold text-gray-500 min-w-0"
                            placeholder="Write here..."
                            value="Alberta"
                            readOnly
                        />
                    </label>
                    <label
                        htmlFor="email"
                        className="inline-flex items-center gap-3 "
                    >
                        <span className="w-40 text-right">Email :</span>
                        <input
                            id="email"
                            className="input input-sm input-bordered w-full max-w-xs bg-slate-900/10 text-sm font-bold text-gray-500 min-w-0"
                            placeholder="Write here..."
                        />
                    </label>
                </section>
            </div>
            <div className="divider m-0" />
            <div className="flex flex-col gap-3">
                <h3 className="font-bold">{"Enter Complete Address :"}</h3>
                <section className="grid grid-cols-2 gap-2">
                    <label
                        htmlFor="office-street"
                        className="inline-flex items-center gap-3 "
                    >
                        <span className="w-40 text-right">
                            Street Address :
                        </span>
                        <input
                            id="office-street"
                            className="input input-sm input-bordered w-full max-w-xs bg-slate-900/10 text-sm font-bold text-gray-500 min-w-0"
                            placeholder="Write here..."
                        />
                    </label>
                    <label
                        htmlFor="office-suite-unit"
                        className="inline-flex items-center gap-3 "
                    >
                        <span className="w-40 text-right">Suite / Unit :</span>
                        <input
                            id="office-suite-unit"
                            className="input input-sm input-bordered w-full max-w-xs bg-slate-900/10 text-sm font-bold text-gray-500 min-w-0"
                            placeholder="Write here..."
                        />
                    </label>
                    <label
                        htmlFor="office-city"
                        className="inline-flex items-center gap-3 "
                    >
                        <span className="w-40 text-right">City :</span>
                        <input
                            id="office-city"
                            className="input input-sm input-bordered w-full max-w-xs bg-slate-900/10 text-sm font-bold text-gray-500 min-w-0"
                            placeholder="Write here..."
                        />
                    </label>
                    <label
                        htmlFor="office-province"
                        className="inline-flex items-center gap-3 "
                    >
                        <span className="w-40 text-right">Province :</span>
                        <input
                            id="office-province"
                            className="input input-sm input-bordered w-full max-w-xs bg-slate-900/10 text-sm font-bold text-gray-500 min-w-0"
                            placeholder="Write here..."
                            value="Alberta"
                            readOnly
                        />
                    </label>
                    <label
                        htmlFor="office-postal-code"
                        className="inline-flex items-center gap-3 "
                    >
                        <span className="w-40 text-right">Postal Code :</span>
                        <input
                            id="office-postal-code"
                            className="input input-sm input-bordered w-full max-w-xs bg-slate-900/10 text-sm font-bold text-gray-500 min-w-0"
                            placeholder="Write here..."
                        />
                    </label>
                </section>
            </div>
            <div className="divider m-0" />
            <div className="flex flex-col gap-3">
                <h3 className="font-bold">
                    {"Valid Alberta Photo ID or Passport (Required) :"}
                </h3>
                <FileUploadAndPreview
                    accept=".png, .jpg, .jpeg, .img"
                    multiple={true}
                    onUpload={(files) => console.log(files)}
                />
            </div>
        </form>
    );
}
