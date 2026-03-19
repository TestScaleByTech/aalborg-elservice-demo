import {
  ArrowRight,
  Building2,
  FileCheck2,
  House,
  Mail,
  MapPin,
  Phone,
  ShieldCheck
} from "lucide-react";
import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const offers = [
  {
    icon: House,
    title: "Private hjem",
    items: ["Nye installationer", "Renovering af køkken og bad", "Fejlfinding og mindre opgaver"]
  },
  {
    icon: Building2,
    title: "Erhverv",
    items: ["Driftsopgaver", "Tilpasninger i lokaler", "Koordineret elarbejde ved ombygning"]
  },
  {
    icon: ShieldCheck,
    title: "Foreninger",
    items: ["Gennemgang af installationer", "Eltavler", "Løbende samarbejde og planlagt service"]
  }
];

const checklist = [
  "Kort beskrivelse af opgaven",
  "Adresse og ønsket tidspunkt",
  "Billeder af tavle, installation eller rum hvis relevant",
  "Om det haster, eller om opgaven kan planlægges"
];

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-5 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-5">
            <Badge>Kontakt & ydelser</Badge>
            <h1 className="text-5xl leading-[0.98] md:text-6xl">
              Tydelig næste handling, uanset om opgaven er akut eller planlagt.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-muted-foreground">
              Siden samler kontaktveje, dækningsområde og de vigtigste typer
              opgaver, så brugeren kan handle hurtigt uden at læse sig gennem en
              lang tekstblok.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href="tel:+4525705145">
                  Ring +45 25 70 51 45
                  <Phone className="size-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="mailto:kontakt@aalborg-elservice.dk">
                  Skriv til kontakt@aalborg-elservice.dk
                  <Mail className="size-4" />
                </a>
              </Button>
            </div>
          </div>

          <Card className="overflow-hidden bg-[#07141e] text-white">
            <CardContent className="grid gap-5 p-7">
              <div className="flex items-center gap-3 text-[#f7b43e]">
                <MapPin className="size-5" />
                <p className="text-sm font-semibold uppercase tracking-[0.18em]">
                  Kontaktoplysninger
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-[24px] border border-white/10 bg-white/6 p-5">
                  <p className="text-sm uppercase tracking-[0.18em] text-white/54">
                    Aalborg El-service
                  </p>
                  <a className="mt-3 block text-2xl text-white" href="tel:+4525705145">
                    +45 25 70 51 45
                  </a>
                  <a
                    className="mt-3 block text-white/74"
                    href="mailto:kontakt@aalborg-elservice.dk"
                  >
                    kontakt@aalborg-elservice.dk
                  </a>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-white/6 p-5">
                  <p className="text-sm uppercase tracking-[0.18em] text-white/54">
                    Adresse
                  </p>
                  <p className="mt-3 text-2xl text-white">Højdedraget 30</p>
                  <p className="mt-3 text-white/74">9530 Støvring</p>
                  <p className="mt-2 text-white/74">CVR 31066026</p>
                </div>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-[#0c1d28] p-5 text-white/76">
                Dækker Aalborg, Nørresundby, Gistrup, Hasseris, Svenstrup og
                øvrige dele af Nordjylland ved aftale.
              </div>
            </CardContent>
          </Card>
        </div>

        <section className="mt-12 grid gap-6 lg:grid-cols-3">
          {offers.map((offer) => {
            const Icon = offer.icon;
            return (
              <Card key={offer.title}>
                <CardContent className="space-y-5 p-7">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-[#d6e4ec] text-[#0b2433]">
                    <Icon className="size-6" />
                  </div>
                  <div>
                    <h2 className="text-3xl">{offer.title}</h2>
                    <ul className="mt-4 space-y-3 text-muted-foreground">
                      {offer.items.map((item) => (
                        <li className="flex items-start gap-3" key={item}>
                          <span className="mt-2 size-2 rounded-full bg-[#f7b43e]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="bg-[#f6efe4]">
            <CardContent className="space-y-5 p-7">
              <div className="flex items-center gap-3 text-[#0c2433]">
                <FileCheck2 className="size-5" />
                <p className="text-sm font-semibold uppercase tracking-[0.18em]">
                  Før du ringer eller skriver
                </p>
              </div>
              <ul className="space-y-4">
                {checklist.map((item) => (
                  <li className="flex gap-3" key={item}>
                    <span className="mt-1 size-6 rounded-full bg-[#07141e] text-center text-sm leading-6 text-white">
                      +
                    </span>
                    <span className="leading-7 text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#0d2535] text-white">
            <CardContent className="space-y-5 p-7">
              <Badge className="border-white/14 bg-white/6 text-white/72">
                Hurtig vej tilbage
              </Badge>
              <h2 className="text-4xl">
                Forsiden og kontaktsiden arbejder sammen som en enkel salgstragt.
              </h2>
              <p className="max-w-2xl leading-8 text-white/72">
                Forsiden bygger tillid og retning. Kontaktsiden samler alt det
                praktiske. Det giver en hurtigere vej fra nysgerrig besøgende til
                reel henvendelse.
              </p>
              <Button asChild className="bg-[#f7b43e] text-[#07141e] hover:bg-[#f3aa24]" size="lg">
                <Link href="/">
                  Tilbage til forsiden
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
