import  React, {useCallback, useState, useEffect, useReducer} from 'react';
import PropTypes from 'prop-types';
import "../../../../../../style/style.css"
import Field from '../../../../../ui/form/Field/Field';
import Select  from '../../../../../ui/form/Select/Select';
import Input from '../../../../../ui/form/Input/Input';
import RadioButtons from '../../../../../ui/form/RadioButtons/RadioButtons';
import BudgetBreakdown from './BudgetBreakdown/BudgetBreakdown';
import clsx from 'clsx';
import "./ChannelForm.css"
import Icon from '../../../../../ui/Icon/Icon';
import channelFormReducer, {initialState} from './channelFormReducer';

const FieldIcon = () => {
    return ( <Icon alt="info" name={"info"} className="icon" /> )
}

const BUDGET_ALLOCATION = ["Equal", "Manual"] //todo-ortal move to constant and use obj

const ChannelForm = ({channel }) => {
    const [state, dispatch] = useReducer(channelFormReducer, initialState);
    const {budgetFrequency, budgetBaseline, budgetAllocation, budgetBreakdown } = state

    const setEqualBreakDown = useCallback(() => {
            dispatch({type: "updateBreakDown", budgetBaseline, budgetAllocation} )
    },[budgetAllocation, budgetBaseline])

    useEffect(() => {
        dispatch({type: "init", channel} )
    }, [channel]);

    useEffect(() => {
        setEqualBreakDown()
    }, [setEqualBreakDown]);

    const handleOnBudgetFrequencyChange = (value) => {
        dispatch({type: "update", key: "budgetFrequency", value} )
    }

    const handleOnBudgetBaselineChange = (value) => {
        dispatch({type: "update", key: "budgetBaseline", value: Number(value)} )
    }

    const handleOnBudgetAllocationChange = (value) => {
        dispatch({type: "update", key: "budgetAllocation", value} )
    }

  return (
   <div>
       <div className={clsx('container-center', "channel-form-container")}  >
        <Field label="Budget Frequency" icon={(<FieldIcon />)} className={"channel-form-item"}>
            <Select  
                options={["Annually", "Monthly", "Quarterly"]} 
                currentValue={budgetFrequency}
                onChange={handleOnBudgetFrequencyChange}
            >
            </Select >
        </Field>
        <Field 
             label={`Baseline [${budgetFrequency}] Budget`} 
             icon={(<FieldIcon />)}
             className={"channel-form-item"}

        >
            <Input 
                onChange={handleOnBudgetBaselineChange} 
                currentValue={budgetBaseline}
                type="number"
            />
        </Field>
        <Field label="Budget Allocation" icon={(<FieldIcon />)} className={"channel-form-item"} >
           <RadioButtons 
                options={BUDGET_ALLOCATION} 
                onChange={handleOnBudgetAllocationChange} 
                currentValue={budgetAllocation}
            />
        </Field>
       </div>
       <div>
           <BudgetBreakdown channel={channel} budgetBreakdown={budgetBreakdown} budgetAllocation={budgetAllocation} />
       </div>
   </div>
  )
}

export default ChannelForm