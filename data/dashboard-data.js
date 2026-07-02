// ============================================================
// Devonshire Dashboard DATA FILE — updated by scheduled refresh
// The main HTML is never rewritten; only this file changes.
// Generated: 2026-07-02
// ============================================================

// ---- DATA ----
const DATA = {
  daily:{labels:['3/16','3/18','3/19','3/20','3/23','3/24','3/25','3/30','4/1','4/2','4/3','4/4','4/6'],revenue:[4856,4551,4280,2286,5439,4120,3890,4180,530,3240,4890,3760,5180],py:[4190,4020,3980,1980,4890,3700,3510,3820,410,2980,4510,3410,4820]},
  weekly:{labels:['W10','W11','W12','W13','W14','W15'],revenue:[21340,23180,19114,20890,17910,22560],py:[19100,20800,17200,18700,16100,20200]},
  monthly:{labels:['Jan','Feb','Mar','Apr MTD'],revenue:[98300,118700,118854,40326],py:[88400,106700,106900,36260]}
};

// ---- INV_DATA ----
const INV_DATA = [ // Last updated from Vetcove ordering DM: Jul 1, 2026 (Wed Mid-Week Restock Check — same 7 high-volume items still URGENT/unconfirmed from Mon 6/29 cart: Rabies Defensor, Vanguard Plus 5L4, Proheart 12, Bronchi-Shield, Propoflo, Euthasol, Nobivac Feline; no fresh TJ since Jun 8) | #need-list sync: Jul 2, 2026
  // --- ORDER NOW (critical) — from May 27 updated ordering DM ---
  {name:'Proheart 12',code:'HW0025',cat:'flea-tick',status:'critical',pct:20,note:'URGENT per Jun 29 Mon DM — ~16 units/wk, 14 days since Jun 15 order (Jun 22 unconfirmed) (usage-based, no fresh TJ) — Zoetis',avg:16,order:20,cost:589,priority:'ORDER NOW',feb:0,mar:14},
  {name:'Rabies — Defensor 1 Yr',code:'VAC001',cat:'vaccine',status:'critical',pct:20,note:'URGENT per Jun 29 Mon DM — ~27 doses/wk, 14 days since Jun 15 order (Jun 22 unconfirmed) — Zoetis',avg:49,order:60,cost:358,priority:'ORDER NOW',feb:76,mar:53},
  {name:'Propoflo (propofol)',code:'PROP01',cat:'anesthetic',status:'critical',pct:20,note:'URGENT per Jun 29 Mon DM — ~24 mL/wk, 14 days since Jun 15 order (Jun 22 unconfirmed) — Covetrus',avg:24,order:30,cost:120,priority:'ORDER NOW',feb:0,mar:0},
  {name:'Euthasol',code:'EUTH01',cat:'controlled',status:'critical',pct:20,note:'URGENT per Jun 29 Mon DM — ~11 mL/wk, controlled, needs Dr. Smiley sign-off — Covetrus',avg:11,order:15,cost:85,priority:'ORDER NOW',feb:0,mar:0},
  {name:'Nobivac Feline FVRCCP/FeLV',code:'NOBF01',cat:'vaccine',status:'critical',pct:20,note:'URGENT per Jun 22 Mon DM (Nobivac Feline 1-HCPCH+Fe) — ~6 doses/wk — Covetrus',avg:6,order:10,cost:180,priority:'ORDER NOW',feb:0,mar:0},
  {name:'Bravecto Quantum Inj 66–88#',code:'BQXL',cat:'flea-tick',status:'ok',pct:60,note:'Ordered May 27, in "Recently Ordered" per Jun 1 DM',avg:4,order:5,cost:1220,priority:'ROUTINE',feb:2,mar:4},
  {name:'Clavamox Drops 15mL',code:'ANT001',cat:'antibiotic',status:'critical',pct:15,note:'Highest turnover — keep 2 min',avg:18,order:22,cost:330,priority:'ORDER NOW',feb:16,mar:20},
  {name:'Epinephrine 1mg/mL',code:'EMER01',cat:'emergency',status:'critical',pct:25,note:'NEVER run out — check surgery storage too',avg:2,order:3,cost:45,priority:'ORDER NOW',feb:1,mar:2},
  {name:'Feline RC GI Loaf Cans',code:'44725',cat:'diet',status:'critical',pct:18,note:'Spiky usage — reorder aggressively',avg:41,order:51,cost:1554,priority:'ORDER NOW',feb:42,mar:72},
  // --- CHRONIC UNFILLED (4+ weeks) ---
  {name:'Animax 30ml',code:'ANIMX1',cat:'other',status:'critical',pct:10,note:'CHRONIC — 6+ requests since Apr 29, resolve sourcing',avg:2,order:3,cost:45,priority:'ORDER NOW',feb:0,mar:0},
  {name:'DALPP Vaccine 1yr',code:'1120',cat:'vaccine',status:'ok',pct:60,note:'Ordered May 27, in "Recently Ordered" per Jun 1 DM',avg:51,order:58,cost:748,priority:'ROUTINE',feb:76,mar:46},
  {name:'Cosyntropin',code:'COSYN1',cat:'other',status:'critical',pct:10,note:'CHRONIC — 4+ requests since May 6',avg:1,order:2,cost:95,priority:'ORDER NOW',feb:0,mar:0},
  {name:'Flexprofen 25+100mg',code:'FLEX01',cat:'other',status:'ok',pct:60,note:'In "Recently Ordered — Probably OK" per Jun 8 DM (May 27 order)',avg:2,order:3,cost:50,priority:'ROUTINE',feb:0,mar:0},
  {name:'22g Needles',code:'NEED22',cat:'other',status:'critical',pct:10,note:'CHRONIC — since Apr 29',avg:5,order:10,cost:15,priority:'ORDER NOW',feb:0,mar:0},
  {name:'Whole Blood Containers',code:'WBC01',cat:'other',status:'critical',pct:10,note:'CHRONIC — recurring since May 1',avg:1,order:2,cost:30,priority:'ORDER NOW',feb:0,mar:0},
  // --- NEED-LIST / CARRY-FORWARD ---
  {name:'Hydromorphone x2',code:'HYDRO1',cat:'controlled',status:'critical',pct:15,note:'Carry-forward from May 19 — controlled, Dr. Smiley sign-off',avg:1,order:2,cost:60,priority:'ORDER NOW',feb:0,mar:0},
  {name:'Diazepam',code:'DIAZ01',cat:'controlled',status:'ok',pct:60,note:'Diazepam Inj in "Recently Ordered — Probably OK" per Jun 8 DM (May 27 order)',avg:1,order:2,cost:40,priority:'ROUTINE',feb:0,mar:0},
  {name:'Librela 88-132#',code:'LIB88',cat:'pain',status:'critical',pct:15,note:'4th+ request from Allison — high priority',avg:3,order:5,cost:330,priority:'ORDER NOW',feb:0,mar:0},
  {name:'Trazodone',code:'TRAZ01',cat:'other',status:'critical',pct:20,note:'Need-list May 21',avg:3,order:5,cost:25,priority:'ORDER NOW',feb:0,mar:0},
  {name:'Vetmedin 2.5mg',code:'VETM25',cat:'other',status:'ok',pct:60,note:'In "Recently Ordered — Probably OK" per Jun 8 DM (May 27 order)',avg:2,order:3,cost:85,priority:'ROUTINE',feb:0,mar:0},
  {name:'Levetiracetam XR 750mg',code:'LEVE01',cat:'other',status:'critical',pct:20,note:'Kelsey request May 24 for Shadow',avg:1,order:2,cost:45,priority:'ORDER NOW',feb:0,mar:0},
  {name:'Marboquin 100mg',code:'MARB01',cat:'antibiotic',status:'critical',pct:20,note:'Carry-forward from May 19',avg:1,order:2,cost:35,priority:'ORDER NOW',feb:0,mar:0},
  {name:'Simparica Trio 44-88',code:'SIT0048',cat:'flea-tick',status:'ok',pct:60,note:'Ordered May 27, in "Recently Ordered" per Jun 1 DM',avg:5,order:8,cost:750,priority:'ROUTINE',feb:0,mar:0},
  {name:'Vetmedin 5mg',code:'VETM50',cat:'other',status:'critical',pct:20,note:'Need-list May 27 — Allison',avg:2,order:3,cost:95,priority:'ORDER NOW',feb:0,mar:0},
  {name:'Thyro-tab 0.8mg',code:'THYR08',cat:'other',status:'critical',pct:20,note:'Need-list May 27 — Staff Computer',avg:1,order:2,cost:30,priority:'ORDER NOW',feb:0,mar:0},
  {name:'Omeprazole (Kyzer)',code:'OMEP01',cat:'other',status:'critical',pct:20,note:'Need-list May 27 — 2 bottles for Kyzer',avg:1,order:2,cost:25,priority:'ORDER NOW',feb:0,mar:0},
  // --- LOW / CHECK STOCK ---
  {name:'Dexdomitor Inj',code:'DEX01',cat:'anesthetic',status:'low',pct:40,note:'~1.6 mL/wk — LOW/check stock per Jun 8 DM',avg:2,order:3,cost:95,priority:'THIS WEEK',feb:0,mar:0},
  {name:'Carprofen Injection',code:'CARP01',cat:'pain',status:'low',pct:40,note:'~4 mL/wk — check stock',avg:4,order:5,cost:55,priority:'THIS WEEK',feb:0,mar:0},
  {name:'Ketamine Inj',code:'KET01',cat:'controlled',status:'low',pct:40,note:'~1 mL/wk — controlled, last order May 4',avg:1,order:2,cost:35,priority:'THIS WEEK',feb:0,mar:0},
  {name:'Ace Injectable',code:'ACE01',cat:'anesthetic',status:'low',pct:40,note:'~1 mL/wk — check stock',avg:1,order:2,cost:25,priority:'THIS WEEK',feb:0,mar:0},
  {name:'Onsior Pills',code:'ONS01',cat:'pain',status:'low',pct:40,note:'~3 pills/wk',avg:3,order:5,cost:65,priority:'THIS WEEK',feb:0,mar:0},
  {name:'Vetprofen 100mg',code:'VETP01',cat:'pain',status:'low',pct:40,note:'~9 tabs/wk',avg:9,order:12,cost:40,priority:'THIS WEEK',feb:0,mar:0},
  {name:'Vanguard Plus 5L4',code:'VAC006',cat:'vaccine',status:'critical',pct:20,note:'URGENT per Jun 29 Mon DM — ~17 doses/wk, 14 days since Jun 15 order (Jun 22 unconfirmed) — Zoetis',avg:48,order:58,cost:392,priority:'ORDER NOW',feb:76,mar:46},
  {name:'Bordetella Canine 1yr',code:'1006',cat:'vaccine',status:'low',pct:37,note:'High volume — pair with DALPP order',avg:51,order:56,cost:638,priority:'THIS WEEK',feb:76,mar:46},
  {name:'Cytopoint 40mg',code:'CYT040',cat:'pain',status:'low',pct:40,note:'Goes fast — always keep a backup vial',avg:6,order:8,cost:520,priority:'THIS WEEK',feb:5,mar:7},
  {name:'Convenia 10mL',code:'CNV010',cat:'antibiotic',status:'low',pct:35,note:'Limited days once opened — check exp dates',avg:3,order:4,cost:340,priority:'THIS WEEK',feb:2,mar:3},
  {name:'Cerenia Inj 20mg/mL',code:'CER020',cat:'other',status:'low',pct:42,note:'Always 1 sealed backup',avg:3,order:4,cost:280,priority:'THIS WEEK',feb:3,mar:4},
  {name:'Simparica TRIO 6pk (11–22#)',code:'SIT0036',cat:'flea-tick',status:'ok',pct:60,note:'90 doses stocked ~Apr 27',avg:8,order:10,cost:869,priority:'ROUTINE',feb:5,mar:12},
  {name:'Simparica TRIO 6pk (22–44#)',code:'SIT0046',cat:'flea-tick',status:'ok',pct:60,note:'90 doses stocked ~Apr 27',avg:7,order:8,cost:752,priority:'ROUTINE',feb:4,mar:9},
  // --- OK ---
  {name:'Librela 15mg/mL',code:'10022808',cat:'pain',status:'ok',pct:60,note:'42+ units but 88-132 size requested separately',avg:5,order:6,cost:252,priority:'ROUTINE',feb:4,mar:6},
  {name:'Amoxicillin 250mg Caps',code:'ANT002',cat:'antibiotic',status:'ok',pct:60,note:'High turnover — reorder at 1 bottle',avg:12,order:15,cost:90,priority:'ROUTINE',feb:10,mar:14},
  {name:'Simparica 11–22# (orange)',code:'SI003',cat:'flea-tick',status:'ok',pct:55,note:'2 full sleeves',avg:13,order:15,cost:372,priority:'ROUTINE',feb:8,mar:22},
  {name:'Bronchi-Shield Oral',code:'VAC0017',cat:'vaccine',status:'critical',pct:20,note:'URGENT per Jun 29 Mon DM — ~15 doses/wk, 14 days since Jun 15 order (Jun 22 unconfirmed) — Zoetis',avg:51,order:55,cost:263,priority:'ORDER NOW',feb:76,mar:46},
  {name:'Solensia',code:'SOL01',cat:'pain',status:'ok',pct:65,note:'12 vials in stock',avg:2,order:3,cost:180,priority:'ROUTINE',feb:0,mar:0},
  {name:'LymeVax',code:'VAC011',cat:'vaccine',status:'ok',pct:60,note:'Seasonal tick vaccine',avg:13,order:16,cost:194,priority:'ROUTINE',feb:12,mar:18},
  {name:'Claro Otic Solution',code:'CLARO1',cat:'other',status:'critical',pct:15,note:'URGENT per Jun 3 DM — Moissa need-list 6/1, 3 uses in last 2 TJs',avg:4,order:6,cost:195,priority:'ORDER NOW',feb:3,mar:5},
  {name:'Adequan Canine 5mL',code:'ADQ005',cat:'pain',status:'ok',pct:62,note:'Can now order just 1 unit',avg:3,order:3,cost:165,priority:'ROUTINE',feb:2,mar:3},
  {name:'Metacam 1.5mg/mL Oral',code:'MET015',cat:'pain',status:'ok',pct:70,note:'Usually plenty — glance and confirm',avg:4,order:5,cost:120,priority:'ROUTINE',feb:3,mar:4},
  {name:'Canine RC Urinary SO 6.6#',code:'426066',cat:'diet',status:'ok',pct:60,note:'Rx diet',avg:5,order:6,cost:124,priority:'ROUTINE',feb:4,mar:6},
  {name:'Vetsulin U-40 Insulin',code:'INS040',cat:'other',status:'ok',pct:68,note:'Only order what you need',avg:2,order:2,cost:98,priority:'ROUTINE',feb:1,mar:2},
  {name:'Zenrelia',code:'ZEN01',cat:'other',status:'ok',pct:65,note:'Ordered May 6',avg:2,order:3,cost:75,priority:'ROUTINE',feb:0,mar:0},
  // --- NEW from Jun 1 #need-list ---
  {name:'Bonqat',code:'BONQ01',cat:'other',status:'low',pct:35,note:'Need-list Jun 1 — Moissa (checkmark)',avg:1,order:2,cost:30,priority:'THIS WEEK',feb:0,mar:0},
  {name:'Librela 66-88#',code:'LIB66',cat:'pain',status:'low',pct:35,note:'Need-list Jun 1 — Moissa (checkmark)',avg:2,order:3,cost:165,priority:'THIS WEEK',feb:0,mar:0},
  {name:'Bexacat 90',code:'BEXC90',cat:'other',status:'low',pct:35,note:'Need-list Jun 1 — Moissa (checkmark)',avg:1,order:2,cost:120,priority:'THIS WEEK',feb:0,mar:0},
  // --- NEW from Jun 2 #need-list ---
  {name:'Isoflurane',code:'ISO01',cat:'anesthetic',status:'critical',pct:15,note:'Need-list Jun 2 — Allison',avg:2,order:3,cost:95,priority:'ORDER NOW',feb:0,mar:0},
  {name:'Cephalexin 500mg',code:'CEPH50',cat:'antibiotic',status:'critical',pct:15,note:'Need-list Jun 1 — Staff Computer',avg:2,order:3,cost:25,priority:'ORDER NOW',feb:0,mar:0},
  // --- NEW from Jun 2-3 #need-list ---
  {name:'Apoquel 16mg Chewable',code:'APOQ16',cat:'other',status:'critical',pct:15,note:'URGENT per Jun 3 DM — Triage Nurse 6/2',avg:2,order:3,cost:120,priority:'ORDER NOW',feb:0,mar:0},
  {name:'Prednisone 5mg',code:'PRED05',cat:'other',status:'low',pct:35,note:'Need-list Jun 2 — Triage Nurse',avg:2,order:3,cost:15,priority:'THIS WEEK',feb:0,mar:0},
  {name:'Vetmedin 1.25mg Chewable',code:'VETM12',cat:'other',status:'low',pct:35,note:'Need-list Jun 2 — Triage Nurse',avg:1,order:2,cost:75,priority:'THIS WEEK',feb:0,mar:0},
  // --- NEW from Jun 3-4 #need-list ---
  {name:'Felimazole 2.5mg',code:'FELI25',cat:'other',status:'critical',pct:15,note:'Need-list Jun 3 — Triage Nurse, unconfirmed',avg:1,order:2,cost:40,priority:'ORDER NOW',feb:0,mar:0},
  {name:'Cautery Tips',code:'CAUT01',cat:'other',status:'low',pct:40,note:'Need-list Jun 4 — Kathryn',avg:1,order:2,cost:35,priority:'THIS WEEK',feb:0,mar:0},
  // --- NEW from Jun 10 #need-list ---
  {name:'Prophy Paste',code:'PROPH1',cat:'other',status:'low',pct:40,note:'Need-list Jun 10 — Allison (checkmarked)',avg:1,order:2,cost:25,priority:'THIS WEEK',feb:0,mar:0},
  {name:'Disposable Drapes',code:'DRAPE1',cat:'other',status:'low',pct:40,note:'Need-list Jun 10 — Allison (checkmarked)',avg:1,order:2,cost:45,priority:'THIS WEEK',feb:0,mar:0},
  // --- NEW from Jun 15 #need-list (Moissa, all checkmarked — confirm ordered on Vetcove) ---
  {name:'Methimazole 5mg',code:'METH05',cat:'other',status:'critical',pct:15,note:'Need-list Jun 15 — Moissa (checkmarked)',avg:1,order:2,cost:30,priority:'ORDER NOW',feb:0,mar:0},
  {name:'Bexacat 30',code:'BEXC30',cat:'other',status:'low',pct:35,note:'Need-list Jun 15 — Moissa (checkmarked)',avg:1,order:2,cost:120,priority:'THIS WEEK',feb:0,mar:0},
  {name:'Seresto Small Dog',code:'SERS01',cat:'flea-tick',status:'low',pct:35,note:'Need-list Jun 15 — Moissa (checkmarked)',avg:2,order:3,cost:308,priority:'THIS WEEK',feb:0,mar:0},
  {name:'Sileo',code:'SILEO1',cat:'other',status:'low',pct:35,note:'Need-list Jun 15 — Moissa (checkmarked)',avg:1,order:2,cost:120,priority:'THIS WEEK',feb:0,mar:0},
  {name:'Feline Combo Vax',code:'FELCMB',cat:'vaccine',status:'low',pct:35,note:'Need-list Jun 15 — Moissa (checkmarked)',avg:3,order:5,cost:180,priority:'THIS WEEK',feb:0,mar:0},
  {name:'Flexprofen 75mg',code:'FLEX75',cat:'other',status:'critical',pct:15,note:'Need-list Jun 12 (Triage Nurse) + flagged Jun 15 — still open',avg:2,order:3,cost:50,priority:'ORDER NOW',feb:0,mar:0},
];

