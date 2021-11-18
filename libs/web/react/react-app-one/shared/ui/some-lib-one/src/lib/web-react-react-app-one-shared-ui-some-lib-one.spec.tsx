import { render } from '@testing-library/react';

import WebReactReactAppOneSharedUiSomeLibOne from './web-react-react-app-one-shared-ui-some-lib-one';

describe('WebReactReactAppOneSharedUiSomeLibOne', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebReactReactAppOneSharedUiSomeLibOne />);
    expect(baseElement).toBeTruthy();
  });
});
