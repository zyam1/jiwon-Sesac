import { Link } from "react-router-dom";

export default function Header(){
    return(<>
    <header className="Header">
         <div className="logo">Router Study</div>
        <nav>
            <div>
                {/* a태그는 페이지를 새로고침하면서,페이지 이동을 시킴 */}
                {/* Link 컴포넌트는 컴포넌트만 변경 */}
                <Link to="/">Home</Link>
            </div>
            <div>
                <Link to="/products">Product</Link>
            </div>
            <div>
                <Link to="/photos">Phtos</Link>
            </div>
        </nav>
    </header>
       
    </>)
}