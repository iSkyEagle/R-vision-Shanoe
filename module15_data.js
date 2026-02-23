// MODULE 15 — LE SYSTÈME URINAIRE
// DEUST Préparateur Technicien en Pharmacie — CFA AFICEPP Toulouse 2025-2026

const MODULE_15 = {
  id: "module15",
  title: "Module 15 — Le Système Urinaire",
  icon: "🫘",
  cours: [
    // ─── PARTIE 1 : ANATOMIE ───────────────────────────────────────────────
    {
      id: "bloc_1_1",
      partie: "Partie 1 — Anatomie",
      titre: "Excrétion rénale et fonctions du rein",
      contenu: `L'**excrétion** (ou épuration) est le processus par lequel l'organisme élimine les déchets métaboliques, les substances inutiles ou toxiques, et les médicaments.

Le **foie** est le principal organe d'épuration. Les substances métabolisées sont ensuite éliminées selon 2 voies :

• **Élimination biliaire :** Les métabolites peu solubles sont solubilisés dans la bile puis éliminés dans les selles.
• **Élimination rénale (+++++) :** Les métabolites hydrosolubles sont rejetés dans la circulation sanguine, parviennent aux reins et sont éliminés dans l'urine.

**Les 3 fonctions du rein :**
1. Épuration du sang : déchets azotés (urée, acide urique, créatinine)
2. Régulation de la volémie et de la composition chimique du sang (pression artérielle, sels minéraux)
3. Production et activation hormonale : EPO, rénine, activation de la vitamine D`,
      aRetenir: "Le rein a 3 fonctions : épuration, régulation de la volémie/PA, et production hormonale (EPO, rénine, vit D). L'élimination rénale est la voie principale pour les métabolites hydrosolubles."
    },
    {
      id: "bloc_1_2",
      partie: "Partie 1 — Anatomie",
      titre: "Anatomie du rein et des voies urinaires",
      contenu: `**Les reins :**
• Dimensions : 12 cm de long, 6 cm de large, 3 cm d'épaisseur. Poids : 150 g chez l'adulte.
• Contiennent des **pyramides de Malpighi** : masses coniques dont la pointe (papille rénale) est orientée vers l'intérieur du rein.
• Les parois des calices, bassinet et uretère sont formées de tissu musculaire lisse (SNA).

**Le néphron — unité fonctionnelle :**
Plus d'**1 million de néphrons** par rein. Il comprend :
• Le **corpuscule rénal** = glomérule rénal (peloton de capillaires) + capsule de Bowman (feuillet viscéral avec podocytes + feuillet pariétal)
• Le **tubule rénal** = tube contourné proximal → anse de Henlé → tube contourné distal → tube collecteur

⚠️ L'**appareil juxta-glomérulaire** sécrète la **rénine** quand la pression artérielle ou la concentration de sodium diminue.

**Les voies urinaires :**
• **Uretères :** 25-30 cm de long, diamètre 6 mm. Transportent l'urine des reins à la vessie.
• **Vessie :** Sac musculaire lisse (SNA). Capacité : 350 ml. Se dilate quand l'urine s'accumule.
• **Urètre :** 3-4 cm chez la femme, 20 cm chez l'homme.
  → 1er sphincter (interne) : muscle lisse, contrôle **involontaire**
  → 2ème sphincter (externe) : muscle strié, contrôle **volontaire**`,
      aRetenir: "Le néphron = corpuscule rénal (glomérule + capsule de Bowman) + tubule rénal. >1 million par rein. L'urètre féminin (3-4 cm) est plus court → facteur favorisant les infections urinaires."
    },
    // ─── PARTIE 2 : PHYSIOLOGIE ────────────────────────────────────────────
    {
      id: "bloc_2_1",
      partie: "Partie 2 — Physiologie",
      titre: "Filtration glomérulaire",
      contenu: `La formation de l'urine se fait en 3 étapes au niveau du néphron :
1. **Filtration glomérulaire** → urine primitive (glomérule)
2. **Réabsorption tubulaire** (urine → sang)
3. **Sécrétion tubulaire** (sang → urine)

**La filtration glomérulaire** est un processus **passif**. La membrane de filtration se comporte comme un filtre :
• **Laisse passer :** eau, glucose, acides aminés, déchets azotés, sels minéraux
• **Retient :** cellules sanguines, grosses protéines plasmatiques

La filtration dépend de la **pression artérielle** et de la **pression osmotique**.
⚠️ Si la PA chute < 80 mmHg → insuffisance rénale → oligurie ou anurie.

**Débit de Filtration Glomérulaire (DFG) :** ~120 ml/min chez l'adulte sain (pour les 2 reins).

**Clairance de la créatinine :** Capacité des reins à éliminer la créatinine d'un volume de plasma en une minute. La créatinine n'est pas réabsorbée → permet d'évaluer la filtration glomérulaire.
→ Paramètre essentiel pour **adapter la posologie** des médicaments en cas d'insuffisance rénale.`,
      aRetenir: "DFG normal ≈ 120 ml/min. Clairance de la créatinine = indicateur de la filtration glomérulaire, utilisé pour adapter les posologies médicamenteuses. Si PA < 80 mmHg → insuffisance rénale."
    },
    {
      id: "bloc_2_2",
      partie: "Partie 2 — Physiologie",
      titre: "Réabsorption et sécrétion tubulaires",
      contenu: `**99% du filtrat glomérulaire est réabsorbé** (180 L/24h filtrés → ~1,5 L d'urine/24h).
80% de la réabsorption se fait dans le **tube contourné proximal**.

**Réabsorption active** (nécessite ATP + transporteurs) :
• Substances réabsorbées : glucose, acides aminés, vitamines, ions Na+
• Substance NON réabsorbée : créatinine
• ⚠️ Quand les transporteurs sont saturés : la substance est excrétée dans les urines. Ex : glycosurie si glycémie > 1,8 g/L.

**Réabsorption passive** (diffusion, sans énergie) :
• Eau (osmose, suit le Na+), Cl-, HCO3-
• Partiellement : urée, acides gras

**Sécrétion tubulaire** (active ou passive) :
• Élimine certains médicaments
• Élimine les substances nuisibles réabsorbées passivement (urée)
• Élimine les ions K+ en excès
• Régule le pH sanguin (sécrétion d'ions H+ si nécessaire)`,
      aRetenir: "99% du filtrat est réabsorbé. Glycosurie si glycémie > 1,8 g/L (saturation des transporteurs). La créatinine n'est pas réabsorbée. Volume urinaire final : ~1,5 L/24h."
    },
    {
      id: "bloc_2_3",
      partie: "Partie 2 — Physiologie",
      titre: "Régulation hormonale : aldostérone et ADH",
      contenu: `**2 hormones contrôlent l'activité rénale :**

**L'aldostérone** (hormone stéroïdienne de la corticosurrénale) :
• Favorise la réabsorption du sodium et de l'eau → ↑ volémie
• Favorise la sécrétion du potassium (effet **hypokaliémiant**)

Cascade si volémie trop basse :
→ Rénine (appareil juxta-glomérulaire)
→ Angiotensinogène (foie) → **Angiotensine I**
→ (enzyme de conversion) → **Angiotensine II** (vasoconstricteur)
→ ↑ sécrétion d'aldostérone → ↑ réabsorption eau/Na+ → ↑ volémie et PA

**L'ADH (vasopressine)** (sécrétée par l'hypothalamus, stockée dans l'hypophyse postérieure) :
• Augmente la réabsorption de l'eau dans le tubule collecteur → ↑ volémie
• En l'absence d'ADH : urines très diluées = **diabète insipide**

Régulation de l'ADH :
• **Osmorécepteurs** (hypothalamus) : ↑ pression osmotique → libération ADH
• **Barorécepteurs** (oreillette gauche, vaisseaux) : ↓ PA → libération ADH`,
      aRetenir: "Aldostérone : ↑ Na+ et eau, ↓ K+. ADH (vasopressine) : ↑ réabsorption eau dans tubule collecteur. Cascade rénine-angiotensine-aldostérone activée si volémie basse."
    },
    {
      id: "bloc_2_4",
      partie: "Partie 2 — Physiologie",
      titre: "La miction et composition de l'urine",
      contenu: `**La miction :**
• La vessie se remplit sans augmentation de pression (compliance).
• À partir de **0,3 L** : envie d'uriner ressentie.
• La miction est un acte **volontaire** : ouverture des sphincters interne et externe → écoulement de l'urine.
• Si mauvais contrôle du sphincter → **incontinence**. Si rétention, le volume peut dépasser 2 L.

**Composition normale de l'urine :**
• 95% d'eau
• Déchets azotés : urée, acide urique, créatinine
• Ions : Na+, K+, H2PO4-, SO42-, Ca2+, Mg2+, HCO3-

**Constituants anormaux (à signaler) :** glucose, protéines, corps cétoniques, hémoglobine, érythrocytes, leucocytes.

**Tableau comparatif plasma / urine :**

| Constituant | Plasma (g/L) | Urine (g/L) |
|---|---|---|
| Protéines | 80 | 0 |
| Glucose | 1 | 0 |
| Urée | 0,3 | 20 |
| Créatinine | 0,01 | 1,2 |
| Na+ | 3,25 | 4,5 |
| K+ | 0,2 | 1,5 |`,
      aRetenir: "Urine normale : 95% eau + déchets azotés + ions. Présence de glucose, protéines ou sang dans les urines = anormal. Volume normal : ~1,5 L/24h."
    },
    // ─── PARTIE 3 : PATHOLOGIES ────────────────────────────────────────────
    {
      id: "bloc_3_1",
      partie: "Partie 3 — Pathologies",
      titre: "Énurésie et incontinence urinaire",
      contenu: `**Énurésie :**
Émission involontaire d'urine (nocturne ou diurne) chez l'enfant.

Traitements :
• **Desmopressine (MINIRINMELT®)** : Analogue de l'ADH. Prise au coucher. ⚠️ Restreindre les liquides ≥ 1h avant et pendant les 8h suivant la prise.
• **Amitriptyline (LAROXYL®)** : effet anticholinergique. Enfant ≥ 6 ans, en dernier recours. ECG avant instauration.

---

**Incontinence urinaire :**
Perte involontaire d'urine quand la pression vésicale dépasse la résistance des sphincters. Touche surtout les femmes.

3 types :
• **À l'effort :** fuite lors d'un effort (toux, rire). Diminution des résistances urétrales.
• **Instabilité vésicale (miction impérieuse) :** fuites fréquentes et abondantes. Origine infectieuse, inflammatoire ou neurologique (AVC, SEP, Parkinson).
• **Mixte :** association des deux. Surtout chez les personnes âgées.

Traitements de l'instabilité vésicale — **Antispasmodiques urinaires (anticholinergiques)** :
• Oxybutynine : DITROPAN®, DRIPTANE® (liste II)
• Chlorure de trospium : CERIS®
• Solifénacine : VESICARE®
• Fésotérodine : TOVIAZ®
• Toltérodine : DETRUSITOL® (NR)`,
      aRetenir: "Énurésie → desmopressine (analogue ADH) en 1ère intention. Incontinence par instabilité vésicale → anticholinergiques (oxybutynine, solifénacine…). 3 types d'incontinence : effort, impérieuse, mixte."
    },
    {
      id: "bloc_3_2",
      partie: "Partie 3 — Pathologies",
      titre: "Infections urinaires basses — Cystites",
      contenu: `**Définition :** Colonisation des urines par des bactéries. Fréquente chez la femme (urètre court, proximité de l'anus).

**Germe principal :** *Escherichia coli* (voie ascendante).

**Facteurs favorisants :** stase urinaire, mauvaise vidange vésicale, altération de la paroi.

**Signes cliniques :**
• Envies fréquentes d'uriner, mictions peu abondantes
• Brûlures mictionnelles
• Douleurs dans le bas du ventre
• Urines troubles, malodorantes, parfois hématuriques
• ⚠️ PAS de fièvre, PAS de frisson, PAS de douleur lombaire (sinon → pyélonéphrite)

**Diagnostic :** Bandelettes urinaires (leucocytes + nitrites), ECBU.

**Traitement antibiotique :**
• 1ère intention : **Fosfomycine 3g** dose unique (MONURIL®). Prise le soir après la vidange vésicale, à distance des repas, dissous dans de l'eau. Boire ≥ 1,5-2 L/j.
• 2ème intention : **Pivmécillinam (SELEXID®)** 800 mg/j pendant 3 jours (cystite simple)

**Si cystite compliquée/récidivante (>4/an) :** ECBU + antibiotiques adaptés : amoxicilline, fosfomycine (3 doses hors AMM), nitrofurantoïne (FURADANTINE®) 7j, triméthoprime (DELPRIM®) 3j.

**Prévention des récidives :** Canneberge, Bruyère, Busserole, Solidage.

**Conseils hygiéno-diététiques :** boire 1,5-2 L/j, uriner régulièrement, uriner après les rapports sexuels, bonne hygiène locale, éviter les vêtements serrés.`,
      aRetenir: "Cystite = pas de fièvre ni douleur lombaire. Germe : E. coli. Ttt 1ère intention : fosfomycine 3g dose unique. Récidives > 4/an = cystite récidivante → ECBU systématique."
    },
    {
      id: "bloc_3_3",
      partie: "Partie 3 — Pathologies",
      titre: "Adénome prostatique (HBP)",
      contenu: `**Définition :** Tumeur **bénigne** et très fréquente de la prostate chez l'homme après 60 ans. = Hypertrophie Bénigne de la Prostate.

**Signes cliniques :**
• Envies urgentes d'uriner
• Pollakiurie (surtout nocturne)
• Dysurie : retard à l'apparition du jet, jet diminué en force et volume
• Résidu vésical post-mictionnel (stade avancé)

**Complications :** infections urinaires, rétention aiguë d'urine, calculs rénaux, insuffisance rénale, dysfonction sexuelle.

**Traitement médical :**

| Classe | Mécanisme | Délai d'action | Principaux EI |
|---|---|---|---|
| **Alpha-bloquants** (alfuzosine XATRAL®, tamsulosine OMIX®, silodosine UROREC®, doxazosine, térazosine HYTRINE®) | ↓ contraction urètre/prostate | 48h | Hypotension orthostatique, céphalées, vertiges |
| **Inhibiteurs 5α-réductase** (finastéride CHIBROPROSCAR®, dutastéride AVODART®) | ↓ volume prostatique via ↓ synthèse testostérone | 6 mois | Baisse libido, troubles érection/éjaculation, gynécomastie |
| **Phytothérapie** (Serenoa repens PERMIXON®) | Mécanisme non élucidé | — | Aucun |
| **Inhibiteurs PDE5** (tadalafil CIALIS® 5mg/j) | Relaxation muscles lisses prostate/vessie | — | ⚠️ IMCI avec dérivés nitrés (hypotension, collapsus) |

Association : **COMBODART®** = tamsulosine + dutastéride.

⚠️ **NB :** PROPECIA® = finastéride 1mg → indication alopécie masculine (dose différente).`,
      aRetenir: "HBP → alpha-bloquants en 1ère intention (délai 48h) ou phytothérapie. Inhibiteurs 5α-réductase en 2ème intention (délai 6 mois). Association COMBODART® = tamsulosine + dutastéride. CI absolue des inhibiteurs PDE5 avec les dérivés nitrés."
    },
    {
      id: "bloc_3_4",
      partie: "Partie 3 — Pathologies",
      titre: "Glomérulonéphrites et pyélonéphrites",
      contenu: `**Glomérulonéphrites :**
Maladies rénales débutant par des lésions des glomérules. Toujours associées à une **protéinurie**, souvent avec **hématurie**.

La plus fréquente : glomérulonéphrite aiguë infectieuse (enfant, 2-3 semaines après une angine à streptocoque A mal soignée).

Symptômes : protéinurie, hématurie, HTA, œdèmes (visage, jambes).
Évolution : réversible ou → insuffisance rénale chronique.

---

**Pyélonéphrite aiguë :**
Infection du rein, souvent consécutive à une infection urinaire basse non traitée.

Symptômes : **début brutal**, **fièvre**, **douleurs lombaires** + ECBU positif (leucocytes + bactéries).

⚠️ Contrairement à la cystite : présence de fièvre et douleurs lombaires.

Traitement : antibiothérapie. Évolution généralement favorable.

**Pyélonéphrite chronique :**
Liée à des infections répétées ou anomalies anatomiques.
→ Destruction du rein, IRC, HTA.

**Antibiotiques utilisés :**
• Quinolones 2ème génération (voie orale) : ciprofloxacine (CIFLOX®), lévofloxacine (TAVANIC®). EI : tendinopathies, photosensibilité.
• Céphalosporine 3ème génération (IM) : ceftriaxone (ROCÉPHINE®).
• Si allergie : aminosides.`,
      aRetenir: "Pyélonéphrite = cystite + fièvre + douleurs lombaires. Ttt : quinolones 2G (ciprofloxacine) ou C3G (ceftriaxone). Glomérulonéphrite : toujours protéinurie ± hématurie. Complication angine streptocoque A mal traitée."
    },
    {
      id: "bloc_3_5",
      partie: "Partie 3 — Pathologies",
      titre: "Insuffisance rénale et lithiase urinaire",
      contenu: `**Insuffisance rénale :**
Altération du système de filtration glomérulaire → ↓ DFG → rétention des déchets azotés.

Diagnostic : clairance de la créatinine, DFG, urée, créatinine, ionogramme.

**IRA (Insuffisance Rénale Aiguë) :**
• Début brutal, généralement réversible, diurèse très diminuée.
• Étiologies : défaillance cardiaque, déshydratation, hémorragie, glomérulonéphrite aiguë, tumeur prostatique, intoxication (amanite phalloïde), cause iatrogène (**AINS +++**).

**IRC (Insuffisance Rénale Chronique) :**
• Apparition progressive, asymptomatique au début, généralement irréversible.
• Étiologies : glomérulonéphrite chronique, pyélonéphrite chronique, complication du diabète (microangiopathie).
• Complications : anémie, HTA, risque cardiaque, hyperkaliémie, acidose métabolique.
• Stade terminal : **dialyse** et **greffe rénale**.
• ⚠️ Adaptation posologique des médicaments selon la clairance.

---

**Lithiase urinaire :**
Présence de calculs (oxalate, phosphate de calcium, acide urique) dans les voies urinaires.

Symptômes : asymptomatique ou **coliques néphrétiques** (douleurs lombaires violentes + nausées + vomissements + hématurie).

Traitements : AINS, antispasmodiques, boire abondamment. Calculs < 5 mm : élimination spontanée. Sinon : **lithotripsie**, endoscopie ou chirurgie.`,
      aRetenir: "IRA : brutal, réversible. IRC : progressif, irréversible, nécessite adaptation posologique. Cause iatrogène IRA = AINS. Lithiase < 5mm → élimination spontanée. Colique néphrétique = AINS + antispasmodiques + hydratation."
    }
  ],

  flashcards: [
    // ANATOMIE-PHYSIOLOGIE
    { id: 1, recto: "Quelles sont les 3 fonctions principales du rein ?", verso: "1. Épuration du sang (urée, acide urique, créatinine). 2. Régulation de la volémie et de la composition chimique du sang (PA, sels). 3. Production et activation hormonale : EPO, rénine, vitamine D." },
    { id: 2, recto: "Qu'est-ce que le néphron ?", verso: "L'unité fonctionnelle du rein. Plus d'1 million par rein. Composé du corpuscule rénal (glomérule + capsule de Bowman) et du tubule rénal (tube contourné proximal, anse de Henlé, tube contourné distal, tube collecteur)." },
    { id: 3, recto: "Quelle est la différence de longueur de l'urètre entre la femme et l'homme ?", verso: "Femme : 3-4 cm. Homme : 20 cm. La brièveté de l'urètre féminin explique la plus grande fréquence des infections urinaires chez la femme." },
    { id: 4, recto: "Quelle est la différence entre les 2 sphincters urétraux ?", verso: "1er sphincter (interne) : muscle lisse, contrôle INVOLONTAIRE. 2ème sphincter (externe) : muscle strié, contrôle VOLONTAIRE." },
    { id: 5, recto: "Qu'est-ce que la filtration glomérulaire ?", verso: "Processus PASSIF qui filtre le plasma au niveau des glomérules. Laisse passer : eau, glucose, AA, déchets azotés, sels minéraux. Retient : cellules sanguines et grosses protéines. Produit l'urine primitive." },
    { id: 6, recto: "Qu'est-ce que le Débit de Filtration Glomérulaire (DFG) ?", verso: "Quantité de plasma filtrée par les glomérules en une minute. Valeur normale : ~120 ml/min chez l'adulte sain. Diminué en cas d'insuffisance rénale." },
    { id: 7, recto: "Qu'est-ce que la clairance de la créatinine et à quoi sert-elle ?", verso: "Capacité des reins à éliminer la créatinine d'un volume donné de plasma en une minute. La créatinine n'est pas réabsorbée → reflet fidèle du DFG. Utilisée pour évaluer l'insuffisance rénale et ADAPTER LA POSOLOGIE des médicaments." },
    { id: 8, recto: "Pourquoi survient une glycosurie ?", verso: "Quand la glycémie dépasse 1,8 g/L, les transporteurs tubulaires sont saturés : le glucose ne peut plus être totalement réabsorbé et passe dans les urines (glycosurie)." },
    { id: 9, recto: "Quel est le rôle de l'aldostérone au niveau rénal ?", verso: "Hormone de la corticosurrénale. Favorise la réabsorption du sodium et de l'eau (↑ volémie) et la sécrétion du potassium (effet hypokaliémiant). Stimulée par l'angiotensine II dans la cascade rénine-angiotensine." },
    { id: 10, recto: "Quel est le rôle de l'ADH (vasopressine) ?", verso: "Sécrétée par l'hypothalamus, stockée dans l'hypophyse. Augmente la réabsorption de l'eau dans le tubule collecteur → ↑ volémie. Absence d'ADH → urines très diluées = diabète insipide." },
    { id: 11, recto: "Décrire la cascade rénine-angiotensine-aldostérone.", verso: "↓ Volémie/PA → sécrétion de rénine → angiotensinogène (foie) → angiotensine I → (enzyme de conversion) → angiotensine II (vasoconstricteur) → ↑ aldostérone → ↑ réabsorption Na+/eau → ↑ volémie et PA." },
    { id: 12, recto: "À partir de quel volume la vessie signale-t-elle l'envie d'uriner ?", verso: "À partir de 0,3 litre (300 ml), les récepteurs de distension envoient le signal. Capacité normale de la vessie : 350 ml. En rétention, peut dépasser 2 litres." },
    // PATHOLOGIES
    { id: 13, recto: "Quel médicament est utilisé en 1ère intention dans l'énurésie ? Quel est son mécanisme ?", verso: "Desmopressine (MINIRINMELT®) : analogue de l'ADH. Réduit la production d'urine nocturne. Prise au coucher avec restriction hydrique ≥ 1h avant et 8h après." },
    { id: 14, recto: "Quels sont les 3 types d'incontinence urinaire ?", verso: "1. À l'effort : fuites lors d'un effort (toux, rire). 2. Instabilité vésicale (impérieuse) : fuites fréquentes/abondantes, origine infectieuse/inflammatoire/neurologique. 3. Mixte : association des deux, surtout chez les personnes âgées." },
    { id: 15, recto: "Quel est le traitement de l'instabilité vésicale ? Quel est leur mécanisme ?", verso: "Antispasmodiques urinaires à propriétés anticholinergiques : oxybutynine (DITROPAN®, DRIPTANE®), solifénacine (VESICARE®), fésotérodine (TOVIAZ®), toltérodine (DETRUSITOL®), trospium (CERIS®). Ils relaxent le détrusor." },
    { id: 16, recto: "Quels sont les signes cliniques d'une cystite ? Qu'est-ce qui l'exclut ?", verso: "Brûlures mictionnelles, pollakiurie, douleurs hypogastriques, urines troubles. ⚠️ PAS de fièvre, PAS de frisson, PAS de douleur lombaire. Si présents → pyélonéphrite." },
    { id: 17, recto: "Quel est le traitement de 1ère intention de la cystite simple ?", verso: "Fosfomycine 3g (MONURIL®) en dose UNIQUE. Prise le soir après la vidange vésicale, à distance des repas, dissous dans de l'eau. Boire ≥ 1,5-2 L/j." },
    { id: 18, recto: "Quel est le germe le plus fréquent dans les cystites et comment agit-il ?", verso: "Escherichia coli (E. coli), responsable de la majorité des cystites. Colonisation par voie ascendante urétrale, favorisée par la brièveté de l'urètre féminin." },
    { id: 19, recto: "Qu'est-ce que la HBP et quels sont ses principaux signes cliniques ?", verso: "Hypertrophie Bénigne de la Prostate = tumeur bénigne de la prostate chez l'homme > 60 ans. Signes : pollakiurie (surtout nocturne), dysurie (jet faible, retard), envies urgentes, résidu vésical." },
    { id: 20, recto: "Quelle est la différence entre les alpha-bloquants et les inhibiteurs de la 5α-réductase dans le traitement de la HBP ?", verso: "Alpha-bloquants : ↓ contraction urètre/prostate, délai d'action 48h, EI = hypotension orthostatique. Inhibiteurs 5α-réductase (finastéride, dutastéride) : ↓ volume prostatique par ↓ testostérone, délai 6 mois, EI = troubles sexuels, gynécomastie." },
    { id: 21, recto: "Quelle est l'interaction majeure des inhibiteurs de la PDE5 (tadalafil CIALIS®) dans la HBP ?", verso: "IMCI absolue avec les dérivés nitrés → risque d'hypotension artérielle sévère et de collapsus cardiovasculaire." },
    { id: 22, recto: "Quelle est la différence entre pyélonéphrite et cystite ?", verso: "Cystite : infection limitée à la vessie, PAS de fièvre ni douleur lombaire. Pyélonéphrite : infection du rein, début brutal avec FIÈVRE + DOULEURS LOMBAIRES + ECBU très positif." },
    { id: 23, recto: "Quels antibiotiques sont utilisés dans la pyélonéphrite aiguë ?", verso: "Quinolones 2G (voie orale) : ciprofloxacine (CIFLOX®), lévofloxacine (TAVANIC®). EI des quinolones : tendinopathies, photosensibilité. Ou ceftriaxone (ROCÉPHINE®) en IM. Si allergie : aminosides." },
    { id: 24, recto: "Quelle est la différence entre IRA et IRC ?", verso: "IRA : début brutal, généralement RÉVERSIBLE, diurèse diminuée. Cause iatrogène fréquente : AINS. IRC : apparition progressive, généralement IRRÉVERSIBLE. Stade terminal → dialyse. Nécessite adaptation posologique des médicaments." },
    { id: 25, recto: "Qu'est-ce que la lithiase urinaire et comment la traiter ?", verso: "Présence de calculs (oxalate, phosphate de calcium, acide urique) dans les voies urinaires. Symptômes : coliques néphrétiques. Ttt : AINS + antispasmodiques + hydratation abondante. Calculs < 5 mm : élimination spontanée. Sinon : lithotripsie." }
  ],

  qcm: [
    // ANATOMIE-PHYSIOLOGIE
    {
      id: 1,
      question: "Parmi les éléments suivants, lequel N'EST PAS retenu par la membrane de filtration glomérulaire ?",
      options: ["A) Les cellules sanguines", "B) Les grosses protéines plasmatiques", "C) Le glucose", "D) L'albumine"],
      reponse: 2,
      explication: "La filtration glomérulaire laisse passer l'eau, le glucose, les acides aminés, les déchets azotés et les sels minéraux. Elle retient les cellules sanguines et les grosses protéines plasmatiques (dont l'albumine)."
    },
    {
      id: 2,
      question: "Le Débit de Filtration Glomérulaire (DFG) normal chez l'adulte sain est de :",
      options: ["A) 12 ml/min", "B) 120 ml/min", "C) 1200 ml/min", "D) 60 ml/min"],
      reponse: 1,
      explication: "Le DFG normal est d'environ 120 ml/min pour les 2 reins chez l'adulte sain. Cela correspond à environ 180 litres de filtrat par 24h, dont 99% est réabsorbé, ne laissant que ~1,5 L d'urine finale."
    },
    {
      id: 3,
      question: "La clairance de la créatinine est utilisée principalement pour :",
      options: ["A) Diagnostiquer une cystite", "B) Évaluer la fonction de filtration rénale et adapter les posologies médicamenteuses", "C) Mesurer la glycémie", "D) Dépister une infection urinaire"],
      reponse: 1,
      explication: "La créatinine n'est pas réabsorbée par les tubules, ce qui en fait un marqueur fidèle de la filtration glomérulaire. Sa clairance est un paramètre essentiel pour évaluer une insuffisance rénale et adapter les posologies."
    },
    {
      id: 4,
      question: "Qu'est-ce que la glycosurie et à partir de quelle glycémie apparaît-elle ?",
      options: ["A) Présence de protéines dans les urines, à partir de 0,3 g/L", "B) Présence de glucose dans les urines, à partir d'une glycémie > 1,8 g/L", "C) Présence de sang dans les urines, à partir d'une glycémie > 2,5 g/L", "D) Présence de corps cétoniques dans les urines, à partir d'une glycémie > 1 g/L"],
      reponse: 1,
      explication: "La glycosurie survient quand la glycémie dépasse 1,8 g/L : les transporteurs tubulaires sont saturés et ne peuvent plus réabsorber tout le glucose, qui passe alors dans les urines."
    },
    {
      id: 5,
      question: "L'hormone antidiurétique (ADH ou vasopressine) agit principalement en :",
      options: ["A) Favorisant la sécrétion de potassium", "B) Augmentant la réabsorption de l'eau dans le tubule collecteur", "C) Inhibant la synthèse de rénine", "D) Augmentant la filtration glomérulaire"],
      reponse: 1,
      explication: "L'ADH (vasopressine), sécrétée par l'hypothalamus et stockée dans l'hypophyse, augmente la réabsorption de l'eau dans le tubule collecteur → augmentation de la volémie. En son absence → urines très diluées (diabète insipide)."
    },
    {
      id: 6,
      question: "Dans la cascade rénine-angiotensine-aldostérone, quelle est l'enzyme qui transforme l'angiotensine I en angiotensine II ?",
      options: ["A) La rénine", "B) L'aldostérone synthase", "C) L'enzyme de conversion (ECA)", "D) La DHFR"],
      reponse: 2,
      explication: "L'enzyme de conversion de l'angiotensine (ECA) transforme l'angiotensine I en angiotensine II, un puissant vasoconstricteur qui stimule la sécrétion d'aldostérone. Les IEC (inhibiteurs de l'enzyme de conversion) bloquent cette étape."
    },
    {
      id: 7,
      question: "Quel est le rôle de l'aldostérone sur l'équilibre potassique ?",
      options: ["A) Elle augmente la réabsorption du potassium (hyperkaliémiante)", "B) Elle favorise la sécrétion du potassium (hypokaliémiante)", "C) Elle n'a pas d'effet sur le potassium", "D) Elle inhibe la sécrétion du potassium"],
      reponse: 1,
      explication: "L'aldostérone favorise la réabsorption du sodium et de l'eau (↑ volémie) ET la sécrétion du potassium → elle est hypokaliémiante. Un excès d'aldostérone peut entraîner une hypokaliémie."
    },
    // PATHOLOGIES
    {
      id: 8,
      question: "La desmopressine (MINIRINMELT®) utilisée dans l'énurésie est un :",
      options: ["A) Anticholinergique", "B) Analogue de l'ADH (vasopressine)", "C) Alpha-bloquant", "D) Inhibiteur de la 5α-réductase"],
      reponse: 1,
      explication: "La desmopressine est un analogue synthétique de l'ADH (vasopressine). Elle réduit la production d'urine nocturne en augmentant la réabsorption de l'eau dans le tubule collecteur. Précaution : restriction hydrique autour de la prise."
    },
    {
      id: 9,
      question: "Lequel de ces signes cliniques EXCLUT le diagnostic de cystite simple et doit faire suspecter une pyélonéphrite ?",
      options: ["A) Brûlures mictionnelles", "B) Pollakiurie", "C) Fièvre et douleurs lombaires", "D) Urines troubles"],
      reponse: 2,
      explication: "La cystite simple est une infection localisée à la vessie : PAS de fièvre, PAS de frisson, PAS de douleur lombaire. La présence de fièvre et/ou douleurs lombaires signe l'atteinte rénale (pyélonéphrite) et impose une prise en charge différente."
    },
    {
      id: 10,
      question: "Quel est le traitement antibiotique de 1ère intention de la cystite simple chez la femme non enceinte ?",
      options: ["A) Amoxicilline 1g × 3/j pendant 7 jours", "B) Fosfomycine 3g en dose unique", "C) Ciprofloxacine 500mg × 2/j pendant 5 jours", "D) Ceftriaxone 1g IM en dose unique"],
      reponse: 1,
      explication: "La fosfomycine 3g (MONURIL®) en dose unique est le traitement de 1ère intention de la cystite simple. Avantages : dose unique (compliance), spectre adapté, faible résistance d'E. coli."
    },
    {
      id: 11,
      question: "Dans le traitement de la HBP, quelle classe médicamenteuse a un délai d'action d'environ 6 mois et réduit le volume prostatique ?",
      options: ["A) Les alpha-bloquants", "B) Les inhibiteurs de la PDE5", "C) Les inhibiteurs de la 5α-réductase", "D) La phytothérapie (Serenoa repens)"],
      reponse: 2,
      explication: "Les inhibiteurs de la 5α-réductase (finastéride CHIBROPROSCAR®, dutastéride AVODART®) réduisent la synthèse de testostérone → réduction du volume prostatique. Délai d'action : 6 mois. EI : troubles sexuels, gynécomastie."
    },
    {
      id: 12,
      question: "L'effet indésirable caractéristique des alpha-bloquants (alfuzosine, tamsulosine) dans la HBP est :",
      options: ["A) Gynécomastie", "B) Hypotension orthostatique", "C) Tendinopathie", "D) Hyperkaliémie"],
      reponse: 1,
      explication: "Les alpha-bloquants (alfuzosine, tamsulosine…) entraînent une vasodilatation en bloquant les récepteurs alpha-adrénergiques → risque d'hypotension orthostatique (vertiges, malaises à la levée). Délai d'efficacité : 48h."
    },
    {
      id: 13,
      question: "Quelle est l'interaction médicamenteuse absolument contre-indiquée (IMCI) avec les inhibiteurs de la PDE5 (tadalafil CIALIS®) ?",
      options: ["A) Les inhibiteurs de la 5α-réductase", "B) Les dérivés nitrés", "C) Les fluoroquinolones", "D) Les anticholinergiques"],
      reponse: 1,
      explication: "L'association inhibiteurs de la PDE5 + dérivés nitrés est une contre-indication absolue (IMCI) en raison du risque d'hypotension artérielle sévère et de collapsus cardiovasculaire par potentialisation des effets vasodilatateurs."
    },
    {
      id: 14,
      question: "Quelle est la principale cause iatrogène d'insuffisance rénale aiguë ?",
      options: ["A) Les antibiotiques (amoxicilline)", "B) Les anti-inflammatoires non stéroïdiens (AINS)", "C) Les antispasmodiques urinaires", "D) Les inhibiteurs de la PDE5"],
      reponse: 1,
      explication: "Les AINS sont une cause majeure d'insuffisance rénale aiguë iatrogène : ils inhibent les prostaglandines qui maintiennent la vasodilatation rénale, notamment en cas de déshydratation ou d'insuffisance rénale préexistante."
    },
    {
      id: 15,
      question: "Quelle est la différence entre une insuffisance rénale aiguë et une insuffisance rénale chronique ?",
      options: ["A) L'IRA est irréversible, l'IRC est réversible", "B) L'IRA est d'installation brutale et généralement réversible ; l'IRC est progressive et généralement irréversible", "C) L'IRA touche uniquement les personnes âgées", "D) Il n'y a pas de différence clinique entre les deux"],
      reponse: 1,
      explication: "IRA : début brutal, généralement réversible si cause traitée rapidement. IRC : évolution progressive et insidieuse, généralement irréversible, nécessite adaptation posologique des médicaments et peut conduire à la dialyse."
    },
    {
      id: 16,
      question: "Le PROPECIA® (finastéride 1mg) et le CHIBROPROSCAR® (finastéride 5mg) contiennent la même molécule. Quelle est la différence ?",
      options: ["A) PROPECIA® est indiqué dans la HBP, CHIBROPROSCAR® dans l'alopécie", "B) PROPECIA® est indiqué dans l'alopécie androgénique masculine, CHIBROPROSCAR® dans la HBP", "C) Ce sont deux médicaments strictement identiques et interchangeables", "D) PROPECIA® s'administre par voie injectable"],
      reponse: 1,
      explication: "PROPECIA® = finastéride 1mg, indication : alopécie androgénique masculine. CHIBROPROSCAR® = finastéride 5mg, indication : HBP. Même molécule mais dosages et indications différents — ils ne sont PAS interchangeables."
    },
    {
      id: 17,
      question: "Dans la pyélonéphrite aiguë, quel antibiotique de la famille des quinolones est utilisé par voie orale ?",
      options: ["A) Amoxicilline", "B) Fosfomycine", "C) Ciprofloxacine (CIFLOX®)", "D) Nitrofurantoïne"],
      reponse: 2,
      explication: "La ciprofloxacine (CIFLOX®) et la lévofloxacine (TAVANIC®) sont des quinolones de 2ème génération utilisées par voie orale dans la pyélonéphrite aiguë. EI importants : tendinopathies, photosensibilité. La fosfomycine et la nitrofurantoïne sont réservées à la cystite."
    },
    {
      id: 18,
      question: "La glomérulonéphrite aiguë infectieuse survient fréquemment comme complication de :",
      options: ["A) Une cystite à E. coli", "B) Une angine à streptocoque A mal soignée", "C) Une lithiase urinaire", "D) Une HBP non traitée"],
      reponse: 1,
      explication: "La glomérulonéphrite aiguë infectieuse touche surtout l'enfant, 2 à 3 semaines après une angine à streptocoque A insuffisamment traitée. Elle se manifeste par une protéinurie, hématurie, HTA et œdèmes."
    },
    {
      id: 19,
      question: "Question de synthèse — Associez chaque médicament à son indication dans les pathologies urinaires : Fosfomycine / Desmopressine / Alfuzosine / Solifénacine / Ciprofloxacine",
      options: [
        "A) Fosfomycine=pyélonéphrite ; Desmopressine=incontinence ; Alfuzosine=cystite ; Solifénacine=HBP ; Ciprofloxacine=énurésie",
        "B) Fosfomycine=cystite ; Desmopressine=énurésie ; Alfuzosine=HBP ; Solifénacine=instabilité vésicale ; Ciprofloxacine=pyélonéphrite",
        "C) Fosfomycine=HBP ; Desmopressine=cystite ; Alfuzosine=pyélonéphrite ; Solifénacine=énurésie ; Ciprofloxacine=incontinence",
        "D) Toutes les associations sont incorrectes"
      ],
      reponse: 1,
      explication: "Fosfomycine (MONURIL®) = cystite simple | Desmopressine (MINIRINMELT®) = énurésie (analogue ADH) | Alfuzosine (XATRAL®) = HBP (alpha-bloquant) | Solifénacine (VESICARE®) = instabilité vésicale (anticholinergique) | Ciprofloxacine (CIFLOX®) = pyélonéphrite (quinolone 2G)."
    },
    {
      id: 20,
      question: "Quel médicament utilisé dans la HBP est également prescrit pour l'alopécie masculine, et à quelle posologie différente ?",
      options: [
        "A) Dutastéride (AVODART®) 0,5mg pour l'alopécie",
        "B) Finastéride (PROPECIA®) 1mg pour l'alopécie vs finastéride (CHIBROPROSCAR®) 5mg pour la HBP",
        "C) Tamsulosine (OMIX®) 0,4mg pour l'alopécie",
        "D) Tadalafil (CIALIS®) 5mg pour l'alopécie"
      ],
      reponse: 1,
      explication: "Le finastéride est utilisé à 2 dosages : 1mg (PROPECIA®) pour l'alopécie androgénique masculine, et 5mg (CHIBROPROSCAR®) pour la HBP. Les deux sont des inhibiteurs de la 5α-réductase mais ne sont pas interchangeables."
    }
  ]
};
