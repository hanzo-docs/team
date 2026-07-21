import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <p className="mb-4 text-xs font-mono uppercase tracking-[0.3em] text-fd-muted-foreground">
        404
      </p>
      <h1 className="mb-3 text-3xl font-semibold">Page not found</h1>
      <p className="mb-10 max-w-sm text-fd-muted-foreground">
        This page doesn&apos;t exist, or it may have moved. Try the documentation or head home.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-fd-primary px-4 py-2 text-sm font-medium text-fd-primary-foreground transition hover:opacity-90"
        >
          Go home
        </Link>
        <Link
          href="/docs"
          className="inline-flex items-center gap-2 rounded-lg border border-fd-border bg-fd-background px-4 py-2 text-sm font-medium transition hover:bg-fd-muted"
        >
          Documentation
        </Link>
      </div>
    </main>
  );
}