// ---- WALK_CHECKS ----
const WALK_CHECKS = [
  {id:'walk-1',label:'Main medication cabinet — one open / one backup rule',icon:'💊'},
  {id:'walk-2',label:'4 exam room fridges — vaccine levels (≤5 = needs backup)',icon:'🧊'},
  {id:'walk-3',label:'Surgery fridge/storage — ProHeart, emergency meds, Convenia',icon:'🏥'},
  {id:'walk-4',label:'Flea/tick display — count sleeves, check expiration',icon:'🐾'},
  {id:'walk-5',label:'Controlled substances safe (separate process)',icon:'🔒'},
  {id:'walk-6',label:'Front desk supply area — client-purchase items',icon:'🛒'},
];

// ---- VENDORS ----
const VENDORS = [
  {name:'Chris (KRISS)',co:'Covetrus',handles:'Main distributor, emergency orders',deal:null},
  {name:'Sarah',co:'Zoetis',handles:'Zoetis products, emergency next-day',deal:'Staff samples in summer'},
  {name:'Amanda',co:'Alanco',handles:'Claro/Cléo',deal:'Buy 3 get 1 free (quarterly)'},
  {name:'Brian',co:'IDEXX',handles:'Lab, diagnostics',deal:null},
  {name:'Kristin',co:'Royal Canin',handles:'Rx/therapeutic diets',deal:null},
  {name:'Stephanie',co:'Purina Pro Plan',handles:'Purina Rx diets',deal:null},
  {name:'Danielle',co:'MWI',handles:'Secondary distributor',deal:'Alt to Covetrus'},
];

