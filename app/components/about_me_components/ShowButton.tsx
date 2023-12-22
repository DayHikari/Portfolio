interface promptObject {
    desc: string;
    clickFunction: Function
}

export default function ShowButton({desc, clickFunction}:promptObject) {
    return (
            <button onClick={() => clickFunction()} className="text-black text-lg font-semibold px-2 py-1 border-2 border-orange-600 dark:border-zinc-800 rounded-full bg-gradient-to-b from-orange-500 via-orange-300 to-orange-500 w-40 h-10 mt-5">{desc}</button>
    )
}