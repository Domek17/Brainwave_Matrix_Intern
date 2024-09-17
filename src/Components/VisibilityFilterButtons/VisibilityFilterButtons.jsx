import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import { FilterTypes } from "../../Enums/Enum";

export default function VisibilityFilterButtons({ handleFilterItems }) {
  function onFilterItems(visibilityType) {
    handleFilterItems(visibilityType);
  }

  return (
    <ToggleButtonGroup
      type="radio"
      name="options"
      defaultValue={FilterTypes.FILTER_ALL}
    >
      <ToggleButton
        id="tbg-radio-1"
        value={FilterTypes.FILTER_ALL}
        onClick={() => onFilterItems(FilterTypes.FILTER_ALL)}
      >
        All tasks
      </ToggleButton>

      <ToggleButton
        id="tbg-radio-2"
        value={FilterTypes.FILTER_ALPHABETICALLY}
        onClick={() => onFilterItems(FilterTypes.FILTER_ALPHABETICALLY)}
      >
        Alphabetically
      </ToggleButton>

      <ToggleButton
        id="tbg-radio-3"
        value={FilterTypes.FILTER_ACTIVE}
        onClick={() => onFilterItems(FilterTypes.FILTER_ACTIVE)}
      >
        Active
      </ToggleButton>

      <ToggleButton
        id="tbg-radio-4"
        value={FilterTypes.FILTER_COMPLETED}
        onClick={() => onFilterItems(FilterTypes.FILTER_COMPLETED)}
      >
        Completed
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
