import { Box } from '@mui/material';
import React, {
  useCallback,
  useState
} from 'react';
import Page from '../../ui/Page/Page';
import TabContent from '../../ui/Tabs/TabContent/TabContent';
import Tabs from '../../ui/Tabs/Tabs';
import HelperText from '../../ui/Text/HelperText';
import PageTitle from '../../ui/Text/PageTitle';
import SubTitle from '../../ui/Text/SubTitle';
import Tab1 from './Tab1/Tab1';
import Button from "../../ui/form/Button/Button"
import VerticalSpace from '../../ui/spacing/VerticalSpace';


const BudgetTabs = ["Tab1", "Tab2"]

const BudgetPlanPage = () => {
    const [selectedTab, setSelectedTab] = useState("Tab1");

    const handleTabChange = useCallback((newSelectedTab) => {
      setSelectedTab(newSelectedTab)
    }, [])

    return ( 
    <Page >
      <PageTitle text='Build your budget plan' />
      <SubTitle text='Setup channels' />
    
      <Box display="flex" justifyContent={"space-between"} >
        <HelperText text='  Setup your added channels by adding baseline budgets out of your total budget. See the forecast impact with the help of tips and insights.' />
        <Button label='Add Channel' onClick={() => {}} icon="add" />  
      </Box>
      <VerticalSpace padding='paddingBottom' value='50px' />
      < Tabs tabs = {BudgetTabs} onTabChange={handleTabChange}>
        <TabContent selected={selectedTab === "Tab1"}>
          <Tab1 />
        </TabContent>
        <TabContent selected={selectedTab === "Tab1"}>
          <div/>
        </TabContent>
      </Tabs>
    </Page>
    );

  }

 export default BudgetPlanPage