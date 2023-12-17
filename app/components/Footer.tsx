// Component function for the footer
export default function Footer() {
    const d:Date = new Date();
    let year:number = d.getFullYear()
    return (
        <footer className="h-28 bg-orange-600 dark:bg-zinc-800 flex flex-col items-center justify-center">
            <h4 className="font-bold text-lg">Designed and built in <span className="text-blue-700">Next.JS</span> by <span className="text-blue-700">David Mason</span></h4>
            <h4 >&copy; {year} All rights reserved</h4>
        </footer>
    )
}