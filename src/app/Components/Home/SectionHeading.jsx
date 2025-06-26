import { GraduationCap } from "lucide-react";

export default function sectionHeading() {
    return (
        <>
            <div className="flex justify-center mb-8">
                <div className="inline-flex items-center gap-1 px-6 py-2 bg-gradient-to-r from-[#4fbe99]/10 to-[#3da582]/10 text-[#4fbe99] border-1 border-[#4fbe99]/20 rounded-full">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full">
                        <GraduationCap className="w-4 h-4 text-[#4fbe99]" />
                    </div>
                    <span className="text-sm font-medium text-[#4fbe99]">Trusted Educational Partners</span>
                </div>
            </div>

            {/* Header Section for Educational Partners */}
            <div className="text-center mb-20 px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
                    <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                        Partner Colleges &
                    </span>
                    {/* <br /> */}
                    <span className="text-[#4fbe99]">
                        {` Universities`}
                    </span>
                </h2>
                <p className="text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed mb-4">
                    Our counselling group collaborates with leading educational institutions to provide comprehensive mental
                    health support, academic guidance, and student wellness services across campuses nationwide.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 mt-8">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#4fbe99] rounded-full"></div>
                        <span>150+ Partner Institutions</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#4fbe99] rounded-full"></div>
                        <span>500K+ Students Supported</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#4fbe99] rounded-full"></div>
                        <span>24/7 Counselling Access</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#4fbe99] rounded-full"></div>
                        <span>98% Student Satisfaction</span>
                    </div>
                </div>
            </div>
        </>
    )
}