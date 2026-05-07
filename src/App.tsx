/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mail, MapPin, Briefcase, Layers, Terminal, MonitorPlay, KanbanSquare, GraduationCap, Phone, User } from "lucide-react";
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
             <img src="https://raw.githubusercontent.com/PonnarasuP/myprofile/master/photo.png" alt="Ponnarasu P" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-2xl font-bold mb-2">Ponnarasu P</h1>
          <p className="text-slate-400 font-medium mb-6">Software Test Architect | Automotive Cockpit Domain</p>
          
          <div className="space-y-4 text-sm text-slate-300">
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4" /> Virudhunagar, TN, India
            </div>
            <div className="flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" /> +91-9566188339
            </div>
            <div className="flex items-center justify-center gap-2 break-all">
              <Mail className="w-4 h-4" /> periyasamy.ponnarasu@in.bosch.com
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-slate-700 w-full text-sm text-slate-300 space-y-3">
             <h3 className="font-semibold text-white flex items-center justify-center gap-2"><User className="w-4 h-4" /> Personal Details</h3>
             <p>DOB: 15.06.1986</p>
             <p>Marital Status: Married</p>
          </div>
        </div>

        {/* Right Column - Details */}
        <div className="md:col-span-2 p-6 md:p-10 space-y-10">
          
          {/* Career Objective */}
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-slate-900">Career Objective</h2>
            <p className="text-slate-700 text-sm leading-relaxed">
              To work as an Embedded design engineer in an environment conductive for innovative experiences, 
              which would offer me a knowledge base, to enhance my talent, exposure and zeal of knowledge and which in turns benefits the organization.
            </p>
          </section>

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

          {/* Professional Experience */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 pb-2 border-b-2 border-slate-200 text-slate-900 inline-block">Professional Experience</h2>
            <div className="relative border-l border-slate-300 ml-2 space-y-8">
               <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="pl-6 relative">
                 <div className="absolute -left-[5px] w-2.5 h-2.5 rounded-full bg-slate-500"></div>
                 <h4 className="font-bold text-slate-900">2020 – Present: Test Architect / Program Owner, Bosch - BGSW</h4>
                 <p className="text-sm text-slate-600">Leading large-scale validation lifecycles for Infotainment systems.</p>
               </motion.div>
               <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="pl-6 relative">
                 <div className="absolute -left-[5px] w-2.5 h-2.5 rounded-full bg-slate-500"></div>
                 <h4 className="font-bold text-slate-900">2014 – 2020: Lead Validation Engineer, Visteon</h4>
                 <p className="text-sm text-slate-600">Audio infotainment validation, CarPlay/Android Auto certification.</p>
               </motion.div>
               <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="pl-6 relative">
                 <div className="absolute -left-[5px] w-2.5 h-2.5 rounded-full bg-slate-500"></div>
                 <h4 className="font-bold text-slate-900">2012 – 2014: Senior Validation Engineer, Ford/Chrysler</h4>
               </motion.div>
               <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="pl-6 relative">
                 <div className="absolute -left-[5px] w-2.5 h-2.5 rounded-full bg-slate-500"></div>
                 <h4 className="font-bold text-slate-900">2011 – 2012: Verification & Validation Engineer, CMC Ltd</h4>
               </motion.div>
               <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="pl-6 relative">
                 <div className="absolute -left-[5px] w-2.5 h-2.5 rounded-full bg-slate-500"></div>
                 <h4 className="font-bold text-slate-900">2009 – 2011: Jr. Embedded Design Engineer, Spectrum Electra</h4>
               </motion.div>
            </div>
          </section>

          {/* Project Details */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 pb-2 border-b-2 border-slate-200 text-slate-900 inline-block">Project Highlights</h2>
            <div className="grid grid-cols-1 gap-4">
              {[
                { title: "Convergence Infotainment – Daimler CIVIC", area: "Bosch-BGSW", client: "Daimler", tools: "RFW, Monaco Diag Tool, ETFW" },
                { title: "Infotainment and Smart Core Infotainment", area: "Visteon, India", client: "M&M, TATA", tools: "Apple ATS, Linux PC, PCTS, Qsuite. CANoe, BPA 600" },
                { title: "Instrumentation Cluster", area: "Instrumentation Cluster", client: "TATA, M&M", tools: "CaNOE, Provetech, CAPL Scripts, DET" },
                { title: "Audio Head Unit Validation", area: "Diagnostics", client: "Ford", tools: "CANoe, Ford DET, Atlas" },
                { title: "MFD & HVAC Systems Validation", area: "Validation", client: "Ford", tools: "CANoe, Ford DET" },
              ].map((p, i) => (
                <div key={i} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 mb-2">{p.title}</h3>
                  <div className="text-sm text-slate-700 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1">
                    <p><strong>Area:</strong> {p.area}</p>
                    <p><strong>Client:</strong> {p.client}</p>
                    <p className="md:col-span-2"><strong>Tools:</strong> {p.tools}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Skills */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-800">Technical Skills</h2>
            <div className="bg-slate-50 p-4 rounded-xl text-sm text-slate-700 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <p><strong>Languages:</strong> Embedded C, Python, CAPL</p>
              <p><strong>Tools:</strong> CANalyzer, CANoe, Jira, RTC</p>
              <p><strong>Protocols:</strong> I2C, SPI, RS-232, CAN, LIN, UDS</p>
              <p><strong>Certifications:</strong> ISTQB Test Manager, EC Council ECH</p>
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-800 flex items-center gap-2"><GraduationCap /> Education</h2>
            <div className="space-y-2 text-slate-700 text-sm">
                <p><strong>B.E. in Electronics & Communication Engineering</strong> - Mepco Schlenk Engineering College</p>
                <p><strong>Diploma in Electronics & Communication</strong> - VSVN Polytechnic College</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

