import React, { Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from '../components/Layout';

const Home = React.lazy(() => import('../pages/Home'));
const Condition = React.lazy(() => import('../pages/Condition'));
const Questions = React.lazy(() => import('../pages/Questions'));
const Contact = React.lazy(() => import('../pages/Contact'));
const Preimushestva = React.lazy(() => import('../pages/Preimushestva'));
const About = React.lazy(() => import('./navbar/aboutUs/About'));
const Payment = React.lazy(() => import('./navbar/payment/Payment'));
const Contacts = React.lazy(() => import('./navbar/contact/Contacts'));
const Confident = React.lazy(() => import('../pages/Confident'));
const Calculator = React.lazy(() => import('../pages/Calculator'));
const StepPrivating = React.lazy(() => import('../pages/StepPrivating'));


//? Products
const ProductDetail = React.lazy(() => import('../pages/ProductDetail'));

function Routes(props) {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>

                    //? Routes to Home/Products links
                    <Route exact path="/">
                        <Layout>
                            <Home props={props} />
                        </Layout>
                    </Route>
                    <Route exact path="/condition">
                        <Layout>
                            <Condition />
                        </Layout>
                    </Route>
                    <Route exact path="/step">
                        <Layout>
                            <StepPrivating />
                        </Layout>
                    </Route>

                    //? Routes to Navbars links
                    <Route exact path="/contact">
                        <Layout>
                            <Contact />
                        </Layout>
                    </Route>
                    <Route exact path="/about">
                        <Layout>
                            <About />
                        </Layout>
                    </Route>
                    <Route exact path="/pre">
                        <Layout>
                            <Preimushestva />
                        </Layout>
                    </Route>
                    <Route exact path="/questions">
                        <Layout>
                            <Questions />
                        </Layout>
                    </Route>
                    <Route exact path="/pay">
                        <Layout>
                            <Payment />
                        </Layout>
                    </Route>
                    <Route exact path="/contacts">
                        <Layout>
                            <Contacts />
                        </Layout>
                    </Route>
                    <Route exact path="/confident">
                        <Layout>
                            <Confident />
                        </Layout>
                    </Route>
                    <Route exact path="/calc">
                        <Layout>
                            <Calculator />
                        </Layout>
                    </Route>
                </Switch>
            </Suspense>
        </BrowserRouter>
    )
}

export default Routes

