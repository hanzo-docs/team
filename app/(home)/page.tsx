import Link from 'next/link';
import {
  CheckSquare,
  FileText,
  MessageSquare,
  CalendarClock,
  HardDrive,
  Users,
  ArrowRight,
  Bot,
} from 'lucide-react';

const apps = [
  { icon: CheckSquare, title: 'Tracker', body: 'Projects, issues, milestones, and sub-issues — plan and ship work.', href: '/docs/task-tracking/creating-projects' },
  { icon: FileText, title: 'Documents', body: 'Teamspaces and collaborative, real-time editing for your knowledge base.', href: '/docs/knowledge-management/documents' },
  { icon: MessageSquare, title: 'Chat', body: 'Channels, direct messages, threads, and an inbox that unifies activity.', href: '/docs/communication/sending-messages' },
  { icon: CalendarClock, title: 'Planner', body: 'Turn action items into a personal schedule and plan your day.', href: '/docs/team-resources/team-planner' },
  { icon: HardDrive, title: 'Drive', body: 'Store, organize, and share files alongside the rest of your work.', href: '/docs/knowledge-management/drive' },
  { icon: Users, title: 'Contacts & HR', body: 'People, teams, employees, time off, and org structure in one place.', href: '/docs/people-contacts/managing-contacts' },
];

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      {/* Hero */}
      <section className="mx-auto w-full max-w-5xl px-6 pt-24 pb-16 text-center">
        <p className="mb-4 text-xs font-mono uppercase tracking-[0.3em] text-fd-muted-foreground">
          Hanzo Team
        </p>
        <h1 className="text-balance text-4xl font-semibold sm:text-5xl">
          One workspace to run your team
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-balance text-lg text-fd-muted-foreground">
          Project tracking, documents, chat, planning, and drive — a single
          open-source workspace, signed in with your Hanzo account.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 rounded-lg bg-fd-primary px-5 py-2.5 text-sm font-medium text-fd-primary-foreground transition hover:opacity-90"
          >
            Read the docs <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/docs/getting-started/introduction"
            className="inline-flex items-center gap-2 rounded-lg border border-fd-border bg-fd-card px-5 py-2.5 text-sm font-medium transition hover:bg-fd-muted"
          >
            Get started
          </Link>
        </div>
      </section>

      {/* App grid */}
      <section className="mx-auto w-full max-w-5xl px-6 pb-24">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map(({ icon: Icon, title, body, href }) => (
            <Link
              key={title}
              href={href}
              className="group rounded-xl border border-fd-border bg-fd-card p-5 transition hover:border-fd-primary/40 hover:bg-fd-muted"
            >
              <Icon className="mb-3 h-6 w-6 text-fd-primary" />
              <h3 className="mb-1 font-semibold">{title}</h3>
              <p className="text-sm text-fd-muted-foreground">{body}</p>
            </Link>
          ))}
        </div>

        <Link
          href="/docs/account/agents-bots"
          className="mt-4 flex items-center gap-3 rounded-xl border border-fd-border bg-fd-card p-5 transition hover:border-fd-primary/40 hover:bg-fd-muted"
        >
          <Bot className="h-6 w-6 shrink-0 text-fd-primary" />
          <div>
            <h3 className="font-semibold">Agents &amp; bots</h3>
            <p className="text-sm text-fd-muted-foreground">
              Put Hanzo AI to work inside your workspace — automations, summaries, and assistants.
            </p>
          </div>
        </Link>
      </section>
    </main>
  );
}
