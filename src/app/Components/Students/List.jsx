// "use client"

// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { useState } from "react"
// import {
//   X,
//   Star,
//   Mail,
//   GraduationCap,
//   Heart,
//   MessageCircle,
//   Award,
//   CheckCircle,
//   Building,
//   TrendingUp,
//   Target,
//   Briefcase,
//   Calendar,
//   MapPin,
//   ArrowRight,
// } from "lucide-react"

// const successfulStudents = [
//   {
//     id: 1,
//     name: "Sarah Johnson",
//     avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=600&h=600&fit=crop&crop=face",
//     currentYear: "Senior",
//     major: "Computer Science",
//     university: "Stanford University",
//     status: "Secured Full-Time Offer",
//     upcomingRole: "Software Engineer",
//     company: "Google",
//     startDate: "July 2024",
//     counselingPeriod: "2022-2023",
//     expectedSalary: "$145,000",
//     location: "Palo Alto, CA",
//     email: "sarah.j@stanford.edu",
//     phone: "+1 (555) 123-4567",
//     bio: "As a junior, I was struggling with career direction and imposter syndrome in tech. The counseling group helped me build confidence, secure amazing internships, and ultimately land my dream job at Google before graduation.",
//     internships: ["Microsoft Summer 2023", "Meta Summer 2022", "Startup Intern 2021"],
//     currentGPA: "3.8",
//     achievements: [
//       "Google Full-Time Offer (Senior Year)",
//       "Dean's List - 6 semesters",
//       "Hackathon Winner 2023",
//       "CS Teaching Assistant",
//       "Published Research Paper",
//     ],
//     counselingImpact:
//       "The counseling team helped me overcome imposter syndrome and guided me through the competitive tech recruiting process. Their mock interviews and career strategy sessions were game-changers.",
//     rating: 5.0,
//     reviews: [
//       {
//         id: 1,
//         aspect: "Career Strategy",
//         rating: 5,
//         comment: "Helped me create a strategic plan for tech recruiting and build confidence for technical interviews.",
//         date: "2024-01-15",
//       },
//       // {
//       //   id: 2,
//       //   aspect: "Interview Prep",
//       //   rating: 5,
//       //   comment: "Mock interviews and coding practice sessions were incredibly valuable for landing my Google offer.",
//       //   date: "2024-01-10",
//       // },
//     ],
//     skills: ["Python", "JavaScript", "React", "System Design", "Machine Learning"],
//     mentorshipOffered: true,
//     currentProjects: ["Senior Capstone: AI-Powered Study Assistant", "Google Pre-Start Project"],
//   },
//   {
//     id: 2,
//     name: "Marcus Williams",
//     avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face",
//     currentYear: "Senior",
//     major: "Finance",
//     university: "Wharton School, UPenn",
//     status: "Investment Banking Analyst Offer",
//     upcomingRole: "Investment Banking Analyst",
//     company: "Goldman Sachs",
//     startDate: "August 2024",
//     counselingPeriod: "2021-2022",
//     expectedSalary: "$175,000",
//     location: "New York, NY",
//     email: "marcus.w@wharton.upenn.edu",
//     phone: "+1 (555) 234-5678",
//     bio: "Coming from a non-business background, I was intimidated by finance recruiting. The counseling team demystified the industry, helped me network effectively, and prepared me for the rigorous interview process.",
//     internships: ["Goldman Sachs Summer Analyst 2023", "JP Morgan Spring Week 2022"],
//     currentGPA: "3.9",
//     achievements: [
//       "Goldman Sachs Full-Time Offer",
//       "Summa Cum Laude Track",
//       "Finance Club President",
//       "CFA Level 1 Candidate",
//       "Dean's List All Semesters",
//     ],
//     counselingImpact:
//       "The counseling program connected me with finance alumni, taught me industry-specific networking, and provided intensive interview preparation that was crucial for breaking into investment banking.",
//     rating: 4.9,
//     reviews: [
//       {
//         id: 1,
//         aspect: "Industry Networking",
//         rating: 5,
//         comment: "Connected me with amazing alumni in finance and taught me how to network effectively.",
//         date: "2024-02-01",
//       },
//     ],
//     skills: ["Financial Modeling", "Valuation", "Excel", "PowerPoint", "Bloomberg Terminal"],
//     mentorshipOffered: true,
//     currentProjects: ["Senior Finance Thesis", "Goldman Sachs Pre-Analyst Training"],
//   },
//   {
//     id: 3,
//     name: "Aisha Patel",
//     avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=600&fit=crop&crop=face",
//     currentYear: "Senior",
//     major: "Pre-Med Biology",
//     university: "Harvard University",
//     status: "Medical School Acceptance",
//     upcomingRole: "Medical Student",
//     company: "Johns Hopkins School of Medicine",
//     startDate: "August 2024",
//     counselingPeriod: "2020-2021",
//     expectedSalary: "Medical Student",
//     location: "Baltimore, MD",
//     email: "aisha.p@harvard.edu",
//     phone: "+1 (555) 345-6789",
//     bio: "The pre-med track felt overwhelming and I almost switched majors sophomore year. The counseling group helped me create a strategic plan, manage stress, and ultimately get accepted to my top choice medical school.",
//     internships: ["Harvard Medical Research 2023", "Mass General Hospital Volunteer", "NIH Summer Research 2022"],
//     currentGPA: "3.95",
//     achievements: [
//       "Johns Hopkins Medical School Acceptance",
//       "MCAT Score: 520 (98th percentile)",
//       "Phi Beta Kappa",
//       "Research Publication (First Author)",
//       "Medical Volunteer of the Year",
//     ],
//     counselingImpact:
//       "The counseling team helped me stay focused during the challenging pre-med journey, provided study strategies, and guided me through the complex medical school application process.",
//     rating: 5.0,
//     reviews: [
//       {
//         id: 1,
//         aspect: "Academic Planning",
//         rating: 5,
//         comment: "Helped me plan the perfect pre-med curriculum and research timeline for medical school applications.",
//         date: "2024-01-20",
//       },
//     ],
//     skills: ["Clinical Research", "Laboratory Techniques", "Medical Writing", "Patient Care", "MCAT Prep"],
//     mentorshipOffered: true,
//     currentProjects: ["Senior Honors Thesis in Neuroscience", "Medical School Preparation"],
//   },
//   {
//     id: 4,
//     name: "David Kim",
//     avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop&crop=face",
//     currentYear: "Junior",
//     major: "Business Administration",
//     university: "UC Berkeley Haas",
//     status: "Product Management Intern",
//     upcomingRole: "Product Management Intern",
//     company: "Meta",
//     startDate: "June 2024",
//     counselingPeriod: "2023-2024",
//     expectedSalary: "$8,500/month",
//     location: "Menlo Park, CA",
//     email: "david.k@berkeley.edu",
//     phone: "+1 (555) 456-7890",
//     bio: "I was undecided between multiple career paths and didn't know product management existed. The counseling group introduced me to PM through alumni connections and helped me secure a competitive internship at Meta.",
//     internships: ["Meta PM Intern Summer 2024", "Startup Product Intern 2023"],
//     currentGPA: "3.7",
//     achievements: [
//       "Meta Product Management Internship",
//       "Product Management Certificate",
//       "Haas Business Case Competition Winner",
//       "Entrepreneurship Club VP",
//     ],
//     counselingImpact:
//       "The counseling team opened my eyes to product management as a career path and provided the guidance and connections I needed to break into this competitive field as a junior.",
//     rating: 4.8,
//     reviews: [
//       {
//         id: 1,
//         aspect: "Career Discovery",
//         rating: 5,
//         comment: "Introduced me to product management and helped me understand if it was the right fit for me.",
//         date: "2024-01-25",
//       },
//     ],
//     skills: ["Product Strategy", "Data Analysis", "User Research", "Figma", "SQL"],
//     mentorshipOffered: true,
//     currentProjects: ["Junior Year Product Case Study", "Meta Internship Preparation"],
//   },
//   {
//     id: 5,
//     name: "Elena Rodriguez",
//     avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=600&fit=crop&crop=face",
//     currentYear: "Senior",
//     major: "Economics",
//     university: "MIT",
//     status: "Consulting Offer Secured",
//     upcomingRole: "Business Analyst",
//     company: "McKinsey & Company",
//     startDate: "September 2024",
//     counselingPeriod: "2022-2023",
//     expectedSalary: "$190,000",
//     location: "Boston, MA",
//     email: "elena.r@mit.edu",
//     phone: "+1 (555) 567-8901",
//     bio: "As a first-generation college student, I had never heard of management consulting. The counseling group introduced me to this field, helped me develop case interview skills, and connected me with consulting alumni.",
//     internships: ["McKinsey Summer Intern 2023", "Bain & Company Extern 2022"],
//     currentGPA: "3.85",
//     achievements: [
//       "McKinsey Full-Time Offer",
//       "MIT Economics Honors",
//       "Consulting Case Competition Winner",
//       "First-Gen Student Leadership Award",
//     ],
//     counselingImpact:
//       "As a first-generation student, the counseling team was instrumental in helping me understand high-level career opportunities and providing the resources and connections to succeed in consulting recruiting.",
//     rating: 5.0,
//     reviews: [
//       {
//         id: 1,
//         aspect: "First-Gen Support",
//         rating: 5,
//         comment: "Incredible support for first-generation students navigating competitive career paths and recruiting.",
//         date: "2024-02-10",
//       },
//     ],
//     skills: ["Case Interview", "Strategic Analysis", "Data Analysis", "Presentation", "Problem Solving"],
//     mentorshipOffered: true,
//     currentProjects: ["Senior Economics Thesis", "McKinsey Pre-Start Preparation"],
//   },
//   {
//     id: 6,
//     name: "James Thompson",
//     avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=600&fit=crop&crop=face",
//     currentYear: "Junior",
//     major: "Statistics & Data Science",
//     university: "Carnegie Mellon",
//     status: "Data Science Intern",
//     upcomingRole: "Data Science Intern",
//     company: "Netflix",
//     startDate: "May 2024",
//     counselingPeriod: "2023-2024",
//     expectedSalary: "$9,000/month",
//     location: "Los Gatos, CA",
//     email: "james.t@cmu.edu",
//     phone: "+1 (555) 678-9012",
//     bio: "I loved working with data but wasn't sure how to turn it into a career. The counseling group helped me understand the data science landscape, build a strong portfolio, and prepare for technical interviews.",
//     internships: ["Netflix Data Science Intern Summer 2024", "Local Startup Data Analyst 2023"],
//     currentGPA: "3.8",
//     achievements: [
//       "Netflix Data Science Internship",
//       "Kaggle Competition Silver Medal",
//       "Data Science Research Project",
//       "Statistics Department TA",
//     ],
//     counselingImpact:
//       "The counseling team helped me understand different data science career paths and provided guidance on building a competitive technical portfolio for top tech companies.",
//     rating: 4.9,
//     reviews: [
//       {
//         id: 1,
//         aspect: "Technical Career Prep",
//         rating: 5,
//         comment:
//           "Great guidance on building technical skills and preparing for data science interviews at top companies.",
//         date: "2024-02-05",
//       },
//     ],
//     skills: ["Python", "R", "Machine Learning", "SQL", "Tableau", "Statistics"],
//     mentorshipOffered: true,
//     currentProjects: ["Junior Data Science Capstone", "Netflix Internship Prep"],
//   },
// ]

