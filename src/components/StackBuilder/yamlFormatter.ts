import { ComponentType, type ComponentTypeLiteral } from './utils';

interface ComponentsToYamlHtmlParams {
  selectedComponentIds: number[];
  components: { componentID: number; componentTypeID: ComponentTypeLiteral; identifier: string; name: string; url: string }[];
}

export const componentsToYamlHtml = ({ selectedComponentIds, components }: ComponentsToYamlHtmlParams) => {
  const items = components.filter((component) => selectedComponentIds.includes(component.componentID));

  const content = document.createElement('pre');

  const createField = ({ name: nameString, content, prefix = '' }: { name: string; content?: string; prefix?: string }) => {
    const field = document.createElement('span');
    field.append(':');
    if (content) field.append(` "${content}"`);

    const name = document.createElement('b');
    name.innerText = nameString;

    field.prepend(name);
    field.prepend(prefix);
    field.append('\n');

    return field;
  };

  const createComponent = (component: ComponentsToYamlHtmlParams['components'][number]) => [
    createField({ name: 'name', content: component.name, prefix: '  - ' }),
    createField({ name: 'identifier', content: component.identifier, prefix: '    ' }),
    createField({ name: 'package', content: `${component.url}#main`, prefix: '    ' }),
  ];

  content.append(createField({ name: 'diploiVersion', content: 'v1.0' }));
  content.append(createField({ name: 'components' }));

  for (const item of items.filter((item) => item.componentTypeID === ComponentType.COMPONENT)) {
    content.append(...createComponent(item));
  }

  content.append(createField({ name: 'addons' }));

  for (const item of items.filter((item) => item.componentTypeID === ComponentType.ADDON)) {
    content.append(...createComponent(item));
  }

  return content;
};
