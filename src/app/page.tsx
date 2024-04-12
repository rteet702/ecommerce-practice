"use client";

import { CiHeart, CiShoppingCart } from "react-icons/ci";
import ColoredButton from "../components/reuseable/ColoredButton";
export default function Home() {
    return (
        <main className="h-[100%] flex flex-col">
            <div className="flex-[1] border-neutral-100 border-b-2 flex items-center gap-3">
                <ColoredButton icon={<CiHeart />}>Wishlist</ColoredButton>
                <ColoredButton icon={<CiShoppingCart />}>Cart</ColoredButton>
            </div>
            <div className="flex-[10] bg-black overflow-y-scroll"></div>
        </main>
    );
}
