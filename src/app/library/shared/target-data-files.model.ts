import { InputSensorFileDescriptor } from './input-sensor-file-descriptor.model';
import { OutputDeviceFileDescriptor } from './output-device-file-descriptor.model';
import { UserConstraintsFileDescriptor } from './user-constraints-file-descriptor.model';

export class TargetDataFiles {
  userConstraintsFile: string;
  inputSensorFile: string;
  outputDeviceFile: string;
}
