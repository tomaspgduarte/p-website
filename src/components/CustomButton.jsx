
import { Button, styled, keyframes } from '@mui/material';


const animate1 = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const CustomButton = styled(Button)(({ customBackgroundColor }) => ({

  '&:before': {
    content: '""',
    position: 'absolute',
    width: "1vw",
    height: "25vh",
    zIndex: -1,
    background: `linear-gradient(#ffffff, #ffffff)`,
    animation: `${animate1} 10s infinite linear`,
  },

  '&:after': {
    content: '""',
    position: 'absolute',
    inset: "1px",
    borderRadius: "16px",
    backgroundColor: "#052533",
  },

  color: 'white',
  width: "10vw",
  height: "6vh",
  display: "flex",
  flexDirection: "row",
  gap: "10%",
  borderRadius: "16px",
  overflow: "hidden",
  backgroundColor: "#052533"
}));

export default CustomButton;