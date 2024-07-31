const menuData = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Health Packages",
    path: "/health-package",
    newTab: false,
  },
  {
    id: 4,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Diagnostic Radiology",
        path: "/diagnostic-radiology",
        newTab: false,
      },
      {
        id: 42,
        title: "Interventional Radiology",
        path: "/interventional-radiology",
        newTab: false,
      },
      {
        id: 43,
        title: "Cardiology",
        path: "/cardiology",
        newTab: false,
      },
      {
        id: 44,
        title: "Pathology",
        path: "/pathology",
        newTab: false,
      },
      {
        id: 45,
        title: "Others",
        path: "/others",
        newTab: false,
      },
    ],
  },
  {
    id: 5,
    title: "Team",
    path: "/team",
    newTab: false,
  },
  {
    id: 6,
    title: "Media",
    newTab: false,
    submenu: [
      {
        id: 61,
        title: "Gallery",
        path: "/gallery",
        newTab: false,
      },
      {
        id: 62,
        title: "Updates and Events",
        path: "/updates-and-events",
        newTab: false,
      },
    ],
  },
  {
    id: 7,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