// export default function SuccessStories() {
//   const [selectedStudent, setSelectedStudent] = useState(null)
//   const [searchTerm, setSearchTerm] = useState("")
//   const [filterStatus, setFilterStatus] = useState("all")

//   const statuses = ["all", "secured offer", "internship", "medical school", "graduate school"]

//   const filteredStudents = successfulStudents.filter((student) => {
//     const matchesSearch =
//       searchTerm === "" ||
//       student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       student.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       student.upcomingRole.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       student.university.toLowerCase().includes(searchTerm.toLowerCase())

//     const matchesStatus =
//       filterStatus === "all" ||
//       student.status.toLowerCase().includes(filterStatus.toLowerCase()) ||
//       student.upcomingRole.toLowerCase().includes(filterStatus.toLowerCase())

//     return matchesSearch && matchesStatus
//   })

//   const openModal = (student) => {
//     setSelectedStudent(student)
//     document.body.style.overflow = "hidden"
//   }

//   const closeModal = () => {
//     setSelectedStudent(null)
//     document.body.style.overflow = "unset"
//   }

//   return (
//     <div className="min-h-screen pt-10">
//       {/* Header Section */}
//       <section className="relative py-16 lg:py-24">
//         <div className="absolute inset-0" />
//         <div className="absolute inset-0" />
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center space-y-8">
//             <div className="space-y-4">
//               <Badge className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 text-emerald-700 border border-emerald-200/50 rounded-full px-6 py-2 text-base font-medium">
//                 <Award className="w-5 h-5 mr-2" />
//                 Current Student Success Stories
//               </Badge>

