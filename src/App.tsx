/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mail, MapPin, Briefcase, Layers, Terminal, MonitorPlay, KanbanSquare } from "lucide-react";
import { motion } from "motion/react";

export default function App() {
  const competencies = [
    { title: "Test Architecture", icon: Layers, desc: "Designing robust, scalable test frameworks for embedded systems and automotive middleware." },
    { title: "Python Automation", icon: Terminal, desc: "Expert-level scripting for end-to-end automation, tool development, and CI/CD integration." },
    { title: "Infotainment", icon: MonitorPlay, desc: "Deep expertise in validating complex HMI, telematics, and in-car entertainment." },
    { title: "Project Mgmt", icon: KanbanSquare, desc: "Leading cross-functional teams and managing large-scale validation lifecycles." },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-3">
        
        {/* Left Column - Personal Info */}
        <div className="bg-slate-900 text-white p-6 md:p-8 flex flex-col items-center text-center">
          <div className="w-40 h-40 rounded-full bg-gray-700 mb-6 overflow-hidden border-4 border-slate-700">
             {/* Using placeholder for photo */}
             <img src="https://api.dicebear.com/9.x/avataaars/svg?seed=Ponnarasu" alt="Ponnarasu P" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-2xl font-bold mb-2">Ponnarasu P</h1>
          <p className="text-slate-400 font-medium mb-6">Software Test Architect | Automotive Cockpit Domain Test Expert</p>
          
          <div className="space-y-4 text-sm text-slate-300">
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4" /> Based in India | BGSW Coimbatore.
            </div>
            <div className="flex items-center justify-center gap-2">
              <Mail className="w-4 h-4" /> poe1cob@bosch.com
            </div>
          </div>
        </div>

        {/* Right Column - Details */}
        <div className="md:col-span-2 p-6 md:p-10 space-y-10">
          
          {/* Core Competencies */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 pb-2 border-b-2 border-slate-200 text-slate-900 inline-block">Core Competencies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {competencies.map((c, i) => (
                <div key={i} className="border border-slate-200 p-4 rounded-xl transition-all duration-300 hover:border-slate-300 hover:shadow-lg hover:-translate-y-1 bg-white">
                  <c.icon className="w-6 h-6 text-slate-500 mb-3" />
                  <h3 className="font-semibold text-slate-900 mb-1">{c.title}</h3>
                  <p className="text-sm text-slate-600">{c.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Bosch Experience */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 pb-2 border-b-2 border-slate-200 text-slate-900 inline-block">Experience at Bosch</h2>
            <ul className="list-disc list-outside ml-5 space-y-2 text-slate-700 text-sm">
              <li>Review functional designs/CRs and prepare TGD and detailed test documents.</li>
              <li>Plan, monitor, and drive program execution with timely issue resolution.</li>
              <li>Develop test strategies, automation, and reusable assets for infotainment systems.</li>
              <li>Lead technical efforts, support stakeholders, and coordinate testing (incl. SomeIP, DoIP, AVB, in-car).</li>
            </ul>
          </section>
          
          {/* Timeline - Simple version */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 pb-2 border-b-2 border-slate-200 text-slate-900 inline-block">Work Experience 17+ Years</h2>
            <div className="relative border-l border-slate-300 ml-2 space-y-8">
               <motion.div
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="pl-6 relative"
               >
                 <div className="absolute -left-[5px] w-2.5 h-2.5 rounded-full bg-slate-500"></div>
                 <h4 className="font-bold text-slate-900">Present: Test Automation Lead</h4>
                 <p className="text-sm text-slate-600">Scaling automation across global automotive projects</p>
               </motion.div>
               <motion.div
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.1 }}
                 className="pl-6 relative"
               >
                 <div className="absolute -left-[5px] w-2.5 h-2.5 rounded-full bg-slate-500"></div>
                 <h4 className="font-bold text-slate-900">2020: BGSW - Software Test Architect</h4>
               </motion.div>
               <motion.div
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 }}
                 className="pl-6 relative"
               >
                 <div className="absolute -left-[5px] w-2.5 h-2.5 rounded-full bg-slate-500"></div>
                 <h4 className="font-bold text-slate-900">2014: Visteon Corp. - Sr. SW Design Engineer</h4>
               </motion.div>
               <motion.div
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.3 }}
                 className="pl-6 relative"
               >
                 <div className="absolute -left-[5px] w-2.5 h-2.5 rounded-full bg-slate-500"></div>
                 <h4 className="font-bold text-slate-900">2013: Ford Motor Company - Sr. SW Engineer</h4>
               </motion.div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

