import Image from "next/image"

export default function AboutPage() {
    return (
        <div className="flex-col flex justify-center" id="body1">
            {/* About */}
            <div className="flex w-3/5 justify-items-center mx-auto mt-50">
                <div className="flex-col basis-1/2">
                    <h1 className="text-[50px] font-bold mt-20 mb-20">My Story</h1>
                    <p className="text-[22px]">My name is Kevin from Balikpapan, East Borneo. A graduate from Tarumanagara University and post graduate from Binus University of Computer Science. Have skill in web development and data analysis.</p>
                </div> 
                <div className="flex-col basis-1/2 justify-items-center">
                    <Image className="rounded-xl mt-30" src='/background.jpg' width={400} height={800} alt="code"/>
                </div>
            </div>

            {/* Education */}
            <div className="flex-col w-3/5 justify-items-start mx-auto mt-100">
                <h1 className="text-[50px] font-bold">Education</h1>
            </div>
            <div className="flex flex-col mx-auto w-3/5 mb-50">
                <div className="flex flex-row w-3/5 justify-items-start gap-10 mb-10">
                    <div className="flex flex-col w-100 h-60">
                        <h1>Tarumanagara University (2019-2023)</h1>
                        <h2>S1 - Teknik Informatika</h2>
                        <p></p>
                    </div>
                    <div className="flex flex-row">
                        <div className="size-50 bg-zinc-200"></div>
                    </div>
                </div>
                <p className="text-[22px]">During my study for the bachelor’s degree, I learned web development, mobile development, data analysis, and machine learning. 
                    For my final year, the topic I chosen was a machine learning, Apriori Algorithm to recommend a game genre recommendation. 
                    I also learned game programming and computer network.</p>
            </div>
            <div className="flex flex-col mx-auto w-3/5 mb-50">
              <div className="flex flex-row w-3/5 justify-items-start gap-10 flex-nowrap">
                    <div className="flex flex-col w-100 h-60">
                        <h1>Binus University (2023-2025)</h1>
                        <h2>S2 - Teknik Informatika</h2>
                        <p></p>
                    </div>
                    <div className="flex flex-row">
                        <div className="size-50 bg-zinc-200"></div>
                    </div>
                </div> 
                <p className="text-[22px]">I continued my study at Binus University where I learned about IoT/Internet of Things, IT risk Management, Data Engineering, and Machine Learning. 
                        My research focused on optimization technique for machine learning, a feature selection to find the least number of features to train ML.</p> 
            </div>

            {/* Experience */}
            <div className="flex-col w-3/5 justify-items-start mx-auto mt-100">
                <h1 className="text-[50px] font-bold">Experiences</h1>
            </div>
            <div className="ml-5 mt-5">
                <div className="flex flex-col w-3/5 mx-auto">
                    <div className="flex flex-row gap-20">
                        <div className="bg-zinc-500 w-1/2 h-auto rounded-2xl p-4 text-white">
                            <h1 className="text-[25px]/7 font-bold">UPTD Tekkom & Infodik (Samarinda)</h1>
                            <h2 className="text-[18px]/7">Software Engineer</h2>
                            <h2 className="text-[18px]/3">August 2025 - December 2025</h2>
                        </div>
                        <div className="basis-1/2">
                            <ul className="list-disc">
                                <li>Developed and maintain a Learning Management System</li>
                                <li>Developed an AI Chatbot to analyze a database</li>

                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-row w-2/5 justify-center">
                        <div className="bg-zinc-900 w-1 h-30"></div>
                    </div>
                </div>
                <div className="flex-col w-3/5 mx-auto">
                    <div className="flex flex-row gap-20">
                        <div className="bg-zinc-500 w-1/2 h-auto rounded-2xl p-4 text-white">
                            <h1 className="text-[25px]/7 font-bold">PT Widya Presisi Solusi (Jakarta)</h1>
                            <h2 className="text-[18px]/7">IT Developer</h2>
                            <h2 className="text-[18px]/3">January 2022 - June 2022</h2>
                        </div>
                        <div className="basis-1/2">
                            <ul className="list-disc">
                                <li>Developed and maintain a Learning Management System</li>
                                <li>Developed an AI Chatbot to analyze a database</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-row w-2/5 justify-center">
                        <div className="bg-zinc-900 w-1 h-30"></div>
                    </div>
                </div>
                
                    <div className="flex-col w-3/5 mx-auto">
                        <div className="flex flex-row gap-20">
                            <div className="bg-zinc-500 w-1/2 h-auto rounded-2xl p-4 text-white">
                                <h1 className="text-[25px]/7 font-bold">Freelance Mobile Developer (Balikpapan)</h1>
                                <h2 className="text-[18px]/7">IT Developer</h2>
                                <h2 className="text-[18px]/3">January 2022 - June 2022</h2>
                            </div>
                        <div className="basis-1/2">
                            <ul className="list-disc">
                                <li>Developed and maintain a Learning Management System</li>
                                <li>Developed an AI Chatbot to analyze a database</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Language & Framework */}
            <div className="flex-col w-3/5 justify-items-start mx-auto mt-50">
                <h1 className="text-[50px] font-bold">Language & Framework</h1>
            </div>

            <div className="flex-col w-3/5 mx-auto mb-50">
                <div className="mt-10">
                    
                    <div className="flex flex-col flex-wrap bg-zinc-500 rounded-xl justify-center p-5 mb-20">
                        <h1 className="text-[30px] text-white text-center font-bold">Language & Framework</h1>
                        <div className="flex flex-wrap p-5 gap-5 rounded-xl justify-center">
                            <span className="px-2 py-1 justify-items-center bg-zinc-900 text-white rounded-xl">HTML</span>
                            <span className="px-2 py-1 justify-items-center bg-zinc-900 text-white rounded-xl">HTML</span>
                            <span className="px-2 py-1 justify-items-center bg-zinc-900 text-white rounded-xl">HTML</span>
                            <span className="px-2 py-1 justify-items-center bg-zinc-900 text-white rounded-xl">HTML</span>
                            <span className="px-2 py-1 justify-items-center bg-zinc-900 text-white rounded-xl">HTML</span>
                            <span className="px-2 py-1 justify-items-center bg-zinc-900 text-white rounded-xl">HTML</span>
                            <span className="px-2 py-1 justify-items-center bg-zinc-900 text-white rounded-xl">HTML</span>
                            <span className="px-2 py-1 justify-items-center bg-zinc-900 text-white rounded-xl">HTML</span>
                            <span className="px-2 py-1 justify-items-center bg-zinc-900 text-white rounded-xl">HTML</span>
                            <span className="px-2 py-1 justify-items-center bg-zinc-900 text-white rounded-xl">HTML</span>
                            <span className="px-2 py-1 justify-items-center bg-zinc-900 text-white rounded-xl">HTML</span>
                            <span className="px-2 py-1 justify-items-center bg-zinc-900 text-white rounded-xl">HTML</span>
                            <span className="px-2 py-1 justify-items-center bg-zinc-900 text-white rounded-xl">HTML</span>
                            <span className="px-2 py-1 justify-items-center bg-zinc-900 text-white rounded-xl">HTML</span>
                            <span className="px-2 py-1 justify-items-center bg-zinc-900 text-white rounded-xl">HTML</span>
                            <span className="px-2 py-1 justify-items-center bg-zinc-900 text-white rounded-xl">HTML</span>
                        </div>
                    </div>
                    
                    <div className="flex flex-col flex-wrap bg-zinc-500 rounded-xl justify-center p-5 mb-20">
                        <h1 className="text-[30px] text-white text-center font-bold">Tools</h1>
                        <div className="flex flex-wrap p-5 gap-5 rounded-xl justify-center">
                            <span className="px-1 py-1 justify-items-center bg-zinc-900 text-white rounded-xl">HTML</span>
                            <span className="px-1 py-1 justify-items-center bg-zinc-900 text-white rounded-xl">HTML</span>
                            <span className="px-1 py-1 justify-items-center bg-zinc-900 text-white rounded-xl">HTML</span>
                            <span className="px-2 py-1 justify-items-center bg-zinc-900 text-white rounded-xl">HTML</span>
                            <span className="px-2 py-1 justify-items-center bg-zinc-900 text-white rounded-xl">HTML</span>
                            <span className="px-2 py-1 justify-items-center bg-zinc-900 text-white rounded-xl">HTML</span>
                            <span className="px-2 py-1 justify-items-center bg-zinc-900 text-white rounded-xl">HTML</span>
                            <span className="px-2 py-1 justify-items-center bg-zinc-900 text-white rounded-xl">HTML</span>
                            <span className="px-2 py-1 justify-items-center bg-zinc-900 text-white rounded-xl">HTML</span>
                            <span className="px-2 py-1 justify-items-center bg-zinc-900 text-white rounded-xl">HTML</span>
                            <span className="px-2 py-1 justify-items-center bg-zinc-900 text-white rounded-xl">HTML</span><span className="px-2 py-1 justify-items-center bg-zinc-900 text-white rounded-xl">HTML</span>
                            <span className="px-2 py-1 justify-items-center bg-zinc-900 text-white rounded-xl">HTML</span>
                            <span className="px-2 py-1 justify-items-center bg-zinc-900 text-white rounded-xl">HTML</span>
                            <span className="px-2 py-1 justify-items-center bg-zinc-900 text-white rounded-xl">HTML</span>
                            
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}