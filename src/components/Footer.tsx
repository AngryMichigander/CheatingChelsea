import { NetworkFooter } from '@/components/NetworkFooter';

export function Footer() {
  return (
    <footer className="text-center py-6 text-sm text-muted-foreground">
      <div className="container mx-auto">
        <p>
          This website, cheatingchelsea.com, is dedicated to raising
          awareness and supporting the victims.
        </p>
        <p>
          For questions, comments, or concerns, please email:{' '}
          <a
            href="mailto:notacheater&#64;cheatingchelsea.com"
            className="text-primary hover:underline"
          >
            notacheater&#64;cheatingchelsea.com
          </a>
        </p>
        <p className="mt-4 italic">
          Disclaimer: This website is independently operated by a{' '}
          <a
            href="https://angrymichigander.com"
            className="text-primary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="snarky Michigander (opens in a new tab)"
          >
            snarky Michigander
          </a>{' '}
          and is not affiliated with or endorsed by Kristen Jacobs.
        </p>
        <p className="mt-2">&copy; {new Date().getFullYear()} Cheating Chelsea Exposed. All Rights Reserved.</p>
        <p className="mt-1 text-xs text-muted-foreground/50">
          Build: {process.env.NEXT_PUBLIC_GIT_COMMIT ? (
            <a
              href={`https://git.deco.sh/signal-works/cheatingchelsea/commit/${process.env.NEXT_PUBLIC_GIT_COMMIT}`}
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {process.env.NEXT_PUBLIC_GIT_COMMIT}
            </a>
          ) : (
            'development'
          )}
        </p>
        <NetworkFooter />
      </div>
    </footer>
  );
}
