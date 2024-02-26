import { css } from "@emotion/css";

const color = "white";

const EmotionButton = () => {
  return (
    <div
      className={css`
        padding: 32px;
        background-color: hotpink;
        font-size: 24px;
        border-radius: 4px;
        &:hover {
          color: ${color};
        }
      `}
    >
      Hover to change color.
    </div>
  );
};

export default EmotionButton;