//               <br />
//               <br />

//               <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
//                 <span className="block text-slate-900">Students</span>
//                 <span className="block bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
//                   Achieving Dreams
//                 </span>
//               </h1>

//               <p className="max-w-2xl mx-auto text-xl text-slate-600 leading-relaxed">
//                 Meet current students who transformed their career prospects through our counseling program. From
//                 securing dream internships to landing full-time offers at top companies.
//               </p>
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
//               {[
//                 { value: `${successfulStudents.length}+`, label: "Success Stories" },
//                 { value: "98%", label: "Offer Success Rate" },
//                 { value: "$165K", label: "Average Starting Salary" },
//                 { value: "100%", label: "Student Satisfaction" },
//               ].map((stat, index) => (
//                 <div key={index} className="group">
//                   <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
//                     <div className="text-3xl font-bold text-emerald-600 mb-2 group-hover:scale-110 transition-transform duration-300">
//                       {stat.value}
//                     </div>
//                     <div className="text-slate-600 font-medium">{stat.label}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Search and Filter */}
//       <section className="sticky top-0 z-20 backdrop-blur-xl border-b border-slate-200/50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//           <div className="flex flex-col lg:justify-center lg:flex-row gap-6 items-center">
//             <div className="relative flex-1 max-w-md">
//               <input
//                 type="text"
//                 placeholder="Search by name, company, role, or university..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full pl-4 pr-4 py-3 bg-slate-50/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all duration-300"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Success Stories Grid */}
//       <section className="py-12 lg:py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {filteredStudents.length === 0 ? (
//             <div className="text-center py-20">
//               <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center">
//                 <Award className="w-16 h-16 text-slate-400" />
//               </div>
//               <h3 className="text-2xl font-bold text-slate-700 mb-4">No success stories found</h3>
//               <p className="text-slate-500 text-lg">Try adjusting your search or filter criteria</p>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {filteredStudents.map((student, index) => (
//                 <div
//                   key={student.id}
//                   className="group"
//                   style={{
//                     animationDelay: `${index * 100}ms`,
//                   }}
//                 >
//                   {/* Clipped Card Design */}
//                   <div
//                     className="relative bg-gray-100 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 hover:scale-[1.02] overflow-hidden border border-slate-100"
//                     style={{
//                       clipPath:
//                         "polygon(0 0, calc(100% - 25px) 0, 100% 25px, 100% 100%, 25px 100%, 0 calc(100% - 25px))",
//                     }}
//                   >
//                     {/* Background Gradient */}
//                     <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-white to-teal-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//                     {/* Success Badge */}
//                     {/* <div className="absolute top-4 right-4 z-10">
//                       <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0 text-xs font-medium">
//                         <Award className="w-3 h-3 mr-1" />
//                         {student.status}
//                       </Badge>
//                     </div> */}

//                     <div className="relative p-6 space-y-4">
//                       {/* Large Image Section - No Clipping */}
//                       <div className="w-full h-48 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-500">
//                         <img
//                           src={student.avatar || "/placeholder.svg"}
//                           alt={student.name}
//                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//                         />
//                       </div>

//                       {/* Student Info */}
//                       <div className="space-y-3">
//                         <div>
//                           <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors duration-300">
//                             {student.name}
//                           </h3>
//                           <p className="text-slate-600 text-sm font-medium">
//                             {student.currentYear} • {student.major}
//                           </p>
//                           <p className="text-slate-500 text-sm">{student.university}</p>
//                         </div>

//                         {/* Upcoming Role */}
//                         {/* <div className="bg-emerald-50 rounded-xl p-3 border border-emerald-100">
//                           <p className="text-emerald-800 font-medium text-sm">{student.upcomingRole}</p>
//                           <p className="text-emerald-600 text-sm">{student.company}</p>
//                           <p className="text-emerald-500 text-xs">Starting {student.startDate}</p>
//                         </div> */}

//                         {/* Key Stats */}
//                         <div className="flex items-center justify-between py-2 border-t border-slate-100">
//                           <div className="flex items-center gap-1 text-sm text-slate-500">
//                             <TrendingUp className="w-4 h-4" />
//                             <span>GPA: {student.currentGPA}</span>
//                           </div>
//                           <div className="flex items-center gap-1 text-sm text-slate-500">
//                             <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
//                             <span>{student.rating}</span>
//                           </div>
//                         </div>

//                         {/* Skills Preview */}
//                         <div className="space-y-2">
//                           <div className="flex flex-wrap gap-1">
//                             {student.skills.slice(0, 2).map((skill, idx) => (
//                               <Badge
//                                 key={idx}
//                                 className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs"
//                               >
//                                 {skill}
//                               </Badge>
//                             ))}
//                             {student.skills.length > 2 && (
//                               <Badge className="bg-slate-100 text-slate-600 border-0 text-xs">
//                                 +{student.skills.length - 2}
//                               </Badge>
//                             )}
//                           </div>
//                         </div>

