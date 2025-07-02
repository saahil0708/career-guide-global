// "use client"

// import { useState } from "react"
// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import {
//   ChevronDown,
//   ChevronUp,
//   HelpCircle,
//   MessageCircle,
//   Clock,
//   DollarSign,
//   Users,
//   Calendar,
//   Shield,
//   Phone,
//   Mail,
//   CheckCircle,
// } from "lucide-react"

// const FAQ = () => {
//   const [openItems, setOpenItems] = useState(new Set([0])) // First item open by default
//   const [selectedCategory, setSelectedCategory] = useState("All")

//   const faqCategories = [
//     { id: "All", label: "All Questions", icon: <HelpCircle className="w-4 h-4" /> },
//     { id: "Services", label: "Our Services", icon: <Users className="w-4 h-4" /> },
//     { id: "Process", label: "Counseling Process", icon: <MessageCircle className="w-4 h-4" /> },
//     { id: "Pricing", label: "Pricing & Payment", icon: <DollarSign className="w-4 h-4" /> },
//     { id: "Scheduling", label: "Scheduling", icon: <Calendar className="w-4 h-4" /> },
//   ]

//   const faqs = [
//     {
//       id: 1,
//       category: "Services",
//       question: "What types of career counseling services do you offer?",
//       answer:
//         "We offer four main types of career counseling services: Individual Career Counseling (one-on-one personalized sessions), Group Career Workshops (interactive peer learning), Student Career Guidance (specialized support for students and recent graduates), and Career Transition Support (comprehensive help for career changes and advancement). Each service is tailored to meet specific career development needs and goals.",
//       popular: true,
//     },
//     {
//       id: 2,
//       category: "Process",
//       question: "How does the career counseling process work?",
//       answer:
//         "Our career counseling process typically begins with an initial assessment session where we explore your background, interests, values, and career goals. Based on this assessment, we develop a personalized counseling plan that may include career exploration, goal setting, skill development planning, and action steps. Throughout the process, we provide ongoing support, resources, and accountability to help you achieve your career objectives.",
//       popular: true,
//     },
//     {
//       id: 3,
//       category: "Pricing",
//       question: "How much do your career counseling services cost?",
//       answer:
//         "Our pricing varies by service type. Individual counseling sessions are typically $150-200 per session, with package deals available for multiple sessions. Group workshops range from $75-125 per session. Student services are offered at discounted rates starting at $100 per session. We also offer a free initial consultation to discuss your needs and determine the best service approach for your situation.",
//       popular: false,
//     },
//     {
//       id: 4,
//       category: "Scheduling",
//       question: "How do I schedule a career counseling session?",
//       answer:
//         "You can schedule a session through our online booking system, by calling our office, or by filling out our contact form. We offer flexible scheduling including evenings and weekends to accommodate working professionals. For your first session, we recommend booking our free consultation to discuss your goals and determine the best counseling approach.",
//       popular: false,
//     },
//     {
//       id: 5,
//       category: "Process",
//       question: "How many sessions will I need?",
//       answer:
//         "The number of sessions varies depending on your individual needs and goals. Most clients benefit from 4-6 individual sessions for general career guidance, while career transitions may require 6-8 sessions. Students typically need 3-4 sessions for career exploration and planning. During your initial consultation, we'll discuss your specific situation and provide a recommended session plan.",
//       popular: true,
//     },
//     {
//       id: 6,
//       category: "Services",
//       question: "Do you offer virtual/online counseling sessions?",
//       answer:
//         "Yes, we offer both in-person and virtual counseling sessions via secure video conferencing platforms. Many clients prefer virtual sessions for convenience and flexibility. Our online sessions are just as effective as in-person meetings and include the same personalized attention, resources, and follow-up support.",
//       popular: false,
//     },
//     {
//       id: 7,
//       category: "Process",
//       question: "What should I expect in my first counseling session?",
//       answer:
//         "Your first session will focus on getting to know you and understanding your career situation. We'll discuss your background, current challenges, career interests, values, and goals. You'll complete some brief assessments to help identify your strengths and preferences. By the end of the session, you'll have a clear understanding of our counseling approach and next steps for your career development journey.",
//       popular: false,
//     },
//     {
//       id: 8,
//       category: "Services",
//       question: "Do you help with resume writing and interview preparation?",
//       answer:
//         "Resume optimization and interview coaching are integral parts of our career counseling services. We help you create compelling, ATS-friendly resumes that highlight your strengths and achievements. Our interview coaching includes mock interviews, question preparation, body language coaching, and confidence building techniques to help you succeed in your job search.",
//       popular: true,
//     },
//     {
//       id: 9,
//       category: "Pricing",
//       question: "Do you offer payment plans or accept insurance?",
//       answer:
//         "We offer flexible payment options including payment plans for multi-session packages. While career counseling is typically not covered by health insurance, we do accept HSA/FSA payments in some cases. We also offer sliding scale fees for students and individuals facing financial hardship. Please discuss payment options during your consultation.",
//       popular: false,
//     },
//     {
//       id: 10,
//       category: "Process",
//       question: "How do you measure success in career counseling?",
//       answer:
//         "We measure success through various outcomes including career goal achievement, job placement rates, salary improvements, career satisfaction scores, and client feedback. We track progress throughout the counseling process and conduct follow-up surveys to ensure long-term success. Our current success rate shows 92% of clients achieve their primary career goals within 6 months of completing counseling.",
//       popular: false,
//     },
//     {
//       id: 11,
//       category: "Scheduling",
//       question: "What is your cancellation policy?",
//       answer:
//         "We require 24-hour notice for session cancellations or rescheduling. Cancellations made with less than 24-hour notice may be subject to a cancellation fee. We understand that emergencies happen and will work with you on a case-by-case basis. No-shows are charged the full session fee unless there are extenuating circumstances.",
//       popular: false,
//     },
//     {
//       id: 12,
//       category: "Services",
//       question: "Do you specialize in specific industries or career levels?",
//       answer:
//         "Our counselors have experience across multiple industries including technology, healthcare, finance, education, marketing, and more. We work with professionals at all career levels from recent graduates to senior executives. We also have specialized expertise in career transitions, entrepreneurship, and returning to work after career breaks.",
//       popular: false,
//     },
//   ]