// ---- STAFF_DATA ----
const STAFF_DATA = [
  { id:'jodi',    name:'Jodi Dunn',      role:'Vet Assistant', color:'#2563EB', cert:null,
    scores:[
      {date:'Jan 21',score:71,patient:'(Lindsey eval)'},{date:'Jan 21',score:49,patient:'(Lindsey eval)'},
      {date:'Jan 22',score:82,patient:'(Lindsey eval)'},{date:'Jan 22',score:74,patient:'(Lindsey eval)'},
      {date:'Jan 22',score:80,patient:'(Lindsey eval)'},
      {date:'Mar 26',score:78,patient:'Olive Schwettman',cats:[16,15,16,16,15]},
      {date:'Mar 30',score:79,patient:'Max Leyba',cats:[17,16,15,16,15]},
      {date:'Apr 3', score:72,patient:'Ralli Casstevens',cats:[16,17,13,14,12]},
      {date:'Apr 3', score:76,patient:'Rocky Kessler',cats:[16,15,14,16,15]},
      {date:'Apr 7', score:79,patient:'Emmie Dunn',cats:[17,16,15,16,15]},
      {date:'Apr 7', score:74,patient:'Kitty Seek',cats:[16,15,14,14,15]},
      {date:'Apr 8', score:79,patient:'Pickle Cook',cats:[17,16,15,16,15]},
      {date:'Apr 9', score:79,patient:'Pickle Cook',cats:[17,16,15,16,15]},
      {date:'Apr 13',score:80,patient:'Sonic Mattingly',cats:[17,16,15,16,16]},
      {date:'Apr 13',score:73,patient:'Sammie Winkler',cats:[16,14,15,14,14]},
      {date:'Apr 16',score:76,patient:'Chevy Hartman',cats:[16,15,16,14,15]},
      {date:'Apr 20',score:77,patient:'Kiki Layton',cats:[16,17,15,15,14]},
      {date:'Apr 20',score:76,patient:'Grace Zavalydrga',cats:[16,15,16,15,14]},
      {date:'Apr 20',score:76,patient:'Margo Humes',cats:[16,15,16,14,15]},
      {date:'Apr 21',score:74,patient:'Jazzy Stevens',cats:[16,15,14,15,14]},
      {date:'Apr 23',score:79,patient:'Kirby Swinford',cats:[17,16,15,16,15]},
      {date:'Apr 30',score:79,patient:'Romeo Lade',cats:[16,17,15,16,15]},
      {date:'May 1', score:79,patient:'Luna DeWitt',cats:[17,16,15,16,15]},
      {date:'May 1', score:84,patient:'Bandit Bull',cats:[17,18,16,17,16]},
      {date:'May 1', score:77,patient:'Auggie Odom',cats:[16,17,15,15,14]},
      {date:'May 4', score:79,patient:'Cali Underwood',cats:[16,17,16,15,15]},
      {date:'May 4', score:77,patient:'Beni SeaCat',cats:[16,15,16,15,15]},
      {date:'May 4', score:76,patient:'Poppy Carpenter',cats:[16,17,15,14,14]},
      {date:'May 4', score:79,patient:'Mocha Maseuli',cats:[16,17,15,16,15]},
      {date:'May 5', score:76,patient:'Shirley White',cats:[16,14,16,15,15]},
      {date:'May 5', score:72,patient:'Winston Bryan',cats:[16,14,15,14,13]},
      {date:'May 6', score:76,patient:'Honeybee McCallister',cats:[17,16,14,15,14]},
      {date:'May 7', score:64,patient:'Egg Wilson',cats:[14,17,12,10,11]},
      {date:'May 8', score:83,patient:'Nutmeg Burnettbutzow',cats:[17,18,16,17,15]},
      {date:'May 8', score:84,patient:'Maggie Dutton',cats:[17,18,16,17,16]},
      {date:'May 14',score:83,patient:'Callie Shanks',cats:[17,19,15,16,16]},
      {date:'May 21',score:78,patient:'Sophie Walters',cats:[16,15,16,16,15]},
      {date:'May 22',score:80,patient:'Bear Morris',cats:[17,16,15,16,16]},
      {date:'May 22',score:75,patient:'Abby Skinner',cats:[17,16,13,15,14]},
      {date:'May 27',score:80,patient:'Stormy Piekarz',cats:[17,16,15,17,15]},
      {date:'May 27',score:78,patient:'Blaze Johnson',cats:[16,18,15,15,14]},
      {date:'May 28',score:80,patient:'Tucker Patrick',cats:[16,17,15,16,16]},
      {date:'May 28',score:83,patient:'Onyx Sauerwein',cats:[17,18,16,17,15]},
      {date:'May 29',score:70,patient:'Onyx Sauerwein',cats:[16,15,12,14,13]},
      {date:'Jun 3', score:79,patient:'Mr Spock Billey',cats:[17,16,15,16,15]},
      {date:'Jun 4', score:73,patient:'Abbey Scott',cats:[16,15,14,15,13]},
      {date:'Jun 4', score:73,patient:'Molly Cervantes',cats:[16,15,14,15,13]},
      {date:'Jun 15',score:74,patient:'Trixie Sadler',cats:[16,14,15,15,14]},
      {date:'Jun 15',score:79,patient:'Dexter Balangee',cats:[17,16,16,15,15]},
      {date:'Jun 15',score:77,patient:'Daisy Cole',cats:[16,18,14,15,14]},
      {date:'Jun 15',score:79,patient:'Teddy McKinney',cats:[17,16,15,16,15]},
      {date:'Jun 15',score:78,patient:'Sophie Cooley',cats:[17,16,15,16,14]},
      {date:'Jun 18',score:76,patient:'Oppy',cats:[16,17,14,15,14]},
      {date:'Jun 19',score:79,patient:'Calvin Mitchener',cats:[16,17,15,16,15]},
      {date:'Jun 19',score:81,patient:'Gracie Webb',cats:[17,18,15,16,15]},
      {date:'Jun 22',score:79,patient:'Arlin Persinger',cats:[16,17,15,16,15]},
      {date:'Jun 22',score:69,patient:'Cassie Welkom',cats:[14,15,13,14,13]},
      {date:'Jun 22',score:76,patient:'Brindle Neumann',cats:[16,17,15,14,14]},
      {date:'Jun 22',score:77,patient:'Pepper Fenwick',cats:[16,17,15,14,15]},
      {date:'Jun 22',score:79,patient:'Scrappy Neal',cats:[17,18,14,16,14]},
      {date:'Jun 23',score:75,patient:'Nika and Frank Persinger',cats:[16,16,14,15,14]},
      {date:'Jun 23',score:80,patient:'Teddy Kelley',cats:[18,16,15,17,14]},
      {date:'Jun 24',score:68,patient:'Rory Charlton',cats:[15,14,13,14,12]},
      {date:'Jun 25',score:74,patient:'Zeus Thorneburg',cats:[15,16,14,15,14]},
      {date:'Jun 25',score:79,patient:'Nala Torres',cats:[17,16,15,16,15]},
      {date:'Jun 29',score:77,patient:'Bluey Tescher',cats:[17,16,15,14,15]},
    ]
  },
  // Maddie Joseph removed — left clinic April 2026
  { id:'kristi',  name:'Kristi',         role:'Vet Assistant', color:'#D97706', cert:null,
    scores:[
      {date:'Jan 21',score:71,patient:'(Lindsey eval)'},{date:'Jan 21',score:68,patient:'(Lindsey eval)'},
      {date:'Jan 22',score:72,patient:'(Lindsey eval)'},{date:'Jan 22',score:65,patient:'(Lindsey eval)'},
      {date:'Mar 25',score:68,patient:'Lady Sparks',cats:[16,14,12,13,13]},
      {date:'Mar 26',score:59,patient:'Calliope Fosnot',cats:[14,15,10,9,11]},
      {date:'May 18',score:76,patient:'Chanel Duran',cats:[16,17,14,15,14]},
      {date:'May 18',score:82,patient:'Squirt Willis',cats:[17,18,16,16,15]},
      {date:'May 18',score:66,patient:'Emily Grotzinger',cats:[15,16,10,14,11]},
      {date:'May 18',score:75,patient:'Nikita Michener',cats:[16,17,13,15,14]},
      {date:'May 19',score:70,patient:'Ralli Casstevens',cats:[15,16,14,12,13]},
      {date:'May 20',score:76,patient:'Jack Smith',cats:[16,17,14,15,14]},
      {date:'May 20',score:76,patient:'Reggie Patton',cats:[16,18,14,15,13]},
      {date:'May 20',score:75,patient:'Baby Hodge',cats:[17,15,14,16,13]},
      {date:'May 21',score:48,patient:'Tux Bourse',cats:[12,14,8,7,7]},
      {date:'May 27',score:67,patient:'Trix and Micky Richardson',cats:[15,13,12,14,13]},
      {date:'May 27',score:74,patient:'Max Leyba',cats:[16,15,14,15,14]},
      {date:'May 27',score:57,patient:'Obie and Rose Berry',cats:[12,14,11,10,10]},
      {date:'May 27',score:76,patient:'Luke and Roman',cats:[16,17,14,15,14]},
      {date:'May 28',score:74,patient:'Biscuit Sloan',cats:[16,15,14,15,14]},
      {date:'May 28',score:75,patient:'Jay Davis',cats:[16,17,13,15,14]},
      {date:'May 28',score:76,patient:'Murray Bennett',cats:[16,17,15,14,14]},
      {date:'May 29',score:74,patient:'Prissy Hedrick',cats:[16,15,14,15,14]},
      {date:'Jun 2', score:71,patient:'Kit+Zelda Gray',cats:[15,16,13,14,13]},
      {date:'Jun 2', score:40,patient:'Little bit Heller',cats:[10,16,4,6,4]},
      {date:'Jun 2', score:68,patient:'Maya (mock exam)',cats:[15,14,13,14,12]},
      {date:'Jun 3', score:73,patient:'Crimson King',cats:[16,17,13,14,13]},
      {date:'Jun 3', score:74,patient:'Ellie Bowman',cats:[16,16,14,15,13]},
      {date:'Jun 3', score:74,patient:'Biscuit Sloan',cats:[16,15,14,15,14]},
      {date:'Jun 3', score:74,patient:'Archie Allen',cats:[16,17,13,15,13]},
      {date:'Jun 4', score:72,patient:'Brindle Young',cats:[16,14,13,15,14]},
      {date:'Jun 4', score:59,patient:'Lilly+Luna Barry',cats:[12,14,11,12,10]},
      {date:'Jun 4', score:76,patient:'Kade Butcher',cats:[16,17,14,15,14]},
      {date:'Jun 5', score:75,patient:'Sam Neff',cats:[16,15,14,15,15]},
      {date:'Jun 5', score:75,patient:'Leia Shanks',cats:[16,17,15,14,13]},
      {date:'Jun 5', score:71,patient:'Doc Aynes',cats:[15,16,13,14,13]},
      {date:'Jun 16',score:75,patient:'Kiya Ghaffari',cats:[15,16,14,16,14]},
      {date:'Jun 16',score:50,patient:'Lando Villegas',cats:[13,14,6,9,8]},
      {date:'Jun 16',score:72,patient:'Peanut Vichkon',cats:[16,15,13,14,14]},
      {date:'Jun 22',score:78,patient:'Emma Watkins',cats:[17,18,14,15,14]},
      {date:'Jun 22',score:74,patient:'Dexter Townsend',cats:[15,16,14,15,14]},
      {date:'Jun 23',score:76,patient:'Violet Henry',cats:[16,14,15,16,15]},
      {date:'Jun 23',score:74,patient:'Matilda Haffey',cats:[16,15,14,15,14]},
      {date:'Jun 24',score:79,patient:'Perusal Lopez',cats:[17,19,14,15,14]},
    ]
  },
  { id:'allison', name:'Allison',        role:'Vet Assistant', color:'#7C3AED', cert:'Studying for cert',
    scores:[
      {date:'Jan 21',score:79,patient:'(Lindsey eval)'},{date:'Jan 21',score:72,patient:'(Lindsey eval)'},
      {date:'Jan 22',score:76,patient:'(Lindsey eval)'},{date:'Jan 22',score:73,patient:'(Lindsey eval)'},
      {date:'Jan 22',score:71,patient:'(Lindsey eval)'},{date:'Jan 22',score:73,patient:'(Lindsey eval)'},
      {date:'Jan 22',score:76,patient:'(Lindsey eval)'},{date:'Jan 22',score:74,patient:'(Lindsey eval)'},
      {date:'Mar 26',score:66,patient:'Gypsy Wire',cats:[14,16,11,13,12]},
      {date:'May 18',score:77,patient:'Diesel Mudd',cats:[16,15,16,15,15]},
      {date:'May 19',score:74,patient:'Mac Finn Busby',cats:[16,15,14,15,14]},
      {date:'May 20',score:84,patient:'Bolt Humane Society',cats:[17,20,16,16,15]},
      {date:'May 20',score:75,patient:'Anniman Dryden',cats:[16,17,14,15,13]},
      {date:'May 20',score:79,patient:'Nala McDole',cats:[17,16,15,16,15]},
      {date:'May 21',score:66,patient:'Romeo Dougie Woods',cats:[14,15,12,13,12]},
      {date:'May 21',score:82,patient:'Josie Johnson',cats:[17,18,15,16,16]},
      {date:'May 21',score:71,patient:'Baby Hodge',cats:[16,14,13,15,13]},
      {date:'May 21',score:80,patient:'Huey Madigan',cats:[17,18,14,16,15]},
      {date:'May 21',score:81,patient:'Harley Coggins',cats:[17,19,15,16,14]},
      {date:'May 22',score:86,patient:'Peyton Conrad',cats:[18,19,16,17,16]},
      {date:'May 22',score:81,patient:'Oreo Jaunett',cats:[17,16,15,17,16]},
      {date:'May 27',score:82,patient:'Brindle Young',cats:[17,18,16,16,15]},
      {date:'May 27',score:77,patient:'Pistol Heiney',cats:[16,17,15,14,15]},
      {date:'May 27',score:75,patient:'Reggie Patton',cats:[16,17,15,13,14]},
      {date:'May 27',score:74,patient:'Ralo Brooks',cats:[16,15,14,15,14]},
      {date:'May 28',score:81,patient:'Mollie Garrison',cats:[17,18,16,15,15]},
      {date:'May 28',score:81,patient:'Kiya Ghaffari',cats:[17,19,14,16,15]},
      {date:'May 29',score:84,patient:'Alfie Soetenga',cats:[17,19,16,16,16]},
      {date:'May 29',score:78,patient:'Junior Scott',cats:[17,16,15,16,14]},
      {date:'Jun 1', score:79,patient:'Molly+Bree Logsdon',cats:[17,16,15,16,15]},
      {date:'Jun 1', score:79,patient:'Smiley Landis',cats:[17,16,15,16,15]},
      {date:'Jun 3', score:80,patient:'Bob Brooks',cats:[17,18,15,16,14]},
      {date:'Jun 4', score:78,patient:'Gracie Walks',cats:[16,17,15,16,14]},
      {date:'Jun 5', score:82,patient:'Grace Zavalydriga',cats:[17,18,16,15,16]},
      {date:'Jun 5', score:76,patient:'Knox Hollowell',cats:[16,17,14,15,14]},
    ]
  },
  { id:'kelsey',  name:'Kelsey',         role:'RVT',           color:'#0891B2', cert:'RVT',
    scores:[
      {date:'Feb 4', score:76,patient:'Monster Landis',cats:[16,15,16,14,15]},
      {date:'Feb 4', score:78,patient:'Koda Chrome Skaggs',cats:[17,16,15,16,14]},
      {date:'May 15',score:77,patient:'Lucy Bee',cats:[16,17,15,15,14]},
      {date:'May 18',score:72,patient:'Buddy Larry Sam Duffy',cats:[16,15,14,13,14]},
      {date:'May 18',score:77,patient:'Akira Bova',cats:[16,17,14,16,14]},
      {date:'May 18',score:71,patient:'Alice Bond',cats:[16,17,13,12,13]},
      {date:'May 18',score:79,patient:'Stonewall Rushton',cats:[17,16,15,16,15]},
      {date:'May 19',score:64,patient:'Sylvester Madison',cats:[15,14,13,10,12]},
      {date:'May 19',score:77,patient:'Lydia Whitworth',cats:[17,16,14,15,15]},
      {date:'May 20',score:66,patient:'Jasper Legg',cats:[15,16,13,10,12]},
      {date:'May 21',score:74,patient:'Willow Reeves',cats:[16,15,14,15,14]},
      {date:'May 22',score:79,patient:'Woody White',cats:[17,16,15,16,15]},
      {date:'May 22',score:84,patient:'John Snow Tilford',cats:[18,19,15,16,16]},
      {date:'May 22',score:76,patient:'Timothy Street',cats:[16,16,15,15,14]},
      {date:'May 22',score:74,patient:'Max Copeland',cats:[16,15,14,15,14]},
      {date:'May 22',score:59,patient:'Zeke Brady',cats:[14,16,10,9,10]},
      {date:'May 26',score:73,patient:'Sammy Johnson',cats:[16,15,14,15,13]},
      {date:'May 26',score:65,patient:'Sylvester Madison',cats:[14,16,13,10,12]},
      {date:'May 26',score:71,patient:'Thor Jimenez',cats:[16,15,13,14,13]},
      {date:'May 27',score:73,patient:'Dash Stanley',cats:[16,17,13,14,13]},
      {date:'May 29',score:56,patient:'Mango+BC Rahali',cats:[12,18,11,6,9]},
      {date:'May 29',score:75,patient:'Pixie Sulzen',cats:[16,15,14,16,14]},
      {date:'Jun 1', score:79,patient:'Winston Egan',cats:[17,16,15,16,15]},
      {date:'Jun 1', score:74,patient:'Smokey Crisp',cats:[16,15,14,15,14]},
      {date:'Jun 2', score:85,patient:'Monroe Bailey',cats:[18,18,16,17,16]},
      {date:'Jun 2', score:78,patient:'Bailey Bowman',cats:[17,18,14,15,14]},
      {date:'Jun 2', score:78,patient:'GG Lawson',cats:[16,18,14,15,15]},
      {date:'Jun 3', score:72,patient:'Pearl Kellem',cats:[15,16,14,13,14]},
      {date:'Jun 3', score:69,patient:'Zoos Starnes',cats:[16,17,14,10,12]},
      {date:'Jun 3', score:80,patient:'Teddy+Chewy Trick',cats:[17,18,14,15,16]},
      {date:'Jun 15',score:77,patient:'Esther Hamman',cats:[16,17,14,15,15]},
      {date:'Jun 15',score:73,patient:'GG Young',cats:[15,16,14,14,14]},
      {date:'Jun 15',score:76,patient:'Domino Fenwick',cats:[16,17,14,15,14]},
      {date:'Jun 15',score:71,patient:'Raven Fitzpatrick',cats:[16,15,13,14,13]},
      {date:'Jun 15',score:68,patient:'Mr Darcy Woodring',cats:[15,14,12,14,13]},
      {date:'Jun 15',score:74,patient:'Chicory Alexander',cats:[16,14,15,15,14]},
      {date:'Jun 18',score:83,patient:'Stella Ellis',cats:[18,17,15,17,16]},
      {date:'Jun 19',score:74,patient:'Willow Reeves',cats:[16,14,15,15,14]},
      {date:'Jun 22',score:69,patient:'Roz Ellen Urbanski',cats:[14,15,13,14,13]},
      {date:'Jun 22',score:63,patient:'Raider Hagan',cats:[14,16,12,10,11]},
      {date:'Jun 22',score:77,patient:'Bruno Calhoun',cats:[16,17,15,14,15]},
      {date:'Jun 23',score:76,patient:'Rose Nunemaker',cats:[17,15,14,16,14]},
      {date:'Jun 23',score:79,patient:'Silver Martinez',cats:[17,19,14,15,14]},
      {date:'Jun 26',score:76,patient:'Moose Knerr',cats:[16,17,14,15,14]},
      {date:'Jun 29',score:72,patient:'Rudy the 4th Scott',cats:[16,15,14,13,14]},
    ]
  },
  { id:'moissa',  name:'Moissa',         role:'Vet Assistant', color:'#DB2777', cert:null,
    scores:[
      {date:'Feb 4', score:74,patient:'Charlie Thompson',cats:[16,17,14,14,13]},
      {date:'May 20',score:79,patient:'Lil Mama McGill',cats:[17,18,14,16,14]},
      {date:'May 20',score:79,patient:'Indy Webner',cats:[17,16,15,16,15]},
      {date:'Jun 18',score:81,patient:'Claudia Hampton',cats:[17,18,15,16,15]},
      {date:'Jun 23',score:73,patient:'Harlee Eldrige',cats:[13,17,15,14,14]},
    ]
  },
  { id:'breanna', name:'Breanna',        role:'HS Extern',     color:'#9CA3AF', cert:null,
    scores:[
      {date:'Nov 4', score:70,patient:'Rocky Zirkle',cats:[15,16,13,14,12]},
      {date:'Nov 4', score:80,patient:'Gail George',cats:[16,17,16,16,15]},
      {date:'Nov 5', score:78,patient:'Obi Cesar',cats:[16,16,15,16,15]},
      {date:'Nov 5', score:79,patient:'Homeless George',cats:[16,17,15,16,15]},
      {date:'Nov 12',score:70,patient:'Friendly Tweedy',cats:[15,16,13,14,12]},
      {date:'Nov 12',score:79,patient:'Parker Dowers',cats:[16,17,15,16,15]},
      {date:'Nov 13',score:80,patient:'Jojo Graham',cats:[17,17,15,16,15]},
      {date:'Nov 20',score:75,patient:'Jelly Stansberry',cats:[16,15,14,16,14]},
      {date:'Nov 20',score:77,patient:'Hermes Turner',cats:[16,17,15,15,14]},
      {date:'Nov 25',score:76,patient:'Vincent Stansberry',cats:[16,17,14,15,14]},
      {date:'Nov 25',score:72,patient:'Mazie Whitesel',cats:[15,16,14,13,14]},
      {date:'Nov 25',score:76,patient:'Bruno Beatty',cats:[16,17,14,15,14]},
      {date:'Dec 2', score:43,patient:'Merlot and Bordeaux Dzelme',cats:[10,14,6,7,6]},
      {date:'Dec 2', score:71,patient:'Barron Weaver',cats:[16,15,14,13,13]},
      {date:'Dec 4', score:67,patient:'Stella Briggs',cats:[14,15,13,13,12]},
      {date:'Dec 4', score:76,patient:'Ollie Bohmer',cats:[16,17,14,15,14]},
      {date:'Dec 5', score:78,patient:'Angel Ellis',cats:[17,16,14,16,15]},
      {date:'Dec 8', score:67,patient:'Newt Kenobi Staggs',cats:[12,13,14,15,13]},
      {date:'Dec 9', score:74,patient:'Vash-tai Jared',cats:[15,18,14,14,13]},
      {date:'Dec 9', score:71,patient:'Myka Chrich',cats:[15,17,13,14,12]},
      {date:'Dec 10',score:67,patient:'Molly Gibson',cats:[14,16,12,13,12]},
      {date:'Dec 10',score:76,patient:'Logan King',cats:[16,16,15,15,14]},
      {date:'Dec 11',score:73,patient:'Ghost Wolfe',cats:[16,17,13,15,12]},
      {date:'Dec 11',score:74,patient:'Cocoa Blockson',cats:[16,15,14,15,14]},
      {date:'Dec 15',score:70,patient:'Murphy Baxter',cats:[15,16,13,14,12]},
      {date:'Dec 22',score:79,patient:'Sunday Stewart',cats:[16,18,15,16,14]},
      {date:'Dec 22',score:75,patient:'John Snow Tilford',cats:[16,17,14,15,13]},
      {date:'Dec 23',score:66,patient:'Lori Paynter',cats:[15,14,12,13,12]},
      {date:'Jan 6', score:80,patient:'Mary Poole',cats:[17,18,14,16,15]},
      {date:'Jan 6', score:73,patient:'Hank Turner',cats:[16,15,13,15,14]},
      {date:'Jan 7', score:72,patient:'Lucy Littell',cats:[15,16,14,13,14]},
      {date:'Jan 8', score:49,patient:'Miss Kitty Lavelle',cats:[12,13,6,10,8]},
      {date:'Jan 9', score:76,patient:'Noodle and Navi Neff',cats:[16,17,14,15,14]},
      {date:'Jan 13',score:76,patient:'Dexter Townsend',cats:[16,17,14,15,14]},
      {date:'Jan 15',score:70,patient:'Lucky Butterfield',cats:[15,14,14,13,14]},
      {date:'Jan 16',score:81,patient:'Willow Jones',cats:[17,18,15,16,15]},
      {date:'Jan 21',score:75,patient:'Izzy Hampton',cats:[16,15,14,16,14]},
      {date:'Jan 22',score:82,patient:'Titus Mudd',cats:[17,18,16,16,15]},
      {date:'Jan 23',score:76,patient:'Lucifer Caulk',cats:[16,17,14,15,14]},
      {date:'Jan 28',score:75,patient:'Buster Belangee',cats:[16,17,14,15,13]},
      {date:'Jan 30',score:72,patient:'Huckleberry Feasel',cats:[16,15,14,14,13]},
      {date:'Feb 2', score:74,patient:'Petey Beck',cats:[16,14,15,15,14]},
      {date:'Feb 3', score:80,patient:'Maverick Candler',cats:[17,18,15,16,14]},
    ]
  },
  { id:'kathryn', name:'Kathryn',        role:'PRN',           color:'#6B7280', cert:null, scores:[] },
];

