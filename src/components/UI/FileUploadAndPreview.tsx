/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { FaRegFileLines } from "react-icons/fa6";

interface PROPS_SCHEMA {
    accept?: string;
    multiple?: boolean;
    onUpload: <T>(files: T) => void;
    previewerClassName?: string;
}

interface FILE_SCHEMA {
    lastModified: number;
    lastModifiedDate?: DateConstructor;
    name: string;
    size: number;
    type: string;
    webkitRelativePath: string;
}

const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
    // border:'solid'
});

const FileUploadAndPreview = ({
    accept = "file",
    multiple = false,
    onUpload,
    previewerClassName = "w-40 h-40 object-cover rounded",
}: PROPS_SCHEMA) => {
    const [files, setFiles] = useState<FILE_SCHEMA[]>([]);

    const getUrl = <T,>(file: T) => {
        const path = URL.createObjectURL(file as Blob);
        return path;
    };

    React.useEffect(() => {
        if ([...files].length) {
            onUpload(files);
        }
    }, [files, onUpload]);

    return (
        <>
            <div className="inline-flex items-center gap-3 ">
                <Button
                    component="label"
                    variant="contained"
                    // color="success"
                    startIcon={<CloudUploadIcon />}
                >
                    Upload file{" "}
                    <span className="font-bold ml-2 bg-white text-sky-600 h-5 w-5 flex items-center justify-center rounded">
                        {[...files].length}
                    </span>
                    <VisuallyHiddenInput
                        // id={id}
                        type="file"
                        accept={accept}
                        multiple={multiple}
                        className="bdr"
                        onChange={(e) => {
                            console.log(e.target.files);
                            const files = e.target.files;
                            const newFiles:FILE_SCHEMA[] = [];
                            for (const key in files) {
                                if (files[Number(key)]) {
                                    newFiles.push(files[Number(key)]);
                                }
                            }
                            setFiles([...newFiles]);
                        }}
                    />
                </Button>
            </div>
            <section className="inline-flex gap-3">
                {[...files]?.map((file: FILE_SCHEMA, i: number) => {
                    return (
                        <span key={i} className="relative cursor-pointer">
                            {file.type.split("/")[0] === "image" ? (
                                <img
                                    src={getUrl(file)}
                                    alt={file.name}
                                    className={previewerClassName}
                                />
                            ) : (
                                <FaRegFileLines
                                    onClick={()=>window.open(getUrl(file),'_blank')}
                                    className={previewerClassName}
                                />
                            )}
                            <FaTrashAlt
                                onClick={() => {
                                    setFiles((prev: FILE_SCHEMA[]) => {
                                        const newFiles = [...prev];
                                        newFiles.splice(i, 1);
                                        return newFiles;
                                    });
                                }}
                                className="text-red-600 bg-white absolute top-2 right-2 w-6 h-6 p-0.5 rounded"
                            />
                        </span>
                    );
                })}
            </section>
        </>
    );
};

export default FileUploadAndPreview;
