// app/loading.tsx
export default function Loading() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-orange-600 border-solid"></div>
            <p className="ml-4 text-lg text-gray-700">Loading your content...</p>
        </div>
    );
}