// ---- BDAY_KNOWN ----
const BDAY_KNOWN = {
  debbie:  {bday:'12/20', wkiv:'04/09'},
  allison: {bday:'02/09', wkiv:'03/20'},
};

// ---- LOG_STAFF ----
const LOG_STAFF = [
  {id:'jodi',    name:'Jodi Dunn',     role:'Vet Assistant'},
  {id:'kristi',  name:'Kristi',        role:'Vet Assistant'},
  {id:'allison', name:'Allison',       role:'Vet Assistant · Studying for cert'},
  {id:'kelsey',  name:'Kelsey',        role:'RVT'},
  {id:'moissa',  name:'Moissa',        role:'Vet Assistant'},
  {id:'debbie',  name:'Debbie Wagner', role:'Receptionist'},
  {id:'breanna', name:'Breanna',       role:'HS Extern'},
,
  {id:'kathryn', name:'Kathryn',   role:'Vet Assistant'}  // added 2026-07-02 per Katie's roster
];

// ---- STANDING ----
const STANDING = [
  { id:'debbie',  name:'Debbie Wagner', role:'Receptionist',
    days:['7-5','7-1','7-5','7-2','8-1','off'],
    tasks:['','','','','','off'], lunch:['1-2','','1-2','','',''] },
  { id:'kristi',  name:'Kristi',        role:'Vet Assistant',
    days:['7-4','7-4','7-4','7-4','8-1','off'],
    tasks:['','','','','','off'], lunch:['12-1','12-1','12-1','12-1','',''] },
  { id:'kelsey',  name:'Kelsey',        role:'RVT',
    days:['7-5','7-5','7-1','7-1','7-5','off'],
    tasks:['am','pm','','','pm','off'], lunch:['1-2','1-2','','','1-2',''] },
  { id:'jodi',    name:'Jodi Dunn',     role:'Vet Assistant',
    days:['8-4','8-4','8-1','8-4','8-1','off'],
    tasks:['','','','','','off'], lunch:['12-1','12-1','','12-1','',''] },
  // Maddie Joseph removed — left clinic April 2026
  { id:'moissa',  name:'Moissa',        role:'Vet Assistant',
    days:['7-1','7-1','7-5','7-1','7-1','off'],
    tasks:['mid','mid','mid','mid','mid','off'], lunch:['','','1-2','','',''] },
  { id:'allison', name:'Allison',       role:'Vet Assistant',
    days:['7-5','7-5','off','7-5','8-5','off'],
    tasks:['pm','pm','off','pm','pm','off'], lunch:['1-2','1-2','','1-2','1-2',''] },
  { id:'breanna', name:'Breanna',       role:'HS Extern',
    days:['off','7-11','off','7-11','7-11','off'],
    tasks:['off','am','off','am','am','off'], lunch:['','','','','',''] },
];

