"use client";

import H1 from "@/components/ui/h1";

export default function Error() {
  return (
    <main className="m-auto my-10 max-w-5xl space-y-5 px-3 text-center">
      <H1 className="text-4xl font-bold text-red-600">Error</H1>
      <p className="text-lg text-gray-600">
        An unexpected error occurred. Please try refreshing the page or contact support if the problem persists.
      </p>
    </main>
  );
}
