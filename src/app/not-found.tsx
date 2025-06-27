
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <main className="text-center p-8 max-w-2xl mx-auto">
        <div className="bg-black p-4 inline-block rounded-lg border-2 border-gray-700 shadow-2xl">
            <Image
              src="/404-cat.jpg"
              alt="A calico cat's tail is sticking out from under a pile of papers, resembling the '404 Not Found' cat meme."
              width={750}
              height={600}
              className="object-cover"
            />
        </div>
        <p className="text-muted-foreground mt-8 mb-8 text-xl">
          Oops! It looks like the page you're looking for has gone into hiding.
        </p>
        <Button asChild size="lg">
          <Link href="/">Go Back to Home</Link>
        </Button>
      </main>
    </div>
  );
}
