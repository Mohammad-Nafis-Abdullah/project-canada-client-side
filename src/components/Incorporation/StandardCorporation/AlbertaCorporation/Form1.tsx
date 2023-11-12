"use client";

import { ChangeEvent, forwardRef, useState } from "react";

const Form1 = () => {
    const [corpType, setCorpType] = useState("");

    return (
        <form className="py-10 space-y-10">
            <h1 className="text-2xl font-bold text-center">
                Corporation Name
            </h1>
            <div className="flex flex-col gap-3">
                <h3 className="font-bold">
                    Is this a named or numbered corporation?
                </h3>
                <div
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setCorpType(e.target.value)
                    }
                    className="inline-flex gap-5 items-center"
                >
                    <label
                        htmlFor="numbered-corp"
                        className="inline-flex items-center gap-2"
                    >
                        <input
                            type="radio"
                            name="select-corp"
                            id="numbered-corp"
                            value="Numbered Corporation"
                        />
                        <span className="font-bold text-sm text-gray-500">
                            Numbered Corporation
                        </span>
                    </label>
                    <label
                        htmlFor="named-corp"
                        className="inline-flex items-center gap-2"
                    >
                        <input
                            type="radio"
                            name="select-corp"
                            id="named-corp"
                            value="Named Corporation"
                        />
                        <span className="font-bold text-sm text-gray-500">
                            Named Corporation
                        </span>
                    </label>
                </div>
                {corpType === "Named Corporation" ? (
                    <>
                        <div className="divider m-0 w-96" />
                        <label
                            htmlFor="nuans-report"
                            className="flex flex-col gap-3"
                        >
                            <span className="font-bold text-gray-500 text-sm">
                                Please add your NUANS report
                            </span>
                            <input
                                type="file"
                                id="nuans-report"
                                className="file-input file-input-sm file-input-bordered file-input-warning w-full max-w-xs"
                            />
                        </label>
                        <div className="divider m-0 w-96" />
                        <label
                            htmlFor="proposed-name"
                            className="flex flex-col gap-3"
                        >
                            <span className="font-bold text-gray-500 text-sm">
                                Enter the proposed name of this corporation.
                            </span>
                            <input
                                id="proposed-name"
                                type="text"
                                placeholder="Write here..."
                                className="input input-sm input-bordered w-full max-w-xs"
                            />
                        </label>
                        <div className="divider m-0 w-96" />
                    </>
                ) : (
                    <></>
                )}
            </div>
            <div className="flex flex-col gap-3">
                <h3 className="font-bold">Select a legal suffix :</h3>
                <select className="select select-bordered w-full max-w-sm bg-slate-900/10 min-w-0 font-bold text-gray-500 text-sm">
                    <option value="">--select--</option>
                    <option value="Ltd.">Ltd.</option>
                    <option value="Inc.">Inc.</option>
                    <option value="Corp.">Corp.</option>
                    <option value="Limited">Limited</option>
                    <option value="Incorporation">Incorporation</option>
                    <option value="Corporation">Corporation</option>
                </select>
            </div>
            <div className="flex flex-col gap-3">
                <h3 className="font-bold">
                    Major activities of this corporation (briefly)
                </h3>
                <textarea
                    className="textarea textarea-bordered max-w-sm h-40 resize-none bg-slate-900/10 text-sm font-bold text-gray-500 min-w-0"
                    placeholder="Write here..."
                ></textarea>
            </div>
        </form>
    );
};

export default Form1;
