import Image from "next/image";

export default function Hero() {
    return(
        <div className="flex flex-row justify-center-safe align-center">
            <div className="flex mt-60 w-2/3">
                <div className="flex-col basis-1/2">
                    <h1 className="text-[75px] text-black font-black text-wrap tracking-tight leading-none">Kevin Alexander Walewangko</h1>
                    <p className="text-4xl text-bold mt-10">Web Development</p>
                    <p className="text-4xl text-center text-bold">Machine Learning</p>
                </div> 
                <div className="flex basis-1/2 justify-end">
                        <Image className="rounded-xl" src='/background.jpg' width={400} height={800} alt="code"/>
                </div>
            </div>
        </div>
        
    )
}