// ---- WW_VISITS ----
const WW_VISITS=[
  // Covers Jul 1 + Jun 29, 26, 25, 2026. Invoices pending — Avimark always-current file not reachable this run (Desktop not connected), so invoice fields null. Jul 1: only Craig profile complete at run time (9:33a); 6 other Jul 1 exams still generating in #client-analysis. (Jun 30 evening WW entries were lost when Part Z rolled back a corrupt master.)
  // --- Jul 1 (from #client-analysis Q profiles) ---
  {date:'Jul 1',time:'8:58a', patient:'Cindy',  client:'Craig',    profile:'Easy-Going / Low Friction (8/10)', compliance:'high', trust:'high', price:'low', staff:'allison', staffConfirmed:true, invoice:null, note:'Accepted recommendations without resistance, asked practical questions; friction is logistical not financial. Give concise verbal instructions + written aftercare and a clear if/then plan. Staff in room: Claire + Allison.'},
  // --- Jun 29 (from #client-analysis Q profiles) ---
  {date:'Jun 29',time:'8:38a', patient:'Gus',     client:'Gray',   profile:'Budget-Conscious (9/10)', compliance:'high', trust:'high', price:'high', staff:null, invoice:null, note:'High price sensitivity, spouse is shared decision authority. Explain reasoning, present estimate plainly, prioritize biggest-impact comfort items first, reinforce simple home care.'},
  {date:'Jun 29',time:'8:01a', patient:'Aussie',  client:'Morris', profile:'Budget-Conscious (8/10)', compliance:null, trust:'high', price:'high', staff:null, invoice:null, note:'Explicit budget concerns but accepting of estimates; high attachment and trust. Vet plus tech Chrissy in room (not on roster). Q reply truncated before compliance section.'},
  // --- Jun 26 (from #client-analysis Q profiles) ---
  {date:'Jun 26',time:'11:59a',patient:'Smokey',  client:'Wooten', profile:'Budget-Conscious (7/10)', compliance:'high', trust:'high', price:'neutral', staff:'allison', staffConfirmed:true, invoice:null, note:'Seizure case; set 325 budget and asked monthly Keppra cost but accepts clear plans fast. Allison in room. Give tight stepwise plan with reminders; risk is follow-through during stressful episodes.'},
  {date:'Jun 26',time:'11:51a',patient:'Cheyenne',client:'Berry',  profile:'Budget-Conscious (9/10)', compliance:'moderate', trust:'high', price:'high', staff:'allison', staffConfirmed:true, invoice:null, note:'Fixed income, paycheck-gated, declined 150 today; high trust in Dr. Smiley, does care one item at a time as budget allows. Allison in room. Stage care, confirm in-budget first.'},
  // --- Jun 25 (from #client-analysis Q profiles) ---
  {date:'Jun 25',time:'8:57a', patient:'Remi',    client:'Oezer',  profile:'Budget-Conscious (9/10)', compliance:'moderate', trust:'high', price:'high', staff:'jodi', staffConfirmed:true, invoice:null, note:'Decides on staying under a clear budget ceiling; accepts core care fast once total fits. Confirm not-to-exceed number first, present 2-tier plan. Gap = flea/tick uptake. Catherine + Jody in room'},
  {date:'Jun 25',time:'8:55a', patient:'Poncho',  client:'Cano',   profile:'Budget-Conscious / Crisis-Driven (9/10)', compliance:'moderate', trust:'moderate', price:'high', staff:null, invoice:null, note:'Budget-threshold decision (390 kind of pushing it); resistant to higher estimates. Lead with calm concrete numbers upfront and a prioritized must-do-today vs can-delay plan. Christy in room (not on roster)'},
  // Jul 2, 2026 — exams recorded despite the Avimark Independence Day (Obs?) all-day block, so the clinic is open. Bobby Payne (32100) profile cut off before scoring; Ace Panico (28101) still generating at run time. NOTE: a detailed 16-patient Jul 1 visit set was lost in the Jul 2 AM integrity rollback — rebuild from #client-analysis threads if needed.
  {date:'Jul 2',time:'8:01a', patient:'Hondo', client:'Rowley', profile:'Easy-Going / Low Friction (8/10)', compliance:'high', trust:'high', price:'neutral', staff:'kathryn', staffConfirmed:false, invoice:null, note:'Ear treatment plan accepted without resistance; fast decisions, strong follow-through on meds. Brief rationale + written aftercare. Transcript named Catherine — likely Kathryn.'},
  {date:'Jul 2',time:'8:45a', patient:'Draco', client:'Sellers', profile:'Easy-Going / Low Friction (8/10)', compliance:'high', trust:'high', price:'neutral', staff:null, invoice:null, note:'Accepted exam plan, focused questions, agreed to continue meds and bring fecal sample. Mild concern about mobility/progression — reinforce home-care monitoring in writing.'},
];


// ═══════════════════════════════════════════════════════════
// NEW SECTIONS (v2, 2026-07-02) — all maintained by scheduled refresh
// ═══════════════════════════════════════════════════════════

