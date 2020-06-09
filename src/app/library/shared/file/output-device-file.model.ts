import { Function } from './function.model';
import { Model } from './model.model';
import { OutputDevice } from './output-device.model';
import { Part } from './part.model';
import { Structure } from './structure.model';

export type OutputDeviceFile = (OutputDevice | Model | Structure | Function | Part)[];
