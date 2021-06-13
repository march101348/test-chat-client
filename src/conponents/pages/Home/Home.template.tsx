import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

export const HomeTemplate: React.VFC = () => {
  const navigate = useNavigate();

  const handleOnClick = (path: string) => {
    navigate(path);
  };

  return (
    <div>
      <h1>hello from home page!</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleOnClick("rooms")}
      >
        ENTER
      </Button>
    </div>
  );
};
