//Remember that component names should always start with a Capital letter.

/*Since Next.js is used to create server-rendered pages, adding a link using a normal <a> tag would cause a link that would be navigated to via the server. 
This is obviously not always necessary. 
To support client-side navigation (this takes place in the browser, without making a request to the server) we use Next.js’ Link API.*/
import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/task18">
          <a style={linkStyle}>Concurrency</a>
        </Link>
        <Link href="/task19">
          <a style={linkStyle}>Big O Notation</a>
        </Link>
        <Link href="/task20">
          <a style={linkStyle}>Interfaces</a>
        </Link>
        <Link href="/task21">
          <a style={linkStyle}>Hashing</a>
        </Link>
    </div>
)

export default Header