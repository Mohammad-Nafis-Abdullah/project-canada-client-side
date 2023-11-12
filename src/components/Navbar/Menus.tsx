"use client";

import Link from "next/link";
import { MENUS_SCHEMA, NAVBAR_SCHEMA } from "./data";
import { useId, useState } from "react";
import { usePathname } from "next/navigation";
import { FaPlus } from "react-icons/fa";


export default function Menus({ data }: { data: NAVBAR_SCHEMA }) {
    const uid = ()=> {
        return Date.now() * Math.random();
    }
    return (
        <>
            {data.map((menu, i) => (
                <Menu menu={menu} key={uid()} />
            ))}
        </>
    );
}

function Menu({ menu }: { menu: MENUS_SCHEMA }) {
    const pathname = usePathname();
    const [showChild, setShowChild] = useState(false);

    return (
        <li
            className="relative"
            onMouseEnter={() => setShowChild(true)}
            onMouseLeave={() => setShowChild(false)}
        >
            <Link
                className="flex justify-between items-center"
                href={menu.children.length ? pathname : `/${menu.url}`}
            >
                <span>{menu.name}</span>
                {menu.children.length ? (
                    <span>
                        <FaPlus />
                    </span>
                ) : (
                    <></>
                )}
            </Link>

            {(() => {
                if (menu.children.length) {
                    return (
                        <ul className={`${showChild ? "block" : "hidden"}`}>
                            <Menus data={menu.children} />
                        </ul>
                    );
                }
            })()}
        </li>
    );
}