//                         {/* Arrow Button - Only this opens modal */}
//                         <div className="transition-opacity duration-300 pt-2 flex justify-end">
//                           <Button
//                             onClick={() => openModal(student)}
//                             className="w-[45px] h-[45px] cursor-pointer bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:shadow-lg transition-all duration-300 rounded-full text-sm z-10 relative pointer-events-auto"
//                           >
//                             <ArrowRight className="!w-[25px] !h-[25px] transform -rotate-[40deg] transition-transform duration-300 group-hover:rotate-[0deg]" />
//                           </Button>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Decorative Elements */}
//                     <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-emerald-500/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Responsive Modal */}
//       {selectedStudent && (
//         <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4">
//           <div className="relative w-full max-w-6xl max-h-[95vh] sm:max-h-[90vh] bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
//             {/* Close Button */}
//             <Button
//               onClick={closeModal}
//               className="absolute top-3 right-3 sm:top-6 sm:right-6 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full p-0 bg-slate-100 hover:bg-slate-200 text-slate-600 border border-slate-200"
//             >
//               <X className="w-4 h-4 sm:w-5 sm:h-5" />
//             </Button>

//             <div className="overflow-y-auto max-h-[95vh] sm:max-h-[90vh]">
//               {/* Header Section */}
//               <div className="relative bg-gradient-to-br from-emerald-500 to-teal-500 p-4 sm:p-6 lg:p-8 text-white">
//                 <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
//                   <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border-2 sm:border-4 border-white/20 mx-auto sm:mx-0">
//                     <img
//                       src={selectedStudent.avatar || "/placeholder.svg"}
//                       alt={selectedStudent.name}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>

//                   <div className="flex-1 space-y-2 sm:space-y-3 text-center sm:text-left">
//                     <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
//                       <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">{selectedStudent.name}</h2>
//                       {/* <Badge className="bg-white/20 text-white border-white/30 text-xs sm:text-sm">
//                         <Award className="w-3 h-3 mr-1" />
//                         {selectedStudent.status}
//                       </Badge> */}
//                     </div>

//                     <p className="text-white/90 text-sm sm:text-base lg:text-lg">
//                       {selectedStudent.currentYear} • {selectedStudent.major}
//                     </p>

//                     <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 pt-2">
//                       <div className="flex items-center gap-2">
//                         <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
//                         <span className="text-base sm:text-lg lg:text-xl font-bold">{selectedStudent.university}</span>
//                       </div>
//                       {/* <div className="flex items-center gap-2">
//                         <Building className="w-4 h-4 sm:w-5 sm:h-5" />
//                         <span>{selectedStudent.company}</span>
//                       </div> */}
//                     </div>

//                     <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 pt-2">
//                       <div className="flex items-center gap-2">
//                         <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
//                         <span className="text-base sm:text-lg lg:text-xl font-bold">
//                           GPA: {selectedStudent.currentGPA}
//                         </span>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-300 text-amber-300" />
//                         <span className="text-base sm:text-lg lg:text-xl font-bold">{selectedStudent.rating}</span>
//                         <span className="text-white/80 text-sm sm:text-base">Rating</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Content Section */}
//                 <div className="p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8">
//                   {/* Success Story */}
//                   <div className="space-y-3">
//                     <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
//                       <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
//                       Success Story
//                     </h3>
//                     <p className="text-white leading-relaxed text-sm sm:text-base">{selectedStudent.bio}</p>
//                   </div>

//                   {/* Upcoming Role */}
//                   {/* <div className="bg-emerald-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-emerald-100">
//                     <h4 className="font-semibold text-emerald-900 mb-3 flex items-center gap-2 text-sm sm:text-base">
//                       <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
//                       Upcoming Role
//                     </h4>
//                     <div className="space-y-2">
//                       <p className="text-emerald-800 font-medium text-base sm:text-lg">
//                         {selectedStudent.upcomingRole}
//                       </p>
//                       <p className="text-emerald-700 text-sm sm:text-base">{selectedStudent.company}</p>
//                       <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-emerald-600 text-xs sm:text-sm">
//                         <div className="flex items-center gap-1">
//                           <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
//                           <span>Starts {selectedStudent.startDate}</span>
//                         </div>
//                         <div className="flex items-center gap-1">
//                           <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
//                           <span>{selectedStudent.location}</span>
//                         </div>
//                         <div className="flex items-center gap-1">
//                           <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
//                           <span>{selectedStudent.expectedSalary}</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div> */}

//                   {/* Counseling Impact */}
//                   <div className="bg-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-blue-100">
//                     <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2 text-sm sm:text-base">
//                       <Target className="w-4 h-4 sm:w-5 sm:h-5" />
//                       How Our Counseling Helped
//                     </h4>
//                     <p className="text-blue-800 leading-relaxed text-sm sm:text-base">
//                       {selectedStudent.counselingImpact}
//                     </p>
//                     <div className="mt-3 text-xs sm:text-sm text-blue-600">
//                       <strong>Counseling Period:</strong> {selectedStudent.counselingPeriod}
//                     </div>
//                   </div>

//                   {/* Current Projects & Internships */}
//                   <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
//                     <div className="space-y-3">
//                       <h4 className="font-semibold text-white flex items-center gap-2 text-sm sm:text-base">
//                         <Award className="w-4 h-4 sm:w-4 sm:h-4 text-white" />
//                         Milestones & Experience</h4>
//                       <div className="space-y-2">
//                         {selectedStudent.internships.map((internship, idx) => (
//                           <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-white">
//                             <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white flex-shrink-0" />
//                             <span>{internship}</span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>

