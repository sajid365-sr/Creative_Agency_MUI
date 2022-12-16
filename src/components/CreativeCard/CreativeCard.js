import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, IconButton, useTheme } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';


const CreativeCard = ({image}) => {
const theme = useTheme();

  return (
    <Card sx={{ maxWidth: 345, p: 2, borderRadius: "10px", minWidth:345 }}>
      <CardMedia
        component="img"
        height="190"
        image={image}
        style={{
          borderRadius: "10px",
        }}
      />
      <CardContent
        sx={{
          p: 0,
          "&:last-child": {
            pb: 0,
          },
          pt: 4,
          display:'flex',
          alignItems:'center',
          justifyContent:'space-between'
        }}
      >
        <Box>
          <Typography color='text.secondary'  
          variant='body' fontWeight='bold' gutterBottom  component="div">
            Web design
          </Typography>
          <Typography variant="body2" color="primary.main" fontWeight={600} fontSize={20}>
           Web design research
          </Typography>
        </Box>
        <IconButton sx={{border:`1px solid ${theme.palette.primary.main}`,
        height:'30px',
        width:'30px',
        '& svg':{
          color:'primary.main'
        }
      }}>
            <AddIcon/>
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default CreativeCard;
