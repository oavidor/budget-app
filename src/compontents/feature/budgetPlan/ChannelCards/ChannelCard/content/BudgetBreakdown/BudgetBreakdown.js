import  React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Box from '../../../../../../ui/BasicBox/BasicBox';
import "./BudgetBrakdown.css"
import Field from '../../../../../../ui/form/Field/Field';
import Input from '../../../../../../ui/form/Input/Input';
import SubTitle from '../../../../../../ui/Text/SubTitle';
import HelperText from '../../../../../../ui/Text/HelperText';
import VerticalSpace from '../../../../../../ui/spacing/VerticalSpace';



const BudgetBreakdown = ({channel, budgetBreakdown, budgetAllocation }) => {

  return (
   <Box>
       <SubTitle text='Budget Breakdown' className='breakdown-title'  />
       <HelperText className='breakdown-sub-title' text=' By default, your budget will be equally divided 
       throughout the year. You can manually change the budget allocation, either now or later.' />
       <VerticalSpace padding='paddingBottom' value='24px' />
        <div className='breakdown-box-container'>
            {budgetBreakdown?.map(item => (
                <Field key={item?.month} label={`${item?.month} ${channel?.year}`} className={"breakdown-field"}>
                  <Input currentValue={item?.value} className={"breakdown-input"} disabled={budgetAllocation === "Equal"}/>
                </Field>
            ))}
        </div>
   </Box>
  )
}

export default BudgetBreakdown