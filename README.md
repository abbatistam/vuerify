Vue Router Authorization Library
This library provides seamless integration between Vue Router and CASL to manage navigation permissions based on defined rules. It allows you to easily set up and enforce authorization rules for your Vue.js applications, ensuring that users can access only the routes they are authorized to.

Features
Define permissions using CASL rules, specifying actions and subjects.
Associate permissions with Vue Router routes using meta fields.
Automatically restrict access to routes based on user permissions.
Dynamically update router configuration and permissions at runtime.
Simple and flexible API for managing authorization in your Vue.js applications.
Installation
You can install the library via npm or yarn:

bash
Copy code
npm install vue-router-authorization
# or
yarn add vue-router-authorization
Usage
Define your permissions using CASL rules.
Define your Vue Router routes and associate permissions using meta fields.
Initialize the RouterAuthorization class with your configuration.
Use the generated router for navigation, and the library will handle authorization automatically.
typescript
Copy code
import { RouterAuthorization, Route, Rule } from 'vue-router-authorization';
import { createRouter, createWebHistory } from 'vue-router';
import { Ability, AbilityBuilder } from 'casl';

// Define your permissions using CASL rules
const permissions: Rule[] = [
  { actions: 'view', subject: 'about' },
  { actions: 'edit', subject: 'protected' },
];

// Define your Vue Router routes
const routes: Route[] = [
  { name: 'home', path: '/', component: HomeView },
  { name: 'about', path: '/about', component: AboutView, meta: { subject: 'about', action: 'view' } },
  { name: 'protected', path: '/protected', component: ProtectedView, meta: { subject: 'protected', action: 'view' } },
];

// Initialize RouterAuthorization with configuration
const routerConfig = { routes, permissions, unauthorizedRoute: '/unauthorized' };
const routerAuth = new RouterAuthorization(routerConfig);
const router = routerAuth.getRouter();

// Use the router for navigation in your Vue.js application
For detailed documentation and advanced usage, refer to the API Documentation section.

API Documentation
For detailed information on classes, interfaces, and methods available in this library, refer to the API Documentation.

License
This project is licensed under the MIT License - see the LICENSE file for details.
