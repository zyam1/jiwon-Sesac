
//  import ClassComponet from './components/ClassComponent';
//  import FunctionComponent from './components/FuncComponent';
// import MyFetCoco from './components/MyFetCoco';
// import ThreePlusFive from './components/ThreePlusFive';
// import And from './components/And';
import FuncPropsEx from './components/FunctionPropsEx';
import './App.css'
import LikeFood from './components/LikeFood';
import Book from './components/Book';
import ClassText from './components/ClassText';

function App() {

  return <div className='App'>
   {/* <MyFetCoco />
   <ThreePlusFive />
   <And /> */}
   <FuncPropsEx title="SeSAC" content="hello World" number="5"/>
   <FuncPropsEx  content="hello World" number="5"/>
   {/* 객체로 넘긴다 */}

   <LikeFood food="cocacola"/>
   <LikeFood />

   <hr/>
   <Book title="나의 하루는 4시40분에 시작된다" autor="김유진" price="13500원" type="자기계발서"/>
   <hr/>
   <ClassText  valid={() => {
    console.log('콘솔 출력 성공');
    
  }}/>

  
  </div>;
}


export default App;
