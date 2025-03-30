## **URL Shortener with Authentication**  

A **Node.js & Express.js** based URL shortener that allows users to generate short links, track visits, and manage links securely with **JWT authentication**. The application stores data in **MongoDB** and provides a simple yet efficient user interface using **EJS** templating.  

### **Features**  
✅ **Short URL Generation** – Uses the **shortid** package to create unique short links.  
✅ **User Authentication** – Implements **JWT-based authentication** for secure access.  
✅ **Session Management** – Uses the **UUID** package to generate unique session IDs.  
✅ **Visit Tracking & Analytics** – Stores visit history and provides click analytics.  
✅ **Secure Link Management** – Only authenticated users can edit or delete their links.  
✅ **Responsive UI** – Built with **HTML, CSS, JavaScript, and EJS** for a seamless user experience.  

### **Tech Stack**  
- **Frontend:** HTML, CSS, JavaScript, EJS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** JWT  
- **Packages Used:** shortid (for short URLs), UUID (for session IDs), bcrypt (for password hashing)  

### **Future Enhancements**  
🚀 Add support for custom short URLs  
🚀 Implement role-based access control  
🚀 Enhance UI with a modern design  
