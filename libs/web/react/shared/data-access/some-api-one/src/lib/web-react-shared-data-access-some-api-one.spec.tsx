import { render } from '@testing-library/react';

import WebReactSharedDataAccessSomeApiOne from './web-react-shared-data-access-some-api-one';

describe('WebReactSharedDataAccessSomeApiOne', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebReactSharedDataAccessSomeApiOne />);
    expect(baseElement).toBeTruthy();
  });
});