//                     <div className="space-y-3">
//                       <h4 className="font-semibold text-white text-sm sm:text-base">Current Projects</h4>
//                       <div className="space-y-2">
//                         {selectedStudent.currentProjects.map((project, idx) => (
//                           <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-white">
//                             <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white flex-shrink-0" />
//                             <span>{project}</span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Achievements */}
//                   {/* <div className="space-y-3">
//                     <h4 className="font-semibold text-slate-900 flex items-center gap-2 text-sm sm:text-base">
//                       <Award className="w-4 h-4 sm:w-4 sm:h-4 text-emerald-600" />
//                       Key Achievements
//                     </h4>
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
//                       {selectedStudent.achievements.map((achievement, idx) => (
//                         <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
//                           <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-600 flex-shrink-0" />
//                           <span>{achievement}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div> */}

//                   {/* Skills */}
//                   <div className="space-y-3">
//                     <h4 className="font-semibold text-white text-sm sm:text-base">Key Skills</h4>
//                     <div className="flex flex-wrap gap-1 sm:gap-2">
//                       {selectedStudent.skills.map((skill, idx) => (
//                         <Badge
//                           key={idx}
//                           className="bg-emerald-100 text-emerald-700 border border-emerald-200 text-xs sm:text-sm"
//                         >
//                           {skill}
//                         </Badge>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Reviews about Counseling */}
//                   <div className="space-y-4">
//                     <h4 className="font-semibold text-white flex items-center gap-2 text-sm sm:text-base">
//                       <Star className="w-4 h-4 sm:w-4 sm:h-4 text-white" />
//                       Counseling Experience Reviews
//                     </h4>
//                     <div className="space-y-4">
//                       {selectedStudent.reviews.map((review) => (
//                         <div
//                           key={review.id}
//                           className="bg-slate-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-100"
//                         >
//                           <div className="flex flex-col sm:flex-row items-start justify-between mb-3 gap-2">
//                             <div>
//                               <p className="font-medium text-slate-900 text-sm sm:text-base">{review.aspect}</p>
//                               <p className="text-xs sm:text-sm text-slate-500">
//                                 {new Date(review.date).toLocaleDateString()}
//                               </p>
//                             </div>
//                             <div className="flex items-center gap-1">
//                               {[...Array(5)].map((_, i) => (
//                                 <Star
//                                   key={i}
//                                   className={`w-3 h-3 sm:w-4 sm:h-4 ${
//                                     i < review.rating ? "fill-amber-400 text-amber-400" : "text-slate-300"
//                                   }`}
//                                 />
//                               ))}
//                             </div>
//                           </div>
//                           <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">{review.comment}</p>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Contact & Mentorship */}
//                   {/* <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6 border-t border-slate-100">
//                     <Button className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:shadow-lg transition-all duration-300 rounded-xl text-sm sm:text-base py-2 sm:py-3">
//                       <MessageCircle className="w-4 h-4 mr-2" />
//                       Connect for Mentorship
//                     </Button>
//                     <Button
//                       variant="outline"
//                       className="flex-1 border-emerald-200 text-emerald-700 hover:bg-emerald-50 rounded-xl bg-transparent text-sm sm:text-base py-2 sm:py-3"
//                     >
//                       <Mail className="w-4 h-4 mr-2" />
//                       Send Message
//                     </Button>
//                   </div> */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import {
  X,
  Star,
  Mail,
  GraduationCap,
  Heart,
  MessageCircle,
  Award,
  CheckCircle,
  Building,
  TrendingUp,
  Target,
  Briefcase,
  Calendar,
  MapPin,
  ArrowRight,
} from "lucide-react"

