export interface IPipe {
  name: string;
  format: string;
}

export interface MetadataTable {
  field: string;
  title: string;
  pipe: IPipe;
}