//   const filteredFAQs = selectedCategory === "All" ? faqs : faqs.filter((faq) => faq.category === selectedCategory)

//   const popularFAQs = faqs.filter((faq) => faq.popular)

//   const toggleItem = (id) => {
//     const newOpenItems = new Set(openItems)
//     if (newOpenItems.has(id)) {
//       newOpenItems.delete(id)
//     } else {
//       newOpenItems.add(id)
//     }
//     setOpenItems(newOpenItems)
//   }

//   return (
//     <section className="py-20 relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-20 -right-20 w-80 h-80 bg-[#4fbe99]/5 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 -left-20 w-96 h-96 bg-[#3da582]/5 rounded-full blur-3xl"></div>
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <div className="flex justify-center mb-6">
//             <Badge className="bg-gradient-to-r from-[#4fbe99]/10 to-[#3da582]/10 text-[#4fbe99] border-[#4fbe99]/20 rounded-full px-6 py-3 text-sm font-medium">
//               <HelpCircle className="w-4 h-4 mr-2" />
//               Frequently Asked Questions
//             </Badge>
//           </div>

//           <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
//             <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
//               Got Questions?
//             </span>
//             <br />
//             <span className="bg-gradient-to-r from-[#4fbe99] via-[#3da582] to-[#2d8a6b] bg-clip-text text-transparent">
//               We Have Answers
//             </span>
//           </h2>

//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             Find answers to common questions about our career counseling services, process, and what to expect when
//             working with our experienced counselors.
//           </p>
//         </div>

