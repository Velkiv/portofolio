export default function Navbar() {
    return (
        <div className="fixed w-2/3 h-auto m-4 flex justify-self-center rounded-xl bg-zinc-300 font-sans dark:bg-black">
            <div className="w-full flex flex-row">
                <div className="flex basis-1/2">
                    <h1 className="p-3">Kevin Alexander Walewangko</h1>
                </div>
                <div className="flex basis-1/2 justify-end text-center">
                    <a className="w-30 hover:bg-zinc-400" href="/about">Home</a>
                    <a className="w-30 hover:bg-zinc-400" href="/about">About</a>
                    <a className="w-30 hover:bg-zinc-400">Projects</a>
                    <a className="w-30 hover:bg-zinc-400">Experience</a>
                </div>
            </div>
        </div>
    )
}