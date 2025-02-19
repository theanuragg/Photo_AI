"use client";
import { useToast } from "@/Components/ui/Toast";

export default function Home() {
  const toast = useToast();

  return (
    <main>
      <button
        onClick={() => toast.success("❗")}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Show Success Toast
      </button>
    </main>
  );
}