const successfulStudents = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=600&h=600&fit=crop&crop=face",
    currentYear: "Senior",
    major: "Computer Science",
    university: "Stanford University",
    status: "Secured Full-Time Offer",
    upcomingRole: "Software Engineer",
    company: "Google",
    startDate: "July 2024",
    counselingPeriod: "2022-2023",
    expectedSalary: "$145,000",
    location: "Palo Alto, CA",
    email: "sarah.j@stanford.edu",
    phone: "+1 (555) 123-4567",
    bio: "As a junior, I was struggling with career direction and imposter syndrome in tech. The counseling group helped me build confidence, secure amazing internships, and ultimately land my dream job at Google before graduation.",
    internships: ["Microsoft Summer 2023", "Meta Summer 2022", "Startup Intern 2021"],
    currentGPA: "3.8",
    achievements: [
      "Google Full-Time Offer (Senior Year)",
      "Dean's List - 6 semesters",
      "Hackathon Winner 2023",
      "CS Teaching Assistant",
      "Published Research Paper",
    ],
    counselingImpact:
      "The counseling team helped me overcome imposter syndrome and guided me through the competitive tech recruiting process. Their mock interviews and career strategy sessions were game-changers.",
    rating: 5.0,
    reviews: [
      {
        id: 1,
        aspect: "Career Strategy",
        rating: 5,
        comment: "Helped me create a strategic plan for tech recruiting and build confidence for technical interviews.",
        date: "2024-01-15",
      },
      // {
      //   id: 2,
      //   aspect: "Interview Prep",
      //   rating: 5,
      //   comment: "Mock interviews and coding practice sessions were incredibly valuable for landing my Google offer.",
      //   date: "2024-01-10",
      // },
    ],
    skills: ["Python", "JavaScript", "React", "System Design", "Machine Learning"],
    mentorshipOffered: true,
    currentProjects: ["Senior Capstone: AI-Powered Study Assistant", "Google Pre-Start Project"],
  },
  {
    id: 2,
    name: "Marcus Williams",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face",
    currentYear: "Senior",
    major: "Finance",
    university: "Wharton School, UPenn",
    status: "Investment Banking Analyst Offer",
    upcomingRole: "Investment Banking Analyst",
    company: "Goldman Sachs",
    startDate: "August 2024",
    counselingPeriod: "2021-2022",
    expectedSalary: "$175,000",
    location: "New York, NY",
    email: "marcus.w@wharton.upenn.edu",
    phone: "+1 (555) 234-5678",
    bio: "Coming from a non-business background, I was intimidated by finance recruiting. The counseling team demystified the industry, helped me network effectively, and prepared me for the rigorous interview process.",
    internships: ["Goldman Sachs Summer Analyst 2023", "JP Morgan Spring Week 2022"],
    currentGPA: "3.9",
    achievements: [
      "Goldman Sachs Full-Time Offer",
      "Summa Cum Laude Track",
      "Finance Club President",
      "CFA Level 1 Candidate",
      "Dean's List All Semesters",
    ],
    counselingImpact:
      "The counseling program connected me with finance alumni, taught me industry-specific networking, and provided intensive interview preparation that was crucial for breaking into investment banking.",
    rating: 4.9,
    reviews: [
      {
        id: 1,
        aspect: "Industry Networking",
        rating: 5,
        comment: "Connected me with amazing alumni in finance and taught me how to network effectively.",
        date: "2024-02-01",
      },
    ],
    skills: ["Financial Modeling", "Valuation", "Excel", "PowerPoint", "Bloomberg Terminal"],
    mentorshipOffered: true,
    currentProjects: ["Senior Finance Thesis", "Goldman Sachs Pre-Analyst Training"],
  },
  {
    id: 3,
    name: "Aisha Patel",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=600&fit=crop&crop=face",
    currentYear: "Senior",
    major: "Pre-Med Biology",
    university: "Harvard University",
    status: "Medical School Acceptance",
    upcomingRole: "Medical Student",
    company: "Johns Hopkins School of Medicine",
    startDate: "August 2024",
    counselingPeriod: "2020-2021",
    expectedSalary: "Medical Student",
    location: "Baltimore, MD",
    email: "aisha.p@harvard.edu",
    phone: "+1 (555) 345-6789",
    bio: "The pre-med track felt overwhelming and I almost switched majors sophomore year. The counseling group helped me create a strategic plan, manage stress, and ultimately get accepted to my top choice medical school.",
    internships: ["Harvard Medical Research 2023", "Mass General Hospital Volunteer", "NIH Summer Research 2022"],
    currentGPA: "3.95",
    achievements: [
      "Johns Hopkins Medical School Acceptance",
      "MCAT Score: 520 (98th percentile)",
      "Phi Beta Kappa",
      "Research Publication (First Author)",
      "Medical Volunteer of the Year",
    ],
    counselingImpact:
      "The counseling team helped me stay focused during the challenging pre-med journey, provided study strategies, and guided me through the complex medical school application process.",
    rating: 5.0,
    reviews: [
      {
        id: 1,
        aspect: "Academic Planning",
        rating: 5,
        comment: "Helped me plan the perfect pre-med curriculum and research timeline for medical school applications.",
        date: "2024-01-20",
      },
    ],
    skills: ["Clinical Research", "Laboratory Techniques", "Medical Writing", "Patient Care", "MCAT Prep"],
    mentorshipOffered: true,
    currentProjects: ["Senior Honors Thesis in Neuroscience", "Medical School Preparation"],
  },
  {
    id: 4,
    name: "David Kim",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop&crop=face",
    currentYear: "Junior",
    major: "Business Administration",
    university: "UC Berkeley Haas",
    status: "Product Management Intern",
    upcomingRole: "Product Management Intern",
    company: "Meta",
    startDate: "June 2024",
    counselingPeriod: "2023-2024",
    expectedSalary: "$8,500/month",
    location: "Menlo Park, CA",
    email: "david.k@berkeley.edu",
    phone: "+1 (555) 456-7890",
    bio: "I was undecided between multiple career paths and didn't know product management existed. The counseling group introduced me to PM through alumni connections and helped me secure a competitive internship at Meta.",
    internships: ["Meta PM Intern Summer 2024", "Startup Product Intern 2023"],
    currentGPA: "3.7",
    achievements: [
      "Meta Product Management Internship",
      "Product Management Certificate",
      "Haas Business Case Competition Winner",
      "Entrepreneurship Club VP",
    ],
    counselingImpact:
      "The counseling team opened my eyes to product management as a career path and provided the guidance and connections I needed to break into this competitive field as a junior.",
    rating: 4.8,
    reviews: [
      {
        id: 1,
        aspect: "Career Discovery",
        rating: 5,
        comment: "Introduced me to product management and helped me understand if it was the right fit for me.",
        date: "2024-01-25",
      },
    ],
    skills: ["Product Strategy", "Data Analysis", "User Research", "Figma", "SQL"],
    mentorshipOffered: true,
    currentProjects: ["Junior Year Product Case Study", "Meta Internship Preparation"],
  },
  {
    id: 5,
    name: "Elena Rodriguez",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=600&fit=crop&crop=face",
    currentYear: "Senior",
    major: "Economics",
    university: "MIT",
    status: "Consulting Offer Secured",
    upcomingRole: "Business Analyst",
    company: "McKinsey & Company",
    startDate: "September 2024",
    counselingPeriod: "2022-2023",
    expectedSalary: "$190,000",
    location: "Boston, MA",
    email: "elena.r@mit.edu",
    phone: "+1 (555) 567-8901",
    bio: "As a first-generation college student, I had never heard of management consulting. The counseling group introduced me to this field, helped me develop case interview skills, and connected me with consulting alumni.",
    internships: ["McKinsey Summer Intern 2023", "Bain & Company Extern 2022"],
    currentGPA: "3.85",
    achievements: [
      "McKinsey Full-Time Offer",
      "MIT Economics Honors",
      "Consulting Case Competition Winner",
      "First-Gen Student Leadership Award",
    ],
    counselingImpact:
      "As a first-generation student, the counseling team was instrumental in helping me understand high-level career opportunities and providing the resources and connections to succeed in consulting recruiting.",
    rating: 5.0,
    reviews: [
      {
        id: 1,
        aspect: "First-Gen Support",
        rating: 5,
        comment: "Incredible support for first-generation students navigating competitive career paths and recruiting.",
        date: "2024-02-10",
      },
    ],
    skills: ["Case Interview", "Strategic Analysis", "Data Analysis", "Presentation", "Problem Solving"],
    mentorshipOffered: true,
    currentProjects: ["Senior Economics Thesis", "McKinsey Pre-Start Preparation"],
  },
  {
    id: 6,
    name: "James Thompson",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=600&fit=crop&crop=face",
    currentYear: "Junior",
    major: "Statistics & Data Science",
    university: "Carnegie Mellon",
    status: "Data Science Intern",
    upcomingRole: "Data Science Intern",
    company: "Netflix",
    startDate: "May 2024",
    counselingPeriod: "2023-2024",
    expectedSalary: "$9,000/month",
    location: "Los Gatos, CA",
    email: "james.t@cmu.edu",
    phone: "+1 (555) 678-9012",
    bio: "I loved working with data but wasn't sure how to turn it into a career. The counseling group helped me understand the data science landscape, build a strong portfolio, and prepare for technical interviews.",
    internships: ["Netflix Data Science Intern Summer 2024", "Local Startup Data Analyst 2023"],
    currentGPA: "3.8",
    achievements: [
      "Netflix Data Science Internship",
      "Kaggle Competition Silver Medal",
      "Data Science Research Project",
      "Statistics Department TA",
    ],
    counselingImpact:
      "The counseling team helped me understand different data science career paths and provided guidance on building a competitive technical portfolio for top tech companies.",
    rating: 4.9,
    reviews: [
      {
        id: 1,
        aspect: "Technical Career Prep",
        rating: 5,
        comment:
          "Great guidance on building technical skills and preparing for data science interviews at top companies.",
        date: "2024-02-05",
      },
    ],
    skills: ["Python", "R", "Machine Learning", "SQL", "Tableau", "Statistics"],
    mentorshipOffered: true,
    currentProjects: ["Junior Data Science Capstone", "Netflix Internship Prep"],
  },
  // ... (other student data remains the same)
];

