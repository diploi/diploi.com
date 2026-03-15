import { createHighlighter, type Highlighter } from 'shiki';

let highlighter: Highlighter | null = null;

export async function getHighlighter(lang: string): Promise<Highlighter> {
  if (!highlighter) {
    highlighter = await createHighlighter({
      themes: ['github-dark'],
      langs: [lang],
    });
  }

  const loadedLangs = highlighter.getLoadedLanguages();
  if (!loadedLangs.includes(lang)) {
    await highlighter.loadLanguage(lang as Parameters<Highlighter['loadLanguage']>[0]);
  }

  return highlighter;
}
