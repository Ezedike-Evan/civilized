import { UserButton } from '@civic/auth/react'

const Navbar = ()=>{
    return(
        <nav>
            <div style={{display:'flex',alignItems:'center',gap:10}}>
                <img src='/logo.avif' style={{width:70, height:70}}/>
                <h4 style={{fontSize:50,textTransform:'uppercase',letterSpacing:3}}>Civilzed</h4>
            </div>
            <UserButton className='btn'/>
        </nav>
    )
}

export default Navbar