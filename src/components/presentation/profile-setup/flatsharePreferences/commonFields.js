import React from 'react'
import {Form, Input, InputNumber} from 'antd'
import WrappedAnyInput from "../../../common/form/wrappedAnyInput";
import WrappedSelection from "../../../common/form/wrappedSelection";
import Regions from "../../../../util/regions";
import {flatshareType, rentType} from "../../../../util/selections";

const Item = Form.Item;

export const RegionSelection = ({decorator}) => (
  <Item label="Regions">
    <WrappedSelection
      placeHolder="Please select"
      type="multiple"
      dec={decorator}
      objName="preferences.flat.regions"
      value={Regions}
    />
  </Item>
);

export const TypeOfRentSelection = ({decorator}) => (
  <Item label="Type of rent">
    <WrappedSelection
      placeHolder="Please select"
      dec={decorator}
      objName="preferences.flat.room.rentType"
      value={rentType}
    />
  </Item>
);

export const TypeOfFlatshareSelection = ({decorator}) => (
  <Item label="Type of flatshare">
    <WrappedSelection
      tag="multiple"
      placeHolder="Please select"
      dec={decorator}
      objName="preferences.flat.flatshareType"
      value={flatshareType}
    />
  </Item>
);

