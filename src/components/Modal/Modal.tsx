import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useContext,
    useState,
} from "react";

const ModalContext = createContext({
    isOpen: false,
    setIsOpen: null as unknown as Dispatch<SetStateAction<boolean>>,
});

Modal.Body = function Body({ children }: { children: ReactNode }) {
    const { isOpen, setIsOpen } = useContext(ModalContext);

    return (
        <>
            {/* The button to open modal */}

            {/* Put this part before </body> tag */}
            <input
                checked={isOpen}
                onChange={(e) => setIsOpen(e.target.checked)}
                type="checkbox"
                className="modal-toggle"
            />
            <div
                style={{ margin: "0" }}
                className="modal top-0 right-0 bottom-0 left-0 bg-transparent bdr"
            >
                {children}
            </div>
        </>
    );
};

export default function Modal({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <ModalContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </ModalContext.Provider>
    );
}

Modal.Button = function Button({
    className,
    children,
    type,
}: {
    className?: string;
    children?: ReactNode;
    type?: "open" | "close" | undefined;
}) {
    const { setIsOpen } = useContext(ModalContext);

    return (
        <span
            onClick={() => {
                if (type === "open") {
                    setIsOpen(true);
                } else if (type === "close") {
                    setIsOpen(false);
                } else {
                    setIsOpen((prev) => !prev);
                }
            }}
            className={className}
        >
            {children}
        </span>
    );
};
