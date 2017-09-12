// TRANSLATION INSTRUCTIONS
// * Don't translate locale variables - just their values
//// (i.e. "HAT_SLOT": "<translation here>")
// * Don't translate comments (like these)
// * Don't translate variables (double bracket words) within phrases ("{{value}} HP")
//// Move the variable to where it makes sense in the translation.
// * Try not to make things much longer than necessary
// * Use in-game terms where possible
// * "Distance Units"/"Distance Units per Frame" should always be translated the same way
//// You can call them something different, but make sure it can be abbreviated as a unit!
//// (Distance Units/frame -> DU/f)

var fr_strings = {
  // Gear section
  "HAT_SLOT": "Tête",
  "CLOTHES_SLOT": "Vêtements",
  "SHOES_SLOT": "Chaussures",

  // Stats section
  "STATS_HEADER": "Stats",
  "INACCURATE_DISCLAIMER": "La stat est imprécise à cause d'un manque de données.",
  "BOMB_HEADER": "Dégâts de bombe",
  // Will be used in tables - keep these short
  "BOMB_TABLE_BOMB": "Bombe",
  "TABLE_DIRECT": "Direct",
  "TABLE_NEAR": "Proche",
  "TABLE_FAR": "Eloigné",
  "TABLE_HIT": "Hit",
  "SPECIAL_HEADER": "Dégâts Speciaux",
  "SPECIAL_TABLE_SPECIAL": "Special",

  // Footer
  "FOOTER_COPYRIGHT": "Splatoon et tous les copyrights et contenus présents sur cette page sont la propriété de Nintendo.",
  "FOOTER_ABOUT": "À propos",

  // Misc. Strings
  "UNAVAILABLE": "Non disponible",
  "UNRELEASED": "Non publié",
  //// Will be used in tables - keep these short
  "KID_FORM": "Enfant",
  "SQUID_FORM": "Calamar",

  // Popup headers/buttons
  "UI_WEAPON_PICKER": "Choix d'arme",
  "UI_GEAR_PICKER": "Choix d'équipement",
  "UI_ABOUT": "À propos",
  "UI_CHANGELOG": "Quoi de neuf ?",
  "UI_OK": "OK",
  "UI_CANCEL": "Annuler",
  "UI_CONFIRM_CASUAL": "J'ai compris !",

  // Tooltips for utility buttons
  "UI_COPY_LINK": "Copier le lien",
  "UI_SCREENSHOT_MODE": "Passer en mode capture d'écran",
  "UI_CLEAR_ABILITIES": "Nettoyer les compétences",
  "UI_CLEAR_ALL": "Tout nettoyer",
  // Tooltips for special icons
  "UI_NONSTANDARD_SPLATNET": "Non-standard. Seulement sur SplatNet",
  "UI_NOT_POSSIBLE": "Impossible avec le principal sélectionné",

  // Stats - these appear over the stat bars.
  // If there is an asterisk (*), leave it in after the stat name.
  "STAT_SWIM_SPEED": "Vitesse de nage",
  "STAT_RUN_SPEED": "Vitesse à pieds",
  "STAT_RUN_SPEED_RESIST": "Vitesse à pieds (Encre ennemie)",
  "STAT_RUN_SPEED_FIRING": "Vitesse à pieds (Tir)",
  "STAT_RUN_SPEED_ROLLING": "Vitesse à pieds (Roulade)",
  "STAT_RECOVERY_SQUID": "Vitesse de recharge d'encre (Calamar)",
  "STAT_RECOVERY_KID": "Vitesse de recharge d'encre (Enfant)",
  "STAT_SAVER_MAIN": "Consommation d'encre (Principal)",
  "STAT_SAVER_SUB": "Consommation d'encre (Secondaire)",
  "STAT_SPECIAL_CHARGE": "Vitesse de charge du spécial",
  "STAT_SPECIAL_SAVER": "Special sauvé *",
  "STAT_SPECIAL_POWER": "Arme spéciale",
  "STAT_SPECIAL_POWER_UNKNOWN": "Arme spéciale (???)",
  "STAT_SPECIAL_POWER_DURATION": "Arme spéciale (Durée)",
  "STAT_SPECIAL_POWER_BALLER": "Arme spéciale (PV de la Chromo-sphère)",
  "STAT_SPECIAL_POWER_TENTA": "Arme spéciale (Taille du viseur)",
  "STAT_SPECIAL_POWER_SPLASHDOWN": "Arme spéciale (Diamètre du splash)",
  "STAT_SPECIAL_POWER_BUBBLE": "Arme spéciale (Rayon de la bulle)",
  "STAT_SUB_POWER": "Pouvoir secondaire",
  "STAT_SUB_POWER_RANGE": "Pouvoir secondaire (Portée de la bombe)",
  "STAT_SUB_POWER_CURLING": "Pouvoir secondaire (Vitesse de la bombe)",
  "STAT_SUB_POWER_MINE": "Pouvoir secondaire (Rayon de la mine)",
  "STAT_SUB_POWER_WALL": "Pouvoir secondaire (PV du mur)",
  "STAT_SUB_POWER_SPRINKLER": "Pouvoir secondaire (Durée puissance max)",
  "STAT_SUB_POWER_BEAKON": "Pouvoir secondaire (Vitesse de saut au à la balise)",
  "STAT_JUMP_SQUID": "Temps de super saut (Calamar)",
  "STAT_JUMP_KID": "Temps de super saut (Enfant)",
  "STAT_QUICK_RESPAWN": "Temps de réapparition",
  "STAT_QUICK_RESPAWN_PUNISHER": "Temps de réapparition *",
  "STAT_TRACKING_TIME": "Temps de détection",

  // Labels that go on the stat bars themselves. Keep these SHORT!
  "LABEL_DISTANCE_PER_FRAME": "{{value}} DU/f",
  "LABEL_PERCENT": "{{value}}%",
  // LABEL_MAIN_COST is combined with "SHOT_UNIT" values below
  "LABEL_MAIN_COST": "{{value}}% réservoir/{{unit}}",
  "LABEL_SUB_COST": "{{value}}% réservoir",
  "LABEL_TIME": "{{value}}s",
  "LABEL_HP": "{{value}} PV",

  // Tooltips for stats
  "DESC_PUNISHER_DISCLAIMER": "Les effets du Retour Perdant ne sont pas bien compris.",
  "DESC_TRACKING": "Durée du détecteur/mine",
  "DESC_RECOVERY_TIME": "{{value}}s de vide à plein",
  "DESC_MAIN_COST": "{{totalShots}} pour vider ({{reduction}}% reduction)",
  "DESC_SUB_COST": "{{reduction}}% réduction",
  "DESC_SPECIAL_COST": "{{value}}p pour le spécial",
  "DESC_DISTANCE": "{{value}} Unités de distance",
  "DESC_QUICK_RESPAWN": "Respawn time when splatted without splatting others.",
  "UNIT_DISTANCE_UNITS_PER_FRAME": "Unités de distance/frame",

  // The "unit" weapons fire in
  // Used in phrases like "200 shots to empty"
  "SHOT_UNIT_SHOT": "coup",
  "SHOT_UNIT_SHOT_PLURAL": "coups",
  "SHOT_UNIT_FLICK": "flick",
  "SHOT_UNIT_FLICK_PLURAL": "flicks",
  "SHOT_UNIT_FLICK_HORIZ": "flick horizontal",
  "SHOT_UNIT_FLICK_HORIZ_PLURAL": "flicks horizontaux",
  "SHOT_UNIT_FLICK_VERT": "flick vertical",
  "SHOT_UNIT_FLICK_VERT_PLURAL": "flicks verticaux",
  "SHOT_UNIT_SLOSHER": "slosh",
  "SHOT_UNIT_SLOSHER_PLURAL": "sloshes",
  "SHOT_UNIT_CHARGER": "pleine charge",
  "SHOT_UNIT_CHARGER_PLURAL": "pleines charges",

  // Future feature - ink breakdown
  //// Combined with SHOT_UNIT
  "INK_BREAKDOWN_SHOTS_AFTER_SUB": "{{unitPlural}} après secondaire: {{value}}",
  "INK_BREAKDOWN_TOTAL_SHOTS": "{{value}} pour vider",
  "INK_BREAKDOWN_INK_PER_SHOT": "{{value}}/{{unit}}",
  "INK_BREAKDOWN_INK_PER_SECOND": "{{value}}/seconde",
  "INK_BREAKDOWN_RECOVERY": "Temps de récupération total",

  // Future feature - Comeback/Tenacity/
  "HEADER_WITH_ABILITY": "{{ability}} Stats",

  // Future feature - a few explanations
  "UI_DISTANCE_EXPLANATION": "Unités de distance par Frame est une mesure de la vitesse dans le jeu.",
  "UI_DISTANCE_EQUIVALENT": "Chaque ligne dans le stand de tir est espacé de 50 unités de distance.",
  "UI_FRAMES_EXPLANATION": "Une seconde équivaut à 60 frames.",

  // Future feature - options
  "UI_OPTIONS": "Options",
  "UI_ENABLE_UNRELEASED": "Activer les armes non-publiées",
  "UI_UNRELEASED_DISCLAIMER": "Les statistiques pour les armes non-publiées pourraient ne pas être exactes.",
  "UI_UNRELEASED_WEAPONS": "Armes non publiées",
  // Future feature - gear tabs
  "UI_SPLATNET_GEAR": "Équipement SplatNet",
  "UI_STANDARD_GEAR": "Équipement standard",
  "UI_UNRELEASED_GEAR": "Équipement non publié",
  // Future feature - set saving
  "UI_LOADOUT": "Loadout",
  "UI_SAVE_LOADOUT": "Sauver le Loadout",
  "UI_LOAD_LOADOUT": "Charger un Loadout",
  "UI_SAVE": "Sauver",
  "UI_LOAD": "Charger",
  "UI_NAME": "Nom",
  "UI_ENTER_NAME": "Entrer un nom pour ce Loadout:",
  "UI_ERROR_NAME_TOO_LONG": "Le nom ne doit pas dépasser 20 caractères.",
  "UI_ERROR_DUPLICATE_NAME": "Un loaded avec ce nom existe déjà.",
  "UI_ERROR_INVALID_NAME": "Merci de choisir un autre nom.",
  "UI_DELETE_LOADOUT": "Supprimer le Loadout",
  "UI_DELETE": "Supprimer",
  "UI_VERIFY": "Êtes-vous sûr?",
  "UI_SAVED_LOADOUTS": "Loadouts sauvés",
  "UI_DELETE_ALL": "Supprimer tous les Loadouts",

    "SHELDON_RANGE": "Portée",
    "SHELDON_FIRE_RATE": "Cadence",
    "SHELDON_CHARGE_SPEED": "Vitesse de charge",
    "SHELDON_DURABILITY": "Résistance",
    "SHELDON_IMPACT": "Explosion",
    "SHELDON_MOBILITY": "Mobilité",
    "SHELDON_INK_SPEED": "Vitesse d'encrage",
    "SHELDON_DAMAGE": "Dégâts",
    "SHELDON_HANDLING": "Légèreté",

  // This goes in the "about" popup.
  /// Leave the HTML tags alone.
  "UI_ABOUT_CONTENT": `Construit principalement avec AngularJS 1.6.5 et Bootstrap 3.<br><br>
  Cet outil a été développé en utilisant des informations et des contenus récupérés par <a href="https://twitter.com/LeanYoshi" target="_blank">Lean</a>, ainsi que des informations fournies par de nombreux membres d'Inkademy et des serveurs Splatoon Developers sur Discord.
  <br><br>Merci à tous pour l'aide et les doonées !<br><br>
  Beaucoup de formules utilisées peuvent être trouvées sur <a href="https://splatoonwiki.org/wiki/User:Heddy/Charts" target="_blank">Heddy's charts</a> sur Inkipedia.<br><br>
  Tout suggestion de fonctionnalités, rapport de bug, et retour peuvent-être laissés comme tikets sur la page <a href="https://github.com/DeviPotato/splat2-calc" target="_blank">GitHub</a> du projet. <br>
  Vous pouvez également me contacter sur le <a href="https://twitter.com/loadout_ink" target="_blank">twitter</a> du projet.`
}
