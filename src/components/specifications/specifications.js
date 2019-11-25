import React, { Component } from 'react';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { render } from 'react-dom';
// import { Sonnet } from 'react-bootstrap';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import userIcon from '../../assest/images/user-icon.png';
// import { Divider, Tab } from 'semantic-ui-react'
import CustomerManagement from '../specifications/customerManagement';
import ApplicationAdvantages from '../specifications/applicationAdvantages';
import PortfolioManagement from '../specifications/portfolioManagement';
import RequestManagement from '../specifications/requestManagement';
import Entegrations from '../specifications/entegrations';
import Reporting from '../specifications/reporting';
import ContractManagement from '../specifications/contractManagement';
import AccountingManagement from '../specifications/accountingManagement';
import WarningModule from '../specifications/warningModule';
import CallerModule from '../specifications/callerModule';
import 'react-web-tabs/dist/react-web-tabs.css';
import "react-tabs/style/react-tabs.css";

class specifications extends Component {

    constructor(props) {
        super(props);
        let lang = localStorage.getItem('lang');
    }

    componentDidMount() {
    }
    render() {
        return (
            <>
                <div className="flex-container" style={{ justifyContent: "flex-start" }}>
                    <div style={{ backgroundColor: "white", fontSize: "20px", lineHeight: "25px", flex:"3" }}>
                    <div style={{ alignItems: "flex-start",flex:"0" }}>
                                
                                </div>
                        <Tabs defaultTab="vertical-tab-one" vertical style={{ alignItems: "flex-start",flex:"0" }}>
                     
                            <div style={{alignItems: "flex-start" ,flex:"1"}} >
                                <TabList style={{ alignItems: "flex-start" }}>
                                    <Tab tabFor="vertical-tab-one">  <img style={{ width: "4%", color: "white", height: "20px", position: "relative" }} src={userIcon} className="img-circle" alt=""></img>Uygulama Avantajları</Tab>
                                    <Tab tabFor="vertical-tab-two"><img style={{ width: "4%", color: "white", height: "20px", position: "relative" }} src={userIcon} className="img-circle" alt=""></img>Müşteri Yönetimi</Tab>
                                    <Tab tabFor="vertical-tab-three"><img style={{ width: "4%", color: "white", height: "20px", position: "relative" }} src={userIcon} className="img-circle" alt=""></img>Portföy Yönetimi</Tab>
                                    <Tab tabFor="vertical-tab-four"><img style={{ width: "4%", color: "white", height: "20px", position: "relative" }} src={userIcon} className="img-circle" alt=""></img>Talep Yönetimi</Tab>
                                    <Tab tabFor="vertical-tab-five"><img style={{ width: "4%", color: "white", height: "20px", position: "relative" }} src={userIcon} className="img-circle" alt=""></img>Entegrasyonlar</Tab>
                                    <Tab tabFor="vertical-tab-six"><img style={{ width: "4%", color: "white", height: "20px", position: "relative" }} src={userIcon} className="img-circle" alt=""></img>Raporlama</Tab>
                                    <Tab tabFor="vertical-tab-seven"><img style={{ width: "4%", color: "white", height: "20px", position: "relative" }} src={userIcon} className="img-circle" alt=""></img>Sözleşme Yönetimi</Tab>
                                    <Tab tabFor="vertical-tab-eight"><img style={{ width: "4%", color: "white", height: "20px", position: "relative" }} src={userIcon} className="img-circle" alt=""></img>Muhasebe Modülü</Tab>
                                    <Tab tabFor="vertical-tab-nine"><img style={{ width: "4%", color: "white", height: "20px", position: "relative" }} src={userIcon} className="img-circle" alt=""></img>Caller-ID Modülü</Tab>
                                    <Tab tabFor="vertical-tab-ten"><img style={{ width: "4%", color: "white", height: "20px", position: "relative" }} src={userIcon} className="img-circle" alt=""></img>Uyarı Modülü</Tab>
                                </TabList>
                            </div>
                            <div style={{ flex:"3" }}>
                                <TabPanel tabId="vertical-tab-one">
                                    <ApplicationAdvantages />
                                </TabPanel>
                                <TabPanel tabId="vertical-tab-two">
                                    <CustomerManagement />
                                </TabPanel>
                                <TabPanel tabId="vertical-tab-three">
                                    <PortfolioManagement />
                                </TabPanel>
                                <TabPanel tabId="vertical-tab-four">
                                    <RequestManagement />
                                </TabPanel>
                                <TabPanel tabId="vertical-tab-five">
                                    <Entegrations />
                                </TabPanel>
                                <TabPanel tabId="vertical-tab-six">
                                    <Reporting />
                                </TabPanel>
                                <TabPanel tabId="vertical-tab-seven">
                                    <ContractManagement />
                                </TabPanel>
                                <TabPanel tabId="vertical-tab-eight">
                                    <AccountingManagement />
                                </TabPanel>
                                <TabPanel tabId="vertical-tab-nine">
                                    <CallerModule />
                                </TabPanel>
                                <TabPanel tabId="vertical-tab-ten">
                                    <WarningModule />
                                </TabPanel>
                            </div>

                        </Tabs>
                    </div>

                </div>
            </>
        );
    }
}

export default specifications;