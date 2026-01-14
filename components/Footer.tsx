export default function Footer() {
    return (
        <div className="flex-row flex mt-120">
            <div className="flex ml-20 w-1/1 mt-20 gap-10">
                <div className="flex-col basis-1/5 justify-start">
                    <h1 className="font-bold">Kevin Portfolio</h1>
                    <p>Thank you for your attention</p>
                </div>
                <div className="flex-col basis-2/5 justify-items-start">
                    <ul className="list-inside list-disc">
                        <li>Home</li>
                        <li>About</li>
                        <li>Project</li>
                    </ul>
                </div> 
                <div className="flex-col basis-2/5 justify-items-start">
                    <h1>Hello</h1>
                    <p>My name is Kevin. A web developer.</p>
                    <button>More....</button>
                </div>
            </div>        
        </div>
    )
}