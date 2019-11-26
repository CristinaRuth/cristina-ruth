import React from 'react';
import _ from 'lodash';
import { Layout } from '../components/index';
import { getPages } from '../utils';
import { Article } from '../components/Article';

export default class InvestOrPayOffDebt extends React.Component {
    constructor(props) {
        super(props);
        this.state = new InvestOrPayOffDebtState();
    }

    addDebt = () => {
        this.setState((prevState) => {
            let newState = prevState;
            const debt = new Debt(prevState.debtValue, prevState.debtInterest);
            newState.debts.push(debt);
            newState.debtValue = "";
            newState.debtInterest = "";
            return newState;
        })
    }

    handleShowDebt = () => {
        if (this.state.isShowAddDebt) return;

        this.setState((prevState) => {
            const newValue = !prevState.isShowAddDebt;
            return {
                isShowAddInvestment: !newValue,
                isShowAddDebt: newValue
            }
        })
    }

    handleShowInvestment = () => {
        if (this.state.isShowAddInvestment) return;

        this.setState((prevState) => {
            const newValue = !prevState.isShowAddInvestment;
            return {
                isShowAddInvestment: newValue,
                isShowAddDebt: !newValue
            }
        })
    }

    addInvestment = () => {
        this.setState((prevState) => {
            let newState = prevState;
            const investment = new Investment(prevState.investmentValue, prevState.investmentInterest);
            newState.investments.push(investment);
            newState.investmentValue = "";
            newState.investmentInterest = "";
            return newState;
        })
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <Layout {...this.props}>
                <div>
                    <button onClick={this.handleShowDebt} disabled={this.state.isShowAddDebt}>Debt</button>
                    <button onClick={this.handleShowInvestment} disabled={this.state.isShowAddInvestment}>Investment</button>
                    {this.state.isShowAddInvestment
                        && <React.Fragment>
                            <div className="contact-form">
                                <p className="form-row">
                                    <label className="form-label">Value *</label>
                                    <input type="text" name="investmentValue" placeholder="Investment Value" className="form-input"
                                        value={this.state.investmentValue} onChange={this.handleInputChange} />
                                </p>
                                <p className="form-row">
                                    <label className="form-label">Estimated Interest *</label>
                                    <input type="text" name="investmentInterest" placeholder="Estimated interest per year" className="form-input"
                                        value={this.state.investmentInterest} onChange={this.handleInputChange} />
                                </p>
                                <input type="hidden" name="form-name" value="contactForm" />
                                <p className="form-row">
                                    <button className="button" onClick={this.addInvestment}>Add Investment</button>
                                </p>
                            </div>
                        </React.Fragment>
                    }
                    {this.state.isShowAddDebt
                        && <React.Fragment>
                            <div className="contact-form">
                                <p className="form-row">
                                    <label className="form-label">Value *</label>
                                    <input type="text" name="debtValue" placeholder="Investment Value" className="form-input"
                                        value={this.state.debtValue} onChange={this.handleInputChange} />
                                </p>
                                <p className="form-row">
                                    <label className="form-label">Interest *</label>
                                    <input type="text" name="debtInterest" placeholder="Interest per year" className="form-input"
                                        value={this.state.debtInterest} onChange={this.handleInputChange} />
                                </p>
                                <input type="hidden" name="form-name" value="contactForm" />
                                <p className="form-row">
                                    <button className="button" onClick={this.addDebt}>Add Debt</button>
                                </p>
                            </div>
                        </React.Fragment>
                    }
                    {this.state.investments.length > 0 &&
                        <React.Fragment>
                            <h3>Investments</h3>
                            <ul>
                                {this.state.investments.map((value, index) => {
                                    return <li key={index}>
                                        ${value.investmentValue} with {value.investmentInterest}% returns per year
                         </li>
                                })}
                            </ul>
                        </React.Fragment>
                    }
                    {this.state.debts.length > 0 &&
                        <React.Fragment>
                            <h3>Debts</h3>
                            <ul>
                                {this.state.debts.map((value, index) => {
                                    return <li key={index}>
                                        ${value.debtValue} with {value.debtInterest}% interest per year
                         </li>
                                })}
                            </ul>
                        </React.Fragment>
                    }
                </div>
            </Layout>
        );
    }
}

class InvestOrPayOffDebtState {
    constructor() {
        this.debts = [];
        this.investments = [];
        this.isShowAddInvestment = false;
        this.isShowAddDebt = false;
        this.investmentValue = "";
        this.investmentInterest = "";
        this.debtValue = "";
        this.debtInterest = "";
    }
}


class Investment {
    /**
     * 
     * @param {string} investmentValue 
     * @param {string} investmentInterest 
     */
    constructor(investmentValue, investmentInterest) {
        this.investmentValue = parseInt(investmentValue);
        this.investmentInterest = parseInt(investmentInterest);
    }
}

class Debt {
    /**
     * 
     * @param {string} debtValue 
     * @param {string} debtInterest 
     */
    constructor(debtValue, debtInterest) {
        this.debtValue = parseInt(debtValue);
        this.debtInterest = parseInt(debtInterest);
    }
}