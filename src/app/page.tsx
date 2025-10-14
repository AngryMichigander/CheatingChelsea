
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Cheating Chelsea Exposed - Support Kristen Jacobs",
  description: "Exposing harmful activities by Chelsea Smallwood and 'The Other Woman and the Wife' group. Support Kristen Jacobs, a victim of false accusations and family court injustice.",
  keywords: "chelsea smallwood, kristen jacobs, family court, false accusations, parental alienation, gofundme support, texas divorce",
  authors: [{ name: "Cheating Chelsea" }],
  openGraph: {
    title: "Cheating Chelsea Exposed - Stand Against Injustice",
    description: "Learn the truth about Chelsea Smallwood's harmful actions and support Kristen Jacobs through her legal battle against false accusations.",
    url: "https://cheatingchelsea.com",
    siteName: "Cheating Chelsea",
    type: "website",
    images: [
      {
        url: "https://cheatingchelsea.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cheating Chelsea Exposed"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cheating Chelsea Exposed",
    description: "Exposing harmful activities and supporting victims of false accusations",
    images: ["https://cheatingchelsea.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://cheatingchelsea.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Home() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-primary font-headline">
              Cheating Chelsea Exposed
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">
              Exposing the harm caused by Chelsea Smallwood and &quot;The Other
              Woman and the Wife&quot; group.
            </p>
          </header>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <h2 className="text-2xl font-bold font-headline leading-none tracking-tight">
                  Who is Chelsea Smallwood?
                </h2>
              </CardHeader>
              <CardContent className="space-y-4 text-lg text-card-foreground">
                <p>
                  Chelsea Smallwood is the creator and leader of a group known
                  as &quot;The Other Woman and the Wife.&quot; Marketed as a space for
                  female empowerment, this group has a darker side. It allegedly
                  encourages and normalizes infidelity, creating a platform
                  where individuals share intimate details of their affairs.
                </p>
                <p>
                  While claiming to support women, the group&apos;s activities have led
                  to significant emotional distress and real-world harm for
                  those targeted by its members. The platform has been used to
                  share private information without consent, blurring the lines
                  between empowerment and exploitation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h2 className="text-2xl font-bold font-headline leading-none tracking-tight">
                  The Harm Caused: Kristen Jacobs&apos; Story
                </h2>
              </CardHeader>
              <CardContent className="space-y-4 text-lg text-card-foreground">
                <p>
                  Kristen Jacobs is one of the victims of the activities
                  fostered by Chelsea&apos;s group. She discovered that her private
                  text messages and personal photos were being shared and
                  mocked within &quot;The Other Woman and the Wife.&quot; This was not
                  just a private matter; this sensitive content was allegedly
                  used to promote the group and Chelsea&apos;s brand, turning
                  Kristen&apos;s personal pain into a tool for profit and
                  recruitment.
                </p>
                <p>
                  This gross violation of privacy constitutes online harassment
                  and has had a severe impact on Kristen&apos;s life. It is a stark
                  example of how the group&apos;s rhetoric of &quot;empowerment&quot; can be
                  twisted into a weapon for causing harm, profiting from
                  others&apos; suffering, and fostering a culture of cyberbullying.
                </p>
              </CardContent>
            </Card>

            <div className="flex flex-wrap justify-center items-center gap-4 my-8">
              <Button asChild variant="outline" size="lg">
                <Link href="/long-story">Read The Full Story &raquo;</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/gallery">View Video Gallery &raquo;</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/dadvocate">Dadvocate Videos &raquo;</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/case-updates">Case Updates &raquo;</Link>
              </Button>
            </div>

            <Card className="border-2 border-destructive shadow-lg">
              <CardHeader className="text-center">
                <h2 className="text-3xl font-bold font-headline text-primary leading-none tracking-tight">
                  Stand With Kristen
                </h2>
                <CardDescription className="text-lg pt-2">
                  Help her fight back against online harassment and
                  exploitation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center text-lg text-card-foreground">
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
                    className="text-xl font-bold"
                  >
                    Support Kristen&apos;s GoFundMe
                  </a>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <h2 className="text-2xl font-bold font-headline leading-none tracking-tight">
                  Sources and Evidence
                </h2>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-2 pl-5 text-base text-card-foreground">
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
                      href="https://www.gofundme.com/f/help-kristen-stand-against-online-harassment-for-profit"
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Kristen Jacobs&apos; GoFundMe Campaign
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
                </ul>
              </CardContent>
            </Card>
          </div>
    </div>
  );
}
