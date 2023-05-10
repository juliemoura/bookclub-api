import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Typography } from '@mui/material';
import { Card } from '../card';
import { CardContainer } from './styles';

interface IData {
  data: Array<{
      id: number;
      img: string;
      name: string;
      author: string;
      price: number;
      gender: string;
      sale: boolean;
  }>;
};

const HorizontalTabs = ({ data }: IData) => {
  const adventureBooks = data.filter((book) => book.gender === "adventure");
  const biographyBooks = data.filter((book) => book.gender === "biography");
  const ficctionBooks = data.filter((book) => book.gender === "ficction");
  const poetryBooks = data.filter((book) => book.gender === "poetry");
  const romanceBooks = data.filter((book) => book.gender === "romance");
  const saleBooks = data.filter((book) => book.sale === true);

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          maxWidth: { xs: 320, sm: 480 },
          bgcolor: 'background.paper',
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          aria-label="visible arrows tabs example"
          TabIndicatorProps={{
            style: {
              backgroundColor: "#3A443E",
            }
          }}
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              '&.Mui-disabled': { opacity: 0.3 },
            },
          }}
        >
          <Tab label="Adventure" style={{ color: "#72887B" }} />
          <Tab label="Biography" style={{ color: "#72887B" }} />
          <Tab label="Ficction" style={{ color: "#72887B" }} />
          <Tab label="Poetry" style={{ color: "#72887B" }} />
          <Tab label="Romance" style={{ color: "#72887B" }} />
          <Tab label="Sale" style={{ color: "#72887B" }} />
        </Tabs>
      </Box>
      <Box style={{ width: "100%", display: "flex", gap: "20px", flexWrap: "wrap", alignItems: "center", justifyContent: "center" }}>
        {value === 0 &&
          adventureBooks.map((book) => (
            <CardContainer>
              <Card
                key={book.id}
                src={book.img}
                title={book.name}
                author={book.author}
                price={book.price}
              />
            </CardContainer>
          ))
        }
        {value === 1 &&
          biographyBooks.map((book) => (
            <CardContainer>
              <Card
                key={book.id}
                src={book.img}
                title={book.name}
                author={book.author}
                price={book.price}
              />
            </CardContainer>
          ))
        }
        {value === 2 &&
          ficctionBooks.map((book) => (
            <CardContainer>
              <Card
                key={book.id}
                src={book.img}
                title={book.name}
                author={book.author}
                price={book.price}
              />
            </CardContainer>
          ))
        }
        {value === 3 &&
          poetryBooks.map((book) => (
            <CardContainer>
              <Card
                key={book.id}
                src={book.img}
                title={book.name}
                author={book.author}
                price={book.price}
              />
            </CardContainer>
          ))
        }
        {value === 4 &&
          romanceBooks.map((book) => (
            <CardContainer>
              <Card
                key={book.id}
                src={book.img}
                title={book.name}
                author={book.author}
                price={book.price}
              />
            </CardContainer>
          ))
        }
        {value === 5 &&
          saleBooks.map((book) => (
            <CardContainer>
              <Card
                key={book.id}
                src={book.img}
                title={book.name}
                author={book.author}
                price={book.price}
              />
            </CardContainer>
          ))
        }
        {value === 6 && 'Conteúdo da Tab 7'}
      </Box>
    </>
  );
}

export { HorizontalTabs };


// import * as React from 'react';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';

// interface TabPanelProps {
//   children?: React.ReactNode;
//   index: number;
//   value: number;
// }

// function TabPanel(props: TabPanelProps) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`vertical-tabpanel-${index}`}
//       aria-labelledby={`vertical-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// function a11yProps(index: number) {
//   return {
//     id: `vertical-tab-${index}`,
//     'aria-controls': `vertical-tabpanel-${index}`,
//   };
// }

// const VerticalTabs = () => {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//     setValue(newValue);
//   };

//   return (
//     <Box
//       sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
//     >
//       <Tabs
//         orientation="vertical"
//         variant="scrollable"
//         value={value}
//         onChange={handleChange}
//         aria-label="Vertical tabs example"
//         sx={{ borderRight: 1, borderColor: 'divider' }}
//         TabIndicatorProps={{
//           style: {
//             backgroundColor: "#3A443E",
//           }
//         }}
//       >
//         <Tab label="Adventure" {...a11yProps(0)} style={{ color: "#728A7C" }} />
//         <Tab label="Biography" {...a11yProps(1)} style={{ color: "#728A7C" }} />
//         <Tab label="Horror" {...a11yProps(3)} style={{ color: "#728A7C" }} />
//         <Tab label="Poetry" {...a11yProps(2)} style={{ color: "#728A7C" }} />
//         <Tab label="Romance" {...a11yProps(3)} style={{ color: "#728A7C" }} />
//         <Tab label="Sale" {...a11yProps(3)} style={{ color: "#728A7C" }} />
//       </Tabs>
//       <TabPanel value={value} index={0}>
//         Adventure
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         Biography
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         Horror
//       </TabPanel>
//       <TabPanel value={value} index={3}>
//         Poetry
//       </TabPanel>
//       <TabPanel value={value} index={4}>
//         Romance
//       </TabPanel>
//       <TabPanel value={value} index={5}>
//         Sale
//       </TabPanel>
//     </Box>
//   );
// };

// export { VerticalTabs };