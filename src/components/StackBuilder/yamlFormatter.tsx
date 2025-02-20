import yaml from '@shikijs/langs/yaml';
import { stringify as stringifyYaml } from 'json-to-pretty-yaml';
import { createHighlighterCore } from 'shiki/core';
import { createOnigurumaEngine } from 'shiki/engine/oniguruma';
import wasm from 'shiki/wasm';

const highlighter = await createHighlighterCore({
  langs: [yaml],
  engine: createOnigurumaEngine(wasm),
  themes: [
    {
      name: 'diploi',
      settings: [
        {
          scope: ['entity'],
          settings: {
            foreground: 'var(--color-secondary)',
          },
        },
        {
          scope: ['string'],
          settings: {
            foreground: 'var(--color-text-secondary)',
          },
        },
      ],
      fg: 'var(--color-text-secondary)',
      bg: 'transparent',
    },
  ],
});

interface ComponentsToYamlHtmlParams {
  selectedComponentIds: number[];
  components: { componentID: number; type: 'component' | 'addon'; identifier: string; name: string; url: string }[];
}

export const componentsToYamlHtml = ({ selectedComponentIds, components }: ComponentsToYamlHtmlParams) => {
  const items = components.filter((component) => selectedComponentIds.includes(component.componentID));

  const config = {
    diploiVersion: 'v1.0' as const,
    template: undefined as string | undefined,
    components: items
      .filter((item) => item.type === 'component')
      .map((item) => ({
        name: item.name,
        identifier: item.identifier,
        package: `${item.url}#main`,
      })),
    addons: items
      .filter((item) => item.type === 'addon')
      .map((item) => ({
        name: item.name,
        identifier: item.identifier,
        package: `${item.url}#main`,
      })),
  };

  return highlighter.codeToHtml(stringifyYaml(config), {
    lang: 'yaml',
    theme: 'diploi',
  });
};
