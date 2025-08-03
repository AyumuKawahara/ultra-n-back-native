import { Select } from "tamagui";

export const SelectNumOfQuestions = () => (
  <Select defaultValue="">
    <Select.Trigger>
      <Select.Value placeholder="問題数を選択" />
    </Select.Trigger>
    <Select.FocusScope loop trapped focusOnIdle={true}>
      <Select.Content>
        <Select.ScrollUpButton />
        <Select.Viewport>
          <Select.Group>
            <Select.Label />
            <Select.Item value="10" index={0}>
              <Select.ItemText>10</Select.ItemText>
            </Select.Item>
          </Select.Group>
        </Select.Viewport>
        <Select.ScrollDownButton />
      </Select.Content>
    </Select.FocusScope>
  </Select>
);
