import { InputSensorFile } from './input-sensor-file.model';
import { OutputDeviceFile } from './output-device-file.model';
import { UserConstraintsFile } from './user-constraints-file.model';

export class TargetDataFiles {
  userConstraintsFile: UserConstraintsFile;
  inputSensorFile: InputSensorFile;
  outputDeviceFile: OutputDeviceFile;
}
