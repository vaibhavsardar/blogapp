
export const menuItems = [
    {
      id: "home",
      label: "Home",
      path: "/",
    },
    {
      id: "category",
      label: "Category",
      path: "/category/application",
    },
    {
      id: "blogs",
      label: "Blogs",
      path: "/blogs",
    },
    {
      id: "search",
      label: "Search",
      path: "/search",
    },
  ];

  
export const categories = [
  {
    value: "application",
    label: "Application",
  },
  {
    value: "data",
    label: "Data",
  },
  {
    value: "software",
    label: "Software",
  },
  {
    value: "tech",
    label: "Technology",
  },
  {
    value: "science",
    label: "Science",
  },
];

export const formControls = [
  {
    id: "title",
    label: "Title",
    placeholder: "Enter Blog Title",
    type: "text",
    component: "input",
    options: [],
  },
  {
    id: "description",
    label: "Description",
    placeholder: "Enter Blog Description",
    type: "text",
    component: "textarea",
    options: [],
  },
  {
    id: "category",
    label: "Category",
    placeholder: "Choose Blog Category",
    type: "",
    component: "select",
    options: categories,
  },
];

 export const firebaseConfig = {
  apiKey: "AIzaSyDtWMo0pdV2Y6rUdPhAvwqJbs61SM9c96o",
  authDomain: "mynextblog-411418.firebaseapp.com",
  projectId: "mynextblog-411418",
  storageBucket: "mynextblog-411418.appspot.com",
  messagingSenderId: "994949359288",
  appId: "1:994949359288:web:2da82a9fed5a9d158e364d",
  measurementId: "G-LEK9B0RM1M"
};

export const initialBlogFormData = {
 title :  '',
 description : '',
 image : '',
 category : '' 
}