export default function SuccessStories() {
  const [selectedStudent, setSelectedStudent] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")

  const statuses = ["all", "secured offer", "internship", "medical school", "graduate school"]

  const filteredStudents = successfulStudents.filter((student) => {
    const matchesSearch =
      searchTerm === "" ||
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.upcomingRole.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.university.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus =
      filterStatus === "all" ||
      student.status.toLowerCase().includes(filterStatus.toLowerCase()) ||
      student.upcomingRole.toLowerCase().includes(filterStatus.toLowerCase())

    return matchesSearch && matchesStatus
  })

  const openModal = (student) => {
    setSelectedStudent(student)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setSelectedStudent(null)
    document.body.style.overflow = "unset"
  }

  return (
    <div className="min-h-screen pt-8 sm:pt-10">
      {/* Header Section */}
      <section className="relative py-8 md:py-12 lg:py-16">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#d62332]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#b51d2a]/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#d62332]/5 to-[#b51d2a]/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <Badge className="bg-gradient-to-r from-[#d62332]/10 to-[#b51d2a]/10 text-[#d62332] border border-[#d62332]/50 rounded-full px-4 py-1 sm:px-6 sm:py-2 text-sm sm:text-base font-medium">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Current Student Success Stories
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="block text-slate-900">Students</span>
                <span className="block bg-gradient-to-r from-[#d62332] via-[#b51d2a] to-[#a51a26] bg-clip-text text-transparent">
                  Achieving Dreams
                </span>
              </h1>

              <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-600 leading-relaxed">
                Meet current students who transformed their career prospects through our counseling program.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 max-w-md mx-auto sm:grid-cols-4 sm:gap-6 sm:max-w-4xl">
              {[
                { value: `${successfulStudents.length}+`, label: "Success Stories" },
                { value: "98%", label: "Offer Success Rate" },
                { value: "$165K", label: "Average Salary" },
                { value: "100%", label: "Satisfaction" },
              ].map((stat, index) => (
                <div key={index} className="group">
                  <div className="bg-white/70 backdrop-blur-sm p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#d62332] mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm md:text-base text-slate-600 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="sticky top-0 z-20 backdrop-blur-xl border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col lg:justify-center lg:flex-row gap-4 sm:gap-6 items-center">
            <div className="relative flex-1 max-w-md w-full">
              <input
                type="text"
                placeholder="Search students..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-4 pr-4 py-2 sm:py-3 bg-slate-50/50 border border-slate-200 rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#d62332]/20 focus:border-[#d62332]/50 transition-all duration-300 text-sm sm:text-base"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredStudents.length === 0 ? (
            <div className="text-center py-12 sm:py-20">
              <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center">
                <Award className="w-12 h-12 sm:w-16 sm:h-16 text-slate-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-700 mb-2 sm:mb-4">No success stories found</h3>
              <p className="text-slate-500 text-sm sm:text-base">Try adjusting your search criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredStudents.map((student, index) => (
                <div
                  key={student.id}
                  className="group"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Clipped Card Design */}
                  <div
                    className="relative bg-gray-100 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden border border-slate-100"
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
                    }}
                  >
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#d62332]/10 via-white to-[#b51d2a]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative p-4 sm:p-6 space-y-3 sm:space-y-4">
                      {/* Image Section */}
                      <div className="w-full h-40 sm:h-48 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg group-hover:shadow-md transition-shadow duration-500">
                        <img
                          src={student.avatar || "/placeholder.svg"}
                          alt={student.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Student Info */}
                      <div className="space-y-2 sm:space-y-3">
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#d62332] transition-colors duration-300">
                            {student.name}
                          </h3>
                          <p className="text-slate-600 text-xs sm:text-sm font-medium">
                            {student.currentYear} • {student.major}
                          </p>
                          <p className="text-slate-500 text-xs sm:text-sm">{student.university}</p>
                        </div>

                        {/* Key Stats */}
                        <div className="flex items-center justify-between py-2 border-t border-slate-100">
                          <div className="flex items-center gap-1 text-xs sm:text-sm text-slate-500">
                            <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>GPA: {student.currentGPA}</span>
                          </div>
                          <div className="flex items-center gap-1 text-xs sm:text-sm text-slate-500">
                            <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                            <span>{student.rating}</span>
                          </div>
                        </div>

                        {/* Skills Preview */}
                        <div className="space-y-2">
                          <div className="flex flex-wrap gap-1">
                            {student.skills.slice(0, 2).map((skill, idx) => (
                              <Badge
                                key={idx}
                                className="bg-[#d62332]/10 text-[#d62332] border border-[#d62332]/20 text-xs px-2 py-0.5"
                              >
                                {skill}
                              </Badge>
                            ))}
                            {student.skills.length > 2 && (
                              <Badge className="bg-slate-100 text-slate-600 border-0 text-xs px-2 py-0.5">
                                +{student.skills.length - 2}
                              </Badge>
                            )}
                          </div>
                        </div>

                        {/* Arrow Button */}
                        <div className="transition-opacity duration-300 pt-2 flex justify-end">
                          <Button
                            onClick={() => openModal(student)}
                            className="w-10 h-10 sm:w-12 sm:h-12 cursor-pointer bg-gradient-to-r from-[#d62332] to-[#b51d2a] text-white hover:shadow-lg transition-all duration-300 rounded-full text-sm z-10 relative pointer-events-auto"
                          >
                            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 transform -rotate-[40deg] transition-transform duration-300 group-hover:rotate-[0deg]" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Responsive Modal */}
      {selectedStudent && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4">
          <div className="relative w-full max-w-6xl h-[90vh] max-h-[90vh] bg-white rounded-xl sm:rounded-3xl shadow-2xl overflow-hidden mx-2">
            {/* Close Button */}
            <Button
              onClick={closeModal}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full p-0 bg-slate-100 hover:bg-slate-200 text-slate-600 border border-slate-200"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>

            <div className="overflow-y-auto h-full">
              {/* Header Section */}
              <div className="relative bg-gradient-to-br from-[#d62332] to-[#b51d2a] p-4 sm:p-6 lg:p-8 text-white">
                <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-lg sm:rounded-xl overflow-hidden shadow-xl border-2 sm:border-4 border-white/20 mx-auto sm:mx-0">
                    <img
                      src={selectedStudent.avatar || "/placeholder.svg"}
                      alt={selectedStudent.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 space-y-2 sm:space-y-3 text-center sm:text-left">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
                      <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold">{selectedStudent.name}</h2>
                    </div>

                    <p className="text-white/90 text-sm sm:text-base lg:text-lg">
                      {selectedStudent.currentYear} • {selectedStudent.major}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 pt-2">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="text-sm sm:text-base lg:text-lg font-bold">{selectedStudent.university}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 pt-2">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="text-sm sm:text-base lg:text-lg font-bold">
                          GPA: {selectedStudent.currentGPA}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-300 text-amber-300" />
                        <span className="text-sm sm:text-base lg:text-lg font-bold">{selectedStudent.rating}</span>
                        <span className="text-white/80 text-xs sm:text-sm">Rating</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6 lg:space-y-8">
                  {/* Success Story */}
                  <div className="space-y-2 sm:space-y-3">
                    <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                      <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      Success Story
                    </h3>
                    <p className="text-white leading-relaxed text-sm sm:text-base">{selectedStudent.bio}</p>
                  </div>

                  {/* Counseling Impact */}
                  <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 border border-[#d62332]/20">
                    <h4 className="font-semibold text-[#d62332] mb-2 flex items-center gap-2 text-sm sm:text-base">
                      <Target className="w-4 h-4 sm:w-5 sm:h-5 text-[#d62332]" />
                      How Our Counseling Helped
                    </h4>
                    <p className="text-[#d62332] leading-relaxed text-sm sm:text-base">
                      {selectedStudent.counselingImpact}
                    </p>
                    <div className="mt-2 text-xs sm:text-sm text-[#d62332]/80">
                      <strong>Counseling Period:</strong> {selectedStudent.counselingPeriod}
                    </div>
                  </div>

                  {/* Current Projects & Internships */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                    <div className="space-y-2 sm:space-y-3">
                      <h4 className="font-semibold text-white flex items-center gap-2 text-sm sm:text-base">
                        <Award className="w-4 h-4 sm:w-4 sm:h-4 text-white" />
                        Milestones & Experience
                      </h4>
                      <div className="space-y-2">
                        {selectedStudent.internships.map((internship, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-white">
                            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white flex-shrink-0" />
                            <span>{internship}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2 sm:space-y-3">
                      <h4 className="font-semibold text-white text-sm sm:text-base">Current Projects</h4>
                      <div className="space-y-2">
                        {selectedStudent.currentProjects.map((project, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-white">
                            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white flex-shrink-0" />
                            <span>{project}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="space-y-2 sm:space-y-3">
                    <h4 className="font-semibold text-white text-sm sm:text-base">Key Skills</h4>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {selectedStudent.skills.map((skill, idx) => (
                        <Badge
                          key={idx}
                          className="bg-white text-[#d62332] border border-[#d62332]/20 text-xs sm:text-sm px-2 py-0.5"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Reviews about Counseling */}
                  <div className="space-y-3 sm:space-y-4">
                    <h4 className="font-semibold text-white flex items-center gap-2 text-sm sm:text-base">
                      <Star className="w-4 h-4 sm:w-4 sm:h-4 text-white" />
                      Counseling Experience Reviews
                    </h4>
                    <div className="space-y-3 sm:space-y-4">
                      {selectedStudent.reviews.map((review) => (
                        <div
                          key={review.id}
                          className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 border border-slate-100"
                        >
                          <div className="flex flex-col sm:flex-row items-start justify-between mb-2 gap-2">
                            <div>
                              <p className="font-medium text-slate-900 text-sm sm:text-base">{review.aspect}</p>
                              <p className="text-xs sm:text-sm text-slate-500">
                                {new Date(review.date).toLocaleDateString()}
                              </p>
                            </div>
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-3 h-3 sm:w-4 sm:h-4 ${
                                    i < review.rating ? "fill-amber-400 text-amber-400" : "text-slate-300"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}