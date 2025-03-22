"use client";
import { useEffect } from "react";

export default function ContactPage() {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div style={{ width: "100vw", height: "100vh", margin: 0, padding: 0, overflow: "hidden" }}>
            <iframe
                src="https://nukeblob.vercel.app/"
                style={{ width: "100vw", height: "100vh", border: "none" }}
                scrolling="no"
            ></iframe>
        </div>
    );
}
