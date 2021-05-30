//Import the Link API to support client-side navigation
import Link from 'next/link'
import Layout from '../components/MyLayout'

/* Notice in the example below how we render static images with Next.js:
Create a folder called static in your project root directory. From your code you can then reference those files with /static/ URLs (see<img src={`/static/art/${props.data.image}.jpg`} alt=""/>) 
Note: Don't name the static directory anything else. The name is required and is the only directory that Next.js uses for serving static assets.*/
export default () => (
	<Layout>
        <br />
	    <h1 style={{color: "red"}}>Hyperiondev - Interview Prep Assignments</h1>
      <h2  style={{color: "midnightblue"}}>Tasks 18 - Tasks 21</h2>
      <p>This blog is my research and findings on the interview preperation questions for Tasks 18 - Task21 (level 3) of
        the Hyperionddev Web Development Bootcamp.</p>
  </Layout>
)
    