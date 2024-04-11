import Home from '../pages/Home';
import Default from '../pages/Default';

const routes = [
    {
      item: "CRM",
      icon: "dx-icon-user",
      subItems: [
        {
          path: '/crm-contact-list',
          element: Home,
          name: "Contact List"
        },
        {
          path: '/crm-contact-details',
          element: Default,
            name: "Contact Details"
        },
      ],
    },
    {
        item: "Planning",
        icon: "dx-icon-event",
        subItems: [
            {
            path: '/planning-task-list',
            element: Default,
            name: "Task List"
            },
            {
            path: '/planning-task-details',
            element: Default,
            name: "Task Details"
            },
            {
            path: '/planning-scheduler',
            element: Default,
            name: "Scheduler"
            },
        ],
      },
      {
        item: "Analytics",
        icon: "dx-icon-datausage",
        subItems: [
            {
                path: '/analytics-dashboard',
                element: Default,
                name: "Dashboard"
              },
              {
                path: '/analytics-sales-report',
                element: Default,
                name: "Sales Report"
              },
              {
                path: '/analytics-geography',
                element: Default,
                name: "Geography"
              },
        ],
      },
      {
        item: "Authentication",
        icon: "dx-icon-card",
        subItems: [
            {
                path: '/sign-in-form',
                element: Default,
                name: "Sign In Form"
              },
              {
                path: '/sign-up-form',
                element: Default,
                name: "Sign Up Form"
              },
              {
                path: '/reset-password-form',
                element: Default,
                name: "Reset Password Form"
              },
        ],
      },
      {
        item: "Common",
        icon: "dx-icon-box",
        subItems: [
            {
                path: '/user-profile',
                element: Default,
                name: "User Profile"
              },
        ],
      },
 
  ];

    export default routes;