//         {/* Popular Questions Quick Access */}
//         <div className="mb-12">
//           <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Most Popular Questions</h3>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
//             {popularFAQs.map((faq) => (
//               <Card
//                 key={faq.id}
//                 className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl bg-white/80 backdrop-blur-sm hover:scale-105"
//                 onClick={() => {
//                   setSelectedCategory("All")
//                   toggleItem(faq.id)
//                   // Scroll to the FAQ item
//                   setTimeout(() => {
//                     document.getElementById(`faq-${faq.id}`)?.scrollIntoView({
//                       behavior: "smooth",
//                       block: "center",
//                     })
//                   }, 100)
//                 }}
//               >
//                 <CardContent className="p-6">
//                   <div className="flex items-start space-x-3">
//                     <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#4fbe99]/10 to-[#3da582]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
//                       <HelpCircle className="w-4 h-4 text-[#4fbe99]" />
//                     </div>
//                     <div>
//                       <p className="text-sm font-semibold text-gray-900 leading-tight group-hover:text-[#4fbe99] transition-colors duration-300">
//                         {faq.question}
//                       </p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>

//         {/* Category Filter */}
//         <div className="flex flex-wrap justify-center gap-3 mb-12">
//           {faqCategories.map((category) => (
//             <Button
//               key={category.id}
//               variant={selectedCategory === category.id ? "default" : "outline"}
//               onClick={() => setSelectedCategory(category.id)}
//               className={`rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${
//                 selectedCategory === category.id
//                   ? "bg-gradient-to-r from-[#4fbe99] to-[#3da582] text-white shadow-lg"
//                   : "border-[#4fbe99]/30 text-[#4fbe99] hover:bg-[#4fbe99]/5"
//               }`}
//             >
//               {category.icon}
//               <span className="ml-2">{category.label}</span>
//             </Button>
//           ))}
//         </div>

//         {/* FAQ Accordion */}
//         <div className="max-w-4xl mx-auto mb-16">
//           <div className="space-y-4">
//             {filteredFAQs.map((faq) => (
//               <Card
//                 key={faq.id}
//                 id={`faq-${faq.id}`}
//                 className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl bg-white/90 backdrop-blur-sm overflow-hidden"
//               >
//                 <CardContent className="p-0">
//                   <button
//                     onClick={() => toggleItem(faq.id)}
//                     className="w-full p-6 text-left hover:bg-[#4fbe99]/5 transition-colors duration-300 focus:outline-none focus:bg-[#4fbe99]/5"
//                   >
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-start space-x-4 flex-1">
//                         <div className="flex items-center space-x-2">
//                           {faq.popular && (
//                             <Badge className="bg-gradient-to-r from-[#4fbe99] to-[#3da582] text-white text-xs px-2 py-1">
//                               Popular
//                             </Badge>
//                           )}
//                           <Badge variant="outline" className="text-xs border-[#4fbe99]/30 text-[#4fbe99]">
//                             {faq.category}
//                           </Badge>
//                         </div>
//                       </div>
//                       <div className="ml-4">
//                         {openItems.has(faq.id) ? (
//                           <ChevronUp className="w-5 h-5 text-[#4fbe99]" />
//                         ) : (
//                           <ChevronDown className="w-5 h-5 text-gray-400" />
//                         )}
//                       </div>
//                     </div>
//                     <h3 className="text-lg font-semibold text-gray-900 mt-3 pr-8 leading-tight">{faq.question}</h3>
//                   </button>

//                   {openItems.has(faq.id) && (
//                     <div className="px-6 pb-6 border-t border-gray-100">
//                       <div className="pt-4">
//                         <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
//                       </div>
//                     </div>
//                   )}
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>

//         {/* Still Have Questions Section */}
//         <div className="bg-gradient-to-r from-[#4fbe99] to-[#3da582] rounded-3xl p-12 shadow-2xl">
//           <div className="text-center">
//             <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
//               <MessageCircle className="w-8 h-8 text-white" />
//             </div>

//             <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">Still Have Questions?</h3>

//             <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
//               Can't find the answer you're looking for? Our friendly team is here to help you get started on your career
//               journey.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//               <Button
//                 size="lg"
//                 className="rounded-2xl bg-white text-[#4fbe99] hover:bg-gray-50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 px-8 py-6 text-lg font-semibold"
//               >
//                 <Calendar className="w-5 h-5 mr-3" />
//                 Schedule Free Consultation
//               </Button>

