import { UserButton } from '@civic/auth/react'

const Navbar = ()=>{
    return(
        <nav>
            <div style={{display:'flex',alignItems:'center',gap:10}}>
                <img src='/logo.avif'/>
                <h4>Civilzed</h4>
            </div>
            <UserButton className='btn'/>
        </nav>
    )
}

export default Navbar