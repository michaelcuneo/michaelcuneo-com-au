/**
 * Asynchronously loads the component for HomePage
 */
import loadable from '@loadable/component';

import LoadingIndicator from 'components/LoadingIndicator';

export default loadable(() => import('./index'), {
  LoadingComponent: LoadingIndicator,
});
