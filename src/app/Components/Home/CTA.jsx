// "use client"

// import React, { useState, useEffect } from 'react';
// import { 
//   ArrowRight, 
//   Calendar,
//   Phone,
//   Mail,
//   CheckCircle,
//   Clock,
//   Users,
//   Award,
//   Sparkles,
//   Star
// } from 'lucide-react';

// const CareerCTASection = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 45, seconds: 12 });

//   useEffect(() => {
//     setIsVisible(true);
    
//     // Countdown timer effect
//     const timer = setInterval(() => {
//       setTimeLeft(prev => {
//         if (prev.seconds > 0) {
//           return { ...prev, seconds: prev.seconds - 1 };
//         } else if (prev.minutes > 0) {
//           return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
//         } else if (prev.hours > 0) {
//           return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
//         }
//         return { hours: 23, minutes: 59, seconds: 59 };
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const benefits = [
//     "Personalized Career Roadmap",
//     "Industry Expert Guidance", 
//     "Resume & LinkedIn Optimization",
//     "Interview Coaching Session"
//   ];

//   const guarantees = [
//     { icon: <Award className="w-5 h-5" />, text: "100% Satisfaction Guarantee" },
//     { icon: <Users className="w-5 h-5" />, text: "5,000+ Success Stories" },
//     { icon: <Clock className="w-5 h-5" />, text: "Results in 30 Days or Less" }
//   ];

//   return (
//     <div className="relative bg-gradient-to-br from-slate-50 via-white to-emerald-50 py-20 lg:py-32 overflow-hidden">
      
//       {/* Background Elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-emerald-400/15 to-teal-400/10 rounded-full blur-3xl animate-pulse" />
//         <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-blue-400/10 to-purple-400/5 rounded-full blur-3xl animate-pulse delay-1000" />
        
//         {/* Subtle pattern */}
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23059669%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />
//       </div>

//       <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Main CTA Container */}
//         <div className={`transform transition-all duration-1000 ${
//           isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
//         }`}>
          
//           {/* Header Section */}
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center space-x-2 bg-emerald-100 border border-emerald-200 rounded-full px-4 py-2 mb-6">
//               <Sparkles className="w-4 h-4 text-emerald-600" />
//               <span className="text-emerald-700 font-semibold text-sm">Limited Time Offer</span>
//             </div>
            
//             <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
//               Ready to Transform Your 
//               <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
//                 Professional Life?
//               </span>
//             </h2>
            
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               Join thousands who've already made the leap. Get your personalized career strategy 
//               session absolutely free – but only for the next 24 hours.
//             </p>
//           </div>

//           {/* Countdown Timer */}
//           <div className={`text-center mb-12 transform transition-all duration-1000 delay-200 ${
//             isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
//           }`}>
//             <div className="inline-flex items-center space-x-1 bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full font-bold shadow-lg">
//               <Clock className="w-5 h-5" />
//               <span>Offer expires in:</span>
//               <span className="ml-2 font-mono text-lg">
//                 {String(timeLeft.hours).padStart(2, '0')}:
//                 {String(timeLeft.minutes).padStart(2, '0')}:
//                 {String(timeLeft.seconds).padStart(2, '0')}
//               </span>
//             </div>
//           </div>

//           {/* Main CTA Card */}
//           <div className={`max-w-4xl mx-auto transform transition-all duration-1000 delay-300 ${
//             isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
//           }`}>
//             <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
              
//               {/* Gradient Border Effect */}
//               <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-blue-500/20 rounded-3xl blur-xl animate-pulse" />
              
//               <div className="relative p-8 lg:p-12">
//                 <div className="grid lg:grid-cols-2 gap-12 items-center">
                  
//                   {/* Left Side - Benefits */}
//                   <div className="space-y-8">
//                     <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
//                       What You'll Get in Your 
//                       <span className="text-emerald-600"> FREE Session:</span>
//                     </h3>
                    
//                     <div className="space-y-4">
//                       {benefits.map((benefit, index) => (
//                         <div 
//                           key={benefit}
//                           className={`flex items-center space-x-4 transform transition-all duration-500 delay-${400 + index * 100}`}
//                         >
//                           <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
//                             <CheckCircle className="w-5 h-5 text-emerald-600" />
//                           </div>
//                           <span className="text-gray-700 font-medium text-lg">{benefit}</span>
//                         </div>
//                       ))}
//                     </div>

//                     {/* Value Statement */}
//                     <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
//                       <div className="flex items-center space-x-3 mb-3">
//                         <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
//                           <span className="text-white font-bold text-sm">$</span>
//                         </div>
//                         <span className="text-emerald-800 font-semibold">Total Value: $500</span>
//                       </div>
//                       <p className="text-emerald-700 font-medium">
//                         Yours FREE today – No strings attached, no credit card required
//                       </p>
//                     </div>
//                   </div>

//                   {/* Right Side - CTA Form */}
//                   <div className="space-y-6">
//                     <div className="text-center mb-8">
//                       <h4 className="text-xl font-bold text-gray-900 mb-2">
//                         Book Your FREE Session Now
//                       </h4>
//                       <p className="text-gray-600">It takes just 2 minutes</p>
//                     </div>

//                     {/* CTA Buttons */}
//                     <div className="space-y-4">
//                       <button className="w-full group relative overflow-hidden bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-5 px-8 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105 transform">
//                         <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                         <div className="relative flex items-center justify-center space-x-3">
//                           <Calendar className="w-6 h-6" />
//                           <span>Schedule My FREE Session</span>
//                           <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" />
//                         </div>
//                       </button>

//                       <div className="text-center text-gray-500 text-sm font-medium">OR</div>

//                       <div className="grid grid-cols-2 gap-3">
//                         <button className="flex items-center justify-center space-x-2 py-4 px-4 border-2 border-emerald-200 hover:border-emerald-500 text-emerald-600 hover:text-emerald-700 rounded-xl font-semibold transition-all duration-300 hover:bg-emerald-50">
//                           <Phone className="w-5 h-5" />
//                           <span>Call Now</span>
//                         </button>
                        
//                         <button className="flex items-center justify-center space-x-2 py-4 px-4 border-2 border-emerald-200 hover:border-emerald-500 text-emerald-600 hover:text-emerald-700 rounded-xl font-semibold transition-all duration-300 hover:bg-emerald-50">
//                           <Mail className="w-5 h-5" />
//                           <span>Email Us</span>
//                         </button>
//                       </div>
//                     </div>

//                     {/* Trust Signals */}
//                     <div className="space-y-3 pt-4">
//                       {guarantees.map((guarantee, index) => (
//                         <div key={guarantee.text} className="flex items-center space-x-3 text-sm text-gray-600">
//                           <div className="text-emerald-500">
//                             {guarantee.icon}
//                           </div>
//                           <span>{guarantee.text}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Bottom Social Proof */}
//           <div className={`text-center mt-12 transform transition-all duration-1000 delay-600 ${
//             isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
//           }`}>
//             <div className="flex flex-wrap justify-center items-center gap-8">
//               <div className="flex items-center space-x-2">
//                 <div className="flex items-center">
//                   {[...Array(5)].map((_, i) => (
//                     <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
//                   ))}
//                 </div>
//                 <span className="text-gray-600 font-medium">4.9/5 from 1,200+ reviews</span>
//               </div>
              
//               <div className="h-6 w-px bg-gray-300" />
              
//               <div className="text-gray-600">
//                 <span className="font-semibold text-emerald-600">147 people</span> booked today
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CareerCTASection;

"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ArrowRight, Phone, Sparkles, Users } from "lucide-react"

const CleanCTA = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeUsers, setActiveUsers] = useState(47)

  useEffect(() => {
    setIsVisible(true)

    // Simulate live user count
    const interval = setInterval(() => {
      setActiveUsers((prev) => prev + Math.floor(Math.random() * 3) - 1)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-10 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Card className="relative border-0 shadow-2xl rounded-3xl bg-gradient-to-br from-[#4fbe99] to-[#3da582] overflow-hidden group hover:shadow-3xl transition-all duration-500">
          {/* Subtle Pattern Overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50 pointer-events-none z-0"></div>

          
          {/* Floating Elements */}
          <div className="absolute top-8 right-8 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-8 left-8 w-12 h-12 bg-white/10 rounded-full blur-lg animate-pulse delay-1000"></div>
          
          <CardContent className="relative p-12 lg:p-20">
            <div className={`space-y-10 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              {/* Live Activity Indicator */}
              <div className="flex justify-center">
                <div className="inline-flex items-center space-x-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white/90 text-sm font-medium">
                    <Users className="w-4 h-4 inline mr-1" />
                    {activeUsers} people booking sessions today
                  </span>
                </div>
              </div>

              {/* Enhanced Headline */}
              <div className="space-y-6">
                <div className="relative">
                  <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight tracking-tight">
                    Ready to Transform
                    <br />
                    <span className="relative inline-block">
                      Your Career?
                      <div className="absolute -bottom-2 left-0 right-0 h-1 bg-white/30 rounded-full"></div>
                    </span>
                  </h2>
                </div>
                
                <p className="text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto font-light leading-relaxed">
                  Book your <span className="font-semibold text-white">free consultation</span> today and take the first step toward your dream job.
                </p>
              </div>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button
                  size="lg"
                  className="group relative rounded-2xl bg-white text-[#4fbe99] hover:bg-gray-50 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 px-10 py-7 text-lg font-bold overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <Calendar className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  Book Free Session
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="group rounded-2xl border-2 border-white/40 text-white hover:bg-white/15 hover:border-white/60 backdrop-blur-sm transition-all duration-300 hover:scale-105 px-10 py-7 text-lg font-semibold bg-white/5"
                >
                  <Phone className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                  Call Now
                </Button>
              </div>

              {/* Enhanced Trust Line */}
              <div className="space-y-3">
                <div className="flex justify-center items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-yellow-300" />
                  <p className="text-white/90 text-base font-medium">
                    Join <span className="font-bold text-white">2,500+</span> professionals who found their dream careers
                  </p>
                  <Sparkles className="w-4 h-4 text-yellow-300" />
                </div>
                
                {/* Star Rating */}
                <div className="flex justify-center items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-5 h-5 text-yellow-300 fill-current">
                      ⭐
                    </div>
                  ))}
                  <span className="text-white/80 text-sm ml-2 font-medium">4.9/5 from 1,200+ reviews</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Floating Success Badges */}
        <div className="relative">
          <div className="absolute -top-6 -left-6 transform rotate-12 animate-float">
            <div className="bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
              <div className="text-2xl font-bold text-[#4fbe99]">95%</div>
              <div className="text-xs text-gray-600 font-medium">Success Rate</div>
            </div>
          </div>
          
          <div className="absolute -top-6 -right-6 transform -rotate-12 animate-float-delayed">
            <div className="bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
              <div className="text-2xl font-bold text-[#4fbe99]">24h</div>
              <div className="text-xs text-gray-600 font-medium">Response Time</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(12deg); }
          50% { transform: translateY(-10px) rotate(12deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(-12deg); }
          50% { transform: translateY(-8px) rotate(-12deg); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default CleanCTA
