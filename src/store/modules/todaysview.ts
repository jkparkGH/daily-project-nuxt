import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';

interface todaysViewData {
  uid: number;
  imageURL: string;
}

const LOCAL_STORAGE_TODAYS_VIEWS = 'beautyHouseTodaysViews';

@Module({
  name: 'todaysview',
  namespaced: true,
  stateFactory: true,
})
class TodaysViewModule extends VuexModule {
  // @State
  isTodaysViewInit = false;
  // todaysViewList: todaysViewData[] = [];
  todaysView: { list: todaysViewData[] } = { list: [] };

  get getTodaysView() {
    return this.todaysView;
  }

  @Mutation
  initTodaysViewList() {
    if (!this.isTodaysViewInit && localStorage?.getItem(LOCAL_STORAGE_TODAYS_VIEWS)) {
      this.isTodaysViewInit = true;
      this.todaysView.list = [
        ...JSON.parse(localStorage?.getItem(LOCAL_STORAGE_TODAYS_VIEWS) as string),
      ];

      console.log('## initTodaysViewList.todaysViewList ##', this.todaysView.list);
    }
  }

  @Mutation
  setTodaysViewList(currentView: todaysViewData) {
    if (!this.todaysView.list.some((data: todaysViewData) => data.uid === currentView.uid)) {
      this.todaysView.list.push({ uid: currentView.uid, imageURL: currentView.imageURL });
    }
  }

  @Mutation
  setTodaysViewListStorage() {
    localStorage?.setItem(LOCAL_STORAGE_TODAYS_VIEWS, JSON.stringify(this.todaysView.list));
  }

  @Action({ commit: 'initTodaysViewList' })
  INIT_TODAYS_VIEW_LIST() {
    // TODO: fix -> Action을 사용하고싶은데, commit만 호출하는 Action은 Error를 반환하는상태
    return false;
  }

  @Action({ commit: 'setTodaysViewList' })
  ADD_TODAYS_VIEW_LIST(currentView: todaysViewData) {
    // TODO: fix -> Action을 사용하고싶은데, commit만 호출하는 Action은 Error를 반환하는상태
    return currentView;
  }

  @Action({ commit: 'setTodaysViewListStorage' })
  ADD_TODAYS_VIEW_LIST_STORAGE() {
    // TODO: fix -> Action을 사용하고싶은데, commit만 호출하는 Action은 Error를 반환하는상태
    return false;
  }
}

export default TodaysViewModule;
