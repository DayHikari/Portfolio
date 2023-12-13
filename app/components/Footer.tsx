// Component function for the footer
export default function Footer() {
    const d = new Date();
    let year = d.getFullYear()
    return (
        <footer className="h-28 bg-zinc-800 flex flex-col items-center justify-center">
            <h4 className="font-bold text-white">Designed and built in <span className="text-rose-700">Next.JS</span> by <span className="text-amber-700">David Mason</span></h4>
            <h4 className="text-white">&copy; {year} All rights reserved</h4>
        </footer>
    )
}