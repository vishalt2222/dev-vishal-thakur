import { useEffect, useState } from "react";
import { ArrowRight, Download, Mail } from "lucide-react";
import resumeAsset from "@/assets/resume.asset.json";
import { PROFILE, ROLES, TECH_HIGHLIGHTS } from "./data";
import { GithubIcon, LinkedinIcon } from "./ui";
import profileAsset from "@/assets/profile.asset.json";

const PROFILE_PHOTO = profileAsset.url;

function useTyping(words: string[]) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[i % words.length] ?? "";
    const t = setTimeout(
      () => {
        if (!del) {
          setText(w.slice(0, text.length + 1));
          if (text.length + 1 === w.length) setTimeout(() => setDel(true), 1400);
        } else {
          setText(w.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setDel(false);
            setI(i + 1);
          }
        }
      },
      del ? 40 : 80,
    );
    return () => clearTimeout(t);
  }, [text, del, i, words]);
  return text;
}

export function Hero() {
  const typed = useTyping(ROLES);
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="float-slow absolute -top-32 -left-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="float-slow absolute right-0 bottom-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl [animation-delay:-4s]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--color-border)_1px,transparent_0)] [background-size:28px_28px] opacity-60" />
      </div>
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.3fr_1fr]">
        <div className="animate-fade-in">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" /> Learning by building real-world projects
          </p>
          <h1 className="text-4xl leading-tight font-extrabold md:text-6xl">
            Hi, I'm <span className="text-gradient">{PROFILE.name}</span>
          </h1>
          <p className="mt-4 h-8 font-mono text-lg text-primary md:text-xl">
            {typed}
            <span className="animate-pulse">|</span>
          </p>
          <p className="mt-2 text-sm font-medium text-muted-foreground">{PROFILE.headline}</p>
          <p className="mt-5 max-w-xl text-muted-foreground">{PROFILE.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="bg-gradient-accent shadow-elegant inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">
              View My Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a href={resumeAsset.url} download="Vishal_Thakur_Resume.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border bg-card px-6 py-3 text-sm font-semibold transition-colors hover:border-primary">
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-foreground hover:text-primary">
              Contact Me
            </a>
          </div>
          <div className="mt-6 flex gap-3">
            {[
              { href: PROFILE.github, icon: <GithubIcon className="h-4 w-4" />, label: "GitHub" },
              { href: PROFILE.linkedin, icon: <LinkedinIcon className="h-4 w-4" />, label: "LinkedIn" },
              { href: `mailto:${PROFILE.email}`, icon: <Mail className="h-4 w-4" />, label: "Email" },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="rounded-full border p-2.5 text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                {s.icon}
              </a>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-muted-foreground">
            {TECH_HIGHLIGHTS.map((t, i) => (
              <span key={t}>
                {t}
                {i < TECH_HIGHLIGHTS.length - 1 && <span className="ml-3 text-primary">•</span>}
              </span>
            ))}
          </div>
        </div>
        <div className="relative mx-auto h-72 w-72 md:h-80 md:w-80">
          <div className="spin-ring bg-gradient-accent absolute inset-0 rounded-full opacity-80 blur-sm" />
          <div className="absolute inset-[6px] overflow-hidden rounded-full bg-card">
            <img src={PROFILE_PHOTO} alt={PROFILE.name} className="h-full w-full object-cover" />
          </div>
          <span className="float-slow absolute -left-6 top-10 rounded-xl border bg-card px-3 py-2 font-mono text-xs shadow-elegant">{"</> React"}</span>
          <span className="float-slow absolute -right-4 bottom-12 rounded-xl border bg-card px-3 py-2 font-mono text-xs shadow-elegant [animation-delay:-3s]">AI · ML</span>
          <span className="float-slow absolute right-2 -top-2 rounded-xl border bg-card px-3 py-2 font-mono text-xs shadow-elegant [animation-delay:-6s]">OCR</span>
        </div>
      </div>
    </section>
  );
}
