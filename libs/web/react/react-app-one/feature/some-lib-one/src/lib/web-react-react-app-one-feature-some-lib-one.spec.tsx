import { render } from '@testing-library/react';

import WebReactReactAppOneFeatureSomeLibOne from './web-react-react-app-one-feature-some-lib-one';

describe('WebReactReactAppOneFeatureSomeLibOne', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebReactReactAppOneFeatureSomeLibOne />);
    expect(baseElement).toBeTruthy();
  });
});
