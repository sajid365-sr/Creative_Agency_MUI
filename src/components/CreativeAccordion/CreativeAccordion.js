import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CustomExpandIcon = () => {
  return (
    <div>
      <div className="expand">
        <AddIcon />
      </div>
      <div className="remove">
        <RemoveIcon />
      </div>
    </div>
  );
};

const CreativeAccordion = ({title, description}) => {
  return (
    <Accordion
      sx={{
        boxShadow: "none",
        border: "1px solid #E5EAF4",
        p: 2,
      }}
    >
      <AccordionSummary
        expandIcon={<CustomExpandIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{
          "&	.Mui-expanded": {
            "& p": {
              color: "primary.green",
            },
            '& .expand':{
                display:'none'
            },
            '& .remove':{
                display:'block',
                '& svg':{
                    color:'primary.green'
                }
            }
          },
          "& .remove": {
            display: "none",
          },
        }}
      >
        <Typography sx={{ color: "primary.main", fontWeight: "bold" }}>
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography sx={{ color: "#5A7184" }}>
          {description}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default CreativeAccordion;
