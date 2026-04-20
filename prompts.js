/**
 * prompts.js – generated from Prompt-bibliotek.txt.
 * Do not edit by hand. Run `node scripts/build-data.mjs` to regenerate.
 *
 * Prompts: 140 · Categories: 14
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
      "id": "9",
      "name": "Brancher: landbrug, byggeri, detail, restauration"
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
      "name": "Personlig udvikling og refleksion"
    }
  ],
  "prompts": [
    {
      "id": "1.1",
      "categoryId": "1",
      "categoryName": "Kunderesearch og mødeforberedelse",
      "title": "Erhvervskunde-briefing før mødet",
      "body": "ROLLE: Du er min erfarne research-assistent med mange års erfaring i\nerhvervsforsikring.\n\nKONTEKST: Jeg skal i næste uge besøge virksomheden [NAVN, CVR xxxxxxxx].\nMit mål er at forstå deres forretning og identificere forsikringsbehov.\n\nMETODE: Lav en briefing på maks 1 A4-side:\n1. Kerneforretning og seneste regnskabstal (omsætning, resultat, ansatte)\n2. Ejerstruktur og nøglepersoner\n3. Tre største risikoeksponeringer ud fra branche og størrelse\n4. Nyheder fra seneste 6 måneder der påvirker forsikringsbehov\n5. Tre åbnende spørgsmål til mødet\nKildehenvisninger under hvert punkt. Vær skeptisk - sig \"jeg ved det ikke\"\nfrem for at gætte."
    },
    {
      "id": "1.2",
      "categoryId": "1",
      "categoryName": "Kunderesearch og mødeforberedelse",
      "title": "Brancheresearch",
      "body": "ROLLE: Du er brancheanalytiker med speciale i dansk erhvervsliv.\n\nKONTEKST: Jeg skal rådgive en virksomhed inden for [BRANCHE] og har brug\nfor et opdateret overblik.\n\nMETODE: Giv mig:\n- Markedsstørrelse og vækstrate i Danmark\n- De 5 største aktører\n- Vigtigste trends og disruptions 2025-2026\n- Regulatoriske ændringer der påvirker forsikringsbehov\n- Typiske risikoeksponeringer i branchen\nAngiv danske kilder."
    },
    {
      "id": "1.3",
      "categoryId": "1",
      "categoryName": "Kunderesearch og mødeforberedelse",
      "title": "Privatkunde-forberedelse",
      "body": "ROLLE: Du er min erfarne kollega med speciale i privatkunderådgivning.\n\nKONTEKST: Jeg skal møde en familie jeg kender disse oplysninger om:\n- Par, midt 40'erne, to børn (13 og 10)\n- Hus købt 2020 til 4,2 mio, belåning 65%\n- En selvstændig, en funktionær\n- Arvet sommerhus sidste år\n- Ingen nuværende rådgivning fra mig\n\nMETODE: Giv mig:\n1. De 5 vigtigste spørgsmål at åbne mødet med\n2. De 3 største blinde vinkler jeg bør være opmærksom på\n3. To-tre produkter de måske mangler, og hvorfor\n4. En mødedagsorden på 60 min\nTone: kollegial, ikke salgsagtig."
    },
    {
      "id": "1.4",
      "categoryId": "1",
      "categoryName": "Kunderesearch og mødeforberedelse",
      "title": "Branchesammenligning - tre virksomheder",
      "body": "ROLLE: Du er min analytiker-kollega.\n\nKONTEKST: Jeg rådgiver tre virksomheder inden for [BRANCHE]:\nVirksomhed A [navn], B [navn], C [navn].\n\nMETODE: Sammenlign dem på:\n- Størrelse og markedsposition\n- Forretningsmodel\n- Sandsynlige risikoprofiler\n- Typisk forsikringsdækning i branchen\nGiv det som en tabel. Slut med 3 observationer om hvor de adskiller sig."
    },
    {
      "id": "1.5",
      "categoryId": "1",
      "categoryName": "Kunderesearch og mødeforberedelse",
      "title": "Prospektering - nye erhvervskunder i mit område",
      "body": "ROLLE: Du er min prospekterings-assistent.\n\nKONTEKST: Jeg er erhvervsassurandør og arbejder i området [by/region].\nJeg specialiserer mig i [branche/størrelse] og søger nye kunder.\n\nMETODE: Foreslå 10 virksomheder i området der matcher min profil.\nFor hver: navn, kort beskrivelse, hvorfor den er et godt match, og én\nmåde at starte en samtale op.\nBrug offentlige kilder. Angiv dem."
    },
    {
      "id": "1.6",
      "categoryId": "1",
      "categoryName": "Kunderesearch og mødeforberedelse",
      "title": "Landmandsforberedelse",
      "body": "ROLLE: Du er min erfarne kollega med 20 års erfaring i landbrugsforsikring.\n\nKONTEKST: Jeg skal om en time besøge en landmand der driver\n[type brug: malkekvæg/svin/planteavl] med [antal dyr/hektar]. Han\novervejer [konkret ændring].\n\nMETODE: Giv mig de 5 vigtigste spørgsmål. Rækkefølge:\n1. Dyre/afgrøde-forsikring\n2. Driftstab\n3. Maskin/teknologi\n4. Brand bygninger\n5. Ansvar\nFormat: Tabel med Område / Spørgsmål / Hvad jeg skal lytte efter.\nMaks 15 ord pr. felt. Jordnær tone, ingen forsikringsjargon."
    },
    {
      "id": "1.7",
      "categoryId": "1",
      "categoryName": "Kunderesearch og mødeforberedelse",
      "title": "Forbered genforhandling",
      "body": "ROLLE: Du er min erfarne kollega.\n\nKONTEKST: Jeg skal holde en genforhandling med en eksisterende\nerhvervskunde [kort beskrivelse]. De har trykket på prisen og overvejer\nat skifte.\n\nMETODE: Forbered mig:\n1. Tre argumenter for at blive hos os (ud over pris)\n2. Tre typiske pris-modargumenter og hvordan jeg håndterer dem\n3. En fallback-position hvis prisen ikke kan matches\n4. Afslutningssætning hvis de alligevel vælger at gå"
    },
    {
      "id": "1.8",
      "categoryId": "1",
      "categoryName": "Kunderesearch og mødeforberedelse",
      "title": "Research ny branche jeg ikke kender",
      "body": "ROLLE: Du er min læremester.\n\nKONTEKST: Jeg har mulighed for at arbejde med en ny type kunde -\n[beskriv branche]. Jeg har aldrig arbejdet med dem før og skal op i\ntempo hurtigt.\n\nMETODE: Lav en \"førstehjælpsguide\":\n- Branchens særlige karakteristika\n- Typiske forsikringsbehov\n- 10 nøgletermer jeg skal kende\n- Tre typiske faldgruber for nybegyndere\n- Fem gode spørgsmål til det første møde"
    },
    {
      "id": "1.9",
      "categoryId": "1",
      "categoryName": "Kunderesearch og mødeforberedelse",
      "title": "Vurdér kundens nuværende forsikringer",
      "body": "ROLLE: Du er min analytiker-kollega.\n\nKONTEKST: Jeg har fået indsigt i en potentiel kundes nuværende\nforsikringsdækninger. Oversigten: [indsæt]\n\nMETODE: Vurdér:\n1. Er der huller i dækningen?\n2. Er der overlap/dobbeltdækning?\n3. Er selvrisikoerne fornuftige ift. kundens situation?\n4. Hvilke tre anbefalinger ville du give kunden?\nVær direkte og konkret. Undgå generiske råd."
    },
    {
      "id": "1.10",
      "categoryId": "1",
      "categoryName": "Kunderesearch og mødeforberedelse",
      "title": "Kunderelationens historik",
      "body": "ROLLE: Du er min kundeservice-assistent.\n\nKONTEKST: Jeg skal ringe til [kunde] i dag. Tidligere noter: [indsæt]\n\nMETODE:\n1. Opsummér relationen i 3-5 bullet points\n2. Identificér den mest presserende ting vi aftalte ved sidste kontakt\n3. Foreslå en åbning til samtalen\n4. Nævn 2 ting jeg bør undgå at komme ind på nu"
    },
    {
      "id": "1.11",
      "categoryId": "1",
      "categoryName": "Kunderesearch og mødeforberedelse",
      "title": "Analyse af erhvervskundes årsrapport",
      "body": "ROLLE: Du er min økonomiske analytiker.\n\nKONTEKST: Jeg uploader kundens årsrapport. Jeg er erhvervsassurandør og\nskal forstå deres økonomi som baggrund for forsikringsrådgivning.\n\nMETODE:\n1. Opsummér økonomien i 5 bullet points\n2. Identificér 3 tegn på nye risikoeksponeringer\n3. Foreslå 3 konkrete rådgivningsemner\n4. Formulér en åbningssætning der viser jeg har læst rapporten\nAlt i dagligdagssprog."
    },
    {
      "id": "1.12",
      "categoryId": "1",
      "categoryName": "Kunderesearch og mødeforberedelse",
      "title": "Generationsskifte-forberedelse",
      "body": "ROLLE: Du er min rådgiver-kollega med speciale i generationsskifter.\n\nKONTEKST: Jeg har en kunde der står over for et generationsskifte:\n[kort beskrivelse]\n\nMETODE: Giv mig:\n1. De 5 vigtigste forsikringsmæssige overvejelser\n2. Tre produkter der typisk bliver aktuelle\n3. Tre typiske faldgruber\n4. En naturlig åbning til samtalen"
    },
    {
      "id": "1.13",
      "categoryId": "1",
      "categoryName": "Kunderesearch og mødeforberedelse",
      "title": "Årsmøde-forberedelse",
      "body": "ROLLE: Du er min forberedelses-assistent.\n\nKONTEKST: Jeg skal holde det årlige gennemgangsmøde med en familie-\nkunde. Sidste møde var for 11 måneder siden. Noter fra sidst: [indsæt]\n\nMETODE: Lav:\n1. Tjekliste over ting at tage op (ud fra sidste møde)\n2. Liste over \"what's new\" i branchen der kan være relevant\n3. Tre trin til et godt mødeforløb\n4. En venlig indledende mail der bekræfter mødet"
    },
    {
      "id": "1.14",
      "categoryId": "1",
      "categoryName": "Kunderesearch og mødeforberedelse",
      "title": "Hurtig research om nyt produkt",
      "body": "ROLLE: Du er min research-assistent.\n\nKONTEKST: Mit selskab har netop lanceret [produkt]. Jeg skal kunne\npræsentere det for kunder i morgen.\n\nMETODE: Giv mig:\n1. Produktets kernefordel i én sætning\n2. Tre typiske kundetyper det passer til\n3. Fem konkrete spørgsmål jeg kan stille for at afdække behov\n4. En 2-minutters elevatortale jeg kan sige til en kunde"
    },
    {
      "id": "2.1",
      "categoryId": "2",
      "categoryName": "Mødenoter og referater",
      "title": "Stikord → mødereferat",
      "body": "ROLLE: Du er min assistent som hjælper med at strukturere mødenoter.\n\nKONTEKST: Mine stikord fra et møde med [kunde]: [indsæt]\n\nMETODE: Lav et mødereferat med afsnittene:\n- Kundens nuværende situation\n- Identificerede behov\n- Aftalt næste skridt\n- Frist\nFulde sætninger. Professionel tone. Dansk."
    },
    {
      "id": "2.2",
      "categoryId": "2",
      "categoryName": "Mødenoter og referater",
      "title": "Stikord → referat + opfølgningsmail",
      "body": "ROLLE: Du er min assistent.\n\nKONTEKST: Mine stikord fra mødet: [indsæt]\n\nMETODE: Lav to leverancer:\n\nLEVERANCE 1 - Mødereferat til sagsmappen:\n- Nuværende situation\n- Identificerede behov\n- Aftalt næste skridt\n- Frist\n\nLEVERANCE 2 - Opfølgningsmail til kunden:\n- Maks 150 ord\n- Takker for mødet\n- Bekræfter aftalerne\n- Varm men professionel tone"
    },
    {
      "id": "2.3",
      "categoryId": "2",
      "categoryName": "Mødenoter og referater",
      "title": "Telefonsamtale → notat",
      "body": "ROLLE: Du er min assistent.\n\nKONTEKST: Jeg har netop haft en telefonsamtale. Stikord: [indsæt]\n\nMETODE: Lav:\n1. Et internt notat på maks 100 ord\n2. Liste over action points med deadlines\n3. Én opfølgende mail på maks 80 ord"
    },
    {
      "id": "2.4",
      "categoryId": "2",
      "categoryName": "Mødenoter og referater",
      "title": "Transkription → struktureret referat",
      "body": "ROLLE: Du er min referent.\n\nKONTEKST: Jeg uploader en transskription af et 45-minutters kundemøde.\nKunde: [kort profil].\n\nMETODE: Struktureret referat:\n1. Nøglepointer fra kunden\n2. Mine tilsagn og leverancer\n3. Kundens bekymringer/indvendinger\n4. Konkrete aftaler med deadlines\n5. Spørgsmål der stadig hænger i luften\nBrug citater hvor relevant. Angiv hvem sagde hvad."
    },
    {
      "id": "2.5",
      "categoryId": "2",
      "categoryName": "Mødenoter og referater",
      "title": "Ugerapport fra flere kundemøder",
      "body": "ROLLE: Du er min administrative assistent.\n\nKONTEKST: 8 kundemøder denne uge. Noter fra hvert: [indsæt]\n\nMETODE: Uge-rapport til min chef:\n- Antal møder og type\n- Tre vigtigste resultater\n- Tre udfordringer\n- Forventede salg/nye forretninger\n- Ting jeg har brug for hjælp til\nMaks 300 ord. Professionel tone."
    },
    {
      "id": "2.6",
      "categoryId": "2",
      "categoryName": "Mødenoter og referater",
      "title": "Dagsorden fra få stikord",
      "body": "ROLLE: Du er min mødeplanlægger.\n\nKONTEKST: Jeg skal holde et møde med [hvem] om [tema]. Stikord: [indsæt]\n\nMETODE: Lav:\n1. Mødeformål i én sætning\n2. Dagsorden med tidspunkter (60 min)\n3. Tre nøglespørgsmål jeg skal stille\n4. Forslag til afrunding"
    },
    {
      "id": "2.7",
      "categoryId": "2",
      "categoryName": "Mødenoter og referater",
      "title": "Mødeindkaldelse til kunde",
      "body": "ROLLE: Du er min assistent.\n\nKONTEKST: Mødeindkaldelse til [kunde]. Formål: [beskrivelse].\nForslag til tid: [tid]. Sted: [sted].\n\nMETODE: Mail der:\n- Er kort og konkret (maks 120 ord)\n- Tydeligt formål\n- Klart sted og tid\n- Angiver hvad kunden skal forberede (hvis noget)\n- Venlig men professionel tone"
    },
    {
      "id": "2.8",
      "categoryId": "2",
      "categoryName": "Mødenoter og referater",
      "title": "Action points → kalenderblokke",
      "body": "ROLLE: Du er min planlægningsassistent.\n\nKONTEKST: Alle action points fra ugens møder: [indsæt]\n\nMETODE: Lav:\n1. Liste sorteret efter deadline\n2. Forslag til kalenderblok med tidsestimater\n3. Hvad kan delegeres (hvis noget)\n4. De 3 mest risikofyldte deadlines"
    },
    {
      "id": "2.9",
      "categoryId": "2",
      "categoryName": "Mødenoter og referater",
      "title": "Kundemødeforberedelse ud fra tidligere noter",
      "body": "ROLLE: Du er min kollega.\n\nKONTEKST: Jeg skal ringe til [kunde] i morgen. Alle tidligere notater:\n[indsæt]\n\nMETODE:\n1. Opsummér relationens historik i 5 bullet points\n2. Identificér det vigtigste uafsluttede punkt\n3. Foreslå 3 åbningsspørgsmål\n4. Advar mig om ting jeg bør undgå"
    },
    {
      "id": "2.10",
      "categoryId": "2",
      "categoryName": "Mødenoter og referater",
      "title": "Team-møde referat",
      "body": "ROLLE: Du er min referent.\n\nKONTEKST: Team-møde med [antal] kolleger om [tema]. Stikord: [indsæt]\n\nMETODE:\n1. Kort referat med beslutninger (ikke diskussionen)\n2. Action items med ejerskab og deadline\n3. Dato for næste møde (hvis nævnt)\nFormat: professionel, kopierbar til teamkanal."
    },
    {
      "id": "3.1",
      "categoryId": "3",
      "categoryName": "Kundekommunikation - privatkunder",
      "title": "Introduktionsmail til ny privatkunde",
      "body": "ROLLE: Du er min kommunikationsassistent.\n\nKONTEKST: Ny privatkunde henvist fra [kilde]. Oplyste behov: [indsæt].\nJeg vil præsentere mig og foreslå et indledende møde.\n\nMETODE: Mail på maks 150 ord:\n- Starter varmt uden at være familiær\n- Kort præsenterer mig (1-2 sætninger)\n- Viser jeg har forstået deres situation\n- Foreslår konkret næste skridt\n- Slutter let og uforpligtende"
    },
    {
      "id": "3.2",
      "categoryId": "3",
      "categoryName": "Kundekommunikation - privatkunder",
      "title": "Årlig opfølgning",
      "body": "ROLLE: Du er min kommunikationsassistent.\n\nKONTEKST: Årlig opfølgning til kunde jeg ikke har talt med i 12 mdr.\nKunde: [kort profil]. Aftalte dækninger: [indsæt]\n\nMETODE: Mail på maks 180 ord:\n- Åbner naturligt (ikke salgsagtigt)\n- Foreslår en kort gennemgang\n- Nævner 1-2 ting der kan være ændret i deres liv\n- Inviterer til 15 min telefonsamtale\nTone: hyggelig, ikke presset."
    },
    {
      "id": "3.3",
      "categoryId": "3",
      "categoryName": "Kundekommunikation - privatkunder",
      "title": "Velkomstmail efter tegnet police",
      "body": "ROLLE: Du er min assistent.\n\nKONTEKST: Kunde [navn] har netop tegnet [produkt].\n\nMETODE: Mail på maks 120 ord:\n- Tak for tilliden\n- Bekræft dækningen\n- Fortæl hvad de nu kan forvente\n- Angiv kontaktmulighed ved spørgsmål\nVarm, professionel, ikke salgsagtig (de har allerede købt)."
    },
    {
      "id": "3.4",
      "categoryId": "3",
      "categoryName": "Kundekommunikation - privatkunder",
      "title": "Fødselsdagshilsen",
      "body": "ROLLE: Du er min kommunikationsassistent.\n\nKONTEKST: Kunde [navn] fylder 50 år. Vi har haft dem i [antal] år.\n\nMETODE: Kort hilsen (maks 60 ord):\n- Genuint fødselsdagsønske\n- Anerkend at vi har været med i en stor del af deres liv\n- Intet salgsbudskab\nTone: varm, menneskelig, ikke corporate."
    },
    {
      "id": "3.5",
      "categoryId": "3",
      "categoryName": "Kundekommunikation - privatkunder",
      "title": "Prisstigning til langtidskunde",
      "body": "ROLLE: Du er min erfarne kollega med god fornemmelse for svær\nkundekommunikation.\n\nKONTEKST: Kunde [navn] har været hos os i [år]. Præmie stiger fra\n[beløb] til [beløb]. Årsag: [konkret].\n\nMETODE: Mail der:\n- Er ærlig om stigningen fra start\n- Anerkender loyaliteten\n- Forklarer HVORFOR uden jargon\n- Tilbyder et møde om optimering\n- Maks 180 ord, varm men professionel"
    },
    {
      "id": "3.6",
      "categoryId": "3",
      "categoryName": "Kundekommunikation - privatkunder",
      "title": "Afslag på skadesanmeldelse",
      "body": "ROLLE: Du er min erfarne kollega.\n\nKONTEKST: Kunde [navn] har anmeldt skade [beskrivelse]. Ikke dækket\nfordi [konkret grund].\n\nMETODE: Mail der:\n- Er ærlig om afgørelsen fra start\n- Forklarer GRUNDEN i sprog kunden forstår\n- Anerkender skuffelsen\n- Foreslår alternative skridt (klagemuligheder, supplerende dækning\ntil fremtiden)\n- Maks 180 ord, varm men klar"
    },
    {
      "id": "3.7",
      "categoryId": "3",
      "categoryName": "Kundekommunikation - privatkunder",
      "title": "Svarbrev på opsigelse",
      "body": "ROLLE: Du er min erfarne kollega.\n\nKONTEKST: Kunde [navn] har opsagt. Grund: [indsæt]. Har været kunde i\n[år].\n\nMETODE: Svarbrev der:\n- Respekterer beslutningen uden at presse\n- Bekræfter opsigelsesdatoen\n- Tilbyder afslutningssamtale (ingen genforhandling - kun oprydning)\n- Efterlader døren åben for fremtiden\n- Maks 150 ord"
    },
    {
      "id": "3.8",
      "categoryId": "3",
      "categoryName": "Kundekommunikation - privatkunder",
      "title": "Genkomst-mail til tidligere kunde",
      "body": "ROLLE: Du er min kommunikationsassistent.\n\nKONTEKST: Tidligere kunde [navn] sagde op for [år] år siden. Jeg har\nhørt at de måske er utilfredse nu.\n\nMETODE: Mail på maks 140 ord:\n- Åbner naturligt uden at være grådig\n- Anerkender deres valg dengang\n- Viser interesse i hvordan det er gået\n- Inviterer til uforpligtende snak\nIngen \"vi er billigere!\"-slogans."
    },
    {
      "id": "3.9",
      "categoryId": "3",
      "categoryName": "Kundekommunikation - privatkunder",
      "title": "Police-forklaring i hverdagsdansk",
      "body": "ROLLE: Du er min kommunikationsassistent.\n\nKONTEKST: Kunde forstår ikke deres police på [type]. Relevant tekst:\n[indsæt]\n\nMETODE: Omskriv til hverdagssprog:\n1. Hvad dækker policen (bullet points)\n2. Hvad dækker den IKKE\n3. Hvad kunden selv skal gøre (anmeldelser, selvrisiko)\n4. Konkret eksempel på hvornår det ville være relevant\nIngen jargon."
    },
    {
      "id": "3.10",
      "categoryId": "3",
      "categoryName": "Kundekommunikation - privatkunder",
      "title": "Sympatibrev ved dødsfald",
      "body": "ROLLE: Du er min kommunikationsassistent.\n\nKONTEKST: Langtidskunde er afgået ved døden. Familien har meldt det.\nJeg skriver til efterladte ægtefælle.\n\nMETODE: Kondolence på maks 80 ord:\n- Ærlig uden fraser\n- Ingen produktinformation eller næste skridt\n- Henvis til at vi tager det praktiske\n- Afrund varmt\nOmhyggelig tone. Ingen salgssnak overhovedet."
    },
    {
      "id": "3.11",
      "categoryId": "3",
      "categoryName": "Kundekommunikation - privatkunder",
      "title": "Informationsmail om produktændring",
      "body": "ROLLE: Du er min kommunikationsassistent.\n\nKONTEKST: Vi ændrer [produkt] fra [dato]. Konkret: [liste]\n\nMETODE: Mail til berørte kunder:\n- Start med hvad der er ændret (vigtigste først)\n- Forklar HVORFOR\n- Angiv hvad de selv skal foretage sig (hvis noget)\n- Angiv ikrafttrædelse\n- Maks 200 ord, ikke salgsagtig"
    },
    {
      "id": "3.12",
      "categoryId": "3",
      "categoryName": "Kundekommunikation - privatkunder",
      "title": "Flyttemeddelelse → tilbud om gennemgang",
      "body": "ROLLE: Du er min assistent.\n\nKONTEKST: Kunde [navn] flytter fra [gammel] til [ny] d. [dato].\n\nMETODE: Mail der:\n- Bekræfter flytningen er noteret\n- Fortæller hvad der automatisk opdateres\n- Foreslår en samtale om ændrede behov (indbo-værdi, forsikringsgrad,\narbejdsvej ved pendling)\n- Maks 150 ord"
    },
    {
      "id": "3.13",
      "categoryId": "3",
      "categoryName": "Kundekommunikation - privatkunder",
      "title": "Proaktiv kontakt ved ny baby",
      "body": "ROLLE: Du er min assistent.\n\nKONTEKST: Kunde [navn] har netop fået barn. Tillykke + nye\nforsikringsbehov.\n\nMETODE: Mail:\n- Varmt tillykke først\n- Ingen hast med det professionelle\n- Kort henvisning til at vi gerne tager en samtale når tiden er til det\n(2-3 uger frem)\n- Maks 100 ord\nMenneskelig først, professionel sidst."
    },
    {
      "id": "3.14",
      "categoryId": "3",
      "categoryName": "Kundekommunikation - privatkunder",
      "title": "Svar på vred klage-mail",
      "body": "ROLLE: Du er min erfarne kollega med fornemmelse for konflikthåndtering.\n\nKONTEKST: Kundens klage: [indsæt]\n\nMETODE: Svar der:\n- Anerkender frustrationen uden at være medgørlig\n- Undgår automatisk forsvar eller undskyldning\n- Stiller opfølgende spørgsmål hvis noget er uklart\n- Tilbyder konkret næste skridt\n- Maks 200 ord, professionel rolig tone"
    },
    {
      "id": "3.15",
      "categoryId": "3",
      "categoryName": "Kundekommunikation - privatkunder",
      "title": "Tre versioner til segmentering",
      "body": "ROLLE: Du er min kommunikationsstrategist.\n\nKONTEKST: Samme kernebudskab til tre segmenter:\n1. Unge par uden børn (25-35)\n2. Familier (35-55)\n3. Seniorer (60+)\nKernebudskab: [indsæt]\n\nMETODE: Tre versioner:\n- Samme kernebudskab\n- Tilpasset sprogtone og eksempler\n- Maks 150 ord pr. version\n- Vis eksplicit hvad du har ændret"
    },
    {
      "id": "4.1",
      "categoryId": "4",
      "categoryName": "Kundekommunikation - erhvervskunder",
      "title": "Introduktionsmail til ny erhvervskunde",
      "body": "ROLLE: Du er min kommunikationsassistent.\n\nKONTEKST: Ny erhvervskunde [virksomhed] via [kilde]. Branche: [branche].\n[antal] ansatte.\n\nMETODE: Mail på maks 180 ord:\n- Åbner med konkret observation om deres forretning (ikke generisk)\n- Kort præsentation af mig og speciale\n- Foreslår 20 min telefonsamtale om forsikringsmæssige risici i branchen\n- Slutter uforpligtende\nIngen standard-fraser. Konkret og tilskåret."
    },
    {
      "id": "4.2",
      "categoryId": "4",
      "categoryName": "Kundekommunikation - erhvervskunder",
      "title": "Prisstigning til erhvervskunde",
      "body": "ROLLE: Du er min erfarne kollega.\n\nKONTEKST: Kunden driver [type virksomhed], [antal] ansatte. Kunde i [år].\nPræmie stiger [beløb]→[beløb] (+[procent]). Årsag: [konkret -\nskadesudvikling, branche, regulatorisk?].\n\nMETODE: Mail der:\n- Er ærlig om stigningen uden undskyldninger\n- Forklarer årsagen på virksomhedsniveau\n- Foreslår risiko-gennemgangsmøde\n- Antyder mulige optimeringer (men lover intet)\n- Maks 220 ord, kollega-niveau professionel"
    },
    {
      "id": "4.3",
      "categoryId": "4",
      "categoryName": "Kundekommunikation - erhvervskunder",
      "title": "Tilbudsmail til erhvervskunde",
      "body": "ROLLE: Du er min kommunikationsassistent.\n\nKONTEKST: Tilbud til [virksomhed]. Dækning: [oversigt]. Præmie: [beløb].\n\nMETODE: Ledsagende mail:\n- Kort intro der viser jeg har forstået deres situation\n- Oversigt over dækningerne (dagligdagssprog)\n- Prisen ærligt og enkelt\n- Hvad kunden skal gøre nu\n- Maks 200 ord, kontaktoplysninger sidst"
    },
    {
      "id": "4.4",
      "categoryId": "4",
      "categoryName": "Kundekommunikation - erhvervskunder",
      "title": "Erhvervs-afslag på skadesanmeldelse",
      "body": "ROLLE: Du er min erfarne kollega.\n\nKONTEKST: Virksomhed [navn] har anmeldt skade [beskrivelse]. Ikke dækket\nfordi [konkret grund]. Forretningsmæssige konsekvenser.\n\nMETODE: Mail der:\n- Er ærlig og direkte om afgørelsen\n- Forklarer juridisk/kontraktmæssig baggrund i enkelt sprog\n- Anerkender den forretningsmæssige konsekvens\n- Foreslår evt. alternativer til fremtiden\n- Maks 220 ord, klar men empatisk"
    },
    {
      "id": "4.5",
      "categoryId": "4",
      "categoryName": "Kundekommunikation - erhvervskunder",
      "title": "Tak for kontraktfornyelse",
      "body": "ROLLE: Du er min assistent.\n\nKONTEKST: Erhvervskunde [virksomhed] har fornyet deres kontrakt for\nendnu [periode].\n\nMETODE: Mail:\n- Tak for fortsat tillid\n- Et konkret eksempel på hvad vi har leveret det seneste år\n- En fremad-pegende bemærkning\n- Maks 130 ord, kollegial tone"
    },
    {
      "id": "4.6",
      "categoryId": "4",
      "categoryName": "Kundekommunikation - erhvervskunder",
      "title": "Proaktiv kontakt efter branche-nyhed",
      "body": "ROLLE: Du er min kommunikationsassistent.\n\nKONTEKST: Der er kommet [nyhed] der påvirker [branche]. Min kunde\n[virksomhed] er potentielt berørt.\n\nMETODE: Mail der:\n- Nævner nyheden\n- Forklarer hvad det kan betyde for deres forsikringsmæssige situation\n- Foreslår en 15 min samtale\n- Maks 150 ord\nSæt proaktivitet i fokus uden at skabe panik."
    },
    {
      "id": "4.7",
      "categoryId": "4",
      "categoryName": "Kundekommunikation - erhvervskunder",
      "title": "Budgetopfølgningsmail",
      "body": "ROLLE: Du er min kommunikationsassistent.\n\nKONTEKST: Erhvervskunde [navn] har bedt om en opdatering før deres\nbudgetproces. De skal bruge præmieforudsigelser og evt. ændringer.\n\nMETODE: Mail der:\n- Leverer klar forudsigelse (fast vs. variabel)\n- Angiver eventuelle ændringer i dækning eller pris\n- Foreslår en kort Teams-samtale ved behov\n- Maks 180 ord, regnskabsvenlig tone"
    },
    {
      "id": "4.8",
      "categoryId": "4",
      "categoryName": "Kundekommunikation - erhvervskunder",
      "title": "Invitation til risiko-workshop",
      "body": "ROLLE: Du er min kommunikationsassistent.\n\nKONTEKST: Jeg vil invitere [virksomhed] til en risiko-workshop hos os.\nVærdi for dem: identifikation af ukendte eksponeringer.\n\nMETODE: Mail:\n- Klart formål\n- Hvad de får ud af det\n- Praktisk info (2 timer, hos os, inkl. frokost)\n- 2-3 foreslåede datoer\n- Maks 180 ord"
    },
    {
      "id": "4.9",
      "categoryId": "4",
      "categoryName": "Kundekommunikation - erhvervskunder",
      "title": "Svær besked: vi fortsætter ikke dækningen",
      "body": "ROLLE: Du er min erfarne kollega.\n\nKONTEKST: Vi kan ikke længere forsikre [virksomhed] pga. [konkret grund:\nskadesfrekvens, brancheændring, ny regulatorisk ramme]. De har været\nkunde i [år].\n\nMETODE: Brev der:\n- Er direkte om afgørelsen fra start\n- Forklarer grunden i et sprog de forstår\n- Angiver tidsfrist og overgang\n- Foreslår hjælp til at finde alternativ dækning\n- Maks 220 ord, respektfuld tone"
    },
    {
      "id": "4.10",
      "categoryId": "4",
      "categoryName": "Kundekommunikation - erhvervskunder",
      "title": "Opfølgning efter tabt tilbud",
      "body": "ROLLE: Du er min kommunikationsassistent.\n\nKONTEKST: [Virksomhed] valgte ikke vores tilbud. De gik til [konkurrent/\nanden løsning]. Jeg vil lære og holde døren åben.\n\nMETODE: Mail:\n- Ønsk dem held og lykke\n- Kort spørg til beslutningskriterierne (for at lære)\n- Efterlad døren på klem for fremtiden\n- Ingen klynk, ingen \"men vi ville gerne...\"\n- Maks 120 ord"
    },
    {
      "id": "4.11",
      "categoryId": "4",
      "categoryName": "Kundekommunikation - erhvervskunder",
      "title": "Mail til CFO om budget-påvirkning",
      "body": "ROLLE: Du er min kommunikationsassistent med fornemmelse for\nCFO-niveau.\n\nKONTEKST: Jeg skal skrive til [virksomheds] CFO om ændringer der\npåvirker næste års forsikringsbudget. Ændringerne: [indsæt]\n\nMETODE: Mail:\n- Tal først, kontekst bagefter\n- Konkret indvirkning på budgetlinje\n- Drivers kort forklaret\n- Handlingsforslag\n- Maks 180 ord, CFO-niveau tone (faktuel, kort, kvantitativ)"
    },
    {
      "id": "4.12",
      "categoryId": "4",
      "categoryName": "Kundekommunikation - erhvervskunder",
      "title": "Svar på detaljeret compliance-spørgsmål",
      "body": "ROLLE: Du er min erfarne kollega.\n\nKONTEKST: [Virksomhed] har sendt detaljerede spørgsmål om vores dækning\nfor [specifikt område]. Mine kompetencer rækker, men jeg vil være skarp.\n\nKUNDENS SPØRGSMÅL:\n[indsæt]\n\nMETODE: Svar:\n- Punkt for punkt som de stillede\n- Ærlig om hvad jeg skal undersøge nærmere\n- Henvis til police-tekst hvor relevant\n- Maks 300 ord\n- Professionel, præcis tone"
    },
    {
      "id": "4.13",
      "categoryId": "4",
      "categoryName": "Kundekommunikation - erhvervskunder",
      "title": "Erhvervskunde-nyhedsbrev til mine kunder",
      "body": "ROLLE: Du er min kommunikationsassistent.\n\nKONTEKST: Kvartalsvis nyhedsbrev til mine erhvervskunder. Aktuelle\nemner: [indsæt 2-3 temaer]\n\nMETODE: Nyhedsbrev:\n- Kort indledning (personlig, ikke corporate)\n- 3 emner med én konkret takeaway pr. emne\n- Afslutning med \"hvad skal I holde øje med\"\n- Maks 400 ord\n- Kollegial tone, ikke salgsagtig"
    },
    {
      "id": "4.14",
      "categoryId": "4",
      "categoryName": "Kundekommunikation - erhvervskunder",
      "title": "Invitation til netværksmøde",
      "body": "ROLLE: Du er min kommunikationsassistent.\n\nKONTEKST: Jeg arrangerer netværksmøde for mine erhvervskunder.\nTema: [tema]. Oplægsholder: [navn/rolle].\n\nMETODE: Invitation:\n- Stærk åbning (hvorfor det er interessant)\n- Tema og oplægsholder\n- Praktisk info (dato, sted, tid, forplejning)\n- RSVP-instruktion\n- Maks 180 ord"
    },
    {
      "id": "4.15",
      "categoryId": "4",
      "categoryName": "Kundekommunikation - erhvervskunder",
      "title": "Svar på forhandlingsmail",
      "body": "ROLLE: Du er min erfarne forhandlingskollega.\n\nKONTEKST: [Virksomhed] har sendt modbud på mit tilbud. Deres krav:\n[indsæt]. Mit råderum: [indsæt].\n\nMETODE: Svar:\n- Start med at anerkende deres position\n- Hvad jeg kan gå med til og hvad ikke\n- Foreslå mulige gensidige tilpasninger\n- Efterlad døren åben hvis ikke enighed\n- Maks 180 ord, professionel tone"
    },
    {
      "id": "5.1",
      "categoryId": "5",
      "categoryName": "Tilbudsskrivning og præsentationer",
      "title": "Fuldt tilbudsbrev",
      "body": "ROLLE: Du er min kollega med erfaring i tilbudsskrivning.\n\nKONTEKST: Kunde: [type, størrelse, branche, særlige forhold].\nDækningsområder: [liste]. Præmie: [beløb]/år. Selvrisiko: [beløb].\nSærlige betingelser: [indsæt].\n\nMETODE: Tilbudsbrev med:\n- Intro der viser jeg har forstået kundens situation\n- Dækningsoversigt i dagligdagssprog\n- Prisen ærligt og enkelt\n- Hvad kunden skal gøre nu\n- Afrunding + mine kontaktoplysninger\n- Maks 1 A4, professionel og varm tone"
    },
    {
      "id": "5.2",
      "categoryId": "5",
      "categoryName": "Tilbudsskrivning og præsentationer",
      "title": "18-siders tilbud → kundevenlig sammenfatning",
      "body": "ROLLE: Du er min erfarne forsikringsmæglerkollega.\n\nKONTEKST: Her er et forsikringstilbud på 18 sider [upload PDF]. Kunden\ner [type virksomhed] der har svært ved at gennemskue det.\n\nMETODE:\n1. Oversigtstabel: 5 vigtigste dækninger, præmie, selvrisiko pr. område\n2. Tre forslag til grafer der letter forståelsen\n3. Ét-sides sammenfatning i ikke-forsikringsmandssprog\nJordnær tone. Ingen salgssnak."
    },
    {
      "id": "5.3",
      "categoryId": "5",
      "categoryName": "Tilbudsskrivning og præsentationer",
      "title": "Præsentation til kundemøde",
      "body": "ROLLE: Du er min præsentationsspecialist.\n\nKONTEKST: Jeg skal præsentere [løsning] for [kunde] i 20 minutter.\nKundens primære bekymringer: [indsæt].\n\nMETODE: Lav slideoplæg til 10 slides:\n- Åbning (problem)\n- Tre indsigter om deres situation\n- Vores løsning (kerne + variant)\n- Pris og vilkår\n- Næste skridt\nFor hvert slide: overskrift + 3 bullets + talker-note."
    },
    {
      "id": "5.4",
      "categoryId": "5",
      "categoryName": "Tilbudsskrivning og præsentationer",
      "title": "Elevatortale til erhvervskunde",
      "body": "ROLLE: Du er min kommunikationsassistent.\n\nKONTEKST: Jeg møder [virksomhed] på et netværksarrangement. Jeg har\n60 sekunder til at gøre indtryk.\n\nMETODE: Skriv tre versioner af en 60-sekunders elevatortale:\n- Version A: Fokus på risikoforebyggelse\n- Version B: Fokus på forretningskontinuitet\n- Version C: Fokus på omkostningsoptimering\nHver version maks 150 ord, naturligt talesprog."
    },
    {
      "id": "5.5",
      "categoryId": "5",
      "categoryName": "Tilbudsskrivning og præsentationer",
      "title": "Sammenligning af tre produktmuligheder",
      "body": "ROLLE: Du er min rådgiver-kollega.\n\nKONTEKST: Jeg skal præsentere tre forskellige dækningsniveauer for\n[kunde]: basis, mellem, premium. Beskrivelse af hvert: [indsæt].\n\nMETODE:\n1. Sammenligningstabel med kolonner per niveau\n2. Rækker: dækning, selvrisiko, årlig præmie, primær målgruppe\n3. En \"min anbefaling\"-sætning under tabellen\n4. Format: direkte kopierbart i en mail eller slide"
    },
    {
      "id": "5.6",
      "categoryId": "5",
      "categoryName": "Tilbudsskrivning og præsentationer",
      "title": "Executive summary af forsikringsprogram",
      "body": "ROLLE: Du er min executive-level kommunikator.\n\nKONTEKST: [Virksomhed]s årlige forsikringsprogram er komplekst.\nCEO/CFO skal kunne skimme det. Program-detaljer: [indsæt]\n\nMETODE: Executive summary (maks 1 side):\n- Total årlig præmie (øverst)\n- Dækningens kerne i 5 bullets\n- Tre væsentlige risici der fortsat er udækket\n- Anbefaling til næste år"
    },
    {
      "id": "5.7",
      "categoryId": "5",
      "categoryName": "Tilbudsskrivning og præsentationer",
      "title": "Præsentationsslides fra tekstdokument",
      "body": "ROLLE: Du er min præsentationsbygger.\n\nKONTEKST: Jeg har et tekstdokument [upload]. Jeg skal lave det om til\net oplæg til 30 min møde.\n\nMETODE: Omdan til 8 slides:\n- Slide 1: Titel + undertekst\n- Slide 2-7: Kernepunkter med bullet-noter\n- Slide 8: Afslutning/call to action\nFor hvert slide: overskrift + 3-4 bullets. Gør teksten præsentations-\negnet (ikke fuld sætninger)."
    },
    {
      "id": "5.8",
      "categoryId": "5",
      "categoryName": "Tilbudsskrivning og præsentationer",
      "title": "Forslag til grafer fra rådata",
      "body": "ROLLE: Du er min data-visualiseringsekspert.\n\nKONTEKST: Rådata: [indsæt tabel eller beskrivelse]\n\nMETODE: Foreslå 3 grafer der bedst fortæller historien:\n- For hver graf: type (søjle/kurve/cirkel), hvad aksen viser,\nkonklusionen den underbygger\n- Angiv hvilken graf er den vigtigste\n- Undgå overlappende grafer"
    },
    {
      "id": "5.9",
      "categoryId": "5",
      "categoryName": "Tilbudsskrivning og præsentationer",
      "title": "Kundepræsentation til bestyrelse",
      "body": "ROLLE: Du er min bestyrelseskommunikator.\n\nKONTEKST: Min kundes bestyrelse skal godkende forsikringsprogrammet.\nProgrammet: [indsæt]. Bestyrelsen forventer 15 min præsentation.\n\nMETODE: Bygger til 6 slides:\n1. Indledning (formål med beslutningen)\n2. Risikobillede\n3. Dækningens kerne\n4. Økonomi\n5. Beslutningsalternativer\n6. Min anbefaling\nTone: bestyrelsesniveau, tal-drevet, klar."
    },
    {
      "id": "5.10",
      "categoryId": "5",
      "categoryName": "Tilbudsskrivning og præsentationer",
      "title": "Årsgennemgang for kunde",
      "body": "ROLLE: Du er min assistent til årsrapportering.\n\nKONTEKST: Jeg skal lave en årsgennemgang for [kunde]. Året: [konkrete\nbegivenheder, skader, ændringer, nye produkter].\n\nMETODE: Gennemgang:\n- Hvad der er sket i det forløbne år\n- Hvad der har virket\n- Hvad der skal justeres\n- Forslag til næste år\n- Maks 1-2 A4-sider, kundevenlig tone"
    },
    {
      "id": "6.1",
      "categoryId": "6",
      "categoryName": "Risikovurdering og analyse",
      "title": "Komplet risikovurdering af erhvervskunde",
      "body": "ROLLE: Du er min risikoanalytiker-kollega.\n\nKONTEKST: [Virksomhed], branche [branche], [antal] ansatte, omsætning\n[beløb]. Særlige forhold: [indsæt].\n\nMETODE: Risikovurdering struktureret i:\n1. Materielle risici (bygninger, maskiner, lager)\n2. Driftstab\n3. Ansvar (produkt, miljø, profession)\n4. Personale (arbejdsskader, nøglepersoner)\n5. Cyber og data\nFor hver: sandsynlighed, konsekvens, anbefaling. Tabelformat."
    },
    {
      "id": "6.2",
      "categoryId": "6",
      "categoryName": "Risikovurdering og analyse",
      "title": "Cyber-risikovurdering",
      "body": "ROLLE: Du er min cyber-risiko-specialist.\n\nKONTEKST: [Virksomhed] i branchen [branche]. De håndterer [type data/\nsystemer].\n\nMETODE: Cyber-vurdering:\n1. Tre mest sandsynlige trusler for netop denne type virksomhed\n2. Typisk økonomisk konsekvens ved hver\n3. Tre spørgsmål jeg bør stille ledelsen\n4. Anbefaling til dækningsniveau\nKonkret og hverdagssprog."
    },
    {
      "id": "6.3",
      "categoryId": "6",
      "categoryName": "Risikovurdering og analyse",
      "title": "Vurdering af undersikring",
      "body": "ROLLE: Du er min underwriter-kollega.\n\nKONTEKST: Kunde [navn] har nuværende dækning: [indsæt]. Deres\nsituation: [indsæt - kan være nye investeringer, udvidelse, arv etc.]\n\nMETODE:\n1. Analysér om de er undersikret på nogen poster\n2. Kvantificér eventuelle huller\n3. Foreslå konkret justering\n4. Formulér en neutral besked til kunden om det"
    },
    {
      "id": "6.4",
      "categoryId": "6",
      "categoryName": "Risikovurdering og analyse",
      "title": "Landbrugsbesætnings-risiko",
      "body": "ROLLE: Du er min erfarne landbrugsrisikovurderer.\n\nKONTEKST: [Gård] har [antal] [dyretype], [hektar] jord, særlige forhold:\n[indsæt].\n\nMETODE: Risikovurdering:\n1. Dyresundhed / besætningssygdomme\n2. Bygninger (stald, foderlager)\n3. Maskiner og teknologi\n4. Afgrøder og vejr\n5. Driftstab\nFor hver: konkrete tal-intervaller hvor muligt, anbefaling til dækning."
    },
    {
      "id": "6.5",
      "categoryId": "6",
      "categoryName": "Risikovurdering og analyse",
      "title": "Scenarie-analyse af stor skade",
      "body": "ROLLE: Du er min scenarie-analytiker.\n\nKONTEKST: [Virksomhed]. Forestil en stor skade - f.eks. [konkret scenarie].\n\nMETODE: Tænk igennem:\n1. Umiddelbare konsekvenser (første 72 timer)\n2. Mellemlang effekt (1-6 måneder)\n3. Langsigtet effekt (1-3 år)\n4. Nuværende dækning vs. reelt behov\n5. Huller der bør lukkes"
    },
    {
      "id": "6.6",
      "categoryId": "6",
      "categoryName": "Risikovurdering og analyse",
      "title": "Nøgleperson-risiko",
      "body": "ROLLE: Du er min rådgiver.\n\nKONTEKST: [Virksomhed] med [antal] ansatte. Nøglepersoner: [indsæt navne\nog roller].\n\nMETODE:\n1. Identificér hvem der er mest kritiske nøglepersoner\n2. Vurdér konsekvens ved deres pludselige fravær\n3. Anbefal dækningsniveauer for nøglepersonforsikring\n4. Formulér ledelsesbudskab om det"
    },
    {
      "id": "6.7",
      "categoryId": "6",
      "categoryName": "Risikovurdering og analyse",
      "title": "Sammenligning af skadesdata over 5 år",
      "body": "ROLLE: Du er min analytiker.\n\nKONTEKST: Skadesdata for [kunde/område] over 5 år: [indsæt eller upload]\n\nMETODE:\n1. Identificér trends (stigende/faldende/stabilt)\n2. Udpeg 2-3 outliers der kræver forklaring\n3. Foreslå 3 justeringer af dækning/pris\n4. Grafik-forslag der bedst viser historien"
    },
    {
      "id": "6.8",
      "categoryId": "6",
      "categoryName": "Risikovurdering og analyse",
      "title": "Strukturel risiko ved ændring i branche",
      "body": "ROLLE: Du er min strategisk rådgiver.\n\nKONTEKST: [Branche] gennemgår strukturel ændring pga. [årsag]. Min\nkunde i branchen: [navn].\n\nMETODE:\n1. Analysér hvordan ændringen påvirker min kundes risikoprofil\n2. Tre områder hvor dækningen kan blive utilstrækkelig\n3. Tre områder der kan overdækkes\n4. Konkrete samtaleemner til næste kundemøde"
    },
    {
      "id": "6.9",
      "categoryId": "6",
      "categoryName": "Risikovurdering og analyse",
      "title": "Check-liste før kontraktfornyelse",
      "body": "ROLLE: Du er min tjeklisteekspert.\n\nKONTEKST: Jeg skal forny kontrakt med [kunde]. Nuværende dækning:\n[indsæt]. Det seneste år: [store begivenheder, skader, ændringer].\n\nMETODE: Tjekliste:\n1. 10 ting jeg skal verificere før fornyelse\n2. Hvert punkt med én sætning om hvorfor det er vigtigt\n3. Markér de 3 vigtigste punkter\n4. Format: afkrydselig"
    },
    {
      "id": "6.10",
      "categoryId": "6",
      "categoryName": "Risikovurdering og analyse",
      "title": "Bygningsskadevurdering efter vejrskade",
      "body": "ROLLE: Du er min erfarne skadesvurderer.\n\nKONTEKST: [Kunde] har haft vejrskade [type skade]. Fakta: [indsæt].\nJeg skal estimere omkostninger og dækningsgrundlag.\n\nMETODE:\n1. Sandsynlige reparationsomkostninger (interval)\n2. Dækningsgrundlag ud fra police\n3. Tre ting kunden skal dokumentere\n4. Mit næste skridt"
    },
    {
      "id": "7.1",
      "categoryId": "7",
      "categoryName": "Skadesbehandling",
      "title": "Skadesrapport fra kundens beskrivelse",
      "body": "ROLLE: Du er min skadesrapport-assistent.\n\nKONTEKST: Kundens beskrivelse af skaden: [indsæt]\n\nMETODE: Omdan til struktureret skadesrapport:\n1. Faktiske forhold (tid, sted, hvad skete)\n2. Omfang af skade\n3. Involverede parter\n4. Relevante dokumenter/billeder\n5. Første vurdering\nProfessionel tone, kopierbar til sagsbehandlingssystem."
    },
    {
      "id": "7.2",
      "categoryId": "7",
      "categoryName": "Skadesbehandling",
      "title": "Opfølgningsmail under skadesbehandling",
      "body": "ROLLE: Du er min kommunikationsassistent.\n\nKONTEKST: Skadessag [nummer/beskrivelse]. Status: [indsæt]. Kunden har\nikke hørt noget i [dage].\n\nMETODE: Mail til kunden der:\n- Opdaterer om hvor sagen er\n- Angiver næste skridt og tidsramme\n- Beder om evt. manglende dokumentation\n- Maks 150 ord\n- Empatisk, professionel tone"
    },
    {
      "id": "7.3",
      "categoryId": "7",
      "categoryName": "Skadesbehandling",
      "title": "Beregning af dækning fra police-tekst",
      "body": "ROLLE: Du er min police-læser.\n\nKONTEKST: Relevant police-tekst: [indsæt]. Skade: [beskriv].\n\nMETODE:\n1. Er skaden dækket? Ja/nej med begrundelse\n2. Hvilket afsnit/klausul er udslagsgivende?\n3. Selvrisiko?\n4. Maksimal dækning?\n5. Undtagelser der kunne være relevante\nFormat: præcis, med henvisning til tekststeder."
    },
    {
      "id": "7.4",
      "categoryId": "7",
      "categoryName": "Skadesbehandling",
      "title": "Brev med afgørelse - skade delvist dækket",
      "body": "ROLLE: Du er min erfarne kollega.\n\nKONTEKST: Skade [beskrivelse]. Delvist dækket: [dækket beløb] af\n[samlet beløb]. Grund til delvis dækning: [indsæt].\n\nMETODE: Brev der:\n- Er klart om hvor meget der udbetales og hvornår\n- Forklarer HVORFOR kun delvis dækning\n- Viser anerkendelse af situationen\n- Angiver klagemuligheder\n- Maks 220 ord"
    },
    {
      "id": "7.5",
      "categoryId": "7",
      "categoryName": "Skadesbehandling",
      "title": "Koordineret skadesbehandling med flere parter",
      "body": "ROLLE: Du er min koordinator.\n\nKONTEKST: Skade involverer flere parter: [indsæt]. Mit ansvar: [indsæt].\n\nMETODE: Plan:\n1. Hvem skal kontaktes først og i hvilken rækkefølge\n2. Hvilke dokumenter skal indsamles fra hver part\n3. Typiske tidsfrister for hver del\n4. Samlet tidsplan for kunden"
    },
    {
      "id": "7.6",
      "categoryId": "7",
      "categoryName": "Skadesbehandling",
      "title": "Svar til advokat på kundens vegne",
      "body": "ROLLE: Du er min erfarne kollega med juridisk fornemmelse.\n\nKONTEKST: Advokat [navn] har skrevet på vegne af kunde [navn]. Deres\nbrev: [indsæt].\n\nMETODE: Professionelt svar:\n- Saglig tone, ikke defensivt\n- Punkt-for-punkt respons\n- Klar på hvor vi står juridisk\n- Henvis til policetekst og fakta\n- Maks 300 ord"
    },
    {
      "id": "7.7",
      "categoryId": "7",
      "categoryName": "Skadesbehandling",
      "title": "Dokumentationsliste til kompleks skade",
      "body": "ROLLE: Du er min assistent.\n\nKONTEKST: Skade [beskrivelse] - kunden skal samle dokumentation. Det\ner kompleks sag der involverer [elementer].\n\nMETODE: Komplet dokumentationsliste:\n1. Hvad kunden skal indsamle (sorteret efter prioritet)\n2. Hvor de kan få hver dokument (hvis ikke oplagt)\n3. Deadline for hver\n4. Max 2 A4-sider, kopierbar liste"
    },
    {
      "id": "7.8",
      "categoryId": "7",
      "categoryName": "Skadesbehandling",
      "title": "Oversigt over skadeshistorik",
      "body": "ROLLE: Du er min analytiker.\n\nKONTEKST: Jeg uploader kundens skadeshistorik [indsæt/upload].\n\nMETODE:\n1. Kort opsummering af 5-års historik (tabel)\n2. Identificér mønstre\n3. Tre konklusioner jeg kan tage med til næste kundesamtale\n4. Forslag til risikoforebyggelse"
    },
    {
      "id": "8.1",
      "categoryId": "8",
      "categoryName": "Salg og kundeindvendinger",
      "title": "Rollespil - skeptisk kunde",
      "body": "ROLLE: Du skal være en skeptisk kunde jeg øver mig på.\n\nKONTEKST: Profil: [alder, situation, hvad de overvejer, typiske\nbekymringer]\n\nMETODE: Du kommer med 3 indvendinger én ad gangen. Jeg svarer. Du\nreagerer realistisk med modargumenter hvis mine svar er tynde.\nEfter 3 runder: feedback. Hvad var mine stærke svar, hvad kunne være\nskarpere.\nStart med indvending 1."
    },
    {
      "id": "8.2",
      "categoryId": "8",
      "categoryName": "Salg og kundeindvendinger",
      "title": "Mine svar til 'det er for dyrt'",
      "body": "ROLLE: Du er min erfarne sælger-kollega.\n\nKONTEKST: Kunden siger \"det er for dyrt\". Kunde: [profil]. Dækningen er:\n[beskrivelse].\n\nMETODE: Giv mig fem forskellige svar:\n1. Værdi-vinkel (hvad de får)\n2. Risk-vinkel (hvad det koster ikke at have)\n3. Sammenligning med alternativet\n4. Splitning af pris i mindre bidder\n5. Afdækning (hvad er deres reelle bekymring)\nIngen klichéer. Konkrete formuleringer jeg kan sige."
    },
    {
      "id": "8.3",
      "categoryId": "8",
      "categoryName": "Salg og kundeindvendinger",
      "title": "Mine svar til 'jeg har lige fornyet'",
      "body": "ROLLE: Du er min erfarne sælger-kollega.\n\nKONTEKST: Kunden siger \"jeg har lige fornyet min forsikring et andet\nsted\". Kunde: [profil].\n\nMETODE: Fem forskellige svar:\n- Respekter beslutningen men efterlad åbninger til fremtiden\n- Tilbyd en \"second opinion\" uden forpligtelse\n- Fokusér på hvad der kan være blevet overset\n- Foreslå at holde kontakt til næste fornyelse\n- Sæt pris på relationen ud over handlen"
    },
    {
      "id": "8.4",
      "categoryId": "8",
      "categoryName": "Salg og kundeindvendinger",
      "title": "Afdække reelle bekymringer",
      "body": "ROLLE: Du er min sælger-coach.\n\nKONTEKST: Kunden har sagt: \"[kundens udtalelse]\". Jeg er i tvivl om\nhvad den reelle bekymring er.\n\nMETODE: Giv mig:\n1. Tre sandsynlige 'iceberg'-bekymringer under overfladen\n2. Tre åbne spørgsmål jeg kan stille\n3. Lyt-efter-signaler i svaret"
    },
    {
      "id": "8.5",
      "categoryId": "8",
      "categoryName": "Salg og kundeindvendinger",
      "title": "Overvinde 'jeg tænker over det'",
      "body": "ROLLE: Du er min erfarne sælger-kollega.\n\nKONTEKST: Kunden siger \"jeg tænker over det\" efter mit tilbud. De har\nallerede været med i [antal] møder.\n\nMETODE: Tre forskellige afsked-strategier:\n- Respektfuld hard close (tag beslutningen til sig)\n- Soft close (foreslå konkret opfølgning om 2 uger)\n- Afdæk hvad \"tænker over det\" dækker over\nIngen desperat pres."
    },
    {
      "id": "8.6",
      "categoryId": "8",
      "categoryName": "Salg og kundeindvendinger",
      "title": "Mødebriefing før kundebesøg",
      "body": "ROLLE: Du er min sælgerkollega.\n\nKONTEKST: Møde med [kunde] imorgen. Historik: [indsæt]. Mit mål: [indsæt].\n\nMETODE:\n1. Tre mål for mødet i prioriteret rækkefølge\n2. De tre mest sandsynlige indvendinger + mine svar\n3. Afslutningsspørgsmålet jeg skal stille\n4. To små-talk-åbninger jeg kan bruge"
    },
    {
      "id": "8.7",
      "categoryId": "8",
      "categoryName": "Salg og kundeindvendinger",
      "title": "Opfølgning efter interesseret møde",
      "body": "ROLLE: Du er min kommunikationsassistent.\n\nKONTEKST: Mødet med [kunde] gik godt. De virkede interesserede.\nNæste skridt aftalt: [indsæt].\n\nMETODE: Opfølgningsmail:\n- Takker for tiden\n- Opsummerer det vigtigste vi aftalte\n- Bekræfter næste skridt\n- Tilfører én værdi (f.eks. relevant link, artikel)\n- Maks 150 ord"
    },
    {
      "id": "8.8",
      "categoryId": "8",
      "categoryName": "Salg og kundeindvendinger",
      "title": "Anbefalingsanmodning",
      "body": "ROLLE: Du er min kommunikationsassistent.\n\nKONTEKST: Tilfreds kunde [navn] har været hos os [år]. De har aldrig\nanbefalet os videre. Jeg vil spørge om anbefaling.\n\nMETODE: Mail der:\n- Starter varmt (ikke transaktionelt)\n- Spørger med respekt\n- Gør det nemt at sige nej\n- Foreslår konkret form (intro-mail, LinkedIn, samtale)\n- Maks 130 ord"
    },
    {
      "id": "8.9",
      "categoryId": "8",
      "categoryName": "Salg og kundeindvendinger",
      "title": "Pipelinemøde - mine top 5 deals",
      "body": "ROLLE: Du er min sælgercoach.\n\nKONTEKST: Mine top 5 aktive deals: [for hver: kunde, situation,\nnuværende status, næste skridt]\n\nMETODE:\n1. Rangér dem efter sandsynlighed for luk\n2. For hver: hvad er blokeringen?\n3. For hver: mit næste bedste skridt\n4. Samlet: hvor skal jeg bruge flest kræfter denne uge?"
    },
    {
      "id": "8.10",
      "categoryId": "8",
      "categoryName": "Salg og kundeindvendinger",
      "title": "Analysér tabte deals",
      "body": "ROLLE: Du er min analytiker.\n\nKONTEKST: Mine sidste 10 tabte deals: [kort beskrivelse af hver]\n\nMETODE:\n1. Identificér mønstre (fælles årsager til tab)\n2. Tre ting jeg bør ændre i min tilgang\n3. Tre ting i markedet der er en forklaring\n4. Én konkret ændring at prøve i næste måned"
    },
    {
      "id": "9.1",
      "categoryId": "9",
      "categoryName": "Brancher: landbrug, byggeri, detail, restauration",
      "title": "Landbrug - risikobillede",
      "body": "ROLLE: Du er min erfarne landbrugsassurandør.\n\nKONTEKST: Landmand [navn] driver [beskrivelse]. Jeg møder ham om 3 dage.\n\nMETODE: Komplet risikobillede:\n1. Dyresundhed og besætning\n2. Afgrøder og vejrsensitivitet\n3. Maskinpark og teknologi\n4. Bygninger og brand\n5. Ansvar og erhvervsansvar\n6. Driftstab\nFor hver: de 2 vigtigste spørgsmål til ham, og vores typiske dækning."
    },
    {
      "id": "9.2",
      "categoryId": "9",
      "categoryName": "Brancher: landbrug, byggeri, detail, restauration",
      "title": "Byggefirma - forsikringsbehov",
      "body": "ROLLE: Du er min erfarne kollega med speciale i bygge- og anlægsbranchen.\n\nKONTEKST: Byggefirma: [antal] ansatte, årlige projekter [antal/værdi],\ntype arbejde [residential/erhverv/anlæg].\n\nMETODE:\n1. Obligatoriske dækninger\n2. Stærkt anbefalede dækninger\n3. Nice-to-have\n4. De 3 typiske \"huller\" jeg ser i branchen\n5. Fem diagnostiske spørgsmål til kunden"
    },
    {
      "id": "9.3",
      "categoryId": "9",
      "categoryName": "Brancher: landbrug, byggeri, detail, restauration",
      "title": "Detailforretning - særlige risici",
      "body": "ROLLE: Du er min kollega med erfaring i detailbranchen.\n\nKONTEKST: Detailbutik: [type butik], [kvm], [beliggenhed], [antal]\nansatte.\n\nMETODE:\n1. Top-5 risici for netop denne type butik\n2. Typiske skadesscenarier\n3. Anbefalede dækningsniveauer\n4. Tre ting kunden selv kan gøre forebyggende"
    },
    {
      "id": "9.4",
      "categoryId": "9",
      "categoryName": "Brancher: landbrug, byggeri, detail, restauration",
      "title": "Restaurant - fra forsikringsvinkel",
      "body": "ROLLE: Du er min erfarne kollega med restaurantbranche-erfaring.\n\nKONTEKST: Restaurant: [type køkken], [antal] ansatte, [omsætning],\n[særlige forhold: åbningstider, udeservering etc].\n\nMETODE:\n1. Brandrisici (køkken + generelt)\n2. Fødevaresikkerhed og produktansvar\n3. Personale og arbejdsskader\n4. Forretningsafbrydelse ved køkkenbrand\n5. Tre ting mange restauranter overser"
    },
    {
      "id": "9.5",
      "categoryId": "9",
      "categoryName": "Brancher: landbrug, byggeri, detail, restauration",
      "title": "Håndværker (SMV)",
      "body": "ROLLE: Du er min erfarne kollega med speciale i håndværkssegmentet.\n\nKONTEKST: Håndværksvirksomhed: [fag: tømrer/murer/VVS/elektriker],\n[antal] ansatte, opererer i [område].\n\nMETODE:\n1. Obligatoriske dækninger (lovkrav)\n2. Stærkt anbefalede (brancheforventning)\n3. Typiske skadesscenarier for faget\n4. Hvad skelner branchens førende fra gennemsnittet\n5. Tre gode spørgsmål til mødet"
    },
    {
      "id": "9.6",
      "categoryId": "9",
      "categoryName": "Brancher: landbrug, byggeri, detail, restauration",
      "title": "Transport- og logistikfirma",
      "body": "ROLLE: Du er min erfarne kollega.\n\nKONTEKST: Transportvirksomhed: [antal] lastbiler, [nationale/EU/globale]\nruter, [type gods].\n\nMETODE:\n1. Særlige risici i branchen\n2. Typiske dækninger (lastbil, gods, chauffør, ansvar)\n3. Internationale overvejelser\n4. Tre ændringer der kommer med EU-regulering\n5. Fem kritiske spørgsmål til kunden"
    },
    {
      "id": "9.7",
      "categoryId": "9",
      "categoryName": "Brancher: landbrug, byggeri, detail, restauration",
      "title": "Produktionsvirksomhed",
      "body": "ROLLE: Du er min erfarne kollega med speciale i fremstillingsvirksomheder.\n\nKONTEKST: Virksomhed: [produkt], [antal] ansatte, [omsætning],\n[eksportandel].\n\nMETODE:\n1. Produktansvar (særligt ved eksport)\n2. Maskinpark og driftstab\n3. Bygninger og lager\n4. Cyber og IT-afhængighed\n5. Tre risici der ofte overses"
    },
    {
      "id": "9.8",
      "categoryId": "9",
      "categoryName": "Brancher: landbrug, byggeri, detail, restauration",
      "title": "IT- og konsulentvirksomhed",
      "body": "ROLLE: Du er min erfarne kollega med speciale i vidensvirksomheder.\n\nKONTEKST: IT/konsulenthus: [antal] konsulenter, [kundetype],\n[omsætning].\n\nMETODE:\n1. Professionelt ansvar (fejl i leverance)\n2. Cyber og dataansvar\n3. Nøglepersonsforsikring (essentielt i vidensvirksomheder)\n4. Kontorrisici (mindre relevant men stadig)\n5. Tre spørgsmål om deres kontraktvilkår"
    },
    {
      "id": "9.9",
      "categoryId": "9",
      "categoryName": "Brancher: landbrug, byggeri, detail, restauration",
      "title": "Landbrug - generationsskifte",
      "body": "ROLLE: Du er min erfarne landbrugsassurandør.\n\nKONTEKST: Landmand [navn] står over for generationsskifte. Næste gen:\n[oplysninger]. Bedrift: [beskrivelse].\n\nMETODE:\n1. Fem forsikringsmæssige konsekvenser af skiftet\n2. Nye produkter der bliver aktuelle\n3. Timing - hvad skal ændres hvornår\n4. Typiske faldgruber i landbrugsgenerationsskifter"
    },
    {
      "id": "9.10",
      "categoryId": "9",
      "categoryName": "Brancher: landbrug, byggeri, detail, restauration",
      "title": "Byggeri - stort projekt",
      "body": "ROLLE: Du er min erfarne kollega.\n\nKONTEKST: Byggeprojekt: [type, størrelse, varighed, kompleksitet].\n\nMETODE:\n1. Nødvendige projektforsikringer\n2. Tre \"hvem dækker hvad\"-spørgsmål jeg skal afklare\n3. Typiske disputerpunkter i lignende projekter\n4. Tidspunkter hvor dækning typisk ændres\n5. Tjekliste til bygherren"
    },
    {
      "id": "9.11",
      "categoryId": "9",
      "categoryName": "Brancher: landbrug, byggeri, detail, restauration",
      "title": "E-commerce-virksomhed",
      "body": "ROLLE: Du er min erfarne kollega med e-commerce-erfaring.\n\nKONTEKST: E-commerce: [produkt], [national/international], [omsætning],\n[lageromfang].\n\nMETODE:\n1. Cyber og databehandling (GDPR-implikationer)\n2. Lager og logistik\n3. Produktansvar (særligt ved import)\n4. Returhåndtering og svig\n5. Tre risici der typisk overses i unge e-com virksomheder"
    },
    {
      "id": "9.12",
      "categoryId": "9",
      "categoryName": "Brancher: landbrug, byggeri, detail, restauration",
      "title": "Sundhedssektor - klinik eller praksis",
      "body": "ROLLE: Du er min erfarne kollega med sundhedssektor-erfaring.\n\nKONTEKST: Klinik: [type: læge/tandlæge/fysioterapi/psykolog], [antal]\nbehandlere, [omsætning].\n\nMETODE:\n1. Professionelt ansvar (centralt i denne branche)\n2. Cyber og databehandling (sundhedsdata = særlig kategori)\n3. Klinikdrift og inventar\n4. Personale\n5. Tre typiske faldgruber"
    },
    {
      "id": "10.1",
      "categoryId": "10",
      "categoryName": "Produktforståelse og forklaringer",
      "title": "Forklar police i tre versioner",
      "body": "ROLLE: Du er min kommunikationsassistent.\n\nKONTEKST: Police-tekst: [indsæt]\n\nMETODE: Tre versioner:\n1. Elevator (30 ord): kernen\n2. Kort (100 ord): hovedpunkter\n3. Fuld (300 ord): alle detaljer\nAlle i hverdagssprog. Bevar alle vigtige undtagelser og selvrisikobetingelser."
    },
    {
      "id": "10.2",
      "categoryId": "10",
      "categoryName": "Produktforståelse og forklaringer",
      "title": "Forskellen mellem to produkter",
      "body": "ROLLE: Du er min produktspecialist.\n\nKONTEKST: Forskellen mellem [produkt A] og [produkt B] forklaret for\nen kunde uden forsikringsbaggrund.\n\nMETODE:\n1. Én-sætnings sammenfatning af forskellen\n2. Tabel: dækning, pris, selvrisiko, målgruppe\n3. Tre konkrete eksempler (samme situation, forskellig udfald)\n4. Anbefaling: hvilken kundetype passer til hvilket?"
    },
    {
      "id": "10.3",
      "categoryId": "10",
      "categoryName": "Produktforståelse og forklaringer",
      "title": "Forklar selvrisiko",
      "body": "ROLLE: Du er min kommunikationsassistent.\n\nKONTEKST: Kunde forstår ikke hvad \"selvrisiko\" betyder i deres police.\n\nMETODE:\n1. Forklaring i 3 sætninger\n2. Konkret eksempel de kan relatere til\n3. Hvorfor det er sådan\n4. Hvordan selvrisikoen påvirker prisen\nHverdagssprog. Ingen forsikringsjargon."
    },
    {
      "id": "10.4",
      "categoryId": "10",
      "categoryName": "Produktforståelse og forklaringer",
      "title": "Forklar gensidig vs. aktieselskab",
      "body": "ROLLE: Du er min forklarings-assistent.\n\nKONTEKST: Kunde spørger om forskellen på et gensidigt forsikringsselskab\nog et aktieselskab.\n\nMETODE:\n1. Forskellen på 3 bullets\n2. Hvad det betyder for kunden i praksis\n3. Eksempler på hver type\n4. Ingen værdi-vurdering (\"vi er bedst\")"
    },
    {
      "id": "10.5",
      "categoryId": "10",
      "categoryName": "Produktforståelse og forklaringer",
      "title": "Forklar undtagelsesklausul",
      "body": "ROLLE: Du er min kommunikationsassistent.\n\nKONTEKST: Policen har undtagelsen: \"[indsæt klausul]\". Kunde spørger om\nhvad det betyder.\n\nMETODE:\n1. Hvad klausulen betyder\n2. Konkret eksempel hvor den ville udelukke dækning\n3. Konkret eksempel hvor dækningen stadig er intakt\n4. Hvad kunden kan gøre hvis de vil have den fjernet\nKlar, ærlig, ikke defensiv tone."
    },
    {
      "id": "10.6",
      "categoryId": "10",
      "categoryName": "Produktforståelse og forklaringer",
      "title": "Forklar tab af erhvervsevne",
      "body": "ROLLE: Du er min personkunde-specialist.\n\nKONTEKST: Kunde [profil] overvejer tab af erhvervsevne-forsikring.\nDe har kun hørt om det én gang.\n\nMETODE: Forklaring:\n1. Hvad det er (3 sætninger)\n2. Hvornår den udbetaler\n3. Hvornår den IKKE udbetaler\n4. Et scenarie fra hverdagen der viser værdien\n5. Typiske priser og dækningsniveauer\n6. Maks 300 ord, hverdagssprog"
    },
    {
      "id": "10.7",
      "categoryId": "10",
      "categoryName": "Produktforståelse og forklaringer",
      "title": "Forklar nyværdi vs dagsværdi",
      "body": "ROLLE: Du er min produktassistent.\n\nKONTEKST: Kunde forvirret over \"nyværdi\" vs \"dagsværdi\" i deres indbo-\neller husforsikring.\n\nMETODE:\n1. Forskel i 2 sætninger\n2. Et helt konkret eksempel med tal\n3. Hvilken er typisk bedre og hvorfor\n4. Hvorfor det påvirker prisen"
    },
    {
      "id": "10.8",
      "categoryId": "10",
      "categoryName": "Produktforståelse og forklaringer",
      "title": "Forklar bonusordning",
      "body": "ROLLE: Du er min produktassistent.\n\nKONTEKST: Kunde spørger om hvordan bonus-ordning fungerer på [bil/\nansvar-forsikring]. Nuværende bonusniveau: [%]. Skade for nylig: [ja/nej].\n\nMETODE:\n1. Hvordan bonusen optjenes og mistes\n2. Kundens nuværende position\n3. Konkret hvad en skade ville koste (ikke kun selvrisikoen, også\ntabt bonus)\n4. Anbefaling: bør små skader anmeldes?"
    },
    {
      "id": "11.1",
      "categoryId": "11",
      "categoryName": "Excel, data og tabeller",
      "title": "Stikord → struktureret Excel-tabel",
      "body": "ROLLE: Du er min data-assistent.\n\nKONTEKST: Mine noter: [indsæt]\n\nMETODE: Omdan til tabel med kolonner: [definer kolonner].\nÉn række pr. enhed. Format: direkte kopierbart til Excel (tab-separeret)."
    },
    {
      "id": "11.2",
      "categoryId": "11",
      "categoryName": "Excel, data og tabeller",
      "title": "Sammenlign tre tilbud i tabel",
      "body": "ROLLE: Du er min analytiker.\n\nKONTEKST: Tre tilbud: [indsæt for hver: selskab, dækning, pris, selvrisiko,\nsærlige vilkår].\n\nMETODE: Tabel med hvert selskab som kolonne og rækker for:\n- Årlig præmie\n- Selvrisiko\n- Primære dækninger\n- Undtagelser\n- Særlige vilkår\n- Min samlede vurdering\nAfrund med 2 linjer observation."
    },
    {
      "id": "11.3",
      "categoryId": "11",
      "categoryName": "Excel, data og tabeller",
      "title": "Porteføljeoversigt af mine kunder",
      "body": "ROLLE: Du er min CRM-assistent.\n\nKONTEKST: Mine kunder: [indsæt liste med nøgleoplysninger]\n\nMETODE: Tabel med kolonner:\n- Kundenavn\n- Type (privat/erhverv)\n- Årlig præmie\n- Næste fornyelse\n- Skader sidste 12 mdr\n- Næste action (hvad og hvornår)\nSorter efter næste fornyelse."
    },
    {
      "id": "11.4",
      "categoryId": "11",
      "categoryName": "Excel, data og tabeller",
      "title": "Skadesoversigt med statistik",
      "body": "ROLLE: Du er min dataanalytiker.\n\nKONTEKST: Skader seneste 12 mdr: [indsæt rå data]\n\nMETODE:\n1. Tabel med oversigt\n2. Statistik: antal, total udbetalt, gennemsnit, median\n3. Top 3 skadesårsager\n4. Månedlig fordeling\n5. Format: klart kopierbart"
    },
    {
      "id": "11.5",
      "categoryId": "11",
      "categoryName": "Excel, data og tabeller",
      "title": "Pipeline-oversigt",
      "body": "ROLLE: Du er min salgs-data-assistent.\n\nKONTEKST: Mine aktive deals: [indsæt for hver: kunde, værdi,\nsandsynlighed, næste skridt, dato]\n\nMETODE: Tabel sorteret efter forventet luk-dato. Kolonner: kunde,\nværdi, sandsynlighed, næste skridt, deadline. Afslut med:\n- Vægtet pipelineværdi\n- Tre deals der kræver opmærksomhed denne uge"
    },
    {
      "id": "11.6",
      "categoryId": "11",
      "categoryName": "Excel, data og tabeller",
      "title": "Omkostningsfordeling pr kunde",
      "body": "ROLLE: Du er min regnskabs-assistent.\n\nKONTEKST: Tid og omkostninger på kunder: [indsæt data]\n\nMETODE:\n1. Tabel: kunde, timer, direkte omkostninger, præmieindtægt,\ndækningsgrad\n2. Marker kunder hvor dækningsgraden er lav\n3. Tre observationer"
    },
    {
      "id": "11.7",
      "categoryId": "11",
      "categoryName": "Excel, data og tabeller",
      "title": "Årsoverblik over min forretning",
      "body": "ROLLE: Du er min analytiker.\n\nKONTEKST: Året der gik: [indsæt key numbers og begivenheder]\n\nMETODE:\n1. Hovedtal i tabel (sammenlignet med sidste år)\n2. Tre vigtigste gevinster\n3. Tre største udfordringer\n4. Prognose for næste år\n5. Maks 2 A4-sider"
    },
    {
      "id": "11.8",
      "categoryId": "11",
      "categoryName": "Excel, data og tabeller",
      "title": "Pris-sammenligning pr. dækningstype",
      "body": "ROLLE: Du er min produktanalytiker.\n\nKONTEKST: Priser på samme dækning hos forskellige selskaber: [indsæt]\n\nMETODE:\n1. Tabel: selskab, præmie, selvrisiko, effektiv pris pr. forsikringsår\n2. Markér billigste, dyreste, mest værdi for pengene\n3. Konklusion i én sætning"
    },
    {
      "id": "12.1",
      "categoryId": "12",
      "categoryName": "Intern kommunikation",
      "title": "Handover-note til kollega",
      "body": "ROLLE: Du er min assistent.\n\nKONTEKST: Jeg er syg/på ferie og en kollega skal overtage [kunde] i\n[periode]. Status: [indsæt]\n\nMETODE: Handover-note:\n- Kundens nuværende situation\n- Seneste aftaler\n- Hvad kollegaen skal huske (advarsler, præferencer)\n- Filer at læse\n- Kontaktoplysninger\n- Maks 1 A4"
    },
    {
      "id": "12.2",
      "categoryId": "12",
      "categoryName": "Intern kommunikation",
      "title": "Sagsfremstilling til chefen",
      "body": "ROLLE: Du er min kommunikationsassistent.\n\nKONTEKST: Sag [beskrivelse] - jeg skal orientere min chef. Fakta:\n[indsæt].\n\nMETODE:\n1. Sagen på 3 linjer (hvad, hvem, status)\n2. Handlinger indtil nu\n3. Udfordringer\n4. Hvad jeg foreslår\n5. Hvad jeg har brug for fra chefen\n6. Maks 200 ord"
    },
    {
      "id": "12.3",
      "categoryId": "12",
      "categoryName": "Intern kommunikation",
      "title": "Eskaleringsmail",
      "body": "ROLLE: Du er min erfarne kollega.\n\nKONTEKST: Sag er ved at gå skævt: [beskriv]. Jeg har brug for at\neskalere til [chef/specialist].\n\nMETODE: Mail:\n- Saglig, ikke panisk tone\n- Fakta først\n- Hvad jeg har prøvet\n- Hvor jeg er låst\n- Konkret hvad jeg har brug for\n- Maks 180 ord"
    },
    {
      "id": "12.4",
      "categoryId": "12",
      "categoryName": "Intern kommunikation",
      "title": "Slack/Teams-besked - deling af indsigt",
      "body": "ROLLE: Du er min kommunikationsassistent.\n\nKONTEKST: Jeg har lært noget nyt ved et kundemøde der kan gavne\nkolleger: [indsæt]\n\nMETODE: Team-besked:\n- Krog i første linje\n- Hovedpointen\n- Hvad kollegerne kan bruge det til\n- Maks 100 ord\n- Tone: kollegial, ikke belærerende"
    },
    {
      "id": "12.5",
      "categoryId": "12",
      "categoryName": "Intern kommunikation",
      "title": "Anbefaling til produktforbedring",
      "body": "ROLLE: Du er min analytiker.\n\nKONTEKST: Jeg har observeret et tilbagevendende problem med [produkt/\nproces]: [indsæt eksempler].\n\nMETODE: Anbefaling til produktchef:\n1. Problemet i én sætning\n2. Tre konkrete eksempler fra min hverdag\n3. Tre løsningsforslag\n4. Mit primære forslag og hvorfor\n5. Maks 300 ord"
    },
    {
      "id": "12.6",
      "categoryId": "12",
      "categoryName": "Intern kommunikation",
      "title": "Mødereferat til ledelsen",
      "body": "ROLLE: Du er min assistent.\n\nKONTEKST: Strategisk møde jeg har deltaget i. Stikord: [indsæt]\n\nMETODE: Referat til ledelsesgruppen:\n- Beslutninger (ikke diskussioner)\n- Strategiske konsekvenser\n- Næste skridt og ejerskab\n- Opfølgningspunkter\n- Maks 1 A4, kopierbart format"
    },
    {
      "id": "12.7",
      "categoryId": "12",
      "categoryName": "Intern kommunikation",
      "title": "Feedback til kollega",
      "body": "ROLLE: Du er min coach-kollega.\n\nKONTEKST: Jeg skal give feedback til [kollega] om [situation]. Min\nobservation: [indsæt].\n\nMETODE: Skriv feedback:\n- Situationsspecifik (ikke generisk)\n- Konkret adfærd, ikke personkarakteristik\n- Både positiv og udviklende\n- Åbner for dialog\n- Maks 150 ord\n- Respektfuld, kollegial tone"
    },
    {
      "id": "12.8",
      "categoryId": "12",
      "categoryName": "Intern kommunikation",
      "title": "Ugeopsummering til mit team",
      "body": "ROLLE: Du er min kommunikationsassistent.\n\nKONTEKST: Min uge: [stikord om møder, deals, skader, udfordringer]\n\nMETODE: Kort ugeopsummering til team:\n- Tre vigtigste ting fra ugen\n- Én ting jeg har brug for hjælp til\n- Én ting jeg har lært jeg vil dele\n- Maks 150 ord, kollegial tone"
    },
    {
      "id": "13.1",
      "categoryId": "13",
      "categoryName": "Compliance og sikkerhed",
      "title": "Tjek af mail før afsendelse - GDPR-tjek",
      "body": "ROLLE: Du er min compliance-assistent.\n\nKONTEKST: Jeg skal sende denne mail: [indsæt]\n\nMETODE: Tjek for:\n1. Personfølsomme oplysninger der ikke bør sendes\n2. Kundedata der bør anonymiseres\n3. Formulations-risici (forpligtende løfter)\n4. Juridiske ord der kan misforstås\nMarkér konkret hvad der bør ændres."
    },
    {
      "id": "13.2",
      "categoryId": "13",
      "categoryName": "Compliance og sikkerhed",
      "title": "Formuler et AI-politisk brev til ledelsen",
      "body": "ROLLE: Du er min compliance-rådgiver.\n\nKONTEKST: Jeg vil foreslå en AI-brugspolitik til mit selskab. Nuværende\ntilstand: [indsæt].\n\nMETODE: Brev til ledelsen:\n- Problemet (ingen klar politik)\n- Risici ved status quo\n- Tre principper for god AI-brug hos assurandører\n- Forslag til næste skridt\n- Maks 1 A4"
    },
    {
      "id": "13.3",
      "categoryId": "13",
      "categoryName": "Compliance og sikkerhed",
      "title": "Tjek af tilbud for juridiske risici",
      "body": "ROLLE: Du er min juridiske sparringspartner.\n\nKONTEKST: Tilbud til [kunde]: [indsæt]\n\nMETODE:\n1. Gennemgå for formuleringer der kan udgøre juridisk risiko\n2. Markér afsnit der skal gennemses af jurist\n3. Foreslå alternative formuleringer\n4. Konkret vurdering: kan jeg sende det som det er?"
    },
    {
      "id": "13.4",
      "categoryId": "13",
      "categoryName": "Compliance og sikkerhed",
      "title": "Dokumentation af rådgivning",
      "body": "ROLLE: Du er min compliance-assistent.\n\nKONTEKST: Mødet med [kunde] varede [tid]. Emner: [indsæt]. Hvad jeg har\nrådet: [indsæt].\n\nMETODE: Rådgivnings-dokumentation:\n- Hvilke produkter blev diskuteret\n- Hvilke anbefalinger gav jeg\n- Hvilke reservationer gjorde jeg\n- Hvad blev aftalt skriftligt\n- Format: kopierbar til rådgivningsjournal"
    },
    {
      "id": "13.5",
      "categoryId": "13",
      "categoryName": "Compliance og sikkerhed",
      "title": "Anonymisering af kundecase",
      "body": "ROLLE: Du er min dataassistent.\n\nKONTEKST: Jeg vil bruge denne kundecase i et AI-værktøj: [indsæt]\n\nMETODE:\n1. Identificér alle personoplysninger\n2. Foreslå anonymiseret version\n3. Bevar alle fakta jeg har brug for til rådgivning\n4. Vis før/efter"
    },
    {
      "id": "14.1",
      "categoryId": "14",
      "categoryName": "Personlig udvikling og refleksion",
      "title": "Refleksion efter tabt sag",
      "body": "ROLLE: Du er min reflekterende coach.\n\nKONTEKST: Jeg har tabt [sag/deal]. Forløbet: [indsæt]\n\nMETODE: Hjælp mig reflektere:\n1. Tre faktorer jeg kunne have gjort anderledes\n2. Tre faktorer der ikke var inden for min kontrol\n3. Én konkret læring at tage med\n4. Stil opfølgende spørgsmål før du konkluderer"
    },
    {
      "id": "14.2",
      "categoryId": "14",
      "categoryName": "Personlig udvikling og refleksion",
      "title": "Sparring om svært kundeforhold",
      "body": "ROLLE: Du er min kollega-coach.\n\nKONTEKST: Jeg har et vanskeligt forhold til [kunde]: [beskriv]\n\nMETODE: Hjælp mig tænke:\n1. Stil 3 åbne spørgsmål først\n2. Foreslå tre mulige årsager til situationen\n3. Tre måder at gå forfra på\n4. Én konkret handling næste uge\nCoach-tone, ikke rådgiver-tone."
    },
    {
      "id": "14.3",
      "categoryId": "14",
      "categoryName": "Personlig udvikling og refleksion",
      "title": "Forberedelse til MUS-samtale",
      "body": "ROLLE: Du er min MUS-forberedelsescoach.\n\nKONTEKST: MUS-samtale med min chef om 14 dage. Året der gik: [stikord].\n\nMETODE: Forbered mig:\n1. Tre stærkeste resultater jeg kan fremhæve\n2. Tre udfordringer jeg ærligt bør nævne\n3. Tre mål for næste år\n4. Tre ting jeg gerne vil have fra chefen\n5. Tre spørgsmål jeg kan stille"
    },
    {
      "id": "14.4",
      "categoryId": "14",
      "categoryName": "Personlig udvikling og refleksion",
      "title": "Kompetenceplan for næste kvartal",
      "body": "ROLLE: Du er min udviklingscoach.\n\nKONTEKST: Mit job: [beskriv]. Mine styrker: [indsæt]. Mine svagheder:\n[indsæt]. Branche-udvikling: [indsæt].\n\nMETODE: Kompetenceplan for næste 3 måneder:\n1. Den ene kompetence der vil give mest løft\n2. Tre konkrete aktiviteter\n3. Tidsplan\n4. Måde at måle fremgang på"
    },
    {
      "id": "14.5",
      "categoryId": "14",
      "categoryName": "Personlig udvikling og refleksion",
      "title": "Analyse af egen tidsforbrug",
      "body": "ROLLE: Du er min produktivitets-coach.\n\nKONTEKST: Mit typiske ugeforbrug: [indsæt - eller upload kalenderdata]\n\nMETODE:\n1. Hvad bruger jeg tiden på (i kategorier)\n2. Hvor er mest værdi skabt\n3. Hvor er mindst værdi skabt\n4. Tre justeringer der kan frigive mest tid\n5. Én konkret ændring at starte med"
    },
    {
      "id": "14.6",
      "categoryId": "14",
      "categoryName": "Personlig udvikling og refleksion",
      "title": "Forberedelse til svær samtale",
      "body": "ROLLE: Du er min samtale-coach.\n\nKONTEKST: Jeg skal have en svær samtale med [person] om [emne].\nBaggrund: [indsæt].\n\nMETODE: Forbered mig:\n1. Mit kernebudskab i én sætning\n2. Tre mulige reaktioner og mit svar på hver\n3. Én åbningssætning\n4. Én afslutningssætning\n5. Én ting at undgå at sige"
    },
    {
      "id": "14.7",
      "categoryId": "14",
      "categoryName": "Personlig udvikling og refleksion",
      "title": "Personlig debrief af ugen",
      "body": "ROLLE: Du er min refleksions-assistent.\n\nKONTEKST: Min uge: [stikord]\n\nMETODE:\n1. Tre ting der gik godt\n2. Tre ting der kan forbedres\n3. Én indsigt at tage med\n4. Én ting at prioritere næste uge\n5. Maks 150 ord, reflekteret tone"
    }
  ]
};
