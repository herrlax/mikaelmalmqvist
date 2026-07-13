import React from 'react';
import { PageWrapper } from '../../components/PageWrapper';
import { Header } from '../../components/Header';

export const Guide: React.FC = () => {
  return (
    <PageWrapper>
      <Header />
      <div className="flex flex-col gap-6 h-full items-center w-full max-w-[900px]">
        <div className="w-full max-w-[600px] items-center flex flex-col gap-3">
          <div className="md:pt-8 pt-6 flex justify-center gap-2 flex-col">
            <p className="text-gray-700 text-base">
              Varmt välkomna till Kristinehamn, aka Lusasken, aka Krillehôla (kärt barn har många
              namn). Här är våra bästa tips inför er vistelse i vår hemstad:
            </p>
          </div>
          <div>
            <div className="md:pt-8 pt-6 flex justify-center gap-2 flex-col">
              <h3 className="font-professional-bold subtitle">Vid campingen</h3>
              <h4 className="font-professional-bold subtitle-small">Mat</h4>
              <p>
                Cirka 10 minuters promenad från campingen ligger{' '}
                <strong>Skymningen Mat & Café</strong>, perfekt för lunch eller fika!
              </p>
              <p>
                Mitt emot campingen hittas <strong>Restaurang Trossen</strong> som har bra lunch;
                däremot har de begränsade öppettider under helger – dubbelkolla detta innan ni går
                dit!
              </p>
              <p>
                <strong>Jacobs Pizzeria</strong>: Ett kulinariskt paradis för den kebabsuktande
                gästen man hittar på ca 15–20 minuters gångavstånd från campingen. Pizzan är stekhet
                och kebaben är alltid rakad från färsk stock.
              </p>
            </div>
            <div className="md:pt-8 pt-6 flex justify-center gap-2 flex-col">
              <h4 className="font-professional-bold subtitle-small">Aktiviteter</h4>
              <p>
                Det går att bada direkt vid campingen, och 250 meter bort hittas{' '}
                <strong>Skymningens</strong> badstrand. Kanoter finns också att hyra.
              </p>
              <p>
                Cyklar finns att hyra för en tur in till stan, eller varför inte längre ut i
                skärgården för att avnjuta stans stora (och fula) stolthet{' '}
                <strong>Picassostatyn</strong>? Ja, den designad av Pablo Picasso himself (men han
                satte aldrig sin fot i stan, hur mycket kommunen än vill skryta om sin unika
                Picasso-koppling). Tar man sig ut hit rekommenderas glass, fika eller mat på{' '}
                <strong>Picassos Veranda</strong>.
              </p>
            </div>
          </div>
          <div>
            <div className="md:pt-8 pt-6 flex justify-center gap-2 flex-col">
              <h3 className="font-professional-bold subtitle">I centrum</h3>
              <h4 className="font-professional-bold subtitle-small">Mat</h4>
              <p>
                Det är inte för inte som <strong>Oliveriet</strong> ofta klassas som Värmlands bästa
                restaurang – italienskt hantverk och deli at its finest! Här hittar man finfina
                napolitanska pizzor.
              </p>
              <p>
                <strong>Restaurang Parma</strong> har också autentisk italiensk mat. Det ligger
                centralt på Kungsgatan, med god öl på tapp.
              </p>
              <p>
                Vill man ha enklare italiensk mat är <strong>Pizzeria Charlies</strong> vår favorit
                bland småstadspizzorna. Här beställer man med fördel en <strong>Royal</strong>.
              </p>
              <p>
                Mysigaste läget (vid vattnet) får man på <strong>Mastmagasinet</strong>. Det var
                även här vi spenderade vår gymnasiebal (och diverse utekvällar).
              </p>
              <p>
                Klassisk pubmat hittas på <strong>Steak House 1895</strong> och{' '}
                <strong>The Pub 27</strong>.
              </p>
            </div>
            <div className="md:pt-8 pt-6 flex justify-center gap-2 flex-col">
              <h4 className="font-professional-bold subtitle-small">Fika</h4>
              <p>
                Vår solklara favorit är mysiga <strong>Krukmakeri Hemjord</strong> som säljer
                egengjord glass och fika, otroligt kaffe och te, och även egentillverkad keramik.
              </p>
              <p>
                <strong>Bageri Artisan</strong> har fantastiskt fikabröd, så bra att de blev virala
                när en viss Benjamin Ingrosso ansåg att deras bageri i Karlstad tillverkar Sveriges
                godaste kanelbullar (om han har rätt får ni avgöra själva).
              </p>
            </div>
            <div className="md:pt-8 pt-6 flex justify-center gap-2 flex-col">
              <h4 className="font-professional-bold subtitle-small">Övrigt</h4>
              <p>
                Bästa sättet att ta sig mellan centrum och campingen? Med{' '}
                <a
                  target="_blank"
                  href="https://omtanksammakristinehamn.se/turisttag-lusen-2-0/"
                  className="underline"
                >
                  turisttåget Lusen
                </a>{' '}
                såklart! (eller kollektivtrfik. Sök resan på{' '}
                <a target="_blank" href="https://www.varmlandstrafik.se/" className="underline">
                  Värmlandstrafiks hemsida
                </a>
                .)
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};
