import logo from './../../img/logo.png'

const Menu = () => {
    return ( 
        <nav>
            <div className="logo"><img src= {logo} /></div>
            <ul>
                <li><a href="/">1item</a></li>
                <li>
                    <a href="/">2item</a>
                    <ul>
                        <li><a href="#">1subitem</a></li>
                        <li><a href="#">2subitem</a></li>
                        <li>
                            <a href="#">3subitem</a>
                            <ul>
                                <li><a href="#">1subitem</a></li>
                                <li><a href="#">2subitem</a></li>
                                <li><a href="#">3subitem</a></li>
                            </ul>
                        </li>
                    </ul>    
                </li>
               
            </ul>
                
        </nav>
     );
}
 
export default Menu;