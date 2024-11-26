import React, {useState} from "react";
import "./style.scss";
import { IoIosArrowDown } from "react-icons/io";
import { useAppDispatch, useAppSelector } from "../../hook";
import { updateDevices } from "../../store/slices/appSlice";
import { DeviceData } from "../../constants/types";

const Device: React.FC = () => {

  const dispatch = useAppDispatch();
  const devices = useAppSelector(state => state.app.devices);

  const handleDeviceDetails = (value: string | boolean | File, fieldName: string, index: number) => {
    const currentDevices = [...devices];
    currentDevices[index] = {
      ...currentDevices[index],
      [fieldName]: value,
    };
    dispatch(updateDevices(currentDevices));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        handleDeviceDetails(reader.result as string, 'img', index);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="device-section">
        <div className="step-selection">
          <div className={`step-links`}>
            <span>Device</span>
            <IoIosArrowDown />
          </div>
        </div>
        <div className="device-header">
          <h2>Device management</h2>
          <span>
            Add details of the device. If none, then continue to next step.
          </span>
        </div>
        {devices?.map(
          (
            { deviceName, type, serialNumber, img, bringOwnDevice }: DeviceData,
            index: number
          ) => (
            <div className="device-body" key={index}>
              <h3 className="plan-heading">{deviceName}</h3>
              <div className="device-flex">
                <div className="device-content">
                  <div className="device-type">
                    <span>Device type</span>
                    <h6>{type}</h6>
                  </div>

                  <div className="device-type">
                    <span>serial number</span>
                    <input
                      type="text"
                      placeholder="Enter the serial number of the device"
                      value={serialNumber}
                      onChange={(event) =>
                        handleDeviceDetails(
                          event.target.value,
                          "serialNumber",
                          index
                        )
                      }
                    />
                  </div>
                </div>

                <div className="device-content">
                  <div className="device-type ">
                    <div>
                      <div className="bring-device">
                        <h5>Bringing your own device</h5>
                        <label className="switch">
                          <input
                            type="checkbox"
                            checked={bringOwnDevice}
                            onChange={(event) =>
                              handleDeviceDetails(
                                event.target.checked,
                                "bringOwnDevice",
                                index
                              )
                            }
                          />
                          <span className="slider round"></span>
                        </label>
                      </div>
                      <p>
                        Toggle this on if youre bringing your own device. Leave
                        it off if Drive mate is to provide the device.
                      </p>
                    </div>
                  </div>
                  <div className="device-type">
                    <span>upload an image of the device</span>
                    <div className="device-upload">
                      <input
                        type="file"
                        onChange={(event) => handleImageUpload(event, index)}
                      />
                      {img === "" ? (
                        <span>Click to upload</span>
                      ) : (
                        <img
                          src={img}
                          alt="Device"
                          className="uploaded-image"
                          height={"100px"}
                          width={"150px"}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};
export default Device;
