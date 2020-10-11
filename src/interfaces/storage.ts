export interface IStorage {
  add: (id: string, data: object) => void;
  remove: (id: string) => void;
  getAll: () => Map<string, object>;
}
