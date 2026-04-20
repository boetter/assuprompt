/**
 * prompts.js – generated from Prompt-bibliotek.txt.
 * Do not edit by hand. Run `node scripts/build-data.mjs` to regenerate.
 *
 * Prompts: 115 · Categories: 13 · Industries: 10
 */
window.PROMPTS_DATA = {
  "categories": [
    {
      "id": "1",
      "name": "Kunderesearch og mødeforberedelse"
    },
    {
      "id": "2",
      "name": "Mødenoter og referater"
    },
    {
      "id": "3",
      "name": "Kundekommunikation - privatkunder"
    },
    {
      "id": "4",
      "name": "Kundekommunikation - erhvervskunder"
    },
    {
      "id": "5",
      "name": "Tilbudsskrivning og præsentationer"
    },
    {
      "id": "6",
      "name": "Risikovurdering og analyse"
    },
    {
      "id": "7",
      "name": "Skadesbehandling"
    },
    {
      "id": "8",
      "name": "Salg og kundeindvendinger"
    },
    {
      "id": "10",
      "name": "Produktforståelse og forklaringer"
    },
    {
      "id": "11",
      "name": "Excel, data og tabeller"
    },
    {
      "id": "12",
      "name": "Intern kommunikation"
    },
    {
      "id": "13",
      "name": "Compliance og sikkerhed"
    },
    {
      "id": "14",
      "name": "Refleksion og svære situationer"
    }
  ],
  "industries": [
    {
      "id": "byggeri",
      "name": "Byggeri"
    },
    {
      "id": "detail",
      "name": "Detailhandel"
    },
    {
      "id": "ecommerce",
      "name": "E-commerce"
    },
    {
      "id": "haandvaerk",
      "name": "Håndværk"
    },
    {
      "id": "it",
      "name": "IT og rådgivning"
    },
    {
      "id": "landbrug",
      "name": "Landbrug"
    },
    {
      "id": "produktion",
      "name": "Produktion"
    },
    {
      "id": "restauration",
      "name": "Restauration"
    },
    {
      "id": "sundhed",
      "name": "Sundhed"
    },
    {
      "id": "transport",
      "name": "Transport og logistik"
    }
  ],
  "prompts": [
    {
      "id": "1.1",
      "categoryId": "1",
      "categoryName": "Kunderesearch og mødeforberedelse",
      "industryId": null,
      "industryName": null,
      "title": "Erhvervskunde-briefing før mødet",
      "body": "ROLLE: Du er min research-assistent med mange års erfaring i dansk\nerhvervsforsikring.\n\nKONTEKST: Jeg er erhvervsassurandør og skal i næste uge holde et\nforberedende møde med virksomheden [NAVN, CVR xxxxxxxx]. Mit mål er at\nforstå deres forretning og identificere forsikringsbehov.\n\nMETODE: Lav en briefing på maks 1 A4-side:\n1. Kerneforretning og seneste regnskabstal (omsætning, resultat, ansatte)\n2. Ejerstruktur og nøglepersoner\n3. Tre største forsikringsmæssige risikoeksponeringer ud fra branche og størrelse\n4. Nyheder fra seneste 6 måneder der påvirker forsikringsbehov\n5. Tre åbnende spørgsmål til mødet\nKildehenvisninger under hvert punkt. Vær skeptisk - sig \"jeg ved det ikke\"\nfrem for at gætte."
    },
    {
      "id": "1.2",
      "categoryId": "1",
      "categoryName": "Kunderesearch og mødeforberedelse",
      "industryId": null,
      "industryName": null,
      "title": "Brancheresearch med forsikringsvinkel",
      "body": "ROLLE: Du er brancheanalytiker med særligt fokus på forsikringsrisici\ni danske brancher.\n\nKONTEKST: Jeg er erhvervsassurandør og skal rådgive en virksomhed inden\nfor [BRANCHE] om deres forsikringsprogram.\n\nMETODE: Giv mig:\n- Markedsstørrelse og vækstrate i Danmark\n- De 5 største aktører og deres typiske risikoprofil\n- Vigtigste trends og disruptions 2025-2026 der påvirker forsikringsbehov\n- Regulatoriske ændringer (fx nye krav til erhvervsansvar, cyber, miljø)\n- Typiske skadesscenarier og risikoeksponeringer i branchen\nAngiv danske kilder."
    },
    {
      "id": "1.3",
      "categoryId": "1",
      "categoryName": "Kunderesearch og mødeforberedelse",
      "industryId": null,
      "industryName": null,
      "title": "Privatkundeforberedelse fra stamdata",
      "body": "ROLLE: Du er min erfarne kollega-assurandør med 20 års erfaring i\nprivatkunde-rådgivning (indbo, hus, bil, liv, ulykke, pension).\n\nKONTEKST: Jeg er assurandør og skal møde en familie jeg kender disse\noplysninger om:\n- Par, midt 40'erne, to børn (13 og 10)\n- Hus købt 2020 til 4,2 mio, belåning 65%\n- En selvstændig, en funktionær\n- Arvet sommerhus sidste år\n- Ingen nuværende rådgivning fra mig\n\nMETODE:\n1. De 5 vigtigste spørgsmål at åbne mødet med\n2. De 3 største forsikringsmæssige blinde vinkler jeg bør adressere\n3. To-tre forsikringsprodukter de sandsynligvis mangler, og hvorfor\n4. En mødedagsorden på 60 min til en samlet forsikringsgennemgang\nTone: kollegial, ikke salgsagtig."
    },
    {
      "id": "1.4",
      "categoryId": "1",
      "categoryName": "Kunderesearch og mødeforberedelse",
      "industryId": null,
      "industryName": null,
      "title": "Sammenlign forsikringsprogrammet i tre virksomheder",
      "body": "ROLLE: Du er min analytiker-kollega med speciale i erhvervsforsikring.\n\nKONTEKST: Jeg er erhvervsassurandør og rådgiver tre virksomheder inden\nfor [BRANCHE]: A [navn], B [navn], C [navn].\n\nMETODE: Sammenlign dem på:\n- Størrelse og markedsposition\n- Forretningsmodel og risikoprofil\n- Sandsynlig forsikringsdækning i branchen\n- Hvor de adskiller sig fra hinanden rent forsikringsmæssigt\nGiv det som en tabel. Slut med 3 observationer jeg kan bruge til at\ntilpasse min rådgivning."
    },
    {
      "id": "1.5",
      "categoryId": "1",
      "categoryName": "Kunderesearch og mødeforberedelse",
      "industryId": null,
      "industryName": null,
      "title": "Prospektering af nye erhvervskunder",
      "body": "ROLLE: Du er min prospekterings-assistent med forsikringsblik.\n\nKONTEKST: Jeg er erhvervsassurandør i området [by/region] og\nspecialiserer mig i [branche/virksomhedsstørrelse]. Jeg søger\nvirksomheder hvor der er sandsynlighed for at deres forsikringsprogram\nkunne optimeres.\n\nMETODE: Foreslå 10 virksomheder i området der matcher min profil.\nFor hver:\n- Navn og kort beskrivelse\n- Hvorfor den er et godt match (størrelse, branche-specifik risiko)\n- Én hypotese om hvad der potentielt er underdækket\n- Én måde at starte en samtale op\nBrug offentlige kilder. Angiv dem."
    },
    {
      "id": "1.6",
      "categoryId": "1",
      "categoryName": "Kunderesearch og mødeforberedelse",
      "industryId": "landbrug",
      "industryName": "Landbrug",
      "title": "Landmandsforberedelse",
      "body": "ROLLE: Du er min erfarne kollega med 20 års erfaring i landbrugs-\nforsikring.\n\nKONTEKST: Jeg er erhvervsassurandør og skal om en time besøge en\nlandmand der driver [type brug: malkekvæg/svin/planteavl] med\n[antal dyr/hektar]. Han overvejer [konkret ændring].\n\nMETODE: Giv mig de 5 vigtigste spørgsmål. Rækkefølge:\n1. Dyre/afgrøde-forsikring\n2. Driftstab\n3. Maskin/teknologi\n4. Brand bygninger\n5. Ansvar\nFormat: Tabel med Område / Spørgsmål / Hvad jeg skal lytte efter.\nMaks 15 ord pr. felt. Jordnær tone, ingen forsikringsjargon over for\nlandmanden."
    },
    {
      "id": "1.7",
      "categoryId": "1",
      "categoryName": "Kunderesearch og mødeforberedelse",
      "industryId": null,
      "industryName": null,
      "title": "Forbered genforhandling af forsikringsprogram",
      "body": "ROLLE: Du er min erfarne forsikringsrådgiver-kollega med erfaring i\nsvære genforhandlinger.\n\nKONTEKST: Jeg er assurandør og skal holde en genforhandling med en\neksisterende erhvervskunde [kort beskrivelse]. De har trykket på prisen\nog overvejer at skifte selskab.\n\nMETODE: Forbered mig:\n1. Tre argumenter for at blive hos os ud over pris (fx service,\nskadesbehandling, lokal kontakt)\n2. Tre typiske pris-modargumenter fra konkurrenter og hvordan jeg\nhåndterer dem\n3. En fallback-position hvis prisen ikke kan matches\n4. Afslutningssætning hvis de alligevel vælger at gå"
    },
    {
      "id": "1.8",
      "categoryId": "1",
      "categoryName": "Kunderesearch og mødeforberedelse",
      "industryId": null,
      "industryName": null,
      "title": "Kom ind i ny branche jeg ikke forsikringsmæssigt kender",
      "body": "ROLLE: Du er min erfarne kollega i forsikringsbranchen.\n\nKONTEKST: Jeg er assurandør og har mulighed for at arbejde med en ny\ntype kunde - [beskriv branche]. Jeg har aldrig forsikret denne branche\nfør og skal op i tempo hurtigt.\n\nMETODE: Lav en førstehjælpsguide:\n- Branchens særlige risici\n- Typiske forsikringsbehov og obligatoriske dækninger\n- 10 nøgletermer fra branchen jeg skal kende\n- Tre typiske faldgruber ved at forsikre denne branche\n- Fem gode spørgsmål til det første kundemøde"
    },
    {
      "id": "1.9",
      "categoryId": "1",
      "categoryName": "Kunderesearch og mødeforberedelse",
      "industryId": null,
      "industryName": null,
      "title": "Vurdering af kundens nuværende forsikringsprogram",
      "body": "ROLLE: Du er min analytiker-kollega med speciale i forsikringsprogrammer.\n\nKONTEKST: Jeg er assurandør og har fået indsigt i en potentiel kundes\nnuværende forsikringsdækninger fra et andet selskab. Oversigten: [indsæt]\n\nMETODE: Vurdér:\n1. Er der huller i dækningen?\n2. Er der overlap/dobbeltdækning?\n3. Er selvrisikoerne fornuftige ift. kundens situation?\n4. Hvilke tre anbefalinger ville du give kunden?\nVær direkte og konkret. Undgå generiske råd."
    },
    {
      "id": "1.10",
      "categoryId": "1",
      "categoryName": "Kunderesearch og mødeforberedelse",
      "industryId": null,
      "industryName": null,
      "title": "Læs kundens årsrapport med forsikringsbriller på",
      "body": "ROLLE: Du er min økonomiske analytiker med fokus på forsikringsrelevante\nrisici.\n\nKONTEKST: Jeg er erhvervsassurandør og uploader en kundes årsrapport.\nJeg skal forstå deres økonomi som baggrund for forsikringsrådgivning.\n\nMETODE:\n1. Opsummér økonomien i 5 bullet points (i dagligdagssprog)\n2. Identificér 3 forhold i regnskabet der signalerer nye eller ændrede\nforsikringsbehov (fx ny datterselskab, større lager, flere ansatte,\neksport til nye markeder)\n3. Foreslå 3 konkrete rådgivningsemner jeg kan bringe op\n4. Formulér en åbningssætning der viser jeg har læst rapporten"
    },
    {
      "id": "1.11",
      "categoryId": "1",
      "categoryName": "Kunderesearch og mødeforberedelse",
      "industryId": null,
      "industryName": null,
      "title": "Generationsskifte - forsikringsvinkel",
      "body": "ROLLE: Du er min forsikringsrådgiver-kollega med speciale i\ngenerationsskifter i dansk erhvervsliv.\n\nKONTEKST: Jeg er erhvervsassurandør og har en kunde der står over for\net generationsskifte: [kort beskrivelse af virksomhed og skiftet].\n\nMETODE: Giv mig:\n1. De 5 vigtigste forsikringsmæssige overvejelser ved skiftet\n(fx nøglepersonforsikring, ejerskifte i policer, nye risikoprofiler)\n2. Tre forsikringsprodukter der typisk bliver aktuelle\n3. Tre typiske faldgruber ved generationsskifter set fra\nforsikringsvinkel\n4. En naturlig åbning til samtalen med kunden"
    },
    {
      "id": "1.12",
      "categoryId": "1",
      "categoryName": "Kunderesearch og mødeforberedelse",
      "industryId": null,
      "industryName": null,
      "title": "Årsmøde med eksisterende kunde",
      "body": "ROLLE: Du er min forberedelses-assistent til årlige\nforsikringsgennemgangsmøder.\n\nKONTEKST: Jeg er assurandør og skal holde det årlige gennemgangsmøde\nmed en familiekunde. Sidste møde var for 11 måneder siden. Noter fra\nsidst: [indsæt]\n\nMETODE:\n1. Tjekliste over ting at følge op på fra sidste møde\n2. Liste over \"what's new\" i forsikringsbranchen der kan være relevant\n(nye produkter, ændrede vilkår, prisudvikling)\n3. Tre trin til et godt mødeforløb\n4. En venlig indledende mail der bekræfter mødet"
    },
    {
      "id": "1.13",
      "categoryId": "1",
      "categoryName": "Kunderesearch og mødeforberedelse",
      "industryId": null,
      "industryName": null,
      "title": "Hurtig research om nyt forsikringsprodukt",
      "body": "ROLLE: Du er min forsikringsprodukt-specialist.\n\nKONTEKST: Jeg er assurandør og mit selskab har netop lanceret\n[produkt]. Jeg skal kunne præsentere det for kunder i morgen.\n\nMETODE:\n1. Produktets kernefordel i én sætning\n2. Tre typiske kundetyper det passer til\n3. Fem konkrete spørgsmål jeg kan stille for at afdække behov\n4. En 2-minutters elevatortale jeg kan sige til en kunde"
    },
    {
      "id": "2.1",
      "categoryId": "2",
      "categoryName": "Mødenoter og referater",
      "industryId": null,
      "industryName": null,
      "title": "Stikord → mødereferat",
      "body": "ROLLE: Du er min forsikrings-assistent der hjælper med at strukturere\nmødenoter fra kundemøder.\n\nKONTEKST: Jeg er assurandør. Mine stikord fra et møde med [kunde]:\n[indsæt stikord]\n\nMETODE: Lav et mødereferat med afsnittene:\n- Kundens nuværende situation (familiemæssigt/forretningsmæssigt +\nnuværende forsikringer)\n- Identificerede forsikringsbehov\n- Aftalt næste skridt\n- Frist\nFulde sætninger. Professionel tone. Dansk."
    },
    {
      "id": "2.2",
      "categoryId": "2",
      "categoryName": "Mødenoter og referater",
      "industryId": null,
      "industryName": null,
      "title": "Stikord → referat + opfølgningsmail",
      "body": "ROLLE: Du er min forsikrings-assistent.\n\nKONTEKST: Jeg er assurandør og har lige haft et kundemøde. Mine stikord:\n[indsæt]\n\nMETODE: Lav to leverancer:\n\nLEVERANCE 1 - Mødereferat til sagsmappen:\n- Nuværende situation\n- Identificerede forsikringsbehov\n- Aftalt næste skridt\n- Frist\n\nLEVERANCE 2 - Opfølgningsmail til kunden:\n- Maks 150 ord\n- Takker for mødet\n- Bekræfter aftalerne\n- Varm men professionel tone"
    },
    {
      "id": "2.3",
      "categoryId": "2",
      "categoryName": "Mødenoter og referater",
      "industryId": null,
      "industryName": null,
      "title": "Telefonsamtale → notat og opfølgning",
      "body": "ROLLE: Du er min forsikrings-assistent.\n\nKONTEKST: Jeg er assurandør og har netop haft en telefonsamtale med en\nkunde. Stikord: [indsæt]\n\nMETODE:\n1. Et internt notat til kundens sagsmappe på maks 100 ord\n2. Liste over action points med deadlines\n3. Én opfølgende mail til kunden på maks 80 ord"
    },
    {
      "id": "2.4",
      "categoryId": "2",
      "categoryName": "Mødenoter og referater",
      "industryId": null,
      "industryName": null,
      "title": "Transkription af kundemøde → struktureret referat",
      "body": "ROLLE: Du er min referent med forsikringsforståelse.\n\nKONTEKST: Jeg er assurandør. Jeg uploader en transskription af et\n45-minutters kundemøde. Kunde: [kort profil].\n\nMETODE: Struktureret referat:\n1. Nøglepointer fra kunden om deres situation og bekymringer\n2. Mine tilsagn og leverancer (hvad jeg skal levere, hvornår)\n3. Kundens indvendinger mod forslag eller produkter\n4. Konkrete aftaler med deadlines\n5. Spørgsmål der stadig hænger i luften\nBrug citater hvor relevant. Angiv hvem sagde hvad."
    },
    {
      "id": "2.5",
      "categoryId": "2",
      "categoryName": "Mødenoter og referater",
      "industryId": null,
      "industryName": null,
      "title": "Ugerapport fra flere kundemøder",
      "body": "ROLLE: Du er min administrative assistent med kendskab til\nassurandørarbejde.\n\nKONTEKST: Jeg er assurandør og har haft 8 kundemøder denne uge. Noter\nfra hvert: [indsæt]\n\nMETODE: Uge-rapport til min chef:\n- Antal møder og type (privat/erhverv)\n- Tre vigtigste resultater (nye tilbud, lukkede deals, genforhandlinger)\n- Tre udfordringer jeg har mødt\n- Forventede nye forretninger og præmieindtægt\n- Ting jeg har brug for hjælp til\nMaks 300 ord. Professionel tone."
    },
    {
      "id": "2.6",
      "categoryId": "2",
      "categoryName": "Mødenoter og referater",
      "industryId": null,
      "industryName": null,
      "title": "Mødeindkaldelse til kunde",
      "body": "ROLLE: Du er min kommunikationsassistent.\n\nKONTEKST: Jeg er assurandør og skal indkalde [kunde] til et møde.\nFormål: [beskrivelse - gennemgang af forsikringsprogram, tilbud på nyt\nprodukt, skadessag, genforhandling]. Forslag til tid: [tid].\nSted: [sted].\n\nMETODE: Mail der:\n- Er kort og konkret (maks 120 ord)\n- Tydeligt formål\n- Klart sted og tid\n- Angiver hvad kunden skal forberede (fx medbringe nuværende policer,\nskadeshistorik, årsrapport)\n- Venlig men professionel tone"
    },
    {
      "id": "2.7",
      "categoryId": "2",
      "categoryName": "Mødenoter og referater",
      "industryId": null,
      "industryName": null,
      "title": "Kundemødeforberedelse ud fra relationens historik",
      "body": "ROLLE: Du er min forsikringskollega.\n\nKONTEKST: Jeg er assurandør og skal ringe til [kunde] i morgen. Alle\nmine tidligere notater om dem: [indsæt]\n\nMETODE:\n1. Opsummér relationens forsikringsmæssige historik i 5 bullet points\n2. Identificér det vigtigste uafsluttede punkt\n3. Foreslå 3 åbningsspørgsmål\n4. Advar mig om ting jeg bør undgå baseret på historikken"
    },
    {
      "id": "3.1",
      "categoryId": "3",
      "categoryName": "Kundekommunikation - privatkunder",
      "industryId": null,
      "industryName": null,
      "title": "Introduktionsmail til ny privatkunde",
      "body": "ROLLE: Du er min kommunikationsassistent med erfaring i\nforsikringsrådgivning til privatkunder.\n\nKONTEKST: Jeg er assurandør og har fået henvist en ny privatkunde fra\n[kilde]. De har oplyst disse forsikringsbehov: [indsæt]. Jeg vil\npræsentere mig og foreslå et indledende møde.\n\nMETODE: Mail på maks 150 ord:\n- Starter varmt uden at være familiær\n- Kort præsentation af mig og mit speciale\n- Viser jeg har forstået deres situation\n- Foreslår konkret næste skridt\n- Slutter let og uforpligtende"
    },
    {
      "id": "3.2",
      "categoryId": "3",
      "categoryName": "Kundekommunikation - privatkunder",
      "industryId": null,
      "industryName": null,
      "title": "Årlig opfølgning",
      "body": "ROLLE: Du er min kommunikationsassistent.\n\nKONTEKST: Jeg er assurandør og skal sende en årlig opfølgningsmail til\nen kunde jeg ikke har talt med i 12 mdr. Kunde: [kort profil].\nNuværende forsikringer hos os: [indsæt]\n\nMETODE: Mail på maks 180 ord:\n- Åbner naturligt (ikke salgsagtigt)\n- Foreslår en kort gennemgang af deres forsikringsprogram\n- Nævner 1-2 ting der typisk ændrer sig i folks liv på et år (som de\nselv kan spejle sig i)\n- Inviterer til 15 min telefonsamtale\nTone: hyggelig, ikke presset."
    },
    {
      "id": "3.3",
      "categoryId": "3",
      "categoryName": "Kundekommunikation - privatkunder",
      "industryId": null,
      "industryName": null,
      "title": "Velkomstmail efter tegnet police",
      "body": "ROLLE: Du er min kommunikationsassistent.\n\nKONTEKST: Jeg er assurandør. Kunde [navn] har netop tegnet [produkt]\nhos os.\n\nMETODE: Mail på maks 120 ord:\n- Tak for tilliden\n- Bekræft dækningen træder i kraft [dato]\n- Fortæl kort hvad de nu kan forvente (policedokument, årlig gennemgang)\n- Angiv kontaktmulighed ved spørgsmål\nVarm, professionel, ikke salgsagtig (de har allerede købt)."
    },
    {
      "id": "3.4",
      "categoryId": "3",
      "categoryName": "Kundekommunikation - privatkunder",
      "industryId": null,
      "industryName": null,
      "title": "Prisstigning til langtidskunde",
      "body": "ROLLE: Du er min erfarne forsikringskollega med god fornemmelse for\nsvær kundekommunikation.\n\nKONTEKST: Jeg er assurandør. Kunde [navn] har været hos os i [år].\nDeres præmie på [produkt] stiger fra [beløb] til [beløb].\nÅrsag: [konkret - skadeshistorik, branchepriser, regulatorisk].\n\nMETODE: Mail der:\n- Er ærlig om stigningen fra start\n- Anerkender deres loyalitet\n- Forklarer HVORFOR uden forsikringsjargon\n- Tilbyder et møde om mulig optimering af dækning eller selvrisiko\n- Maks 180 ord, varm men professionel"
    },
    {
      "id": "3.5",
      "categoryId": "3",
      "categoryName": "Kundekommunikation - privatkunder",
      "industryId": null,
      "industryName": null,
      "title": "Afslag på skadesanmeldelse",
      "body": "ROLLE: Du er min erfarne kollega med god fornemmelse for\nskadeskommunikation.\n\nKONTEKST: Jeg er assurandør. Kunde [navn] har anmeldt skade\n[beskrivelse]. Skaden er ikke dækket fordi [konkret grund fra police].\n\nMETODE: Mail der:\n- Er ærlig om afgørelsen fra start\n- Forklarer HVILKEN klausul eller policebetingelse der er i spil, i\nsprog kunden forstår\n- Anerkender skuffelsen\n- Foreslår alternative skridt (klagemuligheder, udvidet dækning\nfremover)\n- Maks 180 ord, varm men klar"
    },
    {
      "id": "3.6",
      "categoryId": "3",
      "categoryName": "Kundekommunikation - privatkunder",
      "industryId": null,
      "industryName": null,
      "title": "Svarbrev på opsigelse",
      "body": "ROLLE: Du er min erfarne forsikringskollega.\n\nKONTEKST: Jeg er assurandør. Kunde [navn] har opsagt deres forsikring.\nGrund angivet: [indsæt]. Har været kunde i [år].\n\nMETODE: Svarbrev der:\n- Respekterer beslutningen uden at presse\n- Bekræfter opsigelsesdatoen og hvad der sker med nuværende police\n- Tilbyder afslutningssamtale (ikke genforhandling - kun oprydning)\n- Efterlader døren åben for fremtiden\n- Maks 150 ord"
    },
    {
      "id": "3.7",
      "categoryId": "3",
      "categoryName": "Kundekommunikation - privatkunder",
      "industryId": null,
      "industryName": null,
      "title": "Genkomst-mail til tidligere kunde",
      "body": "ROLLE: Du er min kommunikationsassistent.\n\nKONTEKST: Jeg er assurandør. Tidligere kunde [navn] sagde deres\nforsikringer op for [år] år siden og gik til [konkurrent]. Jeg har hørt\nde måske er utilfredse nu.\n\nMETODE: Mail på maks 140 ord:\n- Åbner naturligt uden at være grådig\n- Anerkender deres valg dengang\n- Viser interesse i hvordan det er gået\n- Inviterer til uforpligtende snak om deres nuværende dækning\nIngen \"vi er billigere!\"-slogans."
    },
    {
      "id": "3.8",
      "categoryId": "3",
      "categoryName": "Kundekommunikation - privatkunder",
      "industryId": null,
      "industryName": null,
      "title": "Police-forklaring i hverdagsdansk",
      "body": "ROLLE: Du er min kommunikationsassistent med forsikringsforståelse.\n\nKONTEKST: Jeg er assurandør. En kunde forstår ikke deres police på\n[type]. Relevant policetekst: [indsæt]\n\nMETODE: Omskriv til hverdagssprog:\n1. Hvad dækker policen (bullet points)\n2. Hvad dækker den IKKE\n3. Hvad kunden selv skal gøre (anmeldelser, selvrisiko, frister)\n4. Konkret eksempel på hvornår det ville være relevant\nIngen forsikringsjargon."
    },
    {
      "id": "3.9",
      "categoryId": "3",
      "categoryName": "Kundekommunikation - privatkunder",
      "industryId": null,
      "industryName": null,
      "title": "Flyttemeddelelse → tilbud om gennemgang",
      "body": "ROLLE: Du er min kommunikationsassistent.\n\nKONTEKST: Jeg er assurandør. Kunde [navn] har meldt de flytter fra\n[gammel adresse] til [ny adresse] d. [dato].\n\nMETODE: Mail der:\n- Bekræfter flytningen er noteret i alle relevante policer\n- Fortæller hvad der automatisk opdateres (husforsikring, adresse)\n- Foreslår en samtale om hvad flytningen kan betyde for andre\ndækninger (indbo-værdi ved ombygning, ny forsikringsgrad ved flytning\ntil anden zone, ny arbejdsvej ved pendling)\n- Maks 150 ord"
    },
    {
      "id": "3.10",
      "categoryId": "3",
      "categoryName": "Kundekommunikation - privatkunder",
      "industryId": null,
      "industryName": null,
      "title": "Proaktiv kontakt ved ny baby",
      "body": "ROLLE: Du er min kommunikationsassistent med forsikringsforståelse.\n\nKONTEKST: Jeg er assurandør. Kunde [navn] har netop fået barn. Der er\nnye forsikringsmæssige behov (livsforsikring, børneforsikring, evt.\nopdatering af indbo).\n\nMETODE: Mail:\n- Varmt tillykke først\n- Ingen hast med det professionelle\n- Kort henvisning til at vi gerne tager en samtale om forsikringsbehov\nnår tiden er til det (2-3 uger frem)\n- Maks 100 ord\nMenneskelig først, professionel sidst."
    },
    {
      "id": "3.11",
      "categoryId": "3",
      "categoryName": "Kundekommunikation - privatkunder",
      "industryId": null,
      "industryName": null,
      "title": "Svar på vred klage-mail",
      "body": "ROLLE: Du er min erfarne forsikringskollega med fornemmelse for\nkonflikthåndtering.\n\nKONTEKST: Jeg er assurandør. Kunde [navn] har sendt denne klage:\n[indsæt]\n\nMETODE: Svar der:\n- Anerkender frustrationen uden at være medgørlig\n- Undgår automatisk forsvar eller undskyldning\n- Stiller opfølgende spørgsmål hvis noget er uklart\n- Tilbyder konkret næste skridt (møde, genbehandling af sag,\nhenvisning til ankenævn)\n- Maks 200 ord, professionel rolig tone"
    },
    {
      "id": "3.12",
      "categoryId": "3",
      "categoryName": "Kundekommunikation - privatkunder",
      "industryId": null,
      "industryName": null,
      "title": "Tre versioner af samme forsikringsbudskab til segmenter",
      "body": "ROLLE: Du er min kommunikationsstrategist med forsikringserfaring.\n\nKONTEKST: Jeg er assurandør og skal sende samme kernebudskab til tre\nforskellige privatkunde-segmenter:\n1. Unge par uden børn (25-35)\n2. Familier med børn (35-55)\n3. Seniorer (60+)\nKernebudskab: [indsæt - fx prisjustering, nyt produkt, policeændring]\n\nMETODE: Tre versioner af samme mail:\n- Samme kernebudskab i hver\n- Tilpasset sprogtone og forsikringseksempler til hvert segment\n- Maks 150 ord pr. version\n- Vis eksplicit hvad du har ændret mellem versionerne"
    },
    {
      "id": "4.1",
      "categoryId": "4",
      "categoryName": "Kundekommunikation - erhvervskunder",
      "industryId": null,
      "industryName": null,
      "title": "Introduktionsmail til ny erhvervskunde",
      "body": "ROLLE: Du er min kommunikationsassistent med erfaring i\nerhvervsforsikring.\n\nKONTEKST: Jeg er erhvervsassurandør og har fået adgang til\n[virksomhedsnavn] via [kilde]. De er i branchen [branche] med [antal]\nansatte. Jeg vil tage initiativ.\n\nMETODE: Mail på maks 180 ord:\n- Åbner med en konkret observation om deres forretning eller branche\n(ikke generisk)\n- Kort præsentation af mig og mit forsikringsspeciale\n- Foreslår 20 min telefonsamtale om forsikringsmæssige risici i deres\nbranche\n- Slutter uforpligtende\nIngen standard-fraser. Konkret og tilskåret."
    },
    {
      "id": "4.2",
      "categoryId": "4",
      "categoryName": "Kundekommunikation - erhvervskunder",
      "industryId": null,
      "industryName": null,
      "title": "Prisstigning til erhvervskunde",
      "body": "ROLLE: Du er min erfarne forsikringskollega.\n\nKONTEKST: Jeg er erhvervsassurandør. Kunden driver [type virksomhed],\n[antal] ansatte, har været kunde i [år]. Præmie stiger\n[beløb]→[beløb] (+[procent]). Årsag: [skadesudvikling / branche /\nregulatorisk].\n\nMETODE: Mail der:\n- Er ærlig om stigningen uden undskyldninger\n- Forklarer årsagen på virksomhedsniveau\n- Foreslår risiko-gennemgangsmøde\n- Antyder mulige optimeringer (selvrisiko, dækning, sikring) uden at\nlove noget\n- Maks 220 ord, kollega-niveau professionel tone"
    },
    {
      "id": "4.3",
      "categoryId": "4",
      "categoryName": "Kundekommunikation - erhvervskunder",
      "industryId": null,
      "industryName": null,
      "title": "Ledsagemail til erhvervstilbud",
      "body": "ROLLE: Du er min kommunikationsassistent.\n\nKONTEKST: Jeg er erhvervsassurandør og har lavet et tilbud til\n[virksomhed]. Tilbuddet dækker [kort oversigt over dækninger]. Total\nårlig præmie: [beløb].\n\nMETODE: Ledsagende mail:\n- Kort intro der viser jeg har forstået deres forretning og risici\n- Oversigt over dækningerne i dagligdagssprog\n- Prisen ærligt og enkelt\n- Hvad kunden skal gøre nu\n- Maks 200 ord, kontaktoplysninger sidst"
    },
    {
      "id": "4.4",
      "categoryId": "4",
      "categoryName": "Kundekommunikation - erhvervskunder",
      "industryId": null,
      "industryName": null,
      "title": "Erhvervs-afslag på skadesanmeldelse",
      "body": "ROLLE: Du er min erfarne forsikringskollega.\n\nKONTEKST: Jeg er erhvervsassurandør. Virksomhed [navn] har anmeldt\nskade [beskrivelse]. Ikke dækket fordi [konkret grund fra police].\nPotentielt store forretningsmæssige konsekvenser for kunden.\n\nMETODE: Mail der:\n- Er ærlig og direkte om afgørelsen\n- Forklarer den juridiske/kontraktmæssige baggrund i enkelt sprog\n- Anerkender den forretningsmæssige konsekvens\n- Foreslår evt. supplerende dækning til fremtiden\n- Angiver klagemuligheder\n- Maks 220 ord, klar men empatisk"
    },
    {
      "id": "4.5",
      "categoryId": "4",
      "categoryName": "Kundekommunikation - erhvervskunder",
      "industryId": null,
      "industryName": null,
      "title": "Proaktiv kontakt efter branche-nyhed",
      "body": "ROLLE: Du er min kommunikationsassistent med forsikringsforståelse.\n\nKONTEKST: Jeg er erhvervsassurandør. Der er kommet [nyhed] der påvirker\n[branche]. Min kunde [virksomhed] er potentielt berørt af det\nforsikringsmæssigt.\n\nMETODE: Mail der:\n- Nævner nyheden kort\n- Forklarer hvad det kan betyde for deres risikoprofil og nuværende\ndækning\n- Foreslår en 15 min samtale\n- Maks 150 ord\nSæt proaktivitet i fokus uden at skabe panik."
    },
    {
      "id": "4.6",
      "categoryId": "4",
      "categoryName": "Kundekommunikation - erhvervskunder",
      "industryId": null,
      "industryName": null,
      "title": "Budgetopfølgningsmail til CFO",
      "body": "ROLLE: Du er min kommunikationsassistent med fornemmelse for\nCFO-kommunikation.\n\nKONTEKST: Jeg er erhvervsassurandør. Erhvervskunde [navn] har bedt om\nen opdatering før deres budgetproces. De skal bruge præmieforudsigelser\nog evt. ændringer i forsikringsprogrammet.\n\nMETODE: Mail der:\n- Leverer klar forudsigelse (fast vs. variabel præmie)\n- Angiver eventuelle ændringer i dækning eller pris\n- Driverne kort forklaret (skadeshistorik, markedsudvikling)\n- Foreslår en kort Teams-samtale ved behov\n- Maks 180 ord, regnskabsvenlig tone"
    },
    {
      "id": "4.7",
      "categoryId": "4",
      "categoryName": "Kundekommunikation - erhvervskunder",
      "industryId": null,
      "industryName": null,
      "title": "Invitation til risiko-workshop",
      "body": "ROLLE: Du er min kommunikationsassistent.\n\nKONTEKST: Jeg er erhvervsassurandør og vil invitere [virksomhed] til en\nrisiko-workshop hos os. Værdien for dem: identifikation af ukendte\nforsikringsmæssige eksponeringer.\n\nMETODE: Mail:\n- Klart formål\n- Hvad de får ud af det (fx konkret risiko-kortlægning,\ndækningsanalyse)\n- Praktisk info (2 timer, hos os, inkl. frokost)\n- 2-3 foreslåede datoer\n- Maks 180 ord"
    },
    {
      "id": "4.8",
      "categoryId": "4",
      "categoryName": "Kundekommunikation - erhvervskunder",
      "industryId": null,
      "industryName": null,
      "title": "Svær besked: vi fortsætter ikke dækningen",
      "body": "ROLLE: Du er min erfarne forsikringskollega.\n\nKONTEKST: Jeg er erhvervsassurandør. Vi kan ikke længere forsikre\n[virksomhed] pga. [konkret grund: skadesfrekvens / brancheændring /\nregulatorisk ramme / reassurance-betingelser]. De har været kunde i\n[år].\n\nMETODE: Brev der:\n- Er direkte om afgørelsen fra start\n- Forklarer grunden i et sprog de forstår\n- Angiver tidsfrist og overgang\n- Tilbyder hjælp til at finde alternativ dækning i markedet\n- Maks 220 ord, respektfuld tone"
    },
    {
      "id": "4.9",
      "categoryId": "4",
      "categoryName": "Kundekommunikation - erhvervskunder",
      "industryId": null,
      "industryName": null,
      "title": "Opfølgning efter tabt tilbud",
      "body": "ROLLE: Du er min kommunikationsassistent.\n\nKONTEKST: Jeg er erhvervsassurandør. [Virksomhed] valgte ikke vores\ntilbud. De gik til [konkurrent / anden løsning]. Jeg vil lære og holde\ndøren åben for fremtiden.\n\nMETODE: Mail:\n- Ønsk dem held og lykke med den valgte løsning\n- Kort spørg til deres beslutningskriterier (for at lære)\n- Efterlad døren på klem til næste fornyelse\n- Ingen klynk, ingen \"men vi ville gerne...\"\n- Maks 120 ord"
    },
    {
      "id": "4.10",
      "categoryId": "4",
      "categoryName": "Kundekommunikation - erhvervskunder",
      "industryId": null,
      "industryName": null,
      "title": "Svar på detaljeret compliance-spørgsmål fra kunde",
      "body": "ROLLE: Du er min erfarne forsikringskollega.\n\nKONTEKST: Jeg er erhvervsassurandør. [Virksomhed] har sendt detaljerede\nspørgsmål om vores dækning for [specifikt område - fx cyber, D&O,\nmiljø]. Jeg skal være skarp men ærlig om hvad jeg ikke ved.\n\nKUNDENS SPØRGSMÅL:\n[indsæt]\n\nMETODE: Svar:\n- Punkt for punkt som de stillede\n- Ærlig om hvad jeg skal undersøge nærmere med underwriter/jurist\n- Henvis til policetekst hvor relevant\n- Maks 300 ord\n- Professionel, præcis tone"
    },
    {
      "id": "4.11",
      "categoryId": "4",
      "categoryName": "Kundekommunikation - erhvervskunder",
      "industryId": null,
      "industryName": null,
      "title": "Kvartals-nyhedsbrev til mine erhvervskunder",
      "body": "ROLLE: Du er min kommunikationsassistent med forsikringsforståelse.\n\nKONTEKST: Jeg er erhvervsassurandør og sender kvartalsvis nyhedsbrev\ntil mine erhvervskunder. Aktuelle forsikringsrelevante emner:\n[indsæt 2-3 temaer - fx cyber, branchepriser, nye regulatoriske krav]\n\nMETODE: Nyhedsbrev:\n- Kort personlig indledning (ikke corporate)\n- 3 emner med én konkret takeaway pr. emne\n- Afslutning med \"hvad skal I holde øje med\"\n- Maks 400 ord\n- Kollegial tone, ikke salgsagtig"
    },
    {
      "id": "4.12",
      "categoryId": "4",
      "categoryName": "Kundekommunikation - erhvervskunder",
      "industryId": null,
      "industryName": null,
      "title": "Svar på forhandlingsmail fra erhvervskunde",
      "body": "ROLLE: Du er min erfarne forsikringsforhandler-kollega.\n\nKONTEKST: Jeg er erhvervsassurandør. [Virksomhed] har sendt modbud på\nmit tilbud. Deres krav: [indsæt]. Mit forhandlingsråderum: [indsæt].\n\nMETODE: Svar:\n- Start med at anerkende deres position\n- Hvad jeg kan gå med til og hvad ikke (selvrisiko, dækning, pris)\n- Foreslå mulige gensidige tilpasninger\n- Efterlad døren åben hvis ikke enighed\n- Maks 180 ord, professionel forhandlingstone"
    },
    {
      "id": "4.13",
      "categoryId": "4",
      "categoryName": "Kundekommunikation - erhvervskunder",
      "industryId": null,
      "industryName": null,
      "title": "Tak for kontraktfornyelse - erhverv",
      "body": "ROLLE: Du er min kommunikationsassistent.\n\nKONTEKST: Jeg er erhvervsassurandør. Erhvervskunde [virksomhed] har\nfornyet deres forsikringsprogram for endnu [periode].\n\nMETODE: Mail:\n- Tak for fortsat tillid\n- Et konkret eksempel på værdi vi har leveret det seneste år\n(fx skadesbehandling, rådgivning ved udvidelse)\n- En fremad-pegende bemærkning (fx planlagt risiko-gennemgang)\n- Maks 130 ord, kollegial tone"
    },
    {
      "id": "5.1",
      "categoryId": "5",
      "categoryName": "Tilbudsskrivning og præsentationer",
      "industryId": null,
      "industryName": null,
      "title": "Fuldt tilbudsbrev",
      "body": "ROLLE: Du er min erfarne forsikringskollega med erfaring i tilbudsskrivning.\n\nKONTEKST: Jeg er assurandør. Kunde: [type, størrelse, branche, særlige\nforhold]. Dækningsområder: [liste]. Årlig præmie: [beløb].\nSelvrisiko: [beløb]. Særlige betingelser: [indsæt].\n\nMETODE: Tilbudsbrev med:\n- Intro der viser jeg har forstået kundens situation og risikoprofil\n- Dækningsoversigt i dagligdagssprog\n- Prisen ærligt og enkelt\n- Hvad kunden skal gøre nu\n- Afrunding + mine kontaktoplysninger\n- Maks 1 A4, professionel og varm tone"
    },
    {
      "id": "5.2",
      "categoryId": "5",
      "categoryName": "Tilbudsskrivning og præsentationer",
      "industryId": null,
      "industryName": null,
      "title": "18-siders tilbud → kundevenlig sammenfatning",
      "body": "ROLLE: Du er min erfarne forsikringsmæglerkollega.\n\nKONTEKST: Jeg er assurandør og har et forsikringstilbud på 18 sider\n[upload PDF]. Kunden er [type virksomhed] der har svært ved at\ngennemskue det.\n\nMETODE:\n1. Oversigtstabel: de 5 vigtigste dækninger, præmie, selvrisiko pr.\nområde\n2. Tre forslag til grafer der letter forståelsen (beskriv hvad de\nskal vise)\n3. En ét-sides sammenfatning i ikke-forsikringsmandssprog\nJordnær tone. Ingen salgssnak."
    },
    {
      "id": "5.3",
      "categoryId": "5",
      "categoryName": "Tilbudsskrivning og præsentationer",
      "industryId": null,
      "industryName": null,
      "title": "Præsentation til forsikringskundemøde",
      "body": "ROLLE: Du er min præsentations-specialist med forsikringsforståelse.\n\nKONTEKST: Jeg er assurandør og skal præsentere [forsikringsløsning]\nfor [kunde] i 20 min. Kundens primære bekymringer: [indsæt].\n\nMETODE: Oplæg til 10 slides:\n- Åbning (kundens problem/risiko)\n- Tre indsigter om deres risikobillede\n- Vores forsikringsløsning (kerne + valgmuligheder)\n- Pris og vilkår\n- Næste skridt\nFor hvert slide: overskrift + 3 bullets + talker-note."
    },
    {
      "id": "5.4",
      "categoryId": "5",
      "categoryName": "Tilbudsskrivning og præsentationer",
      "industryId": null,
      "industryName": null,
      "title": "Elevatortale til erhvervskunde",
      "body": "ROLLE: Du er min kommunikationsassistent med forsikringsforståelse.\n\nKONTEKST: Jeg er erhvervsassurandør og møder [virksomhed] på et\nnetværksarrangement. Jeg har 60 sekunder til at gøre indtryk.\n\nMETODE: Skriv tre versioner af en 60-sekunders elevatortale:\n- Version A: Fokus på risikoforebyggelse\n- Version B: Fokus på forretningskontinuitet ved skader\n- Version C: Fokus på omkostningsoptimering af deres\nforsikringsprogram\nHver version maks 150 ord, naturligt talesprog."
    },
    {
      "id": "5.5",
      "categoryId": "5",
      "categoryName": "Tilbudsskrivning og præsentationer",
      "industryId": null,
      "industryName": null,
      "title": "Sammenligning af tre dækningsniveauer",
      "body": "ROLLE: Du er min forsikringsrådgiver-kollega.\n\nKONTEKST: Jeg er assurandør og skal præsentere tre forskellige\ndækningsniveauer for [kunde]: basis, mellem, premium. Beskrivelse af\nhvert: [indsæt].\n\nMETODE:\n1. Sammenligningstabel med kolonner per niveau\n2. Rækker: dækning, selvrisiko, årlig præmie, primær målgruppe\n3. En \"min anbefaling\"-sætning under tabellen\n4. Format: direkte kopierbart i mail eller slide"
    },
    {
      "id": "5.6",
      "categoryId": "5",
      "categoryName": "Tilbudsskrivning og præsentationer",
      "industryId": null,
      "industryName": null,
      "title": "Executive summary af forsikringsprogram",
      "body": "ROLLE: Du er min executive-level kommunikator med forsikringserfaring.\n\nKONTEKST: Jeg er erhvervsassurandør. [Virksomheds] årlige\nforsikringsprogram er komplekst. CEO/CFO skal kunne skimme det på\n5 minutter. Program-detaljer: [indsæt]\n\nMETODE: Executive summary (maks 1 side):\n- Total årlig præmie (øverst)\n- Dækningens kerne i 5 bullets\n- Tre væsentlige risici der fortsat er udækket eller underdækket\n- Min anbefaling til næste år"
    },
    {
      "id": "5.7",
      "categoryId": "5",
      "categoryName": "Tilbudsskrivning og præsentationer",
      "industryId": null,
      "industryName": null,
      "title": "Præsentationsslides fra tekstdokument",
      "body": "ROLLE: Du er min præsentationsbygger.\n\nKONTEKST: Jeg er assurandør. Jeg har et tekstdokument om et\nforsikringsprodukt eller en kundesag [upload]. Jeg skal lave det om\ntil et oplæg til 30 min kundemøde.\n\nMETODE: Omdan til 8 slides:\n- Slide 1: Titel + undertekst\n- Slide 2-7: Kernepunkter med bullet-noter\n- Slide 8: Afslutning/call to action\nFor hvert slide: overskrift + 3-4 bullets. Gør teksten\npræsentationsegnet (ikke fulde sætninger)."
    },
    {
      "id": "5.8",
      "categoryId": "5",
      "categoryName": "Tilbudsskrivning og præsentationer",
      "industryId": null,
      "industryName": null,
      "title": "Forslag til grafer fra skadesdata",
      "body": "ROLLE: Du er min data-visualiseringsekspert med forsikringsforståelse.\n\nKONTEKST: Jeg er assurandør. Rådata (fx skadeshistorik, præmieudvikling,\ndækningsfordeling): [indsæt tabel eller beskrivelse]\n\nMETODE: Foreslå 3 grafer der bedst fortæller historien til kunden:\n- For hver graf: type (søjle/kurve/cirkel), hvad aksen viser,\nkonklusionen den underbygger\n- Angiv hvilken graf der er vigtigst\n- Undgå overlappende grafer"
    },
    {
      "id": "5.9",
      "categoryId": "5",
      "categoryName": "Tilbudsskrivning og præsentationer",
      "industryId": null,
      "industryName": null,
      "title": "Forsikringsprogram til bestyrelsesgodkendelse",
      "body": "ROLLE: Du er min bestyrelseskommunikator med forsikringsforståelse.\n\nKONTEKST: Jeg er erhvervsassurandør. Min kundes bestyrelse skal godkende\ndet årlige forsikringsprogram. Programmet: [indsæt]. Bestyrelsen\nforventer 15 min præsentation.\n\nMETODE: Byg til 6 slides:\n1. Indledning (formål med beslutningen)\n2. Risikobillede for virksomheden\n3. Dækningens kerne\n4. Økonomi (præmie vs. risikoeksponering)\n5. Beslutningsalternativer (basis/udvidet)\n6. Min anbefaling\nTone: bestyrelsesniveau, tal-drevet, klar."
    },
    {
      "id": "5.10",
      "categoryId": "5",
      "categoryName": "Tilbudsskrivning og præsentationer",
      "industryId": null,
      "industryName": null,
      "title": "Årsgennemgang for forsikringskunde",
      "body": "ROLLE: Du er min assistent til årsrapportering af forsikringsprogrammer.\n\nKONTEKST: Jeg er assurandør og skal lave en årsgennemgang for [kunde].\nÅret der gik: [konkrete begivenheder, skader, ændringer, nye dækninger].\n\nMETODE: Gennemgang:\n- Hvad der er sket i det forløbne år (skader, ændringer, nye policer)\n- Hvad der har virket godt i deres dækning\n- Hvad der skal justeres til næste år\n- Forslag til fremtiden\n- Maks 1-2 A4-sider, kundevenlig tone"
    },
    {
      "id": "6.1",
      "categoryId": "6",
      "categoryName": "Risikovurdering og analyse",
      "industryId": null,
      "industryName": null,
      "title": "Komplet risikovurdering af erhvervskunde",
      "body": "ROLLE: Du er min risikoanalytiker-kollega med speciale i\nerhvervsforsikring.\n\nKONTEKST: Jeg er erhvervsassurandør. Kunde: [virksomhed], branche,\n[antal] ansatte, omsætning [beløb]. Særlige forhold: [indsæt].\n\nMETODE: Forsikringsmæssig risikovurdering struktureret i:\n1. Materielle risici (bygninger, maskiner, lager)\n2. Driftstab ved skade\n3. Ansvar (produkt, miljø, profession)\n4. Personale (arbejdsskader, nøglepersoner)\n5. Cyber og data\nFor hver: sandsynlighed, konsekvens, anbefalet dækning. Tabelformat."
    },
    {
      "id": "6.2",
      "categoryId": "6",
      "categoryName": "Risikovurdering og analyse",
      "industryId": null,
      "industryName": null,
      "title": "Cyber-risikovurdering af kunde",
      "body": "ROLLE: Du er min cyber-risiko-specialist med forsikringsforståelse.\n\nKONTEKST: Jeg er erhvervsassurandør og skal rådgive [virksomhed] i\nbranchen [branche] om cyberforsikring. De håndterer [type data/\nsystemer].\n\nMETODE: Cyber-vurdering:\n1. Tre mest sandsynlige cybertrusler for netop denne type virksomhed\n2. Typisk økonomisk konsekvens ved hver (udløser, nedetid, GDPR-bøde)\n3. Tre spørgsmål jeg bør stille ledelsen for at afdække behov\n4. Anbefaling til dækningsniveau i forsikringsprogrammet\nKonkret og hverdagssprog."
    },
    {
      "id": "6.3",
      "categoryId": "6",
      "categoryName": "Risikovurdering og analyse",
      "industryId": null,
      "industryName": null,
      "title": "Vurdering af undersikring",
      "body": "ROLLE: Du er min underwriter-kollega.\n\nKONTEKST: Jeg er assurandør. Kunde [navn] har nuværende forsikrings-\ndækning: [indsæt]. Deres situation har ændret sig: [indsæt - nye\ninvesteringer, udvidelse, arv, renovering etc.]\n\nMETODE:\n1. Analysér om de er undersikret på nogen forsikringspolicer\n2. Kvantificér eventuelle huller i dækningen\n3. Foreslå konkret justering af forsikringsbeløb\n4. Formulér en neutral besked til kunden om det"
    },
    {
      "id": "6.4",
      "categoryId": "6",
      "categoryName": "Risikovurdering og analyse",
      "industryId": "landbrug",
      "industryName": "Landbrug",
      "title": "Landbrugsbesætnings-risiko fra forsikringsvinkel",
      "body": "ROLLE: Du er min erfarne landbrugsassurandør.\n\nKONTEKST: Jeg er assurandør. [Gård] har [antal] [dyretype], [hektar]\njord, særlige forhold: [indsæt].\n\nMETODE: Forsikringsmæssig risikovurdering:\n1. Dyresundhed / besætningssygdomme (dækning og grænser)\n2. Bygninger (stald, foderlager - brand, storm)\n3. Maskiner og teknologi\n4. Afgrøder og vejr\n5. Driftstab ved skader\nFor hver: konkret anbefaling til dækning og forsikringsbeløb."
    },
    {
      "id": "6.5",
      "categoryId": "6",
      "categoryName": "Risikovurdering og analyse",
      "industryId": null,
      "industryName": null,
      "title": "Scenarie-analyse af stor skade",
      "body": "ROLLE: Du er min scenarie-analytiker med forsikringsforståelse.\n\nKONTEKST: Jeg er erhvervsassurandør. Kunde: [virksomhed]. Forestil en\nstor skade - f.eks. [konkret scenarie].\n\nMETODE: Tænk igennem:\n1. Umiddelbare økonomiske konsekvenser (første 72 timer)\n2. Mellemlang effekt (1-6 måneder)\n3. Langsigtet effekt (1-3 år)\n4. Nuværende forsikringsdækning vs. reelt behov\n5. Huller i dækningen der bør lukkes"
    },
    {
      "id": "6.6",
      "categoryId": "6",
      "categoryName": "Risikovurdering og analyse",
      "industryId": null,
      "industryName": null,
      "title": "Nøgleperson-risiko i erhvervskunde",
      "body": "ROLLE: Du er min forsikringsrådgiver med speciale i nøgleperson-\nforsikring.\n\nKONTEKST: Jeg er erhvervsassurandør. [Virksomhed] med [antal] ansatte.\nNøglepersoner: [indsæt navne og roller].\n\nMETODE:\n1. Identificér hvem der er mest kritiske nøglepersoner forsikrings-\nmæssigt\n2. Vurdér økonomisk konsekvens ved deres pludselige fravær\n(mistet omsætning, ansættelsesomkostninger, kundetab)\n3. Anbefal dækningsniveau for nøglepersonforsikring\n4. Formulér ledelsesbudskab om behovet"
    },
    {
      "id": "6.7",
      "categoryId": "6",
      "categoryName": "Risikovurdering og analyse",
      "industryId": null,
      "industryName": null,
      "title": "Sammenlign skadesdata over 5 år",
      "body": "ROLLE: Du er min skadesanalytiker.\n\nKONTEKST: Jeg er assurandør. Skadesdata for [kunde/område] over 5 år:\n[indsæt eller upload]\n\nMETODE:\n1. Identificér trends (stigende/faldende/stabilt)\n2. Udpeg 2-3 outliers der kræver forklaring\n3. Foreslå 3 justeringer af dækning, pris eller selvrisiko\n4. Grafik-forslag der bedst viser historien til kunden"
    },
    {
      "id": "6.8",
      "categoryId": "6",
      "categoryName": "Risikovurdering og analyse",
      "industryId": null,
      "industryName": null,
      "title": "Tjekliste før kontraktfornyelse",
      "body": "ROLLE: Du er min tjeklisteekspert med erfaring i forsikringsfornyelser.\n\nKONTEKST: Jeg er assurandør og skal forny kontrakten med [kunde].\nNuværende forsikringsdækning: [indsæt]. Det seneste år: [store\nbegivenheder, skader, ændringer].\n\nMETODE: Tjekliste:\n1. 10 ting jeg skal verificere før fornyelse (fx ændret omsætning,\nny produktion, flyttet adresse, skadeshistorik)\n2. Hvert punkt med én sætning om hvorfor det er vigtigt\n3. Markér de 3 vigtigste\n4. Format: afkrydselig"
    },
    {
      "id": "6.9",
      "categoryId": "6",
      "categoryName": "Risikovurdering og analyse",
      "industryId": null,
      "industryName": null,
      "title": "Bygningsskadevurdering efter vejrskade",
      "body": "ROLLE: Du er min erfarne skadesvurderer i forsikring.\n\nKONTEKST: Jeg er assurandør. [Kunde] har haft vejrskade [type skade].\nFakta: [indsæt]. Jeg skal estimere dækningsgrundlag og næste skridt.\n\nMETODE:\n1. Sandsynlige reparationsomkostninger (interval)\n2. Dækningsgrundlag ud fra kundens police\n3. Tre ting kunden skal dokumentere til anmeldelsen\n4. Mit næste skridt i skadesbehandlingen"
    },
    {
      "id": "7.1",
      "categoryId": "7",
      "categoryName": "Skadesbehandling",
      "industryId": null,
      "industryName": null,
      "title": "Skadesrapport fra kundens beskrivelse",
      "body": "ROLLE: Du er min skadesrapport-assistent med forsikringsforståelse.\n\nKONTEKST: Jeg er assurandør. En kundes beskrivelse af skaden: [indsæt]\n\nMETODE: Omdan til struktureret skadesrapport til sagsmappen:\n1. Faktiske forhold (tid, sted, hvad skete)\n2. Omfang af skade\n3. Involverede parter\n4. Relevante dokumenter/billeder\n5. Første forsikringsmæssige vurdering\nProfessionel tone, kopierbar til sagsbehandlingssystem."
    },
    {
      "id": "7.2",
      "categoryId": "7",
      "categoryName": "Skadesbehandling",
      "industryId": null,
      "industryName": null,
      "title": "Opfølgningsmail under skadesbehandling",
      "body": "ROLLE: Du er min kommunikationsassistent med erfaring i skadesbehandling.\n\nKONTEKST: Jeg er assurandør. Skadessag [nummer/beskrivelse]. Status:\n[indsæt]. Kunden har ikke hørt noget i [dage].\n\nMETODE: Mail til kunden der:\n- Opdaterer om hvor sagen er i processen\n- Angiver næste skridt og tidsramme\n- Beder om evt. manglende dokumentation\n- Maks 150 ord\n- Empatisk, professionel tone"
    },
    {
      "id": "7.3",
      "categoryId": "7",
      "categoryName": "Skadesbehandling",
      "industryId": null,
      "industryName": null,
      "title": "Beregning af dækning fra policetekst",
      "body": "ROLLE: Du er min police-læser med forsikringsforståelse.\n\nKONTEKST: Jeg er assurandør. Relevant policetekst: [indsæt].\nSkade: [beskrivelse].\n\nMETODE:\n1. Er skaden dækket? Ja/nej med begrundelse\n2. Hvilket afsnit/klausul er udslagsgivende?\n3. Selvrisiko?\n4. Maksimal dækning?\n5. Undtagelser der kan være relevante\nFormat: præcis, med henvisning til tekststeder."
    },
    {
      "id": "7.4",
      "categoryId": "7",
      "categoryName": "Skadesbehandling",
      "industryId": null,
      "industryName": null,
      "title": "Brev med afgørelse - skade delvist dækket",
      "body": "ROLLE: Du er min erfarne forsikringskollega.\n\nKONTEKST: Jeg er assurandør. Skade [beskrivelse]. Delvist dækket:\n[dækket beløb] af [samlet beløb]. Grund til delvis dækning: [konkret\nklausul eller selvrisiko-element].\n\nMETODE: Brev der:\n- Er klart om hvor meget der udbetales og hvornår\n- Forklarer HVORFOR kun delvis dækning, med henvisning til police\n- Viser anerkendelse af situationen\n- Angiver klagemuligheder (ankenævn, genbehandling)\n- Maks 220 ord"
    },
    {
      "id": "7.5",
      "categoryId": "7",
      "categoryName": "Skadesbehandling",
      "industryId": null,
      "industryName": null,
      "title": "Koordineret skadesbehandling med flere parter",
      "body": "ROLLE: Du er min skadeskoordinator.\n\nKONTEKST: Jeg er assurandør. Skaden involverer flere parter\n(fx kunden, modpart, kundens forsikringsselskab, reparatør):\n[indsæt]. Mit ansvar: [indsæt].\n\nMETODE: Plan:\n1. Hvem skal kontaktes først og i hvilken rækkefølge\n2. Hvilke dokumenter skal indsamles fra hver part\n3. Typiske tidsfrister for hver del af processen\n4. Samlet tidsplan jeg kan kommunikere til kunden"
    },
    {
      "id": "7.6",
      "categoryId": "7",
      "categoryName": "Skadesbehandling",
      "industryId": null,
      "industryName": null,
      "title": "Svar til advokat på kundens vegne",
      "body": "ROLLE: Du er min erfarne forsikringskollega med juridisk fornemmelse.\n\nKONTEKST: Jeg er assurandør. Advokat [navn] har skrevet på vegne af\nkunde [navn] i skadessag. Deres brev: [indsæt].\n\nMETODE: Professionelt svar:\n- Saglig tone, ikke defensivt\n- Punkt-for-punkt respons\n- Klar på hvor vi står juridisk og forsikringsmæssigt\n- Henvis til policetekst og fakta\n- Maks 300 ord"
    },
    {
      "id": "7.7",
      "categoryId": "7",
      "categoryName": "Skadesbehandling",
      "industryId": null,
      "industryName": null,
      "title": "Oversigt over skadeshistorik",
      "body": "ROLLE: Du er min skadesanalytiker.\n\nKONTEKST: Jeg er assurandør. Jeg uploader kundens skadeshistorik\n[indsæt/upload].\n\nMETODE:\n1. Kort opsummering af 5-års historik (tabel)\n2. Identificér mønstre i skadesårsager\n3. Tre konklusioner jeg kan bruge til næste rådgivningsmøde\n4. Forslag til risikoforebyggelse kunden kan implementere"
    },
    {
      "id": "8.1",
      "categoryId": "8",
      "categoryName": "Salg og kundeindvendinger",
      "industryId": null,
      "industryName": null,
      "title": "Rollespil - skeptisk forsikringskunde",
      "body": "ROLLE: Du skal være en skeptisk forsikringskunde jeg øver mig på.\n\nKONTEKST: Jeg er assurandør. Kundens profil: [alder, situation, hvilket\nforsikringsprodukt de overvejer, typiske bekymringer - pris,\nnødvendighed, tillid].\n\nMETODE: Du kommer med 3 indvendinger én ad gangen. Jeg svarer. Du\nreagerer realistisk med modargumenter hvis mine svar er tynde.\nEfter 3 runder: feedback. Hvad var mine stærke svar, hvad kunne være\nskarpere?\nStart med indvending 1."
    },
    {
      "id": "8.2",
      "categoryId": "8",
      "categoryName": "Salg og kundeindvendinger",
      "industryId": null,
      "industryName": null,
      "title": "Fem svar til 'det er for dyrt'",
      "body": "ROLLE: Du er min erfarne forsikringssælger-kollega.\n\nKONTEKST: Jeg er assurandør. Kunden siger \"det er for dyrt\" om\n[forsikringsprodukt]. Kunde: [profil]. Dækningen er: [beskrivelse].\n\nMETODE: Giv mig fem forskellige svar:\n1. Værdi-vinkel (hvad dækningen giver dem)\n2. Risk-vinkel (hvad det koster IKKE at have dækningen)\n3. Sammenligning med alternativet (ringere dækning hos konkurrent)\n4. Splitning af præmien i mindre bidder (fx månedlig omkostning)\n5. Afdækning (hvad er kundens reelle bekymring?)\nIngen klichéer. Konkrete formuleringer jeg kan sige."
    },
    {
      "id": "8.3",
      "categoryId": "8",
      "categoryName": "Salg og kundeindvendinger",
      "industryId": null,
      "industryName": null,
      "title": "Fem svar til 'jeg har lige fornyet min forsikring et andet sted'",
      "body": "ROLLE: Du er min erfarne forsikringssælger-kollega.\n\nKONTEKST: Jeg er assurandør. Kunden siger \"jeg har lige fornyet min\nforsikring et andet sted\". Kunde: [profil].\n\nMETODE: Fem forskellige svar:\n1. Respekter beslutningen men efterlad åbninger til fremtiden\n2. Tilbyd en \"second opinion\" på deres nuværende dækning uden forpligtelse\n3. Fokusér på hvad der kan være blevet overset i det andet tilbud\n4. Foreslå at holde kontakt til næste fornyelse\n5. Sæt pris på relationen ud over handlen"
    },
    {
      "id": "8.4",
      "categoryId": "8",
      "categoryName": "Salg og kundeindvendinger",
      "industryId": null,
      "industryName": null,
      "title": "Afdække reelle forsikringsmæssige bekymringer",
      "body": "ROLLE: Du er min sælger-coach med forsikringsforståelse.\n\nKONTEKST: Jeg er assurandør. Kunden har sagt: \"[kundens udtalelse]\".\nJeg er i tvivl om hvad den reelle bekymring er bag udsagnet.\n\nMETODE:\n1. Tre sandsynlige 'iceberg'-bekymringer under overfladen (fx tvivl om\ndækning, mistillid til branchen, tidligere dårlig erfaring)\n2. Tre åbne spørgsmål jeg kan stille for at afdække\n3. Lyt-efter-signaler i svaret"
    },
    {
      "id": "8.5",
      "categoryId": "8",
      "categoryName": "Salg og kundeindvendinger",
      "industryId": null,
      "industryName": null,
      "title": "Overvinde 'jeg tænker over det' efter tilbud",
      "body": "ROLLE: Du er min erfarne forsikringssælger-kollega.\n\nKONTEKST: Jeg er assurandør. Kunden siger \"jeg tænker over det\" efter\nmit forsikringstilbud. De har allerede været med i [antal] møder.\n\nMETODE: Tre forskellige afsked-strategier:\n- Respektfuld hard close (tag beslutningen til sig)\n- Soft close (foreslå konkret opfølgning om 2 uger)\n- Afdæk hvad \"tænker over det\" dækker over\nIngen desperat pres."
    },
    {
      "id": "8.6",
      "categoryId": "8",
      "categoryName": "Salg og kundeindvendinger",
      "industryId": null,
      "industryName": null,
      "title": "Mødebriefing før kundebesøg",
      "body": "ROLLE: Du er min forsikringssælger-kollega.\n\nKONTEKST: Jeg er assurandør. Møde med [kunde] i morgen om\n[forsikringsprodukt/gennemgang]. Historik: [indsæt]. Mit mål: [indsæt].\n\nMETODE:\n1. Tre mål for mødet i prioriteret rækkefølge\n2. De tre mest sandsynlige indvendinger + mine svar\n3. Afslutningsspørgsmålet jeg skal stille\n4. To små-talk-åbninger jeg kan bruge"
    },
    {
      "id": "8.7",
      "categoryId": "8",
      "categoryName": "Salg og kundeindvendinger",
      "industryId": null,
      "industryName": null,
      "title": "Opfølgning efter interesseret kundemøde",
      "body": "ROLLE: Du er min kommunikationsassistent.\n\nKONTEKST: Jeg er assurandør. Mødet med [kunde] gik godt. De virkede\ninteresserede i [forsikringsprodukt]. Næste skridt aftalt: [indsæt].\n\nMETODE: Opfølgningsmail:\n- Takker for tiden\n- Opsummerer det vigtigste vi aftalte\n- Bekræfter næste skridt og frist\n- Tilfører én værdi (fx relevant link, branche-indsigt, case fra\nlignende kunde)\n- Maks 150 ord"
    },
    {
      "id": "8.8",
      "categoryId": "8",
      "categoryName": "Salg og kundeindvendinger",
      "industryId": null,
      "industryName": null,
      "title": "Anbefalingsanmodning fra tilfreds kunde",
      "body": "ROLLE: Du er min kommunikationsassistent.\n\nKONTEKST: Jeg er assurandør. Tilfreds kunde [navn] har været hos os\n[år] og har oplevet god skadesbehandling. De har aldrig anbefalet os\nvidere. Jeg vil spørge om en anbefaling.\n\nMETODE: Mail der:\n- Starter varmt (ikke transaktionelt)\n- Spørger med respekt\n- Gør det nemt at sige nej\n- Foreslår konkret form (intro til bekendt, LinkedIn-anbefaling, kort\nsamtale)\n- Maks 130 ord"
    },
    {
      "id": "9.1",
      "categoryId": "6",
      "categoryName": "Risikovurdering og analyse",
      "industryId": "landbrug",
      "industryName": "Landbrug",
      "title": "Landbrug - komplet forsikringsbillede",
      "body": "ROLLE: Du er min erfarne landbrugsassurandør.\n\nKONTEKST: Jeg er erhvervsassurandør og skal møde landmand [navn] om\n3 dage. Han driver [beskrivelse - malkekvæg/svin/planteavl, antal dyr,\nhektar].\n\nMETODE: Komplet forsikringsmæssigt risikobillede:\n1. Dyresundhed og besætning (dækning og grænser)\n2. Afgrøder og vejrsensitivitet\n3. Maskinpark og teknologi\n4. Bygninger og brand\n5. Ansvar og erhvervsansvar (produkt, miljø)\n6. Driftstab\nFor hver: de 2 vigtigste spørgsmål til ham, og vores typiske\ndækningsniveau."
    },
    {
      "id": "9.2",
      "categoryId": "6",
      "categoryName": "Risikovurdering og analyse",
      "industryId": "byggeri",
      "industryName": "Byggeri",
      "title": "Byggefirma - forsikringsbehov",
      "body": "ROLLE: Du er min erfarne erhvervsassurandør med speciale i bygge- og\nanlægsbranchen.\n\nKONTEKST: Jeg er assurandør. Byggefirma med [antal] ansatte, årlige\nprojekter [antal/værdi], type arbejde [residential/erhverv/anlæg].\n\nMETODE:\n1. Obligatoriske forsikringsdækninger i branchen\n2. Stærkt anbefalede dækninger (fx all-risks, ansvarsforsikring,\nbygherreansvar, entreprisegarantistillelse)\n3. Nice-to-have dækninger\n4. De 3 typiske \"huller\" jeg ser i forsikringsprogrammer i branchen\n5. Fem diagnostiske spørgsmål til kunden"
    },
    {
      "id": "9.3",
      "categoryId": "6",
      "categoryName": "Risikovurdering og analyse",
      "industryId": "detail",
      "industryName": "Detailhandel",
      "title": "Detailforretning - forsikringsmæssige risici",
      "body": "ROLLE: Du er min erfarne erhvervsassurandør med speciale i\ndetailbranchen.\n\nKONTEKST: Jeg er assurandør. Detailbutik: [type butik], [kvm],\n[beliggenhed], [antal] ansatte.\n\nMETODE:\n1. Top-5 forsikringsmæssige risici for netop denne type butik\n(fx indbrud, brand, vandskade, arbejdsskade, produktansvar)\n2. Typiske skadesscenarier\n3. Anbefalede dækningsniveauer\n4. Tre ting kunden selv kan gøre forebyggende der påvirker præmien"
    },
    {
      "id": "9.4",
      "categoryId": "6",
      "categoryName": "Risikovurdering og analyse",
      "industryId": "restauration",
      "industryName": "Restauration",
      "title": "Restaurant - forsikringsvinkel",
      "body": "ROLLE: Du er min erfarne erhvervsassurandør med restaurantbranche-erfaring.\n\nKONTEKST: Jeg er assurandør. Restaurant: [type køkken], [antal] ansatte,\n[omsætning], [særlige forhold: åbningstider, udeservering etc].\n\nMETODE:\n1. Brandrisici (køkken + generelt) og relevant dækning\n2. Fødevaresikkerhed og produktansvar\n3. Personale og arbejdsskader\n4. Driftstab ved køkkenbrand eller lukning\n5. Tre forsikringsmæssige ting mange restauranter overser"
    },
    {
      "id": "9.5",
      "categoryId": "6",
      "categoryName": "Risikovurdering og analyse",
      "industryId": "haandvaerk",
      "industryName": "Håndværk",
      "title": "Håndværker (SMV) - forsikringsprogram",
      "body": "ROLLE: Du er min erfarne erhvervsassurandør med speciale i\nhåndværkssegmentet.\n\nKONTEKST: Jeg er assurandør. Håndværksvirksomhed: [fag: tømrer/murer/\nVVS/elektriker], [antal] ansatte, opererer i [område].\n\nMETODE:\n1. Obligatoriske forsikringer (lovkrav for branchen)\n2. Stærkt anbefalede (brancheforventning - fx erhvervsansvar,\nentreprise, løsøre på byggepladser)\n3. Typiske skadesscenarier for faget\n4. Hvad adskiller branchens førende forsikringsprogrammer fra\ngennemsnittet\n5. Fem gode spørgsmål til det første kundemøde"
    },
    {
      "id": "9.6",
      "categoryId": "6",
      "categoryName": "Risikovurdering og analyse",
      "industryId": "transport",
      "industryName": "Transport og logistik",
      "title": "Transport- og logistik - forsikringsdækning",
      "body": "ROLLE: Du er min erfarne erhvervsassurandør med speciale i\ntransport- og logistikforsikring.\n\nKONTEKST: Jeg er assurandør. Transportvirksomhed: [antal] lastbiler,\n[nationale/EU/globale] ruter, [type gods].\n\nMETODE:\n1. Særlige forsikringsrisici i branchen\n2. Typiske dækninger jeg bør anbefale (lastbilforsikring, godstransport-\nansvar, chaufførulykke, erhvervsansvar, fragtførerens ansvar CMR)\n3. Internationale forsikringsovervejelser (green card, fragtførerens\nansvar i EU)\n4. Tre forsikringsmæssige ændringer der kommer med EU-regulering\n5. Fem kritiske spørgsmål til kunden"
    },
    {
      "id": "9.7",
      "categoryId": "6",
      "categoryName": "Risikovurdering og analyse",
      "industryId": "produktion",
      "industryName": "Produktion",
      "title": "Produktionsvirksomhed - forsikringsprogram",
      "body": "ROLLE: Du er min erfarne erhvervsassurandør med speciale i forsikring\naf fremstillingsvirksomheder.\n\nKONTEKST: Jeg er assurandør. Produktionsvirksomhed: [produkt],\n[antal] ansatte, [omsætning], [eksportandel].\n\nMETODE:\n1. Produktansvar (særligt ved eksport - USA-klausul)\n2. Maskinpark og driftstabsforsikring\n3. Bygninger og lager (brand, storm, vand)\n4. Cyber og IT-afhængighed i produktionen\n5. Tre forsikringsmæssige risici der ofte overses i denne type\nvirksomhed"
    },
    {
      "id": "9.8",
      "categoryId": "6",
      "categoryName": "Risikovurdering og analyse",
      "industryId": "it",
      "industryName": "IT og rådgivning",
      "title": "IT- og konsulentvirksomhed - forsikring",
      "body": "ROLLE: Du er min erfarne erhvervsassurandør med speciale i forsikring\naf vidensvirksomheder.\n\nKONTEKST: Jeg er assurandør. IT/konsulenthus: [antal] konsulenter,\n[kundetype], [omsætning].\n\nMETODE:\n1. Professionelt ansvar (E&O - essentielt ved fejl i leverance)\n2. Cyber og dataansvar (GDPR-konsekvenser)\n3. Nøglepersonsforsikring (essentielt i vidensvirksomheder)\n4. Kontorrisici (mindre relevant men stadig)\n5. Tre forsikringsmæssige spørgsmål jeg skal stille om deres\nkontraktvilkår med kunder"
    },
    {
      "id": "9.9",
      "categoryId": "6",
      "categoryName": "Risikovurdering og analyse",
      "industryId": "landbrug",
      "industryName": "Landbrug",
      "title": "Landbrug - forsikring ved generationsskifte",
      "body": "ROLLE: Du er min erfarne landbrugsassurandør.\n\nKONTEKST: Jeg er assurandør. Landmand [navn] står over for\ngenerationsskifte. Næste generation: [oplysninger]. Bedrift:\n[beskrivelse].\n\nMETODE:\n1. Fem forsikringsmæssige konsekvenser af generationsskiftet\n2. Nye forsikringsprodukter der bliver aktuelle (fx nøgleperson,\nlivsforsikring, arveforsikringer)\n3. Timing - hvad skal ændres hvornår i forsikringsprogrammet\n4. Typiske faldgruber ved generationsskifter set fra forsikringsvinkel"
    },
    {
      "id": "9.10",
      "categoryId": "6",
      "categoryName": "Risikovurdering og analyse",
      "industryId": "byggeri",
      "industryName": "Byggeri",
      "title": "Byggeri - stort projekt-forsikring",
      "body": "ROLLE: Du er min erfarne erhvervsassurandør med speciale i\nbyggeprojekt-forsikring.\n\nKONTEKST: Jeg er assurandør. Byggeprojekt: [type, størrelse, varighed,\nkompleksitet].\n\nMETODE:\n1. Nødvendige projekt-forsikringer (CAR, EAR, entreprisegarantistillelse,\nbygherreansvar)\n2. Tre \"hvem dækker hvad\"-spørgsmål jeg skal afklare mellem parterne\n3. Typiske forsikringsmæssige disputerpunkter i lignende projekter\n4. Tidspunkter hvor dækning typisk ændres (ved ibrugtagning,\ngennemførelse)\n5. Tjekliste til bygherren"
    },
    {
      "id": "9.11",
      "categoryId": "6",
      "categoryName": "Risikovurdering og analyse",
      "industryId": "ecommerce",
      "industryName": "E-commerce",
      "title": "E-commerce - forsikringsmæssige risici",
      "body": "ROLLE: Du er min erfarne erhvervsassurandør med e-commerce-erfaring.\n\nKONTEKST: Jeg er assurandør. E-commerce: [produkt], [national/\ninternational], [omsætning], [lageromfang].\n\nMETODE:\n1. Cyber og databehandling (GDPR-implikationer og dækning)\n2. Lager og logistik (tyveri, brand, vand)\n3. Produktansvar (særligt ved import fra 3. verdenslande)\n4. Returhåndtering og svig\n5. Tre forsikringsrisici der typisk overses i unge e-commerce\nvirksomheder"
    },
    {
      "id": "9.12",
      "categoryId": "6",
      "categoryName": "Risikovurdering og analyse",
      "industryId": "sundhed",
      "industryName": "Sundhed",
      "title": "Sundhedsklinik - forsikringsprogram",
      "body": "ROLLE: Du er min erfarne erhvervsassurandør med speciale i forsikring\naf klinikker og sundhedspraksis.\n\nKONTEKST: Jeg er assurandør. Klinik: [type: læge/tandlæge/fysioterapi/\npsykolog], [antal] behandlere, [omsætning].\n\nMETODE:\n1. Professionsansvar (centralt i branchen - patientskadeforsikring,\nbehandlingsansvar)\n2. Cyber og databehandling (sundhedsdata er særlig kategori under GDPR)\n3. Klinikdrift og inventar (brand, vand, tyveri)\n4. Personale-forsikringer\n5. Tre typiske forsikringsmæssige faldgruber i sundhedssektoren"
    },
    {
      "id": "10.1",
      "categoryId": "10",
      "categoryName": "Produktforståelse og forklaringer",
      "industryId": null,
      "industryName": null,
      "title": "Forklar police i tre længder",
      "body": "ROLLE: Du er min kommunikationsassistent med forsikringsforståelse.\n\nKONTEKST: Jeg er assurandør. Policetekst: [indsæt]\n\nMETODE: Tre versioner af forklaringen til kunden:\n1. Elevator (30 ord): kernen i dækningen\n2. Kort (100 ord): hovedpunkter og selvrisiko\n3. Fuld (300 ord): alle detaljer inkl. undtagelser\nAlle i hverdagssprog. Bevar alle vigtige undtagelser og\nselvrisikobetingelser."
    },
    {
      "id": "10.2",
      "categoryId": "10",
      "categoryName": "Produktforståelse og forklaringer",
      "industryId": null,
      "industryName": null,
      "title": "Forskellen mellem to forsikringsprodukter",
      "body": "ROLLE: Du er min forsikringsprodukt-specialist.\n\nKONTEKST: Jeg er assurandør og skal forklare forskellen mellem\n[forsikringsprodukt A] og [forsikringsprodukt B] for en kunde uden\nforsikringsbaggrund.\n\nMETODE:\n1. Én-sætnings sammenfatning af forskellen\n2. Tabel: dækning, pris, selvrisiko, målgruppe\n3. Tre konkrete eksempler (samme hændelse, forskelligt udfald)\n4. Anbefaling: hvilken kundetype passer til hvilket produkt?"
    },
    {
      "id": "10.3",
      "categoryId": "10",
      "categoryName": "Produktforståelse og forklaringer",
      "industryId": null,
      "industryName": null,
      "title": "Forklar selvrisiko til kunden",
      "body": "ROLLE: Du er min kommunikationsassistent med forsikringsforståelse.\n\nKONTEKST: Jeg er assurandør. Kunden forstår ikke hvad \"selvrisiko\"\nbetyder i deres police.\n\nMETODE:\n1. Forklaring i 3 sætninger\n2. Konkret eksempel de kan relatere til\n3. Hvorfor selvrisikoen eksisterer\n4. Hvordan selvrisikoen påvirker præmien (lavere selvrisiko = højere\npræmie)\nHverdagssprog. Ingen forsikringsjargon."
    },
    {
      "id": "10.4",
      "categoryId": "10",
      "categoryName": "Produktforståelse og forklaringer",
      "industryId": null,
      "industryName": null,
      "title": "Forklar undtagelsesklausul",
      "body": "ROLLE: Du er min kommunikationsassistent med forsikringsforståelse.\n\nKONTEKST: Jeg er assurandør. Policen har undtagelsen: \"[indsæt klausul]\".\nKunden spørger hvad det betyder.\n\nMETODE:\n1. Hvad klausulen betyder i praksis\n2. Konkret eksempel hvor den ville udelukke dækning\n3. Konkret eksempel hvor dækningen stadig er intakt\n4. Hvad kunden kan gøre hvis de vil have klausulen fjernet (og hvad\ndet vil koste)\nKlar, ærlig, ikke defensiv tone."
    },
    {
      "id": "10.5",
      "categoryId": "10",
      "categoryName": "Produktforståelse og forklaringer",
      "industryId": null,
      "industryName": null,
      "title": "Forklar tab af erhvervsevne",
      "body": "ROLLE: Du er min personforsikrings-specialist.\n\nKONTEKST: Jeg er assurandør. Kunde [profil] overvejer en tab af\nerhvervsevne-forsikring. De har kun hørt om produktet én gang.\n\nMETODE: Forklaring:\n1. Hvad produktet er (3 sætninger)\n2. Hvornår forsikringen udbetaler\n3. Hvornår den IKKE udbetaler (vigtige undtagelser)\n4. Et scenarie fra hverdagen der viser værdien\n5. Typiske priser og dækningsniveauer\n6. Maks 300 ord, hverdagssprog"
    },
    {
      "id": "10.6",
      "categoryId": "10",
      "categoryName": "Produktforståelse og forklaringer",
      "industryId": null,
      "industryName": null,
      "title": "Forklar nyværdi vs dagsværdi",
      "body": "ROLLE: Du er min forsikringsprodukt-assistent.\n\nKONTEKST: Jeg er assurandør. Kunden er forvirret over \"nyværdi\" vs\n\"dagsværdi\" i deres indbo- eller husforsikring.\n\nMETODE:\n1. Forskellen i 2 sætninger\n2. Et helt konkret eksempel med tal (fx en 5 år gammel opvaskemaskine)\n3. Hvilken er typisk bedre for kunden og hvorfor\n4. Hvorfor valget påvirker præmien"
    },
    {
      "id": "11.1",
      "categoryId": "11",
      "categoryName": "Excel, data og tabeller",
      "industryId": null,
      "industryName": null,
      "title": "Mødenoter → struktureret kundetabel",
      "body": "ROLLE: Du er min data-assistent med forsikringsforståelse.\n\nKONTEKST: Jeg er assurandør. Mine noter fra kundemøde: [indsæt]\n\nMETODE: Omdan til tabel med kolonner: Navn, Alder, Bolig, Familie,\nTransport, Vigtigste forsikringsbehov, Konkret næste skridt.\nÉn række pr. person. Format: direkte kopierbart til Excel\n(tab-separeret)."
    },
    {
      "id": "11.2",
      "categoryId": "11",
      "categoryName": "Excel, data og tabeller",
      "industryId": null,
      "industryName": null,
      "title": "Sammenlign tre forsikringstilbud i tabel",
      "body": "ROLLE: Du er min forsikringsanalytiker.\n\nKONTEKST: Jeg er assurandør. Tre tilbud på [forsikringsprodukt]:\n[indsæt for hver: selskab, dækning, pris, selvrisiko, særlige vilkår].\n\nMETODE: Tabel med hvert selskab som kolonne og rækker for:\n- Årlig præmie\n- Selvrisiko\n- Primære dækninger\n- Væsentlige undtagelser\n- Særlige vilkår\n- Min samlede vurdering\nAfrund med 2 linjer observation."
    },
    {
      "id": "11.3",
      "categoryId": "11",
      "categoryName": "Excel, data og tabeller",
      "industryId": null,
      "industryName": null,
      "title": "Porteføljeoversigt af mine kunder",
      "body": "ROLLE: Du er min CRM-assistent med forsikringsforståelse.\n\nKONTEKST: Jeg er assurandør. Mine kunder: [indsæt liste med\nnøgleoplysninger]\n\nMETODE: Tabel med kolonner:\n- Kundenavn\n- Type (privat/erhverv)\n- Årlig præmie\n- Næste fornyelsesdato\n- Skader sidste 12 mdr\n- Næste aftalte handling (hvad og hvornår)\nSorter efter næste fornyelsesdato."
    },
    {
      "id": "11.4",
      "categoryId": "11",
      "categoryName": "Excel, data og tabeller",
      "industryId": null,
      "industryName": null,
      "title": "Skadesoversigt med statistik",
      "body": "ROLLE: Du er min dataanalytiker med forsikringsforståelse.\n\nKONTEKST: Jeg er assurandør. Skader seneste 12 mdr på min portefølje:\n[indsæt rå data]\n\nMETODE:\n1. Tabel med oversigt\n2. Statistik: antal, total udbetalt, gennemsnit, median\n3. Top 3 skadesårsager\n4. Månedlig fordeling\n5. Format: klart kopierbart til Excel"
    },
    {
      "id": "11.5",
      "categoryId": "11",
      "categoryName": "Excel, data og tabeller",
      "industryId": null,
      "industryName": null,
      "title": "Omkostningsfordeling pr. kunde",
      "body": "ROLLE: Du er min regnskabs-assistent.\n\nKONTEKST: Jeg er assurandør. Min tid og mine omkostninger pr. kunde:\n[indsæt data]\n\nMETODE:\n1. Tabel: kunde, timer, direkte omkostninger, præmieindtægt,\ndækningsgrad\n2. Markér kunder hvor dækningsgraden er lav\n3. Tre observationer jeg kan bruge til portefølje-optimering"
    },
    {
      "id": "11.6",
      "categoryId": "11",
      "categoryName": "Excel, data og tabeller",
      "industryId": null,
      "industryName": null,
      "title": "Mit forsikringsår i tal",
      "body": "ROLLE: Du er min forsikringsanalytiker.\n\nKONTEKST: Jeg er assurandør. Året der gik: [indsæt nøgletal og\nbegivenheder - nye kunder, tabte kunder, præmievolumen,\nskadesfrekvens, nye produkter].\n\nMETODE:\n1. Hovedtal i tabel (sammenlignet med sidste år)\n2. Tre vigtigste gevinster\n3. Tre største udfordringer\n4. Prognose for næste år\n5. Maks 2 A4-sider"
    },
    {
      "id": "11.7",
      "categoryId": "11",
      "categoryName": "Excel, data og tabeller",
      "industryId": null,
      "industryName": null,
      "title": "Pris-sammenligning pr. dækningstype",
      "body": "ROLLE: Du er min forsikringsprodukt-analytiker.\n\nKONTEKST: Jeg er assurandør. Priser på samme dækningstype hos\nforskellige selskaber: [indsæt]\n\nMETODE:\n1. Tabel: selskab, præmie, selvrisiko, effektiv pris pr. forsikringsår\n2. Markér billigste, dyreste, mest værdi for pengene\n3. Konklusion i én sætning hvilken der er bedst til hvilken kundetype"
    },
    {
      "id": "12.1",
      "categoryId": "12",
      "categoryName": "Intern kommunikation",
      "industryId": null,
      "industryName": null,
      "title": "Handover-note til kollega",
      "body": "ROLLE: Du er min forsikrings-assistent.\n\nKONTEKST: Jeg er assurandør og er syg/på ferie. En kollega skal overtage\nmin kunde [kunde] i [periode]. Status: [indsæt]\n\nMETODE: Handover-note:\n- Kundens nuværende forsikringssituation\n- Seneste aftaler og igangværende sager\n- Hvad kollegaen skal huske (kundens præferencer, sprogtone,\nskadeshistorik, advarsler)\n- Filer at læse\n- Kontaktoplysninger\n- Maks 1 A4"
    },
    {
      "id": "12.2",
      "categoryId": "12",
      "categoryName": "Intern kommunikation",
      "industryId": null,
      "industryName": null,
      "title": "Sagsfremstilling til chefen",
      "body": "ROLLE: Du er min forsikrings-kommunikationsassistent.\n\nKONTEKST: Jeg er assurandør. Sag [beskrivelse] - jeg skal orientere min\nchef. Fakta: [indsæt].\n\nMETODE:\n1. Sagen på 3 linjer (hvad, hvem, status)\n2. Handlinger indtil nu\n3. Udfordringer\n4. Hvad jeg foreslår\n5. Hvad jeg har brug for fra chefen\n6. Maks 200 ord"
    },
    {
      "id": "12.3",
      "categoryId": "12",
      "categoryName": "Intern kommunikation",
      "industryId": null,
      "industryName": null,
      "title": "Eskaleringsmail om skadessag",
      "body": "ROLLE: Du er min erfarne forsikringskollega.\n\nKONTEKST: Jeg er assurandør. En skadessag er ved at gå skævt: [beskriv].\nJeg har brug for at eskalere til [chef/underwriter/jurist].\n\nMETODE: Mail:\n- Saglig, ikke panisk tone\n- Fakta først\n- Hvad jeg har prøvet\n- Hvor jeg er låst\n- Konkret hvad jeg har brug for\n- Maks 180 ord"
    },
    {
      "id": "12.4",
      "categoryId": "12",
      "categoryName": "Intern kommunikation",
      "industryId": null,
      "industryName": null,
      "title": "Anbefaling til produktforbedring",
      "body": "ROLLE: Du er min produktanalytiker med forsikringsforståelse.\n\nKONTEKST: Jeg er assurandør og har observeret et tilbagevendende problem\nmed [forsikringsprodukt/proces] i mit arbejde med kunderne:\n[indsæt eksempler].\n\nMETODE: Anbefaling til produktchef:\n1. Problemet i én sætning\n2. Tre konkrete eksempler fra min kundebase\n3. Tre løsningsforslag\n4. Mit primære forslag og hvorfor\n5. Maks 300 ord"
    },
    {
      "id": "13.1",
      "categoryId": "13",
      "categoryName": "Compliance og sikkerhed",
      "industryId": null,
      "industryName": null,
      "title": "GDPR-tjek af kundemail før afsendelse",
      "body": "ROLLE: Du er min compliance-assistent med forsikringsforståelse.\n\nKONTEKST: Jeg er assurandør og skal sende denne mail til kunde: [indsæt]\n\nMETODE: Tjek for:\n1. Personfølsomme oplysninger der ikke bør sendes ukrypteret\n(CPR-numre, helbredsoplysninger)\n2. Kundedata der bør anonymiseres eller sløres\n3. Formulerings-risici (forpligtende løfter om dækning)\n4. Juridiske ord der kan misforstås\nMarkér konkret hvad der bør ændres."
    },
    {
      "id": "13.2",
      "categoryId": "13",
      "categoryName": "Compliance og sikkerhed",
      "industryId": null,
      "industryName": null,
      "title": "Forslag til AI-brugspolitik i forsikringsselskab",
      "body": "ROLLE: Du er min compliance-rådgiver med forsikringsforståelse.\n\nKONTEKST: Jeg er assurandør og vil foreslå en AI-brugspolitik til mit\nforsikringsselskab. Nuværende tilstand: [indsæt - uklar, ingen, delvis].\n\nMETODE: Brev til ledelsen:\n- Problemet (ingen klar politik for AI-brug hos assurandører)\n- Risici ved status quo (GDPR, kundedata, hallucination)\n- Tre principper for god AI-brug hos assurandører\n- Forslag til næste skridt\n- Maks 1 A4"
    },
    {
      "id": "13.3",
      "categoryId": "13",
      "categoryName": "Compliance og sikkerhed",
      "industryId": null,
      "industryName": null,
      "title": "Juridisk risiko-tjek af tilbud",
      "body": "ROLLE: Du er min juridiske sparringspartner med forsikringsforståelse.\n\nKONTEKST: Jeg er assurandør. Mit tilbud til [kunde]: [indsæt]\n\nMETODE:\n1. Gennemgå for formuleringer der kan udgøre juridisk eller\nforsikringsmæssig risiko (fx for bredt formuleret dækning,\nuklare forbehold)\n2. Markér afsnit der skal gennemses af jurist eller underwriter\n3. Foreslå alternative formuleringer\n4. Konkret vurdering: kan jeg sende det som det er?"
    },
    {
      "id": "13.4",
      "categoryId": "13",
      "categoryName": "Compliance og sikkerhed",
      "industryId": null,
      "industryName": null,
      "title": "Rådgivningsdokumentation",
      "body": "ROLLE: Du er min compliance-assistent.\n\nKONTEKST: Jeg er assurandør. Mødet med [kunde] varede [tid].\nEmner: [indsæt]. Hvad jeg har rådet: [indsæt].\n\nMETODE: Rådgivningsdokumentation til sagsmappen:\n- Hvilke forsikringsprodukter blev diskuteret\n- Hvilke anbefalinger gav jeg\n- Hvilke reservationer eller forbehold gjorde jeg\n- Hvad blev aftalt skriftligt\n- Format: kopierbar til rådgivningsjournal, jf. god skik-regler"
    },
    {
      "id": "13.5",
      "categoryId": "13",
      "categoryName": "Compliance og sikkerhed",
      "industryId": null,
      "industryName": null,
      "title": "Anonymisering af kundecase før AI-brug",
      "body": "ROLLE: Du er min dataassistent.\n\nKONTEKST: Jeg er assurandør. Jeg vil bruge denne kundecase i et\nAI-værktøj som ChatGPT eller Claude: [indsæt]\n\nMETODE:\n1. Identificér alle personoplysninger (navne, CPR, adresser,\nvirksomhedsnavne, CVR)\n2. Foreslå anonymiseret version hvor jeg stadig får samme kvalitet i\nrådgivningen\n3. Bevar alle fakta jeg har brug for til forsikringsrådgivning\n4. Vis før/efter"
    },
    {
      "id": "14.1",
      "categoryId": "14",
      "categoryName": "Refleksion og svære situationer",
      "industryId": null,
      "industryName": null,
      "title": "Refleksion efter tabt forsikringssag",
      "body": "ROLLE: Du er min reflekterende coach med forsikringsforståelse.\n\nKONTEKST: Jeg er assurandør og har lige tabt [sag/deal]. Forløbet:\n[indsæt]\n\nMETODE: Hjælp mig reflektere:\n1. Tre faktorer jeg kunne have gjort anderledes i forsikringsrådgivningen\n2. Tre faktorer der ikke var inden for min kontrol (markedspris,\neksisterende relationer, selskabets betingelser)\n3. Én konkret læring at tage med\n4. Stil opfølgende spørgsmål før du konkluderer"
    },
    {
      "id": "14.2",
      "categoryId": "14",
      "categoryName": "Refleksion og svære situationer",
      "industryId": null,
      "industryName": null,
      "title": "Sparring om svært kundeforhold",
      "body": "ROLLE: Du er min kollega-coach med forsikringsforståelse.\n\nKONTEKST: Jeg er assurandør og har et vanskeligt forhold til [kunde]:\n[beskriv]\n\nMETODE: Hjælp mig tænke:\n1. Stil 3 åbne spørgsmål først\n2. Foreslå tre mulige årsager til situationen (mistillid efter skade,\nkommunikationsstil, forventningsafstemning)\n3. Tre måder at gå forfra på\n4. Én konkret handling næste uge\nCoach-tone, ikke rådgiver-tone."
    }
  ]
};
