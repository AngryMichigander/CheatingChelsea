import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className="container mx-auto max-w-4xl py-12 px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-primary font-headline">
              Cheating Chelsea Exposed
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              An investigation into Chelsea Smallwood&apos;s controversial
              empire built on infidelity.
            </p>
          </header>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold font-headline">
                  From Personal Scandal to Business Opportunity
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-base text-card-foreground">
                <p>
                  Chelsea Smallwood, a California-based TikTok creator and
                  lifestyle coach, has built a multifaceted business empire
                  around infidelity experiences through her organization
                  &quot;The Other Woman and the Wife.&quot; The organization, which
                  includes a podcast, coaching services, online community, and
                  retreats, has grown from Smallwood&apos;s personal experience of
                  having an affair with a married coworker in 2013 to become a
                  controversial platform that monetizes complex relationship
                  dynamics while facing serious legal challenges in 2025.
                </p>
                <p>
                  Her journey began with her own extramarital affair. Living in
                  Novato, California, Smallwood initially gained attention by
                  creating TikTok content about her affair experience, including
                  videos where she would dance while sharing details about her
                  relationship with a married man.{' '}
                  <strong>
                    She holds only a bachelor&apos;s degree in Economics with no
                    formal qualifications in counseling or life coaching
                  </strong>
                  , yet has positioned herself as an expert in navigating
                  infidelity situations.
                </p>
                <p>
                  After divorcing her first husband and marrying her affair
                  partner, with whom she now has children, Smallwood transformed
                  her personal experience into a business model. She evolved
                  from creating &quot;relatable affair content&quot; to establishing
                  The Other Woman and the Wife LLC.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold font-headline">
                  A Controversial Business Model
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-base text-card-foreground">
                <p>
                  The organization functions as a comprehensive ecosystem for
                  people involved in or affected by infidelity.{' '}
                  <strong>
                    The business includes a weekly podcast with over 75
                    episodes, individual and group coaching services, a paid
                    online community, and women&apos;s retreats in Mexico.
                  </strong>{' '}
                  The podcast, co-hosted by Smallwood and Ann Marie, describes
                  itself as &quot;a show about infidelity, why it exists and what
                  we can learn from it.&quot;
                </p>
                <p>
                  Their online community operates as a paid membership forum
                  where participants discuss infidelity experiences in what the
                  organization markets as a &quot;judgment-free space.&quot;
                </p>
                <p>
                  The organization&apos;s social media presence drives its growth.
                  Their TikTok account @theowandthewife has accumulated{' '}
                  <strong>47,300 followers and 1.1 million likes</strong>. The
                  content strategy focuses on &quot;humanizing humans&quot; and
                  providing &quot;coaching with compassion,&quot; though critics argue
                  the approach normalizes harmful behavior.
                </p>
                <p>
                  To add a veneer of legitimacy, the team now includes licensed
                  professionals like clinical therapist Carolina Vilalva, an
                  evolution from the initial model built solely on personal
                  experience.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold font-headline">
                  Major Lawsuit Threatens the Empire
                </CardTitle>
                <CardDescription>
                  Kristen Jacobs&apos; Story of Harm
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-base text-card-foreground">
                <p>
                  In 2024, The Other Woman and the Wife LLC became embroiled in a
                  significant legal battle.{' '}
                  <strong>
                    The organization filed suit against Kristen Jacobs in Miami
                    County, Ohio Common Pleas Court (Case No. 24-498), but faces
                    serious counter-allegations including tortious interference
                    with business relations, cyberbullying, invasion of privacy,
                    and emotional distress.
                  </strong>
                </p>
                <p>
                  Court documents reveal allegations that the organization
                  shared Kristen Jacobs&apos; private text messages, personal
                  medical information, and photos of children without consent.
                  The community allegedly enabled members to mock and harass
                  victims of infidelity, with accusations of contacting
                  victims&apos; therapists and making inappropriate statements about
                  their mental health.
                </p>
                <p>
                  Critics describe the community as promoting &quot;depraved petty
                  behavior&quot; and creating &quot;a horrifying place for only
                  UNhealing to occur.&quot;
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-destructive shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold font-headline text-primary">
                  Stand With Kristen
                </CardTitle>
                <CardDescription className="text-md pt-2 max-w-xl mx-auto">
                  Help her fight back against online harassment and
                  exploitation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center text-base text-card-foreground max-w-prose mx-auto">
                  Kristen is taking a stand to hold Chelsea Smallwood and her
                  organization accountable. This is not just a personal battle;
                  it&apos;s a fight against the unethical use of private
                  information and for-profit online harassment. Your support can
                  help her cover legal fees and bring awareness to this
                  important issue.
                </p>
              </CardContent>
              <CardFooter className="flex justify-center pt-4">
                <Button asChild size="lg" variant="destructive">
                  <a
                    href="https://www.gofundme.com/f/help-kristen-stand-against-online-harassment-for-profit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold"
                  >
                    Support Kristen&apos;s GoFundMe
                  </a>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold font-headline">
                  Conclusion
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-base text-card-foreground">
                <p>
                  Chelsea Smallwood&apos;s transformation from TikTok creator
                  sharing affair stories to CEO of The Other Woman and the Wife
                  LLC illustrates how personal scandal can be monetized in the
                  digital age. While the organization claims to provide support,
                  the pending lawsuit and numerous allegations of harmful
                  practices raise serious questions about the ethics of
                  profiting from infidelity experiences. The organization&apos;s
                  future depends on resolving these legal challenges while many
                  view it as exploiting vulnerable individuals rather than
                  genuinely helping them heal.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold font-headline">
                  Sources and Evidence
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-base text-card-foreground">
                <p>
                  The claims made on this website are supported by evidence and
                  public records. We believe in transparency and holding
                  individuals accountable for their actions.
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    <a
                      href="#"
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      The Other Woman and the Wife LLC v. Kristen Jacobs - Miami
                      County, Ohio Common Pleas Court (Case No. 24-498)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.tiktok.com/@theowandthewife"
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Official TikTok Account for The Other Woman and the Wife
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.theotherwomanandthewife.com/"
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Official Website for The Other Woman and the Wife
                    </a>
                  </li>
                </ul>
                <p>
                  We encourage visitors to review the information and draw their
                  own conclusions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="text-center py-6 text-sm text-muted-foreground">
        <div className="container mx-auto">
          <p>
            This website, cheatingchelsea.com, is dedicated to raising
            awareness and supporting the victims.
          </p>
          <p>&copy; 2025 Cheating Chelsea Exposed. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
