import { mount } from '@vue/test-utils';
import titleComponent from '../src/components/common/content-title';

describe('# 컴포넌트 테스트 : ', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(titleComponent);
  });
  it('# content title Component define:', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
