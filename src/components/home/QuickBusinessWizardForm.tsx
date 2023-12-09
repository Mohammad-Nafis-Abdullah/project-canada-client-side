import { Button } from "@mui/material";
import React, { useState } from "react";

type Option_type =
    | "corporate"
    | "sole_proprietorship"
    | "partnership"
    | "profitable_corporation"
    | "non_profitable_corporation"
    | "all_over_canada"
    | "";

const QuickBusinessWizardForm = () => {
    const [option, setOption] = useState<Option_type>("corporate");
    const [path, setPath] = useState<Option_type[]>([]);

    const pushToPath = (current: Option_type) => {
        const array = [...path];
        array.push(current);
        setPath(array);
    };

    const popToPath = () => {
        const array = [...path];
        array.pop();
        setPath(array);
    };

    return (
        <div className="bg-white rounded p-5">
            <h3 className="text-xl font-bold mb-2">Type of Business :</h3>
            <section className="flex gap-3 justify-center">
                <button
                    onClick={() => setOption("corporate")}
                    className={`${
                        option === "corporate"
                            ? "btn_primary_fill"
                            : "btn_primary"
                    }`}
                >
                    corporate
                </button>
                <button
                    onClick={() => setOption("sole_proprietorship")}
                    className={`${
                        option === "sole_proprietorship"
                            ? "btn_primary_fill"
                            : "btn_primary"
                    }`}
                >
                    sole_proprietorship
                </button>
                <button
                    onClick={() => setOption("partnership")}
                    className={`${
                        option === "partnership"
                            ? "btn_primary_fill"
                            : "btn_primary"
                    }`}
                >
                    partnership
                </button>
            </section>
            <section className="min-h-[100px] bg-slate-300 rounded p-5 mt-3"></section>
        </div>
    );
};

export default QuickBusinessWizardForm;

const ShowPath = ({ path }) => {
    return;
};
