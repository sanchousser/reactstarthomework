
import './App.css';


const myName = <h1>Aleks</h1>
const paragraph = <p>Ласкаво просимо до нашого сайту!</p>
const imgUrl = 'https://cdn.pixabay.com/photo/2021/08/02/17/56/lighthouse-6517457_1280.jpg'
const imgAlt = 'Tower on the beach'
const img = <img width="250" src={imgUrl} alt={imgAlt} />
const data = { siteName: "Google", url: "https://www.google.com/" }
const link = <a href={data.url}>Favourite website: {data.siteName}</a>
const firstNum = 10;
const secondNum = 3;
const sum = <p>{firstNum + secondNum}</p>;
const colors = ['Red', 'White', 'Black', 'Grey'];

const ColorList = () => {
  return (
    colors.map(color => {
      return (
        <li>{color}</li>
      )
    })
  )
}

const content =
  <div>
    {myName}
    {paragraph}
    {img}
    <br/>
    {link}
    {sum}
    <ul>
    <ColorList />
    </ul>
  </div>

function App() {
  return content
}

export default App;
