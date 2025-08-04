import type { SelectItem } from "@/types/select";
import { Adapt, Select } from "tamagui";

type Props = { items: SelectItem[] };

export const SelectCustom = ({ items }: Props) => (
  <Select defaultValue="">
    <Select.Trigger>
      <Select.Value placeholder="Search…" />
    </Select.Trigger>

    <Adapt platform="touch">
      <Select.Sheet modal snapPointsMode="fit" dismissOnSnapToBottom>
        <Select.Sheet.Frame>
          <Adapt.Contents />
        </Select.Sheet.Frame>
        <Select.Sheet.Overlay opacity={0.3} />
      </Select.Sheet>
    </Adapt>

    <Select.Content>
      <Select.ScrollUpButton />
      <Select.Viewport>
        <Select.Group>
          {items.map((item, i) => (
            <Select.Item key={item.id} value={item.id} index={i}>
              <Select.ItemText>{item.label}</Select.ItemText>
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Viewport>
      <Select.ScrollDownButton />
    </Select.Content>
  </Select>
);
