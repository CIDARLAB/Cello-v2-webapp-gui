import { InputSensorFileDescriptor } from './input-sensor-file.model';
import { OutputDeviceFile } from './output-device-file.model';
import { UserConstraintsFileDescriptor } from './user-constraints-file.model';

export class TargetDataFiles {
  userConstraintsFile: UserConstraintsFileDescriptor;
  inputSensorFile: InputSensorFileDescriptor;
  outputDeviceFile: OutputDeviceFile;
}
