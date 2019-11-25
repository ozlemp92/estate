import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import home from '../home/home';
import specifications from '../specifications/specifications';
import applicationAdvantages from '../specifications/applicationAdvantages';
import customerManagement from '../specifications/customerManagement';
import portfolioManagement from '../specifications/portfolioManagement';
import requestManagement from '../specifications/requestManagement';
import entegrations from '../specifications/entegrations';
import reporting from '../specifications/reporting';
import contractManagement from '../specifications/contractManagement';
import accountingManagement from '../specifications/accountingManagement';
import callerModule from '../specifications/callerModule';
import warningModule from '../specifications/warningModule';
import NavBar from '../shared/navbar';
export default class Routes extends React.Component {


    render() {
        return (
            <Router>
                 <NavBar  /> 
                <Switch>
                    <Route path="/home" component={home} />
                    <Route path="/specifications" component={specifications} />
                    <Route path="/applicationAdvantages" component={applicationAdvantages} />       
                    <Route path="/customerManagement" component={customerManagement} />    
                    <Route path="/requestManagement" component={requestManagement} />        
                    <Route path="/entegrations" component={entegrations} />           
                    <Route path="/reporting" component={reporting} />     
                    <Route path="/contractManagement" component={contractManagement} />  
                    <Route path="/accountingManagement" component={accountingManagement} />         
                    <Route path="/callerModule" component={callerModule} /> 
                    <Route path="/warningModule" component={warningModule} />                                                     
                    <Route component={home} />
                </Switch>
            </Router>
        );
    }
}

