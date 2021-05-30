//Import the Link API to support client-side navigation
import Link from 'next/link'
import Layout from '../components/MyLayout'

export default () => (
    <Layout>
    <br />
    <h1  style={{color: "red"}}>Task 21</h1>
    <br />
    <h2  style={{color: "midnightblue"}}>Explain what hashing is and what it is used for</h2>
    <p>Hashing has to do with taking a certain value (for example your password), 
        applying some kind of mathematical operation to it (called a hashing algorithm or a hashing function) 
        and getting the resulting changed value (known as a hash or hash value or digest message).</p>
    <p>There are many important reasons for using hashing. One application of hashing is using it to store passwords in 
        databases. Hashing can also be used for version control. Hashing is also often used to create hash tables.</p>
    <br />
    <h2  style={{color: "midnightblue"}}>Explain what a hash table is and what the benefits of this data structure are</h2>
    <p>Hashing functions that receive a string or number value as input and produce an integer as output are types 
        of hashing algorithms that are used to create hash tables. Hash tables store key-value pairs and as such is a 
        data structure that makes finding data a lot quicker. Hash tables make it much quicker to access data; O(1) 
        as compared to a binary search’s O(log N).</p>
    <br />
    <h2  style={{color: "midnightblue"}}>Explain what the difference is between hashing and encryption</h2>
    <p>hashing and encryption are for data encoding purposes, so data can’t be misused by any unauthorized 
        entity such as any cybercriminals. At the same time, it is being transferred and making it available 
        only to the privileged persons. But that’s also a truth that both are different from each other.</p>
    <p>In other words, hashing is for validating the integrity of the content by detecting modifications, whereas 
        encryption helps to encode data for maintaining security and data confidentiality. In short, encryption is a two-way function 
        that includes encryption and decryption whilst hashing is a one-way function that changes a plain text to a 
        unique digest that is irreversible</p>
    <br />
    <h2  style={{color: "midnightblue"}}>Explain what a Map object is and how it can be used</h2>
    <p>The Map object holds key-value pairs and remembers the original insertion order of the keys (i.e. Map 
        objects are collections of key/value pairs where both the keys and values may be arbitrary ECMAScript 
        language values. ). Any value (both objects and primitive values) may be used as either a key or a value. 
        Map object must be implemented using either hash tables or other mechanisms that, on average, provide access 
        times that are sublinear (almost linear) to the number of elements in the collection.</p>
    <h2  style={{color: "midnightblue"}}>Explain how collisions are handled when creating a hash table</h2>
    <p>A collision is when two or more keys have the same hash value and are thus given the same index number in the hash table. 
        Collisions can be handles by using either seperate chaining or open addressing:</p>
    <ul>
        <li>Seperate Chaining - if the position is already full, put the hash value in a list associated
            with that index.</li>
        <li>Open Addressing - if the position is already taken, put the value in another open position 
            in the hash table.
        </li>
    </ul>
    <br />
    <h2  style={{color: "midnightblue"}}>Explain the 3 most common methods for open addressing</h2>
    <p>With open addressing, a hash collision is resolved by 'probing' or searching through alternative 
        locations in the array (the probe sequence) until either the target record is found or an unused array
        slot is found (indicating that there is no such key in the table). Well known probe sequences include:</p>
    <ul>
        <li>Linear Probing - in which the interval between probes is fixed (often set to 1).</li>
        <li>Quadratic Probing - in which the interval between probes increases quadratically (hence, 
            the indices are described by a quadratic function).</li>
        <li>Double Hashing - in which the interval between probes is fixed for each record but is 
            computed by another hash function.</li>
    </ul>
    <br />
    <h2  style={{color: "midnightblue"}}>Explain how hashing is used in JavaScript to improve the security of your applications</h2>
    <p>Hashing is a function from some bit string (usually variable length) to another bit string 
        (usually smaller, and of fixed length). Hashing is used in databases for data retrieval, and in 
        in-memory data structures called hash tables. It allows us to reduce arbitrary data, such as a 
        character string or a complicated object with many fields, to a binary number which can then be 
        used directly as an index into a sparse array to fetch the associated data (with some details for 
        handling hash collisions).</p>
    <p>In secure computing, cryptographic hashes are used to digest data into some representative, small bitstring. 
        Cryptographic functions have different requirements. They are designed to be difficult to reverse (to be 
        "trap door" or "one way" functions). Not only that, but an important requirement is that it has to be 
        difficult to find, for a given plaintext and hash value, another plaintext which produces the same hash. 
        Hashing can be used not only for passwords, but as a checksum for verifying data integrity and as part of 
        the implementation of digital signatures.</p>
    </Layout>
   )