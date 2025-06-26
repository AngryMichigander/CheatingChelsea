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
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-grow">
        <div className="container mx-auto max-w-4xl py-12 px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-primary font-headline">
              Chelsea Smallwood&apos;s controversial empire built on infidelity
            </h1>
          </header>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold font-headline">
                  From personal scandal to business opportunity
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-base text-card-foreground">
                <p>
                  Chelsea Smallwood&apos;s journey began with her own extramarital
                  affair. Living in Novato, California, Smallwood initially
                  gained attention by creating TikTok content about her affair
                  experience, including videos where she would dance while
                  sharing details about her relationship with a married man.{' '}
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
                  The Other Woman and the Wife LLC, expanding beyond social
                  media into multiple revenue streams including coaching,
                  community memberships, and retreat hosting.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold font-headline">
                  The Other Woman and the Wife operates across multiple
                  platforms
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
                  we can learn from it,&quot; available on all major podcast
                  platforms.
                </p>
                <p>
                  The coaching services have expanded to include qualified
                  professionals like Carolina Vilalva, a certified Executive and
                  Life Coach from Columbia University with over 11 years of
                  experience. The team also includes Kristine Haraldsson, a
                  coach with over 100,000 social media followers, attempting to
                  add legitimacy to services that began without professional
                  credentials.
                </p>
                <p>
                  Their online community operates as a paid membership forum
                  where participants discuss infidelity experiences in what the
                  organization markets as a &quot;judgment-free space.&quot; Members
                  pay fees to access private forums, support groups, and
                  resources, with promotional codes like &quot;PODCAST&quot; offering
                  $10 discounts to new members.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold font-headline">
                  Social media presence drives controversial growth
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-base text-card-foreground">
                <p>
                  The organization maintains an active digital footprint across
                  multiple platforms. Their TikTok account @theowandthewife has
                  accumulated{' '}
                  <strong>47,300 followers and 1.1 million likes</strong>,
                  while their Instagram presence and websites (towtw.com and
                  theotherwomanandthewife.com) serve as primary touchpoints for
                  their audience. The content strategy focuses on
                  &quot;humanizing humans&quot; and providing &quot;coaching with
                  compassion,&quot; though critics argue the approach normalizes
                  harmful behavior.
                </p>
                <p>
                  Smallwood&apos;s content evolution reflects attempts to distance
                  the brand from its controversial origins. She has reportedly
                  wiped much of her original TikTok content that explicitly
                  celebrated affair experiences, attempting to rebrand as a more
                  professional coaching service. Despite these efforts, the
                  organization&apos;s foundation on monetizing infidelity
                  continues to generate significant criticism.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold font-headline">
                  Major lawsuit threatens the organization&apos;s future
                </CardTitle>
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
                  </strong>{' '}
                  The lawsuit has exposed troubling practices within the
                  community.
                </p>
                <p>
                  Court documents reveal allegations that the organization
                  shared private text messages, personal medical information,
                  and photos of children without consent. The community
                  allegedly enabled members to mock and harass victims of
                  infidelity, with accusations of contacting victims&apos;
                  therapists and making inappropriate statements about their
                  mental health. These practices have led to a GoFundMe campaign
                  supporting the defendant and increased scrutiny of the
                  organization&apos;s methods.
                </p>
                <p>
                  Critics describe the community as promoting &quot;depraved petty
                  behavior&quot; and creating &quot;a horrifying place for only
                  UNhealing to occur.&quot; Reviews suggest the platform encourages
                  gaslighting and gives false hope to affair partners seeking to
                  legitimize their relationships. However, some supporters praise
                  the &quot;well-executed conversations about deeper human
                  psychology&quot; and value the sense of connection within the
                  community.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold font-headline">
                  Monetizing controversy through multiple revenue streams
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-base text-card-foreground">
                <p>
                  The business model relies on diversified income sources that
                  capitalize on the emotional vulnerability of people affected
                  by infidelity. Revenue comes from community membership fees,
                  individual coaching sessions priced at premium rates despite
                  Smallwood&apos;s lack of credentials, podcast monetization
                  through sponsorships and advertising, retreat fees for events
                  in Puerto Vallarta, Mexico, and online courses marketed to
                  those seeking guidance through affair situations.
                </p>
                <p>
                  <strong>
                    The organization&apos;s expansion to include licensed
                    professionals appears designed to legitimize services that
                    began without proper qualifications
                  </strong>
                  , potentially shielding the business from criticism about
                  unqualified coaching. This strategic hiring of credentialed
                  team members like clinical therapist Carolina Vilalva
                  represents an evolution from the initial model built solely on
                  personal experience.
                </p>
              </CardContent>
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
                  digital age. While the organization claims to provide support
                  and understanding for those navigating complex relationship
                  dynamics, the pending lawsuit and numerous allegations of
                  harmful practices raise serious questions about the ethics of
                  profiting from infidelity experiences. The organization&apos;s
                  future depends on resolving legal challenges while attempting
                  to maintain credibility in an inherently controversial space
                  that many view as exploiting vulnerable individuals rather
                  than genuinely helping them heal.
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
                  Sources and Evidence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-2 pl-5 text-base text-card-foreground">
                  <li>
                    <a
                      href="https://www.scribd.com/document/808219056/The-Other-Woman-and-The-Wife-LLC-vs-Kristen-Jacobs-Lawsuit-Countersuit"
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
                      href="https://www.themarysue.com/what-i-can-only-describe-as-pure-degeneracy-proud-cheater-sued-for-allegedly-using-cheating-coach-business-to-bully-betrayed-spouses/"
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      The Mary Sue: &quot;Proud Cheater Sued for Allegedly Using
                      Cheating Coach Business to Bully Betrayed Spouses&quot;
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://redcircle.com/shows/theotherwomanandthewife"
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      The Other Woman and the Wife Podcast
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.gofundme.com/f/help-kristen-stand-against-online-harassment-for-profit"
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Kristen Jacobs&apos; GoFundMe Campaign
                    </a>
                  </li>
                </ul>
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