// ---- AUTOMATIONS: morning refresh updates lastRun with real timestamps; set status:'stale' if a run was missed ----
const AUTOMATIONS = [
 {
  "name": "☀️ Dashboard Morning Refresh",
  "schedule": "Weekdays at 7:50 AM",
  "desc": "Pulls latest Avimark TJ data, updates all revenue KPIs on this dashboard, scans for new staff eval scores, and refreshes the inventory predictor — all before Katie arrives.",
  "lastRun": null,
  "status": "active"
 },
 {
  "name": "📋 Daily To-Do List",
  "schedule": "Weekdays at 8:00 AM",
  "desc": "Scans #thoughts, #general, #lindsey-audits, #need-list, and Katie's DMs for action items. Compiles a prioritized list and sends it as a Slack DM before she sits down.",
  "lastRun": null,
  "status": "active"
 },
 {
  "name": "🎯 Dr. Smiley Priority Review",
  "schedule": "Weekdays at 6:30 AM",
  "desc": "Sends Dr. Smiley a Slack DM with Katie's current Asana task list each morning, asking him to reply with priority rankings so she knows what to focus on first.",
  "lastRun": null,
  "status": "active"
 },
 {
  "name": "📦 Need-List Stale Tracker",
  "schedule": "Weekdays at 7:30 AM",
  "desc": "Checks #need-list for items sitting unfulfilled more than 2 days. Flags them in the morning Slack DM so nothing falls through the cracks.",
  "lastRun": null,
  "status": "active"
 },
 {
  "name": "📅 Next-Day Appointments",
  "schedule": "Weekdays at 4:00 PM",
  "desc": "Scans tomorrow's appointment calendar and identifies medications that need to be pulled and ready. Sends a prep checklist to Slack DMs every afternoon.",
  "lastRun": null,
  "status": "active"
 },
 {
  "name": "💰 Daily Revenue Update",
  "schedule": "Weekdays at 5:00 PM",
  "desc": "Pulls end-of-day revenue data from #avimark, updates MTD and YTD totals, and feeds the Operations dashboard KPIs so numbers are always current.",
  "lastRun": null,
  "status": "active"
 },
 {
  "name": "🧠 Dr. Smiley Thoughts Summary",
  "schedule": "Weekdays at 5:00 PM",
  "desc": "Summarizes all of Dr. Smiley's posts from #thoughts throughout the day into a clean bullet-point digest. Sent to Katie's Slack DMs — nothing gets missed.",
  "lastRun": null,
  "status": "active"
 },
 {
  "name": "🎙️ Voice Memo Processor",
  "schedule": "Continuously — every 9 min",
  "desc": "Watches #thoughts for Dr. Smiley's voice memos 24/7. When detected, instantly generates a text transcript and summary, posted back to the thread automatically.",
  "lastRun": null,
  "status": "active"
 },
 {
  "name": "📊 Weekly Revenue Report",
  "schedule": "Mondays at 9:00 AM",
  "desc": "Runs the full Monday revenue workflow — pulls Avimark Period Totals, calculates YoY %, checks Vetcove Home Delivery, sends Dr. Smiley's Slack report, updates the Anderson 2026 VetCor Tracker.",
  "lastRun": null,
  "status": "active"
 },
 {
  "name": "📆 Weekly Calendar Scan",
  "schedule": "Mondays at 7:00 AM",
  "desc": "Reads the Avimark appointment calendar for the week ahead. Predicts which medications will be needed and flags ordering recommendations before the Monday Vetcove order.",
  "lastRun": null,
  "status": "active"
 },
 {
  "name": "🛒 Monday Vetcove Order",
  "schedule": "Mondays at 7:50 AM",
  "desc": "Checks VetCorOne schedule, reads Avimark TJ usage data, identifies low-stock items, builds the Vetcove cart, and DMs Katie the full order summary before noon deadline.",
  "lastRun": null,
  "status": "active"
 },
 {
  "name": "🛒 Wednesday Ordering Reminder",
  "schedule": "Wednesdays at 8:00 AM",
  "desc": "Mid-week restock check. Reviews fast-moving inventory items and flags anything that may run out before next Monday's order. Sends Slack DM with suggested items.",
  "lastRun": null,
  "status": "active"
 },
 {
  "name": "📅 Staff Schedule Builder",
  "schedule": "Thursdays at 9:00 AM",
  "desc": "Reads time-off requests from Slack DMs, checks Dayforce for approved blocks, applies standing schedule rules, and generates a draft Excel schedule for Katie's review before Friday posting.",
  "lastRun": null,
  "status": "active"
 },
 {
  "name": "💳 Payroll Auto-Approve",
  "schedule": "Thursdays at 8:00 AM",
  "desc": "On payroll Thursdays, logs into Dayforce, reviews staff timecards for errors, flags any Red X issues for Katie to resolve, and approves clean timecards before the payroll deadline.",
  "lastRun": null,
  "status": "active"
 },
 {
  "name": "🔍 Inventory Count Reminder",
  "schedule": "Last Wednesday of each month",
  "desc": "Reminds Katie to do the physical flea/tick/vaccine count on the last two Wednesdays of the month and submit results in Skyworld Operations → Inventory.",
  "lastRun": null,
  "status": "active"
 },
 {
  "name": "📋 Staff Eval Monthly Summary",
  "schedule": "1st of each month at 8:00 AM",
  "desc": "Pulls eval scores from each staff member's Slack channel, computes monthly averages and trends, and sends Katie a full team performance summary DM.",
  "lastRun": null,
  "status": "active"
 },
 {
  "name": "🗂️ Month-End Kickoff",
  "schedule": "22nd of each month at 8:00 AM",
  "desc": "Fires 3 days before reconciliation is due. Collects receipts from Slack, previews outstanding corporate card transactions, and sends Katie a head-start checklist.",
  "lastRun": null,
  "status": "active"
 },
 {
  "name": "🗂️ Monthly Recon Prep",
  "schedule": "23rd of each month at 9:00 AM",
  "desc": "Final push reminder: corporate card reconciliation due Apr 25. Compiles a summary of unmatched Scratch eChecks and unreconciled transactions still needing attention in Skyworld.",
  "lastRun": null,
  "status": "active"
 },
 {
  "name": "📁 End-of-Month Close",
  "schedule": "1st of each month at 9:00 AM",
  "desc": "Runs the full Skyworld close checklist: Daily Totals, Scratch Payments fix buttons, Invoices to A/P, Facility Inspections, Corporate Cards, OSHA Compliance. Full status report sent via Slack DM.",
  "lastRun": null,
  "status": "active"
 }
];

// ---- KPI_DATA: Practice Measures numbers. Morning refresh fills from Avimark Period Totals.
// revenue growth is business-day adjusted in the dashboard: (rev/bizDays) vs (py_rev/py_bizDays) ----
const KPI_DATA = {
 asOf: null,           // e.g. "Jul 1, 2026"
 mtd: { revenue:null, py_revenue:null, invoices:null, py_invoices:null,
        avgInvoice:null, py_avgInvoice:null, newClients:null, py_newClients:null,
        bizDays:null, py_bizDays:null },
 qtd: { revenue:null, py_revenue:null, bizDays:null, py_bizDays:null },  // Team Rewards
 ccPct: null           // controllable costs % of revenue, from Skyworld
};

// ---- INSIGHTS / ACTIONS: written fresh by the morning refresh. tone: green|blue|amber ; pri: high|med|low ----
const INSIGHTS = [
 {icon:'🔄', tone:'blue', title:'Insights refresh each morning', body:'The 7:50 AM refresh writes current-period insights here. Stale April/June text was retired in the v2 rebuild (Jul 2, 2026).'}
];
const ACTIONS = [
 {pri:'high', text:'Run INSPECT query (indiana.pmpaware.net) before dispensing any controlled substance today — required by Indiana law.'}
];

// ---- PTO_DATA: filled by the weekly Monday Dayforce pull ----
const PTO_DATA = {
 lastUpdated: null,   // e.g. "Mon Jul 6, 7:15 AM"
 employees: []        // {name:'Kelsey', vacation:-24.2, sick:12.0}
};

// ---- ATTENDANCE_EVENTS: baked-in mirror; live source of truth is data/attendance.json via the local API ----
const ATTENDANCE_EVENTS = [];

// ---- COMPLIANCE_STATE: SOP deadline tracking. Refresh/Claude update as items are completed ----
const COMPLIANCE_STATE = {
 inventoryCountLast: null,          // ISO date of last month-end vaccine/flea-tick-HW count in Skyworld
 dailyTotalsEnteredThrough: null,   // ISO date Daily Totals are entered through in Skyworld
 facilityInspectionLast: '2025-03-11',  // chronic issue — last walk-through on record
 corpCardsUnreconciled: null,       // count of unreconciled transactions
 corpCardsAmount: null,             // dollar amount, optional
 lastBankDeposit: null              // ISO date
};

// ---- DVC_LIVE_DATA_START — updated automatically by dashboard-daily-refresh — do not edit manually ----
window.DVC_LIVE = {
  lastUpdated:        "Jul 02, 2026 9:40 AM",
  lastTjDate:         "2026-07-02",
  mtdRevenue:         2563.57,
  ytdRevenue:         805763.09,
  avgInvoice:         75.4,
  patientVisits:      34,
  controllableCosts:  64.2,
  mtdRevenuePct:      -21.6,
  ytdRevenuePct:      -15.6,
  avgInvoicePct:      12.8,
  patientVisitsPct:   -27.7,
  comparePeriod:      "Jul 2025 to date",
  weeklyRevenue:      null,
  weeklyRevenuePct:   null,
  weeklyNewClients:   1,
  weeklyPeriodTotal:  0,
  budgetTarget:       95000,
  projectedMonthEnd:  29481.06,
  dailyRunRate:       1281.79,
  pacingStatus:       "Source: live AVImark handoff (claude/avimark/AVIMARK_LIVE_DATA_FOR_CLAUDE.md, generated 2026-07-02 8:42 AM, reads ACCOUNT.V2$). The Desktop ALWAYS_CURRENT file was not reachable this run, so the equivalent reachable dump was used. July is 2 of 23 business days in - MTD $2,564 vs $8,261 target-to-date; early-month projection not yet meaningful. Down ~21.6% vs Jul 2025 to date.",
  businessDaysElapsed: 2,
  businessDaysTotal:   23,
  noShowRate:         5.0,
  cancelRate:         10.0,
  arTotal:            108.15,
  arOver90:           -40.59,
  lowStockItems:      31,
  prevMonthRevenue:   105862.42
};
// ---- DVC_LIVE_DATA_END ----


