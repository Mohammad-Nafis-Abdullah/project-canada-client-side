"use client";

export default function Form4() {
    return (
        <form className="py-10 space-y-10">
            <h1 className="text-2xl font-bold text-center">
                {"Director List"}
            </h1>
            <div className="flex flex-col gap-3">
                <h3 className="font-bold">
                    {"Primary Director (The overall head of the corporation) :"}
                </h3>
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
                        htmlFor="director-street"
                        className="inline-flex items-center gap-3 "
                    >
                        <span className="w-40 text-right">
                            Street Address :
                        </span>
                        <input
                            id="director-street"
                            className="input input-sm input-bordered w-full max-w-xs bg-slate-900/10 text-sm font-bold text-gray-500 min-w-0"
                            placeholder="Write here..."
                        />
                    </label>
                    <label
                        htmlFor="director-suite-unit"
                        className="inline-flex items-center gap-3 "
                    >
                        <span className="w-40 text-right">Suite / Unit :</span>
                        <input
                            id="director-suite-unit"
                            className="input input-sm input-bordered w-full max-w-xs bg-slate-900/10 text-sm font-bold text-gray-500 min-w-0"
                            placeholder="Write here..."
                        />
                    </label>
                    <label
                        htmlFor="director-city"
                        className="inline-flex items-center gap-3 "
                    >
                        <span className="w-40 text-right">City :</span>
                        <input
                            id="director-city"
                            className="input input-sm input-bordered w-full max-w-xs bg-slate-900/10 text-sm font-bold text-gray-500 min-w-0"
                            placeholder="Write here..."
                        />
                    </label>
                    <label
                        htmlFor="director-province"
                        className="inline-flex items-center gap-3 "
                    >
                        <span className="w-40 text-right">Province :</span>
                        <input
                            id="director-province"
                            className="input input-sm input-bordered w-full max-w-xs bg-slate-900/10 text-sm font-bold text-gray-500 min-w-0"
                            placeholder="Write here..."
                            value="Alberta"
                            readOnly
                        />
                    </label>
                    <label
                        htmlFor="director-postal-code"
                        className="inline-flex items-center gap-3 "
                    >
                        <span className="w-40 text-right">Postal Code :</span>
                        <input
                            id="director-postal-code"
                            className="input input-sm input-bordered w-full max-w-xs bg-slate-900/10 text-sm font-bold text-gray-500 min-w-0"
                            placeholder="Write here..."
                        />
                    </label>
                </section>
            </div>
        </form>
    );
}
