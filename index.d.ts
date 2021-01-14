export = AtomMaterialIcons;
export as namespace AtomMaterialIcons;

declare module '*.svg' {
  const content: any;
  export default content;
}

declare namespace AtomMaterialIcons {
  interface Association {
    fileNames: string;
    name: string;
    pattern: string;
    color: string;
    icon: string;
  }

  function getAssociation(name: string): Association;

  function getFileIconName(assoc: Association): string;

  function getFileIcon(iconName: string): any;

  function getFileIconFromName(name: string): any;

  function getFolderAssociation(name: string): Association;

  function getFolderIconName(assoc: Association): string;

  function getFolderIcon(iconName: string): any;

  function getFolderIconFromName(name: string): any;
}
