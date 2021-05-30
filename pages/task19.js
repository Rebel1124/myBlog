//Import the Link API to support client-side navigation
import Link from 'next/link'
import Layout from '../components/MyLayout'
import Image from 'next/image'

export default () => (
    <Layout>
    <br />
    <h1  style={{color: "red"}}>Task 19</h1>
    <br />
    <h2  style={{color: "midnightblue"}}>What is Big O notation and Why should web developers know about it?</h2>
    <p> Big O notation is used in Computer Science to describe the performance or complexity of an algorithm. 
        Big O specifically describes the worst-case scenario, and can be used to describe the execution time 
        required or the space used (e.g. in memory or on disk) by an algorithm. Essentially, it is used to 
        determine the efficiency of an algorithm with respect to the number of inputs. In other words, its
        how we can measure the performance or runtime of an alorithm.</p>
    
    <p>It is important to web developerd as it is a tool that can be used to determine the best algorith for 
        solving a problem - thus improving our own code.</p>
    <br />
    <h2  style={{color: "midnightblue"}}>Explain what a quadratic function (O(n2)) is</h2>
    <p>Anytime you see an algorithm or a function with nested iteration(s), 
        it would be safe to assume the time complexity is quadratic. Because there is more than one iteration in the 
        algorithm, it would stand that the run time is longer. As a result, it’s only logical that the run time would 
        be rated horrible compared to a constant or linear run time.</p>
        <br />
        <h3  style={{color: "orangered"}}>Time Complexity: O(n2) — Quadratic</h3>
        <br />
        <Image
        src="/static/images/quadratic.jpg" alt="myPic" width={300} height={250} />
        <br />
    <p>The above quadratic function s comparing and sorting the array by going through each element. The first 
        iteration goes through every element in the array, while the second iteration helps to compare each element 
        in the array (allowing us to sort if the condition is met).</p>
    <br />
    <h2  style={{color: "midnightblue"}}>Compare a linear search with a binary search algorithm</h2>
    <br />
    <h3  style={{color: "orangered"}}>What is Linear Search</h3>
    <p>Linear search is a simple searching algorithm. Here, the searching occurs from one item after the other. 
        That is; this algorithm checks every item and checks for a matching item of that. If the item is not
         present, searching continues until the end of the data. Therefore, linear search is an algorithm that 
         allows going through each element in an array to locate the given item.</p>
    <p>In a linear search, the time consumption or the number of comparisons to search an element helps to 
        determine the efficiency of the algorithm. If the element we search is in the first position of the data 
        structure, it requires only one comparison. When the required element is in the last position, it requires 
        an N number of comparisons to find the element. Here, the N refers to the number of data items.</p>
    <br />
    <h3  style={{color: "orangered"}}>What is Binary Search</h3>
    <p>Binary search is a fast algorithm. But, it is necessary to sort the data items before performing a binary search. 
        It finds the item by comparing the middle most item of the collection. Hence, the binary search takes less time 
        to search a given item with less number of comparisons as it involves finding the middle element and comparing 
        the middle element with the element to search.</p>
    <p>In a binary search, if the middle element is the required element, that index returns. If the middle item is higher 
        than the searched item, then the searched item is in the left subarray of the middle item. Otherwise, the items are 
        in the right subarray of the middle item. And, this process continues on the subarray until the subarray size becomes zero. 
        In this algorithm, the number of items to search reduces each time.</p>
    <br />
    <h3  style={{color: "orangered"}}>Comparison</h3>
    <p>Linear search and binary search are two algorithms to search an element in a data structure such as an array.</p>
    <p>Linear search is an algorithm to find an element in a list by sequentially checking the elements of the list until 
        finding the matching element. Binary search is an algorithm that finds the position of a target value within a sorted array. 
        Thus, this is the main difference between linear search and binary search.</p>
    <p>One other difference between linear search and binary search is their efficiency. Binary search is more efficient than linear 
        search BUT Binary search is more complex than linear search.</p>
    <br />
    <h3  style={{color: "orangered"}}>Describe what the fibonacci sequence is</h3>
    <p>The Fibonacci Sequence is a peculiar series of numbers from classical mathematics that has found applications in advanced 
        mathematics, nature, statistics, computer science, and Agile Development.</p>
    <p>The Fibonacci sequence is a series of numbers where a number is the addition of the last two numbers, starting with 0, 
        and 1.</p>
    <br />
    <h3  style={{color: "orangered"}}>Compare efficiency of the recursive algorithm vs. my iterative algorithm</h3>
    <p>Both iteration and recursion are based on a control structure: Iteration uses a repetition structure;
        recursion uses a selection structure. An Iterative algorithm will use looping statements such as for loop, 
        while loop or do-while loop to repeat the same steps whicle a Recursion algorith, a module (function) calls
        itself again and again till the base condition (stopping condition) is satisfied.</p>
    <p>An Iterative algorithm will be faster than the Recursive algorithm because of the overheads like calling
        functions and registering stacks repeatedly. Many times the recursive algorithms are not effeicient as they 
        take more space and time.</p>
    <p>Recursive algorithms are mostly used to solve complicated problems when their application is easy 
        and effective.</p>
    </Layout>
   )