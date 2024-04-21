import categories from './categories';
import globalGroups from './globalGroups';
import apps from './rawApps';
import { RawSubscription } from '@gkd-kit/api';

const subsConfig: RawSubscription = {
  id: 114514,
  version: 0,
  name: '田所浩二的GKD订阅',
  author: '田所浩二',
  supportUri: 'https://github.com/gkd-sub-repo/114514_subscription/issues',
  checkUpdateUrl: './114514_gkd.version.json',
  globalGroups,
  categories,
  apps,
};

export default subsConfig;
