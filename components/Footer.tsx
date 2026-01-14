export default function Footer() {
    return (
        <footer className="flex-row flex justify-center">
            <div className="flex ml-20 w-3/4 mt-30 mb-20 gap-10">
                <div className="flex-col basis-1/5 justify-start">
                    <h1 className="font-bold text-[30px]">Kevin Portofolio</h1>
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
                    <h1>Contact : 0811-5500-9899</h1>
                    <h1>E-mail : kevinwalewangko078@gmail.com</h1>
                    <h1>Location : Balikpapan, Indonesia</h1>
                </div>
            </div>        
        </footer>
    )
}