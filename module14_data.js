// ============================================================
// MODULE 14 — L'APPAREIL RESPIRATOIRE
// Format identique au cours de pharmacologie anticancéreuse
// ============================================================

const MODULE_14 = {
  id: "module14",
  title: "Module 14 — L'Appareil Respiratoire",
  description: "Anatomie, physiologie, pathologies respiratoires et pharmacologie associée (bronchodilatateurs, corticoïdes, antitussifs, antituberculeux, antihistaminiques)",
  icon: "🫁",

  // ============================================================
  // PARTIE 1 : CONTENU STRUCTURÉ (BLOCS DE COURS)
  // ============================================================
  cours: [

    // ──────────────────────────────────────────────
    // PARTIE I — GÉNÉRALITÉS
    // ──────────────────────────────────────────────
    {
      id: "bloc_1_1",
      partie: "I — Généralités",
      titre: "Fonctions de l'appareil respiratoire",
      contenu: `L'appareil respiratoire possède **2 fonctions principales** :

• **Fournir de l'oxygène (O₂)** à l'organisme et le débarrasser du **dioxyde de carbone (CO₂)**.
• **Épurer l'air inspiré** (poussières, agents transmissibles) grâce à ses moyens de défense.

La respiration est le renouvellement de l'air contenu dans les poumons par l'action des muscles respiratoires.

**Rappel biochimique** :
O₂ + Glucose → **ATP** (énergie) + CO₂ + H₂O

La cellule vivante aérobie consomme de l'O₂ et rejette du CO₂ et de l'H₂O qu'il faut éliminer.`,
      aRetenir: "L'appareil respiratoire = apport d'O₂ + élimination de CO₂ + épuration de l'air."
    },

    // ──────────────────────────────────────────────
    // PARTIE II — ANATOMIE
    // ──────────────────────────────────────────────
    {
      id: "bloc_2_1",
      partie: "II — Anatomie",
      titre: "Organisation générale",
      contenu: `L'appareil respiratoire comprend :

• **Les voies respiratoires** : conduits empruntés par l'air pour atteindre les poumons. Ces conduits abritent une flore bactérienne commensale protectrice.
• **Les poumons** : siège des échanges gazeux entre le sang et l'air.
• **La cage thoracique, la plèvre et le diaphragme** : indispensables à la ventilation pulmonaire.

L'air inspiré et l'air expiré empruntent les **mêmes voies**.`,
      aRetenir: "3 composants : voies respiratoires + poumons + cage thoracique/plèvre/diaphragme."
    },
    {
      id: "bloc_2_2",
      partie: "II — Anatomie",
      titre: "Voies respiratoires supérieures et inférieures",
      contenu: `**Voies respiratoires supérieures :**
• Les **fosses nasales** (= cavités nasales)
• La **cavité buccale**
• Le **pharynx** (carrefour voies digestive et respiratoire)
• Le voile du palais, l'épiglotte
• Les amygdales et végétations
• Arrivée de la trompe d'Eustache

**Voies respiratoires inférieures :**
• Le **larynx** (organe de la phonation + cordes vocales)
• La **trachée**
• Les **deux bronches principales**
• Les **bronchioles** aboutissant aux **alvéoles pulmonaires**

**Remarque sur le pharynx** : il possède 2 dispositifs de protection contre les "fausses routes" pendant la déglutition :
— Vers le haut : le **voile du palais** qui occlut la partie nasale du pharynx
— Vers le bas : **l'épiglotte** qui ferme l'orifice laryngé comme un clapet`,
      aRetenir: "VRS : fosses nasales → pharynx. VRI : larynx → trachée → bronches → bronchioles → alvéoles."
    },
    {
      id: "bloc_2_3",
      partie: "II — Anatomie",
      titre: "Les poumons et la plèvre",
      contenu: `Les poumons sont des viscères de consistance molle, élastique, comparable à une éponge gorgée d'air et de sang.

• **Poumon droit** : subdivisé en **3 lobes**
• **Poumon gauche** : subdivisé en **2 lobes**

Les poumons sont recouverts par une séreuse : **la plèvre**, formée de **2 feuillets** :
• Le **feuillet pariétal** : tapisse la paroi de la cavité thoracique
• Le **feuillet viscéral** : adhère à la surface externe du poumon

Entre les 2 feuillets se trouve la **cavité pleurale**, remplie de **liquide pleural**.`,
      aRetenir: "Poumon droit = 3 lobes, gauche = 2 lobes. Plèvre = 2 feuillets (pariétal + viscéral) + cavité pleurale."
    },
    {
      id: "bloc_2_4",
      partie: "II — Anatomie",
      titre: "Les bronches et bronchioles",
      contenu: `Les bronches se ramifient (on parle d'**arbre bronchique**) ; leur diamètre diminue pour donner les bronchioles.

Les **bronchioles** possèdent une **paroi musculaire lisse** sous contrôle du **système nerveux autonome (SNA)**.

La paroi des bronches est constituée de **2 types de cellules** :
• Les **cellules ciliées** (avec des microvillosités)
• Les **cellules caliciformes** produisant le **mucus**`,
      aRetenir: "Bronchioles = muscle lisse (SNA). Paroi bronchique = cellules ciliées + cellules caliciformes (mucus)."
    },
    {
      id: "bloc_2_5",
      partie: "II — Anatomie",
      titre: "Le lobule pulmonaire",
      contenu: `Le **lobule pulmonaire** est une pyramide d'environ 1 mm³ dont la base se situe sous la plèvre (surface du poumon) et qui reçoit par le sommet une **bronchiole**.

Dans la paroi de chaque lobule, on trouve de petits vaisseaux sanguins : les **capillaires**.

À l'intérieur, la bronchiole se ramifie et les ultimes branches subissent une dilatation brutale qui forme le **sac alvéolaire**.

La paroi très mince du sac alvéolaire est boursouflée par les **alvéoles pulmonaires**, siège des échanges respiratoires.`,
      aRetenir: "Lobule = pyramide ~1mm³ → bronchiole → sac alvéolaire → alvéoles (échanges gazeux)."
    },
    {
      id: "bloc_2_6",
      partie: "II — Anatomie",
      titre: "Les alvéoles pulmonaires",
      contenu: `Il y a environ **300 millions** d'alvéoles chez l'adulte, avec une surface intérieure totale d'environ **50 m²**.

Les alvéoles pulmonaires ont des **parois extrêmement minces** permettant les échanges gazeux :
• D'un côté : un très mince film liquide, le **surfactant** (permet aux alvéoles vides de ne pas rester collées)
• De l'autre côté : **l'endothélium** (paroi des capillaires sanguins)

L'ensemble paroi alvéolaire + paroi capillaire forme la **membrane alvéolocapillaire**, lieu de l'hématose.`,
      aRetenir: "300 millions d'alvéoles, ~50 m². Surfactant + endothélium = membrane alvéolocapillaire."
    },

    // ──────────────────────────────────────────────
    // PARTIE III — PHYSIOLOGIE
    // ──────────────────────────────────────────────
    {
      id: "bloc_3_1",
      partie: "III — Physiologie",
      titre: "La bronchomotricité et le SNA",
      contenu: `La **bronchomotricité** (variation du calibre des bronches en fonction des besoins) est contrôlée par le système nerveux autonome :

**SN sympathique** → provoque la **bronchodilatation** (augmentation du calibre) grâce à la fixation de la **noradrénaline** sur les **récepteurs postsynaptiques β2** bronchiques. L'**adrénaline** (hormone) produit le même effet.

**SN parasympathique** → provoque la **bronchoconstriction** (réduction du calibre) grâce à la fixation de l'**acétylcholine** sur les **récepteurs cholinergiques** bronchiques.

**Les 3 étapes de la respiration :**
1. La **ventilation pulmonaire** (inspiration, expiration)
2. Les **échanges gazeux alvéolocapillaires** (hématose) et transport sanguin
3. La **respiration cellulaire** : utilisation de l'O₂ pour production d'ATP`,
      aRetenir: "Sympathique (NA/Adrénaline sur β2) = bronchodilatation. Parasympathique (ACh sur récepteurs cholinergiques) = bronchoconstriction."
    },
    {
      id: "bloc_3_2",
      partie: "III — Physiologie",
      titre: "La ventilation pulmonaire",
      contenu: `C'est la succession de **cycles ventilatoires** formés chacun d'une **inspiration** et d'une **expiration**.

**Rôle** : renouvellement de l'air dans les poumons (entrée d'O₂, sortie de CO₂).

**Mécanismes** :
• **Inspiration** = phénomène **actif** (contraction du diaphragme → augmentation volume thoracique → entrée d'air)
• **Expiration** = phénomène **passif** (relâchement du diaphragme → diminution volume → sortie d'air)

L'expiration peut devenir **active et volontaire** par la contraction des **muscles abdominaux** qui entrainent les viscères et le diaphragme vers le haut.`,
      aRetenir: "Inspiration = actif (diaphragme contracté). Expiration = passif (diaphragme relâché)."
    },
    {
      id: "bloc_3_3",
      partie: "III — Physiologie",
      titre: "Fréquence respiratoire",
      contenu: `La **fréquence respiratoire** est le nombre de cycles respiratoires (inspiration + expiration) par minute.

• **Fréquence de repos moyenne** : **12 cycles/min**
• **>25 cycles/min** : **tachypnée**
• **<10 cycles/min** : **bradypnée**
• Tachypnée > 20 cycles/min peut aller jusqu'à la **détresse respiratoire**

Des mouvements réflexes peuvent modifier la respiration (ex : la **toux**).`,
      aRetenir: "Normal = 12 c/min. Tachypnée > 25. Bradypnée < 10."
    },
    {
      id: "bloc_3_4",
      partie: "III — Physiologie",
      titre: "Volumes respiratoires",
      contenu: `Mesurés par **spirométrie** lors d'une **EFR** (Exploration Fonctionnelle Respiratoire) :

| Volume | Abréviation | Définition | Valeur |
|--------|-------------|-----------|--------|
| Volume courant | VC | Air inspiré puis expiré à chaque respiration | **500 mL** |
| Volume de réserve inspiratoire | VRI | Air pouvant être inspiré par inspiration forcée après inspiration normale | **2100–3200 mL** |
| Volume de réserve expiratoire | VRE | Air pouvant être rejeté par expiration forcée après expiration normale | **1000–1200 mL** |
| Volume résiduel | VR | Air restant dans les poumons après expiration forcée | **1200 mL** |`,
      aRetenir: "VC = 500 mL, VRI ≈ 2500 mL, VRE ≈ 1200 mL, VR = 1200 mL."
    },
    {
      id: "bloc_3_5",
      partie: "III — Physiologie",
      titre: "Capacités respiratoires",
      contenu: `Les capacités sont des additions de volumes :

| Capacité | Abréviation | Formule |
|----------|-------------|---------|
| Capacité inspiratoire | CI | VC + VRI |
| Capacité résiduelle fonctionnelle | CRF | VRE + VR |
| Capacité vitale | CV | VC + VRI + VRE |
| Capacité pulmonaire totale | CPT | VC + VRI + VRE + VR = **6000 mL** |`,
      aRetenir: "CPT = 6000 mL. CV = VRI + VC + VRE. CRF = VRE + VR."
    },
    {
      id: "bloc_3_6",
      partie: "III — Physiologie",
      titre: "L'hématose — échanges gazeux alvéolocapillaires",
      contenu: `**Définition** : L'**hématose** est l'ensemble des échanges gazeux (O₂ et CO₂) entre l'air alvéolaire et le sang capillaire pulmonaire. Le sang s'enrichit en O₂ et s'appauvrit en CO₂. Elle a lieu dans la **membrane alvéolocapillaire**.

**Description** (petite circulation) :
1. Les **artères pulmonaires** arrivent au poumon → sang **pauvre en O₂, riche en CO₂**
2. Au niveau de la membrane alvéolocapillaire :
   — CO₂ passe du sang vers l'air alvéolaire (sera expiré)
   — O₂ passe de l'air alvéolaire vers le sang
3. Les **veines pulmonaires** partent des poumons → sang **riche en O₂, pauvre en CO₂**

Les échanges se font par **diffusion passive** selon le gradient de pression partielle : le gaz passe du milieu à forte pression vers le milieu à faible pression.`,
      aRetenir: "Hématose = échanges O₂/CO₂ au niveau alvéolocapillaire. Artères pulm. = sang désoxygéné. Veines pulm. = sang oxygéné."
    },
    {
      id: "bloc_3_7",
      partie: "III — Physiologie",
      titre: "Pressions partielles et échanges gazeux",
      contenu: `**Au niveau alvéolaire :**
| | Sang capillaire alvéolaire | Air alvéolaire |
|--|---|---|
| PO₂ | 40 mmHg | 104 mmHg |
| PCO₂ | 45 mmHg | 40 mmHg |

→ O₂ diffuse de l'alvéole (104) vers le sang (40) — gradient = 64 mmHg
→ CO₂ diffuse du sang (45) vers l'alvéole (40) — gradient = 5 mmHg

**Au niveau tissulaire :**
| | Sang capillaire systémique | Tissus |
|--|---|---|
| PO₂ | 104 mmHg | < 40 mmHg |
| PCO₂ | 40 mmHg | > 45 mmHg |

→ O₂ diffuse du sang vers les tissus
→ CO₂ diffuse des tissus vers le sang

La **gazométrie** (dosage des gaz du sang artériel) permet d'explorer l'hématose (mesure PO₂, PCO₂, pH).`,
      aRetenir: "O₂ : haute pression → basse pression. Alvéoles : PO₂=104, sang arrivant PO₂=40. Tissus : PO₂ sang=104, tissus<40."
    },
    {
      id: "bloc_3_8",
      partie: "III — Physiologie",
      titre: "Transport de l'O₂ dans le sang",
      contenu: `L'oxygène est transporté sous **2 formes** :

• **Libre**, dissoute dans le plasma : **1,5%**
• **Combinée** (forme liée) à l'**hémoglobine** dans les globules rouges, au niveau du **fer de l'hème** : **98,5%**

Il forme ainsi l'**oxyhémoglobine (HbO₂)** qui donne la **couleur rouge vif** au sang artériel.`,
      aRetenir: "O₂ : 98,5% lié à l'Hb (oxyhémoglobine HbO₂) + 1,5% dissous. Liaison au FER de l'hème."
    },
    {
      id: "bloc_3_9",
      partie: "III — Physiologie",
      titre: "Transport du CO₂ dans le sang",
      contenu: `Le CO₂ est transporté sous **3 formes** :

• **Libre**, dissoute dans le plasma : **7 à 10%**
• **Combinée à l'hémoglobine** (sur la **globine**) : **30%** → forme la **carbhémoglobine (HbCO₂)** → couleur **rouge foncé**
• **Combinée à l'eau** du plasma sous forme d'**ions bicarbonate (HCO₃⁻)** : **~60%** (majorité)

Réaction : CO₂ + H₂O → H₂CO₃ → HCO₃⁻ + H⁺

Les bicarbonates constituent la **réserve alcaline** de l'organisme.`,
      aRetenir: "CO₂ : 60% bicarbonates (HCO₃⁻) + 30% carbhémoglobine (sur globine) + 7-10% dissous."
    },
    {
      id: "bloc_3_10",
      partie: "III — Physiologie",
      titre: "Régulation de l'automatisme respiratoire",
      contenu: `La respiration est un phénomène **automatique**, contrôlé par le SNA.

Des **centres respiratoires** situés dans le **bulbe rachidien** assurent la régulation. Les deux centres principaux (**centre expiratoire** et **centre inspiratoire**) commandent les muscles respiratoires.

Ils sont en **antagonisme fonctionnel** : reliés par des connexions inhibitrices — la fin de l'expiration stimule l'inspiration et réciproquement.

Les centres sont informés par :
• Des **chémorécepteurs** (sensibles à PO₂, PCO₂, pH sanguin)
• Des **mécanorécepteurs** thoraco-pulmonaires (pression intrathoracique)`,
      aRetenir: "Centres respiratoires = bulbe rachidien. Régulation par chémorécepteurs (PO₂, PCO₂, pH) et mécanorécepteurs."
    },
    {
      id: "bloc_3_11",
      partie: "III — Physiologie",
      titre: "Mécanismes de défense de l'appareil respiratoire",
      contenu: `**Défenses mécaniques :**
Des fosses nasales aux bronchioles, la surface interne est recouverte d'un **épithélium cilié** et de **mucus**.

Ce dispositif assure :
• La **protection antibactérienne**
• L'**humidification** de l'air inspiré
• Le **réchauffement** de l'air
• La **filtration** par les cils épithéliaux
• L'**expectoration** des impuretés agglomérées au mucus
• La **toux** : phénomène réflexe d'expulsion des irritants

**Défenses cellulaires :**
Les **macrophages alvéolaires** (leucocytes) **phagocytent** les débris microscopiques arrivés dans l'air alvéolaire.

Au niveau des alvéoles, les antigènes inhalés déclenchent une réaction immunitaire :
• **Humorale** : production d'anticorps (IgA)
• **Cellulaire** : production de lymphocytes T`,
      aRetenir: "Défenses mécaniques : épithélium cilié + mucus + toux. Défenses cellulaires : macrophages alvéolaires + IgA + LT."
    },

    // ──────────────────────────────────────────────
    // PARTIE IV — PATHOLOGIES
    // ──────────────────────────────────────────────
    {
      id: "bloc_4_1",
      partie: "IV — Pathologies",
      titre: "Vue d'ensemble des pathologies respiratoires",
      contenu: `| Pathologie | Définition |
|---|---|
| Asthme | Rétrécissement du calibre bronchique + augmentation des sécrétions |
| Bronchite | Irritation inflammatoire des bronches (toux) |
| BPCO | Obstruction permanente et irréversible des voies aériennes |
| Cancer du poumon | Multiplication de cellules malignes |
| Mucoviscidose | Maladie génétique récessive, viscosité excessive du mucus |
| Emphysème | Destruction du tissu pulmonaire (tissu élastique) |
| Pneumonie | Atteinte inflammatoire/infectieuse du tissu pulmonaire |
| Pleurésie | Inflammation de la plèvre + épanchement pleural |
| Pneumothorax | Épanchement gazeux entre les feuillets de la plèvre |
| Tuberculose | Maladie infectieuse bactérienne chronique, très contagieuse |
| Embolie pulmonaire | Obstruction artère pulmonaire par un caillot |
| Insuffisance respiratoire | Incapacité de l'appareil à assurer la ventilation correcte |`,
      aRetenir: "L'étiologie peut être génétique (mucoviscidose), infectieuse (tuberculose), ou multifactorielle."
    },
    {
      id: "bloc_4_2",
      partie: "IV — Pathologies",
      titre: "Bronchites aiguë et chronique",
      contenu: `**Bronchite aiguë :**
• Étiologie : le plus souvent **virale**, possible surinfection bactérienne
• Signes cliniques : fièvre 38°C, douleur thoracique rétrosternale, toux sèche puis productive, sifflements
• Évolution : guérison en quelques jours ± antalgiques, antipyrétiques, ATB si surinfection

**Bronchite chronique :**
• Étiologie : **tabagisme+++**, pollution, allergies, mucoviscidose
• Signes cliniques : toux productive ≥ 3 mois/an ou > 1 an
• Souvent associée à un **emphysème pulmonaire** (perte d'élasticité)
• C'est le **premier stade de la BPCO**
• Peut conduire à l'**insuffisance respiratoire**`,
      aRetenir: "Bronchite aiguë = virale. Bronchite chronique = tabac → 1er stade de BPCO → risque insuffisance respiratoire."
    },
    {
      id: "bloc_4_3",
      partie: "IV — Pathologies",
      titre: "BPCO — Broncho Pneumopathie Chronique Obstructive",
      contenu: `**Définition** : maladie des poumons et voies aériennes caractérisée par une **obstruction permanente** et une **diminution non complètement réversible des débits expiratoires**. Le terme BPCO regroupe les bronchites chroniques et l'emphysème.

**Étiologie** : tabagisme+++, expositions professionnelles aux polluants

**Évolution** : insuffisance respiratoire chronique → oxygénothérapie → complications sévères

**Traitements** :
• Médicaments : **anti-inflammatoires + bronchodilatateurs**, ATB si surinfections
• Réhabilitation respiratoire (exercices musculaires)
• **Oxygénothérapie**
• Traitements chirurgicaux (cas sévères)`,
      aRetenir: "BPCO = obstruction permanente, irréversible. Tabac+++. Traitement = bronchodilatateurs + corticoïdes + oxygénothérapie."
    },
    {
      id: "bloc_4_4",
      partie: "IV — Pathologies",
      titre: "Asthme — Définition et physiopathologie",
      contenu: `**Définition** : maladie inflammatoire chronique des voies respiratoires caractérisée par des accès **réversibles** de dyspnée aiguë d'intensité et durée variables.

• 6 à 10% des enfants, 4 à 7% des adultes
• ~2000 décès/an en France

**Physiopathologie — 4 mécanismes d'obstruction bronchique :**

**a) Hyperréactivité bronchique (HBR)** : les bronches réagissent anormalement par un spasme à l'air froid, l'exercice, les polluants...

**b) Bronchospasme** : les muscles lisses bronchiques réagissent à toute agression par un spasme → rétrécissement du diamètre

**c) Inflammation** : œdème de la muqueuse qui réduit encore le diamètre bronchique

**d) Hypersécrétion de mucus** : augmente l'obstruction

**Rôle des leucotriènes** : produits par les mastocytes, ils provoquent œdème, hypersécrétion de mucus et bronchoconstriction lors de l'exposition à un allergène.`,
      aRetenir: "Asthme = inflammatoire chronique, RÉVERSIBLE. 4 mécanismes : HBR + bronchospasme + inflammation + hypersécrétion mucus."
    },
    {
      id: "bloc_4_5",
      partie: "IV — Pathologies",
      titre: "Asthme — Étiologie, facteurs déclenchants, signes cliniques",
      contenu: `**Étiologie (causes multiples)** :
• Facteur **génétique** (hérédité familiale, terrain atopique : alternance eczéma + asthme) ++++++
• Environnement : allergènes domestiques (acariens), saisonniers (pollens), qualité de l'air (pollution, tabac)
• Infections virales
• Mode de vie dans la petite enfance

**Facteurs déclenchants les crises** :
• Tabagisme actif ou passif
• Froid sec/humide
• RGO
• Facteurs endocriniens et infectieux
• Contact avec les allergènes
• Stress, contrariété

**Signes cliniques** (souvent nocturne) :
• Gêne respiratoire **à l'expiration**
• **Sifflements** caractéristiques
• Toux irritante
• Essoufflement
• Oppression thoracique
• Angoisse, fatigue
• Chez l'enfant : parfois **seulement la toux**`,
      aRetenir: "Génétique+++ + environnement. Crise : dyspnée expiratoire + sifflements + toux. Enfant = parfois toux seule."
    },
    {
      id: "bloc_4_6",
      partie: "IV — Pathologies",
      titre: "Asthme — Les 4 stades de sévérité",
      contenu: `| Stade | Caractéristiques |
|---|---|
| **Intermittent** | Symptômes diurnes < 1 fois/semaine, crises brèves, nocturne < 2 fois/mois |
| **Persistant léger** | Diurnes > 1 fois/semaine et < 1 fois/jour, retentissement activité/sommeil, nocturne > 2 fois/mois |
| **Persistant modéré** | Symptômes quotidiens, retentissement activité/sommeil, nocturne > 1 fois/semaine, utilisation quotidienne β2 |
| **Persistant sévère** | Symptômes permanents, crises fréquentes, nocturne fréquent, activités physiques limitées |

**Diagnostic** (en dehors de la crise) :
• Interrogatoire
• **DEP** (Débit Expiratoire de Pointe) — mesurable avec un Peak Flow Meter
• **VEMS** (Volume Expiratoire Maximal/Seconde) chez le pneumologue
• Tests cutanés pour détecter les allergènes`,
      aRetenir: "4 stades : intermittent → persistant léger → modéré → sévère. Diagnostic : DEP + VEMS + tests cutanés."
    },
    {
      id: "bloc_4_7",
      partie: "IV — Pathologies",
      titre: "Asthme — Complications et traitement",
      contenu: `**Complications** :
• Asthme aigu mal contrôlé → **état de mal asthmatique** (urgence médicale)
• Asthme chronique non stabilisé → **insuffisance respiratoire**, **insuffisance cardiaque**

**Mesures hygiéno-diététiques** :
• Éviction des allergènes (alimentaires, environnementaux)
• Arrêt du tabac
• Exercice physique adapté

**Traitement médicamenteux — Voie locale :**
• **Bronchodilatateurs d'action immédiate** (traitement de **crise**)
• **Bronchodilatateurs d'action longue** (traitement de **fond**)
• **Corticoïdes inhalés** (traitement de fond)

**Voie orale :**
• Anti-leucotriènes
• Corticoïdes si nécessaire
• Dérivés de la théophylline (rarement utilisés)`,
      aRetenir: "Traitement : bronchodilatateurs (crise = CDA, fond = LDA) + corticoïdes inhalés (fond) + anti-leucotriènes PO."
    },

    // ──────────────────────────────────────────────
    // PARTIE IV bis — PHARMACOLOGIE DE L'ASTHME
    // ──────────────────────────────────────────────
    {
      id: "bloc_4_8",
      partie: "IV — Pharmacologie de l'asthme",
      titre: "β2-stimulants de courte durée d'action — Traitement de crise",
      contenu: `**Mécanisme** : agonistes des récepteurs β2 adrénergiques → relâchement des fibres musculaires bronchiques → bronchodilatation.

| DCI | Spécialité |
|---|---|
| **Salbutamol** | **VENTOLINE®**, AIROMIR® |
| **Terbutaline** | (inhalation) |

⚠️ **Substances dopantes** (attention sportifs)

**Effets indésirables** :
• Palpitations, tachycardie (rares à dose thérapeutique)
• Tremblements des extrémités
• Accoutumance (augmentation progressive des doses → aggravation → état de mal asthmatique)`,
      aRetenir: "β2-CDA = traitement de CRISE. Salbutamol (VENTOLINE®). EI : tachycardie, tremblements, accoutumance."
    },
    {
      id: "bloc_4_9",
      partie: "IV — Pharmacologie de l'asthme",
      titre: "β2-stimulants de longue durée d'action — Traitement de fond",
      contenu: `**Voie pulmonaire (les plus utilisés)** :

| DCI | Spécialité |
|---|---|
| **Formotérol** | FORADIL®, FORMOAIR®, ASMELOR® |
| **Salmétérol** | SEREVENT® |

Chez les patients ayant une mauvaise coordination main-poumon → préférer les formes **"Diskus"**.
La prise de ces substances n'est pas toujours ressentie par le patient.

**Voie orale (très peu utilisés)** :

| DCI | Spécialité |
|---|---|
| Bambutérol | OXEOL® |
| Terbutaline | BRICANYL® LP |`,
      aRetenir: "β2-LDA = traitement de FOND. Formotérol (FORADIL®), Salmétérol (SEREVENT®). Formes Diskus si mauvaise coordination."
    },
    {
      id: "bloc_4_10",
      partie: "IV — Pharmacologie de l'asthme",
      titre: "Anticholinergiques — Bronchodilatateurs parasympatholytiques",
      contenu: `**Mécanisme** : inhibent les récepteurs cholinergiques des muscles lisses bronchiques → action **bronchodilatatrice**. Peuvent être utilisés seuls ou en association avec les β2.

| DCI | Spécialité | Usage |
|---|---|---|
| **Ipratropium** | **ATROVENT®** | Traitement de **crise** (avec un β2-agoniste) |
| **Tiotropium** | **SPIRIVA® Respimat** | Traitement de **fond** |

**Association β2-LDA + anticholinergique** :
• Fénotérol + Ipratropium → **BRONCHODUAL®**

Cette association combine la **rapidité d'action des β2** et l'**action prolongée des anticholinergiques**.

**Effets indésirables** :
• Bouche sèche (fréquent)
• Tachycardie, rétention urinaire, constipation (rares car peu de passage systémique)
• Irritation (diminuée si verre d'eau après chaque bouffée)`,
      aRetenir: "Anticholinergiques = parasympatholytiques. Ipratropium (ATROVENT®) = crise. Tiotropium (SPIRIVA®) = fond. EI : bouche sèche."
    },
    {
      id: "bloc_4_11",
      partie: "IV — Pharmacologie de l'asthme",
      titre: "Corticoïdes inhalés — Traitement de fond",
      contenu: `**Mécanisme** : activité **anti-inflammatoire** locale puissante sur l'inflammation bronchique (cause majeure de l'asthme chez l'adulte). À dose thérapeutique, peu d'effets systémiques.

| DCI | Spécialités |
|---|---|
| **Béclométasone** | QVAR®, BÉCOTIDE®, BÉCLOJET®, BECLOSPRAY® |
| **Budésonide** | PULMICORT®, NOVOPULMON® |
| **Ciclésonide** | ALVESCO® |
| **Fluticasone** | FLIXOTIDE® |

**Indication** : traitement de fond de l'asthme persistant dès qu'un β2 est utilisé > 3 fois/jour.

**Effets indésirables** :
• **Candidose oropharyngée** (mycose)
• **Dysphonie** / voix rauque

**Précaution d'emploi essentielle** : **bien se rincer la bouche** après inhalation !`,
      aRetenir: "CSI = traitement de FOND. Béclométasone, Budésonide, Fluticasone. EI : candidose + dysphonie. RINCER LA BOUCHE après."
    },
    {
      id: "bloc_4_12",
      partie: "IV — Pharmacologie de l'asthme",
      titre: "Associations β2-LDA + Corticoïdes inhalés",
      contenu: `Ces associations sont très utilisées en traitement de fond :

| DCI | Spécialité |
|---|---|
| Formotérol + Béclométasone | **INNOVAIR®**, FORMODUAL® |
| Formotérol + Fluticasone | FLUTIFORM® |
| Formotérol + Budésonide | **SYMBICORT®**, DUORESP SPIROMAX®, GIBITER® |
| **Salmétérol + Fluticasone** | **SÉRÉTIDE®** |
| Indacatérol + Mométasone | ATECTURA® |
| Vilantérol + Fluticasone | **RELVAR ELLIPTA®** |

**Triples associations (CSI + β2-LDA + anticholinergique)** :
| DCI | Spécialité |
|---|---|
| Mométasone + Indacatérol + Glycopyrronium | ENERZAIR® |
| Béclométasone + Formotérol + Glycopyrronium | TRIMBOW® |`,
      aRetenir: "SYMBICORT® = Formotérol + Budésonide. SÉRÉTIDE® = Salmétérol + Fluticasone. Triples : TRIMBOW®, ENERZAIR®."
    },
    {
      id: "bloc_4_13",
      partie: "IV — Pharmacologie de l'asthme",
      titre: "Théophylline (bases xanthiques) — Rarement utilisée",
      contenu: `**Mécanisme** :
• Relâchement des fibres musculaires bronchiques (bronchodilatation)
• Stimulation des centres bulbaires → augmentation rythme et amplitude respiratoire (analeptique respiratoire)

| DCI | Spécialité |
|---|---|
| Théophylline | DILATRANE® LP, TEDRALAN® |

⚠️ **Médicament à marge thérapeutique étroite** → théophyllinémie à surveiller à l'instauration.

**Nombreuses interactions médicamenteuses** (risques de surdosage).

**Effets indésirables** :
• Excitation, nervosité, insomnie (stimulation SNC à fortes doses)
• Tachycardie
• Nausées, vomissements`,
      aRetenir: "Théophylline = marge thérapeutique ÉTROITE. Surveillance théophyllinémie. EI : excitation, tachycardie, nausées."
    },
    {
      id: "bloc_4_14",
      partie: "IV — Pharmacologie de l'asthme",
      titre: "Anti-leucotriènes",
      contenu: `**Mécanisme** : antagonistes des récepteurs des leucotriènes (les leucotriènes favorisent la bronchoconstriction, produits par les mastocytes et éosinophiles).

| DCI | Spécialité |
|---|---|
| **Montélukast** | **SINGULAIR®** |

**Indications** :
• Asthme persistant, léger à modéré (en **association** avec corticoïdes inhalés et β2)
• Prévention de l'asthme induit par l'effort

**Mode d'emploi** : prise **le soir au coucher**, loin des repas (surtout chez l'enfant).`,
      aRetenir: "Montélukast (SINGULAIR®) = anti-leucotriène. Asthme léger à modéré en association. Prise le soir au coucher."
    },
    {
      id: "bloc_4_15",
      partie: "IV — Pharmacologie de l'asthme",
      titre: "Anticorps monoclonaux — Asthme sévère",
      contenu: `**Mécanisme** : anticorps monoclonaux se fixant sur les IgE ou IL-5 circulantes → diminution du relargage des médiateurs inflammatoires.

| DCI | Spécialité | Cible |
|---|---|---|
| **Omalizumab** | **XOLAIR®** | Anti-IgE |
| **Benralizumab** | FASENRA® | Anti-IL |
| **Mépolizumab** | NUCALA® | Anti-IL |
| **Tézépélumab** | TEZPIRE® | — |
| **Dupilumab** | DUPIXENT® | Anti-IL |

**Caractéristiques** :
• **P.I.H.** (Prescription Initiale Hospitalière)
• **Médicament d'exception**
• Toujours utilisés **en association**
• EI : réaction au site d'injection, céphalées

**Indications** :
• XOLAIR® : asthme allergique (IgE dépendant) persistant et sévère
• FASENRA®, NUCALA®, DUPIXENT® : asthme allergique sévère à éosinophiles`,
      aRetenir: "Anti-IgE = Omalizumab (XOLAIR®). PIH + médicament d'exception. Asthme sévère en association."
    },
    {
      id: "bloc_4_16",
      partie: "IV — Pharmacologie de l'asthme",
      titre: "Traitement de l'asthme selon le stade",
      contenu: `| Stade | Traitement de fond | Traitement de crise |
|---|---|---|
| **1 — Intermittent** | Aucun | VENTOLINE® (Salbutamol) |
| **2 — Persistant léger** | Corticoïdes inhalés faible dose (± antileucotriènes) | VENTOLINE® |
| **3 — Persistant modéré** | CSI faible dose + β2-LDA (± anticholinergiques / théophylline LP) | VENTOLINE® |
| **4 — Persistant sévère** | CSI forte dose + β2-LDA + anticholinergiques (± théophylline LP ± corticoïdes PO) | VENTOLINE® |

**Asthme d'effort** : prise de β2-agoniste rapide 15-30 min avant l'effort.
**Principe** : une fois le contrôle obtenu, **diminuer le traitement** progressivement.`,
      aRetenir: "VENTOLINE® = traitement de crise à TOUS les stades. Fond : CSI dès stade 2, β2-LDA dès stade 3."
    },

    // ──────────────────────────────────────────────
    // PARTIE IV — ANTIHISTAMINIQUES
    // ──────────────────────────────────────────────
    {
      id: "bloc_4_17",
      partie: "IV — Antihistaminiques",
      titre: "Antihistaminiques anti-H1",
      contenu: `Ce sont des antagonistes spécifiques de l'histamine au niveau des récepteurs H1 → action **antiallergique**.

**Antihistaminiques non anticholinergiques (2ème génération)** — les plus utilisés :

| DCI | Spécialité |
|---|---|
| **Cétirizine** | **ZYRTECSET®** |
| Lévocétirizine | XYZALL® |
| **Loratadine** | — |
| Desloratadine | AERIUS® |
| Ébastine | KESTIN® |
| Fexofénadine | TELFAST® |
| Bilastine | BILASKA®, INORIAL® |

Indications : rhinites allergiques, dermatoses allergiques.
1ère prise le soir pour évaluer l'impact sédatif.

**Antihistaminiques anticholinergiques (1ère génération)** — ne sont plus utilisés dans l'asthme :

| DCI | Spécialité |
|---|---|
| Dexchlorphéniramine | POLARAMINE® |
| Hydroxyzine | ATARAX® |
| Méquitazine | PRIMALAN® |
| Cyproheptadine | PERIACTINE® |

⚠️ Certains provoquent une **somnolence** (action sédative sur le SNC). Grandes différences interindividuelles.`,
      aRetenir: "Anti-H1 2e gen (non sédatifs) : cétirizine, loratadine. 1re gen (sédatifs/anticholinergiques) : ATARAX®, POLARAMINE®."
    },

    // ──────────────────────────────────────────────
    // PARTIE IV — BPCO (spécialités dédiées)
    // ──────────────────────────────────────────────
    {
      id: "bloc_4_18",
      partie: "IV — Pharmacologie BPCO",
      titre: "Spécialités spécifiques pour la BPCO",
      contenu: `**β2-agonistes LDA** :
| DCI | Spécialité |
|---|---|
| Indacatérol | ONBREZ® |
| Olodatérol | STRIVERDI RESPIMAT® |

**Anticholinergiques** :
| DCI | Spécialité |
|---|---|
| Glycopyrronium | SEEBRI BREEZHALER® |
| Uméclidinium | INCRUSE® |

**Associations β2-LDA + Anticholinergique** :
| DCI | Spécialité |
|---|---|
| Indacatérol + Glycopyrronium | ULTIBRO BREEZHALER® |

**Associations β2-LDA + CSI** :
| DCI | Spécialité |
|---|---|
| Vilantérol + Fluticasone | RELVAR ELLIPTA® |
| Formotérol + Budésonide | GIBITER® |

**Triples associations** :
| DCI | Spécialité |
|---|---|
| Béclométasone + Formotérol + Glycopyrronium | TRIMBOW® 87 |
| Fluticasone + Vilantérol + Uméclidinium | TRELEGY®, ELEBRATO® |`,
      aRetenir: "BPCO : mêmes classes que l'asthme mais spécialités dédiées. ONBREZ®, SEEBRI®, ULTIBRO®, TRELEGY®."
    },

    // ──────────────────────────────────────────────
    // PARTIE IV — TUBERCULOSE
    // ──────────────────────────────────────────────
    {
      id: "bloc_4_19",
      partie: "IV — Tuberculose",
      titre: "Tuberculose — Généralités et stades",
      contenu: `**Définition** : maladie infectieuse chronique touchant principalement le poumon, très contagieuse, à **déclaration obligatoire**.

**Agent pathogène** : *Mycobacterium tuberculosis* ou **bacille de Koch (BK)**.

**Contamination** : voie aérienne (gouttelettes de sécrétions bronchiques).

**Les 3 stades** :

**1. Primo-infection** :
• 95% asymptomatique, 5% fièvre/toux non spécifiques
• Bactérie reste dans les poumons, **pas de contagion**

**2. Tuberculose pulmonaire** (maladie déclarée) :
• Apparaît si déficit immunitaire
• **Seule forme contagieuse**
• Signes : toux+++, crachats ± sang (hémoptysie), fièvre modérée (surtout le soir), fatigue+++, amaigrissement+++, essoufflement
• Diagnostic : IDR+, bactéries dans les crachats, radio (cavernes), biopsies

**3. Tuberculose miliaire** :
• Localisation extra-pulmonaire (os, cerveau, rein...)
• Très rare mais très grave (décès++)`,
      aRetenir: "BK = Mycobacterium tuberculosis. Déclaration obligatoire. Primo-infection → TB pulmonaire (contagieuse) → TB miliaire (grave)."
    },
    {
      id: "bloc_4_20",
      partie: "IV — Tuberculose",
      titre: "Traitement antituberculeux",
      contenu: `**Principe** : association d'ATB antituberculeux pendant **6 mois**. L'**observance est indispensable** pour éviter les résistances.

**Protocole** :
• **2 mois** : 4 ATB → **Isoniazide + Rifampicine + Pyrazinamide + Éthambutol**
• Puis **4 mois** : 2 ATB → **Isoniazide + Rifampicine**

| DCI | Spécialité | Effets indésirables | Particularités |
|---|---|---|---|
| **Isoniazide** | RIMIFON® | **Hépatotoxicité**, neurotoxicité (neuropathies, troubles psy) | **Inhibiteur enzymatique** |
| **Rifampicine** | RIFADINE®, RIMACTAN® | Hépatotoxicité++, nausées, **coloration orange** urines/larmes | **Inducteur enzymatique** → nombreuses IM (contraception, AVK) |
| **Pyrazinamide** | PIRILENE® | **Hépatotoxicité** | Inducteur enzymatique |
| **Éthambutol** | DEXAMBUTOL® | **Toxicité du nerf optique** | CI : névrite optique |

**Associations fixes** :
• RIFINAH® = Rifampicine + Isoniazide
• RIFATER® = Rifampicine + Pyrazinamide + Isoniazide

**Prophylaxie** : Vaccin **BCG SSI**. Dépistage : **IDR** (induration > 5 mm = positif = contact avec BK), test IGRA.`,
      aRetenir: "6 mois : 2 mois (4 ATB) + 4 mois (2 ATB). Rifampicine = inducteur + urines orange. Éthambutol = nerf optique. Isoniazide = hépatotoxique."
    },

    // ──────────────────────────────────────────────
    // PARTIE IV — PNEUMOPATHIES
    // ──────────────────────────────────────────────
    {
      id: "bloc_4_21",
      partie: "IV — Pneumopathies et insuffisance respiratoire",
      titre: "Pneumopathies et insuffisance respiratoire",
      contenu: `**Pneumopathies bactériennes** :
• Germes : pneumocoque, streptocoque, Haemophilus influenzae
• Début brutal : frissons, fièvre 40°C, douleur thoracique intense
• Traitement : antibiothérapie. Prévention : **vaccin VAXNEUVANCE®** (dès 2 mois), **PREVENAR 20®** (+65 ans)

**Pneumopathies virales** :
• Début progressif, signes rhinopharyngés, toux sèche
• Surinfection bactérienne fréquente. Prévention : vaccination antigrippale

**Insuffisance respiratoire aiguë** :
• Échanges gazeux fortement réduits → **hypoxie** (cyanose lèvres/ongles) + **hypercapnie** (sueurs froides, somnolence)
• Traitement : oxygénothérapie faible débit + kinésithérapie de désobstruction

**Insuffisance respiratoire chronique** :
• Étiologie : tabagisme++++, polluants, bronchite chronique, âge
• Peut évoluer vers une défaillance cardiaque droite`,
      aRetenir: "Pneumopathie bactérienne = fièvre 40°C brutale. IR aiguë : hypoxie (cyanose) + hypercapnie (somnolence)."
    },

    // ──────────────────────────────────────────────
    // PARTIE IV — PLÈVRE
    // ──────────────────────────────────────────────
    {
      id: "bloc_4_22",
      partie: "IV — Affections de la plèvre",
      titre: "Pleurésie et Pneumothorax",
      contenu: `**Pleurésie** = présence de liquide entre les 2 feuillets de la plèvre.
• Étiologie : infection, inflammation, traumatisme, tumeur
• Symptômes : douleur thoracique vive (intensifiée par respiration profonde), toux sèche, dyspnée, fièvre si infection
• Diagnostic : matité à la percussion, radio thoracique, examen bactériologique

**Pneumothorax** = épanchement d'**air** dans la plèvre (= décollement).
• Étiologie : spontané, traumatique, tabagisme. Homme jeune, grand, maigre.
• Symptômes : douleur/oppression thoracique, dyspnée, toux sèche, risque de choc cardiopulmonaire
• Traitement : obturer l'orifice + aspirer l'air → ressoudage des feuillets pleuraux`,
      aRetenir: "Pleurésie = LIQUIDE dans la plèvre. Pneumothorax = AIR dans la plèvre. Pneumothorax = homme jeune, grand, maigre."
    },

    // ──────────────────────────────────────────────
    // PARTIE V — MÉDICAMENTS DE LA TOUX
    // ──────────────────────────────────────────────
    {
      id: "bloc_5_1",
      partie: "V — Médicaments de la toux",
      titre: "Mucolytiques / Expectorants / Fluidifiants",
      contenu: `**Principe** : une toux productive ne doit **PAS** être supprimée (elle libère les sécrétions). Il faut arrêter une toux sèche car elle épuise l'organisme inutilement.

**Mécanisme** : lyse des mucines → fluidification des sécrétions bronchiques → facilitation de l'expectoration.

| DCI | Spécialité |
|---|---|
| **Acétylcystéine** | EXOMUC®, FLUIMUCIL®, MUCOMYST® |
| **Ambroxol** | SURBRONC®, MUXOL® |
| **Carbocistéine** | BRONCHOKOD® |
| Guaïfénésine + Terpine | PULMOFLUIDE® |

**Indications** : bronchites aiguës et chroniques (traitement d'appoint).

**EI** : troubles digestifs (nausées, vomissements, diarrhées), encombrement bronchique (enfants).

**CI** : enfant < 2 ans.

**Mises en garde** :
• Ne pas prendre après **16h** / dernière prise **minimum 4h avant le coucher**
• **Ne PAS associer avec antitussifs** (empêchent l'évacuation)
• Vigilance ulcère gastroduodénal`,
      aRetenir: "Mucolytiques = toux GRASSE. Acétylcystéine (FLUIMUCIL®), Carbocistéine (BRONCHOKOD®). Pas après 16h. Jamais + antitussif."
    },
    {
      id: "bloc_5_2",
      partie: "V — Médicaments de la toux",
      titre: "Antitussifs opiacés",
      contenu: `Les antitussifs prennent en charge les **toux sèches** uniquement.

Ils diminuent le réflexe de la toux en agissant sur les centres bulbaires et médullaires du SNC.

| DCI | Spécialité |
|---|---|
| **Codéine** | POLERY®, EUPHON®, TUSSIPAX®, PADERYL® |
| **Dextrométhorphane** | PULMODEXANE®, TUSSIDANE® |
| Noscapine + Prométhazine | TUSSISÉDAL® |

⚠️ Sirop avec codéine = **ordonnance sécurisée**, max **12 semaines**.

**EI** :
• Dépresseur central (somnolence, vertiges)
• **Dépresseur respiratoire**
• Nausées, vomissements, constipation
• Allergie cutanée
• **Dépendance** (codéine à doses très élevées)

**CI** : patient **asthmatique**, insuffisant respiratoire.`,
      aRetenir: "Antitussifs opiacés = toux SÈCHE. Codéine (ordonnance sécurisée, 12 sem max). CI : asthme + insuffisance respiratoire."
    },
    {
      id: "bloc_5_3",
      partie: "V — Médicaments de la toux",
      titre: "Antitussifs non opiacés",
      contenu: `**Antitussifs antihistaminiques/anticholinergiques** :

| DCI | Spécialité |
|---|---|
| **Oxomémazine** | **TOPLEXIL®** |
| Prométhazine | FLUISÉDAL® |

EI : effets **atropiniques/anticholinergiques** (somnolence, bouche sèche, constipation, rétention urinaire, troubles visuels, palpitations).

CI : enfant < 2 ans, **glaucome à angle fermé**, troubles urétro-prostatiques (adénome de la prostate).

**Autres antitussifs** (moins d'EI) :

| DCI | Spécialité |
|---|---|
| **Oxéladine** | **PAXÉLADINE®** (antitussif central) |
| Mucoglycoprotéine d'escargot | **HÉLICIDINE®** |

Un traitement antitussif ne doit pas durer plus de **quelques jours**.`,
      aRetenir: "TOPLEXIL® (oxomémazine) = anticholinergique. CI : glaucome angle fermé, adénome prostate. HÉLICIDINE® = escargot."
    },

    // ──────────────────────────────────────────────
    // CONSEILS COMPTOIR
    // ──────────────────────────────────────────────
    {
      id: "bloc_6_1",
      partie: "VI — Conseils comptoir",
      titre: "Conseils au comptoir — Asthme",
      contenu: `• Insister sur l'**observance du traitement de fond** (diminution de la fréquence des crises)
• Associer la prise des médicaments à des gestes quotidiens
• **Toujours avoir sur soi un bronchodilatateur d'action immédiate** (VENTOLINE®)
• Expliquer la différence entre **traitement de crise** et **traitement de fond**
• Si pas d'amélioration → vérifier la **bonne utilisation des dispositifs** + consulter
• Consultation régulière chez le **pneumologue**
• Si prescription de spray → conseiller une **chambre d'inhalation** (coordination main-bouche)
• **Se rincer la bouche** après utilisation des médicaments inhalés (surtout corticoïdes)
• **Arrêter le tabac**, éviter le tabagisme passif
• Aérer les pièces quotidiennement, lutter contre les acariens
• Proscrire moquette, tapis, peluches
• Activité physique **adaptée et régulière**

**Signes d'alerte → appeler le 15** :
• Grande difficulté à respirer (poitrine/côtes s'enfoncent)
• Lèvres ou ongles bleuissent (cyanose)
• Narines se dilatent
• Difficultés à parler ou marcher
• Confusion ou perte de connaissance`,
      aRetenir: "Observance du fond + VENTOLINE® sur soi + rincer la bouche + chambre d'inhalation + éviction allergènes + 15 si cyanose/détresse."
    },
    {
      id: "bloc_6_2",
      partie: "VI — Conseils comptoir",
      titre: "Conseils au comptoir — Tuberculose",
      contenu: `• **Observance rigoureuse** du traitement pour éviter résistance du BK (prise le matin)
• Examens biologiques réguliers (**transaminases** → hépatotoxicité)
• Consultation **ophtalmo** (surveillance EI éthambutol)
• Contrôle des crachats en cours et fin de traitement
• Radio pulmonaire en cours et fin de traitement
• Surveiller le poids + compléments alimentaires si dénutrition
• Se reposer au maximum
• **Adapter la contraception** (rifampicine = inducteur enzymatique → diminue efficacité contraceptifs)`,
      aRetenir: "Observance = clé (résistances). Transaminases (hépatotoxicité). Ophtalmo (éthambutol). Rifampicine → adapter contraception."
    },
  ],

  // ============================================================
  // PARTIE 2 : FLASHCARDS
  // ============================================================
  flashcards: [
    // --- ANATOMIE ---
    { id: 1, recto: "Quelles sont les 2 fonctions principales de l'appareil respiratoire ?", verso: "1) Fournir de l'O₂ et éliminer le CO₂. 2) Épurer l'air inspiré (poussières, agents infectieux) grâce aux mécanismes de défense." },
    { id: 2, recto: "Quelles sont les voies respiratoires supérieures ?", verso: "Fosses nasales, cavité buccale, pharynx (+ voile du palais, épiglotte, amygdales/végétations, trompe d'Eustache)." },
    { id: 3, recto: "Quelles sont les voies respiratoires inférieures ?", verso: "Larynx (phonation), trachée, 2 bronches principales, bronchioles → alvéoles pulmonaires." },
    { id: 4, recto: "Combien de lobes possèdent le poumon droit et le poumon gauche ?", verso: "Poumon droit = 3 lobes. Poumon gauche = 2 lobes." },
    { id: 5, recto: "Qu'est-ce que la plèvre ? Quels sont ses 2 feuillets ?", verso: "Séreuse recouvrant les poumons. Feuillet pariétal (paroi thoracique) + feuillet viscéral (surface poumon). Entre les 2 : cavité pleurale remplie de liquide pleural." },
    { id: 6, recto: "Quels sont les 2 types de cellules de la paroi bronchique ?", verso: "Cellules ciliées (microvillosités, filtration) et cellules caliciformes (production de mucus)." },
    { id: 7, recto: "Qu'est-ce que le surfactant ?", verso: "Mince film liquide tapissant la paroi alvéolaire. Il empêche les alvéoles vides de rester collées." },
    { id: 8, recto: "Combien d'alvéoles chez l'adulte ? Quelle surface totale ?", verso: "Environ 300 millions d'alvéoles pour une surface totale d'environ 50 m²." },
    { id: 9, recto: "Qu'est-ce que la membrane alvéolocapillaire ?", verso: "Ensemble formé par la paroi de l'alvéole + la paroi du capillaire sanguin (endothélium). C'est le lieu de l'hématose (échanges gazeux)." },
    { id: 10, recto: "Quel est le rôle du pharynx et ses 2 dispositifs de protection ?", verso: "Carrefour voies digestive et respiratoire. Protection contre les fausses routes : voile du palais (occlut la partie nasale) et épiglotte (ferme l'orifice laryngé)." },

    // --- PHYSIOLOGIE ---
    { id: 11, recto: "Comment le SN sympathique agit-il sur les bronches ?", verso: "Fixation de la noradrénaline (ou adrénaline) sur les récepteurs β2 bronchiques → BRONCHODILATATION (augmentation du calibre)." },
    { id: 12, recto: "Comment le SN parasympathique agit-il sur les bronches ?", verso: "Fixation de l'acétylcholine sur les récepteurs cholinergiques bronchiques → BRONCHOCONSTRICTION (réduction du calibre)." },
    { id: 13, recto: "L'inspiration est un phénomène actif ou passif ? Et l'expiration ?", verso: "Inspiration = ACTIF (contraction diaphragme). Expiration = PASSIF (relâchement diaphragme). L'expiration peut devenir active par les muscles abdominaux." },
    { id: 14, recto: "Quelle est la fréquence respiratoire normale de repos ?", verso: "12 cycles par minute. Tachypnée > 25 c/min, bradypnée < 10 c/min." },
    { id: 15, recto: "Que vaut le volume courant (VC) ?", verso: "500 mL — c'est le volume d'air inspiré puis expiré à chaque respiration normale." },
    { id: 16, recto: "Quelle est la capacité pulmonaire totale (CPT) ? Quelle est sa formule ?", verso: "6000 mL. CPT = VC + VRI + VRE + VR." },
    { id: 17, recto: "Qu'est-ce que la capacité vitale (CV) ?", verso: "Quantité totale d'air qui peut entrer et sortir lors d'une inspiration forcée suivie d'une expiration forcée. CV = VC + VRI + VRE." },
    { id: 18, recto: "Définir l'hématose.", verso: "Ensemble des échanges gazeux (O₂ et CO₂) entre l'air alvéolaire et le sang capillaire pulmonaire. Le sang s'enrichit en O₂ et s'appauvrit en CO₂. Lieu : membrane alvéolocapillaire." },
    { id: 19, recto: "Comment est transporté l'O₂ dans le sang ? Sous quelles formes et proportions ?", verso: "Libre dissoute dans le plasma (1,5%) + liée à l'hémoglobine au niveau du fer de l'hème (98,5%) → oxyhémoglobine (HbO₂), couleur rouge vif." },
    { id: 20, recto: "Comment est transporté le CO₂ dans le sang ? Sous quelles formes et proportions ?", verso: "Libre dans le plasma (7-10%) + liée à la globine de l'Hb (30%) → carbhémoglobine (HbCO₂, rouge foncé) + ions bicarbonate HCO₃⁻ (60%, majorité)." },
    { id: 21, recto: "Où se situent les centres respiratoires ?", verso: "Dans le bulbe rachidien. Ils commandent les muscles respiratoires et sont en antagonisme fonctionnel (la fin de l'expiration stimule l'inspiration et réciproquement)." },
    { id: 22, recto: "Quelles sont les défenses mécaniques de l'appareil respiratoire ?", verso: "Épithélium cilié + mucus (filtration, humidification, réchauffement, expectoration) + toux (réflexe d'expulsion des irritants)." },
    { id: 23, recto: "Quel est le rôle des macrophages alvéolaires ?", verso: "Ce sont des leucocytes qui phagocytent les débris microscopiques arrivés dans l'air alvéolaire." },

    // --- PATHOLOGIES ---
    { id: 24, recto: "Définir l'asthme.", verso: "Maladie inflammatoire chronique des voies respiratoires caractérisée par des accès RÉVERSIBLES de dyspnée aiguë d'intensité et durée variables." },
    { id: 25, recto: "Quels sont les 4 mécanismes de l'obstruction bronchique dans l'asthme ?", verso: "1) Hyperréactivité bronchique (HBR). 2) Bronchospasme. 3) Inflammation (œdème muqueux). 4) Hypersécrétion de mucus." },
    { id: 26, recto: "Quel est le rôle des leucotriènes dans l'asthme ?", verso: "Produits par les mastocytes, ils provoquent au niveau des bronches : œdème, hypersécrétion de mucus et bronchoconstriction." },
    { id: 27, recto: "Citer 4 facteurs déclenchants des crises d'asthme.", verso: "Tabagisme, froid sec/humide, contact avec allergènes, stress/contrariété. Aussi : RGO, facteurs infectieux, endocriniens." },
    { id: 28, recto: "Quels sont les signes cliniques d'une crise d'asthme ?", verso: "Gêne respiratoire à l'expiration, sifflements, toux irritante, essoufflement, oppression thoracique, angoisse, fatigue. Chez l'enfant : parfois toux seule." },
    { id: 29, recto: "Quels sont les 4 stades de l'asthme ?", verso: "1) Intermittent. 2) Persistant léger. 3) Persistant modéré. 4) Persistant sévère." },
    { id: 30, recto: "Quels examens permettent le diagnostic de l'asthme ?", verso: "Interrogatoire, DEP (débit expiratoire de pointe), VEMS (volume expiratoire maximal/seconde), tests cutanés allergologiques. Diagnostic EN DEHORS de la crise." },
    { id: 31, recto: "Qu'est-ce que la BPCO ?", verso: "Broncho-Pneumopathie Chronique Obstructive : maladie caractérisée par une obstruction PERMANENTE et une diminution NON COMPLÈTEMENT RÉVERSIBLE des débits expiratoires. Regroupe bronchite chronique + emphysème." },
    { id: 32, recto: "Quelle différence fondamentale entre asthme et BPCO ?", verso: "Asthme = obstruction RÉVERSIBLE. BPCO = obstruction IRRÉVERSIBLE (ou non complètement réversible)." },
    { id: 33, recto: "Quel est l'agent pathogène de la tuberculose ?", verso: "Mycobacterium tuberculosis = bacille de Koch (BK). Contamination par voie aérienne." },
    { id: 34, recto: "Quels sont les signes cliniques de la tuberculose pulmonaire ?", verso: "Toux+++ (± crachats/sang = hémoptysie), fièvre modérée le soir, fatigue+++, amaigrissement+++, essoufflement, perte d'appétit, douleurs thoraciques." },
    { id: 35, recto: "Qu'est-ce que la pleurésie ? Et le pneumothorax ?", verso: "Pleurésie = présence de LIQUIDE entre les feuillets pleuraux. Pneumothorax = présence d'AIR entre les feuillets pleuraux." },
    { id: 36, recto: "Que signifient hypoxie et hypercapnie ?", verso: "Hypoxie = chute du taux d'O₂ sanguin (→ cyanose). Hypercapnie = élévation du taux de CO₂ (→ sueurs froides, somnolence)." },

    // --- PHARMACOLOGIE ---
    { id: 37, recto: "Salbutamol : DCI, spécialité, classe, indication.", verso: "DCI : Salbutamol. Spécialité : VENTOLINE® / AIROMIR®. Classe : β2-stimulant de courte durée d'action. Indication : traitement de CRISE de l'asthme (tous stades)." },
    { id: 38, recto: "Formotérol et Salmétérol : classe et type de traitement.", verso: "β2-stimulants de LONGUE durée d'action. Traitement de FOND de l'asthme. Formotérol = FORADIL®. Salmétérol = SEREVENT®." },
    { id: 39, recto: "Quels sont les effets indésirables des β2-stimulants ?", verso: "Palpitations/tachycardie, tremblements des extrémités, accoutumance (risque d'aggravation si surutilisation)." },
    { id: 40, recto: "Ipratropium et Tiotropium : classe, spécialités, indications.", verso: "Anticholinergiques = parasympatholytiques bronchodilatateurs. Ipratropium (ATROVENT®) = crise. Tiotropium (SPIRIVA®) = fond." },
    { id: 41, recto: "Quels sont les EI des anticholinergiques inhalés ?", verso: "Bouche sèche (fréquent), tachycardie, rétention urinaire, constipation (rares), irritation locale." },
    { id: 42, recto: "Citer 3 DCI de corticoïdes inhalés.", verso: "Béclométasone (BÉCOTIDE®), Budésonide (PULMICORT®), Fluticasone (FLIXOTIDE®). Aussi : Ciclésonide (ALVESCO®)." },
    { id: 43, recto: "Quels sont les EI des corticoïdes inhalés et la précaution d'emploi essentielle ?", verso: "EI : candidose oropharyngée (mycose) + dysphonie (voix rauque). Précaution : SE RINCER LA BOUCHE après chaque inhalation." },
    { id: 44, recto: "SYMBICORT® : composition et indication.", verso: "Formotérol (β2-LDA) + Budésonide (CSI). Traitement de FOND de l'asthme et de la BPCO." },
    { id: 45, recto: "SÉRÉTIDE® : composition et indication.", verso: "Salmétérol (β2-LDA) + Fluticasone (CSI). Traitement de FOND de l'asthme." },
    { id: 46, recto: "Montélukast : spécialité, classe, indication, posologie.", verso: "SINGULAIR®. Anti-leucotriène. Asthme persistant léger à modéré (en association). Prise le SOIR au coucher, loin des repas." },
    { id: 47, recto: "Omalizumab : spécialité, classe, indication.", verso: "XOLAIR®. Anticorps monoclonal anti-IgE. Asthme allergique persistant sévère. PIH, médicament d'exception, toujours en association." },
    { id: 48, recto: "Pourquoi la théophylline est-elle rarement utilisée ?", verso: "Marge thérapeutique ÉTROITE → surveillance théophyllinémie. Nombreuses interactions médicamenteuses. EI : excitation, insomnie, tachycardie, nausées." },
    { id: 49, recto: "Quel est le protocole antituberculeux standard ?", verso: "6 mois total : 2 mois avec 4 ATB (Isoniazide + Rifampicine + Pyrazinamide + Éthambutol), puis 4 mois avec 2 ATB (Isoniazide + Rifampicine)." },
    { id: 50, recto: "Rifampicine : particularités pharmacologiques et EI.", verso: "INDUCTEUR enzymatique → nombreuses IM (contraception, AVK). Hépatotoxicité. Coloration ORANGE des urines et sécrétions lacrymales." },
    { id: 51, recto: "Éthambutol : EI principal et CI.", verso: "Toxicité du NERF OPTIQUE. CI : névrite optique. Surveillance ophtalmo obligatoire." },
    { id: 52, recto: "Isoniazide : EI principaux et particularité.", verso: "Hépatotoxicité + neurotoxicité (neuropathies périphériques, troubles psychiques, convulsions). Inhibiteur enzymatique." },
    { id: 53, recto: "Différence entre mucolytique et antitussif : quand utiliser chacun ?", verso: "Mucolytique = toux GRASSE (productive) → fluidifie le mucus. Antitussif = toux SÈCHE uniquement. Ne JAMAIS associer les deux." },
    { id: 54, recto: "Citer 2 mucolytiques avec leurs spécialités.", verso: "Acétylcystéine (FLUIMUCIL®, EXOMUC®, MUCOMYST®). Carbocistéine (BRONCHOKOD®). Ambroxol (SURBRONC®)." },
    { id: 55, recto: "Codéine antitussive : particularités de prescription et CI.", verso: "Ordonnance SÉCURISÉE, max 12 semaines. CI : asthmatique, insuffisant respiratoire. EI : somnolence, dépression respiratoire, constipation, dépendance." },
    { id: 56, recto: "TOPLEXIL® : DCI, classe, CI principales.", verso: "Oxomémazine. Antitussif antihistaminique/anticholinergique. CI : enfant < 2 ans, glaucome à angle fermé, troubles urétro-prostatiques (adénome prostate)." },
    { id: 57, recto: "Cétirizine et Loratadine : quelle génération d'antihistaminique ? Indications ?", verso: "2ème génération (non anticholinergiques, moins sédatifs). Indications : rhinites allergiques, dermatoses allergiques." },
    { id: 58, recto: "À quel stade de l'asthme commence-t-on un traitement de fond ?", verso: "Dès le stade 2 (persistant léger) : corticoïdes inhalés à faible dose. β2-LDA ajoutés à partir du stade 3." },
    { id: 59, recto: "Quel traitement de crise est utilisé à TOUS les stades de l'asthme ?", verso: "VENTOLINE® (Salbutamol) — β2-agoniste de courte durée d'action par voie inhalée." },
    { id: 60, recto: "Pourquoi ne faut-il pas prendre de mucolytique après 16h ?", verso: "Pour éviter l'encombrement bronchique pendant la nuit. Le patient doit pouvoir évacuer ses sécrétions par la toux, ce qui est difficile en position allongée." },
  ],

  // ============================================================
  // PARTIE 3 : QCM
  // ============================================================
  qcm: [
    // --- ANATOMIE ---
    {
      id: 1,
      question: "Combien de lobes possède le poumon droit ?",
      options: ["2 lobes", "3 lobes", "4 lobes", "5 lobes"],
      reponse: 1,
      explication: "Le poumon droit possède 3 lobes, le poumon gauche 2 lobes (le cœur prend la place du 3ème)."
    },
    {
      id: 2,
      question: "Le pharynx est :",
      options: ["L'organe de la phonation", "Le carrefour des voies digestive et respiratoire", "Le muscle inspirateur principal", "Le siège des échanges gazeux"],
      reponse: 1,
      explication: "Le pharynx est le carrefour aéro-digestif. Le larynx est l'organe de la phonation. Le diaphragme est le muscle inspirateur principal."
    },
    {
      id: 3,
      question: "La plèvre est composée de :",
      options: ["3 feuillets : pariétal, viscéral et médiastinal", "2 feuillets : pariétal et viscéral", "Un seul feuillet viscéral", "2 feuillets : interne et externe"],
      reponse: 1,
      explication: "La plèvre est formée de 2 feuillets : le feuillet pariétal (paroi thoracique) et le feuillet viscéral (surface du poumon), avec entre eux la cavité pleurale."
    },
    {
      id: 4,
      question: "Le surfactant sert à :",
      options: ["Transporter l'O₂ dans le sang", "Empêcher les alvéoles vides de rester collées", "Produire le mucus bronchique", "Réguler la fréquence respiratoire"],
      reponse: 1,
      explication: "Le surfactant est un film liquide tapissant les alvéoles qui les empêche de coller entre elles lorsqu'elles sont vides d'air."
    },
    {
      id: 5,
      question: "Les cellules caliciformes de la paroi bronchique produisent :",
      options: ["Le surfactant", "Le mucus", "L'histamine", "Les leucotriènes"],
      reponse: 1,
      explication: "Les cellules caliciformes produisent le mucus. Les cellules ciliées assurent la filtration et le transport du mucus."
    },

    // --- PHYSIOLOGIE ---
    {
      id: 6,
      question: "La bronchodilatation est provoquée par :",
      options: ["Le SN parasympathique via l'acétylcholine", "Le SN sympathique via la noradrénaline sur les récepteurs β2", "Le SN parasympathique via la noradrénaline", "Le SN sympathique via l'acétylcholine"],
      reponse: 1,
      explication: "Le SN sympathique provoque la bronchodilatation par fixation de la noradrénaline (ou adrénaline) sur les récepteurs β2 bronchiques."
    },
    {
      id: 7,
      question: "L'inspiration est :",
      options: ["Un phénomène passif lié au relâchement du diaphragme", "Un phénomène actif lié à la contraction du diaphragme", "Un phénomène réflexe incontrôlable", "Un phénomène actif lié à la contraction des muscles abdominaux"],
      reponse: 1,
      explication: "L'inspiration est un phénomène actif : la contraction du diaphragme augmente le volume thoracique, créant une dépression qui fait entrer l'air."
    },
    {
      id: 8,
      question: "Le volume résiduel (VR) correspond à :",
      options: ["L'air inspiré à chaque respiration normale", "L'air restant dans les poumons après une expiration forcée", "L'air pouvant être inspiré par une inspiration forcée", "La quantité totale d'air contenue dans les poumons"],
      reponse: 1,
      explication: "Le VR (environ 1200 mL) est le volume d'air qui reste toujours dans les poumons, même après une expiration forcée maximale."
    },
    {
      id: 9,
      question: "La capacité pulmonaire totale (CPT) est d'environ :",
      options: ["500 mL", "3000 mL", "6000 mL", "10 000 mL"],
      reponse: 2,
      explication: "CPT = VC + VRI + VRE + VR ≈ 6000 mL. C'est le volume maximum d'air que peuvent contenir les poumons."
    },
    {
      id: 10,
      question: "L'hématose a lieu au niveau :",
      options: ["Du pharynx", "Des bronchioles", "De la membrane alvéolocapillaire", "De la plèvre"],
      reponse: 2,
      explication: "L'hématose (échanges gazeux O₂/CO₂) a lieu au niveau de la membrane alvéolocapillaire, dans les alvéoles pulmonaires."
    },
    {
      id: 11,
      question: "L'oxygène est transporté dans le sang principalement :",
      options: ["Libre dans le plasma (98,5%)", "Lié à l'hémoglobine au niveau du fer de l'hème (98,5%)", "Sous forme d'ions bicarbonate (60%)", "Lié à la globine de l'hémoglobine (30%)"],
      reponse: 1,
      explication: "98,5% de l'O₂ est transporté lié à l'hémoglobine (au fer de l'hème) → oxyhémoglobine. Seulement 1,5% est dissous dans le plasma."
    },
    {
      id: 12,
      question: "Le CO₂ est transporté dans le sang principalement sous forme de :",
      options: ["Carbhémoglobine (60%)", "Ions bicarbonate HCO₃⁻ (environ 60%)", "Forme libre dissoute (60%)", "Oxyhémoglobine (60%)"],
      reponse: 1,
      explication: "Le CO₂ est transporté à ~60% sous forme de bicarbonates (HCO₃⁻), 30% lié à la globine (carbhémoglobine) et 7-10% dissous."
    },
    {
      id: 13,
      question: "Les centres respiratoires sont situés dans :",
      options: ["Le cervelet", "Le cortex frontal", "Le bulbe rachidien", "La moelle épinière thoracique"],
      reponse: 2,
      explication: "Les centres respiratoires (inspiratoire et expiratoire) sont situés dans le bulbe rachidien et assurent la régulation automatique de la respiration."
    },

    // --- PATHOLOGIES ---
    {
      id: 14,
      question: "L'asthme est caractérisé par une obstruction bronchique :",
      options: ["Irréversible", "Réversible", "Permanente", "Progressive et irréversible"],
      reponse: 1,
      explication: "L'asthme se caractérise par des accès RÉVERSIBLES de dyspnée. La BPCO, en revanche, présente une obstruction irréversible."
    },
    {
      id: 15,
      question: "Parmi ces propositions, laquelle N'est PAS un mécanisme de l'obstruction bronchique dans l'asthme ?",
      options: ["Bronchospasme", "Inflammation de la muqueuse", "Destruction du tissu élastique pulmonaire", "Hypersécrétion de mucus"],
      reponse: 2,
      explication: "La destruction du tissu élastique est l'emphysème (BPCO). L'asthme associe : HBR + bronchospasme + inflammation + hypersécrétion de mucus."
    },
    {
      id: 16,
      question: "Le facteur étiologique principal de la BPCO est :",
      options: ["L'allergie aux pollens", "Le tabagisme", "Le reflux gastro-œsophagien", "Le facteur génétique"],
      reponse: 1,
      explication: "Le tabagisme est la cause principale de la BPCO, suivi des expositions professionnelles aux polluants."
    },
    {
      id: 17,
      question: "L'agent pathogène de la tuberculose est :",
      options: ["Streptococcus pneumoniae", "Haemophilus influenzae", "Mycobacterium tuberculosis", "Staphylococcus aureus"],
      reponse: 2,
      explication: "La tuberculose est causée par Mycobacterium tuberculosis = bacille de Koch (BK). Contamination par voie aérienne."
    },
    {
      id: 18,
      question: "Seule forme contagieuse de tuberculose :",
      options: ["La primo-infection", "La tuberculose pulmonaire", "La tuberculose miliaire", "Toutes les formes sont contagieuses"],
      reponse: 1,
      explication: "Seule la tuberculose pulmonaire (maladie déclarée) est contagieuse. La primo-infection n'est pas contagieuse."
    },
    {
      id: 19,
      question: "La pleurésie se caractérise par la présence de :",
      options: ["Air dans la plèvre", "Liquide entre les feuillets pleuraux", "Sang dans les alvéoles", "Pus dans les bronches"],
      reponse: 1,
      explication: "Pleurésie = liquide dans la cavité pleurale. Le pneumothorax = air dans la cavité pleurale."
    },
    {
      id: 20,
      question: "L'hypoxie se manifeste cliniquement par :",
      options: ["Des sueurs froides et de la somnolence", "Une cyanose (bleuissement des lèvres et des ongles)", "Des tremblements des extrémités", "Une tachypnée isolée"],
      reponse: 1,
      explication: "L'hypoxie (chute d'O₂) → cyanose (aspect bleuté). L'hypercapnie (excès de CO₂) → sueurs froides et somnolence."
    },

    // --- PHARMACOLOGIE ---
    {
      id: 21,
      question: "Le traitement de la crise d'asthme à tous les stades repose sur :",
      options: ["Le montélukast (SINGULAIR®)", "Le salbutamol (VENTOLINE®)", "Le budésonide (PULMICORT®)", "L'omalizumab (XOLAIR®)"],
      reponse: 1,
      explication: "Le salbutamol (VENTOLINE®), β2-agoniste de courte durée d'action, est le traitement de crise de référence à tous les stades."
    },
    {
      id: 22,
      question: "Les β2-stimulants provoquent la bronchodilatation en :",
      options: ["Bloquant les récepteurs cholinergiques", "Stimulant les récepteurs β2 adrénergiques", "Inhibant les leucotriènes", "Réduisant l'inflammation bronchique"],
      reponse: 1,
      explication: "Les β2-agonistes sont des sympathomimétiques qui stimulent les récepteurs β2 → relâchement des muscles lisses → bronchodilatation."
    },
    {
      id: 23,
      question: "Quel effet indésirable impose de se rincer la bouche après utilisation de corticoïdes inhalés ?",
      options: ["Tachycardie", "Candidose oropharyngée", "Tremblements", "Constipation"],
      reponse: 1,
      explication: "Les corticoïdes inhalés peuvent provoquer une candidose oropharyngée (mycose) et une dysphonie. Le rinçage de la bouche après chaque prise est essentiel."
    },
    {
      id: 24,
      question: "SYMBICORT® est une association de :",
      options: ["Salbutamol + Fluticasone", "Formotérol + Budésonide", "Salmétérol + Fluticasone", "Ipratropium + Fénotérol"],
      reponse: 1,
      explication: "SYMBICORT® = Formotérol (β2-LDA) + Budésonide (CSI). SÉRÉTIDE® = Salmétérol + Fluticasone. BRONCHODUAL® = Fénotérol + Ipratropium."
    },
    {
      id: 25,
      question: "Le montélukast (SINGULAIR®) doit être pris :",
      options: ["Le matin au réveil avec le petit-déjeuner", "Le soir au coucher, loin des repas", "3 fois par jour au moment des repas", "En cas de crise uniquement"],
      reponse: 1,
      explication: "Le montélukast se prend le SOIR au COUCHER, loin des repas, surtout chez l'enfant. C'est un traitement de fond, pas de crise."
    },
    {
      id: 26,
      question: "L'anticholinergique utilisé en traitement de FOND de l'asthme est :",
      options: ["Ipratropium (ATROVENT®)", "Tiotropium (SPIRIVA®)", "Salbutamol (VENTOLINE®)", "Formotérol (FORADIL®)"],
      reponse: 1,
      explication: "Tiotropium (SPIRIVA®) = anticholinergique de longue durée d'action → fond. Ipratropium (ATROVENT®) = utilisé en crise avec un β2."
    },
    {
      id: 27,
      question: "La rifampicine est un :",
      options: ["Inhibiteur enzymatique", "Inducteur enzymatique", "Substrat du CYP2D6 sans interaction", "Inhibiteur sélectif des COX"],
      reponse: 1,
      explication: "La rifampicine est un puissant INDUCTEUR enzymatique → nombreuses interactions (diminue l'efficacité des contraceptifs, AVK, etc.)."
    },
    {
      id: 28,
      question: "Quel antituberculeux nécessite une surveillance ophtalmologique ?",
      options: ["Isoniazide", "Rifampicine", "Pyrazinamide", "Éthambutol"],
      reponse: 3,
      explication: "L'éthambutol (DEXAMBUTOL®) a une toxicité du nerf optique. CI : névrite optique. Surveillance ophtalmo obligatoire."
    },
    {
      id: 29,
      question: "Le protocole antituberculeux standard dure :",
      options: ["3 mois", "6 mois", "12 mois", "18 mois"],
      reponse: 1,
      explication: "6 mois au total : 2 mois avec 4 ATB (IRPE), puis 4 mois avec 2 ATB (IR). L'observance est essentielle pour éviter les résistances."
    },
    {
      id: 30,
      question: "Quel signe caractéristique est associé à la rifampicine ?",
      options: ["Neuropathies périphériques", "Coloration orange des urines", "Toxicité du nerf optique", "Candidose oropharyngée"],
      reponse: 1,
      explication: "La rifampicine colore en ORANGE les urines et les sécrétions lacrymales (signe bénin mais à prévenir le patient)."
    },
    {
      id: 31,
      question: "Les mucolytiques sont indiqués dans :",
      options: ["La toux sèche", "La toux productive (grasse)", "L'asthme en traitement de fond", "L'insuffisance respiratoire"],
      reponse: 1,
      explication: "Les mucolytiques fluidifient les sécrétions pour faciliter l'expectoration → indiqués dans la toux GRASSE. Jamais associés aux antitussifs."
    },
    {
      id: 32,
      question: "Les antitussifs opiacés (codéine) sont contre-indiqués chez :",
      options: ["Les patients hypertendus", "Les patients asthmatiques", "Les patients diabétiques", "Les patients sous AVK"],
      reponse: 1,
      explication: "Les antitussifs opiacés sont des dépresseurs respiratoires → CI chez les asthmatiques et insuffisants respiratoires."
    },
    {
      id: 33,
      question: "TOPLEXIL® (oxomémazine) est contre-indiqué en cas de :",
      options: ["Diabète de type 2", "Glaucome à angle fermé", "Hypertension artérielle", "Insuffisance rénale"],
      reponse: 1,
      explication: "TOPLEXIL® est un antitussif anticholinergique. Les anticholinergiques sont CI en cas de glaucome à angle fermé et d'adénome prostatique."
    },
    {
      id: 34,
      question: "Pourquoi ne faut-il pas prendre de mucolytique après 16h ?",
      options: ["Risque d'insomnie par excitation du SNC", "Risque d'encombrement bronchique pendant la nuit", "Risque de nausées nocturnes", "Diminution de l'absorption du médicament la nuit"],
      reponse: 1,
      explication: "Les mucolytiques fluidifient le mucus. En position allongée la nuit, l'évacuation par la toux est moins efficace → risque d'encombrement."
    },
    {
      id: 35,
      question: "L'omalizumab (XOLAIR®) est indiqué dans :",
      options: ["L'asthme intermittent", "L'asthme persistant léger", "L'asthme allergique persistant sévère", "La BPCO légère"],
      reponse: 2,
      explication: "XOLAIR® (anti-IgE) est réservé à l'asthme allergique persistant SÉVÈRE (IgE dépendant). PIH, médicament d'exception, toujours en association."
    },
    {
      id: 36,
      question: "Quelle est la fréquence respiratoire correspondant à une tachypnée ?",
      options: ["< 10 cycles/min", "12 cycles/min", "> 25 cycles/min", "20 cycles/min"],
      reponse: 2,
      explication: "Tachypnée > 25 cycles/min. Bradypnée < 10 cycles/min. Normal au repos ≈ 12 cycles/min."
    },
    {
      id: 37,
      question: "La théophylline est un médicament à :",
      options: ["Large marge thérapeutique", "Marge thérapeutique étroite", "Action uniquement locale", "Durée d'action très courte"],
      reponse: 1,
      explication: "La théophylline a une marge thérapeutique ÉTROITE → surveillance de la théophyllinémie indispensable, nombreuses interactions."
    },
    {
      id: 38,
      question: "Le vaccin BCG protège contre :",
      options: ["La pneumonie à pneumocoque", "La grippe", "La tuberculose", "La coqueluche"],
      reponse: 2,
      explication: "Le BCG (Bacille de Calmette et Guérin) est le vaccin antituberculeux. Le dépistage se fait par IDR ou test IGRA."
    },
    {
      id: 39,
      question: "Quel conseil est ESSENTIEL à donner lors de la délivrance de corticoïdes inhalés ?",
      options: ["Prendre avec un grand verre de lait", "Se rincer la bouche après chaque inhalation", "Ne prendre que le matin", "Associer systématiquement à un antitussif"],
      reponse: 1,
      explication: "Le rinçage de la bouche après inhalation de CSI est essentiel pour prévenir la candidose oropharyngée et la dysphonie."
    },
    {
      id: 40,
      question: "La codéine antitussive nécessite :",
      options: ["Aucune prescription particulière", "Une ordonnance sécurisée (max 12 semaines)", "Une PIH", "Un bizone"],
      reponse: 1,
      explication: "Les sirops contenant de la codéine nécessitent une ordonnance sécurisée avec une durée maximale de prescription de 12 semaines."
    },
  ]
};
