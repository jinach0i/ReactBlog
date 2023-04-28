import logo from '../assets/img/logo.png';
export default function Header() {
    return(
        <header id="header">
            <div className="innerWrap">
                <div className="inner">
                    <div className="logobox">
                        <h1><a href="./index.html"><img src={logo} alt="logo" /></a></h1>
                    </div>
                </div>
                <nav id="gnb">
                    <div className="bg"></div>
                    <ul>
                        <li><a href="#">List</a></li>
                        <li><a href="#">Journal</a></li>
                    </ul>
                </nav>
                <button id="gnbBtn"></button>
            </div>
            <nav id="gnbMob"></nav>
            <button id="gnbMobBtn"></button>
        </header>
        )
};
