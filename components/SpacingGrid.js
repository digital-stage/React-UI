import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGuitar,
  faUserCircle,
  faVolumeUp,
  faMicrophoneAlt,
  faSignOutAlt,
  faVideo,
  faCommentAlt,
  faMusic,
  faDrawPolygon,
  faUserPlus,
  faUsers,
  faBuromobelexperte,
} from "@fortawesome/free-solid-svg-icons";
// export default function Grid() {
//   return (
//     <>
//       <CardColumns>
//         <Card>
//           <Card.Img variant="top" src="/img1.png" />

//           {
//             <FontAwesomeIcon
//               className="fontAwesome"
//               icon={faGuitar}
//               size="3x"
//             />
//           }

//         </Card>
//         <Card>
//           <Card.Img variant="top" src="/img3.png" />

//           {
//             <FontAwesomeIcon
//               className="fontAwesome"
//               icon={faGuitar}
//               size="3x"
//             />
//           }

//           <div className="footerDiv">
//             <FontAwesomeIcon icon={faUserCircle} size="2x" />
//             <p>Mary swifton87</p>
//             <FontAwesomeIcon icon={faVolumeUp} color="white" />
//             <Form>
//               <Form.Control type="range" />
//             </Form>
//           </div>
//         </Card>

//         <Card>
//           <Card.Img variant="top" src="/img2.png" />

//           {
//             <FontAwesomeIcon
//               className="fontAwesome"
//               icon={faGuitar}
//               size="3x"
//             />
//           }

//   <div className="footerDiv">
//     <FontAwesomeIcon icon={faUserCircle} size="2x" />
//     <p>Mary swifton87</p>
//     <FontAwesomeIcon icon={faVolumeUp} color="white" />
//     <Form>
//       <Form.Control type="range" />
//     </Form>
//   </div>
//         </Card>
//       </CardColumns>
//     </>
//   );
// }
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Box, Paper } from "@material-ui/core";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
    // flexWrap: "wrap",
    // justifyContent: "space-around",
    // overflow: "hidden",
    // backgroundColor: theme.palette.background.paper,
  },
  gridList: {},
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

export default function SpacingGrid() {
  const classes = useStyles();
  return (
    <>
      <Grid item sm={3}>
        <Box position="relative">
          <img src="./img3.png" alt="abc" height="100%" width="100%" />
          <GridListTileBar
            title="abc"
            subtitle={<span>by: hello</span>}
            actionIcon={
              <IconButton aria-label="abc">
                <InfoIcon />
              </IconButton>
            }
          />
        </Box>
      </Grid>
      <Grid item sm={3}>
        <Box position="relative">
          <img src="./img3.png" alt="abc" height="100%" width="100%" />
          <GridListTileBar
            title="abc"
            subtitle={<span>by: hello</span>}
            actionIcon={
              <IconButton aria-label="abc">
                <InfoIcon />
              </IconButton>
            }
          />
        </Box>
      </Grid>
      <Grid item sm={3}>
        <Box position="relative">
          <img src="./img3.png" alt="abc" height="100%" width="100%" />
          <GridListTileBar
            title="abc"
            subtitle={<span>by: hello</span>}
            actionIcon={
              <IconButton aria-label="abc">
                <InfoIcon />
              </IconButton>
            }
          />
        </Box>
      </Grid>
    </>
  );
}
