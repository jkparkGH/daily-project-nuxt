export interface ISearchFilter {
  searchText: string;
  ascending: {
    cost: boolean | null;
    name: boolean | null;
  };
}
