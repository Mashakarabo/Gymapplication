import './navigation.css'


function NavBar(){
    return(
        <div className="Nav-igation">
            <div className="Logo">
                <h1>GYMFITNESS</h1>
            </div>
            <ul>
                <li><a href="#section-1">HOME</a></li>
                <li><a href="#section-2">WARMUP</a></li>
                <li><a href="#section-3">WORKOUT</a></li>
                <li><a href="#section-4">MEAL</a></li>


            </ul>
        </div>

    )
}

export default NavBar;