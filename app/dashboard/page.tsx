import { Metadata } from 'next'
export const metadata: Metadata = {
    title: "Next.js",
}

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
    return <h1 className={"text-orange-500"}>Hello, Dashboard Page!</h1>
}