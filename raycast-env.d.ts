/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Favicon - Before enable this, you should enable 'View > Developer > Allow JavaScript from Apple Events' in every Sidekick profile. */
  "useOriginalFavicon": boolean,
  /** Open Tab In Profile - When 'Default(classic), the tab will be opened in the profile open, or topmost profile window if multiple windows are open. When 'Current Profile', the tab will be opened in the profile specified in the 'Profile' field. When 'Original Profile' it will open in original profile tab is sourced from */
  "openTabInProfile": "default" | "profile_current" | "profile_original"
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `search-tab` command */
  export type SearchTab = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `search-tab` command */
  export type SearchTab = {}
}


