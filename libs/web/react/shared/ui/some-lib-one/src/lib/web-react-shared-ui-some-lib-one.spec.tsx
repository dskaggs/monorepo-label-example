import { render } from '@testing-library/react';

import WebReactSharedUiSomeLibOne from './web-react-shared-ui-some-lib-one';

describe('WebReactSharedUiSomeLibOne', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebReactSharedUiSomeLibOne />);
    expect(baseElement).toBeTruthy();
  });
});
