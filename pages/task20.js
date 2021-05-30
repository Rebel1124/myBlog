//Import the Link API to support client-side navigation
import Link from 'next/link'
import Layout from '../components/MyLayout'

export default () => (
    <Layout>
    <br />
    <h1  style={{color: "red"}}>Task 20</h1>
    <br />
    <h2  style={{color: "midnightblue"}}> Explain what an interface is and the benefits of using interfaces in OOP</h2>
    <p>An object is created using a class. A class is a blueprint from which objects are 
        made. It consists of both data and the code that manipulates the data. In effect,
        each object is called an instance of a class. This is the concept behind OOP.</p>

    <p>Interfaces are key to OOP in that it defines which methods and properties a class must implement.
        i.e. a class can implement an interface. The interface itself does not contain any code to implement
        an object, instead it specifies what a class must do but not how they go about doing it.</p>

    <br />
    <h2  style={{color: "midnightblue"}}>Explain why JS does not really use interfaces and how objects are created with JS</h2>
    <p>Since JavaScript does not use classes to define objects, it stands interfaces are not really needed or
        used in JavaSript.</p>
    <p>That said, JavaScript is an object-based scripting language, which means that it does work with objects,
        but with JavaScript objects are created using prototypes instead of classes. Essentially, a prototype is
        a form of constructor function.</p>

    <br />
    <h2  style={{color: "midnightblue"}}>Explain how you could emulate interfaces using JavaScript</h2>
    <p>There are three common ways of emulating interfaces in JavaScript, namely:</p>
    <ul>
        <li>Comments</li>
        <li>Attribute Checking</li>
        <li>Duck Typing</li>
    </ul>

    <br />
    <h3  style={{color: "orangered"}}>Comments</h3>
    <p>The easiest and least effective way of emulating an interface is with comments. Mimicking the style of 
        other object-oriented languages, the interface and implements keywords are used but are commented out 
        so they do not cause syntax errors.</p>
    <h3  style={{color: "orangered"}}>Attribute Checking</h3>
    <p>The second technique is a little stricter. All classes explicitly declare which interfaces they implement, 
        and these declarations can be checked by objects wanting to interact with these classes. The interfaces 
        themselves are still just comments, but you can now check an attribute to see what interfaces a class says 
        it implements</p>
    <h3  style={{color: "orangered"}}>Duck Typing</h3>
    <p>Duck typing was named after the saying, "If it walks like a duck and quacks like a duck, it's a duck." 
        It is a technique to determine whether an object is an instance of a class based solely on what methods 
        it implements, but it also works great for checking whether a class implements an interface. The idea behind 
        this approach is simple: if an object contains methods that are named the same as the methods defined in your 
        interface, it implements that interface. Using a helper function, you can ensure that the required methods 
        are there</p>
    <br />
    <h2  style={{color: "midnightblue"}}>Explain what strict mode is in JavaScript and why you would use this</h2>
    <p>Strict Mode was a new feature in ECMAScript 5 that allows you to place a program, or a function, 
        in a "strict" operating context. This strict context prevents certain actions from being taken and 
        throws more exceptions. The statement “use strict”; instructs the browser to use the Strict mode, 
        which is a reduced and safer feature set of JavaScript.</p>
    <h3  style={{color: "orangered"}}>Benefits of using strict mode:</h3>
    <ul>
        <li>Strict mode eliminates some JavaScript silent errors by changing them to throw errors.</li>
        <li>Strict mode fixes mistakes that make it difficult for JavaScript engines to perform optimizations: 
            strict mode code can sometimes be made to run faster than identical code that’s not strict mode.</li>
        <li>Strict mode prohibits some syntax likely to be defined in future versions of ECMAScript.</li>
        <li>It prevents, or throws errors, when relatively “unsafe” actions are taken (such as gaining access to the global 
            object).</li>
        <li>It disables features that are confusing or poorly thought out.</li>
        <li>Strict mode makes it easier to write “secure” JavaScript.</li>
    </ul>
    <br />
    <h2  style={{color: "midnightblue"}}>What is TypeScript and how's it used to create interfaces and enforce strict typing in JS</h2>
    <p>TypeScript is a superset of JavaScript. TypeScript is pure object-oriented programming language that 
        supports classes, interfaces, etc. It is an open-source language developed by Microsoft which statically 
        compiles the code to JavaScript. It introduces additional features like strict type binding (variables 
        are bound to specific data types) to JavaScript and can also be compiled down to JavaScript as well.</p>
    <p>TypeScript adds several additional features to JavaScript. The most important one is strict typing 
        (it is turned on by default, but can be turned off in case the developer doesn’t want to use it). Accordingly,
        the main benefit of TypeScript is that it can highlight unexpected behavior in your code, lowering the 
        chance of bugs.</p>

    </Layout>
   )