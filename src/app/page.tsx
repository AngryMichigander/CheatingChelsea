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
              The story of manipulation, harassment, and the fight for justice.
            </p>
          </header>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold font-headline">
                  Who is Chelsea Smallwood?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-base text-card-foreground">
                <p>
                  Chelsea Smallwood is the creator and leader of a group known
                  as &quot;The Other Woman and the Wife.&quot; Marketed as a space for
                  female empowerment, this group has a darker side. It allegedly
                  encourages and normalizes infidelity, creating a platform
                  where individuals share intimate details of their affairs.
                </p>
                <p>
                  While claiming to support women, the group&apos;s activities have
                  led to significant emotional distress and real-world harm for
                  those targeted by its members. The platform has been used to
                  share private information without consent, blurring the lines
                  between empowerment and exploitation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold font-headline">
                  The Harm Caused: Kristen Jacobs&apos; Story
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-base text-card-foreground">
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
                  example of how the group&apos;s rhetoric of &quot;empowerment&quot; can
                  be twisted into a weapon for causing harm, profiting from
                  others&apos; suffering, and fostering a culture of
                  cyberbullying.
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
          </div>
        </div>
      </main>

      <footer className="text-center py-6 text-sm text-muted-foreground">
        <div className="container mx-auto">
          <p>
            This website, cheatingchelsea.com, is dedicated to raising
            awareness and supporting the victims.
          </p>
          <p>&copy; 2024 Cheating Chelsea Exposed. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
