import { mount } from '@vue/test-utils';
import titleComponent from './content-title.vue';

describe('# 컴포넌트 테스트 near component : ', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(titleComponent);
  });
  it('# content title Component define:', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
