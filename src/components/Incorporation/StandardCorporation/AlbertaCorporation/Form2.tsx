export default function Form2() {
    return (
        <form className="bdr py-10 space-y-10">
            <h1 className="text-2xl font-bold text-center">
                {"Corporation's Address"}
            </h1>
            <div className="flex flex-col gap-3">
                <h3 className="font-bold">
                    {"Enter the corporation's address"}
                </h3>
                <label htmlFor="street">
                    <span>Street Address :</span>
                    <input
                        id="street"
                        className="input input-sm input-bordered w-full max-w-xs bg-slate-900/10 text-sm font-bold text-gray-500 min-w-0"
                        placeholder="Write here..."
                    />
                </label>
                <label htmlFor="suite-unit">
                    <span>Suite / Unit :</span>
                    <input
                        id="suite-unit"
                        className="input input-sm input-bordered w-full max-w-xs bg-slate-900/10 text-sm font-bold text-gray-500 min-w-0"
                        placeholder="Write here..."
                    />
                </label>
                <label htmlFor="city">
                    <span>City :</span>
                    <input
                        id="city"
                        className="input input-sm input-bordered w-full max-w-xs bg-slate-900/10 text-sm font-bold text-gray-500 min-w-0"
                        placeholder="Write here..."
                    />
                </label>
                <label htmlFor="province">
                    <span>Province :</span>
                    <input
                        id="province"
                        className="input input-sm input-bordered w-full max-w-xs bg-slate-900/10 text-sm font-bold text-gray-500 min-w-0"
                        placeholder="Write here..."
                        value="Alberta"
                    />
                </label>
                <label htmlFor="city">
                    <span>City :</span>
                    <input
                        id="city"
                        className="input input-sm input-bordered w-full max-w-xs bg-slate-900/10 text-sm font-bold text-gray-500 min-w-0"
                        placeholder="Write here..."
                    />
                </label>
            </div>
        </form>
    );
}
