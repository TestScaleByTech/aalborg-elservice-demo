import Link from "next/link";

const areas = ["Aalborg", "Nørresundby", "Gistrup", "Hasseris", "Støvring"];

export function SiteFooter() {
  return (
    <footer className="border-t border-[#173244] bg-[#07141e] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f7b43e]">
            Aalborg El-service ApS
          </p>
          <p className="max-w-md text-sm leading-7 text-white/72">
            Demo-site bygget som et hurtigt, tydeligt og mobilvenligt udtryk for
            en moderne nordjysk elektriker.
          </p>
        </div>

        <div className="space-y-3 text-sm text-white/72">
          <p className="font-semibold uppercase tracking-[0.16em] text-white">
            Kontakt
          </p>
          <a href="tel:+4525705145">+45 25 70 51 45</a>
          <a className="block" href="mailto:kontakt@aalborg-elservice.dk">
            kontakt@aalborg-elservice.dk
          </a>
          <p>Højdedraget 30, 9530 Støvring</p>
        </div>

        <div className="space-y-3 text-sm text-white/72">
          <p className="font-semibold uppercase tracking-[0.16em] text-white">
            Områder
          </p>
          <div className="flex flex-wrap gap-2">
            {areas.map((area) => (
              <span
                className="rounded-full border border-white/12 px-3 py-1"
                key={area}
              >
                {area}
              </span>
            ))}
          </div>
          <Link className="block text-white" href="/kontakt">
            Se ydelser og kontaktmuligheder
          </Link>
        </div>
      </div>
    </footer>
  );
}
