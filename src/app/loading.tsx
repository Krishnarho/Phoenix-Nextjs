// app/loading.tsx
export default function Loading() {
    return (
        <div className="flex-center flex-col gap-2 min-h-screen bg-background">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-orange-600 border-solid"></div>
            <p className="ml-4 text-lg text-primary-foreground">Loading your content...</p>
        </div>
    );
}
