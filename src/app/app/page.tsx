import { UserButton } from "@clerk/nextjs";
import Script from "next/script";

export default function AppPage() {
  return (
    <main className="relative min-h-screen">
      <Script
        src="https://unpkg.com/@elevenlabs/convai-widget-embed"
        async
        type="text/javascript"
        strategy="afterInteractive"
      />
      <div className="absolute right-4 top-4 z-10">
        <UserButton />
      </div>
      <div className="h-screen w-screen">
        <elevenlabs-convai agent-id="agent_0501kefs44tqep48g2h8csm7aw07"></elevenlabs-convai>
      </div>
    </main>
  );
}
