export interface DeckNavItem {
  readonly href: string;
  readonly label: string;
}

export interface DeckData {
  readonly title: string;
  readonly css: string;
  readonly navItems: readonly DeckNavItem[];
  readonly navClass?: string;
  readonly slidesHtml: string;
  readonly extraScripts?: string;
}
