"use client";

import { Curve, Ready } from "@/components";

export default function ContactPage() {
  return (
	<>
    <div style={{ width: "100vw", height: "100vh", margin: 0, padding: 0, overflow: "hidden" }}>
      {/* Embedding contact.html inside an iframe, ensuring navbar stays */}
      <iframe src="/team.html" style={{ width: "100vw", height: "100vh", border: "none" }}></iframe>
    </div>
	<Curve/>
	</>
  );


}

