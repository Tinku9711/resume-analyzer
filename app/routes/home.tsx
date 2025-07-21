import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import {resumes} from "../../constants";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resume Checker" },
    { name: "description", content: "Resume feedback for the job" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />

    <section className={"main-section"}>
      <div className={"heading"}>
        <h1> Resume Ratings & Application Tracker</h1>
        <h2>Get AI powered feedback for resume</h2>
      </div>
    </section>

    {resumes.length > 0 && (
        <div className={"resume-section"}>
          {resumes.map((resume) =>(
              <ResumeCard key = {resume.id} resume= {resume} />
          ))}

        </div>
    )}

  </main>
}