// ---- NEED_LIST_DATA_START — updated by dashboard-daily-refresh from Slack #need-list ----
window.NEED_LIST_DATA = {
  lastUpdated: "Jul 2, 2026 9:40 AM",
  items: [
    {id:"nl-179",text:"(Photo — check Slack, has ❗ reaction)",author:"Kathryn",date:"Jul 2",channel:"#need-list",status:"open",priority:"high"},
    {id:"nl-178",text:"(Photo — check Slack)",author:"Kathryn",date:"Jul 2",channel:"#need-list",status:"open",priority:"medium"},
    {id:"nl-177",text:"Vetmedin chewable 1.25mg",author:"Triage Nurse",date:"Jul 1",channel:"#need-list",status:"open",priority:"high"},
    {id:"nl-176",text:"Bordatella",author:"Moissa",date:"Jul 1",channel:"#need-list",status:"ordered",priority:"high"},
    {id:"nl-175",text:"Dalpp",author:"Moissa",date:"Jul 1",channel:"#need-list",status:"ordered",priority:"high"},
    {id:"nl-174",text:"Librela 44-66",author:"Moissa",date:"Jul 1",channel:"#need-list",status:"ordered",priority:"high"},
    {id:"nl-173",text:"Trio 44-88",author:"Moissa",date:"Jul 1",channel:"#need-list",status:"ordered",priority:"high"},
    {id:"nl-172",text:"Simparica 88-132",author:"Moissa",date:"Jul 1",channel:"#need-list",status:"ordered",priority:"high"},
    {id:"nl-171",text:"Amoxi 500",author:"Moissa",date:"Jul 1",channel:"#need-list",status:"ordered",priority:"high"},
    {id:"nl-170",text:"Vetmedin 2.5",author:"Moissa",date:"Jul 1",channel:"#need-list",status:"ordered",priority:"high"},
    {id:"nl-169",text:"Flexprofen",author:"Moissa",date:"Jul 1",channel:"#need-list",status:"ordered",priority:"high"},
    {id:"nl-168",text:"Felimazole",author:"Moissa",date:"Jul 1",channel:"#need-list",status:"ordered",priority:"high"},
    {id:"nl-167",text:"Toilet paper",author:"Kathryn",date:"Jun 30",channel:"#need-list",status:"open",priority:"low"},
    {id:"nl-166",text:"Distilled water",author:"Kathryn",date:"Jun 30",channel:"#need-list",status:"open",priority:"medium"},
    {id:"nl-165",text:"(Photo — check Slack)",author:"Kathryn",date:"Jun 30",channel:"#need-list",status:"open",priority:"medium"},
    {id:"nl-164",text:"Ez scrub 205",author:"Moissa",date:"Jun 30",channel:"#need-list",status:"open",priority:"medium"},
    {id:"nl-163",text:"Ketamine (controlled)",author:"Kathryn",date:"Jun 30",channel:"#need-list",status:"open",priority:"high"},
    {id:"nl-162",text:"IV line",author:"Moissa",date:"Jun 30",channel:"#need-list",status:"open",priority:"medium"},
    {id:"nl-161",text:"Chem 17",author:"Jodi Dunn",date:"Jun 30",channel:"#need-list",status:"open",priority:"high"},
    {id:"nl-160",text:"Rabies",author:"Moissa",date:"Jun 29",channel:"#need-list",status:"open",priority:"high"},
    {id:"nl-159",text:"Proheart 12",author:"Moissa",date:"Jun 29",channel:"#need-list",status:"open",priority:"high"},
    {id:"nl-158",text:"Thunder Ease starter",author:"Moissa",date:"Jun 29",channel:"#need-list",status:"open",priority:"medium"},
    {id:"nl-157",text:"Entyce",author:"Moissa",date:"Jun 29",channel:"#need-list",status:"open",priority:"high"},
    {id:"nl-156",text:"Revolution Plus 5.6-11",author:"Moissa",date:"Jun 29",channel:"#need-list",status:"open",priority:"high"},
    {id:"nl-155",text:"Simparica 22-44",author:"Moissa",date:"Jun 29",channel:"#need-list",status:"open",priority:"high"},
    {id:"nl-154b",text:"Seresto large dog",author:"Moissa",date:"Jun 29",channel:"#need-list",status:"open",priority:"medium"},
    {id:"nl-154",text:"3ml syringe",author:"Moissa",date:"Jun 29",channel:"#need-list",status:"open",priority:"medium"},
    {id:"nl-153c",text:"20g needles",author:"Moissa",date:"Jun 29",channel:"#need-list",status:"open",priority:"medium"},
    {id:"nl-153b",text:"22g needles",author:"Moissa",date:"Jun 29",channel:"#need-list",status:"open",priority:"medium"},
    {id:"nl-153a",text:"Vetmedin 2.5mg",author:"Moissa",date:"Jun 29",channel:"#need-list",status:"open",priority:"high"},
    {id:"nl-153",text:"Zenrelia 8.5mg",author:"Moissa",date:"Jun 29",channel:"#need-list",status:"open",priority:"high"},
    {id:"nl-152",text:"2-inch 3-ring binders (x2)",author:"Dr. Smiley",date:"Jun 29",channel:"#need-list",status:"open",priority:"medium"},
    {id:"nl-151",text:"Librela 22-44",author:"Staff Computer",date:"Jun 27",channel:"#need-list",status:"open",priority:"high"},
    {id:"nl-150",text:"Librela 11-22",author:"Staff Computer",date:"Jun 27",channel:"#need-list",status:"open",priority:"high"},
    {id:"nl-149",text:"Fiona's meds",author:"Staff Computer",date:"Jun 27",channel:"#need-list",status:"open",priority:"high"},
    {id:"nl-148",text:"250 ml LRS fluid bags",author:"Allison",date:"Jun 26",channel:"#need-list",status:"open",priority:"high"},
    {id:"nl-147",text:"1000 ml LRS fluid bags",author:"Allison",date:"Jun 26",channel:"#need-list",status:"open",priority:"high"},
    {id:"nl-146",text:"Zenalpha",author:"Allison",date:"Jun 26",channel:"#need-list",status:"open",priority:"high"},
    {id:"nl-145",text:"Cosyntropin",author:"Staff Computer",date:"Jun 26",channel:"#need-list",status:"open",priority:"high"},
    {id:"nl-144",text:"Ketamine (controlled)",author:"Triage Nurse",date:"Jun 26",channel:"#need-list",status:"open",priority:"high"},
    {id:"nl-143",text:"Hydromorphone (controlled)",author:"Triage Nurse",date:"Jun 26",channel:"#need-list",status:"open",priority:"high"},
    {id:"nl-142",text:"Flexprofen injectable",author:"Allison",date:"Jun 25",channel:"#need-list",status:"open",priority:"high"},
    {id:"nl-141",text:"HeartGard for Faye",author:"Triage Nurse",date:"Jun 24",channel:"#need-list",status:"ordered",priority:"high"},
    {id:"nl-140",text:"Bexacat 30ct",author:"Triage Nurse",date:"Jun 24",channel:"#need-list",status:"ordered",priority:"high"},
    {id:"nl-139",text:"Kim tech wipes",author:"Moissa",date:"Jun 24",channel:"#need-list",status:"ordered",priority:"medium"},
    {id:"nl-138",text:"Dalpp",author:"Moissa",date:"Jun 24",channel:"#need-list",status:"ordered",priority:"high"},
    {id:"nl-137",text:"Small dog Seresto",author:"Moissa",date:"Jun 24",channel:"#need-list",status:"ordered",priority:"medium"},
    {id:"nl-136",text:"Large dog Seresto",author:"Moissa",date:"Jun 24",channel:"#need-list",status:"ordered",priority:"medium"},
    {id:"nl-135",text:"Credelio 4-17",author:"Moissa",date:"Jun 24",channel:"#need-list",status:"ordered",priority:"high"},
    {id:"nl-134",text:"Amoxi drop 15ml x2",author:"Moissa",date:"Jun 24",channel:"#need-list",status:"ordered",priority:"high"},
    {id:"nl-133b",text:"Claro",author:"Moissa",date:"Jun 24",channel:"#need-list",status:"ordered",priority:"high"},
    {id:"nl-132",text:"Trazodone",author:"Moissa",date:"Jun 24",channel:"#need-list",status:"open",priority:"high"},
    {id:"nl-131",text:"Flexprofen 100mg x3",author:"Moissa",date:"Jun 24",channel:"#need-list",status:"open",priority:"high"},
    {id:"nl-130",text:"(Photo — check Slack)",author:"Kristi",date:"Jun 24",channel:"#need-list",status:"open",priority:"medium"},
    {id:"nl-129",text:"Paper towels",author:"Debbie Wagner",date:"Jun 22",channel:"#need-list",status:"open",priority:"medium"},
    {id:"nl-128",text:"Flexprofen 100mg",author:"Staff Computer",date:"Jun 22",channel:"#need-list",status:"open",priority:"high"},
    {id:"nl-127",text:"Vetmedin 5mg",author:"Moissa",date:"Jun 22",channel:"#need-list",status:"ordered",priority:"high"},
    {id:"nl-126",text:"Librela 66-88",author:"Moissa",date:"Jun 22",channel:"#need-list",status:"ordered",priority:"high"},
    {id:"nl-125",text:"Librela 88-132",author:"Moissa",date:"Jun 22",channel:"#need-list",status:"ordered",priority:"high"},
    {id:"nl-124",text:"Simparica 44-88",author:"Moissa",date:"Jun 22",channel:"#need-list",status:"ordered",priority:"high"},
    {id:"nl-123",text:"Terramycin",author:"Moissa",date:"Jun 22",channel:"#need-list",status:"ordered",priority:"high"},
    {id:"nl-122",text:"Bravecto quantum",author:"Moissa",date:"Jun 22",channel:"#need-list",status:"ordered",priority:"high"},
    {id:"nl-121",text:"Vetmedin 10mg",author:"Moissa",date:"Jun 22",channel:"#need-list",status:"ordered",priority:"high"},
    {id:"nl-120",text:"Zenrelia 15",author:"Moissa",date:"Jun 22",channel:"#need-list",status:"ordered",priority:"high"},
    {id:"nl-119",text:"Felimazole 5mg",author:"Moissa",date:"Jun 22",channel:"#need-list",status:"ordered",priority:"high"},
    {id:"nl-118",text:"Dexmed",author:"Kathryn",date:"Jun 22",channel:"#need-list",status:"ordered",priority:"high"},
    {id:"nl-117",text:"Zenalpha",author:"Kathryn",date:"Jun 22",channel:"#need-list",status:"open",priority:"high"},
    {id:"nl-116",text:"Levetiracetam XR 500mg x2 (Shadow)",author:"Kelsey",date:"Jun 21",channel:"#need-list",status:"open",priority:"high"},
    {id:"nl-115",text:"Injectable bordetella (requested 2x — Allison Jun 18 + Jun 19)",author:"Staff Computer",date:"Jun 19",channel:"#need-list",status:"open",priority:"high"},
    {id:"nl-114",text:"Convenia",author:"Staff Computer",date:"Jun 19",channel:"#need-list",status:"open",priority:"high"},
    {id:"nl-113",text:"Euthasol",author:"Triage Nurse",date:"Jun 19",channel:"#need-list",status:"open",priority:"high"},
    {id:"nl-112",text:"Oral bordetella",author:"Allison",date:"Jun 18",channel:"#need-list",status:"open",priority:"high"},
    {id:"nl-110",text:"Sterilizing pouches (medium-ish)",author:"Allison",date:"Jun 18",channel:"#need-list",status:"open",priority:"medium"},
    {id:"nl-109",text:"Hand paper towels (ASAP)",author:"Kristi",date:"Jun 18",channel:"#need-list",status:"open",priority:"medium"},
    {id:"nl-108",text:"Multi-enzyme detergent (photo IMG_2465)",author:"Allison",date:"Jun 18",channel:"#need-list",status:"open",priority:"medium"},
    {id:"nl-107",text:"3ml syringes",author:"Triage Nurse",date:"Jun 17",channel:"#need-list",status:"ordered",priority:"medium"},
    {id:"nl-106",text:"Trio 44-88",author:"Moissa",date:"Jun 17",channel:"#need-list",status:"ordered",priority:"high"},
    {id:"nl-105",text:"(Photo — IMG_20260617_082458)",author:"Moissa",date:"Jun 17",channel:"#need-list",status:"ordered",priority:"medium"},
    {id:"nl-104",text:"Phos clips",author:"Moissa",date:"Jun 17",channel:"#need-list",status:"ordered",priority:"medium"},
    {id:"nl-103",text:"Amoxidrop 15ml x2",author:"Moissa",date:"Jun 17",channel:"#need-list",status:"ordered",priority:"high"},
    {id:"nl-102",text:"Bexacat 90ct bottle",author:"Staff Computer",date:"Jun 15",channel:"#need-list",status:"open",priority:"high"},
    {id:"nl-101",text:"Credelio 50-100 — 1 dose x16 (for Jodi)",author:"Triage Nurse",date:"Jun 15",channel:"#need-list",status:"ordered",priority:"high"},
    {id:"nl-100",text:"Librela 11-22",author:"Triage Nurse",date:"Jun 15",channel:"#need-list",status:"ordered",priority:"high"},
    {id:"nl-99",text:"Feline combo vax",author:"Moissa",date:"Jun 15",channel:"#need-list",status:"ordered",priority:"high"},
    {id:"nl-98",text:"Proheart 12",author:"Moissa",date:"Jun 15",channel:"#need-list",status:"ordered",priority:"high"},
    {id:"nl-97",text:"Sileo",author:"Moissa",date:"Jun 15",channel:"#need-list",status:"ordered",priority:"medium"},
    {id:"nl-96",text:"Seresto small dog",author:"Moissa",date:"Jun 15",channel:"#need-list",status:"ordered",priority:"medium"},
    {id:"nl-95",text:"Simparica 11-22",author:"Moissa",date:"Jun 15",channel:"#need-list",status:"ordered",priority:"medium"},
    {id:"nl-94",text:"Onsior",author:"Moissa",date:"Jun 15",channel:"#need-list",status:"ordered",priority:"medium"},
    {id:"nl-93",text:"Bexacat 30",author:"Moissa",date:"Jun 15",channel:"#need-list",status:"ordered",priority:"high"},
    {id:"nl-92",text:"Methimazole 5mg",author:"Moissa",date:"Jun 15",channel:"#need-list",status:"ordered",priority:"high"},
    {id:"nl-91",text:"Flexprofen 75mg",author:"Triage Nurse",date:"Jun 12",channel:"#need-list",status:"ordered",priority:"high"},
    {id:"nl-90",text:"(Photo — check Slack, IMG_20260610_095945)",author:"Kathryn",date:"Jun 10",channel:"#need-list",status:"ordered",priority:"medium"},
    {id:"nl-89",text:"(Photo — check Slack, 20260610_094921)",author:"Kathryn",date:"Jun 10",channel:"#need-list",status:"ordered",priority:"medium"},
    {id:"nl-88",text:"(Photo — check Slack, IMG_20260610_094725)",author:"Kathryn",date:"Jun 10",channel:"#need-list",status:"ordered",priority:"medium"},
    {id:"nl-87",text:"Prophy paste",author:"Allison",date:"Jun 10",channel:"#need-list",status:"ordered",priority:"medium"},
    {id:"nl-86",text:"(Photo — check Slack, IMG_2194 — NO checkmark yet)",author:"Kristi",date:"Jun 10",channel:"#need-list",status:"open",priority:"medium"},
    {id:"nl-85",text:"(Photo — check Slack, IMG_2193)",author:"Kristi",date:"Jun 10",channel:"#need-list",status:"ordered",priority:"medium"},
    {id:"nl-84",text:"\"One left\" (photo IMG_2192 — identify product)",author:"Kristi",date:"Jun 10",channel:"#need-list",status:"ordered",priority:"high"},
    {id:"nl-83",text:"(6 inventory photos — IMG_2184–2191, check Slack)",author:"Kristi",date:"Jun 10",channel:"#need-list",status:"ordered",priority:"medium"},
    {id:"nl-82",text:"Vetmedin 5mg",author:"Kristi",date:"Jun 10",channel:"#need-list",status:"ordered",priority:"high"},
    {id:"nl-81",text:"Disposable drapes",author:"Allison",date:"Jun 10",channel:"#need-list",status:"ordered",priority:"medium"},
    {id:"nl-80",text:"Soda lime",author:"Triage Nurse",date:"Jun 8",channel:"#need-list",status:"ordered",priority:"high"},
    {id:"nl-79",text:"Flexprofen 100mg",author:"Kathryn",date:"Jun 8",channel:"#need-list",status:"open",priority:"high"},
    {id:"nl-78",text:"Meloxidyl 32ml",author:"Triage Nurse",date:"Jun 5",channel:"#need-list",status:"open",priority:"high"},
    {id:"nl-77",text:"Cautery tips",author:"Kathryn",date:"Jun 4",channel:"#need-list",status:"open",priority:"high"},
    {id:"nl-76",text:"(Photo — check Slack, IMG_2156)",author:"Kristi",date:"Jun 4",channel:"#need-list",status:"open",priority:"medium"},
    {id:"nl-75",text:"Propofol",author:"Allison",date:"Jun 4",channel:"#need-list",status:"open",priority:"high"},
    {id:"nl-74",text:"(Photo — check Slack, IMG_2155)",author:"Kristi",date:"Jun 4",channel:"#need-list",status:"open",priority:"medium"},
    {id:"nl-73",text:"Felimazole 2.5mg",author:"Triage Nurse",date:"Jun 3",channel:"#need-list",status:"open",priority:"high"},
    {id:"nl-72",text:"Plates",author:"Triage Nurse",date:"Jun 3",channel:"#need-list",status:"ordered",priority:"low"},
    {id:"nl-71",text:"18g needles",author:"Triage Nurse",date:"Jun 3",channel:"#need-list",status:"ordered",priority:"medium"},
    {id:"nl-69",text:"23 winged infusion set",author:"Moissa",date:"Jun 3",channel:"#need-list",status:"ordered",priority:"medium"},
    {id:"nl-68",text:"Purple tops",author:"Moissa",date:"Jun 3",channel:"#need-list",status:"ordered",priority:"medium"},
    {id:"nl-67",text:"Red tops",author:"Moissa",date:"Jun 3",channel:"#need-list",status:"ordered",priority:"medium"},
    {id:"nl-59",text:"Flu vaccine",author:"Moissa",date:"Jun 3",channel:"#need-list",status:"ordered",priority:"high"},
    {id:"nl-56",text:"Bordatella",author:"Moissa",date:"Jun 3",channel:"#need-list",status:"ordered",priority:"high"},
    {id:"nl-70",text:"(Photo — check Slack, IMG_2153)",author:"Kristi",date:"Jun 3",channel:"#need-list",status:"ordered",priority:"medium"},
    {id:"nl-66",text:"Apoquel 16mg chewable",author:"Triage Nurse",date:"Jun 2",channel:"#need-list",status:"ordered",priority:"high"},
    {id:"nl-65",text:"Prednisone 5mg",author:"Triage Nurse",date:"Jun 2",channel:"#need-list",status:"open",priority:"high"},
    {id:"nl-64",text:"Vetmedin 1.25mg chewable",author:"Triage Nurse",date:"Jun 2",channel:"#need-list",status:"open",priority:"high"},
    {id:"nl-63",text:"Postage stamps",author:"Staff Computer",date:"Jun 2",channel:"#need-list",status:"open",priority:"low"},
    {id:"nl-62",text:"Notebooks",author:"Debbie Wagner",date:"Jun 2",channel:"#need-list",status:"open",priority:"low"},
    {id:"nl-61",text:"20ml luer lock syringes",author:"Triage Nurse",date:"Jun 2",channel:"#need-list",status:"open",priority:"medium"},
    {id:"nl-60",text:"Isoflurane",author:"Allison",date:"Jun 2",channel:"#need-list",status:"open",priority:"high"},
    {id:"nl-58",text:"Flexprofen 100mg",author:"Allison",date:"Jun 1",channel:"#need-list",status:"open",priority:"high"},
    {id:"nl-57",text:"Cephalexin 500mg",author:"Staff Computer",date:"Jun 1",channel:"#need-list",status:"open",priority:"high"},
    {id:"nl-50",text:"Bonqat",author:"Moissa",date:"Jun 1",channel:"#need-list",status:"ordered",priority:"high"},
    {id:"nl-51",text:"Librela 66-88",author:"Moissa",date:"Jun 1",channel:"#need-list",status:"ordered",priority:"high"},
    {id:"nl-52",text:"Claro",author:"Moissa",date:"Jun 1",channel:"#need-list",status:"ordered",priority:"high"},
    {id:"nl-53",text:"Bexacat 90",author:"Moissa",date:"Jun 1",channel:"#need-list",status:"ordered",priority:"high"},
    {id:"nl-54",text:"Forks",author:"Kathryn",date:"May 29",channel:"#need-list",status:"open",priority:"low"},
    {id:"nl-41",text:"20ml syringes luer lock",author:"Staff Computer",date:"May 28",channel:"#need-list",status:"open",priority:"medium"},
    {id:"nl-5",text:"Levetiracetam XR 750mg x2 (Shadow)",author:"Kelsey",date:"May 24",channel:"#need-list",status:"open",priority:"high"},
    {id:"nl-8",text:"Vetmedin 2.5mg",author:"Triage Nurse",date:"May 22",channel:"#need-list",status:"open",priority:"high"},
    {id:"nl-9",text:"Diazepam",author:"Triage Nurse",date:"May 22",channel:"#need-list",status:"open",priority:"high"}
  ]
};
// ---- NEED_LIST_DATA_END ----


