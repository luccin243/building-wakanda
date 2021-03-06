import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Menu } from './components/menu';
import { Home } from './containers/home';
import { NotFound } from './containers/notFound';
import { Galley } from './containers/gallery';
import { Footer } from './components/footer';
import { OurLeaders } from './containers/ourLeaders';
import { OurProjects } from './containers/ourProjects';
import { ProjectsPage } from './containers/ourProjects/ProjectsPage';
import { BlogPage } from './containers/blog/BlogPage';
import { ContactUs } from './containers/contactUs';
import { Blog } from './containers/blog';

const Routes: React.FC = () => {
  return (
    <Router>
      <header>
        <Menu />
      </header>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/gallery' component={Galley} />
        <Route exact path='/our-projects' component={OurProjects} />
        <Route exact path='/our-projects/:id' component={ProjectsPage} />
        <Route exact path='/our-team' component={OurLeaders} />
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/blog/:id' component={BlogPage} />
        <Route exact path='/contact-us' component={ContactUs} />
        <Route path='*' component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Routes;
