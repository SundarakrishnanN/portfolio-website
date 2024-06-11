/**
 * v0 by Vercel.
 * @see https://v0.dev/t/3281MeiPgru
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Linkedin,Mail } from "lucide-react"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-gradient-to-br from-[#1e293b] to-[#0f172a] text-gray-50 animate-fade-in">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center animate-bounce" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">XYZ College</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4 animate-pulse"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4 animate-pulse"
            prefetch={false}
          >
            Projects
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4 animate-pulse"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 animate-fade-in">
          <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div className="flex flex-col items-center justify-center space-y-6 animate-slide-up">
                <div className="rounded-full bg-gradient-to-br from-[#0f172a] to-[#1e293b] w-32 h-32 flex items-center justify-center overflow-hidden">
                  <img
                    src="\sundar.jpg"
                    width="128"
                    height="128"
                    alt="Profile"
                    
                  />
                </div>
                <div className="space-y-2 text-center">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl animate-fade-in-up">
                    Sundarakrishnan N
                  </h1>
                  <p className="text-gray-300 md:text-xl animate-fade-in-up">A Computer Science Student at RV College of Engineering</p>
                </div>
                <div className="flex gap-4 animate-fade-in-up">
                  <Link
                    href="https://drive.google.com/file/d/14DlBH7Ii2vaHEHdqn22dU25RHuBU2nPj/view"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-[#1e293b] px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#1e293b]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0f172a] disabled:pointer-events-none disabled:opacity-50 animate-pulse"
                    prefetch={false}
                  >
                    Resume
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/sundarakrishnan-n"
                    className="inline-flex h-9 items-center justify-center rounded-md border border-[#1e293b] bg-transparent px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-[#1e293b]/10 hover:text-[#1e293b] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0f172a] disabled:pointer-events-none disabled:opacity-50 animate-pulse"
                    prefetch={false}
                  >
                    LinkedIn
                  </Link>
                  <Link
                    href="https://github.com/SundarakrishnanN/"
                    className="inline-flex h-9 items-center justify-center rounded-md border border-[#1e293b] bg-transparent px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-[#1e293b]/10 hover:text-[#1e293b] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0f172a] disabled:pointer-events-none disabled:opacity-50 animate-pulse"
                    prefetch={false}
                  >
                    GitHub
                  </Link>
                </div>
              </div>
              <div className="relative z-10 grid grid-cols-3 gap-4 style={{ float: 'right' }}">
                  <div className="col-span-2 row-span-2 rounded-xl bg-gradient-to-br from-[#0f172a]/50 to-[#1e293b]/50 p-4 backdrop-blur-lg animate-fade-in-up">
                    <img
                      src="/data-science.png"
                      width="800"
                      height="600"
                      alt="Computer Science"
                      className="w-full h-full object-cover rounded-xl animate-zoom-in"
                    />
                  </div>
                </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-[#0f172a]/10 to-[#1e293b]/10 animate-fade-in">
          <div className="container px-4 md:px-6 space-y-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl animate-fade-in-up">About Me</h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed animate-fade-in-up">
                  I am a passionate 2nd year computer science student at RV College of Engineering, and also the Webmaster at IEEE-RVCE.I have great interest towards web development and machine learning. I actively look forward to build and explore stuff in these vast domains.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3 animate-fade-in-up">
              <div className="grid gap-1 animate-slide-up">
                <h3 className="text-lg font-bold">Proficient in Programming Languages</h3>
                <p className="text-sm text-gray-300">
                  I have expertise in Java,Python,C and Javascript which have been used in various projects,
                  and I am in pursuit of constantly expanding my knowledge.
                </p>
              </div>
              <div className="grid gap-1 animate-slide-up">
                <h3 className="text-lg font-bold">Experience in Web Development</h3>
                <p className="text-sm text-gray-300">
                 I have built various backend websites using SpringBoot and Flask,including  a production level website in my current tenure as the Web Development Lead at IEEE-RVCE. Experienced in building websites right from conceptualization to final production.
                </p>
              </div>
              <div className="grid gap-1 animate-slide-up">
                <h3 className="text-lg font-bold">Research Experience</h3>
                <p className="text-sm text-gray-300">
                 Machine Learning has been an active area of my research including a successfull publication at ICCCI IEEE Conference 2024 on Vehicle Rear View Mirror Detection. Currently researching in the field of Transfer Learning.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-[#0f172a]/20 to-[#1e293b]/20 animate-fade-in">
          <div className="container px-4 md:px-6 space-y-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl animate-fade-in-up">My Projects</h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed animate-fade-in-up">
                  Check out some of the projects I have worked on, showcasing my skills and passion for computer
                  science.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3 animate-fade-in-up">
              <div className="rounded-xl bg-gradient-to-br from-[#0f172a]/50 to-[#1e293b]/50 p-4 backdrop-blur-lg animate-slide-up">
                <img
                  src="/placeholder.svg"
                  width="400"
                  height="300"
                  alt="Project 1"
                  className="w-full h-full object-cover rounded-xl animate-zoom-in"
                />
                <div className="mt-4 space-y-2">
                  <h3 className="text-lg font-bold animate-fade-in-up">Vehicle Mirror Detection using YOLOv8</h3>
                  <p className="text-sm text-gray-300 animate-fade-in-up">
                      A research project that uses YOLOv8 to detect rear view mirrors of vehicles real-time. Led to successful publication at ICCCI IEEE Conference 2024.
                  </p>
                  <div className="flex gap-2 animate-fade-in-up">
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">YOLOv8</Badge>
                    <Badge variant="secondary">OpenCV</Badge>
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-gradient-to-br from-[#0f172a]/50 to-[#1e293b]/50 p-4 backdrop-blur-lg animate-slide-up">
                <img
                  src="/placeholder.svg"
                  width="400"
                  height="300"
                  alt="Project 2"
                  className="w-full h-full object-cover rounded-xl animate-zoom-in"
                />
                <div className="mt-4 space-y-2">
                  <h3 className="text-lg font-bold animate-fade-in-up">GateKeeper</h3>
                  <p className="text-sm text-gray-300 animate-fade-in-up">
                    An e-approval system website for event permission letters at IEEE-RVCE. Lead the development of the website from scratch. Webiste aims to save time taken in getting event approvals.
                  </p>
                  <div className="flex gap-2 animate-fade-in-up">
                    <Badge variant="secondary">Java</Badge>
                    <Badge variant="secondary">SpringBoot</Badge>
                    <Badge variant="secondary">Nextjs</Badge>
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-gradient-to-br from-[#0f172a]/50 to-[#1e293b]/50 p-4 backdrop-blur-lg animate-slide-up">
                <img
                  src="/placeholder.svg"
                  width="400"
                  height="300"
                  alt="Project 3"
                  className="w-full h-full object-cover rounded-xl animate-zoom-in"
                />
                <div className="mt-4 space-y-2">
                  <h3 className="text-lg font-bold animate-fade-in-up">AquaMetrics</h3>
                  <p className="text-sm text-gray-300 animate-fade-in-up">
                  Created an IOT based smart water monitoring system. Created and deployed a functional Flask Website
                  that lets users login and view smart analytics in their dashboard.
                  </p>
                  <div className="flex gap-2 animate-fade-in-up">
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">Flask</Badge>
                    <Badge variant="secondary">Javascript</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-[#0f172a]/30 to-[#1e293b]/30 animate-fade-in">
  <div className="container px-4 md:px-6 space-y-12">
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl animate-fade-in-up">Get in Touch</h2>
        <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text">Contact me through any of the following platforms:</p>
      </div>
      <div className="flex space-x-6">
        <a href="https://www.linkedin.com/in/sundarakrishnan-n" target="_blank" rel="noopener noreferrer">
         <Linkedin />
        </a>
        <a href="mailto:sundar050804@gmail.com" target="_blank" rel="noopener noreferrer">
          <Mail />
        </a>
      </div>
    </div>
  </div>
</section>
      </main>
    </div>
  )
}

function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}