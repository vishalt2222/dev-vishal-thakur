import { useState } from "react";
import * as Icons from "lucide-react";
import { Award, Briefcase, GraduationCap, Mail, MapPin, Phone, Star } from "lucide-react";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { BELIEFS, CERTIFICATIONS, EDUCATION, JOURNEY, PROFILE, PROJECTS, SERVICES, SKILL_GROUPS, type Project } from "./data";
import { sendContactMessage } from "@/lib/contact.functions";
import { Chip, GithubIcon, LinkedinIcon, Reveal, SectionHeader } from "./ui";
import { cn } from "@/lib/utils";

const wrap = "mx-auto max-w-6xl px-5 py-24";

export function About() {
  return (
    <section id="about" className="bg-surface">
      <div className={wrap}>
        <SectionHeader eyebrow="About me" title="Curious, growth-oriented, and building" />
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="space-y-4 text-muted-foreground">
            <p>I'm an aspiring software developer and MCA student with a strong passion for web development, data science, artificial intelligence, and machine learning. I enjoy transforming ideas into practical, user-focused digital solutions and continuously expanding my technical expertise.</p>
            <p>I have hands-on experience with Java, Python, JavaScript, React, HTML, CSS, Bootstrap, and data science technologies. Through academic, internship, and personal projects I've gained practical experience in application development, data analysis, AI integration, PDF processing, OCR, and modern web technologies.</p>
            <p>My projects include a Movie Recommendation System, Medical Insurance Analysis, and a News E-Paper Platform built with the MERN stack and MVC architecture — featuring PDF processing, OCR, and AI-powered Marathi news generation.</p>
          </Reveal>
          <Reveal delay={120} className="surface-card p-6">
            <h3 className="mb-4 font-semibold">What I Believe In</h3>
            <ul className="space-y-3">
              {BELIEFS.map((b) => (
                <li key={b} className="flex items-center gap-3 text-sm">
                  <span className="bg-gradient-accent h-2 w-2 rounded-full" /> {b}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education">
      <div className={wrap}>
        <SectionHeader eyebrow="Education" title="Academic path" />
        <div className="relative space-y-8 border-l pl-8">
          {EDUCATION.map((e, i) => (
            <Reveal key={e.degree} delay={i * 100} className="relative">
              <span className={cn("absolute top-1 -left-[41px] flex h-5 w-5 items-center justify-center rounded-full border-2 bg-background", e.current ? "border-primary" : "border-border")}>
                {e.current && <span className="h-2 w-2 rounded-full bg-primary" />}
              </span>
              <div className={cn("surface-card lift p-6", e.current && "border-primary/50")}>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="flex items-center gap-2 font-semibold"><GraduationCap className="h-4 w-4 text-primary" /> {e.degree}</h3>
                  <Chip className={e.current ? "border-primary/40 text-primary" : ""}>{e.current ? `Current · ${e.period}` : e.period}</Chip>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{e.school} · {e.place}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <h3 className="mt-14 mb-5 text-lg font-semibold">Additional Learning</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {CERTIFICATIONS.map((c, i) => (
            <Reveal key={c.title} delay={i * 100} className="surface-card lift flex items-start gap-4 p-5">
              <Award className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="font-medium">{c.title}</p>
                <p className="text-sm text-muted-foreground">{c.org}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const INTERN_TECH = ["MERN", "MVC", "PDF Processing", "OCR", "Google Gemini AI", "REST APIs", "MongoDB"];

export function Experience({ onOpen }: { onOpen: (p: Project) => void }) {
  const p = PROJECTS[0]!;
  return (
    <section id="experience" className="bg-surface">
      <div className={wrap}>
        <SectionHeader eyebrow="Experience" title="Where I've worked" />
        <Reveal className="surface-card p-6 md:p-8">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="flex items-center gap-2 text-xl font-semibold"><Briefcase className="h-5 w-5 text-primary" /> Software Development Internship</h3>
              <p className="mt-1 text-muted-foreground">Infodad Technology Pvt. Ltd. · Software Developer / Intern</p>
            </div>
            <Chip>6 Months</Chip>
          </div>
          <p className="mt-4 text-muted-foreground">Worked on software development tasks involving modern web technologies, PDF processing, OCR, AI integration, and application workflows.</p>
          <div className="mt-6 rounded-xl border bg-background/50 p-5">
            <p className="text-xs uppercase tracking-widest text-primary">Major project</p>
            <h4 className="mt-1 font-semibold">{p.title}</h4>
            <p className="text-sm text-muted-foreground">Role: {p.role}</p>
            <ul className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
              {p.features.map((f) => (
                <li key={f} className="flex gap-2"><span className="text-primary">▹</span>{f}</li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">{INTERN_TECH.map((t) => <Chip key={t}>{t}</Chip>)}</div>
            <button onClick={() => onOpen(p)} className="mt-5 text-sm font-semibold text-primary hover:underline">View project details →</button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills">
      <div className={wrap}>
        <SectionHeader eyebrow="Skills" title="Skills & expertise" desc="Grouped by what I use them for — no made-up percentages." />
        <div className="grid gap-5 md:grid-cols-2">
          {SKILL_GROUPS.map((g, i) => (
            <Reveal key={g.title} delay={i * 80} className="surface-card lift p-6">
              <h3 className="mb-4 font-semibold">{g.title}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <Chip key={s} className="transition-colors hover:border-primary hover:text-primary">{s}</Chip>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="bg-surface">
      <div className={wrap}>
        <SectionHeader eyebrow="Services" title="What I can help with" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[s.icon] ?? Icons.Code;
            return (
              <Reveal key={s.title} delay={(i % 3) * 80} className="surface-card lift p-6">
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-2.5 text-primary"><Icon className="h-5 w-5" /></div>
                <h3 className="font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Projects({ onOpen }: { onOpen: (p: Project) => void }) {
  const featured = PROJECTS.find((p) => p.featured)!;
  const rest = PROJECTS.filter((p) => !p.featured);
  return (
    <section id="projects">
      <div className={wrap}>
        <SectionHeader eyebrow="Projects" title="Things I've built" desc="Click any project for the full story." />
        <Reveal>
          <button onClick={() => onOpen(featured)} className="bg-gradient-accent shadow-elegant group block w-full rounded-2xl p-[1.5px] text-left">
            <div className="rounded-2xl bg-card p-7 md:p-9">
              <Chip className="border-primary/40 text-primary"><Star className="mr-1 h-3 w-3" /> Featured</Chip>
              <h3 className="mt-4 text-2xl font-bold group-hover:text-primary">{featured.title}</h3>
              <p className="text-sm text-muted-foreground">{featured.role}</p>
              <p className="mt-4 max-w-3xl text-muted-foreground">{featured.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">{featured.highlights.map((h) => <Chip key={h}>{h}</Chip>)}</div>
            </div>
          </button>
        </Reveal>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {rest.map((p, i) => (
            <Reveal key={p.id} delay={i * 100}>
              <button onClick={() => onOpen(p)} className="surface-card lift group h-full w-full p-6 text-left">
                <h3 className="text-xl font-semibold group-hover:text-primary">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">{p.tech.map((t) => <Chip key={t}>{t}</Chip>)}</div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectDialog({ project, onClose }: { project: Project | null; onClose: () => void }) {
  return (
    <Dialog open={!!project} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto">
        {project && (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">{project.title}</DialogTitle>
              {project.role && <DialogDescription>{project.role}</DialogDescription>}
            </DialogHeader>
            <div className="space-y-5 text-sm">
              {[
                ["Overview", project.overview],
                ["Problem", project.problem],
                ["Solution", project.solution],
              ].map(([k, v]) => (
                <div key={k}><h4 className="mb-1 font-semibold text-primary">{k}</h4><p className="text-muted-foreground">{v}</p></div>
              ))}
              <div><h4 className="mb-2 font-semibold text-primary">Technology Stack</h4><div className="flex flex-wrap gap-2">{project.tech.map((t) => <Chip key={t}>{t}</Chip>)}</div></div>
              <div><h4 className="mb-2 font-semibold text-primary">Key Features</h4><ul className="list-inside list-disc space-y-1 text-muted-foreground">{project.features.map((f) => <li key={f}>{f}</li>)}</ul></div>
              {[
                ["My Contribution", project.contribution],
                ["Challenges", project.challenges],
                ["What I Learned", project.learned],
              ].map(([k, v]) => (
                <div key={k}><h4 className="mb-1 font-semibold text-primary">{k}</h4><p className="text-muted-foreground">{v}</p></div>
              ))}
              <a href={project.github ?? PROFILE.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border px-4 py-2 font-medium hover:border-primary">
                <GithubIcon className="h-4 w-4" /> {project.github ? "View on GitHub" : "GitHub profile"}
              </a>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

export function Journey() {
  return (
    <section className="bg-surface">
      <div className={wrap}>
        <SectionHeader eyebrow="My Journey" title="How I got here" />
        <ol className="grid gap-4 md:grid-cols-6">
          {JOURNEY.map((j, i) => (
            <Reveal key={j} delay={i * 90} className="relative">
              <li className="surface-card h-full p-4">
                <span className="font-mono text-xs text-primary">0{i + 1}</span>
                <p className="mt-2 text-sm font-medium">{j}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<"name" | "email" | "subject" | "message", string>>>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const er: Partial<Record<"name" | "email" | "subject" | "message", string>> = {};
    if (!form.name.trim()) er.name = "Please enter your name";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) er.email = "Please enter a valid email";
    if (!form.subject.trim()) er.subject = "Please add a subject";
    if (form.message.trim().length < 10) er.message = "Message should be at least 10 characters";
    setErrors(er);
    if (Object.keys(er).length) {
      toast.error("Please fix the highlighted fields");
      return;
    }
    setSending(true);
    try {
      await sendContactMessage({ data: form });
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      toast.success("Message sent! I'll get back to you soon.");
    } catch (err) {
      if (err instanceof Error && err.message === "CONTACT_NOT_CONFIGURED") {
        toast.error("The contact form isn't fully set up yet — please email me directly instead.");
      } else {
        toast.error("Couldn't send the message. Please try again.");
      }
    } finally {
      setSending(false);
    }
  };

  const field = "w-full rounded-lg border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary";
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm({ ...form, [k]: e.target.value });

  return (
    <section id="contact">
      <div className={wrap}>
        <SectionHeader eyebrow="Contact" title="Let's Build Something Together" desc="If you have an interesting project, collaboration opportunity, or simply want to connect, feel free to reach out." />
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <Reveal className="space-y-3">
            {[
              { icon: <Mail className="h-4 w-4" />, label: PROFILE.email, href: `mailto:${PROFILE.email}` },
              { icon: <Phone className="h-4 w-4" />, label: PROFILE.phone, href: `tel:${PROFILE.phone}` },
              { icon: <MapPin className="h-4 w-4" />, label: PROFILE.location },
              { icon: <LinkedinIcon className="h-4 w-4" />, label: "LinkedIn", href: PROFILE.linkedin },
              { icon: <GithubIcon className="h-4 w-4" />, label: "GitHub", href: PROFILE.github },
            ].map((c) => {
              const inner = <><span className="text-primary">{c.icon}</span><span className="text-sm break-all">{c.label}</span></>;
              return c.href ? (
                <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="surface-card lift flex items-center gap-3 p-4">{inner}</a>
              ) : (
                <div key={c.label} className="surface-card flex items-center gap-3 p-4">{inner}</div>
              );
            })}
          </Reveal>
          <Reveal delay={100}>
            <form onSubmit={submit} noValidate className="surface-card space-y-4 p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                {(["name", "email"] as const).map((k) => (
                  <div key={k}>
                    <input placeholder={k === "name" ? "Name" : "Email"} type={k === "email" ? "email" : "text"} value={form[k]} onChange={set(k)} className={cn(field, errors[k] && "border-destructive")} />
                    {errors[k] && <p className="mt-1 text-xs text-destructive">{errors[k]}</p>}
                  </div>
                ))}
              </div>
              <div>
                <input placeholder="Subject" value={form.subject} onChange={set("subject")} className={cn(field, errors.subject && "border-destructive")} />
                {errors.subject && <p className="mt-1 text-xs text-destructive">{errors.subject}</p>}
              </div>
              <div>
                <textarea rows={5} placeholder="Message" value={form.message} onChange={set("message")} className={cn(field, errors.message && "border-destructive")} />
                {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
              </div>
              <button type="submit" disabled={sending} className="bg-gradient-accent w-full rounded-full py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-60">{sending ? "Sending…" : "Send Message"}</button>
              {sent && <p className="text-center text-sm text-primary">Thanks! Your message was sent directly to my inbox.</p>}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display font-bold">{PROFILE.name}</p>
          <p className="text-sm text-muted-foreground">Software Developer • AI & Data Enthusiast</p>
        </div>
        <nav className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          {["Home", "About", "Skills", "Projects", "Contact"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-primary">{l}</a>
          ))}
        </nav>
        <div className="flex gap-3 text-muted-foreground">
          <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-primary"><GithubIcon className="h-5 w-5" /></a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-primary"><LinkedinIcon className="h-5 w-5" /></a>
          <a href={`mailto:${PROFILE.email}`} aria-label="Email" className="hover:text-primary"><Mail className="h-5 w-5" /></a>
        </div>
      </div>
      <p className="pb-8 text-center text-xs text-muted-foreground">© 2026 {PROFILE.name}. All rights reserved.</p>
    </footer>
  );
}
