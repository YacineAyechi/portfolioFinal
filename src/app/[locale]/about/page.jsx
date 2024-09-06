import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";

const AboutMe = () => {
  return (
    <div className="my-16 mx-4 md:mx-8 lg:mx-16 xl:mx-44">
      <Toaster />
      <div>
        <h1 className="text-2xl md:text-3xl font-bold">
          <span className="text-[#C778DD]">#</span>
          about-me
        </h1>
        <p className="my-2">who am i?</p>

        <div className="mt-12 flex justify-between flex-col-reverse md:flex-row">
          <div className="w-full md:w-1/2">
            <p>Hello, I&apos;m Yacine Ayachi!</p>
            <p className="my-14">
              I&apos;m a passionate self-taught front-end developer hailing from
              Tunis, Tunisia. With over 4 years of experience, I specialize in
              crafting responsive websites from scratch, transforming creative
              visions into sleek, user-friendly web experiences.
            </p>

            <p>
              I take pride in helping diverse clients establish their online
              presence, leveraging the latest technologies and frameworks to
              deliver modern, innovative solutions. Continuously learning and
              adapting to new trends drives my commitment to creating impactful
              digital experiences.
            </p>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <Image
              src="/illustrations/about.svg"
              width={380}
              height={100}
              alt="About Me"
              className="hidden md:block" // Hidden on mobile, visible on medium screens and up
            />
          </div>
        </div>

        <div className="mt-12">
          <h1 className="text-2xl md:text-3xl font-bold">
            <span className="text-[#C778DD]">#</span>
            skills
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            <div className="p-4 bg-[#1e1e1e] rounded-lg shadow-lg">
              <h3 className="text-white font-bold">HTML5</h3>
            </div>
            <div className="p-4 bg-[#1e1e1e] rounded-lg shadow-lg">
              <h3 className="text-white font-bold">CSS3</h3>
            </div>
            <div className="p-4 bg-[#1e1e1e] rounded-lg shadow-lg">
              <h3 className="text-white font-bold">JavaScript</h3>
            </div>
            <div className="p-4 bg-[#1e1e1e] rounded-lg shadow-lg">
              <h3 className="text-white font-bold">Next.js</h3>
            </div>
            <div className="p-4 bg-[#1e1e1e] rounded-lg shadow-lg">
              <h3 className="text-white font-bold">Tailwind CSS</h3>
            </div>
            <div className="p-4 bg-[#1e1e1e] rounded-lg shadow-lg">
              <h3 className="text-white font-bold">Shadcn UI</h3>
            </div>
            <div className="p-4 bg-[#1e1e1e] rounded-lg shadow-lg">
              <h3 className="text-white font-bold">Firebase</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
