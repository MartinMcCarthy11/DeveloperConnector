import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile-form/CreateProfile';
import EditProfile from './components/profile-form/EditProfile';
import AddExperience from './components/profile-form/AddExperience';
import AddEducation from './components/profile-form/AddEducation';
import PrivateRoute from './components/routing/PrivateRoute';
import Profiles from './components//profiles/Profiles';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import './App.css';
//redux.
import { Provider } from 'react-redux';
import store from './store';

if (localStorage.getItem('token')) {
	setAuthToken(localStorage.getItem('token'));
}

const App = () => {
	useEffect(() => {
		store.dispatch(loadUser());
	}, []);

	return (
		<Provider store={store}>
			<Router>
				<Fragment>
					<Navbar />
					<Route exact path='/' component={Landing} />
					<section className='container'>
						<Alert />
						<Switch>
							<Route
								exact
								path='/register'
								component={Register}
							/>
							<Route exact path='/login' component={Login} />
							<Route
								exact
								path='/profiles'
								component={Profiles}
							/>
							<PrivateRoute
								exact
								path='/dashboard'
								component={Dashboard}
							/>
							<PrivateRoute
								exact
								path='/create-profile'
								component={CreateProfile}
							/>
							<PrivateRoute
								exact
								path='/edit-profile'
								component={EditProfile}
							/>
							<PrivateRoute
								exact
								path='/add-education'
								component={AddEducation}
							/>
							<PrivateRoute
								exact
								path='/add-experience'
								component={AddExperience}
							/>
						</Switch>
					</section>
				</Fragment>
			</Router>
		</Provider>
	);
};

export default App;
