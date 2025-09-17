
import Form from "../Form/Form";
import Posts from "../Posts/Posts";

const Home = () => {
  return (
    <div>
      <div className={`grid lg:grid-cols-5 lg:grid-rows-4 mx-10 gap-4 `}>
        <div className={`lg:col-span-4 lg:row-span-4`}>
          <Posts/>
        </div>
        <div className={`lg:col-span-1 lg:row-span-4 `}>
          <Form/>
        </div>
      </div>
    </div>
  )
}

export default Home
