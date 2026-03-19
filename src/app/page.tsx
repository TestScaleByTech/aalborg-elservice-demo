import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Bolt,
  Building2,
  Clock3,
  House,
  PhoneCall,
  ShieldCheck
} from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const serviceCards = [
  {
    icon: House,
    title: "El til private",
    text: "Nye installationer, fejlfinding, køkken, bad og energioptimering udført med ordentlig finish."
  },
  {
    icon: Building2,
    title: "El til erhverv",
    text: "Driftssikre løsninger til kontor, butik, lager og mindre entrepriser med klar koordinering."
  },
  {
    icon: ShieldCheck,
    title: "Boligforeninger",
    text: "Fast samarbejde om eltavler, gennemgang af installationer og løbende service uden lange svartider."
  }
];

const metrics = [
  { value: "24 t", label: "hurtigt svar på tilbud og akutte opgaver" },
  { value: "3 spor", label: "private, erhverv og foreninger" },
  { value: "1 kontakt", label: "klar dialog fra første opkald til sidste gennemgang" }
];

const process = [
  "Du ringer eller sender billeder af opgaven.",
  "Vi afklarer løsning, tidspunkt og prisniveau hurtigt.",
  "Arbejdet udføres rent, sikkert og med tydelig afslutning."
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden bg-[#07141e] text-white">
          <div className="absolute inset-0 bg-hero-radial" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#07141e] to-transparent" />
          <div className="relative mx-auto grid max-w-6xl gap-14 px-5 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
            <div className="space-y-8">
              <Badge className="border-white/20 bg-white/8 text-white/78">
                Elektriker i Aalborg med tempo og struktur
              </Badge>
              <div className="space-y-6">
                <h1 className="max-w-3xl text-5xl leading-[0.95] text-white md:text-7xl">
                  Elarbejde, der føles lige så skarpt som det ser ud.
                </h1>
                <p className="max-w-xl text-lg leading-8 text-white/72">
                  En moderne demo-forside til Aalborg El-service ApS med fokus
                  på hurtig kontakt, tydelige ydelser og et mere markant visuelt
                  udtryk end den klassiske håndværkerside.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild className="bg-[#f7b43e] text-[#07141e] hover:bg-[#f3aa24]" size="lg">
                  <Link href="/kontakt">
                    Se ydelser og kontakt
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild className="border-white/18 bg-white/6 text-white hover:bg-white/12" size="lg" variant="outline">
                  <a href="tel:+4525705145">
                    Ring +45 25 70 51 45
                    <PhoneCall className="size-4" />
                  </a>
                </Button>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {metrics.map((item) => (
                  <Card
                    className="border-white/10 bg-white/6 text-white shadow-none backdrop-blur"
                    key={item.label}
                  >
                    <CardContent className="space-y-2 p-5">
                      <div className="text-3xl font-semibold text-[#f7b43e]">
                        {item.value}
                      </div>
                      <p className="text-sm leading-6 text-white/68">
                        {item.label}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="overflow-hidden border-white/10 bg-[#0d2230] text-white shadow-none">
              <CardContent className="grid gap-6 p-6">
                <div className="flex items-center justify-between rounded-[24px] border border-white/10 bg-[#102a3a] p-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-white/54">
                      Demo visual
                    </p>
                    <p className="mt-2 text-xl">
                      Lokal SVG-illustration til heroområdet
                    </p>
                  </div>
                  <Bolt className="size-8 text-[#f7b43e]" />
                </div>
                <div className="rounded-[28px] border border-white/10 bg-[#0a1922] p-4">
                  <Image
                    alt="Illustration af servicebil og installationsflow"
                    className="h-auto w-full"
                    height={720}
                    priority
                    src="/electrician-hero.svg"
                    width={920}
                  />
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    "Tydelig CTA",
                    "Mere karakterfuld typografi",
                    "Hurtig statisk levering"
                  ].map((note) => (
                    <div
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/72"
                      key={note}
                    >
                      {note}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="grid-shell">
          <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
            <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="space-y-3">
                <Badge>Tre tydelige serviceområder</Badge>
                <h2 className="max-w-2xl text-4xl leading-tight md:text-5xl">
                  Samme hold. Forskellige opgavetyper. Ingen uklar overlevering.
                </h2>
              </div>
              <p className="max-w-md text-base leading-7 text-muted-foreground">
                Strukturen er bygget til at lede besøgende hurtigt videre til den
                rigtige type opgave og et konkret næste skridt.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {serviceCards.map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.title}>
                    <CardContent className="space-y-5 p-7">
                      <div className="flex size-12 items-center justify-center rounded-2xl bg-[#d6e4ec] text-[#0b2433]">
                        <Icon className="size-6" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-2xl">{item.title}</h3>
                        <p className="leading-7 text-muted-foreground">
                          {item.text}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-8 lg:px-8 lg:py-16">
          <Card className="overflow-hidden bg-[#f6efe4]">
            <CardContent className="grid gap-8 p-7 lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
              <div className="space-y-5">
                <Badge className="bg-white/70">Sådan fungerer siden</Badge>
                <h2 className="text-4xl leading-tight">
                  Mindre støj. Mere retning for kunder, der bare skal have løst
                  opgaven.
                </h2>
                <p className="leading-7 text-muted-foreground">
                  Designet prioriterer telefonopkald, troværdige serviceområder
                  og korte forklaringer. Det gør siden hurtig at afkode, også på
                  mobil.
                </p>
                <div className="rounded-[28px] border border-[#d3c8b5] bg-white/70 p-4">
                  <Image
                    alt="Illustration af planlægning og servicetrin"
                    className="h-auto w-full"
                    height={460}
                    src="/service-flow.svg"
                    width={760}
                  />
                </div>
              </div>
              <div className="grid gap-4">
                {process.map((step, index) => (
                  <div
                    className="flex gap-4 rounded-[26px] border border-[#d8cdbd] bg-white/80 p-5"
                    key={step}
                  >
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#07141e] text-sm font-semibold text-white">
                      0{index + 1}
                    </div>
                    <div className="space-y-2">
                      <p className="text-lg font-medium">Fase {index + 1}</p>
                      <p className="leading-7 text-muted-foreground">{step}</p>
                    </div>
                  </div>
                ))}
                <div className="rounded-[26px] bg-[#0e2838] p-6 text-white">
                  <div className="mb-3 flex items-center gap-3 text-[#f7b43e]">
                    <Clock3 className="size-5" />
                    <p className="text-sm font-semibold uppercase tracking-[0.16em]">
                      Hurtig respons
                    </p>
                  </div>
                  <p className="max-w-md text-lg leading-8 text-white/78">
                    CTA’er, kontaktinfo og servicekort er bevidst gentaget, så
                    brugeren ikke skal lede efter næste handling.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mx-auto max-w-6xl px-5 pb-20 lg:px-8">
          <Card className="bg-[#07141e] text-white">
            <CardContent className="flex flex-col gap-6 p-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-3">
                <Badge className="border-white/15 bg-white/6 text-white/68">
                  Kontakt nu
                </Badge>
                <h2 className="text-4xl">Klar til at gøre siden levende?</h2>
                <p className="max-w-xl leading-7 text-white/72">
                  Demoen er bygget til at kunne publiceres hurtigt og give et
                  bedre førstehåndsindtryk med det samme.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild className="bg-[#f7b43e] text-[#07141e] hover:bg-[#f3aa24]" size="lg">
                  <Link href="/kontakt">
                    Åbn kontaktsiden
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild className="border-white/14 bg-white/6 text-white hover:bg-white/10" size="lg" variant="outline">
                  <a href="mailto:kontakt@aalborg-elservice.dk">
                    Skriv en mail
                    <BadgeCheck className="size-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
