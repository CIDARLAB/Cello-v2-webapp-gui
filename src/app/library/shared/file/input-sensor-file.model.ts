import { Function } from './function.model';
import { InputSensor } from './input-sensor.model';
import { Model } from './model.model';
import { Part } from './part.model';
import { Structure } from './structure.model';

export type InputSensorFile = (InputSensor | Model | Structure | Function | Part)[];