//               <div className="flex items-center space-x-4">
//                 <Button
//                   variant="outline"
//                   size="lg"
//                   className="rounded-2xl border-2 border-white/40 text-white hover:bg-white/15 hover:border-white/60 backdrop-blur-sm transition-all duration-300 px-6 py-6 text-lg font-semibold bg-white/5"
//                 >
//                   <Phone className="w-5 h-5 mr-2" />
//                   Call Us
//                 </Button>

//                 <Button
//                   variant="outline"
//                   size="lg"
//                   className="rounded-2xl border-2 border-white/40 text-white hover:bg-white/15 hover:border-white/60 backdrop-blur-sm transition-all duration-300 px-6 py-6 text-lg font-semibold bg-white/5"
//                 >
//                   <Mail className="w-5 h-5 mr-2" />
//                   Email Us
//                 </Button>
//               </div>
//             </div>

//             {/* Contact Info */}
//             <div className="mt-8 pt-8 border-t border-white/20">
//               <div className="grid md:grid-cols-3 gap-6 text-center">
//                 <div className="flex items-center justify-center space-x-2 text-white/90">
//                   <Phone className="w-4 h-4" />
//                   <span className="text-sm font-medium">(555) 123-4567</span>
//                 </div>
//                 <div className="flex items-center justify-center space-x-2 text-white/90">
//                   <Mail className="w-4 h-4" />
//                   <span className="text-sm font-medium">info@careerguide.com</span>
//                 </div>
//                 <div className="flex items-center justify-center space-x-2 text-white/90">
//                   <Clock className="w-4 h-4" />
//                   <span className="text-sm font-medium">Mon-Fri 9AM-6PM</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Quick Stats */}
//         {/* <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
//           {[
//             { icon: <CheckCircle className="w-6 h-6" />, number: "500+", label: "Questions Answered" },
//             { icon: <Clock className="w-6 h-6" />, number: "< 24h", label: "Response Time" },
//             { icon: <Shield className="w-6 h-6" />, number: "100%", label: "Confidential" },
//             { icon: <Users className="w-6 h-6" />, number: "15+", label: "Expert Counselors" },
//           ].map((stat, index) => (
//             <Card key={index} className="border-0 shadow-lg rounded-2xl bg-white/80 backdrop-blur-sm">
//               <CardContent className="p-6 text-center">
//                 <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r from-[#4fbe99]/10 to-[#3da582]/10 flex items-center justify-center">
//                   <div className="text-[#4fbe99]">{stat.icon}</div>
//                 </div>
//                 <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
//                 <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
//               </CardContent>
//             </Card>
//           ))}
//         </div> */}
//       </div>
//     </section>
//   )
// }

// export default FAQ

