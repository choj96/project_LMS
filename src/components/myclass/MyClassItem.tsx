import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { type PathData } from "../../routes";
import { font } from "../../styles/fonts";
import colors, { shadow } from "../../styles/palette";

interface MyClassItemProps {
  myclass: PathData;
}

const MyClassItem = ({ myclass }: MyClassItemProps) => {
  return (
    <Box>
      <Link to={`/myclass/${myclass.path}/student`}>{myclass.name}</Link>
    </Box>
  );
};

const Box = styled.li`
  width: 100%;
  height: 52px;
  background: ${colors.white};
  border-radius: 8px;
  box-shadow: ${shadow};
  & a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 20px;
    font: ${font.style15Medium};
    color: ${colors.gray900};
  }
`;

export default MyClassItem;
