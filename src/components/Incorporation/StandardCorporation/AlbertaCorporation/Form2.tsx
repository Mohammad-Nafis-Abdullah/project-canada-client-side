export default function Form2() {
    return (
        <form className=" py-10 space-y-10">
            <h1 className="text-2xl font-bold text-center">
                {"Corporation's Address"}
            </h1>
            <div className="flex flex-col gap-3">
                <h3 className="font-bold">
                    {"Enter the corporation's address"}
                </h3>
                <section className="grid grid-cols-2 gap-2">
                    <label
                        htmlFor="street"
                        className="inline-flex items-center gap-3 "
                    >
                        <span className="w-40 text-right">
                            Street Address :
                        </span>
                        <input
                            id="street"
                            className="input input-sm input-bordered w-full max-w-xs bg-slate-900/10 text-sm font-bold text-gray-500 min-w-0"
                            placeholder="Write here..."
                        />
                    </label>
                    <label
                        htmlFor="suite-unit"
                        className="inline-flex items-center gap-3 "
                    >
                        <span className="w-40 text-right">Suite / Unit :</span>
                        <input
                            id="suite-unit"
                            className="input input-sm input-bordered w-full max-w-xs bg-slate-900/10 text-sm font-bold text-gray-500 min-w-0"
                            placeholder="Write here..."
                        />
                    </label>
                    <label
                        htmlFor="city"
                        className="inline-flex items-center gap-3 "
                    >
                        <span className="w-40 text-right">City :</span>
                        <input
                            id="city"
                            className="input input-sm input-bordered w-full max-w-xs bg-slate-900/10 text-sm font-bold text-gray-500 min-w-0"
                            placeholder="Write here..."
                        />
                    </label>
                    <label
                        htmlFor="province"
                        className="inline-flex items-center gap-3 "
                    >
                        <span className="w-40 text-right">Province :</span>
                        <input
                            id="province"
                            className="input input-sm input-bordered w-full max-w-xs bg-slate-900/10 text-sm font-bold text-gray-500 min-w-0"
                            placeholder="Write here..."
                            value="Alberta"
                            readOnly
                        />
                    </label>
                    <label
                        htmlFor="postal-code"
                        className="inline-flex items-center gap-3 "
                    >
                        <span className="w-40 text-right">Postal Code :</span>
                        <input
                            id="postal-code"
                            className="input input-sm input-bordered w-full max-w-xs bg-slate-900/10 text-sm font-bold text-gray-500 min-w-0"
                            placeholder="Write here..."
                        />
                    </label>
                </section>
            </div>
        </form>
    );
}
