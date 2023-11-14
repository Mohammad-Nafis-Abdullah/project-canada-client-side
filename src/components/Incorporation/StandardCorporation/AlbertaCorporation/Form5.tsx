"use client";

export default function Form5() {
    return (
        <form className="py-10 space-y-10">
            <h1 className="text-2xl font-bold text-center">
                {"Share Structure"}
            </h1>
            <div className="flex items-center gap-3">
                <h3 className="font-bold">
                    {"Enter the price of class A voting share :"}
                </h3>
                <span className="font-bold text-gray-500 text-sm">
                    $1.00 (Recommended)
                </span>
                {/* <section className="grid grid-cols-3 gap-2">
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
                </section> */}
            </div>
            <div className="divider m-0" />
            <div className="flex flex-col gap-3">
                <h3 className="font-bold">
                    {"Will it issue a class B voting share?"}
                </h3>
                <div className="inline-flex gap-5 items-center">
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
                </div>
            </div>
            <div className="divider m-0" />
            <div className="flex flex-col gap-3">
                <h3 className="font-bold">
                    {"Will it issue a class C non-voting share?"}
                </h3>
                <div className="inline-flex gap-5 items-center">
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
                </div>
            </div>
        </form>
    );
}
