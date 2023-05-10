import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Typography } from '@mui/material';
import { Card } from '../card';

const HorizontalTabs = () => {
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
      <Box >
        <Typography>
          {value === 0 && <Card src="https://m.media-amazon.com/images/I/71NsVQ5MlwL.jpg" title="Harry Potter e a Câmara Secreta" author="J.K Rowling" price={144.90} />}
          {value === 1 && 'Conteúdo da Tab 2'}
          {value === 2 && 'Conteúdo da Tab 3'}
          {value === 3 && 'Conteúdo da Tab 4'}
          {value === 4 && 'Conteúdo da Tab 5'}
          {value === 5 && 'Conteúdo da Tab 6'}
          {value === 6 && 'Conteúdo da Tab 7'}
        </Typography>
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