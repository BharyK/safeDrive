import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  customStyle?: any;
}

interface TabsProps {
  customStyleForTabas?: any;
  tabsContent: {
    label: string;
    id: number;
    path: any;
    children?: any;
  }[];
  width?: any;
  label?: string;
  childrenOne: any;
  childrenTwo: any;
  secondTabStyle?: any;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, customStyle } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      style={customStyle}
      //{...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const BasicTabs: React.FC<TabsProps> = ({
  customStyleForTabas,
  tabsContent,
  width,
  label,
  childrenOne,
  childrenTwo,
  secondTabStyle,
}) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const renderdTabs = tabsContent.map(
    (item: {
      label:
        | string
        | number
        | boolean
        | React.ReactElement<any, string | React.JSXElementConstructor<any>>
        | Iterable<React.ReactNode>
        | React.ReactPortal
        | null
        | undefined;
      id: number;
    }) => {
      return (
        <Tab
          label={item.label}
          {...a11yProps(item.id)}
          sx={customStyleForTabas}
        />
      );
    }
  );

  return (
    <Box sx={{ width, m: 3 }}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {renderdTabs}
        </Tabs>
        <p style={{ fontSize: '14px', textAlign: 'center' }}>{label}</p>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {childrenOne}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1} customStyle={secondTabStyle}>
        {childrenTwo}
      </CustomTabPanel>
    </Box>
  );
};
