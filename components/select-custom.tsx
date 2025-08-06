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
      <Select.Sheet modal snapPoints={[50]} dismissOnSnapToBottom>
        <Select.Sheet.Frame>
          <Select.Sheet.ScrollView backgroundColor="#1A1D21">
            <Adapt.Contents />
          </Select.Sheet.ScrollView>
        </Select.Sheet.Frame>
        <Select.Sheet.Overlay
          opacity={0.5}
          style={{ backgroundColor: "#2F3338" }}
        />
      </Select.Sheet>
    </Adapt>

    <Select.Content>
      <Select.ScrollUpButton />
      <Select.Viewport>
        <Select.Group>
          {items.map((item, i) => {
            const isActive = value === item.id;

            return (
              <Select.Item
                key={item.id}
                value={item.id}
                index={i}
                style={{
                  backgroundColor: isActive ? "#1E3A8A" : "#1A1D21",
                  height: 60,
                }}
                onPress={() => onChange(item.id)}
              >
                <Select.ItemText
                  style={{
                    fontWeight: "600",
                    color: "white",
                    fontSize: 18,
                  }}
                >
                  {item.label}
                </Select.ItemText>
                {isActive && (
                  <Select.ItemIndicator>
                    <Ionicons name="checkmark" size={20} color="white" />
                  </Select.ItemIndicator>
                )}
              </Select.Item>
            );
          })}
        </Select.Group>
      </Select.Viewport>
      <Select.ScrollDownButton />
    </Select.Content>
  </Select>
);
