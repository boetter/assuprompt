/**
 * prompts.js – generated from Prompt-bibliotek.txt.
 * Do not edit by hand. Run `node scripts/build-data.mjs` to regenerate.
 *
 * Prompts: 132 · Categories: 15
 */
window.PROMPTS_DATA = {
  "categories": [
    {
      "id": "1",
      "name": "Kunderesearch og mødeforberedelse",
      "color": "#2563eb",
      "icon": "search"
    },
    {
      "id": "2",
      "name": "Mødenoter og referater",
      "color": "#7c3aed",
      "icon": "notes"
    },
    {
      "id": "3",
      "name": "Kundekommunikation - privatkunder",
      "color": "#059669",
      "icon": "user"
    },
    {
      "id": "4",
      "name": "Kundekommunikation - erhvervskunder",
      "color": "#0891b2",
      "icon": "briefcase"
    },
    {
      "id": "5",
      "name": "Tilbudsskrivning og præsentationer",
      "color": "#d97706",
      "icon": "document"
    },
    {
      "id": "6",
      "name": "Risikovurdering og analyse",
      "color": "#dc2626",
      "icon": "shield"
    },
    {
      "id": "7",
      "name": "Skadesbehandling",
      "color": "#ea580c",
      "icon": "wrench"
    },
    {
      "id": "8",
      "name": "Salg og kundeindvendinger",
      "color": "#db2777",
      "icon": "chat"
    },
    {
      "id": "9",
      "name": "Brancher",
      "color": "#0d9488",
      "icon": "layers"
    },
    {
      "id": "10",
      "name": "Produktforståelse og forklaringer",
      "color": "#4f46e5",
      "icon": "book"
    },
    {
      "id": "11",
      "name": "Excel, data og tabeller",
      "color": "#65a30d",
      "icon": "table"
    },
    {
      "id": "12",
      "name": "Intern kommunikation",
      "color": "#475569",
      "icon": "team"
    },
    {
      "id": "13",
      "name": "Compliance og sikkerhed",
      "color": "#78350f",
      "icon": "lock"
    },
    {
      "id": "14",
      "name": "Refleksion og svære situationer",
      "color": "#e11d48",
      "icon": "sparkle"
    },
    {
      "id": "15",
      "name": "Planlægning og faste rutiner",
      "color": "#a21caf",
      "icon": "calendar"
    }
  ],
  "prompts": [
    {
      "id": "1.1",
      "categoryId": "1",
      "categoryName": "Kunderesearch og mødeforberedelse",
      "title": "Erhvervskunde-briefing før mødet",
      "body": "ROLLE: Du er min research-assistent med mange års erfaring i dansk\nerhvervsforsikring.\n\nKONTEKST: Jeg er erhvervsassurandør og skal i næste uge holde et\nforberedende møde med virksomheden [navn, CVR-nummer]. Mit mål er at\nforstå deres forretning og identificere forsikringsbehov.\n\nMETODE: Lav en briefing på maks 1 A4-side:\n1. Kerneforretning og seneste regnskabstal (omsætning, resultat, ansatte)\n2. Ejerstruktur og nøglepersoner\n3. Tre største forsikringsmæssige risikoeksponeringer ud fra branche og størrelse\n4. Nyheder fra seneste 6 måneder der påvirker forsikringsbehov\n5. Tre åbnende spørgsmål til mødet\nKildehenvisninger under hvert punkt. Vær skeptisk - sig \"jeg ved det ikke\"\nfrem for at gætte."
    },
    {
      "id": "1.2",
      "categoryId": "1",
      "categoryName": "Kunderesearch og mødeforberedelse",
      "title": "Brancheresearch med forsikringsvinkel",
      "body": "ROLLE: Du er brancheanalytiker med særligt fokus på forsikringsrisici\ni danske brancher.\n\nKONTEKST: Jeg er erhvervsassurandør og skal rådgive en virksomhed inden for [branche] om deres forsikringsprogram.\n\nMETODE: Giv mig:\n- Markedsstørrelse og vækstrate i Danmark\n- De 5 største aktører og deres typiske risikoprofil\n- Vigtigste forandringer i branchen de kommende 2-3 år der påvirker forsikringsbehov\n- Regulatoriske ændringer (fx nye krav til erhvervsansvar, cyber, miljø)\n- Typiske skadesscenarier og risikoeksponeringer i branchen\nAngiv danske kilder - og kun kilder du faktisk har fundet. Skriv\n\"usikkert, bør verificeres\" ved tal du ikke kan dokumentere, og sig\nhellere \"jeg ved det ikke\" end at gætte."
    },
    {
      "id": "1.3",
      "categoryId": "1",
      "categoryName": "Kunderesearch og mødeforberedelse",
      "title": "Privatkundeforberedelse fra stamdata",
      "body": "ROLLE: Du er min erfarne kollega-assurandør med 20 års erfaring i\nprivatkunde-rådgivning (indbo, hus, bil, liv, ulykke, pension).\n\nKONTEKST: Jeg er assurandør og skal møde en familie jeg kender disse\noplysninger om:\n- [familiesituation: alder, børn og deres alder]\n- [bolig: type, købsår, pris, belåning]\n- [beskæftigelse: fx selvstændig, funktionær]\n- [særlige forhold: fx sommerhus, arv, hobbyer med risiko]\n- [relation: ny eller eksisterende kunde, kendte dækninger]\n\nMETODE:\n1. De 5 vigtigste spørgsmål at åbne mødet med\n2. De 3 største forsikringsmæssige blinde vinkler jeg bør adressere\n3. To-tre forsikringsprodukter de sandsynligvis mangler, og hvorfor\n4. En mødedagsorden på 60 min til en samlet forsikringsgennemgang\nTone: kollegial, ikke salgsagtig."
    },
    {
      "id": "1.4",
      "categoryId": "1",
      "categoryName": "Kunderesearch og mødeforberedelse",
      "title": "Sammenlign forsikringsprofilen i tre virksomheder",
      "body": "ROLLE: Du er min analytiker-kollega med speciale i erhvervsforsikring.\n\nKONTEKST: Jeg er erhvervsassurandør og rådgiver tre virksomheder inden for [branche]: A [navn], B [navn], C [navn].\nHvad jeg selv ved om dem: [indsæt evt. nøgletal eller noter].\n\nMETODE: Sammenlign dem på:\n- Størrelse og markedsposition\n- Forretningsmodel og risikoprofil\n- Sandsynlig forsikringsdækning i branchen\n- Hvor de adskiller sig fra hinanden rent forsikringsmæssigt\nMarkér tydeligt hvad der er antagelser, og skriv \"ukendt\" hvor du\nmangler data. Giv det som en tabel. Slut med 3 observationer jeg kan bruge til at\ntilpasse min rådgivning."
    },
    {
      "id": "1.5",
      "categoryId": "1",
      "categoryName": "Kunderesearch og mødeforberedelse",
      "title": "Prospektering af nye erhvervskunder",
      "body": "ROLLE: Du er min prospekterings-assistent med forsikringsblik.\n\nKONTEKST: Jeg er erhvervsassurandør i området [by/region] og\nspecialiserer mig i [branche/virksomhedsstørrelse]. Jeg søger\nvirksomheder hvor der er sandsynlighed for at deres forsikringsprogram\nkunne optimeres.\n\nMETODE: To trin:\n1. Beskriv min idealkundeprofil og de 3-5 bedste steder at finde den\nslags virksomheder (fx CVR/Virk, Proff.dk, brancheforeninger, lokale\nerhvervsnetværk) - med konkrete søgekriterier.\n2. Kun hvis du har adgang til websøgning: Foreslå virksomheder du kan\ndokumentere med link - hellere fire verificerede end ti gættede.\nFor hver: hvorfor den er et godt match, én hypotese om hvad der kan\nvære underdækket, og én måde at starte samtalen på.\nHar du ikke websøgning, så sig det, og lav kun trin 1."
    },
    {
      "id": "1.6",
      "categoryId": "1",
      "categoryName": "Kunderesearch og mødeforberedelse",
      "title": "Landmandsforberedelse",
      "body": "ROLLE: Du er min erfarne kollega med 20 års erfaring i landbrugs-\nforsikring.\n\nKONTEKST: Jeg er erhvervsassurandør og skal om en time besøge en\nlandmand der driver [type brug: malkekvæg/svin/planteavl] med\n[antal dyr/hektar]. Han overvejer [konkret ændring].\n\nMETODE: Giv mig de 5 vigtigste spørgsmål. Rækkefølge:\n1. Dyre/afgrøde-forsikring\n2. Driftstab\n3. Maskin/teknologi\n4. Brand bygninger\n5. Ansvar\nFormat: Tabel med Område / Spørgsmål / Hvad jeg skal lytte efter.\nMaks 15 ord pr. felt. Jordnær tone, ingen forsikringsjargon over for\nlandmanden. (Skal du bruge en fuld risikovurdering af bedriften, så\nbrug prompt 9.1.)"
    },
    {
      "id": "1.7",
      "categoryId": "1",
      "categoryName": "Kunderesearch og mødeforberedelse",
      "title": "Forbered genforhandling af forsikringsprogram",
      "body": "ROLLE: Du er min erfarne forsikringsrådgiver-kollega med erfaring i\nsvære genforhandlinger.\n\nKONTEKST: Jeg er assurandør og skal holde en genforhandling med en\neksisterende erhvervskunde [kort beskrivelse]. De har trykket på prisen\nog overvejer at skifte selskab.\n\nMETODE: Forbered mig:\n1. Tre argumenter for at blive hos os ud over pris (fx service,\nskadesbehandling, lokal kontakt)\n2. Tre typiske pris-modargumenter fra konkurrenter og hvordan jeg\nhåndterer dem\n3. En fallback-position hvis prisen ikke kan matches\n4. Afslutningssætning hvis de alligevel vælger at gå"
    },
    {
      "id": "1.8",
      "categoryId": "1",
      "categoryName": "Kunderesearch og mødeforberedelse",
      "title": "Kom ind i ny branche jeg ikke forsikringsmæssigt kender",
      "body": "ROLLE: Du er min erfarne kollega i forsikringsbranchen.\n\nKONTEKST: Jeg er assurandør og har mulighed for at arbejde med en ny\ntype kunde - [beskriv branche]. Jeg har aldrig forsikret denne branche\nfør og skal op i tempo hurtigt.\n\nMETODE: Lav en førstehjælpsguide:\n- Branchens særlige risici\n- Typiske forsikringsbehov og obligatoriske dækninger\n- 10 nøgletermer fra branchen jeg skal kende\n- Tre typiske faldgruber ved at forsikre denne branche\n- Fem gode spørgsmål til det første kundemøde\nAngiv kilder hvor du kan. Sig \"jeg ved det ikke\" frem for at gætte -\nsærligt om obligatoriske dækninger og lovkrav."
    },
    {
      "id": "1.9",
      "categoryId": "1",
      "categoryName": "Kunderesearch og mødeforberedelse",
      "title": "Vurdering af kundens nuværende forsikringsprogram",
      "body": "ROLLE: Du er min analytiker-kollega med speciale i forsikringsprogrammer.\n\nKONTEKST: Jeg er assurandør og har fået indsigt i en potentiel kundes\nnuværende forsikringsdækninger fra et andet selskab. Oversigten: [indsæt]\n\nMETODE: Vurdér:\n1. Er der huller i dækningen?\n2. Er der overlap/dobbeltdækning?\n3. Er selvrisikoerne fornuftige ift. kundens situation?\n4. Hvilke tre anbefalinger ville du give kunden?\nVær direkte og konkret. Undgå generiske råd."
    },
    {
      "id": "1.10",
      "categoryId": "1",
      "categoryName": "Kunderesearch og mødeforberedelse",
      "title": "Læs kundens årsrapport med forsikringsbriller på",
      "body": "ROLLE: Du er min økonomiske analytiker med fokus på forsikringsrelevante\nrisici.\n\nKONTEKST: Jeg er erhvervsassurandør og uploader en kundes årsrapport.\nJeg skal forstå deres økonomi som baggrund for forsikringsrådgivning.\n\nMETODE:\n1. Opsummér økonomien i 5 bullet points (i dagligdagssprog)\n2. Identificér 3 forhold i regnskabet der signalerer nye eller ændrede\nforsikringsbehov (fx nyt datterselskab, større lager, flere ansatte,\neksport til nye markeder)\n3. Foreslå 3 konkrete rådgivningsemner jeg kan bringe op\n4. Formulér en åbningssætning der viser jeg har læst rapporten"
    },
    {
      "id": "1.11",
      "categoryId": "1",
      "categoryName": "Kunderesearch og mødeforberedelse",
      "title": "Generationsskifte - forsikringsvinkel",
      "body": "ROLLE: Du er min forsikringsrådgiver-kollega med speciale i\ngenerationsskifter i dansk erhvervsliv.\n\nKONTEKST: Jeg er erhvervsassurandør og har en kunde der står over for\net generationsskifte i [branche]: [kort beskrivelse af\nvirksomhed og skiftet].\n\nMETODE: Giv mig:\n1. De 5 vigtigste forsikringsmæssige overvejelser ved skiftet\n(fx nøglepersonforsikring, ejerskifte i policer, nye risikoprofiler)\n2. Tre forsikringsprodukter der typisk bliver aktuelle\n3. Tre typiske faldgruber ved generationsskifter set fra\nforsikringsvinkel\n4. En naturlig åbning til samtalen med kunden"
    },
    {
      "id": "1.12",
      "categoryId": "1",
      "categoryName": "Kunderesearch og mødeforberedelse",
      "title": "Årsmøde med eksisterende kunde",
      "body": "ROLLE: Du er min forberedelses-assistent til årlige\nforsikringsgennemgangsmøder.\n\nKONTEKST: Jeg er assurandør og skal holde det årlige gennemgangsmøde\nmed en familiekunde. Sidste møde var for [antal] måneder siden. Noter fra\nsidst: [indsæt]\n\nMETODE:\n1. Tjekliste over ting at følge op på fra sidste møde\n2. Temaer jeg bør tjekke i mit selskabs egne produktnyheder inden\nmødet (fx indeksregulering, ændrede vilkår, nye dækninger). Nyt fra\nmit selskab siden sidst: [indsæt evt. produktnyheder]. Markér at\nlisten er tjekpunkter, ikke fakta\n3. Tre trin til et godt mødeforløb\n4. En venlig indledende mail der bekræfter mødet"
    },
    {
      "id": "1.13",
      "categoryId": "1",
      "categoryName": "Kunderesearch og mødeforberedelse",
      "title": "Hurtig research om nyt forsikringsprodukt",
      "body": "ROLLE: Du er min forsikringsprodukt-specialist.\n\nKONTEKST: Jeg er assurandør og mit selskab har netop lanceret\n[produkt]. Jeg skal kunne præsentere det for kunder i morgen.\nProduktmateriale: [indsæt tekst fra produktark eller vilkår].\n\nMETODE:\n1. Produktets kernefordel i én sætning\n2. Tre typiske kundetyper det passer til\n3. Fem konkrete spørgsmål jeg kan stille for at afdække behov\n4. En 2-minutters elevatortale jeg kan sige til en kunde\nByg udelukkende på det indsatte materiale. Skriv \"fremgår ikke af\nmaterialet\" hvis noget mangler - opfind aldrig dækningsdetaljer."
    },
    {
      "id": "1.14",
      "categoryId": "1",
      "categoryName": "Kunderesearch og mødeforberedelse",
      "title": "Kundemødeforberedelse ud fra relationens historik",
      "body": "ROLLE: Du er min forsikringskollega.\n\nKONTEKST: Jeg er assurandør og skal ringe til [kunde] i morgen. Alle\nmine tidligere notater om dem: [indsæt]\n\nMETODE:\n1. Opsummér relationens forsikringsmæssige historik i 5 bullet points\n2. Identificér det vigtigste uafsluttede punkt\n3. Foreslå 3 åbningsspørgsmål\n4. Advar mig om ting jeg bør undgå baseret på historikken"
    },
    {
      "id": "2.1",
      "categoryId": "2",
      "categoryName": "Mødenoter og referater",
      "title": "Stikord → mødereferat",
      "body": "ROLLE: Du er min forsikrings-assistent der hjælper med at strukturere\nmødenoter fra kundemøder.\n\nKONTEKST: Jeg er assurandør. Mine stikord fra et møde med [kunde]:\n[indsæt stikord]\n\nMETODE: Lav et mødereferat med afsnittene:\n- Kundens nuværende situation (familiemæssigt/forretningsmæssigt +\nnuværende forsikringer)\n- Identificerede forsikringsbehov\n- Aftalt næste skridt\n- Frist\nFulde sætninger. Professionel tone. Dansk."
    },
    {
      "id": "2.2",
      "categoryId": "2",
      "categoryName": "Mødenoter og referater",
      "title": "Stikord → referat + opfølgningsmail",
      "body": "ROLLE: Du er min forsikrings-assistent.\n\nKONTEKST: Jeg er assurandør og har lige haft et kundemøde. Mine stikord:\n[indsæt]\n\nMETODE: Lav to leverancer:\n\nLEVERANCE 1 - Mødereferat til sagsmappen:\n- Nuværende situation\n- Identificerede forsikringsbehov\n- Aftalt næste skridt\n- Frist\n\nLEVERANCE 2 - Opfølgningsmail til kunden:\n- Maks 150 ord\n- Takker for mødet\n- Bekræfter aftalerne\n- Varm men professionel tone"
    },
    {
      "id": "2.3",
      "categoryId": "2",
      "categoryName": "Mødenoter og referater",
      "title": "Telefonsamtale → notat og opfølgning",
      "body": "ROLLE: Du er min forsikrings-assistent.\n\nKONTEKST: Jeg er assurandør og har netop haft en telefonsamtale med en\nkunde. Stikord: [indsæt]\n\nMETODE:\n1. Et internt notat til kundens sagsmappe på maks 100 ord\n2. Liste over action points med deadlines\n3. Én opfølgende mail til kunden på maks 80 ord"
    },
    {
      "id": "2.4",
      "categoryId": "2",
      "categoryName": "Mødenoter og referater",
      "title": "Transkription af kundemøde → struktureret referat",
      "body": "ROLLE: Du er min referent med forsikringsforståelse.\n\nKONTEKST: Jeg er assurandør. Jeg uploader en transskription af et\n45-minutters kundemøde. Kunde: [kort profil].\n\nMETODE: Struktureret referat:\n1. Nøglepointer fra kunden om deres situation og bekymringer\n2. Mine tilsagn og leverancer (hvad jeg skal levere, hvornår)\n3. Kundens indvendinger mod forslag eller produkter\n4. Konkrete aftaler med deadlines\n5. Spørgsmål der stadig hænger i luften\nBrug citater hvor relevant. Angiv hvem der sagde hvad."
    },
    {
      "id": "2.5",
      "categoryId": "2",
      "categoryName": "Mødenoter og referater",
      "title": "Ugerapport fra flere kundemøder",
      "body": "ROLLE: Du er min administrative assistent med kendskab til\nassurandørarbejde.\n\nKONTEKST: Jeg er assurandør og har haft [antal] kundemøder denne uge. Noter\nfra hvert: [indsæt]\n\nMETODE: Ugerapport til min chef:\n- Antal møder og type (privat/erhverv)\n- Tre vigtigste resultater (nye tilbud, lukkede deals, genforhandlinger)\n- Tre udfordringer jeg har mødt\n- Forventede nye forretninger og præmieindtægt\n- Ting jeg har brug for hjælp til\nMaks 300 ord. Professionel tone."
    },
    {
      "id": "2.6",
      "categoryId": "2",
      "categoryName": "Mødenoter og referater",
      "title": "Mødeindkaldelse til kunde",
      "body": "ROLLE: Du er min kommunikationsassistent.\n\nKONTEKST: Jeg er assurandør og skal indkalde [kunde] til et møde.\nFormål: [beskrivelse - gennemgang af forsikringsprogram, tilbud på nyt\nprodukt, skadessag, genforhandling]. Forslag til tid: [tid].\nSted: [sted].\n\nMETODE: Mail der:\n- Er kort og konkret (maks 120 ord)\n- Tydeligt formål\n- Klart sted og tid\n- Angiver hvad kunden skal forberede (fx medbringe nuværende policer,\nskadeshistorik, årsrapport)\n- Venlig men professionel tone"
    },
    {
      "id": "3.1",
      "categoryId": "3",
      "categoryName": "Kundekommunikation - privatkunder",
      "title": "Introduktionsmail til ny privatkunde",
      "body": "ROLLE: Du er min kommunikationsassistent med erfaring i\nforsikringsrådgivning til privatkunder.\n\nKONTEKST: Jeg er assurandør og har fået henvist en ny privatkunde fra\n[kilde]. De har oplyst disse forsikringsbehov: [indsæt]. Jeg vil\npræsentere mig og foreslå et indledende møde.\n\nMETODE: Mail på maks 150 ord:\n- Starter varmt uden at være familiær\n- Kort præsentation af mig og mit speciale\n- Viser jeg har forstået deres situation\n- Foreslår konkret næste skridt\n- Slutter let og uforpligtende"
    },
    {
      "id": "3.2",
      "categoryId": "3",
      "categoryName": "Kundekommunikation - privatkunder",
      "title": "Årlig opfølgning",
      "body": "ROLLE: Du er min kommunikationsassistent.\n\nKONTEKST: Jeg er assurandør og skal sende en årlig opfølgningsmail til\nen kunde jeg ikke har talt med i 12 mdr. Kunde: [kort profil].\nNuværende forsikringer hos os: [indsæt]\n\nMETODE: Mail på maks 180 ord:\n- Åbner naturligt (ikke salgsagtigt)\n- Foreslår en kort gennemgang af deres forsikringsprogram\n- Nævner 1-2 ting der typisk ændrer sig i folks liv på et år (som de\nselv kan spejle sig i)\n- Inviterer til 15 min telefonsamtale\nTone: hyggelig, ikke presset."
    },
    {
      "id": "3.3",
      "categoryId": "3",
      "categoryName": "Kundekommunikation - privatkunder",
      "title": "Velkomstmail efter tegnet police",
      "body": "ROLLE: Du er min kommunikationsassistent.\n\nKONTEKST: Jeg er assurandør. Kunde [navn] har netop tegnet [produkt]\nhos os.\n\nMETODE: Mail på maks 120 ord:\n- Tak for tilliden\n- Bekræft dækningen træder i kraft [dato]\n- Fortæl kort hvad de nu kan forvente (policedokument, årlig gennemgang)\n- Angiv kontaktmulighed ved spørgsmål\nVarm, professionel, ikke salgsagtig (de har allerede købt)."
    },
    {
      "id": "3.4",
      "categoryId": "3",
      "categoryName": "Kundekommunikation - privatkunder",
      "title": "Prisstigning til langtidskunde",
      "body": "ROLLE: Du er min erfarne forsikringskollega med god fornemmelse for\nsvær kundekommunikation.\n\nKONTEKST: Jeg er assurandør. Kunde [navn] har været hos os i [år].\nDeres præmie på [produkt] stiger fra [beløb] til [beløb].\nÅrsag: [konkret - skadeshistorik, branchepriser, regulatorisk].\n\nMETODE: Mail der:\n- Er ærlig om stigningen fra start\n- Anerkender deres loyalitet\n- Forklarer HVORFOR uden forsikringsjargon\n- Tilbyder et møde om mulig optimering af dækning eller selvrisiko\n- Maks 180 ord, varm men professionel"
    },
    {
      "id": "3.5",
      "categoryId": "3",
      "categoryName": "Kundekommunikation - privatkunder",
      "title": "Afslag på skadesanmeldelse",
      "body": "ROLLE: Du er min erfarne kollega med god fornemmelse for\nskadeskommunikation.\n\nKONTEKST: Jeg er assurandør. Kunde [navn] har anmeldt skade\n[beskrivelse]. Skaden er ikke dækket fordi [konkret grund fra police].\n\nMETODE: Mail der:\n- Er ærlig om afgørelsen fra start\n- Forklarer HVILKEN klausul eller policebetingelse der er i spil, i\nsprog kunden forstår\n- Anerkender skuffelsen\n- Foreslår alternative skridt (først selskabets klageansvarlige,\ndernæst Ankenævnet for Forsikring - og evt. udvidet dækning fremover)\n- Maks 180 ord, varm men klar\nBrug kun den begrundelse jeg har angivet - opfind ikke klausulnumre\neller citater fra policen."
    },
    {
      "id": "3.6",
      "categoryId": "3",
      "categoryName": "Kundekommunikation - privatkunder",
      "title": "Svarbrev på opsigelse",
      "body": "ROLLE: Du er min erfarne forsikringskollega.\n\nKONTEKST: Jeg er assurandør. Kunde [navn] har opsagt deres forsikring.\nGrund angivet: [indsæt]. Har været kunde i [år].\n\nMETODE: Svarbrev der:\n- Respekterer beslutningen uden at presse\n- Bekræfter opsigelsesdatoen og hvad der sker med nuværende police\n- Tilbyder afslutningssamtale (ikke genforhandling - kun oprydning)\n- Efterlader døren åben for fremtiden\n- Maks 150 ord"
    },
    {
      "id": "3.7",
      "categoryId": "3",
      "categoryName": "Kundekommunikation - privatkunder",
      "title": "Genkomst-mail til tidligere kunde",
      "body": "ROLLE: Du er min kommunikationsassistent.\n\nKONTEKST: Jeg er assurandør. Tidligere kunde [navn] sagde deres\nforsikringer op for [år] år siden og gik til [konkurrent]. Jeg har hørt\nde måske er utilfredse nu.\n\nMETODE: Mail på maks 140 ord:\n- Åbner naturligt uden at være grådig\n- Anerkender deres valg dengang\n- Viser interesse i hvordan det er gået\n- Inviterer til uforpligtende snak om deres nuværende dækning\n- Nævner IKKE at jeg har hørt de skulle være utilfredse - mailen\nskal kunne stå alene som venlig genoptagelse af kontakten\nIngen \"vi er billigere!\"-slogans.\nOBS: Uanmodet mail med markedsføring kræver normalt samtykke\n(markedsføringslovens § 10) - tjek om du må skrive til kunden, eller\nring i stedet."
    },
    {
      "id": "3.8",
      "categoryId": "3",
      "categoryName": "Kundekommunikation - privatkunder",
      "title": "Police-forklaring i hverdagsdansk",
      "body": "ROLLE: Du er min kommunikationsassistent med forsikringsforståelse.\n\nKONTEKST: Jeg er assurandør. En kunde forstår ikke deres police på\n[type]. Relevant policetekst: [indsæt]\n\nMETODE: Omskriv til hverdagssprog:\n1. Hvad dækker policen (bullet points)\n2. Hvad dækker den IKKE\n3. Hvad kunden selv skal gøre (anmeldelser, selvrisiko, frister)\n4. Konkret eksempel på hvornår det ville være relevant\nBasér dig udelukkende på den indsatte policetekst. Hvis noget ikke\nfremgår, så skriv \"skal tjekkes i de fulde vilkår\" i stedet for at\ngætte. Ingen forsikringsjargon."
    },
    {
      "id": "3.9",
      "categoryId": "3",
      "categoryName": "Kundekommunikation - privatkunder",
      "title": "Flyttemeddelelse → tilbud om gennemgang",
      "body": "ROLLE: Du er min kommunikationsassistent.\n\nKONTEKST: Jeg er assurandør. Kunde [navn] har meldt de flytter fra\n[gammel adresse] til [ny adresse] d. [dato].\n\nMETODE: Mail der:\n- Bekræfter flytningen er noteret i alle relevante policer\n- Fortæller hvad der automatisk opdateres (adressen på\nindboforsikringen) og hvad der kræver handling (ny husforsikring ved\nkøb/salg af bolig - husforsikringen følger ejendommen)\n- Foreslår en samtale om hvad flytningen kan betyde for andre\ndækninger (indbo-værdi ved ombygning, ændret præmie i et andet\npostnummer/risikoområde, ny arbejdsvej ved pendling)\n- Maks 150 ord"
    },
    {
      "id": "3.10",
      "categoryId": "3",
      "categoryName": "Kundekommunikation - privatkunder",
      "title": "Proaktiv kontakt ved ny baby",
      "body": "ROLLE: Du er min kommunikationsassistent med forsikringsforståelse.\n\nKONTEKST: Jeg er assurandør. Kunde [navn] har netop fået barn. Der er\nnye forsikringsmæssige behov (livsforsikring, børneforsikring, evt.\nopdatering af indbo).\n\nMETODE: Mail:\n- Varmt tillykke først\n- Ingen hast med det professionelle\n- Kort henvisning til at vi gerne tager en samtale om forsikringsbehov\nnår tiden er til det (2-3 uger frem)\n- Maks 100 ord\nMenneskelig først, professionel sidst."
    },
    {
      "id": "3.11",
      "categoryId": "3",
      "categoryName": "Kundekommunikation - privatkunder",
      "title": "Svar på vred klage-mail",
      "body": "ROLLE: Du er min erfarne forsikringskollega med fornemmelse for\nkonflikthåndtering.\n\nKONTEKST: Jeg er assurandør. Kunde [navn] har sendt denne klage:\n[indsæt]\n\nMETODE: Svar der:\n- Anerkender frustrationen uden at være medgørlig\n- Undgår automatisk forsvar eller undskyldning\n- Stiller opfølgende spørgsmål hvis noget er uklart\n- Tilbyder konkret næste skridt (møde, genbehandling af sag,\nhenvisning til Ankenævnet for Forsikring)\n- Maks 200 ord, professionel rolig tone"
    },
    {
      "id": "3.12",
      "categoryId": "3",
      "categoryName": "Kundekommunikation - privatkunder",
      "title": "Tre versioner af samme forsikringsbudskab til segmenter",
      "body": "ROLLE: Du er min kommunikationsstrateg med forsikringserfaring.\n\nKONTEKST: Jeg er assurandør og skal sende samme kernebudskab til tre\nforskellige privatkunde-segmenter:\n1. Unge par uden børn (25-35)\n2. Familier med børn (35-55)\n3. Seniorer (60+)\nKernebudskab: [indsæt - fx prisjustering, nyt produkt, policeændring]\n\nMETODE: Tre versioner af samme mail:\n- Samme kernebudskab i hver\n- Tilpasset sprogtone og forsikringseksempler til hvert segment\n- Maks 150 ord pr. version\n- Vis eksplicit hvad du har ændret mellem versionerne"
    },
    {
      "id": "3.13",
      "categoryId": "3",
      "categoryName": "Kundekommunikation - privatkunder",
      "title": "Boligkøb - forsikringsgennemgang før overtagelse",
      "body": "ROLLE: Du er min erfarne kollega med speciale i privatkunder og\ndansk bolighandel.\n\nKONTEKST: Jeg er assurandør. Kunde [navn, kort profil] køber\n[hus/ejerlejlighed/andelsbolig] til [pris], overtagelse [dato].\nTilstands- og elrapport: [karakterer og bemærkninger, eller \"findes\nikke\"]. Sælger betaler halv ejerskifteforsikring: [ja/nej/uafklaret].\n\nMETODE:\n1. Forsikringer der skal være på plads inden overtagelsesdagen, og\nhvad der kan vente - husk at brandforsikring er en lånebetingelse i\nhus, og at foreningen typisk dækker bygningen i lejlighed og andel\n2. Ejerskifteforsikring i hverdagssprog, hvis boligtypen kan få den:\nhvad den dækker og ikke dækker, hvorfor den skal tegnes inden\novertagelsen, og hvad rapporternes bemærkninger betyder for dækningen\n3. Tre typiske faldgruber ved netop denne boligtype\n4. Dateret tjekliste frem mod overtagelsen og kundemail på maks 150 ord\nByg kun på det indsatte - skriv \"skal afklares\" frem for at gætte."
    },
    {
      "id": "3.14",
      "categoryId": "3",
      "categoryName": "Kundekommunikation - privatkunder",
      "title": "Dødsfald - kondolence og hjælp til efterladte",
      "body": "ROLLE: Du er min erfarne kollega med mange års kontakt med\nefterladte og en sikker fornemmelse for sorg og takt.\n\nKONTEKST: Jeg er assurandør. [relation: fx mangeårig kunde,\nægtefællen til min kunde] er død. Efterladte: [ægtefælle/samlever,\nbørn og alder]. Policer hos os: [produkt, forsikret, begunstigelse].\n\nMETODE:\n1. Kort kondolencebrev, menneskeligt først: ingen policer, ingen\nforretning, maks 100 ord\n2. Udkast til opfølgning 2-3 uger senere: hvad der skal ske med\nhver police (udbetaling, ophør, overdragelse til efterlevende) i\nskånsomt hverdagssprog og i den rækkefølge der haster mest\n3. Punktliste over det de efterladte selv skal gøre, uden jargon\n4. Fem formuleringer jeg aldrig må bruge over for efterladte, og\ntre emner der ikke hører hjemme i den første kontakt\nTone: stilfærdig og ægte - ikke højtidelig skabelon."
    },
    {
      "id": "3.15",
      "categoryId": "3",
      "categoryName": "Kundekommunikation - privatkunder",
      "title": "Skilsmisse - forsikringstjek ved samlivsophør",
      "body": "ROLLE: Du er min erfarne kollega i følsomme kundesituationer.\n\nKONTEKST: Jeg er assurandør. Kunde [profil, børn, bolig] ophæver\nsamlivet. Fælles policer hos os: [produkt og hvem der står på policen].\n\nMETODE:\n1. Tjekliste over policer der skal deles, ændres eller nytegnes -\nhusk begunstigelser på livsforsikring og børnene i to husstande\n2. Tre ting kunder typisk glemmer i situationen\n3. Kort, varm mail på maks 120 ord der tilbyder en rolig gennemgang\nnår kunden er klar - må ikke lyde som en salgsanledning"
    },
    {
      "id": "4.1",
      "categoryId": "4",
      "categoryName": "Kundekommunikation - erhvervskunder",
      "title": "Introduktionsmail til ny erhvervskunde",
      "body": "ROLLE: Du er min kommunikationsassistent med erfaring i\nerhvervsforsikring.\n\nKONTEKST: Jeg er erhvervsassurandør og har fået adgang til\n[virksomhedsnavn] via [kilde]. De er i branchen [branche] med [antal]\nansatte. Jeg vil tage initiativ.\nKonkret anledning eller observation jeg selv har: [indsæt - fx\nnyhed, årsregnskab, udvidelse, ny lokation].\n\nMETODE: Mail på maks 180 ord:\n- Åbner med den anledning jeg har angivet ovenfor - opfind ikke\nfakta om virksomheden\n- Kort præsentation af mig og mit forsikringsspeciale\n- Foreslår 20 min telefonsamtale om forsikringsmæssige risici i deres\nbranche\n- Slutter uforpligtende\nIngen standard-fraser. Konkret og tilskåret.\nOBS: Kold mail til virksomheder kræver normalt samtykke\n(markedsføringslovens § 10) - brug evt. teksten som LinkedIn-besked,\nbrev eller talepapir til opkald i stedet."
    },
    {
      "id": "4.2",
      "categoryId": "4",
      "categoryName": "Kundekommunikation - erhvervskunder",
      "title": "Prisstigning til erhvervskunde",
      "body": "ROLLE: Du er min erfarne forsikringskollega.\n\nKONTEKST: Jeg er erhvervsassurandør. Kunden driver [type virksomhed],\n[antal] ansatte, har været kunde i [år]. Præmie stiger\n[beløb]→[beløb] (+[procent]). Årsag: [skadesudvikling / branche /\nregulatorisk].\n\nMETODE: Mail der:\n- Er ærlig om stigningen uden undskyldninger\n- Forklarer årsagen på virksomhedsniveau\n- Foreslår risiko-gennemgangsmøde\n- Antyder mulige optimeringer (selvrisiko, dækning, sikring) uden at\nlove noget\n- Maks 220 ord, kollega-niveau professionel tone"
    },
    {
      "id": "4.3",
      "categoryId": "4",
      "categoryName": "Kundekommunikation - erhvervskunder",
      "title": "Ledsagemail til erhvervstilbud",
      "body": "ROLLE: Du er min kommunikationsassistent.\n\nKONTEKST: Jeg er erhvervsassurandør og har lavet et tilbud til\n[virksomhed]. Tilbuddet dækker [kort oversigt over dækninger]. Total\nårlig præmie: [beløb].\n\nMETODE: Kort ledsagemail til det vedhæftede tilbud - den skal IKKE\ngentage tilbuddet:\n- Én sætning der viser jeg har forstået deres vigtigste risiko\n- De 2-3 nøglepunkter fra tilbuddet kunden især skal lægge mærke til\n- Hvad kunden skal gøre nu, og hvornår jeg følger op\n- Maks 120 ord, kontaktoplysninger sidst"
    },
    {
      "id": "4.4",
      "categoryId": "4",
      "categoryName": "Kundekommunikation - erhvervskunder",
      "title": "Erhvervs-afslag på skadesanmeldelse",
      "body": "ROLLE: Du er min erfarne forsikringskollega.\n\nKONTEKST: Jeg er erhvervsassurandør. Virksomhed [navn] har anmeldt\nskade [beskrivelse]. Ikke dækket fordi [konkret grund fra police].\nPotentielt store forretningsmæssige konsekvenser for kunden.\n\nMETODE: Mail der:\n- Er ærlig og direkte om afgørelsen\n- Forklarer den juridiske/kontraktmæssige baggrund i enkelt sprog\n- Anerkender den forretningsmæssige konsekvens\n- Foreslår evt. supplerende dækning til fremtiden\n- Angiver klagemuligheder (selskabets klageansvarlige; bemærk at\nAnkenævnet for Forsikring som udgangspunkt kun behandler private -\nerhvervssager afgøres efter policens bestemmelser eller ved\ndomstolene)\n- Maks 220 ord, klar men empatisk\nBrug kun den begrundelse jeg har angivet - opfind ikke klausulnumre\neller vilkårscitater."
    },
    {
      "id": "4.5",
      "categoryId": "4",
      "categoryName": "Kundekommunikation - erhvervskunder",
      "title": "Proaktiv kontakt efter branche-nyhed",
      "body": "ROLLE: Du er min kommunikationsassistent med forsikringsforståelse.\n\nKONTEKST: Jeg er erhvervsassurandør. Der er kommet [nyhed] der påvirker\n[branche]. Min kunde [virksomhed] er potentielt berørt af det\nforsikringsmæssigt.\n\nMETODE: Mail der:\n- Nævner nyheden kort\n- Forklarer hvad det kan betyde for deres risikoprofil og nuværende\ndækning\n- Foreslår en 15 min samtale\n- Maks 150 ord\nSæt proaktivitet i fokus uden at skabe panik. Byg kun på den nyhed\njeg har angivet - opfind ikke detaljer, tal eller lovkrav."
    },
    {
      "id": "4.6",
      "categoryId": "4",
      "categoryName": "Kundekommunikation - erhvervskunder",
      "title": "Budgetopfølgningsmail til CFO",
      "body": "ROLLE: Du er min kommunikationsassistent med fornemmelse for\nCFO-kommunikation.\n\nKONTEKST: Jeg er erhvervsassurandør. Erhvervskunde [navn] har bedt om\nen opdatering før deres budgetproces. De skal bruge præmieforudsigelser\nog evt. ændringer i forsikringsprogrammet.\n\nMETODE: Mail der:\n- Leverer klar forudsigelse (fast vs. variabel præmie)\n- Angiver eventuelle ændringer i dækning eller pris\n- Driverne kort forklaret (skadeshistorik, markedsudvikling)\n- Foreslår en kort Teams-samtale ved behov\n- Maks 180 ord, regnskabsvenlig tone"
    },
    {
      "id": "4.7",
      "categoryId": "4",
      "categoryName": "Kundekommunikation - erhvervskunder",
      "title": "Invitation til risiko-workshop",
      "body": "ROLLE: Du er min kommunikationsassistent.\n\nKONTEKST: Jeg er erhvervsassurandør og vil invitere [virksomhed] til en\nrisiko-workshop hos os. Værdien for dem: identifikation af ukendte\nforsikringsmæssige eksponeringer.\n\nMETODE: Mail:\n- Klart formål\n- Hvad de får ud af det (fx konkret risiko-kortlægning,\ndækningsanalyse)\n- Praktisk info (2 timer, hos os, inkl. frokost)\n- 2-3 foreslåede datoer\n- Maks 180 ord"
    },
    {
      "id": "4.8",
      "categoryId": "4",
      "categoryName": "Kundekommunikation - erhvervskunder",
      "title": "Svær besked: vi fortsætter ikke dækningen",
      "body": "ROLLE: Du er min erfarne forsikringskollega.\n\nKONTEKST: Jeg er erhvervsassurandør. Vi kan ikke længere forsikre\n[virksomhed] pga. [konkret grund: skadesfrekvens / brancheændring /\nregulatorisk ramme / reassurance-betingelser]. De har været kunde i\n[år].\n\nMETODE: Brev der:\n- Er direkte om afgørelsen fra start\n- Forklarer grunden i et sprog de forstår\n- Angiver tidsfrist og overgang\n- Tilbyder hjælp til at finde alternativ dækning i markedet\n- Maks 220 ord, respektfuld tone"
    },
    {
      "id": "4.9",
      "categoryId": "4",
      "categoryName": "Kundekommunikation - erhvervskunder",
      "title": "Opfølgning efter tabt tilbud",
      "body": "ROLLE: Du er min kommunikationsassistent.\n\nKONTEKST: Jeg er erhvervsassurandør. [Virksomhed] valgte ikke vores\ntilbud. De gik til [konkurrent / anden løsning]. Jeg vil lære og holde\ndøren åben for fremtiden.\n\nMETODE: Mail:\n- Ønsk dem held og lykke med den valgte løsning\n- Kort spørg til deres beslutningskriterier (for at lære)\n- Efterlad døren på klem til næste fornyelse\n- Ingen klynk, ingen \"men vi ville gerne...\"\n- Maks 120 ord"
    },
    {
      "id": "4.10",
      "categoryId": "4",
      "categoryName": "Kundekommunikation - erhvervskunder",
      "title": "Svar på detaljeret compliance-spørgsmål fra kunde",
      "body": "ROLLE: Du er min erfarne forsikringskollega.\n\nKONTEKST: Jeg er erhvervsassurandør. [Virksomhed] har sendt detaljerede\nspørgsmål om vores dækning for [specifikt område - fx cyber, D&O,\nmiljø]. Jeg skal være skarp men ærlig om hvad jeg ikke ved.\n\nKUNDENS SPØRGSMÅL:\n[indsæt]\n\nMETODE: Svar:\n- Punkt for punkt som de stillede\n- Ærlig om hvad jeg skal undersøge nærmere med underwriter/jurist\n- Henvis til policetekst hvor relevant\n- Maks 300 ord\n- Professionel, præcis tone"
    },
    {
      "id": "4.11",
      "categoryId": "4",
      "categoryName": "Kundekommunikation - erhvervskunder",
      "title": "Kvartals-nyhedsbrev til mine erhvervskunder",
      "body": "ROLLE: Du er min kommunikationsassistent med forsikringsforståelse.\n\nKONTEKST: Jeg er erhvervsassurandør og sender kvartalsvis nyhedsbrev\ntil mine erhvervskunder. Aktuelle forsikringsrelevante emner:\n[indsæt 2-3 temaer - fx cyber, branchepriser, nye regulatoriske krav]\n\nMETODE: Nyhedsbrev:\n- Kort personlig indledning (ikke corporate)\n- 3 emner med én konkret takeaway pr. emne\n- Afslutning med \"hvad skal I holde øje med\"\n- Maks 400 ord\n- Kollegial tone, ikke salgsagtig\nOpfind ikke tal, datoer eller konkrete lovkrav - brug kun de fakta\njeg har angivet under emnerne."
    },
    {
      "id": "4.12",
      "categoryId": "4",
      "categoryName": "Kundekommunikation - erhvervskunder",
      "title": "Svar på forhandlingsmail fra erhvervskunde",
      "body": "ROLLE: Du er min erfarne forsikringsforhandler-kollega.\n\nKONTEKST: Jeg er erhvervsassurandør. [Virksomhed] har sendt modbud på\nmit tilbud. Deres krav: [indsæt]. Mit forhandlingsråderum: [indsæt].\n\nMETODE: Svar:\n- Start med at anerkende deres position\n- Hvad jeg kan gå med til og hvad ikke (selvrisiko, dækning, pris)\n- Foreslå mulige gensidige tilpasninger\n- Efterlad døren åben hvis ikke enighed\n- Maks 180 ord, professionel forhandlingstone"
    },
    {
      "id": "4.13",
      "categoryId": "4",
      "categoryName": "Kundekommunikation - erhvervskunder",
      "title": "Tak for kontraktfornyelse - erhverv",
      "body": "ROLLE: Du er min kommunikationsassistent.\n\nKONTEKST: Jeg er erhvervsassurandør. Erhvervskunde [virksomhed] har\nfornyet deres forsikringsprogram for endnu [periode].\n\nMETODE: Mail:\n- Tak for fortsat tillid\n- Et konkret eksempel på værdi vi har leveret det seneste år\n(fx skadesbehandling, rådgivning ved udvidelse)\n- En fremad-pegende bemærkning (fx planlagt risiko-gennemgang)\n- Maks 130 ord, kollegial tone"
    },
    {
      "id": "5.1",
      "categoryId": "5",
      "categoryName": "Tilbudsskrivning og præsentationer",
      "title": "Fuldt tilbudsbrev",
      "body": "ROLLE: Du er min erfarne forsikringskollega med erfaring i tilbudsskrivning.\n\nKONTEKST: Jeg er assurandør. Kunde: [type, størrelse, branche, særlige\nforhold]. Dækningsområder: [liste]. Årlig præmie: [beløb].\nSelvrisiko: [beløb]. Særlige betingelser: [indsæt].\n\nMETODE: Tilbudsbrev med:\n- Intro der viser jeg har forstået kundens situation og risikoprofil\n- Dækningsoversigt i dagligdagssprog\n- Prisen ærligt og enkelt\n- Hvad kunden skal gøre nu\n- Afrunding + mine kontaktoplysninger\n- Maks 1 A4, professionel og varm tone\nBrug kun de oplysninger jeg har givet - opfind ikke dækninger,\nvilkår eller tal."
    },
    {
      "id": "5.2",
      "categoryId": "5",
      "categoryName": "Tilbudsskrivning og præsentationer",
      "title": "18-siders tilbud → kundevenlig sammenfatning",
      "body": "ROLLE: Du er min erfarne forsikringskollega med erfaring i erhvervstilbud.\n\nKONTEKST: Jeg er assurandør og har et forsikringstilbud på 18 sider\n[indsæt eller upload: tilbuddet]. Kunden er [type virksomhed] der har svært ved at\ngennemskue det.\n\nMETODE:\n1. Oversigtstabel: de 5 vigtigste dækninger, præmie, selvrisiko pr.\nområde\n2. Tre forslag til grafer der letter forståelsen (beskriv hvad de\nskal vise)\n3. En ét-sides sammenfatning i ikke-forsikringsmandssprog\nAlle tal og dækninger skal stamme direkte fra det uploadede tilbud.\nHvis noget ikke fremgår, så skriv \"fremgår ikke af tilbuddet\" i\nstedet for at gætte. Jordnær tone. Ingen salgssnak."
    },
    {
      "id": "5.3",
      "categoryId": "5",
      "categoryName": "Tilbudsskrivning og præsentationer",
      "title": "Præsentation til forsikringskundemøde",
      "body": "ROLLE: Du er min præsentations-specialist med forsikringsforståelse.\n\nKONTEKST: Jeg er assurandør og skal præsentere [forsikringsløsning]\nfor [kunde] i 20 min. Kundens primære bekymringer: [indsæt].\n\nMETODE: Oplæg til 10 slides:\n- Åbning (kundens problem/risiko)\n- Tre indsigter om deres risikobillede\n- Vores forsikringsløsning (kerne + valgmuligheder)\n- Pris og vilkår\n- Næste skridt\nFor hvert slide: overskrift + 3 bullets + en kort talenote til mig."
    },
    {
      "id": "5.4",
      "categoryId": "5",
      "categoryName": "Tilbudsskrivning og præsentationer",
      "title": "Elevatortale til erhvervskunde",
      "body": "ROLLE: Du er min kommunikationsassistent med forsikringsforståelse.\n\nKONTEKST: Jeg er erhvervsassurandør og møder [virksomhed: branche, størrelse,\nhvad jeg ved om dem] på et netværksarrangement. Jeg har 60 sekunder til at gøre indtryk.\n\nMETODE: Skriv tre versioner af en 60-sekunders elevatortale:\n- Version A: Fokus på risikoforebyggelse\n- Version B: Fokus på forretningskontinuitet ved skader\n- Version C: Fokus på omkostningsoptimering af deres\nforsikringsprogram\nHver version maks 150 ord, naturligt talesprog. Antag ikke fakta om\nvirksomheden ud over det jeg har oplyst."
    },
    {
      "id": "5.5",
      "categoryId": "5",
      "categoryName": "Tilbudsskrivning og præsentationer",
      "title": "Sammenligning af tre dækningsniveauer",
      "body": "ROLLE: Du er min forsikringsrådgiver-kollega.\n\nKONTEKST: Jeg er assurandør og skal præsentere tre forskellige\ndækningsniveauer for [kunde]: basis, mellem, premium. Beskrivelse af hvert niveau\ninkl. dækningssummer, selvrisiko og årlig præmie: [indsæt].\nKundens situation og behov: [indsæt].\n\nMETODE:\n1. Sammenligningstabel med kolonner per niveau\n2. Rækker: dækning, selvrisiko, årlig præmie, primær målgruppe\n3. En \"min anbefaling\"-sætning under tabellen, baseret på kundens\nbehov - opfind ikke tal\n4. Format: direkte kopierbart i mail eller slide"
    },
    {
      "id": "5.6",
      "categoryId": "5",
      "categoryName": "Tilbudsskrivning og præsentationer",
      "title": "Executive summary af forsikringsprogram",
      "body": "ROLLE: Du er min executive-level kommunikator med forsikringserfaring.\n\nKONTEKST: Jeg er erhvervsassurandør. Det årlige forsikringsprogram hos\n[virksomhed] er komplekst. CEO/CFO skal kunne skimme det på\n5 minutter. Program-detaljer: [indsæt]\n\nMETODE: Executive summary (maks 1 side):\n- Total årlig præmie (øverst)\n- Dækningens kerne i 5 bullets\n- Tre væsentlige risici der fortsat er udækket eller underdækket -\nbasér dem udelukkende på de indsatte programoplysninger og branchen;\ner grundlaget for tyndt, så skriv hvilke oplysninger der mangler\n- Min anbefaling til næste år"
    },
    {
      "id": "5.7",
      "categoryId": "5",
      "categoryName": "Tilbudsskrivning og præsentationer",
      "title": "Præsentationsslides fra tekstdokument",
      "body": "ROLLE: Du er min præsentationsbygger.\n\nKONTEKST: Jeg er assurandør. Jeg har et tekstdokument om et\nforsikringsprodukt eller en kundesag [indsæt eller upload: dokumentet]. Jeg skal lave det om\ntil et oplæg til 30 min kundemøde.\n\nMETODE: Omdan til 8 slides:\n- Slide 1: Titel + undertekst\n- Slide 2-7: Kernepunkter med bullet-noter\n- Slide 8: Afslutning/call to action\nFor hvert slide: overskrift + 3-4 bullets. Gør teksten\npræsentationsegnet (ikke fulde sætninger)."
    },
    {
      "id": "5.8",
      "categoryId": "5",
      "categoryName": "Tilbudsskrivning og præsentationer",
      "title": "Forslag til grafer fra skadesdata",
      "body": "ROLLE: Du er min data-visualiseringsekspert med forsikringsforståelse.\n\nKONTEKST: Jeg er assurandør. Rådata (fx skadeshistorik, præmieudvikling,\ndækningsfordeling): [indsæt tabel eller beskrivelse]\n\nMETODE: Foreslå 3 grafer der bedst fortæller historien til kunden:\n- For hver graf: type (søjle/kurve/cirkel), hvad aksen viser,\nkonklusionen den underbygger\n- Angiv hvilken graf der er vigtigst\n- Undgå overlappende grafer"
    },
    {
      "id": "5.9",
      "categoryId": "5",
      "categoryName": "Tilbudsskrivning og præsentationer",
      "title": "Forsikringsprogram til bestyrelsesgodkendelse",
      "body": "ROLLE: Du er min bestyrelseskommunikator med forsikringsforståelse.\n\nKONTEKST: Jeg er erhvervsassurandør. Min kundes bestyrelse skal godkende\ndet årlige forsikringsprogram. Programmet: [indsæt]. Bestyrelsen\nforventer 15 min præsentation.\n\nMETODE: Byg til 6 slides:\n1. Indledning (formål med beslutningen)\n2. Risikobillede for virksomheden\n3. Dækningens kerne\n4. Økonomi (præmie vs. risikoeksponering)\n5. Beslutningsalternativer (basis/udvidet)\n6. Min anbefaling\nTone: bestyrelsesniveau, tal-drevet, klar."
    },
    {
      "id": "5.10",
      "categoryId": "5",
      "categoryName": "Tilbudsskrivning og præsentationer",
      "title": "Årsgennemgang for forsikringskunde",
      "body": "ROLLE: Du er min assistent til årsrapportering af forsikringsprogrammer.\n\nKONTEKST: Jeg er assurandør og skal lave en årsgennemgang for [kunde].\nÅret der gik: [konkrete begivenheder, skader, ændringer, nye dækninger].\n\nMETODE: Gennemgang:\n- Hvad der er sket i det forløbne år (skader, ændringer, nye policer)\n- Hvad der har virket godt i deres dækning\n- Hvad der skal justeres til næste år\n- Forslag til fremtiden\n- Maks 1-2 A4-sider, kundevenlig tone"
    },
    {
      "id": "5.11",
      "categoryId": "5",
      "categoryName": "Tilbudsskrivning og præsentationer",
      "title": "Kundens nuværende police vs mit tilbud",
      "body": "ROLLE: Du er min erfarne forsikringskollega med skarpt blik for\nvilkårsforskelle.\n\nKONTEKST: Jeg er assurandør og uploader to dokumenter sammen med\ndenne prompt: kundens nuværende police og vilkår fra [konkurrerende\nselskab] og mit eget tilbud. Kunden er [privat/erhverv, kort\nbeskrivelse].\n\nMETODE:\n1. Sammenligningstabel dækning for dækning: forsikringssum,\nselvrisiko, undtagelser og særlige vilkår - med sidehenvisning\ntil begge dokumenter i hver række\n2. Tre punkter hvor mit tilbud er stærkere end den nuværende dækning\n3. Tre punkter hvor konkurrenten er stærkere, eller vi mangler noget\n4. Forskelle i undtagelser der kan blive dyre for kunden\n5. En ærlig, kundevenlig formulering af forskellen til brug i mødet\nByg kun på de to dokumenter - står noget ikke i dem, så skriv\n\"fremgår ikke af materialet\" frem for at gætte."
    },
    {
      "id": "6.1",
      "categoryId": "6",
      "categoryName": "Risikovurdering og analyse",
      "title": "Komplet risikovurdering af erhvervskunde",
      "body": "ROLLE: Du er min risikoanalytiker-kollega med speciale i\nerhvervsforsikring.\n\nKONTEKST: Jeg er erhvervsassurandør. Kunde: [virksomhed], [branche],\n[antal] ansatte, omsætning [beløb]. Særlige forhold: [indsæt].\n\nMETODE: Forsikringsmæssig risikovurdering struktureret i:\n1. Materielle risici (bygninger, maskiner, lager)\n2. Driftstab ved skade\n3. Ansvar (produkt, miljø, profession)\n4. Personale (arbejdsskader, nøglepersoner)\n5. Cyber og data\nFor hver: sandsynlighed, konsekvens, anbefalet dækning. Tabelformat."
    },
    {
      "id": "6.2",
      "categoryId": "6",
      "categoryName": "Risikovurdering og analyse",
      "title": "Cyber-risikovurdering af kunde",
      "body": "ROLLE: Du er min cyber-risiko-specialist med forsikringsforståelse.\n\nKONTEKST: Jeg er erhvervsassurandør og skal rådgive [virksomhed] i\nbranchen [branche] om cyberforsikring. De håndterer [type data/\nsystemer].\n\nMETODE: Cyber-vurdering:\n1. Tre mest sandsynlige cybertrusler for netop denne type virksomhed\n2. Typisk økonomisk konsekvens ved hver (løsesum ved ransomware, nedetid,\ngenopretningsomkostninger, GDPR-bøde)\n3. Tre spørgsmål jeg bør stille ledelsen for at afdække behov\n4. Anbefaling til dækningsniveau i forsikringsprogrammet\nKonkret og hverdagssprog."
    },
    {
      "id": "6.3",
      "categoryId": "6",
      "categoryName": "Risikovurdering og analyse",
      "title": "Vurdering af underforsikring",
      "body": "ROLLE: Du er min underwriter-kollega.\n\nKONTEKST: Jeg er assurandør. Kunde [navn] har nuværende forsikrings-\ndækning: [indsæt]. Deres situation har ændret sig: [indsæt - nye\ninvesteringer, udvidelse, arv, renovering etc.]\n\nMETODE:\n1. Analysér om kunden er underforsikret på nogen af sine policer\n2. Kvantificér eventuelle huller i dækningen\n3. Foreslå konkret justering af forsikringsbeløb\n4. Formulér en neutral besked til kunden om det"
    },
    {
      "id": "6.4",
      "categoryId": "6",
      "categoryName": "Risikovurdering og analyse",
      "title": "Scenarie-analyse af stor skade",
      "body": "ROLLE: Du er min scenarie-analytiker med forsikringsforståelse.\n\nKONTEKST: Jeg er erhvervsassurandør. Kunde: [virksomhed]. Forestil en\nstor skade - f.eks. [konkret scenarie].\n\nMETODE: Tænk igennem:\n1. Umiddelbare økonomiske konsekvenser (første 72 timer)\n2. Mellemlang effekt (1-6 måneder)\n3. Langsigtet effekt (1-3 år)\n4. Nuværende forsikringsdækning vs. reelt behov\n5. Huller i dækningen der bør lukkes"
    },
    {
      "id": "6.5",
      "categoryId": "6",
      "categoryName": "Risikovurdering og analyse",
      "title": "Nøgleperson-risiko i erhvervskunde",
      "body": "ROLLE: Du er min forsikringsrådgiver med speciale i nøgleperson-\nforsikring.\n\nKONTEKST: Jeg er erhvervsassurandør. [Virksomhed] med [antal] ansatte.\nNøglepersoner: [indsæt navne og roller].\n\nMETODE:\n1. Identificér hvem der er mest kritiske nøglepersoner forsikrings-\nmæssigt\n2. Vurdér økonomisk konsekvens ved deres pludselige fravær\n(mistet omsætning, ansættelsesomkostninger, kundetab)\n3. Anbefal dækningsniveau for nøglepersonforsikring\n4. Formulér ledelsesbudskab om behovet"
    },
    {
      "id": "6.6",
      "categoryId": "6",
      "categoryName": "Risikovurdering og analyse",
      "title": "Sammenlign skadesdata over 5 år",
      "body": "ROLLE: Du er min skadesanalytiker.\n\nKONTEKST: Jeg er assurandør. Skadesdata for [kunde/område] over 5 år:\n[indsæt eller upload: skadesdata]\n\nMETODE:\n1. Identificér trends (stigende/faldende/stabilt)\n2. Udpeg 2-3 outliers der kræver forklaring\n3. Foreslå 3 justeringer af dækning, pris eller selvrisiko\n4. Grafik-forslag der bedst viser historien til kunden"
    },
    {
      "id": "6.7",
      "categoryId": "6",
      "categoryName": "Risikovurdering og analyse",
      "title": "Tjekliste før kontraktfornyelse",
      "body": "ROLLE: Du er min tjeklisteekspert med erfaring i forsikringsfornyelser.\n\nKONTEKST: Jeg er assurandør og skal forny kontrakten med [kunde].\nNuværende forsikringsdækning: [indsæt]. Det seneste år: [store\nbegivenheder, skader, ændringer].\n\nMETODE: Tjekliste:\n1. 10 ting jeg skal verificere før fornyelse (fx ændret omsætning,\nny produktion, flyttet adresse, skadeshistorik)\n2. Hvert punkt med én sætning om hvorfor det er vigtigt\n3. Markér de 3 vigtigste\n4. Format: tjekliste med afkrydsningsfelter"
    },
    {
      "id": "6.8",
      "categoryId": "6",
      "categoryName": "Risikovurdering og analyse",
      "title": "Kundens dækninger via pension og arbejdsgiver",
      "body": "ROLLE: Du er min personforsikringsspecialist med solidt kendskab til\ndanske arbejdsmarkedspensioner og dækningerne der følger med.\n\nKONTEKST: Jeg er assurandør og overvejer at anbefale\n[livsforsikring/ulykke/tab af erhvervsevne/kritisk sygdom].\nKundens situation: [ansættelse, overenskomst eller individuel\nordning, pensionsselskab]. Dækninger fra PensionsInfo: [indsæt].\n\nMETODE:\n1. Tabel over hvad kunden allerede har via ordningen: liv, tab af\nerhvervsevne, kritisk sygdom, evt. sundhedsforsikring - opdelt i\n\"oplyst\" og \"typisk for den slags ordning, skal bekræftes\"\n2. Reelle huller i forhold til kundens behov og familiesituation\n3. Hvor nytegning giver dobbeltdækning og spildt præmie - husk at\ntab af erhvervsevne samordnes med loft over samlet udbetaling\n4. Fem afklarende spørgsmål kunden selv skal slå op på PensionsInfo\n5. Markér hvor det bliver pensionsrådgivning, jeg skal henvise videre\nByg kun på det oplyste - gæt aldrig på kundens konkrete vilkår."
    },
    {
      "id": "7.1",
      "categoryId": "7",
      "categoryName": "Skadesbehandling",
      "title": "Skadesrapport fra kundens beskrivelse",
      "body": "ROLLE: Du er min skadesrapport-assistent med forsikringsforståelse.\n\nKONTEKST: Jeg er assurandør. En kundes beskrivelse af skaden: [indsæt]\n\nMETODE: Omdan til struktureret skadesrapport til sagsmappen:\n1. Faktiske forhold (tid, sted, hvad skete)\n2. Omfang af skade\n3. Involverede parter\n4. Relevante dokumenter/billeder\n5. Første forsikringsmæssige vurdering - alene ud fra beskrivelsen.\nAngiv hvilke punkter i policevilkårene der skal slås op, før der kan\nkonkluderes om dækning. Gæt ikke på dækning.\nProfessionel tone, kopierbar til sagsbehandlingssystem."
    },
    {
      "id": "7.2",
      "categoryId": "7",
      "categoryName": "Skadesbehandling",
      "title": "Opfølgningsmail under skadesbehandling",
      "body": "ROLLE: Du er min kommunikationsassistent med erfaring i skadesbehandling.\n\nKONTEKST: Jeg er assurandør. Skadessag [nummer/beskrivelse]. Status:\n[indsæt]. Kunden har ikke hørt noget i [dage].\n\nMETODE: Mail til kunden der:\n- Opdaterer om hvor sagen er i processen\n- Angiver næste skridt og tidsramme\n- Beder om evt. manglende dokumentation\n- Maks 150 ord\n- Empatisk, professionel tone"
    },
    {
      "id": "7.3",
      "categoryId": "7",
      "categoryName": "Skadesbehandling",
      "title": "Beregning af dækning fra policetekst",
      "body": "ROLLE: Du er min police-læser med forsikringsforståelse.\n\nKONTEKST: Jeg er assurandør. Relevant policetekst: [indsæt].\nSkade: [beskrivelse].\n\nMETODE:\n1. Er skaden dækket? Ja/nej med begrundelse\n2. Hvilket afsnit/klausul er udslagsgivende?\n3. Selvrisiko?\n4. Maksimal dækning?\n5. Undtagelser der kan være relevante\nBasér svaret udelukkende på den indsatte policetekst. Hvis en\noplysning ikke fremgår, skriv \"fremgår ikke af den indsatte tekst\" -\ngæt aldrig. Afslut med at vurderingen er vejledende, og at den\nendelige afgørelse ligger hos skadesafdelingen.\nFormat: præcis, med henvisning til tekststeder."
    },
    {
      "id": "7.4",
      "categoryId": "7",
      "categoryName": "Skadesbehandling",
      "title": "Brev med afgørelse - skade delvist dækket",
      "body": "ROLLE: Du er min erfarne forsikringskollega.\n\nKONTEKST: Jeg er assurandør. Skade [beskrivelse]. Delvist dækket:\n[dækket beløb] af [samlet beløb]. Grund til delvis dækning: [konkret\nklausul eller selvrisiko-element].\n\nMETODE: Brev der:\n- Er klart om hvor meget der udbetales og hvornår\n- Forklarer HVORFOR kun delvis dækning, med henvisning til police\n- Viser anerkendelse af situationen\n- Angiver klagemuligheder: først selskabets klageansvarlige, dernæst\nAnkenævnet for Forsikring (som udgangspunkt kun for privatkunder)\n- Maks 220 ord"
    },
    {
      "id": "7.5",
      "categoryId": "7",
      "categoryName": "Skadesbehandling",
      "title": "Koordineret skadesbehandling med flere parter",
      "body": "ROLLE: Du er min skadeskoordinator.\n\nKONTEKST: Jeg er assurandør. Skaden involverer flere parter\n(fx kunden, modpart, kundens forsikringsselskab, reparatør):\n[indsæt]. Mit ansvar: [indsæt].\n\nMETODE: Plan:\n1. Hvem skal kontaktes først og i hvilken rækkefølge\n2. Hvilke dokumenter skal indsamles fra hver part\n3. Vejledende tidsfrister - markér tydeligt at de er skøn, og skriv\n[selskabets frist] hvor jeg selv skal slå den faktiske frist op\n4. Samlet tidsplan jeg kan kommunikere til kunden, når jeg har\nbekræftet fristerne"
    },
    {
      "id": "7.6",
      "categoryId": "7",
      "categoryName": "Skadesbehandling",
      "title": "Svar til advokat på kundens vegne",
      "body": "ROLLE: Du er min erfarne forsikringskollega med juridisk fornemmelse.\n\nKONTEKST: Jeg er assurandør. Advokat [navn] har skrevet på vegne af\nkunde [navn] i skadessag. Deres brev: [indsæt].\n\nMETODE: Professionelt svar:\n- Saglig tone, ikke defensivt\n- Punkt-for-punkt respons\n- Klar på hvor vi står juridisk og forsikringsmæssigt\n- Henvis til policetekst og fakta\n- Markér med [tjek med jura] alle udsagn om vores juridiske\nposition, som jeg bør få bekræftet af juridisk afdeling før\nafsendelse\n- Maks 300 ord"
    },
    {
      "id": "7.7",
      "categoryId": "7",
      "categoryName": "Skadesbehandling",
      "title": "Oversigt over skadeshistorik",
      "body": "ROLLE: Du er min skadesanalytiker.\n\nKONTEKST: Jeg er assurandør. Jeg uploader kundens skadeshistorik\n[indsæt eller upload: skadeshistorikken].\n\nMETODE:\n1. Kort opsummering af 5-års historik (tabel)\n2. Identificér mønstre i skadesårsager\n3. Tre konklusioner jeg kan bruge til næste rådgivningsmøde\n4. Forslag til risikoforebyggelse kunden kan implementere"
    },
    {
      "id": "7.8",
      "categoryId": "7",
      "categoryName": "Skadesbehandling",
      "title": "Bygningsskadevurdering efter vejrskade",
      "body": "ROLLE: Du er min erfarne skadesvurderer i forsikring.\n\nKONTEKST: Jeg er assurandør. [Kunde] har haft vejrskade [type skade].\nFakta: [indsæt]. Jeg skal estimere dækningsgrundlag og næste skridt.\n\nMETODE:\n1. Sandsynlige reparationsomkostninger (interval)\n2. Dækningsgrundlag ud fra kundens police\n3. Tre ting kunden skal dokumentere til anmeldelsen\n4. Mit næste skridt i skadesbehandlingen"
    },
    {
      "id": "7.9",
      "categoryId": "7",
      "categoryName": "Skadesbehandling",
      "title": "Skadesbilleder → første skadesvurdering",
      "body": "ROLLE: Du er min erfarne taksator-kollega med trænet blik for\nskadesbilleder.\n\nKONTEKST: Jeg er assurandør og uploader kundens skadesbilleder\nsammen med denne prompt. Skadetype: [fx vandskade, stormskade,\nindbrud]. Police i hovedtræk: [produkt, dækninger, selvrisiko].\nKundens korte beskrivelse af hændelsen: [indsæt].\n\nMETODE:\n1. Beskriv systematisk hvad der ses på hvert billede, ét ad gangen\n2. Vurdér sandsynligt skadesomfang og mulig årsag ud fra billederne\n3. Markér tydeligt hvad billederne ikke viser - skriv \"fremgår\nikke af materialet\" frem for at gætte\n4. Supplerende billeder og dokumenter jeg skal bede kunden om\n5. Tre linjer til sagsnotatet jeg kan kopiere direkte ind\nAfslut med et tydeligt forbehold: vurderingen er foreløbig, bygger\nalene på billederne og erstatter ikke besigtigelse eller taksators\nvurdering."
    },
    {
      "id": "8.1",
      "categoryId": "8",
      "categoryName": "Salg og kundeindvendinger",
      "title": "Rollespil - skeptisk forsikringskunde",
      "body": "ROLLE: Du skal være en skeptisk forsikringskunde jeg øver mig på.\n\nKONTEKST: Jeg er assurandør. Kundens profil: [alder, situation, hvilket\nforsikringsprodukt de overvejer, typiske bekymringer - pris,\nnødvendighed, tillid].\n\nMETODE: Du kommer med 3 indvendinger én ad gangen. Jeg svarer. Du\nreagerer realistisk med modargumenter hvis mine svar er tynde.\nEfter 3 runder: feedback. Hvad var mine stærke svar, hvad kunne være\nskarpere?\nStart med indvending 1."
    },
    {
      "id": "8.2",
      "categoryId": "8",
      "categoryName": "Salg og kundeindvendinger",
      "title": "Fem svar til 'det er for dyrt'",
      "body": "ROLLE: Du er min erfarne forsikringssælger-kollega.\n\nKONTEKST: Jeg er assurandør. Kunden siger \"det er for dyrt\" om\n[forsikringsprodukt]. Kunde: [profil]. Dækningen er: [beskrivelse].\n\nMETODE: Giv mig fem forskellige svar:\n1. Værdi-vinkel (hvad dækningen giver dem)\n2. Risk-vinkel (hvad det koster IKKE at have dækningen)\n3. Sammenlignings-vinkel: hjælp kunden med at sammenligne pris OG\ndækningsindhold punkt for punkt - uden at påstå noget om\nkonkurrentens produkt, som jeg ikke har oplyst\n4. Splitning af præmien i mindre bidder (fx månedlig omkostning)\n5. Afdækning (hvad er kundens reelle bekymring?)\nIngen klichéer. Konkrete formuleringer jeg kan sige."
    },
    {
      "id": "8.3",
      "categoryId": "8",
      "categoryName": "Salg og kundeindvendinger",
      "title": "Fem svar til 'jeg har lige fornyet min forsikring et andet sted'",
      "body": "ROLLE: Du er min erfarne forsikringssælger-kollega.\n\nKONTEKST: Jeg er assurandør. Kunden siger \"jeg har lige fornyet min\nforsikring et andet sted\". Kunde: [profil - privat eller erhverv].\n\nMETODE: Fem forskellige svar:\n1. Respekter beslutningen men efterlad åbninger til fremtiden\n2. Tilbyd en \"second opinion\" på deres nuværende dækning uden forpligtelse\n3. Fokusér på hvad der kan være blevet overset i det andet tilbud\n4. Foreslå at holde kontakt til næste fornyelse\n5. Sæt pris på relationen ud over handlen\n6. Hvis privatkunde: nævn nænsomt muligheden for kort opsigelse\n(30 dages varsel til udgangen af en måned, evt. mod gebyr), så kunden\nved at de ikke behøver vente til næste hovedforfald"
    },
    {
      "id": "8.4",
      "categoryId": "8",
      "categoryName": "Salg og kundeindvendinger",
      "title": "Afdække reelle forsikringsmæssige bekymringer",
      "body": "ROLLE: Du er min sælger-coach med forsikringsforståelse.\n\nKONTEKST: Jeg er assurandør. Kunden har sagt: \"[kundens udtalelse]\".\nJeg er i tvivl om hvad den reelle bekymring er bag udsagnet.\n\nMETODE:\n1. Tre sandsynlige 'iceberg'-bekymringer under overfladen (fx tvivl om\ndækning, mistillid til branchen, tidligere dårlig erfaring)\n2. Tre åbne spørgsmål jeg kan stille for at afdække\n3. Lyt-efter-signaler i svaret"
    },
    {
      "id": "8.5",
      "categoryId": "8",
      "categoryName": "Salg og kundeindvendinger",
      "title": "Overvinde 'jeg tænker over det' efter tilbud",
      "body": "ROLLE: Du er min erfarne forsikringssælger-kollega.\n\nKONTEKST: Jeg er assurandør. Kunden siger \"jeg tænker over det\" efter\nmit forsikringstilbud. De har allerede været med i [antal] møder.\n\nMETODE: Tre forskellige afsked-strategier:\n- Respektfuld hard close (tag beslutningen til sig)\n- Soft close (foreslå konkret opfølgning om 2 uger)\n- Afdæk hvad \"tænker over det\" dækker over\nIngen desperat pres."
    },
    {
      "id": "8.6",
      "categoryId": "8",
      "categoryName": "Salg og kundeindvendinger",
      "title": "Mødebriefing før kundebesøg",
      "body": "ROLLE: Du er min forsikringssælger-kollega.\n\nKONTEKST: Jeg er assurandør. Møde med [kunde] i morgen om\n[forsikringsprodukt/gennemgang]. Kort om kunden: [indsæt]. Mit mål med mødet: [indsæt].\n\nMETODE:\n1. Tre mål for mødet i prioriteret rækkefølge\n2. De tre mest sandsynlige indvendinger + mine svar\n3. Afslutningsspørgsmålet jeg skal stille\n4. To smalltalk-åbninger jeg kan bruge"
    },
    {
      "id": "8.7",
      "categoryId": "8",
      "categoryName": "Salg og kundeindvendinger",
      "title": "Opfølgning efter interesseret kundemøde",
      "body": "ROLLE: Du er min kommunikationsassistent.\n\nKONTEKST: Jeg er assurandør. Mødet med [kunde] gik godt. De virkede\ninteresserede i [forsikringsprodukt]. Næste skridt aftalt: [indsæt].\n\nMETODE: Opfølgningsmail:\n- Takker for tiden\n- Opsummerer det vigtigste vi aftalte\n- Bekræfter næste skridt og frist\n- Tilfører én værdi (fx en branche-indsigt eller en case fra en lignende kunde - indsæt\nikke konkrete links, medmindre jeg har givet dem)\n- Maks 150 ord"
    },
    {
      "id": "8.8",
      "categoryId": "8",
      "categoryName": "Salg og kundeindvendinger",
      "title": "Anbefalingsanmodning fra tilfreds kunde",
      "body": "ROLLE: Du er min kommunikationsassistent.\n\nKONTEKST: Jeg er assurandør. Tilfreds kunde [navn] har været hos os\n[år] og har oplevet god skadesbehandling. De har aldrig anbefalet os\nvidere. Jeg vil spørge om en anbefaling.\n\nMETODE: Mail der:\n- Starter varmt (ikke transaktionelt)\n- Spørger med respekt\n- Gør det nemt at sige nej\n- Foreslår konkret form (intro til bekendt, LinkedIn-anbefaling, kort\nsamtale)\n- Maks 130 ord"
    },
    {
      "id": "8.9",
      "categoryId": "8",
      "categoryName": "Salg og kundeindvendinger",
      "title": "Overtagelsesplan når kunden skifter til os",
      "body": "ROLLE: Du er min erfarne kollega med styr på forsikringsaftalelovens\nopsigelsesregler og på at flytte kunder til os uden bøvl.\n\nKONTEKST: Jeg er assurandør. En kunde har sagt ja til at flytte\nsine forsikringer til os. Kundetype: [privat/erhverv]. Nuværende\npolicer: [indsæt pr. police: selskab, produkt, hovedforfald].\nØnsket start hos os: [dato].\n\nMETODE:\n1. Tabel pr. police: opsigelsesmulighed, varsel og tidligste\nophørsdato - for privatkunder typisk opsigelse til hovedforfald\neller kort opsigelse med 30 dages varsel til udgangen af en\nkalendermåned, ofte mod gebyr - for erhverv afhænger det af vilkårene\n2. Samlet tidsplan der sikrer ubrudt dækning: den nye police skal\nstarte præcis når den gamle ophører - hverken dækningshul eller\ndobbeltforsikring - og hvem der gør hvad hvornår\n3. Kort note om fortrydelsesretten på de nye policer for\nprivatkunder, og hvad jeg skal huske at oplyse kunden om\n4. Udkast til opsigelsesbrev til det afgivende selskab, inkl.\nfuldmagtstekst så jeg kan opsige på kundens vegne\n5. Kort mail til kunden der forklarer forløbet trin for trin i\nroligt hverdagssprog - kunden skal føle sig tryg, ikke begravet i\npapirarbejde\nByg kun på de policer og datoer jeg har indsat. Er du i tvivl om\nvarsel eller gebyr hos et konkret selskab, så skriv \"skal tjekkes\ni vilkårene\" frem for at gætte."
    },
    {
      "id": "8.10",
      "categoryId": "8",
      "categoryName": "Salg og kundeindvendinger",
      "title": "Rykker for svar på afgivet tilbud",
      "body": "ROLLE: Du er min erfarne sælger-kollega med sans for timing.\n\nKONTEKST: Jeg er assurandør. Tilbud på [forsikringsprodukt] sendt\ntil [kunde] for [antal dage] siden. Status: [fx ingen reaktion,\neller hvad der er sket siden].\n\nMETODE: Opfølgningssekvens i tre trin med formål og tone pr. trin:\n1. Mail efter 1 uge der tilfører noget nyt - ikke bare en rykker\n2. Kort taleplan til et opkald efter 2 uger\n3. Venlig afrundingsmail efter 4 uger der gør det let at sige nej\nog holder døren åben - intet pres, ingen dårlig samvittighed"
    },
    {
      "id": "8.11",
      "categoryId": "8",
      "categoryName": "Salg og kundeindvendinger",
      "title": "Telefonmanuskript til kold kanvas",
      "body": "ROLLE: Du er min erfarne mødebooker-kollega med forsikringsbaggrund.\nDu ved at målet med opkaldet er mødet - ikke at sælge forsikring i\ntelefonen.\n\nKONTEKST: Jeg er assurandør og ringer koldt til [emne:\nvirksomhed/privatperson, kort beskrivelse]. Min krog: [fx\nbranchekendskab, lokal reference, aktuel begivenhed hos emnet].\nMit mål: [fx 30 minutters uforpligtende gennemgang af deres\nforsikringer].\n\nMETODE: Byg mit opkald i fire dele:\n1. Åbning på maks 20 sekunder: hvem jeg er, hvorfor jeg ringer\ntil netop dem, og ét spørgsmål der gør det let at svare\n2. Tre korte svar til omstillingen eller receptionen - venlige og\nærlige, ingen tricks\n3. Svar på de tre hyppigste afvisninger af selve mødet: \"vi har\nallerede en mægler\", \"send noget på mail\" og \"ring igen efter\nsommerferien\"\n4. Afslutning med to konkrete mødeforslag kunden kan vælge imellem\nSkriv det hele som naturligt talesprog: korte sætninger og ord jeg\nfaktisk ville bruge i telefonen - ikke et manuskript der lyder\noplæst. Ingen sælgerklichéer, intet pres. Et nej skal kunne gives\nuden at det bliver akavet."
    },
    {
      "id": "9.1",
      "categoryId": "9",
      "categoryName": "Brancher",
      "title": "Landbrug - komplet forsikringsbillede",
      "body": "ROLLE: Du er min erfarne landbrugsassurandør.\n\nKONTEKST: Jeg er erhvervsassurandør og skal møde landmand [navn] om\n3 dage. Han driver [beskrivelse - malkekvæg/svin/planteavl, antal dyr,\nhektar].\n\nMETODE: Komplet forsikringsmæssigt risikobillede:\n1. Dyresundhed og besætning (dækning og grænser)\n2. Afgrøder og vejrsensitivitet\n3. Maskinpark og teknologi\n4. Bygninger og brand\n5. Ansvar og erhvervsansvar (produkt, miljø)\n6. Driftstab\nFor hver: de 2 vigtigste spørgsmål til landmanden, og et\nbranchetypisk dækningsniveau (vejledende - tjek mod egne produkter)."
    },
    {
      "id": "9.2",
      "categoryId": "9",
      "categoryName": "Brancher",
      "title": "Byggefirma - forsikringsbehov",
      "body": "ROLLE: Du er min erfarne erhvervsassurandør med speciale i bygge- og\nanlægsbranchen.\n\nKONTEKST: Jeg er assurandør. Byggefirma med [antal] ansatte, årlige\nprojekter [antal/værdi], type arbejde [bolig/erhverv/anlæg].\n\nMETODE:\n1. Obligatoriske forsikringsdækninger i branchen\n2. Stærkt anbefalede dækninger (fx all-risks, ansvarsforsikring,\nbygherreansvar, garantistillelse/entreprenørgaranti)\n3. Nice-to-have dækninger\n4. De 3 typiske \"huller\" jeg ser i forsikringsprogrammer i branchen\n5. Fem diagnostiske spørgsmål til kunden"
    },
    {
      "id": "9.3",
      "categoryId": "9",
      "categoryName": "Brancher",
      "title": "Detailforretning - forsikringsmæssige risici",
      "body": "ROLLE: Du er min erfarne erhvervsassurandør med speciale i\ndetailbranchen.\n\nKONTEKST: Jeg er assurandør. Detailbutik: [type butik], [kvm],\n[beliggenhed], [antal] ansatte.\n\nMETODE:\n1. Top-5 forsikringsmæssige risici for netop denne type butik\n(fx indbrud, brand, vandskade, arbejdsskade, produktansvar)\n2. Typiske skadesscenarier\n3. Anbefalede dækningsniveauer\n4. Tre ting kunden selv kan gøre forebyggende der påvirker præmien"
    },
    {
      "id": "9.4",
      "categoryId": "9",
      "categoryName": "Brancher",
      "title": "Restaurant - forsikringsvinkel",
      "body": "ROLLE: Du er min erfarne erhvervsassurandør med restaurantbranche-erfaring.\n\nKONTEKST: Jeg er assurandør. Restaurant: [type køkken], [antal] ansatte,\n[omsætning], [særlige forhold: åbningstider, udeservering etc].\n\nMETODE:\n1. Brandrisici (køkken + generelt) og relevant dækning\n2. Fødevaresikkerhed og produktansvar\n3. Personale og arbejdsskader\n4. Driftstab ved køkkenbrand eller lukning\n5. Tre forsikringsmæssige ting mange restauranter overser"
    },
    {
      "id": "9.5",
      "categoryId": "9",
      "categoryName": "Brancher",
      "title": "Håndværker (SMV) - forsikringsprogram",
      "body": "ROLLE: Du er min erfarne erhvervsassurandør med speciale i\nhåndværkssegmentet.\n\nKONTEKST: Jeg er assurandør. Håndværksvirksomhed: [fag: tømrer/murer/\nVVS/elektriker], [antal] ansatte, opererer i [område].\n\nMETODE:\n1. Obligatoriske forsikringer (lovkrav for branchen)\n2. Stærkt anbefalede (brancheforventning - fx erhvervsansvar,\nentreprise, løsøre på byggepladser)\n3. Typiske skadesscenarier for faget\n4. Hvad adskiller branchens førende forsikringsprogrammer fra\ngennemsnittet\n5. Fem gode spørgsmål til det første kundemøde"
    },
    {
      "id": "9.6",
      "categoryId": "9",
      "categoryName": "Brancher",
      "title": "Transport- og logistik - forsikringsdækning",
      "body": "ROLLE: Du er min erfarne erhvervsassurandør med speciale i\ntransport- og logistikforsikring.\n\nKONTEKST: Jeg er assurandør. Transportvirksomhed: [antal] lastbiler,\n[nationale/EU/globale] ruter, [type gods].\n\nMETODE:\n1. Særlige forsikringsrisici i branchen\n2. Typiske dækninger jeg bør anbefale (lastbilforsikring, godstransport-\nansvar, chaufførulykke, erhvervsansvar, fragtførerens ansvar CMR)\n3. Internationale forsikringsovervejelser (green card, fragtførerens\nansvar i EU)\n4. EU-regulering jeg bør holde øje med i branchen - angiv kun det\ndu er sikker på, markér usikkerhed, og mind mig om selv at verificere\nden aktuelle status\n5. Fem kritiske spørgsmål til kunden"
    },
    {
      "id": "9.7",
      "categoryId": "9",
      "categoryName": "Brancher",
      "title": "Produktionsvirksomhed - forsikringsprogram",
      "body": "ROLLE: Du er min erfarne erhvervsassurandør med speciale i forsikring\naf fremstillingsvirksomheder.\n\nKONTEKST: Jeg er assurandør. Produktionsvirksomhed: [produkt],\n[antal] ansatte, [omsætning], [eksportandel].\n\nMETODE:\n1. Produktansvar (særligt ved eksport - USA-klausul)\n2. Maskinpark og driftstabsforsikring\n3. Bygninger og lager (brand, storm, vand)\n4. Cyber og IT-afhængighed i produktionen\n5. Tre forsikringsmæssige risici der ofte overses i denne type\nvirksomhed"
    },
    {
      "id": "9.8",
      "categoryId": "9",
      "categoryName": "Brancher",
      "title": "IT- og konsulentvirksomhed - forsikring",
      "body": "ROLLE: Du er min erfarne erhvervsassurandør med speciale i forsikring\naf vidensvirksomheder.\n\nKONTEKST: Jeg er assurandør. IT/konsulenthus: [antal] konsulenter,\n[kundetype], [omsætning].\n\nMETODE:\n1. Professionelt ansvar (E&O - essentielt ved fejl i leverance)\n2. Cyber og dataansvar (GDPR-konsekvenser)\n3. Nøglepersonsforsikring (essentielt i vidensvirksomheder)\n4. Kontorrisici (mindre relevant men stadig)\n5. Tre forsikringsmæssige spørgsmål jeg skal stille om deres\nkontraktvilkår med kunder"
    },
    {
      "id": "9.9",
      "categoryId": "9",
      "categoryName": "Brancher",
      "title": "Landbrug - forsikring ved generationsskifte",
      "body": "ROLLE: Du er min erfarne landbrugsassurandør.\n\nKONTEKST: Jeg er assurandør. Landmand [navn] står over for\ngenerationsskifte. Næste generation: [oplysninger]. Bedrift:\n[beskrivelse].\n\nMETODE:\n1. Fem forsikringsmæssige konsekvenser af generationsskiftet\n2. Nye forsikringsprodukter der bliver aktuelle (fx nøglepersonforsikring,\nlivsforsikring/krydslivsforsikring mellem parterne, tab af\nerhvervsevne-dækning)\n3. Timing - hvad skal ændres hvornår i forsikringsprogrammet\n(herunder jordovertagelse, stuehus vs. driftsbygninger, og besætning\nog maskiner der skifter ejer)\n4. Typiske faldgruber ved generationsskifter set fra forsikringsvinkel"
    },
    {
      "id": "9.10",
      "categoryId": "9",
      "categoryName": "Brancher",
      "title": "Byggeri - stort projekt-forsikring",
      "body": "ROLLE: Du er min erfarne erhvervsassurandør med speciale i\nbyggeprojekt-forsikring.\n\nKONTEKST: Jeg er assurandør. Byggeprojekt: [type, størrelse, varighed,\nkompleksitet].\n\nMETODE:\n1. Nødvendige projekt-forsikringer (entrepriseforsikring/all risks (CAR),\nmontageforsikring (EAR), garantistillelse, bygherreansvar)\n2. Tre \"hvem dækker hvad\"-spørgsmål jeg skal afklare mellem parterne\n3. Typiske forsikringsmæssige tvistepunkter i lignende projekter\n4. Tidspunkter hvor dækning typisk ændres (ved aflevering og ibrugtagning)\n5. Tjekliste til bygherren"
    },
    {
      "id": "9.11",
      "categoryId": "9",
      "categoryName": "Brancher",
      "title": "E-commerce - forsikringsmæssige risici",
      "body": "ROLLE: Du er min erfarne erhvervsassurandør med e-commerce-erfaring.\n\nKONTEKST: Jeg er assurandør. E-commerce: [produkt], [national/\ninternational], [omsætning], [lageromfang].\n\nMETODE:\n1. Cyber og databehandling (GDPR-implikationer og dækning)\n2. Lager og logistik (tyveri, brand, vand)\n3. Produktansvar (særligt ved import fra lande uden for EU/EØS,\nhvor virksomheden selv får producentansvar som importør)\n4. Returhåndtering og svig\n5. Tre forsikringsrisici der typisk overses i unge e-handelsvirksomheder"
    },
    {
      "id": "9.12",
      "categoryId": "9",
      "categoryName": "Brancher",
      "title": "Sundhedsklinik - forsikringsprogram",
      "body": "ROLLE: Du er min erfarne erhvervsassurandør med speciale i forsikring\naf klinikker og sundhedspraksis.\n\nKONTEKST: Jeg er assurandør. Klinik: [type: læge/tandlæge/fysioterapi/\npsykolog], [antal] behandlere, [omsætning].\n\nMETODE:\n1. Professionsansvar (centralt i branchen - patientskadeforsikring,\nbehandlingsansvar)\n2. Cyber og databehandling (sundhedsdata er særlig kategori under GDPR)\n3. Klinikdrift og inventar (brand, vand, tyveri)\n4. Personale-forsikringer\n5. Tre typiske forsikringsmæssige faldgruber i sundhedssektoren"
    },
    {
      "id": "9.13",
      "categoryId": "9",
      "categoryName": "Brancher",
      "title": "Andelsbolig- og ejerforening - forsikringsprogram",
      "body": "ROLLE: Du er min erfarne erhvervsassurandør med speciale i\nandelsbolig- og ejerforeninger.\n\nKONTEKST: Jeg er assurandør. Forening: [andelsbolig-/ejerforening],\n[antal enheder], bygning fra [opførelsesår], særlige forhold: [fx\ntagets alder, rørenes stand, erhvervslejemål, vicevært]. Tilbuddet\nbehandles af en frivillig bestyrelse og evt. generalforsamlingen.\n\nMETODE:\n1. De centrale dækninger for netop denne forening: bygning,\nbestyrelsesansvar, arbejdsskade for vicevært og gårdmand, rør- og\nstikledning, svamp og insekt, huslejetab\n2. Typiske huller ved ældre ejendomme, herunder underforsikring\nhvis forsikringssummen ikke er fulgt med ejendommens værdi\n3. Fem spørgsmål jeg skal stille bestyrelsen på første møde\n4. Sådan præsenterer jeg tilbuddet så en lægmandsbestyrelse\nforstår det og kan tage det med på generalforsamlingen\nTone: konkret og uden fagjargon - bestyrelsen er frivillige."
    },
    {
      "id": "10.1",
      "categoryId": "10",
      "categoryName": "Produktforståelse og forklaringer",
      "title": "Forklar police i tre længder",
      "body": "ROLLE: Du er min kommunikationsassistent med forsikringsforståelse.\n\nKONTEKST: Jeg er assurandør. Policetekst: [indsæt]\n\nMETODE: Tre versioner af forklaringen til kunden:\n1. Elevator (30 ord): kernen i dækningen\n2. Kort (100 ord): hovedpunkter og selvrisiko\n3. Fuld (300 ord): alle detaljer inkl. undtagelser\nAlle i hverdagssprog. Bevar alle vigtige undtagelser og\nselvrisikobetingelser."
    },
    {
      "id": "10.2",
      "categoryId": "10",
      "categoryName": "Produktforståelse og forklaringer",
      "title": "Forskellen mellem to forsikringsprodukter",
      "body": "ROLLE: Du er min forsikringsprodukt-specialist.\n\nKONTEKST: Jeg er assurandør og skal forklare forskellen mellem\n[forsikringsprodukt A] og [forsikringsprodukt B] for en kunde uden\nforsikringsbaggrund.\n\nMETODE:\n1. Én-sætnings sammenfatning af forskellen\n2. Tabel: dækning, prisniveau (kun relativt - typisk\nbilligere/dyrere, ingen beløb), selvrisiko, målgruppe\n3. Tre konkrete eksempler (samme hændelse, forskelligt udfald)\n4. Anbefaling: hvilken kundetype passer til hvilket produkt?"
    },
    {
      "id": "10.3",
      "categoryId": "10",
      "categoryName": "Produktforståelse og forklaringer",
      "title": "Forklar selvrisiko til kunden",
      "body": "ROLLE: Du er min kommunikationsassistent med forsikringsforståelse.\n\nKONTEKST: Jeg er assurandør. Kunden forstår ikke hvad \"selvrisiko\"\nbetyder i deres police.\n\nMETODE:\n1. Forklaring i 3 sætninger\n2. Konkret eksempel de kan relatere til\n3. Hvorfor selvrisikoen eksisterer\n4. Hvordan selvrisikoen påvirker præmien (lavere selvrisiko = højere\npræmie)\nHverdagssprog. Ingen forsikringsjargon."
    },
    {
      "id": "10.4",
      "categoryId": "10",
      "categoryName": "Produktforståelse og forklaringer",
      "title": "Forklar undtagelsesklausul",
      "body": "ROLLE: Du er min kommunikationsassistent med forsikringsforståelse.\n\nKONTEKST: Jeg er assurandør. Policen har undtagelsen: \"[indsæt klausul]\".\nKunden spørger hvad det betyder.\n\nMETODE:\n1. Hvad klausulen betyder i praksis\n2. Konkret eksempel hvor den ville udelukke dækning\n3. Konkret eksempel hvor dækningen stadig er intakt\n4. Hvad kunden kan gøre hvis de vil have klausulen fjernet eller\ndækningen udvidet - beskriv processen, og skriv at prisen afhænger\naf selskabets individuelle vurdering. Angiv ingen beløb.\nKlar, ærlig, ikke defensiv tone."
    },
    {
      "id": "10.5",
      "categoryId": "10",
      "categoryName": "Produktforståelse og forklaringer",
      "title": "Forklar tab af erhvervsevne",
      "body": "ROLLE: Du er min personforsikrings-specialist.\n\nKONTEKST: Jeg er assurandør. Kunde [profil] overvejer en tab af\nerhvervsevne-forsikring. De har kun hørt om produktet én gang.\n\nMETODE: Forklaring:\n1. Hvad produktet er (3 sætninger)\n2. Hvornår forsikringen udbetaler\n3. Hvornår den IKKE udbetaler (vigtige undtagelser)\n4. Et scenarie fra hverdagen der viser værdien\n5. Hvad prisen typisk afhænger af (løn, alder, erhverv,\ndækningsgrad, og om forsikringen tegnes via en pensionsordning) -\nuden konkrete beløb\n6. Maks 300 ord, hverdagssprog"
    },
    {
      "id": "10.6",
      "categoryId": "10",
      "categoryName": "Produktforståelse og forklaringer",
      "title": "Forklar nyværdi vs dagsværdi",
      "body": "ROLLE: Du er min forsikringsprodukt-assistent.\n\nKONTEKST: Jeg er assurandør. Kunden er forvirret over \"nyværdi\" vs\n\"dagsværdi\" i deres indbo- eller husforsikring.\n\nMETODE:\n1. Forskellen i 2 sætninger\n2. Et helt konkret eksempel med tal (fx en 5 år gammel opvaskemaskine)\n3. Hvilken er typisk bedre for kunden og hvorfor\n4. Hvorfor valget påvirker præmien"
    },
    {
      "id": "10.7",
      "categoryId": "10",
      "categoryName": "Produktforståelse og forklaringer",
      "title": "Nye vs gamle betingelser - hvad er ændret",
      "body": "ROLLE: Du er min erfarne kollega med skarpt blik for vilkårsændringer.\n\nKONTEKST: Jeg er assurandør og uploader både gamle og nye\nbetingelser for [produkt] sammen med denne prompt.\n\nMETODE: Byg alene på de to dokumenter og giv mig:\n1. Alle reelle ændringer med afsnitshenvisning til begge versioner,\nopdelt i forbedringer, forringelser og rent redaktionelle - set fra kundens side\n2. De tre ændringer der oftest vil udløse kundespørgsmål\n3. Kort afsnit på hverdagsdansk til genbrug i mails til berørte kunder\nSkriv \"fremgår ikke af materialet\" frem for at gætte."
    },
    {
      "id": "11.1",
      "categoryId": "11",
      "categoryName": "Excel, data og tabeller",
      "title": "Mødenoter → struktureret kundetabel",
      "body": "ROLLE: Du er min data-assistent med forsikringsforståelse.\n\nKONTEKST: Jeg er assurandør. Mine noter fra kundemøde: [indsæt]\n\nMETODE: Omdan til tabel med kolonner: Navn, Alder, Bolig, Familie,\nTransport, Vigtigste forsikringsbehov, Konkret næste skridt.\nÉn række pr. person. Levér tabellen som tab-separeret tekst i én kodeblok, så den kan\nsættes direkte ind i Excel."
    },
    {
      "id": "11.2",
      "categoryId": "11",
      "categoryName": "Excel, data og tabeller",
      "title": "Sammenlign tre forsikringstilbud i tabel",
      "body": "ROLLE: Du er min forsikringsanalytiker.\n\nKONTEKST: Jeg er assurandør. Tre tilbud på [forsikringsprodukt]:\n[indsæt for hver: selskab, dækning, undtagelser, pris, selvrisiko,\nsærlige vilkår].\n\nMETODE: Tabel med hvert selskab som kolonne og rækker for:\n- Årlig præmie\n- Selvrisiko\n- Primære dækninger\n- Væsentlige undtagelser\n- Særlige vilkår\n- Min samlede vurdering\nBasér tabellen alene på de indsatte oplysninger - skriv \"ikke\noplyst\" hvor noget mangler, gæt aldrig. Afrund med 2 linjer\nobservation."
    },
    {
      "id": "11.3",
      "categoryId": "11",
      "categoryName": "Excel, data og tabeller",
      "title": "Porteføljeoversigt af mine kunder",
      "body": "ROLLE: Du er min CRM-assistent med forsikringsforståelse.\n\nKONTEKST: Jeg er assurandør. Mine kunder: [indsæt liste med\nnøgleoplysninger]\n\nMETODE: Tabel med kolonner:\n- Kundenavn\n- Type (privat/erhverv)\n- Årlig præmie\n- Næste fornyelsesdato\n- Skader sidste 12 mdr\n- Næste aftalte handling (hvad og hvornår)\nSorter efter næste fornyelsesdato."
    },
    {
      "id": "11.4",
      "categoryId": "11",
      "categoryName": "Excel, data og tabeller",
      "title": "Skadesoversigt med statistik",
      "body": "ROLLE: Du er min dataanalytiker med forsikringsforståelse.\n\nKONTEKST: Jeg er assurandør. Skader seneste 12 mdr på min portefølje:\n[indsæt rå data]\n\nMETODE:\n1. Tabel med oversigt\n2. Statistik: antal, total udbetalt, gennemsnit, median - angiv for\nhver beregning hvor mange rækker der indgår, så jeg kan kontrollere\n3. Top 3 skadesårsager\n4. Månedlig fordeling\n5. Format: tab-separeret i én kodeblok, klar til Excel\nTip: Upload hellere data som fil, så værktøjets\ndataanalyse-funktion regner - sprogmodeller regner upålideligt i\nhånden."
    },
    {
      "id": "11.5",
      "categoryId": "11",
      "categoryName": "Excel, data og tabeller",
      "title": "Omkostningsfordeling pr. kunde",
      "body": "ROLLE: Du er min regnskabs-assistent.\n\nKONTEKST: Jeg er assurandør. Min tid og mine omkostninger pr. kunde:\n[indsæt data]\n\nMETODE:\n1. Tabel: kunde, timer, direkte omkostninger, præmieindtægt,\ndækningsgrad\n2. Markér kunder hvor dækningsgraden er lav\n3. Tre observationer jeg kan bruge til portefølje-optimering"
    },
    {
      "id": "11.6",
      "categoryId": "11",
      "categoryName": "Excel, data og tabeller",
      "title": "Mit forsikringsår i tal",
      "body": "ROLLE: Du er min forsikringsanalytiker.\n\nKONTEKST: Jeg er assurandør. Året der gik: [indsæt nøgletal og\nbegivenheder - nye kunder, tabte kunder, præmievolumen,\nskadesfrekvens, nye produkter].\n\nMETODE:\n1. Hovedtal i tabel (sammenlignet med sidste år)\n2. Tre vigtigste gevinster\n3. Tre største udfordringer\n4. Prognose for næste år\n5. Maks 2 A4-sider"
    },
    {
      "id": "11.7",
      "categoryId": "11",
      "categoryName": "Excel, data og tabeller",
      "title": "Pris-sammenligning pr. dækningstype",
      "body": "ROLLE: Du er min forsikringsprodukt-analytiker.\n\nKONTEKST: Jeg er assurandør. Priser på samme dækningstype hos\nforskellige selskaber: [indsæt pr. selskab: præmie, selvrisiko,\ngebyrer/rabatter]\n\nMETODE:\n1. Tabel: selskab, præmie, selvrisiko, effektiv årspris\n(= præmie + gebyrer - rabatter)\n2. Markér billigste og dyreste\n3. Beskriv hvilken kombination af præmie og selvrisiko der passer\ntil hhv. skadesfri kunder og kunder med forventede skader - vurdér\nikke selskabernes kvalitet, det fremgår ikke af data"
    },
    {
      "id": "11.8",
      "categoryId": "11",
      "categoryName": "Excel, data og tabeller",
      "title": "Krydssalgs-scanning af min portefølje",
      "body": "ROLLE: Du er min porteføljeanalytiker med forsikringsforståelse.\n\nKONTEKST: Jeg er assurandør. Min kundeliste: [pr. kunde: navn eller initialer,\nprivat/erhverv, produkter, kort om livs- eller virksomhedssituation].\n\nMETODE: Byg alene på listen - antag ikke dækninger jeg ikke har nævnt:\n1. Tabel over de mest oplagte produkthuller pr. kunde\n2. Ringeliste: top 10 efter sandsynlighed og præmiepotentiale\n3. En naturlig anledning og åbningssætning pr. kunde på ringelisten"
    },
    {
      "id": "12.1",
      "categoryId": "12",
      "categoryName": "Intern kommunikation",
      "title": "Handover-note til kollega",
      "body": "ROLLE: Du er min forsikrings-assistent.\n\nKONTEKST: Jeg er assurandør og er syg/på ferie. En kollega skal overtage\nmin kunde [kunde] i [periode]. Status: [indsæt]\n\nMETODE: Handover-note:\n- Kundens nuværende forsikringssituation\n- Seneste aftaler og igangværende sager\n- Hvad kollegaen skal huske (kundens præferencer, sprogtone,\nskadeshistorik, advarsler)\n- Filer at læse\n- Kontaktoplysninger\n- Maks 1 A4"
    },
    {
      "id": "12.2",
      "categoryId": "12",
      "categoryName": "Intern kommunikation",
      "title": "Sagsfremstilling til chefen",
      "body": "ROLLE: Du er min forsikrings-kommunikationsassistent.\n\nKONTEKST: Jeg er assurandør. Sag [beskrivelse] - jeg skal orientere min\nchef. Fakta: [indsæt].\n\nMETODE:\n1. Sagen på 3 linjer (hvad, hvem, status)\n2. Handlinger indtil nu\n3. Udfordringer\n4. Hvad jeg foreslår\n5. Hvad jeg har brug for fra chefen\n6. Maks 200 ord"
    },
    {
      "id": "12.3",
      "categoryId": "12",
      "categoryName": "Intern kommunikation",
      "title": "Eskaleringsmail om skadessag",
      "body": "ROLLE: Du er min erfarne forsikringskollega.\n\nKONTEKST: Jeg er assurandør. En skadessag er ved at gå skævt: [beskriv].\nJeg har brug for at eskalere til [chef/underwriter/jurist].\n\nMETODE: Mail:\n- Saglig, ikke panisk tone\n- Fakta først\n- Hvad jeg har prøvet\n- Hvor jeg er låst\n- Konkret hvad jeg har brug for\n- Maks 180 ord"
    },
    {
      "id": "12.4",
      "categoryId": "12",
      "categoryName": "Intern kommunikation",
      "title": "Anbefaling til produktforbedring",
      "body": "ROLLE: Du er min produktanalytiker med forsikringsforståelse.\n\nKONTEKST: Jeg er assurandør og har observeret et tilbagevendende problem\nmed [forsikringsprodukt/proces] i mit arbejde med kunderne:\n[indsæt eksempler].\n\nMETODE: Anbefaling til produktchef:\n1. Problemet i én sætning\n2. Tre konkrete eksempler fra min kundebase\n3. Tre løsningsforslag\n4. Mit primære forslag og hvorfor\n5. Maks 300 ord\nBrug udelukkende de eksempler jeg har indsat - opfind aldrig nye, og\nhold dem anonyme."
    },
    {
      "id": "12.5",
      "categoryId": "12",
      "categoryName": "Intern kommunikation",
      "title": "Indtegningsoplæg til underwriter",
      "body": "ROLLE: Du er min erfarne underwriter-kollega. Du ved præcis hvad der\nfår en erhvervssag antaget - og hvad der får den sendt retur med\nspørgsmål.\n\nKONTEKST: Jeg er assurandør og skal sende en sag til indtegning:\n- Virksomheden: [navn, branche, ansatte, omsætning, bygninger]\n- Ønskede dækninger: [produkter, summer, særlige ønsker]\n- Skadeshistorik: [skader seneste 5 år: år, type, beløb]\n- Sikring: [alarm, brandsikring, vagtordning, procedurer]\n- Mine noter fra kundemødet: [indsæt]\n\nMETODE: Skriv et indtegningsoplæg der er klar til at sende:\n1. Risikobeskrivelse: virksomhed og aktivitet, kort og præcist\n2. Risikoens styrker: hvad der taler for antagelse\n3. Risikoens svagheder, nævnt åbent - underwriter finder dem\nalligevel, og fortielse koster troværdighed på næste sag\n4. Skadeshistorik med forklaring: mønstre, årsager og hvad kunden\nhar gjort for at forebygge gentagelse\n5. Min indstilling: hvorfor sagen bør antages, og hvilket\nprisniveau jeg vurderer den kan bære\n6. De to spørgsmål underwriter mest sandsynligt stiller - med\nudkast til svar\n7. Til sidst, adskilt fra oplægget: liste over oplysninger\nunderwriter typisk vil savne i denne type sag, så jeg kan\nindhente dem inden fremsendelse\nByg kun på det jeg har indsat - mangler en oplysning, så skriv\n[mangler] i teksten frem for at gætte.\nTone: faglig og ærlig, ikke sælgende. Maks 1 A4-side plus listen."
    },
    {
      "id": "13.1",
      "categoryId": "13",
      "categoryName": "Compliance og sikkerhed",
      "title": "GDPR-tjek af kundemail før afsendelse",
      "body": "ROLLE: Du er min compliance-assistent med forsikringsforståelse.\n\nKONTEKST: Jeg er assurandør og skal sende denne mail til kunde: [indsæt]\n\nMETODE: Tjek for:\n1. Personfølsomme oplysninger der ikke bør sendes ukrypteret\n(CPR-numre, helbredsoplysninger)\n2. Kundedata der bør anonymiseres eller sløres\n3. Formulerings-risici (forpligtende løfter om dækning)\n4. Juridiske ord der kan misforstås\nMarkér konkret hvad der bør ændres."
    },
    {
      "id": "13.2",
      "categoryId": "13",
      "categoryName": "Compliance og sikkerhed",
      "title": "Forslag til AI-brugspolitik i forsikringsselskab",
      "body": "ROLLE: Du er min compliance-rådgiver med forsikringsforståelse.\n\nKONTEKST: Jeg er assurandør og vil foreslå en AI-brugspolitik til mit\nforsikringsselskab. Nuværende tilstand: [indsæt - uklar, ingen, delvis].\n\nMETODE: Brev til ledelsen:\n- Problemet (ingen klar politik for AI-brug hos assurandører)\n- Risici ved status quo (GDPR, kundedata, hallucination)\n- Tre principper for god AI-brug hos assurandører\n- Forslag til næste skridt\n- Maks 1 A4"
    },
    {
      "id": "13.3",
      "categoryId": "13",
      "categoryName": "Compliance og sikkerhed",
      "title": "Juridisk risiko-tjek af tilbud",
      "body": "ROLLE: Du er min juridiske sparringspartner med forsikringsforståelse.\n\nKONTEKST: Jeg er assurandør. Mit tilbud til [kunde]: [indsæt]\n\nMETODE:\n1. Gennemgå for formuleringer der kan udgøre juridisk eller\nforsikringsmæssig risiko (fx for bredt formuleret dækning,\nuklare forbehold)\n2. Markér afsnit der skal gennemses af jurist eller underwriter\n3. Foreslå alternative formuleringer\n4. Samlet risikovurdering: lav/mellem/høj med begrundelse - og\nnotér at afsnit markeret under punkt 2 altid skal godkendes af\njurist eller underwriter, uanset den samlede vurdering"
    },
    {
      "id": "13.4",
      "categoryId": "13",
      "categoryName": "Compliance og sikkerhed",
      "title": "Rådgivningsdokumentation",
      "body": "ROLLE: Du er min compliance-assistent.\n\nKONTEKST: Jeg er assurandør. Mødet med [kunde] varede [tid].\nEmner: [indsæt]. Kundens situation, ønsker og behov: [indsæt].\nHvad jeg har rådet: [indsæt].\n\nMETODE: Rådgivningsdokumentation til sagsmappen:\n- Kundens krav og behov som afdækket på mødet\n- Hvilke forsikringsprodukter blev diskuteret\n- Hvilke anbefalinger gav jeg - med begrundelse for hver anbefaling\ni forhold til kundens krav og behov (jf. IDD og god skik-reglerne)\n- Hvilke reservationer eller forbehold gjorde jeg\n- Hvad blev aftalt skriftligt\n- Format: kopierbar til rådgivningsjournal, jf. god skik-regler"
    },
    {
      "id": "13.5",
      "categoryId": "13",
      "categoryName": "Compliance og sikkerhed",
      "title": "Anonymisering af kundecase før AI-brug",
      "body": "ROLLE: Du er min dataassistent.\n\nKONTEKST: Jeg er assurandør. Jeg vil bruge denne kundecase i et\nAI-værktøj som ChatGPT eller Claude: [indsæt]\n\nMETODE:\n1. Identificér alle personoplysninger (navne, CPR, adresser,\nvirksomhedsnavne, CVR)\n2. Foreslå anonymiseret version hvor jeg stadig får samme kvalitet i\nrådgivningen\n3. Bevar alle fakta jeg har brug for til forsikringsrådgivning\n4. Vis før/efter"
    },
    {
      "id": "13.6",
      "categoryId": "13",
      "categoryName": "Compliance og sikkerhed",
      "title": "Mødenoter → krav- og behovsanalyse",
      "body": "ROLLE: Du er min compliance-assistent med kendskab til kravet om\nkrav- og behovsanalyse i forsikringsdistributionsloven (IDD).\n\nKONTEKST: Jeg er assurandør og har holdt møde med [kunde:\nprivat/erhverv, kort profil]. Mine mødenoter eller stikord: [indsæt].\nJeg påtænker at anbefale: [produkt og dækningsniveau].\n\nMETODE: Omdan mine noter til en krav- og behovsanalyse til sagen:\n1. Kundens oplyste krav og behov, punkt for punkt - brug kundens\negne ord hvor de fremgår af noterne\n2. Anbefalet produkt og dækningsniveau med eksplicit begrundelse\nfor hvordan det stemmer overens med hvert enkelt behov\n3. Alternativer jeg har fravalgt, og hvorfor\n4. Behov der endnu ikke er afdækket: markér dem tydeligt og\nforeslå 3-5 opfølgende spørgsmål til næste kontakt\n5. Kort liste over det jeg selv skal kontrollere og godkende, før\nanalysen lægges på sagen\nByg kun på det der står i mine noter - digt ikke behov eller\nudsagn til, og skriv \"skal verificeres\" hvor noterne er uklare.\nHar mit selskab sin egen skabelon til krav- og behovsanalyse, går\nden forud for dette format.\nFormat: nøgtern journalstil, kopierbar til sagssystemet."
    },
    {
      "id": "13.7",
      "categoryId": "13",
      "categoryName": "Compliance og sikkerhed",
      "title": "Lovpligtige forsikringer hos erhvervskunde",
      "body": "ROLLE: Du er min underwriter-kollega med styr på hvilke\nforsikringer der er lovpligtige for danske virksomheder.\n\nKONTEKST: Jeg er erhvervsassurandør. Kunden: [branche og\naktiviteter], [antal ansatte], [køretøjer], [særlige forhold: fx\nbyggeri, rådgivning, hunde]. Nuværende policer: [indsæt liste].\n\nMETODE:\n1. Tabel over de forsikringer der er lovpligtige for netop denne\nvirksomhed, med kort angivelse af regelgrundlaget\n2. Match mod kundens nuværende program: opfyldt, mangler, uklart\n3. Konsekvenser ved manglende dækning (fx bøde, personlig\nhæftelse, regres)\n4. Prioriteret handlingsliste - det alvorligste hul øverst\nByg kun på det jeg har oplyst, og skriv \"skal verificeres\" ud for\nhver regel du ikke er sikker på - gæt aldrig på lovkrav."
    },
    {
      "id": "13.8",
      "categoryId": "13",
      "categoryName": "Compliance og sikkerhed",
      "title": "Lovpligtig kundeinformation før tilbud",
      "body": "ROLLE: Du er min compliance-assistent med kendskab til\ninformationskravene i god skik-bekendtgørelsen og IDD.\n\nKONTEKST: Jeg er assurandør og er klar til at sende et tilbud.\nProdukt: [produkttype], kunde: [privat/erhverv], kanal: [mail,\nmøde, telefon]. Mit følgebrev eller materiale: [indsæt evt.].\n\nMETODE:\n1. Tjekliste over den information kunden skal have inden\naftaleindgåelse for denne produkt- og kundetype - fx IPID ved\nskadesforsikring til private, krav- og behovsanalyse, oplysning om\naflønningens karakter, klagevejledning og fortrydelsesret\n2. Markér for hvert punkt: dækket i mit materiale eller mangler\n3. Foreslå korte standardformuleringer til det der mangler\nEr du usikker på om et krav gælder her, så skriv \"skal verificeres\"\ni stedet for at gætte - og husk mig på at mit selskabs egne\ncompliance-skabeloner altid går forud."
    },
    {
      "id": "14.1",
      "categoryId": "14",
      "categoryName": "Refleksion og svære situationer",
      "title": "Refleksion efter tabt forsikringssag",
      "body": "ROLLE: Du er min reflekterende coach med forsikringsforståelse.\n\nKONTEKST: Jeg er assurandør og har lige tabt [sag/deal]. Forløbet:\n[indsæt]\n\nMETODE: Start med at stille 2-3 opklarende spørgsmål om forløbet, og\nvent på mine svar før du fortsætter. Giv mig derefter:\n1. Tre faktorer jeg kunne have gjort anderledes i\nforsikringsrådgivningen\n2. Tre faktorer der ikke var inden for min kontrol (markedspris,\neksisterende relationer, selskabets betingelser)\n3. Én konkret læring at tage med"
    },
    {
      "id": "14.2",
      "categoryId": "14",
      "categoryName": "Refleksion og svære situationer",
      "title": "Sparring om svært kundeforhold",
      "body": "ROLLE: Du er min kollega-coach med forsikringsforståelse.\n\nKONTEKST: Jeg er assurandør og har et vanskeligt forhold til [kunde]:\n[beskriv]\n\nMETODE: Hjælp mig tænke:\n1. Stil 3 åbne spørgsmål først, og vent på mine svar før du\nfortsætter til punkt 2-4\n2. Foreslå tre mulige årsager til situationen (mistillid efter skade,\nkommunikationsstil, forventningsafstemning)\n3. Tre måder at gå forfra på\n4. Én konkret handling næste uge\nCoach-tone, ikke rådgiver-tone."
    },
    {
      "id": "15.1",
      "categoryId": "15",
      "categoryName": "Planlægning og faste rutiner",
      "title": "Ugeplan ud fra tilbud og fornyelser",
      "body": "ROLLE: Du er min salgsplanlægger med sans for assurandørens hverdag.\n\nKONTEKST: Jeg er assurandør og planlægger den kommende uge.\nÅbne tilbud: [kunde, præmie, hvornår sendt]\nHovedforfald og fornyelser: [kunde, dato, præmie]\nAftalte møder og leads der skal ringes op: [indsæt]\nStatus mod budget: [fx 78 procent af årsmålet]\nFaste blokke: [fx tavlemøde mandag, fri fredag eftermiddag]\n\nMETODE:\n1. Ugens 5 vigtigste aktiviteter, prioriteret efter deadline,\npræmie og lukkesandsynlighed - én linjes begrundelse pr. aktivitet\n2. Tidsblokke for møder, opfølgning, kanvas og administration\n3. Advarsel: hvad falder mellem stolene hvis ugen skrider, og hvad\nkan i så fald bedst vente til næste uge\nByg kun på det indsatte. Format: klar til kalenderen, maks 1 A4-side."
    },
    {
      "id": "15.2",
      "categoryId": "15",
      "categoryName": "Planlægning og faste rutiner",
      "title": "Min faste assurandør-instruks - gem som projekt",
      "body": "Gem teksten nedenfor som fast instruks i dit AI-værktøj - som\nprojekt i ChatGPT eller Claude, eller som fast instruktion i\nCopilot. Udfyld pladsholderne én gang, og start derefter alle dine\nkundeopgaver i det projekt. Så kender AI'en din rolle, dine kunder\nog din tone i hver eneste samtale, uden at du skal forklare forfra.\nDu er min faste AI-assistent i mit arbejde som assurandør.\nHvem jeg er: [privat- eller erhvervsassurandør] hos [selskab], med\nspeciale i [fx landbrug, håndværk, boligforeninger] og primært\narbejde i [geografisk område].\nMine typiske kunder: [fx håndværksvirksomheder med 5-50 ansatte,\nbørnefamilier med hus og to biler].\nMin tone: [fx ligefrem, varm og uden fagjargon] - og altid\nnaturligt dansk.\nMine standardformater:\n- Mødereferat: [fx nuværende situation, behov, næste skridt, frist]\n- Opfølgningsmail: [fx maks 150 ord, bekræfter aftaler, venlig]\n- Tilbudsbrev: [fx kundens situation først, så dækninger og pris]\nFaste regler for alle svar:\n- Svar på dansk, medmindre jeg beder om andet\n- Sig \"det ved jeg ikke - skal slås op\" frem for at gætte på\nvilkår, regler eller priser\n- Formulér aldrig bindende tilsagn om dækning eller pris - den\nbeslutning er min\n- Stil et opklarende spørgsmål hvis opgaven er uklar, i stedet for\nat antage"
    }
  ]
};
