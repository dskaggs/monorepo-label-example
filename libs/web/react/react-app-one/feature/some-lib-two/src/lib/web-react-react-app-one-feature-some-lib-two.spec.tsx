import { render } from '@testing-library/react';

import WebReactReactAppOneFeatureSomeLibTwo from './web-react-react-app-one-feature-some-lib-two';

describe('WebReactReactAppOneFeatureSomeLibTwo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebReactReactAppOneFeatureSomeLibTwo />);
    expect(baseElement).toBeTruthy();
  });
});
