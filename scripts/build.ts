import { updateDist } from '@gkd-kit/tools';
import subscription from './check';
import { updateReadMeMd } from '../src/updateMd';

await updateDist(subscription);

await updateReadMeMd();
