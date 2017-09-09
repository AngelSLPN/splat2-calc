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

var en_strings = {
  // Gear section
  "HAT_SLOT": "Head",
  "CLOTHES_SLOT": "Clothes",
  "SHOES_SLOT": "Shoes",

  // Stats section
  "STATS_HEADER": "Stats",
  "INACCURATE_DISCLAIMER": "Stat is inaccurate due to lack of data.",
  "BOMB_HEADER": "Bomb Damage",
  // Will be used in tables - keep these short
  "BOMB_TABLE_BOMB": "Bomb",
  "TABLE_DIRECT": "Direct",
  "TABLE_NEAR": "Near",
  "TABLE_FAR": "Far",
  "TABLE_HIT": "Hit",
  "SPECIAL_HEADER": "Special Damage",
  "SPECIAL_TABLE_SPECIAL": "Special",

  // Footer
  "FOOTER_COPYRIGHT": "Splatoon and all related copyrights/assets used on this page are the property of Nintendo.",
  "FOOTER_ABOUT": "about",

  // Misc. Strings
  "UNAVAILABLE": "Unavailable",
  "UNRELEASED": "Unreleased",
  //// Will be used in tables - keep these short
  "KID_FORM": "Kid",
  "SQUID_FORM": "Squid",

  // Popup headers/buttons
  "UI_WEAPON_PICKER": "Weapon Picker",
  "UI_GEAR_PICKER": "Gear Picker",
  "UI_ABOUT": "About",
  "UI_CHANGELOG": "What's New?",
  "UI_OK": "OK",
  "UI_CANCEL": "Cancel",
  "UI_CONFIRM_CASUAL": "Got it!",

  // Tooltips for utility buttons
  "UI_COPY_LINK": "Copy Link",
  "UI_SCREENSHOT_MODE": "Toggle Screenshot Mode",
  "UI_CLEAR_ABILITIES": "Clear Abilities",
  "UI_CLEAR_ALL": "Clear All",
  // Tooltips for special icons
  "UI_NONSTANDARD_SPLATNET": "Non-standard. Only on SplatNet",
  "UI_NOT_POSSIBLE": "Not possible with selected main",

  // Stats - these appear over the stat bars.
  // If there is an asterisk (*), leave it in after the stat name.
  "STAT_SWIM_SPEED": "Swim Speed",
  "STAT_RUN_SPEED": "Run Speed",
  "STAT_RUN_SPEED_RESIST": "Run Speed (Enemy Ink)",
  "STAT_RUN_SPEED_FIRING": "Run Speed (Firing)",
  "STAT_RUN_SPEED_ROLLING": "Run Speed (Rolling)",
  "STAT_RECOVERY_SQUID": "Ink Recovery Speed (Squid)",
  "STAT_RECOVERY_KID": "Ink Recovery Speed (Kid)",
  "STAT_SAVER_MAIN": "Ink Consumption (Main)",
  "STAT_SAVER_SUB": "Ink Consumption (Sub)",
  "STAT_SPECIAL_CHARGE": "Special Charge Speed",
  "STAT_SPECIAL_SAVER": "Special Saved *",
  "STAT_SPECIAL_POWER": "Special Power",
  "STAT_SPECIAL_POWER_UNKNOWN": "Special Power (???)",
  "STAT_SPECIAL_POWER_DURATION": "Special Power (Duration)",
  "STAT_SPECIAL_POWER_BALLER": "Special Power (Baller HP)",
  "STAT_SPECIAL_POWER_TENTA": "Special Power (Reticule Size)",
  "STAT_SPECIAL_POWER_SPLASHDOWN": "Special Power (Splash Diameter)",
  "STAT_SPECIAL_POWER_BUBBLE": "Special Power (Bubble Radius)",
  "STAT_SUB_POWER": "Sub Power",
  "STAT_SUB_POWER_RANGE": "Sub Power (Bomb Range)",
  "STAT_SUB_POWER_CURLING": "Sub Power (Bomb Speed)",
  "STAT_SUB_POWER_MINE": "Sub Power (Mine Radius)",
  "STAT_SUB_POWER_WALL": "Sub Power (Wall HP)",
  "STAT_SUB_POWER_SPRINKLER": "Sub Power (Full-Power Duration)",
  "STAT_SUB_POWER_BEAKON": "Sub Power (Jump Speed to Beakon)",
  "STAT_JUMP_SQUID": "Super Jump Time (Squid)",
  "STAT_JUMP_KID": "Super Jump Time (Kid)",
  "STAT_QUICK_RESPAWN": "Quick Respawn Time",
  "STAT_QUICK_RESPAWN_PUNISHER": "Quick Respawn Time *",
  "STAT_TRACKING_TIME": "Tracking Time",

  // Labels that go on the stat bars themselves. Keep these SHORT!
  "LABEL_DISTANCE_PER_FRAME": "{{value}} DU/f",
  "LABEL_PERCENT": "{{value}}%",
  // LABEL_MAIN_COST is combined with "SHOT_UNIT" values below
  "LABEL_MAIN_COST": "{{value}}% tank/{{unit}}",
  "LABEL_SUB_COST": "{{value}}% tank",
  "LABEL_TIME": "{{value}}s",
  "LABEL_HP": "{{value}} HP",

  // Tooltips for stats
  "DESC_PUNISHER_DISCLAIMER": "Effects with Respawn Punisher aren't fully understood.",
  "DESC_TRACKING": "Point Sensor/Ink Mine duration",
  "DESC_RECOVERY_TIME": "{{value}}s from empty to full",
  "DESC_MAIN_COST": "{{totalShots}} to empty ({{reduction}}% reduction)",
  "DESC_SUB_COST": "{{reduction}}% reduction",
  "DESC_SPECIAL_COST": "{{value}}p for special",
  "DESC_DISTANCE": "{{value}} Distance Units",
  "DESC_QUICK_RESPAWN": "Respawn time when splatted without splatting others.",
  "UNIT_DISTANCE_UNITS_PER_FRAME": "Distance Units/frame",

  // The "unit" weapons fire in
  // Used in phrases like "200 shots to empty"
  "SHOT_UNIT_SHOT": "shot",
  "SHOT_UNIT_SHOT_PLURAL": "shots",
  "SHOT_UNIT_FLICK": "flick",
  "SHOT_UNIT_FLICK_PLURAL": "flicks",
  "SHOT_UNIT_FLICK_HORIZ": "horizontal flick",
  "SHOT_UNIT_FLICK_HORIZ_PLURAL": "horizontal flicks",
  "SHOT_UNIT_FLICK_VERT": "vertical flick",
  "SHOT_UNIT_FLICK_VERT_PLURAL": "vertical flicks",
  "SHOT_UNIT_SLOSHER": "slosh",
  "SHOT_UNIT_SLOSHER_PLURAL": "sloshes",
  "SHOT_UNIT_CHARGER": "full charge",
  "SHOT_UNIT_CHARGER_PLURAL": "full charges",

  // Future feature - ink breakdown
  //// Combined with SHOT_UNIT
  "INK_BREAKDOWN_SHOTS_AFTER_SUB": "{{unitPlural}} after sub: {{value}}",
  "INK_BREAKDOWN_TOTAL_SHOTS": "{{value}} to empty",
  "INK_BREAKDOWN_INK_PER_SHOT": "{{value}}/{{unit}}",
  "INK_BREAKDOWN_INK_PER_SECOND": "{{value}}/second",
  "INK_BREAKDOWN_RECOVERY": "Full Recovery Time",

  // Future feature - Comeback/Tenacity/
  "HEADER_WITH_ABILITY": "{{ability}} Stats",

  // Future feature - a few explanations
  "UI_DISTANCE_EXPLANATION": "Distance Units per Frame is a measurement of speed in-game.",
  "UI_DISTANCE_EQUIVALENT": "Each line in the testing area is 50 Distance Units apart.",
  "UI_FRAMES_EXPLANATION": "One second is 60 frames.",

  // Future feature - options
  "UI_OPTIONS": "Options",
  "UI_ENABLE_UNRELEASED": "Enable Unreleased Weapons",
  "UI_UNRELEASED_DISCLAIMER": "Stats for unreleased weapons may not be accurate.",
  "UI_UNRELEASED_WEAPONS": "Unreleased Weapons",
  // Future feature - gear tabs
  "UI_SPLATNET_GEAR": "SplatNet Gear",
  "UI_STANDARD_GEAR": "Standard Gear",
  "UI_UNRELEASED_GEAR": "Unreleased Gear",
  // Future feature - set saving
  "UI_LOADOUT": "Loadout",
  "UI_SAVE_LOADOUT": "Save Loadout",
  "UI_LOAD_LOADOUT": "Load Loadout",
  "UI_SAVE": "Save",
  "UI_LOAD": "Load",
  "UI_NAME": "Name",
  "UI_ENTER_NAME": "Enter a name for this loadout:",
  "UI_ERROR_NAME_TOO_LONG": "Name must be shorter than 20 characters.",
  "UI_ERROR_DUPLICATE_NAME": "You already have a loadout with this name.",
  "UI_ERROR_INVALID_NAME": "Please pick a different name.",
  "UI_DELETE_LOADOUT": "Delete Loadout",
  "UI_DELETE": "Delete",
  "UI_VERIFY": "Are you sure?",
  "UI_SAVED_LOADOUTS": "Saved Loadouts",
  "UI_DELETE_ALL": "Delete All Loadouts",

  // This goes in the "about" popup.
  /// Leave the HTML tags alone.
  "UI_ABOUT_CONTENT": `Built primarily with AngularJS 1.6.5 and Bootstrap 3.<br><br>
  This tool was developed using info and assets datamined by <a href="https://twitter.com/LeanYoshi" target="_blank">Lean</a>, as well as information provided by several members of the Inkademy and Splatoon Developers servers on Discord.
  <br><br>Thanks to everyone who gave me help and data!<br><br>
  Many of the formulas used can be seen on <a href="https://splatoonwiki.org/wiki/User:Heddy/Charts" target="_blank">Heddy's charts</a> on Inkipedia.<br><br>
  Any feature suggestions, bug reports, and feedback can be left as issues on the project's <a href="https://github.com/DeviPotato/splat2-calc" target="_blank">GitHub</a>. <br>
  You can also reach me on the project's <a href="https://twitter.com/loadout_ink" target="_blank">twitter</a>.`
}
