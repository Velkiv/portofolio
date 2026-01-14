import Image from "next/image"

export default function AboutPage() {
    return (
        <div className="flex-col flex justify-center mt-50">
            {/* About */}
            <div className="flex w-3/5 justify-items-center mx-auto">
                <div className="flex-col basis-1/2">
                    <h1 className="text-[50px] font-bold mt-20 mb-20">My Story</h1>
                    <p>My name is Kevin from Balikpapan, East Borneo. A graduate from Tarumanagara University and post graduate from Binus University of Computer Science. Have skill in web development and data analysis.</p>
                </div> 
                <div className="flex-col basis-1/2 justify-items-center">
                    <Image className="rounded-xl" src='/background.jpg' width={400} height={800} alt="code"/>
                </div>
            </div>

            {/* Education */}
            <div className="flex-col w-3/5 justify-items-start mx-auto mt-100">
                <h1 className="text-[50px] font-bold">Education</h1>
            </div>
            <div>
                <div className="flex-row w-3/5 justify-items-start mx-auto h-100">
                    <div className="flex-col">
                        <h1>Tarumanagara University (2019-2023)</h1>
                        <h2>S1 - Teknik Informatika</h2>
                        <p></p>
                    </div>
                    <div className="flex-row">

                    </div>
                    <p>During my study for the bachelor’s degree, I learned web development, mobile development, data analysis, and machine learning. 
                        For my final year, the topic I chosen was a machine learning, Apriori Algorithm to recommend a game genre recommendation. 
                        I also learned game programming and computer network.</p>
                </div>
            </div>
            <div>
              <div className="flex-row w-3/5 justify-items-start mx-auto h-100">
                    <div className="flex-col">
                        <h1>Binus University (2023-2025)</h1>
                        <h2>Masters Degree of Computer Science / S2 - Teknik Informatika</h2>
                        <p></p>
                    </div>
                    <div className="flex-row">

                    </div>
                    <p>I continued my study at Binus University where I learned about IoT/Internet of Things, IT risk Management, Data Engineering, and Machine Learning. 
                        My research focused on optimization technique for machine learning, a feature selection to find the least number of features to train ML.</p>
                </div>  
            </div>

            {/* Experience */}
            <div className="flex-col w-3/5 justify-items-start mx-auto mt-100">
                <h1 className="text-[50px] font-bold">Experiences</h1>
            </div>
            <div className="flex-col w-3/5 mx-auto mb-30">
                <div className="flex-row">
                    <div className="bg-zinc-500 w-150 h-30 rounded-2xl p-4 text-white">
                        <h1 className="text-[25px]">UPTD Tekkom & Infodik</h1>
                        <h2 className="text-[20px]">Software Engineer</h2>
                        <h2 className="text-[20px]">August 2025 - December 2025</h2>
                    </div>
                    <div className=""></div>
                </div>
            </div>
            <div className="flex-col w-3/5 mx-auto mb-30">
                <div className="flex-row">
                    <div className="bg-zinc-500 w-150 h-30 rounded-2xl p-4 text-white">
                        <h1 className="text-[25px]">PT Widya Presisi Solusi</h1>
                        <h2 className="text-[20px]">IT Developer</h2>
                        <h2 className="text-[20px]">January 2022 - June 2022</h2>
                    </div>
                    <div className=""></div>
                </div>
            </div>
            <div className="flex-col w-3/5 mx-auto">
                <div className="flex-row">
                    <div className="bg-zinc-500 w-150 h-30 rounded-2xl p-4 text-white">
                        <h1 className="text-[25px]">Freelance Mobile Developer</h1>
                        <h2 className="text-[20px]">IT Developer</h2>
                        <h2 className="text-[20px]">January 2022 - June 2022</h2>
                    </div>
                    <div className=""></div>
                </div>
            </div>
            

            {/* Language & Framework */}
            <div className="flex-col w-3/5 justify-items-start mx-auto mt-100">
                <h1 className="text-[50px] font-bold">Language & Framework</h1>
            </div>
        </div>
    )
}