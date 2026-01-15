import Image from "next/image"

export default function About() {
    return(
        <div className="flex-col flex justify-center mt-120 mb-100">
            <h1 className="text-8xl text-black text-center mb-20">About</h1>
            <div className="flex w-3/5 mx-auto">
                <div className="flex-col basis-1/2">
                    <Image className="rounded-xl" src='/background.jpg' width={400} height={800} alt="code"/>
                </div> 
                <div className="flex flex-col basis-1/2 justify-start gap-5">
                    <h1>Hello</h1>
                    <p>My name is Kevin. A web developer.</p>
                    <a href="/about" className="bg-zinc-200 p-2 rounded-xl w-1/5">More....</a>
                </div>
            </div>        
        </div>
    )
}