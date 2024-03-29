import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}

// Ahora agregamos estilos CSS para establecer la imagen de fondo atenuada
const styles = `
  body {
    /* Ruta a tu imagen de fondo */
    background-image: url('https://eldiariony.com/wp-content/uploads/sites/2/2021/04/milagro-movimiento-jesucristo-shutterstock_1034080006.jpg?w=2600');
    background-size: cover;
    background-position: center;
    /* Añadimos una capa semi-transparente encima de la imagen de fondo */
    position: relative;
  }

  /* Capa semi-transparente */
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Color negro con 50% de opacidad */
    pointer-events: none; /* Permite interactuar con elementos debajo de la capa */
  }
`;

// Agregamos los estilos al head de la página
document.head.insertAdjacentHTML('beforeend', `<style>${styles}</style>`);

// Agregamos una capa semi-transparente al cuerpo de la página
document.body.insertAdjacentHTML('beforeend', '<div class="overlay"></div>');