// ---- STAFF_LOG_DATA_START — updated by Claude — do not edit manually ----
window.STAFF_LOG_DATA = {};
// ---- STAFF_LOG_DATA_END ----


// ---- TIME_OFF_DATA_START — updated by daily refresh from Dayforce + Slack ----
window.TIME_OFF_DATA = {
  lastUpdated: "Jul 2, 2026 9:40 AM",
  source: "Dayforce + Slack #preferred-schedule + #general",
  entries: [
    {staff:"Allison",dates:["2026-07-03"],type:"pto",note:"Out of town — requested Jun 22 via #preferred-schedule",inDayforce:false,slackOnly:true},
    {staff:"Kathryn",dates:["2026-07-06"],type:"pto",note:"Off Jul 6; can work all day Jul 7-10 — requested Jun 28 #preferred-schedule",inDayforce:false,slackOnly:true},
    {staff:"Claire",dates:["2026-07-21"],type:"pto",note:"Off — per Katie Jun 23 in #preferred-schedule",inDayforce:false,slackOnly:true},
    {staff:"Debbie",dates:["2026-07-30"],type:"early_out",note:"Afternoon off — dermatology appt; can work all day Jul 29",inDayforce:false,slackOnly:true},
    {staff:"Kathryn",dates:["2026-07-31"],type:"pto",note:"Full day off",inDayforce:false,slackOnly:true},
    {staff:"Kelsey",dates:["2026-08-17","2026-08-18","2026-08-19","2026-08-20","2026-08-21"],type:"pto",note:"Aug 17–21 PTO",inDayforce:false,slackOnly:true}
  ]
};
// ---- TIME_OFF_DATA_END ----


// ---- APPOINTMENT_COUNTS_START — updated by morning-avimark-pull ----
window.APPT_COUNTS = {
  lastUpdated: "Jul 2, 2026 9:40 AM",
  weekOf: "2026-06-29",
  source: "Avimark APPOINT.V2$ decoded handoff (claude/avimark dump, gen Jul 2). Jul 2 blocked all day as Independence Day (Obs?) with 0 appts — but exams ARE being recorded this morning, so the clinic is open; verify the block. Next wk so far: Jul 6: 5, Jul 7: 2, Jul 8: 2, Jul 9: 2.",
  days: [
    {day:"Mon",date:"2026-06-29",count:null,surgeries:0},
    {day:"Tue",date:"2026-06-30",count:13,surgeries:0},
    {day:"Wed",date:"2026-07-01",count:25,surgeries:0},
    {day:"Thu",date:"2026-07-02",count:0,surgeries:0},
    {day:"Fri",date:"2026-07-03",count:0,surgeries:0},
    {day:"Sat",date:"2026-07-04",count:0,surgeries:0}
  ]
};
// ---- APPOINTMENT_COUNTS_END ----


// ---- APPOINTMENT_MED_FLAGS_START — updated by morning-avimark-pull Part B ----
window.APPT_MED_FLAGS = {
  lastUpdated: "Jul 2, 2026 9:40 AM",
  date: "2026-07-02",
  dateLabel: "Today — Thu Jul 2: 0 appointments on the books — Avimark shows an all-day Independence Day (Obs?) block, yet exam recordings are coming in this morning, so the clinic appears open with the schedule sitting empty. No med flags parseable.",
  appointments: []
};
// ---- APPOINTMENT_MED_FLAGS_END ----


// ---- EXAM_ROSTER: staff who can be credited on exam recordings (Katie, Jul 2 2026).
// Only these six count for visit evidence. Aliases map transcript name variants; anything
// unmatched (e.g. "Christy"/"Chrissy") stays unattributed and is flagged for Katie to confirm. ----
const EXAM_ROSTER = [
 {id:'kathryn', name:'Kathryn'},
 {id:'moissa',  name:'Moissa'},
 {id:'jodi',    name:'Jodi Dunn'},
 {id:'allison', name:'Allison'},
 {id:'kelsey',  name:'Kelsey'},
 {id:'kristi',  name:'Kristi'}
];
const STAFF_ALIASES = {catherine:'kathryn', katherine:'kathryn', cathy:'kathryn', jody:'jodi', maurissa:'moissa', marissa:'moissa', kristy:'kristi', christi:'kristi'};

// ---- CLIENT_PROFILES: written by refresh-client-dashboard-tabs. null = show last static snapshot.
// Schema: {lastUpdated, examDate, breakdown:["line1",...], profiles:[{patient, client, time, visit,
//   type:"analytical|anxious|easygoing|decisive|budget", compliance, trust, price, staff, tip}]} ----
const CLIENT_PROFILES = null;

