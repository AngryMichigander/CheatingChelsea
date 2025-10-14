'use client';

import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { legalDocuments, timelineEvents, type LegalDocument } from '@/lib/legal-documents';
import { Download, FileText, Scale, Home, Filter } from 'lucide-react';
import { useState, useMemo } from 'react';

export default function CaseUpdatesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Get unique categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(legalDocuments.map(doc => doc.category)));
    return ['all', ...cats.sort()];
  }, []);

  // Filter documents based on selected category and sort by date (newest first)
  const filteredDocuments = useMemo(() => {
    const filtered = selectedCategory === 'all'
      ? legalDocuments
      : legalDocuments.filter(doc => doc.category === selectedCategory);

    return filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [selectedCategory]);

  // Format category labels
  const formatCategory = (cat: string) => {
    return cat.split('-').map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <div className="flex justify-center mb-4">
          <Scale className="h-16 w-16 text-primary" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Legal Case Updates</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Tracking the ongoing litigation with transparency and documentation.
          All filings and orders are public record. Case No. 24-498, Miami County Ohio Court of Common Pleas.
        </p>
      </div>

      {/* Timeline Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Case Timeline</h2>
        <p className="text-muted-foreground mb-6">
          Follow the progression of the case from initial filing through current status.
          Click document links to download relevant court filings.
        </p>
        <div className="relative border-l-2 border-primary/20 pl-8 space-y-8">
          {timelineEvents.map((event) => {
            const document = event.documentId
              ? legalDocuments.find(d => d.id === event.documentId)
              : null;

            return (
              <div key={event.id} className="relative">
                {/* Timeline dot */}
                <div className="absolute -left-[2.125rem] top-1.5 h-4 w-4 rounded-full bg-primary border-4 border-background" />

                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant={event.type === 'order' ? 'default' : 'secondary'}>
                            {event.type}
                          </Badge>
                          <span className="text-sm text-muted-foreground">
                            {new Date(event.date).toLocaleDateString('en-US', {
                              month: 'long',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </span>
                        </div>
                        <CardTitle className="text-xl">{event.title}</CardTitle>
                      </div>
                    </div>
                    <CardDescription>{event.description}</CardDescription>
                  </CardHeader>

                  {document && (
                    <CardContent>
                      <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-primary" />
                          <div>
                            <p className="font-medium">{document.title}</p>
                            <p className="text-sm text-muted-foreground">{document.fileSize}</p>
                          </div>
                        </div>
                        <Button asChild size="sm">
                          <a
                            href={`/legal-documents/${document.filename}`}
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  )}
                </Card>
              </div>
            );
          })}
        </div>
      </section>

      <Separator className="my-12" />

      {/* Documents Section */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold">Court Documents</h2>
            <p className="text-muted-foreground mt-2">
              {filteredDocuments.length} {selectedCategory === 'all' ? 'total' : formatCategory(selectedCategory)} documents available
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Filter by:</span>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(cat)}
            >
              {formatCategory(cat)}
              {cat !== 'all' && (
                <span className="ml-1 text-xs opacity-70">
                  ({legalDocuments.filter(d => d.category === cat).length})
                </span>
              )}
            </Button>
          ))}
        </div>

        {/* Documents Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {filteredDocuments.map((doc) => (
            <Card key={doc.id} className="flex flex-col">
              <CardHeader>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <Badge variant="outline">{formatCategory(doc.category)}</Badge>
                  <span className="text-sm text-muted-foreground">
                    {new Date(doc.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                </div>
                <CardTitle className="text-lg">{doc.title}</CardTitle>
                <CardDescription>{doc.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="mb-4">
                  <p className="text-sm font-medium mb-2">Significance:</p>
                  <p className="text-sm text-muted-foreground">{doc.significance}</p>
                  {doc.parties && doc.parties.length > 0 && (
                    <>
                      <p className="text-sm font-medium mt-3 mb-1">Parties:</p>
                      <p className="text-xs text-muted-foreground">{doc.parties.join(', ')}</p>
                    </>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{doc.fileSize}</span>
                  <Button asChild>
                    <a
                      href={`/legal-documents/${doc.filename}`}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-12" />

      {/* Support Section */}
      <section className="text-center bg-muted/50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Support the Legal Fight</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Legal representation and pursuing justice require resources.
          Your support helps cover legal fees and court costs.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button asChild size="lg">
            <a
              href="https://www.gofundme.com/f/help-kristen-fight-back-against-defamation"
              target="_blank"
              rel="noopener noreferrer"
            >
              Support on GoFundMe
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/">
              <Home className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
