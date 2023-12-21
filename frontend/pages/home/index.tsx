import * as React from "react";
import { NextPage } from "next";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ButtonCard from "../../components/buttonCard/buttonCard";
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router= useRouter();

  const handleButtonClick = (page: string) => {
    router.push(`/${page.toLowerCase()}`);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, mt: 15, mb: 15 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <ButtonCard icon={<LibraryBooksIcon fontSize="large" />} buttonText="Knowledge Base" onClick={() => console.log("Knowledge Base")} />
          </Grid>
          <Grid item xs={12} md={4}>
            <ButtonCard icon={<SupportAgentIcon fontSize="large" />} buttonText="Tickets" onClick={() => handleButtonClick("tickets")} />
          </Grid>
          <Grid item xs={12} md={4}>
            <ButtonCard icon={<LightbulbIcon fontSize="large" />} buttonText="FAQ Insights" onClick={() => console.log("FAQ Insights")} />
          </Grid>
         
        </Grid>
      </Box>
    </>
  );
};

export default Home;
