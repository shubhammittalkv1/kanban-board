/* Below is the code for the Map Priority Icon function */
import ImgHighPriority from "../../assets/images/svg/img-high-priority";
import ImgLowPriority from "../../assets/images/svg/img-low-priority";
import ImgMediumPriority from "../../assets/images/svg/img-medium-priority";
import NoPriority from "../../assets/images/svg/No-priority";
import UrgentPriorityColour from "../../assets/images/svg/urgent-priority-colour";

const mapPriorityIcon = (data) => {
  switch (data) {
    case "0":
      return <NoPriority />;
    case "1":
      return <ImgLowPriority />;
    case "2":
      return <ImgMediumPriority />;
    case "3":
      return <ImgHighPriority />;
    case "4":
      return <UrgentPriorityColour />;
    default:
      return data;
  }
};
export default mapPriorityIcon;
/* End of the above code */