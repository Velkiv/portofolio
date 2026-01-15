export default function Projects() {
    return (
        <div className="flex-col flex mt-120 mx-auto w-4/5 h-200">
            <h1 className="text-8xl text-black text-center mb-20">Project</h1>
            <div className="flex w-4/5 gap-20 mx-auto justify-items-center bg-zinc-600 py-10 px-5 rounded-xl">
                <div className="flex-col basis-1/2 bg-zinc-400 w-1/1 h-50 p-3 rounded-xl">
                    <h1>Web Development</h1>
                </div> 
                <div className="flex-col basis-1/2 bg-zinc-400 w-1/1 h-50 p-3 rounded-xl justify-items-center">
                    <h1>Data Analysis & Machine Learning</h1>
                </div>
            </div>        
        </div>
    )
}