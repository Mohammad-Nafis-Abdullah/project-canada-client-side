"use client";

export default function Form2() {
    return (
        <form className="py-10 space-y-10">
            <h1 className="text-2xl font-bold text-center">
                {"Corporation's Address"}
            </h1>
            <div className="flex flex-col gap-3">
                <h3 className="font-bold">
                    {"Enter the corporation's address :"}
                </h3>
                <section className="grid grid-cols-2 gap-2">
                    <label
                        htmlFor="corp-street"
                        className="inline-flex items-center gap-3 "
                    >
                        <span className="w-40 text-right">
                            Street Address :
                        </span>
                        <input
                            id="corp-street"
                            className="input input-sm input-bordered w-full max-w-xs bg-slate-900/10 text-sm font-bold text-gray-500 min-w-0"
                            placeholder="Write here..."
                        />
                    </label>
                    <label
                        htmlFor="corp-suite-unit"
                        className="inline-flex items-center gap-3 "
                    >
                        <span className="w-40 text-right">Suite / Unit :</span>
                        <input
                            id="corp-suite-unit"
                            className="input input-sm input-bordered w-full max-w-xs bg-slate-900/10 text-sm font-bold text-gray-500 min-w-0"
                            placeholder="Write here..."
                        />
                    </label>
                    <label
                        htmlFor="corp-city"
                        className="inline-flex items-center gap-3 "
                    >
                        <span className="w-40 text-right">City :</span>
                        <input
                            id="corp-city"
                            className="input input-sm input-bordered w-full max-w-xs bg-slate-900/10 text-sm font-bold text-gray-500 min-w-0"
                            placeholder="Write here..."
                        />
                    </label>
                    <label
                        htmlFor="corp-province"
                        className="inline-flex items-center gap-3 "
                    >
                        <span className="w-40 text-right">Province :</span>
                        <input
                            id="corp-province"
                            className="input input-sm input-bordered w-full max-w-xs bg-slate-900/10 text-sm font-bold text-gray-500 min-w-0"
                            placeholder="Write here..."
                            value="Alberta"
                            readOnly
                        />
                    </label>
                    <label
                        htmlFor="corp-postal-code"
                        className="inline-flex items-center gap-3 "
                    >
                        <span className="w-40 text-right">Postal Code :</span>
                        <input
                            id="corp-postal-code"
                            className="input input-sm input-bordered w-full max-w-xs bg-slate-900/10 text-sm font-bold text-gray-500 min-w-0"
                            placeholder="Write here..."
                        />
                    </label>
                </section>
            </div>
            <div className="divider m-0" />
            <div className="flex flex-col gap-3">
                <h3 className="font-bold">
                    {"Enter Records Office address :"}
                </h3>
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
                <h3 className="font-bold">{"Enter PO Box address :"}</h3>
                <section className="grid grid-cols-2 gap-2">
                    <label
                        htmlFor="po-street"
                        className="inline-flex items-center gap-3 "
                    >
                        <span className="w-40 text-right">
                            Street Address :
                        </span>
                        <input
                            id="po-street"
                            className="input input-sm input-bordered w-full max-w-xs bg-slate-900/10 text-sm font-bold text-gray-500 min-w-0"
                            placeholder="Write here..."
                        />
                    </label>
                    <label
                        htmlFor="po-suite-unit"
                        className="inline-flex items-center gap-3 "
                    >
                        <span className="w-40 text-right">Suite / Unit :</span>
                        <input
                            id="po-suite-unit"
                            className="input input-sm input-bordered w-full max-w-xs bg-slate-900/10 text-sm font-bold text-gray-500 min-w-0"
                            placeholder="Write here..."
                        />
                    </label>
                    <label
                        htmlFor="po-box"
                        className="inline-flex items-center gap-3 "
                    >
                        <span className="w-40 text-right">PO Box :</span>
                        <input
                            id="po-box"
                            className="input input-sm input-bordered w-full max-w-xs bg-slate-900/10 text-sm font-bold text-gray-500 min-w-0"
                            placeholder="Write here..."
                        />
                    </label>
                    <label
                        htmlFor="po-city"
                        className="inline-flex items-center gap-3 "
                    >
                        <span className="w-40 text-right">City :</span>
                        <input
                            id="po-city"
                            className="input input-sm input-bordered w-full max-w-xs bg-slate-900/10 text-sm font-bold text-gray-500 min-w-0"
                            placeholder="Write here..."
                        />
                    </label>
                    <label
                        htmlFor="po-province"
                        className="inline-flex items-center gap-3 "
                    >
                        <span className="w-40 text-right">Province :</span>
                        <input
                            id="po-province"
                            className="input input-sm input-bordered w-full max-w-xs bg-slate-900/10 text-sm font-bold text-gray-500 min-w-0"
                            placeholder="Write here..."
                            value="Alberta"
                            readOnly
                        />
                    </label>
                    <label
                        htmlFor="po-postal-code"
                        className="inline-flex items-center gap-3 "
                    >
                        <span className="w-40 text-right">Postal Code :</span>
                        <input
                            id="po-postal-code"
                            className="input input-sm input-bordered w-full max-w-xs bg-slate-900/10 text-sm font-bold text-gray-500 min-w-0"
                            placeholder="Write here..."
                        />
                    </label>
                </section>
            </div>
        </form>
    );
}