"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ChevronDown,
  ChevronUp,
  HelpCircle,
  MessageCircle,
  Clock,
  DollarSign,
  Users,
  Calendar,
  Shield,
  Phone,
  Mail,
  CheckCircle,
} from "lucide-react"

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set([0])) // First item open by default
  const [selectedCategory, setSelectedCategory] = useState("All")

  const faqCategories = [
    { id: "All", label: "All Questions", icon: <HelpCircle className="w-4 h-4" /> },
    { id: "Services", label: "Our Services", icon: <Users className="w-4 h-4" /> },
    { id: "Process", label: "Counseling Process", icon: <MessageCircle className="w-4 h-4" /> },
    { id: "Pricing", label: "Pricing & Payment", icon: <DollarSign className="w-4 h-4" /> },
    { id: "Scheduling", label: "Scheduling", icon: <Calendar className="w-4 h-4" /> },
  ]

  const faqs = [
    {
      id: 1,
      category: "Services",
      question: "What types of career counseling services do you offer?",
      answer:
        "We offer four main types of career counseling services: Individual Career Counseling (one-on-one personalized sessions), Group Career Workshops (interactive peer learning), Student Career Guidance (specialized support for students and recent graduates), and Career Transition Support (comprehensive help for career changes and advancement). Each service is tailored to meet specific career development needs and goals.",
      popular: true,
    },
    {
      id: 2,
      category: "Process",
      question: "How does the career counseling process work?",
      answer:
        "Our career counseling process typically begins with an initial assessment session where we explore your background, interests, values, and career goals. Based on this assessment, we develop a personalized counseling plan that may include career exploration, goal setting, skill development planning, and action steps. Throughout the process, we provide ongoing support, resources, and accountability to help you achieve your career objectives.",
      popular: true,
    },
    {
      id: 3,
      category: "Pricing",
      question: "How much do your career counseling services cost?",
      answer:
        "Our pricing varies by service type. Individual counseling sessions are typically $150-200 per session, with package deals available for multiple sessions. Group workshops range from $75-125 per session. Student services are offered at discounted rates starting at $100 per session. We also offer a free initial consultation to discuss your needs and determine the best service approach for your situation.",
      popular: false,
    },
    {
      id: 4,
      category: "Scheduling",
      question: "How do I schedule a career counseling session?",
      answer:
        "You can schedule a session through our online booking system, by calling our office, or by filling out our contact form. We offer flexible scheduling including evenings and weekends to accommodate working professionals. For your first session, we recommend booking our free consultation to discuss your goals and determine the best counseling approach.",
      popular: false,
    },
    {
      id: 5,
      category: "Process",
      question: "How many sessions will I need?",
      answer:
        "The number of sessions varies depending on your individual needs and goals. Most clients benefit from 4-6 individual sessions for general career guidance, while career transitions may require 6-8 sessions. Students typically need 3-4 sessions for career exploration and planning. During your initial consultation, we'll discuss your specific situation and provide a recommended session plan.",
      popular: true,
    },
    {
      id: 6,
      category: "Services",
      question: "Do you offer virtual/online counseling sessions?",
      answer:
        "Yes, we offer both in-person and virtual counseling sessions via secure video conferencing platforms. Many clients prefer virtual sessions for convenience and flexibility. Our online sessions are just as effective as in-person meetings and include the same personalized attention, resources, and follow-up support.",
      popular: false,
    },
    {
      id: 7,
      category: "Process",
      question: "What should I expect in my first counseling session?",
      answer:
        "Your first session will focus on getting to know you and understanding your career situation. We'll discuss your background, current challenges, career interests, values, and goals. You'll complete some brief assessments to help identify your strengths and preferences. By the end of the session, you'll have a clear understanding of our counseling approach and next steps for your career development journey.",
      popular: false,
    },
    {
      id: 8,
      category: "Services",
      question: "Do you help with resume writing and interview preparation?",
      answer:
        "Resume optimization and interview coaching are integral parts of our career counseling services. We help you create compelling, ATS-friendly resumes that highlight your strengths and achievements. Our interview coaching includes mock interviews, question preparation, body language coaching, and confidence building techniques to help you succeed in your job search.",
      popular: true,
    },
    {
      id: 9,
      category: "Pricing",
      question: "Do you offer payment plans or accept insurance?",
      answer:
        "We offer flexible payment options including payment plans for multi-session packages. While career counseling is typically not covered by health insurance, we do accept HSA/FSA payments in some cases. We also offer sliding scale fees for students and individuals facing financial hardship. Please discuss payment options during your consultation.",
      popular: false,
    },
    {
      id: 10,
      category: "Process",
      question: "How do you measure success in career counseling?",
      answer:
        "We measure success through various outcomes including career goal achievement, job placement rates, salary improvements, career satisfaction scores, and client feedback. We track progress throughout the counseling process and conduct follow-up surveys to ensure long-term success. Our current success rate shows 92% of clients achieve their primary career goals within 6 months of completing counseling.",
      popular: false,
    },
    {
      id: 11,
      category: "Scheduling",
      question: "What is your cancellation policy?",
      answer:
        "We require 24-hour notice for session cancellations or rescheduling. Cancellations made with less than 24-hour notice may be subject to a cancellation fee. We understand that emergencies happen and will work with you on a case-by-case basis. No-shows are charged the full session fee unless there are extenuating circumstances.",
      popular: false,
    },
    {
      id: 12,
      category: "Services",
      question: "Do you specialize in specific industries or career levels?",
      answer:
        "Our counselors have experience across multiple industries including technology, healthcare, finance, education, marketing, and more. We work with professionals at all career levels from recent graduates to senior executives. We also have specialized expertise in career transitions, entrepreneurship, and returning to work after career breaks.",
      popular: false,
    },
  ]

  const filteredFAQs = selectedCategory === "All" ? faqs : faqs.filter((faq) => faq.category === selectedCategory)
  const popularFAQs = faqs.filter((faq) => faq.popular)

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id)
    } else {
      newOpenItems.add(id)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-80 h-80 bg-[#d62332]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -left-20 w-96 h-96 bg-[#b51d2a]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Badge className="bg-gradient-to-r from-[#d62332]/10 to-[#b51d2a]/10 text-[#d62332] border-[#d62332]/20 rounded-full px-6 py-3 text-sm font-medium">
              <HelpCircle className="w-4 h-4 mr-2" />
              Frequently Asked Questions
            </Badge>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Got Questions?
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#d62332] via-[#c51f2f] to-[#b51d2a] bg-clip-text text-transparent">
              We Have Answers
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our career counseling services, process, and what to expect when
            working with our experienced counselors.
          </p>
        </div>

        {/* Popular Questions Quick Access */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Most Popular Questions</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {popularFAQs.map((faq) => (
              <Card
                key={faq.id}
                className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl bg-white/80 backdrop-blur-sm hover:scale-105"
                onClick={() => {
                  setSelectedCategory("All")
                  toggleItem(faq.id)
                  setTimeout(() => {
                    document.getElementById(`faq-${faq.id}`)?.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    })
                  }, 100)
                }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#d62332]/10 to-[#b51d2a]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <HelpCircle className="w-4 h-4 text-[#d62332]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 leading-tight group-hover:text-[#d62332] transition-colors duration-300">
                        {faq.question}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {faqCategories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-[#d62332] to-[#b51d2a] text-white shadow-lg"
                  : "border-[#d62332]/30 text-[#d62332] hover:bg-[#d62332]/5"
              }`}
            >
              {category.icon}
              <span className="ml-2">{category.label}</span>
            </Button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-4">
            {filteredFAQs.map((faq) => (
              <Card
                key={faq.id}
                id={`faq-${faq.id}`}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl bg-white/90 backdrop-blur-sm overflow-hidden"
              >
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full p-6 text-left hover:bg-[#d62332]/5 transition-colors duration-300 focus:outline-none focus:bg-[#d62332]/5"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-start space-x-4 flex-1">
                        <div className="flex items-center space-x-2">
                          {faq.popular && (
                            <Badge className="bg-gradient-to-r from-[#d62332] to-[#b51d2a] text-white text-xs px-2 py-1">
                              Popular
                            </Badge>
                          )}
                          <Badge variant="outline" className="text-xs border-[#d62332]/30 text-[#d62332]">
                            {faq.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="ml-4">
                        {openItems.has(faq.id) ? (
                          <ChevronUp className="w-5 h-5 text-[#d62332]" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mt-3 pr-8 leading-tight">{faq.question}</h3>
                  </button>

                  {openItems.has(faq.id) && (
                    <div className="px-6 pb-6 border-t border-gray-100">
                      <div className="pt-4">
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Still Have Questions Section */}
        <div className="bg-gradient-to-r from-[#d62332] to-[#b51d2a] rounded-3xl p-12 shadow-2xl">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>

            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">Still Have Questions?</h3>

            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Can't find the answer you're looking for? Our friendly team is here to help you get started on your career
              journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="rounded-2xl bg-white text-[#d62332] hover:bg-gray-50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 px-8 py-6 text-lg font-semibold"
              >
                <Calendar className="w-5 h-5 mr-3" />
                Schedule Free Consultation
              </Button>

              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-2xl border-2 border-white/40 text-white hover:bg-white/15 hover:border-white/60 backdrop-blur-sm transition-all duration-300 px-6 py-6 text-lg font-semibold bg-white/5"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-2xl border-2 border-white/40 text-white hover:bg-white/15 hover:border-white/60 backdrop-blur-sm transition-all duration-300 px-6 py-6 text-lg font-semibold bg-white/5"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </Button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="flex items-center justify-center space-x-2 text-white/90">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium">(555) 123-4567</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-white/90">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm font-medium">info@careerguide.com</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-white/90">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">Mon-Fri 9AM-6PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