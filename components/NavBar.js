import React from "react";
import Link from "next/link";
export default function NavBar(){
    return(
        <nav>
            <a>Adams Tech</a>

            <ul>
                <li>
                    <Link href="/posts">
                    <a>All posts</a>

                    </Link>                </li>
            </ul>
        </nav>
    )
}