import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators';
import { ISearchFilter } from '@/models';

@Module({ name: 'searchFilter', namespaced: true, stateFactory: true })
class SearchFilterModule extends VuexModule {
  // @State
  searchFilter: ISearchFilter = {
    searchText: '',
    ascending: {
      cost: null,
      name: null,
    },
  };

  get getSearchFilter(): ISearchFilter {
    return this.searchFilter;
  }

  @Mutation
  setSearchInfoText(searchText: ISearchFilter['searchText']) {
    this.searchFilter.searchText = searchText;

    console.log('##state.setSearchInfoText##', this.searchFilter.searchText);
  }

  @Mutation
  setSearchInfoAscending(ascending: ISearchFilter['ascending']) {
    const result = { ...this.searchFilter.ascending, ...ascending };

    this.searchFilter.ascending = { ...result };

    console.log('##state.searchInfo.ascending##', this.searchFilter.ascending);
  }

  @Action({ commit: 'setSearchInfoText' })
  SET_SEARCH_INFO_TEXT(searchText: ISearchFilter['searchText']) {
    return searchText;
  }

  @Action({ commit: 'setSearchInfoAscending' })
  SET_SEARCH_INFO_ASCENDING(ascending: ISearchFilter['ascending']) {
    console.log('action payload', ascending);
    return ascending;
  }
}

export default SearchFilterModule;
