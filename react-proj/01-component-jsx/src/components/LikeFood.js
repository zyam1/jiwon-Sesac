function LikeFood (props){
    return(<>
    <div>제가 좋아하는 과일은 
        <div className="food-color">{props.food}</div>
        입니다</div>
    </>)
}

// import PropTypes from "prop-types"

LikeFood.defaultProps ={
    food:"pizza"
}

export default LikeFood;