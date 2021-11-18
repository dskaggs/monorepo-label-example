import { render } from '@testing-library/react';

import WebReactReactAppOneSharedDataAccessSomeApiOne from './web-react-react-app-one-shared-data-access-some-api-one';

describe('WebReactReactAppOneSharedDataAccessSomeApiOne', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <WebReactReactAppOneSharedDataAccessSomeApiOne />
    );
    expect(baseElement).toBeTruthy();
  });
});
