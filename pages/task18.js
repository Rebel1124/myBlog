//Import the Link API to support client-side navigation
import Link from 'next/link'
import Layout from '../components/MyLayout'

export default () => (
    <Layout>
    <br />
    <h1  style={{color: "red"}}>Task 18</h1>
    <br />
    <h2  style={{color: "midnightblue"}}>What is Concurrency and what are the methods of implementing Concurrency?</h2>
    <p>Concurrency is the execution of several instruction sequences at the same time. In an opertaing
        system, this happens when there are several process threads running in parallel. Concurrency is also a 
        programming design philosopy. In concurrent programming, programmers attempt to break down a complex problem
        into several simultaneous executing processes that can be addressed individually.
    </p>

    <p>
        Concurrency can be implemented in various ways. Multiprocessing and multithreading or an approach 
        that uses both are common ways of implementing concurrency.
    </p>
    <br />
    <h2  style={{color: "midnightblue"}}>Describe how Concurrency is implemented with Node.js</h2>
    <p>Concurrent operation means that two computations can both make progress and advance regardless 
        of the other. If there are two threads, for example, then both make progress independently. 
        The second computation doesn't need to wait for the first one to complete before it can be advanced.</p>

    <p>At a high level, Node.js falls into the category of concurrent computation. This is a direct result of
         the single-threaded event loop being the backbone of a Node.js application. The event-loop repeatedly
          takes an event and then sequentially executes all listeners interested in that event. The event loop 
          never runs two pieces of JavaScript in parallel.</p>

    <p>As long as the event handlers are small and frequently wait for yet more events themselves, all computations 
        (for example fulfilling and serving a HTTP request) can advance one small step at a time - concurrently. 
        This is beneficial in web applications where the majority of the time is spent waiting for I/O to complete.
         It allows a single Node.js process to handle huge amounts of requests.</p>

    <h4  style={{color: "orangered"}}>What role does asynchronous programming play in Concurrency?</h4>
    <p>Asynchrony in computer programming refers to the occurrence of events independently of the main 
        program flow and ways to deal with such events. JavaScript is a single-threaded and all code is 
        executed in a sequence line by line, not in parallel. Usually, we would like to have the occurrence 
        of events that should be independent of the main program flow. This can be achieved in JavaScript using 
        call-backs, Promises, async/await. In other words, asynchronous programming.</p>

    <h4  style={{color: "orangered"}}>How are web APIs related to implementing Concurrency?</h4>
    <p>When you send request(s) to a web api, the web api framework assigns an available thread (thread pool)
        to execute/process the request. If the request thread is not freed or released quickly then the bnumber of processing 
        count is increased and the available threads for new requests willbe limited. Consequently, the 
        requests will be queued until thread is available to process. This would result in your api app getting 
        slow or giving slow responses.
    </p>
    <p>Consequently, the requests will be queued until thread is available to process. This would result 
        in your api app getting slow or giving slow responses. One way to overcome this problem is to uses
        concurrency or asynchronous programming when making calls to web API's.</p>
    <h4  style={{color: "orangered"}}>What is the event-loop in Javascript and how does it relate to Concurrency?</h4>
    <p>Javascript engine is single threaded. It can do one thing at a time. It can’t pause execution of one 
        function and do another thing and comes back to the paused function later, like C. It has to complete 
        execution of one code then move to another. This can be thought of as synchronous programming.
    </p>
    <p>asynchronous programming allows for events to executed concurrently (and independently)
        of each other. In Javascript asynchronous execution can be accomplished by using call-backs,
        promises and async/await functions.
    </p>
    <p>So although the code javascript is executed line by line via the event loop, asychronous programming (via
        the above functions) allows for different code to be run concurrently and independently of each other in 
        JavaScript.
    </p>
    <br />
    <h2  style={{color: "midnightblue"}}>Compare the way Oracle and MongoDB support database Concurrency</h2>
    <p>Concurrency is the ability of a database to allow multiple users to co-exist and have transactions 
        that access (and potentially modify) the same record(s).</p>
    <p>Oracle uses a technique known as Multi-version Concurrency Control (MVCC) to implement its 
        consistency model. This design allows Oracle to not lock each transaction out. When a record is being 
        written and read at the same time by two different users (transactions) Oracle gives the reader the
        previous copy. This is also the foundation of Oracle’s concurrency model.</p>
    <p>MongoDB uses multi-granularity locking that allows operations to lock at the global, database or 
        collection level, and allows for individual storage engines to implement their own concurrency control 
        below the collection level (e.g., at the document-level). MongoDB uses reader-writer locks that allow 
        concurrent readers shared access to a resource, such as a database or collection.</p>
    </Layout>
   )