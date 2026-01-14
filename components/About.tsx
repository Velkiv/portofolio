import Image from "next/image"

export default function About() {
    return(
        <div className="flex-col flex justify-center mt-120">
            <h1 className="text-8xl text-black text-center mb-20">About</h1>
            <div className="flex w-3/5 mx-auto">
                <div className="flex-col basis-1/2">
                    <Image className="rounded-xl" src='/background.jpg' width={400} height={800} alt="code"/>
                </div> 
                <div className="flex-col basis-1/2 justify-start">
                    <h1>Hello</h1>
                    <p>My name is Kevin. A web developer.</p>
                    <button>More....</button>
                </div>
            </div>        
        </div>
    )
}