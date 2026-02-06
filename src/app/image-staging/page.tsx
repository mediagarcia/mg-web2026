import { ImageStagingClient } from "./client";

export const dynamic = "force-dynamic";

export default function ImageStagingPage() {
  // Only render in development
  if (process.env.NODE_ENV !== "development") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Access Denied</h1>
          <p className="text-gray-600">This page is only available in development mode.</p>
        </div>
      </div>
    );
  }

  return <ImageStagingClient />;
}
