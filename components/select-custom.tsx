import type { SelectItem } from "@/types/select";
import { Ionicons } from "@expo/vector-icons";
import { Adapt, Select } from "tamagui";

type Props = {
  items: SelectItem[];
  value: string;
  onChange: (value: string) => void;
};

export const SelectCustom = ({ items, value, onChange }: Props) => (
  <Select value={value} onValueChange={onChange}>
    <Select.Trigger height={75} backgroundColor="#2F3338" borderColor="#1E90FF">
      <Select.Value placeholder="Search…" color="#1E90FF" fontSize={18} />
      <Select.Icon>
        <Ionicons name="chevron-down" size={20} color="#1E90FF" />
      </Select.Icon>
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
