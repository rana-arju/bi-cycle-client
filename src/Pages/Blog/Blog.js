import React from 'react';

const Blog = () => {
    return (
        <div className="container mx-auto px-2 md:px-24">
            <h1 className="text-4xl text-center my-5 uppercase">Our Blogs</h1>
            <div className='my-10'>
                <h2 className='text-2xl md:font-bold'> 1) How will you improve the performance of a React Application?</h2>
                <p className='md:font-bold'>Internally, React uses several clever techniques to minimize the number of costly DOM operations required to update the UI. While this will lead to a faster user interface without specifically optimizing for performance for many cases, there are ways where you can still speed up your React application. there are many ways of  improve the performance of a React Application. such as:<br />
                i. Using Immutable Data Structures <br />
                ii. Function/Stateless Components and React.PureComponent <br />
                iii. Multiple Chunk Files
                <br />
                iv. Using Production Mode Flag in Webpack <br />
                v. Dependency optimization <br />
                vi.  Use React.Fragments to Avoid Additional HTML Element Wrappers <br />
                vii. Avoid Inline Function Definition in the Render Function. <br />
                viii. Throttling and Debouncing Event Action in JavaScript
                </p>
            </div>
            <div className="my-10">
                <h2 className='text-2xl md:font-bold'>2) What are the different ways to manage a state in a React application?</h2> <br />
                <p className='md:font-bold'><span className='text-xl'>5 Types of different ways to manage a state in a React application</span> <br />
                <br />
                i. Communication State <br />
                <p>Communication state forms the backbone of your React Native app without you even knowing about it. Remember when you had requested a call back to an HTTP request? That's when you introduced the communication system in your app.</p> <br />
                ii.  Data State <br />
                <p>
                    Data state covers information that your React application stores temporarily for various business functions. Supposedly, you are building a project management app. The information stored in the data state will include the following things - project names, contacts, details about the clients, etc.
                </p>
                iii. Control State <br />
                <p>Contrary to the state mentioned above in a React app, the control state does not represent the application's environment. Instead, it refers to the state which the user has input into the app. For example, form inputs, selected items, etc. Control state is known to be more diverse and versatile when it comes to storing information.</p> <br />
                iv.  Session State <br />
                <p>Session state contains information about the user of the application such as user id, permissions, passwords, etc. It may also include information on how the application should work according to a particular user's preferences.</p> <br />
                v.  Location State <be />
                <p>Location state is the UTF-8 display that appears in your URL bar. In fact, the L in URL stands for Locator! One of the most interesting facts about Location state is that you can give directions to a user to parts of the application that do not have unique URLs associated with them. Also, the HTML5 History API allows you to store states separately from the specific URL.</p>
                </p>
            </div>
            <div className="my-10">
                <h2 className="text-2xl md:font-bold">3) How does prototypical inheritance work?</h2> <br />
                <p className='md:font-bold'>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object. <br />
                Simply put, prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function. <br />
                
                </p>
            </div>
            <div className="my-10">
                <h2 className="md:font-bold text-2xl">4) Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                <p className='md:font-bold my-10'>React, keeps a track record of all its virtual DOM. Whenever a change happens, all the components are rendered and this new virtual DOM is then compared with the old virtual DOM. Only the differences found are then reflected in the original DOM.

                So, it's obvious from the statement that if we mutate the state directly, it will change the reference of the state in the previous virtual DOM as well. So, React won't be able to see that there is a change of the state and so it won't be reflected in the original DOM until we reload. The problem is more obvious when we extend a component with React.PureComponent instead of React.component , where React tries to optimize some time by not rendering components if no changes are found.
                Also, mutating the state directly can lead to odd bugs and components that are hard to optimize.</p>
            </div>
            <div className="my-10">
                <h2 className="md:font-bold text-3xl">5) What is a unit test? Why should write unit tests?</h2> <br />

                <p className="md:font-bold">UNIT TESTING is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.</p>
                <p>i. Unit tests help to fix bugs early in the development cycle and save costs. <br />
                ii. It helps the developers to understand the testing code base and enables them to make changes quickly
                Good unit tests serve as project documentation <br />
                iii. Unit tests help with code re-use. Migrate both your code and your tests to your new project. Tweak the code until the tests run again.
</p>

            </div>
        </div>
    );
};

export default Blog;